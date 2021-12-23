import React, { useState } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; //mobile 整体背景图
const Withdraw: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  let [current, setCurrent] = useState(true);
  return (
    <WithdrawStyle>
      <div className="content-box">
        <div className="head">
          <div className="left-logo">
            <div className="logo-border">
              <div className="logo">
                <img
                  src={
                    !isM
                      ? require("../../assets/PC-config/pool/SUV.svg").default
                      : require("../../assets/Phone-config/pool/SUV.svg").default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="text">SUV</div>
          </div>
        </div>
        <div className="content">
          <div className="switch-button">
            <div
              className={current ? "flexible active" : "flexible"}
              onClick={() => {
                setCurrent(true);
              }}
            >
              FLEXIBLE
            </div>
            <div
              className={current ? "locked" : "locked active"}
              onClick={() => {
                setCurrent(false);
              }}
            >
              LOCKED
            </div>
          </div>
          <div className="switch-content">
            <div className="switch-item" style={{ display: current ? "block" : "none" }}>
              <div className="amount-box">
                <div className="amount">Amount</div>
                <div className="balance">
                  Balance:
                  <span>0</span>
                </div>
              </div>
              <div className="amount-input">
                <input type="number" />
                <div className="max">MAX</div>
              </div>
              <div className="weight-box">
                <div className="weight">
                  Weight:
                  <span>1.0</span>
                </div>
                <div className="est">
                  Est APR:<span>20.80%</span>
                </div>
              </div>
            </div>
            <div className="switch-item" style={{ display: !current ? "block" : "none" }}>
              <div className="lock-up">
                <div className="left-lock">
                  <div className="title">Have been lock time</div>
                  <div className="days">18days</div>
                </div>
                <div className="right-lock">
                  <div className="title">Time remaining</div>
                  <div className="days">18days</div>
                </div>
              </div>
              <div className="lock">Lock up time：30days</div>
              <div className="amount-box">
                <div className="amount">Amount</div>
                <div className="balance">
                  Balance:
                  <span>0</span>
                </div>
              </div>
              <div className="amount-input">
                <input type="number" />
                <div className="max">MAX</div>
              </div>
              <div className="weight-box">
                <div className="est">
                  Est APR:<span>21.22%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="withdraw">WITHDRAW</div>
        </div>
      </div>
    </WithdrawStyle>
  );
};
// withdraw style start
const WithdrawStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  box-sizing: border-box;
  .head {
    position: relative;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-logo {
      display: flex;
      align-items: center;
    }
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
      background: #02051d;
      box-shadow: inset 0px 0px 15px #5ebafd;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      padding-left: 15px;
      font-size: 24px;
      color: #ffffff;
    }
  }
  .content-box {
    position: absolute;
    left: 50%;
    top: 202px;
    transform: translate(-50%, 0);
    width: 593px;
    box-shadow: inset 0px 0px 60px #00a3ff;
    box-sizing: border-box;
    padding: 0 70px 60px;
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
    background-size: 50% 50%;
    background-repeat: no-repeat;
    border-top: 5px solid #2cb0de;
    .content {
      .switch-button {
        display: flex;
        > div {
          width: 226px;
          height: 57px;
          background: #00001c;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 57px;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
        }
        .active {
          color: #ffffff;
          background: linear-gradient(91.76deg, #5378ff 1.52%, #7795ff 98.5%);
        }
      }
      .switch-item:first-child {
        .amount-box {
          display: flex;
          justify-content: space-between;
          padding: 42px 0 12px;
          > div {
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.7);
            span {
              color: #fff;
            }
          }
        }
        .amount-input {
          width: 453px;
          height: 57px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 2px solid rgba(85, 121, 255, 0.8);
          border-image: -webkit-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: -moz-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: -o-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: linear-gradient(to right, rgba(85, 121, 255, 0.8), rgba(162, 183, 255, 0.8))
            20 20;
          > input {
            width: 90%;
            height: 100%;
            font-size: 20px;
            color: #fff;
          }
          .max {
            width: 10%;
            margin-right: 9px;
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            cursor: pointer;
          }
        }
        .weight-box {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          font-weight: 600;

          > div {
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            > span {
              color: #fff;
            }
          }
        }
        .weight-box:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.007) 100%
          );
        }
      }
      .switch-item:last-child {
        .lock-up {
          height: 66px;
          display: flex;
          margin-top: 55px;
          > div {
            width: 50%;
            color: #fff;
            padding-top: 10px;
            box-sizing: border-box;
            padding-left: 9px;
            .title {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.8);
              padding-bottom: 5px;
            }
            .days {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              color: #ffffff;
            }
          }
          .left-lock {
            position: relative;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0) 106.17%
            );
            .days {
              text-align: right;
              padding-right: 35px;
            }
          }
          .left-lock::after {
            content: "";
            position: absolute;
            left: 218px;
            top: 0;
            width: 25px;
            height: 100%;
            background: #040925;
            transform: skew(30deg);
          }
          .right-lock {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 106.17%
            );
            .title {
              text-align: right;
              padding-right: 13px;
            }
            .days {
              padding-left: 32px;
            }
          }
        }
        .lock {
          font-family: Roboto;
          font-style: normal;
          font-size: 14px;
          line-height: 16px;
          color: rgba(255, 255, 255, 0.8);
          padding: 20px 0;
          width: 100%;
          position: relative;
        }
        .lock:after {
          content: "";
          width: 100%;
          height: 2px;
          display: block;
          position: absolute;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.007) 100%
          );
        }
        .amount-box {
          display: flex;
          justify-content: space-between;
          padding: 42px 0 12px;
          font-weight: 600;
          > div {
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            span {
              color: #fff;
            }
          }
        }
        .amount-input {
          width: 453px;
          height: 57px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 2px solid rgba(85, 121, 255, 0.8);
          border-image: -webkit-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: -moz-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: -o-linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
            20 20;
          border-image: linear-gradient(to right, rgba(85, 121, 255, 0.8), rgba(162, 183, 255, 0.8))
            20 20;
          > input {
            width: 90%;
            height: 100%;
            font-size: 20px;
            color: #fff;
          }
          .max {
            width: 10%;
            margin-right: 9px;
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            cursor: pointer;
          }
        }
        .weight-box {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          font-weight: 600;
          > div {
            font-family: Roboto;
            font-style: normal;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            > span {
              color: #fff;
            }
          }
        }
        .weight-box:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.007) 100%
          );
        }
      }
      .withdraw {
        width: 453px;
        height: 60px;
        margin-top: 40px;
        background: linear-gradient(90deg, #0dc4cf 0%, #20e4f0 100%);
        text-align: center;
        line-height: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: #fff;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        cursor: pointer;
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
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    height: 100vh;
    overflow: scroll;
    margin: auto;
    background: url(${mobile_wholeBg});
    background-size: cover;
    .content-box {
      width: 6.7rem;
      padding: 0 0.72rem 0.7rem;
      top: 2.36rem;
      -webkit-clip-path: polygon(
        0.38rem 0px,
        calc(100% - 0.38rem) 0,
        100% 0.38rem,
        100% calc(100% - 0.38rem),
        calc(100% - 0.38rem) 100%,
        0.38rem 100%,
        0 calc(100% - 0.38rem),
        0 0.38rem
      );

      background: linear-gradient(-45deg, transparent 23px, rgba(4, 10, 58, 0.3) 0) bottom right,
        linear-gradient(45deg, transparent 23px, rgba(4, 10, 58, 0.3) 0) bottom left,
        linear-gradient(135deg, #31bce8 0.28rem, transparent 0) top left,
        linear-gradient(-135deg, #31bce8 0.28rem, transparent 0);
      border-top: 0.05rem solid #2cb0de;
      .head {
        height: 1.71rem;
        .left-logo {
          .logo-border {
            width: 0.86rem;
            height: 0.86rem;
            .logo {
              width: 0.85rem;
              height: 0.85rem;
              img {
                width: 0.51rem;
                height: 0.49rem;
              }
            }
          }
          .text {
            padding-left: 0.2rem;
            font-size: 0.34rem;
          }
        }
      }
      .content {
        .switch-button {
          > div {
            width: 2.6358rem;
            height: 0.9rem;
            font-size: 0.3rem;
            line-height: 0.9rem;
          }
        }
        .switch-content {
          .switch-item:first-child {
            .amount-box {
              padding: 0.45rem 0 0.14rem;
              > div {
                font-size: 0.24rem;
              }
            }
            .amount-input {
              width: 99%;
              height: 0.84rem;
              input {
                width: 89%;
                font-size: 0.22rem;
              }
              .max {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 0.24rem;
                margin-right: 0.26rem;
              }
            }
            .weight-box {
              padding: 0.46rem 0 0.2rem;
              .weight {
                font-size: 0.2rem;
              }
              .est {
                font-size: 0.2rem;
              }
            }
          }
          .switch-item:last-child {
            .lock-up {
              height: 1.03rem;
              margin-top: 0.5rem;
              > div {
                width: 50%;
                color: #fff;
                position: relative;
                .title {
                  position: absolute;
                  left: 0;
                  top: 0;
                  padding: 0;
                }
                .days {
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
              .left-lock {
                position: relative;
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.3) 0%,
                  rgba(255, 255, 255, 0) 106.17%
                );
                .title {
                  left: 0.12rem;
                  top: 0.59rem;
                  font-size: 0.2rem;
                }
                .days {
                  left: 0.61rem;
                  top: 0.16rem;
                  font-size: 0.28rem;
                }
              }

              .left-lock::after {
                content: "";
                position: absolute;
                left: 2.48rem;
                top: 0;
                width: 0.35rem;
                height: 100%;
                background: #050c2f;
                transform: skew(30deg);
              }
              .right-lock {
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.3) 106.17%
                );
                .title {
                  left: 0.82rem;
                  top: 0.16rem;
                  font-size: 0.2rem;
                }
                .days {
                  left: 1.13rem;
                  top: 0.51rem;
                  padding: 0;
                  font-size: 0.28rem;
                }
              }
            }
            .lock {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 0.17rem;
              color: rgba(255, 255, 255, 0.8);
              padding: 0.16rem 0 0.19rem;
            }
            .amount-box {
              padding: 0.46rem 0 0.14rem;
              > div {
                font-size: 0.22rem;
              }
            }
            .amount-input {
              width: 99%;
              height: 0.84rem;
              input {
                width: 89%;
                font-size: 0.22rem;
              }
              .max {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 0.24rem;
                margin-right: 0.26rem;
              }
            }
            .weight-box {
              padding: 0.45rem 0 0.14rem;
              .est {
                font-size: 0.2rem;
              }
            }
          }
        }
        .withdraw {
          width: 5.26rem;
          height: 0.9rem;
          font-size: 0.34rem;
          line-height: 0.9rem;
          margin-top: 0.7rem;
        }
      }
      .content:before {
        width: 0.04rem;
      }
      .content:after {
        width: 0.04rem;
      }
    }
    .content-box:before {
      position: absolute;
      left: -0.65rem;
      top: 0;
      content: "";
      width: 2rem;
      height: 0.03rem;
      background: #2cb0de;
      transform: rotate(-45deg);
    }
    .content-box:after {
      position: absolute;
      right: -0.66rem;
      top: 0;
      content: "";
      width: 2rem;
      height: 0.03rem;
      background: #2cb0de;
      transform: rotate(45deg);
    }
  }
`;
// withdraw style end

export default Withdraw;
