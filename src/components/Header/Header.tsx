import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Control } from "react-keeper";
// 图片导入
import logo from "../../assets/PC-config/home/top_logo_white.svg";
// 组件导入
import Connect from "../ConnectPopup/Connect"; //connect popup
import ConnectButton from "../ConnectButton/ConnectButton"; //connect button
const Header: React.FC<{}> = () => {
  const nav = useRef(null);
  let [homeState, setState] = useState(false);
  const chengeState = () => {
    homeState ? setState(false) : setState(true);
  };
  //  显示下拉菜单
  const showSelct = (e: React.MouseEvent) => {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const target = e.target as HTMLDivElement;
    if (!target.classList.contains("item")) return false;
    const select = target.children[0] as HTMLDivElement;
    const state = select.style.display;
    removeStats();
    if (state === "block") {
      select.style.display = "none";
      target.classList.remove("active");
    } else {
      select.style.display = "block";
      target.classList.add("active");
    }
  };
  //   清除下拉菜单的状态
  const removeStats = () => {
    if (nav.current) {
      let parent = nav.current as HTMLDivElement;
      const brother = parent.children as HTMLCollection;
      for (let i = 0; i < brother?.length; i++) {
        const select = brother[i].children[0] as HTMLDivElement;
        if (select && select.classList.contains("select"))
          select.style.display = "none";
        brother[i].classList.remove("active");
      }
    }
  };
  useEffect(() => {
    document.onclick = () => {
      removeStats();
    };
    window.onhashchange = () => {
      removeStats();
    };
  });
  return (
    <HeaderStyle>
      {/* header */}
      <div className="header">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* header-nav */}
        <div className="header-nav">
          <div className="nav" ref={nav}>
            <div className="item staking" onClick={showSelct}>
              Staking
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div className="select-item">
                    <a href="*">Buy SUV</a>
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelable = true);
                      removeStats();
                      Control.go("/pool");
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
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelable = true);
                      removeStats();
                      Control.go("/suvBox");
                    }}
                  >
                    SUV Box
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelable = true);
                      removeStats();
                      Control.go("/nftFarams");
                    }}
                  >
                    NFT Farms
                  </div>
                  <div
                    className="select-item"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelable = true);
                      removeStats();
                      Control.go("/owned");
                    }}
                  >
                    Owned
                  </div>
                </div>
              </div>
            </div>
            <div className="item survivor">
              <a href="*">Survivor</a>
            </div>
            <div className="item" onClick={showSelct}>
              Community
              {/* select */}
              <div className="select">
                <div className="select-con">
                  <div className="select-item">
                    <a href="*">Bolg</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Discord</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Telegram</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Twitter</a>
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
                    <a href="*">FAQ</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Staking FAQ</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Litepaper</a>
                  </div>
                  <div className="select-item">
                    <a href="*">Whitepaper</a>
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
  .header {
    max-width: 1920px;
    min-width: 1200px;
    height: 168px;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 0);
    /* padding-right: 360px;
    padding-left: 360px; */
    .logo {
      width: 64px;
      padding-top: 22px;
      float: left;
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
        height: 80px;
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
          /* height: 94px; */
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
          background: linear-gradient(
                -45deg,
                #3aebf7 11px,
                rgba(5, 28, 65, 0.06) 0
              )
              bottom right,
            linear-gradient(45deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) bottom
              left,
            linear-gradient(135deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) top
              left,
            linear-gradient(-135deg, #3aebf7 11px, rgba(5, 28, 65, 0.06) 0) top
              right;
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
        top: 25%;
        display: block;
        content: "";
        width: 0px;
        height: 0px;
        /* background: rgba(255, 255, 255, 0.8); */
        border-radius: 5px;
        transform: rotate(-180deg);
        border-bottom: 11px solid rgba(255, 255, 255, 0.8);
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
      }
      .item:hover {
        cursor: pointer;
      }
      /* .item:hover .select {
        display: block;
      } */
      .active:after {
        transform: rotate(0deg) !important;
      }
      /* .item:active::after {
        transform: rotate(0deg);
      } */
      /* .item:hover::after {
        transform: rotate(0deg);
      } */

      .survivor::after {
        display: none;
      }
      .item:nth-child(2) {
        .select {
          left: 16px;
        }
      }
      .item:nth-child(4) {
        .select {
          left: -4px;
        }
      }
      .more {
        .select {
          left: -4px;
        }
      }
    }
  }
`;
// header style end

export default Header;
