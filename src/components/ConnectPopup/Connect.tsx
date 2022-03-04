import React, { useEffect } from "react";
import styled from "styled-components";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { chainName, chainRPCs, supportedChainId } from "src/sushi/lib/constants";

import TPIcon from "../../assets/wallet_logo/TokenPocket.svg";
import BitkeepIcon from "../../assets/wallet_logo/bitkeep.svg";
import MathWalletIcon from "../../assets/wallet_logo/mathWallet.svg";
import MetamaskIcon from "../../assets/wallet_logo/metamask.svg";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";

interface Props {
  change: Function;
}
const Connect: React.FC<Props> = (props) => {
  const context = useWeb3React<Web3Provider>();

  let { change } = props;    
  let show = sessionStorage.getItem("show") ? Number(sessionStorage.getItem("show")) : 0;
  // 登录点击 ×
  const closeConnect = () => {
    document.body.style.cssText = "overflow:visible;height:100%;";
    change();
    sessionStorage.setItem("show", "0");
  };

  const {
    connector,
    library,
    chainId,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;

  const connectNetwork = (type: any) => {
    var window1: any = window;
    if (window1?.ethereum?.chainId !== "0X" + supportedChainId.toString(16)) {
      handleswitchnet(supportedChainId).then(() => {
        connectWallet(type);
      });
    } else {
      connectWallet(type);
    }
  };

  const handleswitchnet = async (inputValue: any) => {
    var window1: any = window;
    try {
      await window1?.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + inputValue.toString(16) }],
      });
      // setSelectValue1(inputValue)
    } catch (_switchError) {
      let switchError: any = _switchError;
      // if (switchError.code === 4902) {
      try {
        await window1?.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            JSON.parse(
              JSON.stringify({
                rpcUrls: [chainRPCs[supportedChainId]],
                chainId: "0x" + inputValue.toString(16),
                chainName: chainName[supportedChainId],
              })
            ),
          ],
        });
        // connectNetwork()
      } catch (addError) {
        // handle "add" error
      }
      // }
      // handle other "switch" errors
    }
  };
  const connectWallet = (type: number) => {
    if (type === 1) {
      connect(injected, (err) => {
        console.log(err);
      });
    } else if (type === 2) {
      connect(walletconnect, (err) => {
        console.log(err);
      });
    }
    closeConnect();
  };

  useEffect(() => {
    connectWallet(1);
  }, []);
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
            <div
              className="connection-mode-item"
              onClick={() => {
                connectNetwork(1);
              }}
            >
              <div className="connect-logo">
                <img src={MetamaskIcon} alt="" />
              </div>
              <div className="text">Metamask</div>
            </div>
            <div
              className="connection-mode-item"
              onClick={() => {
                connectNetwork(1);
              }}
            >
              <div className="connect-logo">
                <img src={TPIcon} alt="" />
              </div>
              <div className="text">TokenPocket</div>
            </div>
            <div
              className="connection-mode-item"
              onClick={() => {
                connectNetwork(1);
              }}
            >
              <div className="connect-logo ">
                <img src={BitkeepIcon} alt="" />
              </div>
              <div className="text">Bitkeep</div>
            </div>
            <div
              className="connection-mode-item"
              onClick={() => {
                connectNetwork(1);
              }}
            >
              <div className="connect-logo">
                <img src={MathWalletIcon} alt="" />
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
  z-index: 20;
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
        background-image: linear-gradient(to right, #53c1ff, rgba(83, 193, 255, 0));
      }
      .title:after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        height: 250px;
        width: 3px;
        background-image: linear-gradient(to bottom, #53c1ff, rgba(83, 193, 255, 0));
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
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
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
        .connection-mode-item:nth-child(2) {
          .connect-logo {
            img {
              margin-top: 4px;
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
        background-image: linear-gradient(to top, #53c1ff, rgba(83, 193, 255, 0));
      }
      .connection-mode-list:after {
        content: "";
        position: absolute;
        right: 0px;
        bottom: -56px;
        width: 50%;
        height: 3px;
        background-image: linear-gradient(to left, #53c1ff, rgba(83, 193, 255, 0));
      }
      .close-box-bg {
        position: absolute;
        right: -60px;
        top: -26px;
        transform: rotate(45deg);
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        .close-box {
          position: relative;
          width: 190.86px;
          height: 45.61px;
          background: linear-gradient(180deg, #eb3f3f -1.01%, rgba(235, 63, 63, 0) 144.7%);
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
            background: linear-gradient(to bottom, #fff 24.99%, transparent 115.7%);
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
      background-image: linear-gradient(to right, #53c1ff, rgba(83, 193, 255, 0));
    }
  }
  /* mobile style start */
  @media screen and (max-width: 750px) {
    width: 100vw;
    height: 90vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    top: 10vh;
    .mask {
      .connect-box {
        width: 6.69rem;
        height: 7.86rem;
        background: linear-gradient(-135deg, transparent 0.6rem, #041733 0);
        .left-shadow {
          left: -0.24rem;
          top: 0;
          width: 0.25rem;
          height: 100%;
          box-shadow: 0.1rem 0px 0.28rem -0.08rem #00a3ff;
        }
        .top-shadow {
          left: 0px;
          top: -0.18rem;
          width: 100%;
          height: 0.2rem;
          box-shadow: -1rem 0px 0.28rem 0.05rem #00a3ff;
        }
        .bottom-shadow {
          left: 0px;
          bottom: -0.17rem;
          width: 100%;
          height: 0.2rem;
          box-shadow: -0.08rem 0px 0.28rem 0.05rem #00a3ff;
        }
        .right-shadow {
          right: -0.24rem;
          top: 0px;
          height: 100%;
          width: 0.2rem;
          box-shadow: -0.08rem 1.13rem 0.28rem 0.05rem #00a3ff;
        }
        .right-top-shadow {
          right: -0.52rem;
          top: -0.64rem;
          height: 2rem;
          width: 2rem;
          transform: rotate(45deg);
        }
        .right-top-shadow::before {
          position: absolute;
          left: 0.41rem;
          top: 1px;
          content: "";
          width: 70%;
          height: 50%;
          overflow: hidden;
          box-shadow: 0.07rem 0.06rem 0.28rem 0.06rem #00a3ff;
        }
        .title {
          font-size: 0.34rem;
          height: 1.6rem;
          text-align: center;
          line-height: 1.6rem;
        }
        .title:before {
          height: 0.03rem;
        }
        .title:after {
          width: 0.03rem;
          height: 2.5rem;
        }
        .connection-mode-list {
          .connection-mode-item {
            width: 4.67rem;
            height: 1.1rem;
            margin-bottom: 0.39rem;
            .text {
              font-size: 0.32rem;
            }
            .connect-logo {
              width: 0.7rem;
              height: 0.7rem;
              left: 0.25rem;
              top: 0.13rem;
              img {
                width: 0.55rem;
              }
            }
          }
        }
        .connection-mode-list:before {
          right: 0px;
          bottom: -0.65rem;
          height: 2.5rem;
          width: 0.03rem;
        }
        .connection-mode-list:after {
          right: 0px;
          bottom: -0.68rem;
          width: 50%;
          height: 0.03rem;
        }
        .close-box-bg {
          right: -0.9rem;
          top: -0.26rem;
          .close-box {
            width: 1.9086rem;
            height: 0.78rem;
            .close-button {
              left: 0.75rem;
              top: 0.35rem;
              width: 0.3rem;
              height: 0.35rem;
              font-family: Roboto;
              font-style: normal;
              font-weight: 300;
              font-size: 0.4rem;
              line-height: 0.35rem;
            }
          }
        }
      }

      .connect-box:before {
        width: 0.03rem;
      }
    }
  }
  /* mobile style end */
`;
// connect popup srtyle end
export default Connect;
