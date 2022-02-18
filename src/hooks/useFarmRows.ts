//@ts-nocheck
import useFarms from "./useFarms";
import useAllStakedValue, { StakedValue } from "./useAllStakedValue";
import BigNumber from "bignumber.js";
import { Farm } from "../contexts/Farms";
import DefaultApy from "../sushi/lib/apy.json";
import { supportedChainId, contractAddresses } from "src/sushi/lib/constants";
import useTokenPrice from "src/hooks/useTokenPrice";

export interface FarmWithStakedValue extends Farm, StakedValue {}

const useFarmRows = () => {
  const [farmRows] = useFarms();
  return {
    farmRows,
  };
};

export default useFarmRows;
