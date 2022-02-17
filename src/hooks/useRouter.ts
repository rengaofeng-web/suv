import { useHistory } from "react-router-dom";

function useRouter() {
  const history = useHistory();
  const push = history.push;
  const openInNewTab = (pathname: string) => {
    const historyObj = { pathname: pathname, ...history };
    const url = history.createHref(historyObj);
    window.open(url);
  };
  return { history, push, openInNewTab };
}

export default useRouter;
