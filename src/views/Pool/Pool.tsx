import React from "react";
import styled from "styled-components";
import { Control } from "react-keeper";

// 图片导入
import wholeBg from "../../assets/PC-config/bg2.jpg"; //整体背景图
const Pool: React.FC<{}> = () => {
  return (
    <PoolStyle>
      <div className="mask">
        <div className="content">
          <div className="pool-list">
            <div className="list-header">
              <div className="pool">POOL</div>
              <div className="tvl">TVL</div>
              <div className="apr">APR</div>
            </div>
            <div className="list">
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/SUV.svg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">SUV</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div
                    className="details"
                    onClick={() => {
                      Control.go("/details");
                    }}
                  >
                    DETAILS
                  </div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo angle-mark">
                      <img
                        src={
                          require("../../assets/PC-config/pool/SUV.svg").default
                        }
                        alt=""
                      />
                      <div className="mark">
                        <img
                          src={
                            require("../../assets/PC-config/pool/BUSD.svg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text">SUV-BUSD</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/BUSD.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">BUSD</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/ETH.svg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">EHT</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/USDT.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">USDT</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/BNB.svg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">BNB</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/DAI.svg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">DAI</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/USDC.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">USDC</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/BTCB.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">BTCB</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
              <div className="list-item">
                <div className="pool">
                  <div className="logo-border">
                    <div className="logo">
                      <img
                        src={
                          require("../../assets/PC-config/pool/CAKE.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text">CAKE</div>
                </div>
                <div className="tvl">$1,131,475,658.83</div>
                <div className="apr">41.61%</div>
                <div className="button-box">
                  <div className="details">DETAILS</div>
                  <div className="stake">STAKE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PoolStyle>
  );
};
// Pool style start
const PoolStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1541px;
  margin: auto;
  background-image: url(${wholeBg});
  background-size: cover;
  .mask {
    position: absolute;
    left: 0;
    top: 140px;
    width: 100%;
    /* z-index: 10; */
    .content {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      width: 1200px;
      height: 1341px;
      box-shadow: inset 0px 0px 60px #00a3ff;
      box-sizing: border-box;
      padding: 0 78px;
      -webkit-clip-path: polygon(
        35px 0px,
        calc(100% - 35px) 0,
        100% 35px,
        100% calc(100% - 35px),
        calc(100% - 35px) 100%,
        35px 100%,
        0 calc(100% - 35px),
        0 35px
      );
      background: linear-gradient(
            -45deg,
            transparent 23px,
            rgba(4, 10, 58, 0.3) 0
          )
          bottom right,
        linear-gradient(45deg, transparent 23px, rgba(4, 10, 58, 0.3) 0) bottom
          left,
        linear-gradient(135deg, #2cb0de 26px, rgba(4, 10, 58, 0.3) 0) top left,
        linear-gradient(-135deg, #2cb0de 26px, rgba(4, 10, 58, 0.3) 0) top right;
      background-size: 50% 51%;
      background-repeat: no-repeat;
      border-top: 5px solid #2cb0de;
      /* border-bottom: none; */
      /* overflow: hidden; */
      .pool-list {
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        .list-header {
          height: 112px;
          line-height: 112px;
          display: flex;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          color: #fff;
          .pool {
            margin-right: 245px;
          }
          .tvl {
            margin-right: 209px;
          }
        }
        .list {
          .list-item {
            height: 120px;
            display: flex;
            color: #fff;
            align-items: center;
            border-top: 2px solid rgba(255, 255, 255, 0.2);
            .pool {
              width: 263px;
              display: flex;
              align-items: center;
              .logo-border {
                width: 68px;
                height: 68px;
                padding: 1px;
                background-image: linear-gradient(
                  to bottom,
                  rgba(109, 255, 229, 1),
                  rgba(109, 255, 229, 0.1)
                );
                border-radius: 50%;
              }
              .logo {
                height: 66.5px;
                width: 66.5px;
                border-radius: 50px;
                margin: 1px auto;
                /* border: 1px solid; */
                /* 
                border-image-source: linear-gradient(
                  180deg,
                  #6dffe5 0%,
                  rgba(109, 255, 229, 0.1) 100%
                ); */
                background: #02051d;
                box-shadow: inset 0px 0px 15px #5ebafd;
                /* backdrop-filter: blur(3px); */
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .text {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 22px;
                padding-left: 18px;
              }
            }
            .tvl {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              padding-right: 120px;
            }
            .apr {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
            }
            .button-box {
              display: flex;
              padding-left: 80px;
              > div {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                color: #ffffff;
                text-align: center;
                line-height: 58px;
                height: 58px;
                width: 154px;
              }
              .details {
                background: linear-gradient(
                  90deg,
                  rgba(80, 118, 255, 0.1) 0%,
                  rgba(121, 150, 255, 0.1) 100%
                );
                box-shadow: inset 0px 0px 20px #5ebafd;
                border-radius: 0px;
                margin-right: 35px;
              }
              .stake {
                background: linear-gradient(
                  90deg,
                  rgba(239, 55, 55, 0.1) 0%,
                  rgba(243, 101, 101, 0.1) 100%
                );
                box-shadow: inset 0px 0px 20px #ff5e5e;
              }
            }
          }
          .list-item:hover {
            cursor: pointer;
          }
          .angle-mark {
            position: relative;
            .mark {
              position: absolute;
              left: 0px;
              top: 0px;
              height: 31px;
              width: 31px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              box-shadow: inset 0px 0px 13px #5ebafd;
              backdrop-filter: blur(4px);
              left: 46px;
              top: -10px;
              display: flex;
              align-items: center;
              justify-content: center;
              > img {
                width: 16.87px;
                height: 16.87px;
              }
            }
          }
        }
      }
    }
    .content:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 5px;
      height: 100%;
      background-image: linear-gradient(to bottom, #31bce8, transparent);
    }
    .content:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 5px;
      height: 100%;
      background-image: linear-gradient(to bottom, #31bce8, transparent);
    }
  }
`;
// Pool style end
export default Pool;
