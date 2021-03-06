import React, { useState } from "react";
import styled from "styled-components";
// 图片导入
import wholeBg from "../../assets/PC-config/bg2.jpg"; //整体背景图

const NftFarams: React.FC<{}> = () => {
  const [switchCurrent, setSwitchCurrent] = useState(true);
  const [switchActive, setSwitchActive] = useState(true);
  return (
    <FaramsStyle>
      <div className="content-box">
        <div className="content-item">
          <div className="left-blindBox">
            <img
              src={require("../../assets/PC-config/NFT/feichuan5.png").default}
              alt=""
            />
          </div>
          <div className="right-content">
            <div className="top">
              <div className="earned-box">
                <div className="right-boreder"></div>
                <div className="earned">
                  <div className="earned-number">
                    <div>Earned</div>
                    <div className="number">1,123,155.12</div>
                  </div>
                  <div className="harvest">Harvest</div>
                </div>
              </div>
              <div className="staked">
                <div>staked</div>
                <div>1,123,155.12</div>
              </div>
            </div>
            <div className="bottom">
              <div className="container">
                <div className="switch-head">
                  <div className="approve">Approve</div>
                  <div
                    className={switchCurrent ? "deposit active" : "deposit"}
                    onClick={() => {
                      setSwitchCurrent(true);
                    }}
                  >
                    Deposit
                  </div>
                  <div
                    className={!switchCurrent ? "withdraw active" : "withdraw"}
                    onClick={() => {
                      setSwitchCurrent(false);
                    }}
                  >
                    Withdraw
                  </div>
                </div>
                <div className="switch-content">
                  <div
                    className="switch-content-item"
                    style={{ display: switchCurrent ? "block" : "none" }}
                  >
                    <div className="title">Available:124613563156515</div>
                    <div className="uinput">
                      <input
                        type="number"
                        value="123456789132"
                        readOnly={true}
                      />
                      <div className="max">MAX</div>
                    </div>
                    <div className="button">Deposit</div>
                  </div>
                  <div
                    className="switch-content-item"
                    style={{ display: !switchCurrent ? "block" : "none" }}
                  >
                    <div className="title">Available:124613563156515</div>
                    <div className="uinput">
                      <input
                        type="number"
                        value="123456789132"
                        readOnly={true}
                      />
                      <div className="max">MAX</div>
                    </div>
                    <div className="button">Withdraw</div>
                  </div>
                </div>
              </div>
              <div className="right-border"></div>
            </div>
          </div>
        </div>
        <div className="split-line"></div>
        <div className="content-item">
          <div className="left-blindBox">
            <img
              src={require("../../assets/PC-config/NFT/feichuan3.png").default}
              alt=""
            />
          </div>
          <div className="right-content">
            <div className="top">
              <div className="earned-box">
                <div className="right-boreder"></div>
                <div className="earned">
                  <div className="earned-number">
                    <div>Earned</div>
                    <div className="number">1,123,155.12</div>
                  </div>
                  <div className="harvest">Harvest</div>
                </div>
              </div>
              <div className="staked">
                <div>staked</div>
                <div>1,123,155.12</div>
              </div>
            </div>
            <div className="bottom">
              <div className="container">
                <div className="switch-head">
                  <div className="approve">Approve</div>
                  <div
                    className={switchActive ? "deposit active" : "deposit"}
                    onClick={() => {
                      setSwitchActive(true);
                    }}
                  >
                    Deposit
                  </div>
                  <div
                    className={!switchActive ? "withdraw active" : "withdraw"}
                    onClick={() => {
                      setSwitchActive(false);
                    }}
                  >
                    Withdraw
                  </div>
                </div>
                <div className="switch-content">
                  <div
                    className="switch-content-item"
                    style={{ display: switchActive ? "block" : "none" }}
                  >
                    <div className="title">Available:124613563156515</div>
                    <div className="uinput">
                      <input
                        type="number"
                        value="123456789132"
                        readOnly={true}
                      />
                      <div className="max">MAX</div>
                    </div>
                    <div className="button">Deposit</div>
                  </div>
                  <div
                    className="switch-content-item"
                    style={{ display: !switchActive ? "block" : "none" }}
                  >
                    <div className="title">Available:124613563156515</div>
                    <div className="uinput">
                      <input
                        type="number"
                        value="123456789132"
                        readOnly={true}
                      />
                      <div className="max">MAX</div>
                    </div>
                    <div className="button">Withdraw</div>
                  </div>
                </div>
              </div>
              <div className="right-border"></div>
            </div>
          </div>
        </div>
      </div>
    </FaramsStyle>
  );
};
// NftFarams style start
const FaramsStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1541px;
  margin: auto;
  background-image: url(${wholeBg});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  .content-box {
    width: 1200px;
    height: 1041px;
    position: absolute;
    left: 50%;
    top: 176px;
    transform: translate(-50%, 0);
    background: linear-gradient(
      180deg,
      rgba(5, 22, 43, 0.8) 0%,
      rgba(5, 22, 43, 0.24) 106.72%
    );
    box-shadow: inset 0px 0px 60px #00a3ff;
    backdrop-filter: blur(10px);
    background: linear-gradient(
          -45deg,
          transparent 36px,
          rgba(4, 10, 58, 0.3) 0
        )
        bottom right,
      linear-gradient(45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom
        left,
      linear-gradient(135deg, #33bfeb 37px, rgba(4, 10, 58, 0.3) 0) top left,
      linear-gradient(-135deg, #33bfeb 38px, rgba(4, 10, 58, 0.3) 0) top right;
    background-size: 50% 51%;
    background-repeat: no-repeat;
    border-top: 5px solid #33bfeb;
    -webkit-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -moz-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -ms-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -o-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    box-sizing: border-box;
    padding: 48px 134px 66px;
    .content-item {
      position: relative;
      display: flex;
      .left-blindBox {
      }
      .right-content {
        padding-left: 54px;
        .top {
          display: flex;
          margin-top: 30px;
          .earned-box {
            position: relative;
            overflow: hidden;
            .earned {
              position: relative;
              height: 92px;
              width: 330px;
              background: rgba(14, 23, 42, 0.01);
              box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
              /* transform: matrix(-1, 0, 0, 1, 0, 0); */
              border-top: 3px solid #19d3df;
              -webkit-clip-path: polygon(
                30px 0px,
                calc(100% - 0px) 0,
                100% 0px,
                100% calc(100% - 0px),
                calc(100% - 0px) 100%,
                0px 100%,
                0 calc(100% - 20px),
                0 30px
              );
              display: flex;
              color: #fff;
              box-sizing: border-box;
              padding: 20px 20px 0 36px;
              justify-content: space-between;
              .earned-number {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.8);
                padding-bottom: 10px;
                .number {
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 22px;
                  /* identical to box height */
                  color: #ffffff;
                }
              }
              .harvest {
                height: 53px;
                width: 110px;
                text-align: center;
                line-height: 53px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: #ffffff;
                background: linear-gradient(90deg, #07b7c3 0%, #23e6f2 100%);
              }
            }
          }
          .earned-box:before {
            content: "";
            position: absolute;
            left: -18px;
            top: 4px;
            width: 88px;
            height: 3px;
            background-image: linear-gradient(to left, #19d2dd, #18aab4);
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-48deg);
          }
          .earned-box:after {
            content: "";
            position: absolute;
            left: 0px;
            top: 33px;
            height: 62px;
            width: 3px;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
            /* -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-48deg); */
          }
          .right-boreder {
            position: absolute;
            right: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #19d1dc, transparent);
          }
          .staked {
            position: relative;
            height: 92px;
            width: 209px;
            background: rgba(14, 23, 42, 0.01);
            box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
            border-top: 3px solid #19d3df;
            box-sizing: border-box;
            margin-left: 26px;
            padding: 17px 0 0 24px;
            > div:first-child {
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.8);
            }
            > div:nth-child(2) {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 22px;
              color: #ffffff;
              padding-top: 10px;
            }
          }
          .staked:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
          }
          .staked:after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
          }
        }
        .bottom {
          position: relative;
          overflow: hidden;
          margin-top: 28px;
          .container {
            height: 246px;
            width: 567px;
            border-radius: 0px;
            box-sizing: border-box;
            background: rgba(14, 23, 42, 0.01);
            box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
            -webkit-clip-path: polygon(
              0px 0px,
              calc(100% - 0px) 0,
              100% 0px,
              100% calc(100% - 0px),
              calc(100% - 50px) 100%,
              50px 100%,
              0 calc(100% - 50px),
              0 50px
            );
            -webkit-clip-path: polygon(
              0px 0px,
              calc(100% - 0px) 0,
              100% 0px,
              100% calc(100% - 0px),
              calc(100% - 50px) 100%,
              37px 100%,
              0 calc(100% - 37px),
              0 37px
            );
            border-bottom: 3px solid #19d6e2;
            box-sizing: border-box;
            padding: 13px 29px 0 38px;
            .switch-head {
              display: flex;
              align-items: center;
              .approve {
                width: 94px;
                height: 43px;
                text-align: center;
                line-height: 43px;
                background: linear-gradient(90deg, #08c480 0%, #33eeab 100%);
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: #ffffff;
              }
              .deposit,
              .withdraw {
                padding-left: 33px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: rgba(255, 255, 255, 0.3);
                cursor: pointer;
                -moz-user-select: none; /*火狐*/
                -webkit-user-select: none; /*webkit浏览器*/
                -ms-user-select: none; /*IE10*/
                -khtml-user-select: none; /*早期浏览器*/
                user-select: none;
              }
              .active {
                color: #21e3ef;
              }
            }
            .switch-content {
              .switch-content-item {
                .title {
                  text-align: right;
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  color: rgba(255, 255, 255, 0.5);
                  padding-top: 5px;
                }
                .uinput {
                  height: 48px;
                  width: 499px;
                  border-radius: 0px;
                  margin-top: 15px;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.2) 0%,
                    rgba(255, 255, 255, 0.06) 100.6%
                  );
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  box-sizing: border-box;
                  padding: 0 18px 0 24px;
                  > input {
                    height: 100%;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    color: #ffffff;
                  }
                  .max {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    color: #18d6e2;
                    cursor: pointer;
                    -moz-user-select: none; /*火狐*/
                    -webkit-user-select: none; /*webkit浏览器*/
                    -ms-user-select: none; /*IE10*/
                    -khtml-user-select: none; /*早期浏览器*/
                    user-select: none;
                  }
                }
                .button {
                  cursor: pointer;
                  -moz-user-select: none; /*火狐*/
                  -webkit-user-select: none; /*webkit浏览器*/
                  -ms-user-select: none; /*IE10*/
                  -khtml-user-select: none; /*早期浏览器*/
                  user-select: none;
                  position: relative;
                  height: 48px;
                  width: 499px;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.5) 0%,
                    rgba(255, 255, 255, 0.15) 100.6%
                  );
                  backdrop-filter: blur(4px);
                  margin-top: 20px;
                  padding-left: 24px;
                  box-sizing: border-box;
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 48px;
                  color: #ffffff;
                }
                .button:before {
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 17px;
                  width: 34px;
                  height: 2px;
                  background: #fff;
                  border-top-right-radius: 3px;
                }
                .button:after {
                  content: "";
                  position: absolute;
                  top: 42%;
                  right: 16px;
                  width: 12px;
                  height: 2px;
                  background: #fff;
                  transform: rotate(45deg);
                  border-bottom-right-radius: 3px;
                  border-top-right-radius: 3px;
                }
              }
            }
          }
        }
        .bottom:after {
          content: "";
          position: absolute;
          left: -25px;
          bottom: 19px;
          width: 87px;
          height: 3px;
          background-color: #19d6e2;
          transform: rotate(45deg);
        }
        .bottom:before {
          content: "";
          position: absolute;
          left: 0px;
          top: -37px;
          width: 3px;
          height: 100%;
          background-image: linear-gradient(to top, #19d6e2, transparent);
        }
        .right-border {
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background-image: linear-gradient(to top, #19d6e2, transparent);
        }
      }
    }
    .split-line {
      height: 5px;
      width: 927px;
      border-radius: 0px;
      margin: 39px 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  .content-box:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #31bce8, transparent);
  }
  .content-box:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #31bce8, transparent);
  }
`;
// 导出组件
export default NftFarams;
// NftFarams style end
