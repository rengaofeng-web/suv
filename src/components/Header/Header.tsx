import React, { useState, useRef, useEffect, ReactElement, ReactEventHandler } from "react";
import styled from "styled-components";
import { useHistory, withRouter, RouteComponentProps } from "react-router-dom";

import isMobile from "is-mobile";
import { Control } from "react-keeper";

// pc图片导入
import logo from "../../assets/PC-config/home/top_logo_white.svg";
// mobile图片导入
import mobile_logo from "../../assets/Phone-config/home/top_logo_white.svg";
// 组件导入
import Connect from "../ConnectPopup/Connect"; //connect popup
import ConnectButton from "../ConnectButton/ConnectButton"; //connect button
const Header: React.FC<{}> = () => {
  const isM = isMobile();
  const nav = useRef(null);
  let [homeState, setState] = useState(false);
  const chengeState = () => {
    homeState ? setState(false) : setState(true);
  };
  //  显示下拉菜单
  const showSelct = (e: any) => {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const target = e.target as HTMLDivElement;
    if (!target.classList.contains("item")) return false;
    const select = target.children[0] as HTMLDivElement;
    const state = select.style.display;
    removeStats(false);
    if (state === "block") {
      select.style.display = "none";
      target.classList.remove("active");
    } else {
      select.style.display = "block";
      target.classList.add("active");
    }
  };
  //   清除下拉菜单的状态
  const removeStats = (clsMobile: boolean) => {
    if (nav.current) {
      const target = nav.current as HTMLDivElement;
      if (clsMobile) {
        target.style.display = "none";
      }
      let parent = nav.current as HTMLDivElement;
      const brother = parent.children as HTMLCollection;
      for (let i = 0; i < brother?.length; i++) {
        const select = brother[i].children[0] as HTMLDivElement;
        if (select && select.classList.contains("select")) select.style.display = "none";
        brother[i].classList.remove("active");
      }
    }
  };
  // 手机端显示导航
  const mobile_showNav = (e: any) => {
    e = e || window.event;
    // 阻止冒泡
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    if (nav.current) {
      const target = nav.current as HTMLDivElement;
      target.style.display === "none"
        ? (target.style.display = "block")
        : (target.style.display = "none");
    }
  };
  const history = useHistory();

  useEffect(() => {
    document.body.onclick = () => {
      isM ? removeStats(true) : removeStats(false);
    };
    window.onhashchange = () => {
      isM ? removeStats(true) : removeStats(false);
    };
  }, []);
  return (
    <HeaderStyle>
      {/* 顶部遮罩  */}
      {isM ? null : <div className="topMask"></div>}
      {/* header */}
      <div className="header">
        {/* logo */}
        <div
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={isM ? mobile_logo : logo} alt="" />
        </div>
        {isM ? (
          <div className="menu-button" onClick={mobile_showNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ) : null}
        {/* header-nav */}
        <div className="header-nav">
          <div className="nav" ref={nav} style={{ display: isM ? "none" : "flex" }}>
            <div className="item staking" onClick={showSelct}>
              Staking
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div className="select-item">
                    <a href="/#">Buy SUV</a>
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
                      removeStats(isM ? true : false);
                      history.push("/pool");
                    }}
                  >
                    Pool
                  </div>
                </div>
              </div>
            </div>
            <div className="item nft" onClick={showSelct}>
              NFT
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
                      removeStats(isM ? true : false);
                      history.push("/suvBox");
                    }}
                  >
                    SUV Box
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
                      removeStats(isM ? true : false);
                      history.push("/nftFarams");
                    }}
                  >
                    NFT Farms
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
                      removeStats(isM ? true : false);
                      history.push("/owned");
                    }}
                  >
                    Owned
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item survivor"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
              }}
            >
              Survivor {isM ? <span>(Coming soon)</span> : null}
              {/* select */}
              {isM ? null : (
                <div className="survivor-select">
                  <div className="select-item">
                    Coming
                    <br />
                    soon
                  </div>
                </div>
              )}
            </div>
            <div className="item community" onClick={showSelct}>
              Community
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div className="select-item">
                    <a href="/#">Discord</a>
                  </div>
                  <div className="select-item">
                    <a href="/#">Telegram</a>
                  </div>
                  <div className="select-item">
                    <a href="/#">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item more" onClick={showSelct}>
              More
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div className="select-item">
                    <a href="/#">FAQ</a>
                  </div>
                  <div className="select-item">
                    <a href="/#">Docs</a>
                  </div>
                  <div className="select-item">
                    <a href="/#">Readmap</a>
                  </div>
                  <div className="select-item">
                    <a href="/#">Audit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* connect button */}
          <ConnectButton change={chengeState}></ConnectButton>
        </div>
      </div>
      {/* connect  Popup*/}
      <Connect change={chengeState}></Connect>
    </HeaderStyle>
  );
};
// header style start
const HeaderStyle = styled.div`
  position: relative;
  .topMask {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 168px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(4, 10, 66, 0) 64.25%);
  }
  .header {
    /* max-width: 1920px;
    min-width: 1200px; */
    width: 60vw;
    height: 168px;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 0);
    .logo {
      width: 64px;
      padding-top: 22px;
      float: left;
      cursor: pointer;
      > img {
        width: 100%;
        height: 63px;
      }
    }
    /* nav */
    .header-nav {
      float: right;
      display: flex;
      padding-top: 28px;
      > .nav {
        display: flex;
      }
      .item {
        position: relative;
        color: rgba(255, 255, 255, 0.8);
        margin-right: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        height: 40px;
        line-height: 43px;
        position: relative;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        a {
          color: rgba(255, 255, 255, 0.8);
        }
        .select {
          position: absolute;
          left: -50%;
          top: 50px;
          width: 147px;
          display: none;
          z-index: 10;
          /* 实现四个边角切割 */
          clip-path: polygon(
            15px 0px,
            calc(100% - 15px) 0,
            100% 15px,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            15px 100%,
            0 calc(100% - 15px),
            0 15px
          );
          background: linear-gradient(-45deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) bottom right,
            linear-gradient(45deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) bottom left,
            linear-gradient(135deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) top left,
            linear-gradient(-135deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) top right;
          background-size: 300px 200px;
          background-repeat: no-repeat;
          border: 1px solid #3aebf7;
          box-shadow: inset 0px 0px 10px #39ebf6;
          .select-con {
            box-sizing: border-box;
            box-shadow: inset 0px 0px 10px #39ebf6;
            padding-top: 21px;
            padding-bottom: 21px;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(6, 37, 60, 0.6) 6.38%,
              rgba(6, 37, 60, 0.3) 93.62%
            );
          }
          .select-item {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            padding-bottom: 10px;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
          }
          .select-item:hover {
            color: rgba(57, 235, 246, 1);
          }
          .select-item:hover a {
            color: rgba(57, 235, 246, 1);
          }
          .select-item:last-of-type {
            padding: 0;
          }
        }
      }
      .item::after {
        position: absolute;
        transition: all 0.5s;
        right: -27px;
        top: 50%;
        display: block;
        content: "";
        width: 0px;
        height: 0px;
        border-radius: 5px;
        transform: rotate(-180deg);
        border-bottom: 11px solid rgba(255, 255, 255, 0.8);
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
      }
      .item:hover {
        cursor: pointer;
      }
      .active:after {
        transform: rotate(0deg) !important;
      }
      .survivor {
        margin-left: 7px;
        margin-right: 37px;
        .survivor-select {
          display: none;
          color: #eff316;
          text-align: center;
          line-height: 18px;
          font-weight: normal;
          font-size: 14px;
        }
      }
      .survivor:hover {
        color: #fff;
      }
      .survivor:hover .survivor-select {
        display: block;
      }
      .survivor::after {
        display: none;
      }
      .item:nth-child(2) {
        .select {
          left: -45px;
        }
      }
      .item:nth-child(4) {
        .select {
          left: -9px;
        }
      }
      .more {
        .select {
          left: -38px;
        }
      }
    }
  }
  /* mobile style start */
  @media screen and (max-width: 750px) {
    .header {
      width: 7.5rem;
      height: 1.26rem;
      max-width: auto;
      min-width: auto;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.3) 100%);
      display: flex;
      align-items: center;
      .logo {
        float: none;
        width: 0.87rem;
        height: 0.86rem;
        margin-left: 0.4rem;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menu-button {
        margin-left: 3.3rem;
        .line {
          width: 0.6rem;
          height: 0.06rem;
          border-radius: 0.1rem;
          background: #fff;
          margin-bottom: 0.12rem;
        }
      }
      .header-nav {
        position: relative;
        .nav {
          position: fixed;
          left: 0;
          top: 12vh;
          flex-wrap: wrap;
          align-items: center;
          width: 100vw;
          background: rgba(1, 6, 44, 0.85);
          box-shadow: inset 0px 0px 0.5rem #53c1ff;
          backdrop-filter: blur(0.2rem);
          padding: 0.15rem 0;
          .item {
            width: 100%;
            height: auto;
            text-align: center;
            padding: 0;
            margin: 0;
            font-size: 0.34rem;
            line-height: 0.7rem;
            color: #fff;
            > a {
              color: #fff;
            }
            .select {
              position: relative;
              top: 0;
              left: 0;
              width: 100%;
              box-shadow: inset 0px 0px 0.1rem #39ebf6;
              clip-path: polygon(
                0.15rem 0px,
                calc(100% - 0.15rem) 0,
                100% 0.15rem,
                100% calc(100% - 0.15rem),
                calc(100% - 0.15rem) 100%,
                0.15rem 100%,
                0 calc(100% - 0.15rem),
                0 0.15rem
              );
              background: linear-gradient(-45deg, #3aebf7 0.11rem, rgba(5, 28, 65, 0.06) 0) bottom
                  right,
                linear-gradient(45deg, #3aebf7 0.11rem, rgba(5, 28, 65, 0.06) 0) bottom left,
                linear-gradient(135deg, #3aebf7 0.11rem, rgba(5, 28, 65, 0.06) 0) top left,
                linear-gradient(-135deg, #3aebf7 0.11rem, rgba(5, 28, 65, 0.06) 0) top right;
              .select-con {
                box-shadow: inset 0px 0px 0.1rem #39ebf6;
                padding-top: 0.39rem;
                padding-bottom: 0.46rem;
                .select-item {
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 0.32rem;
                  line-height: 0.37rem;
                  padding-bottom: 0.29rem;
                  color: rgba(255, 255, 255, 0.8);
                }
                .select-item:last-child {
                  padding: 0;
                }
              }
            }
          }
          .item:after {
            top: 0.3rem;
            border-radius: 0.05rem;
            border-bottom: 0.11rem solid rgba(255, 255, 255, 1);
            border-left: 0.11rem solid transparent;
            border-right: 0.11rem solid transparent;
          }
          .survivor {
            color: rgba(255, 255, 255, 0.8);
            span {
              font-size: 0.28rem;
            }
          }
          .staking:after {
            top: 0.35rem;
            right: 2.8rem;
          }
          .nft:after {
            right: 3.1rem;
          }
          .community:after {
            top: 0.35rem;
            right: 2.45rem;
          }
          .more:after {
            top: 0.35rem;
            right: 3rem;
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// header style end

export default withRouter(Header);
