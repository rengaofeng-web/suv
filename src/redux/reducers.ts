export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "setTheme": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    case "setLang": {
      return {
        ...state,
        lang: action.lang,
      };
    }
    case "setIsMobile": {
      return {
        ...state,
        isMobile: action.isMobile,
      };
    }
    case "setIsConnect": {
      return {
        ...state,
        isConnect: action.isConnect,
      };
    }
    case "setShowWallet": {
      return {
        ...state,
        showWallet: action.showWallet,
      };
    }
    default:
      return state;
  }
}
