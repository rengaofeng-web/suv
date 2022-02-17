import { useMemo } from "react";

const useIsMobile = () => {
  const isMobile = useMemo(() => {
    const userAgentInfo = navigator.userAgent;

    const Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];

    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = true;
        break;
      }
    }
    return flag;
  }, []);

  return {
    isMobile,
  };
};

export default useIsMobile;
