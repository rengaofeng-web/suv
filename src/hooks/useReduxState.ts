import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import shallowEqual from 'shallowequal'
import { Language, Theme, ThemeType } from 'src/config/enum'
import cn from 'src/config/language/local/cn'
import en from 'src/config/language/local/en'
import { primaryBgC, primaryFontC } from 'src/theme/colors'
const useReduxState = () => {
  const mapState = useCallback(
    (state) => ({
      theme: state.theme,
      lang: state.lang,
      isMobile: state.isMobile,
      isConnect: state.isConnect,
      showWallet: state.showWallet,
    }),
    [],
  )
  const state = useMappedState(mapState, shallowEqual)
  const dispatch = useDispatch()
  const getTheme = (type?: number) => {
    //设置不同主题背景色
    if (state.theme === Theme.Light && type === ThemeType.bg) {
      return primaryFontC.light
    }
    if (state.theme === Theme.Dark && type === ThemeType.bg) {
      return primaryFontC.dark
    }
    //设置不同主题颜色
    if (state.theme === Theme.Light && type === ThemeType.word) {
      return primaryBgC.light
    }
    if (state.theme === Theme.Dark && type === ThemeType.word) {
      return primaryBgC.dark
    }

    // //设置不同主题背景图
    // if (state.theme === Theme.Light && type === ThemeType.bgI) {
    //   return `${classname} light-theme-bgI`
    // }
    // if (state.theme === Theme.Dark && type === ThemeType.bgI) {
    //   return `${classname} dark-theme-bgI`
    // }
    // //同时设置背景色和颜色
    // if (state.theme === Theme.Light && !type) {
    //   return `${classname} light-theme-bg light-theme-word`
    // }
    // if (state.theme === Theme.Dark && !type) {
    //   return `${classname} dark-theme-bg dark-theme-word`
    // }
  }

  const getLang = (word: keyof typeof cn.translation) => {
    if (state.lang === Language.CN) {
      return cn.translation[word]
    }
    if (state.lang === Language.EN) {
      return en.translation[word]
    }
    return ''
  }

  const changeTheme = (theme: string) => {
    dispatch({
      type: 'setTheme',
      theme: theme,
    })
  }

  const changeLang = (lang: string) => {
    dispatch({
      type: 'setLang',
      lang: lang,
    })
  }

  const getIsConnect = () => state.isConnect
  const getIsMobile = () => state.isMobile
  const getIsShowWallet = () => state.showWallet
  const changeIsMobile = () => {
    const WIDTH = 750
    const getWindowWidth = () => {
      const screenWidth = document.body.clientWidth
      document.documentElement.style.fontSize =
        ((1 * screenWidth) / WIDTH) * 100 + 'px'
      if (screenWidth < 1200) {
        if (!state.isMobile) {
          dispatch({
            type: 'setIsMobile',
            isMobile: true,
          })
        }
      } else {
        if (state.isMobile) {
          dispatch({
            type: 'setIsMobile',
            isMobile: false,
          })
        }
      }
    }
    getWindowWidth()
    // window.addEventListener('resize', getWindowWidth)
  }
  const changeIsShowWallet = (showWallet: boolean) => {
    dispatch({
      type: 'setShowWallet',
      showWallet: showWallet,
    })
  }
  const changeIsConnect = (isConnect: boolean) => {
    if (isConnect && !state.isConnect) {
      //localStorage.setItem("cho-connector", "inject");
      dispatch({
        type: 'setIsConnect',
        isConnect: isConnect,
      })
    } else if (!isConnect) {
      //localStorage.removeItem("cho-connector");
      dispatch({
        type: 'setIsConnect',
        isConnect: isConnect,
      })
    }
  }

  return {
    state,
    getIsConnect,
    getIsMobile,
    getTheme,
    getLang,
    getIsShowWallet,
    changeTheme,
    changeLang,
    changeIsMobile,
    changeIsConnect,
    changeIsShowWallet,
  }
}

export default useReduxState
