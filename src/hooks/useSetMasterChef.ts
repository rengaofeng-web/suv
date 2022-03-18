import React, { useEffect } from "react";
import { getMasterChefContract } from "src/sushi/utils";
import useSushi from "./useSushi";

const useSetMasterChef = (pid: number) => {
  const sushi = useSushi();
  let chef = getMasterChefContract(sushi);
  //   if (isSwitch && chef) {
  //     chef.options.address = "0x25F7eC164719FBE9Eece3F2DE42b5E770434b36C";
  //   } else {
  //     chef.options.address = "0x4Ea828c72fb4A8862165E96455f7035840f78Cf6";
  //   }
  if (chef) {
    if (pid === 2 || pid === 3 || pid === 4 || pid === 5 || pid == 6 || pid === 7 || pid === 8) {
      chef.options.address = "0x25F7eC164719FBE9Eece3F2DE42b5E770434b36C";
    } else {
      chef.options.address = "0x4Ea828c72fb4A8862165E96455f7035840f78Cf6";
    }
  }
  console.log(pid, chef);
};
export default useSetMasterChef;
