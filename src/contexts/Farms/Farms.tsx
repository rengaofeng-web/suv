import React, { useEffect, useState } from "react";
import useSushi from "../../hooks/useSushi";
import { getFarms } from "../../sushi/utils";
import Context from "./context";
import { Farm } from "./types";
import axios from "axios";
import useBlock from "src/hooks/useBlock";
import useFarmInfo from "src/hooks/useFarmInfo";
import BigNumber from "bignumber.js";
const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0);
  const sushi = useSushi();
  const farms = getFarms(sushi);
  // let pidArr = farms.map((item: Farm) => item.pid);
  let pidArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { balances: stakedValue, totalW: totalPoolWeight } = useFarmInfo(pidArr);
  const [farmInfos, setFarmInfos] = useState([]);
  const block = useBlock();
  const getFarmInfos = async () => {
    const result = await axios.get("/price.json");
    setFarmInfos(result.data);
  };
  // const totalPoolWeight = stakedValue.reduce((prev, current) => {
  //   return prev.allocPoint + current.allocPoint;
  // }, 0);
  useEffect(() => {
    getFarmInfos();
  }, [block]);
  const sushiPrice = new BigNumber(1000000000000000000000);
  const SUSHI_PER_BLOCK = 13.66;
  const BLOCKS_PER_YEAR = 28800 * 365;
  let newFarms = farms.map((farm: Farm, index: number) => {
    // const selectedItem: any = farmInfos.filter(
    //   (item: any, index) => item.pid === farm.pid
    // )[0];
    const apyNum =
      stakedValue[index] && stakedValue[index].totalAmount > 0
        ? sushiPrice
          // .times(farm.pid == 0 ? 3 : 1)
          .times(SUSHI_PER_BLOCK)
          .times(BLOCKS_PER_YEAR)
          .times(stakedValue[index].allocPoint)
          .div(totalPoolWeight)
          .div(stakedValue[index].totalAmount)
          .div(new BigNumber(10).pow(farm.decimals))
          .times(farmInfos[index])
        : new BigNumber(1000);
    ;
  const realFarmApr =
    apyNum && apyNum.isLessThan(1000)
      ? `${new BigNumber(apyNum.times(100).toFixed(0)).toNumber().toLocaleString("en-US")}%`
      : "1,000,000%";
  return {
    ...farm,
    ...stakedValue[index],
    stakedValue1: new BigNumber(stakedValue[index]?.totalAmount || 0)
      .div(new BigNumber(10).pow(farm.decimals))
      .times(farmInfos[index])
      .toFixed(2),
    apy: realFarmApr,
    totalPoolWeight,
    price: farmInfos[index],
  };
});
// console.log(newFarms);

// console.log(farmInfos);
return (
  <Context.Provider
    value={{
      farms: newFarms,
      unharvested,
    }}
  >
    {children}
  </Context.Provider>
);
};

export default Farms;
