import React, { useState } from "react";
import styled from "styled-components";
import wholeBg from "../../assets/PC-config/bg1.jpg"; //整体背景图

const Withdra: React.FC<{}> = () => {
  let [current, setCurrent] = useState(true);
  return (
    <WithdraStyle>
      <div className="content-box">
        <div className="head">
          <div className="left-logo">
            <div className="logo-border">
              <div className="logo">
                <img
                  src={require("../../assets/PC-config/pool/SUV.svg").default}
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
            <div
              className="switch-item"
              style={{ display: current ? "block" : "none" }}
            >
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
            <div
              className="switch-item"
              style={{ display: !current ? "block" : "none" }}
            >
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
          <div className="withdra">WITHDRA</div>
        </div>
      </div>
    </WithdraStyle>
  );
};
const WithdraStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  background-image: url(${wholeBg});
  background-repeat: no-repeat;
  background-size: cover;
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
    /* height: 613px; */
    /* height: 529px; */
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
          border-image: linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
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
              /* identical to box height */
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
          border-image: linear-gradient(
              to right,
              rgba(85, 121, 255, 0.8),
              rgba(162, 183, 255, 0.8)
            )
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
      .withdra {
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
`;
export default Withdra;
