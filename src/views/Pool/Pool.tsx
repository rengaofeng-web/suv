import React from "react";
import styled from "styled-components";
import { Control } from "react-keeper";
import isMobile from "is-mobile";

// 图片导入
import wholeBg from "../../assets/PC-config/bg2.jpg"; //pc整体背景图
import mobile_wholeBg from "../../assets/Phone-config/bg2.jpg"; //mobile 整体背景图
interface DataItem {
  id: number;
  logo: string;
  angle_mark?: string;
  pName: string;
  tvl: string;
  apr: string;
}
const Pool: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  // 数据模拟
  const listData: Array<DataItem> = [
    {
      id: 1,
      logo: !isM
        ? require("../../assets/PC-config/pool/SUV.svg").default
        : require("../../assets/Phone-config/pool/SUV.svg").default,
      pName: "SUV",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 2,
      logo: !isM
        ? require("../../assets/PC-config/pool/SUV.svg").default
        : require("../../assets/Phone-config/pool/SUV.svg").default,
      angle_mark: !isM
        ? require("../../assets/PC-config/pool/BUSD.svg").default
        : require("../../assets/Phone-config/pool/BTCB.svg").default,
      pName: "SUV-BUSD",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 3,
      logo: !isM
        ? require("../../assets/PC-config/pool/BUSD.svg").default
        : require("../../assets/Phone-config/pool/BTCB.svg").default,
      pName: "BUSD",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 4,
      logo: !isM
        ? require("../../assets/PC-config/pool/ETH.svg").default
        : require("../../assets/Phone-config/pool/ETH.svg").default,
      pName: "EHT",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 5,
      logo: !isM
        ? require("../../assets/PC-config/pool/USDT.svg").default
        : require("../../assets/Phone-config/pool/USDT.svg").default,
      pName: "USDT",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 6,
      logo: !isM
        ? require("../../assets/PC-config/pool/BNB.svg").default
        : require("../../assets/Phone-config/pool/BNB.svg").default,
      pName: "BNB",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 7,
      logo: !isM
        ? require("../../assets/PC-config/pool/DAI.svg").default
        : require("../../assets/Phone-config/pool/DAI.svg").default,
      pName: "DAI",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 8,
      logo: !isM
        ? require("../../assets/PC-config/pool/USDC.svg").default
        : require("../../assets/Phone-config/pool/USDC.svg").default,
      pName: "USDC",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 9,
      logo: !isM
        ? require("../../assets/PC-config/pool/BTCB.svg").default
        : require("../../assets/Phone-config/pool/BTCB.svg").default,
      pName: "BTCB",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
    {
      id: 10,
      logo: !isM
        ? require("../../assets/PC-config/pool/CAKE.svg").default
        : require("../../assets/Phone-config/pool/CAKE.svg").default,
      pName: "CAKE",
      tvl: "$1,131,475,658.83",
      apr: "41.61%",
    },
  ];
  return (
    <PoolStyle>
      <div className="mask">
        <div className="content">
          <div className="pool-list">
            {!isM ? (
              <div className="list-header">
                <div className="pool">POOL</div>
                <div className="tvl">TVL</div>
                <div className="apr">APR</div>
              </div>
            ) : null}
            <div className="list">
              {listData.map((item, index) => (
                <div className="list-item" key={item.id}>
                  {isM ? (
                    <div className="left-title">
                      <div className="pool-tlt">POOL</div>
                      <div className="tvl-tlt">TVL</div>
                      <div className="apr-tlt">APR</div>
                    </div>
                  ) : null}
                  <div className="pool">
                    <div className="logo-border">
                      <div className={item.angle_mark ? "logo angle-mark" : "logo"}>
                        <img src={item.logo} alt="" />
                        {item.angle_mark ? (
                          <div className="mark">
                            <img src={item.angle_mark} alt="" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="text">{item.pName}</div>
                  </div>
                  <div className="tvl">{item.tvl}</div>
                  <div className="apr">{item.apr}</div>
                  <div className="button-box">
                    <div
                      className="details"
                      onClick={() => {
                        Control.go("/details");
                      }}
                    >
                      DETAILS
                    </div>
                    <div
                      className="stake"
                      onClick={() => {
                        Control.go("/stake");
                      }}
                    >
                      STAKE
                    </div>
                  </div>
                </div>
              ))}
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
      background: linear-gradient(-45deg, transparent 23px, rgba(4, 10, 58, 0.3) 0) bottom right,
        linear-gradient(45deg, transparent 23px, rgba(4, 10, 58, 0.3) 0) bottom left,
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
  /* mobile style start */
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    height: 100vh;
    width: 7.5rem;
    overflow: scroll;
    background-image: url(${mobile_wholeBg});
    background-repeat: repeat;
    background-size: cover;
    .mask {
      position: relative;
      left: 0;
      top: 0;
      padding-top: 1.86rem;
      .content {
        position: relative;
        left: 0;
        top: 0;
        transform: none;
        width: 100%;
        height: auto;
        box-shadow: none;
        box-sizing: border-box;
        padding: 0;
        -webkit-clip-path: none;
        background: none;
        border: none;
        .pool-list {
          .list {
            .list-item {
              position: relative;
              height: 4.81rem;
              width: 6.7rem;
              border: none;

              clip-path: polygon(
                0.4rem 0px,
                calc(100% - 0.4rem) 0,
                100% 0.4rem,
                100% calc(100% - 0.4rem),
                calc(100% - 0.4rem) 100%,
                0.4rem 100%,
                0 calc(100% - 0.4rem),
                0 0.4rem
              );
              background: linear-gradient(
                    -45deg,
                    rgba(51, 191, 235, 1) 0.28rem,
                    rgba(4, 10, 58, 0.3) 0
                  )
                  bottom right,
                linear-gradient(45deg, rgba(51, 191, 235, 1) 0.28rem, rgba(4, 10, 58, 0.3) 0) bottom
                  left,
                linear-gradient(135deg, rgba(51, 191, 235, 1) 0.28rem, rgba(4, 10, 58, 0.3) 0) top
                  left,
                linear-gradient(-135deg, rgba(51, 191, 235, 1) 0.28rem, rgba(4, 10, 58, 0.3) 0) top
                  right;
              background-size: cover;
              background-repeat: no-repeat;
              /* backdrop-filter: blur(10px); */
              border: 0.03rem solid rgba(51, 191, 235, 1);
              box-shadow: inset 0px 0px 0.6rem #00a3ff;
              margin: auto;
              display: block;
              box-sizing: border-box;
              padding: 0.39rem 0.65rem 0;
              margin-bottom: 0.4rem;
              .left-title {
                > div {
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 0.34rem;
                  /* identical to box height */
                  color: rgba(255, 255, 255, 0.8);
                  padding-bottom: 0.56rem;
                }
                .pool-tlt {
                }
              }
              .pool {
                position: absolute;
                left: 3.67rem;
                top: 0.39rem;
                width: auto;
                .logo-border {
                  width: 0.86rem;
                  height: 0.86rem;
                  .logo {
                    width: 0.855rem;
                    height: 0.855rem;
                    .mark {
                      width: 0.39rem;
                      height: 0.39rem;
                      left: 0.5rem;
                      top: -0.2rem;
                      img {
                        height: 0.21rem;
                      }
                    }
                  }
                }
                .text {
                  font-size: 0.32rem;
                  padding-left: 0.2rem;
                }
              }
              .tvl {
                position: absolute;
                left: 3.67rem;
                top: 1.67rem;
                font-size: 0.3rem;
                padding-right: 0;
              }
              .apr {
                position: absolute;
                top: 2.61rem;
                left: 3.67rem;
                font-size: 0.3rem;
              }
              .button-box {
                padding: 0;
                .details {
                  width: 2.63rem;
                  height: 0.8rem;
                  line-height: 0.8rem;
                  font-size: 0.34rem;
                  margin-right: 0.34rem;
                  box-shadow: inset 0px 0px 0.2rem #5ebafd;
                }
                .stake {
                  width: 2.63rem;
                  height: 0.8rem;
                  line-height: 0.8rem;
                  font-size: 0.34rem;
                  box-shadow: inset 0px 0px 0.2rem #ff5e5e;
                }
              }
            }
          }
        }
        .list-item:before {
          content: "";
          position: absolute;
          left: -0.15rem;
          top: 0.18rem;
          background: rgba(51, 191, 235, 1);
          width: 0.6rem;
          height: 0.03rem;
          transform: rotate(-45deg);
          z-index: 1;
        }
        .list-item:after {
          content: "";
          position: absolute;
          right: -0.11rem;
          top: 0.15rem;
          background: rgba(51, 191, 235, 1);
          width: 0.6rem;
          height: 0.03rem;
          transform: rotate(45deg);
          z-index: 1;
        }
        .list-item:first-child {
          .pool {
            .logo {
              img {
                height: 0.49rem;
              }
            }
          }
        }
        .list-item:nth-child(2) {
          .pool {
            .logo {
              > img {
                height: 0.49rem;
              }
              .mark {
                img {
                  height: 0.21rem;
                }
              }
            }
          }
        }
        .list-item:nth-child(3) {
          .pool {
            .logo {
              > img {
                height: 0.47rem;
              }
            }
          }
        }
        .list-item:nth-child(4) {
          .pool {
            .logo {
              > img {
                height: 0.54rem;
              }
            }
          }
        }
        .list-item:nth-child(5) {
          .pool {
            .logo {
              > img {
                height: 0.45rem;
              }
            }
          }
        }
        .list-item:nth-child(6) {
          .pool {
            .logo {
              > img {
                height: 0.5rem;
              }
            }
          }
        }
        .list-item:nth-child(7) {
          .pool {
            .logo {
              > img {
                height: 0.38rem;
              }
            }
          }
        }
        .list-item:nth-child(8) {
          .pool {
            .logo {
              > img {
                height: 0.48rem;
              }
            }
          }
        }
        .list-item:nth-child(9) {
          .pool {
            .logo {
              > img {
                height: 0.57rem;
              }
            }
          }
        }
        .list-item:nth-child(10) {
          .pool {
            .logo {
              > img {
                height: 0.5rem;
              }
            }
          }
        }
      }
      .content:after,
      .content:before {
        display: none;
      }
    }
  }
  /* mobile style end */
`;
// Pool style end
export default Pool;
