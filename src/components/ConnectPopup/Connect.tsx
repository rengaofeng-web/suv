import React from "react";
import styled from "styled-components";
interface Props {
  change: Function;
}
const Connect: React.FC<Props> = (props) => {
  let { change } = props;
  let show = sessionStorage.getItem("show")
    ? Number(sessionStorage.getItem("show"))
    : 0;
  // 登录点击 ×
  const closeConnect = () => {
    document.body.style.cssText = "overflow:visible;height:100%;";
    change();
    sessionStorage.setItem("show", "0");
  };
  return (
    <ConnectStyle style={{ display: show ? "block" : "none" }}>
      <div className="mask">
        <div className="connect-box">
          <div className="left-shadow"></div>
          <div className="top-shadow"></div>
          <div className="bottom-shadow"></div>
          <div className="right-shadow"></div>
          <div className="right-top-shadow"></div>
          <div className="title">Connect your wallet</div>
          <div className="connection-mode-list">
            <div className="connection-mode-item">
              <div className="connect-logo">
                <img
                  src={
                    require("../../assets/PC-config/home/metamask.svg").default
                  }
                  alt=""
                />
              </div>
              <div className="text">Metamask</div>
            </div>
            <div className="connection-mode-item">
              <div className="connect-logo">
                <img
                  src={
                    require("../../assets/PC-config/home/tokenpocket.svg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="text">TokenPocket</div>
            </div>
            <div className="connection-mode-item">
              <div className="connect-logo ">
                <img
                  src={
                    require("../../assets/PC-config/home/bitkeep.svg").default
                  }
                  alt=""
                />
              </div>
              <div className="text">Bitkeep</div>
            </div>
            <div className="connection-mode-item">
              <div className="connect-logo">
                <img
                  src={
                    require("../../assets/PC-config/home/mathwallet.svg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="text">MathWallet</div>
            </div>
          </div>
          {/* close botton */}
          <div className="close-box-bg">
            <div className="close-box" onClick={closeConnect}>
              <div className="close-button">+</div>
            </div>
          </div>
        </div>
      </div>
    </ConnectStyle>
  );
};
// connect popup style start
const ConnectStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  .mask {
    /* 登录框 */
    .connect-box {
      position: absolute;
      width: 437px;
      height: 513px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      /* overflow: visible; */

      background: linear-gradient(-135deg, transparent 60px, #041733 0);
      .left-shadow {
        position: absolute;
        left: -24px;
        top: 0;
        width: 25px;
        height: 100%;
        box-shadow: 10px 0px 28px -8px #00a3ff;
      }
      .top-shadow {
        position: absolute;
        left: 0px;
        top: -18px;
        width: 100%;
        height: 20px;
        box-shadow: -100px 0px 28px 5px #00a3ff;
      }
      .bottom-shadow {
        position: absolute;
        left: 0px;
        bottom: -17px;
        width: 100%;
        height: 20px;
        box-shadow: -8px 0px 28px 5px #00a3ff;
      }
      .right-shadow {
        position: absolute;
        right: -24px;
        top: 0px;
        height: 100%;
        width: 20px;
        box-shadow: -8px 113px 28px 5px #00a3ff;
      }
      .right-top-shadow {
        position: absolute;
        right: -52px;
        top: -64px;
        height: 200px;
        width: 200px;
        background: transparent;
        transform: rotate(45deg);
        overflow: hidden;
      }
      .right-top-shadow::before {
        position: absolute;
        left: 41px;
        top: 1px;
        content: "";
        width: 70%;
        height: 50%;
        overflow: hidden;
        box-shadow: 7px 6px 28px 6px #00a3ff;
      }
      .title {
        position: relative;
        width: 100%;
        height: 105px;
        text-align: center;
        line-height: 105px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
      }
      .title:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 50%;
        height: 3px;
        z-index: 1;
        background-image: linear-gradient(
          to right,
          #53c1ff,
          rgba(83, 193, 255, 0)
        );
      }
      .title:after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        height: 250px;
        width: 3px;
        background-image: linear-gradient(
          to bottom,
          #53c1ff,
          rgba(83, 193, 255, 0)
        );
      }
      .connection-mode-list {
        position: relative;
        .connection-mode-item {
          width: 305px;
          height: 72px;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #53c1ff;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 20px #53c1ff;
          display: flex;
          align-items: center;
          padding-left: 25px;
          box-sizing: border-box;
          margin: auto;
          margin-bottom: 21px;
          .connect-logo {
            height: 46px;
            width: 46px;
            left: 25px;
            top: 13px;
            border-radius: 50%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 19px;
            overflow: hidden;
            img {
              width: 37px;
              height: 37px;
            }
          }
          .text {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            color: #ffffff;
          }
        }
        .connection-mode-item:nth-child(3) {
          .connect-logo {
            img {
              margin-top: 8px;
            }
          }
        }

        .connection-mode-item:hover {
          cursor: pointer;
        }
      }
      .connection-mode-list:before {
        content: "";
        position: absolute;
        right: 0px;
        bottom: -56px;
        height: 250px;
        width: 3px;
        background-image: linear-gradient(
          to top,
          #53c1ff,
          rgba(83, 193, 255, 0)
        );
      }
      .connection-mode-list:after {
        content: "";
        position: absolute;
        right: 0px;
        bottom: -56px;
        width: 50%;
        height: 3px;
        background-image: linear-gradient(
          to left,
          #53c1ff,
          rgba(83, 193, 255, 0)
        );
      }
      .close-box-bg {
        /* background: rgba(0, 0, 0, 1); */
        position: absolute;
        right: -60px;
        top: -26px;
        transform: rotate(45deg);
        /* box-shadow: 0px 0px 30px #00a3ff; */
        .close-box {
          position: relative;
          width: 190.86px;
          height: 45.61px;
          background: linear-gradient(
            180deg,
            #eb3f3f -1.01%,
            rgba(235, 63, 63, 0) 144.7%
          );
          .close-button {
            position: absolute;
            left: 113px;
            top: 5px;
            width: 17px;
            height: 35px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 30px;
            line-height: 35px;
            color: #fff;
            transform: rotate(-7deg);
            text-align: center;
            background: linear-gradient(
              to bottom,
              #fff 24.99%,
              transparent 115.7%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        .close-box:hover {
          cursor: pointer;
        }
      }
    }
    .connect-box:before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 50%;
      width: 3px;
      background-image: linear-gradient(to top, #53c1ff, rgba(83, 193, 255, 0));
      box-shadow: 0px 0px 30px #00a3ff;
    }
    .connect-box:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 50%;
      height: 3px;
      background-image: linear-gradient(
        to right,
        #53c1ff,
        rgba(83, 193, 255, 0)
      );
    }
  }
`;
// connect popup srtyle end
export default Connect;
