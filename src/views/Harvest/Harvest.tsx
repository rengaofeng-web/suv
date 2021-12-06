import React, { useState, useRef } from "react";
import styled from "styled-components";
import wholeBg from "../../assets/PC-config/bg1.jpg"; //整体背景图
// import { Control } from "react-keeper";

const Harvest: React.FC<{}> = () => {
  let [current, setCurrent] = useState(true);
  const ball = useRef(null);

  let [dragValue, setdragValue] = useState(0);
  let dis: number = 0;
  // 小球拖拽代码
  let dragStart = (e: MouseEvent) => {
    e = e || window.event;
    let target = e.target as HTMLDivElement;
    if (target.className === "ball") {
      dis = e.pageX - target.offsetLeft;
      document.onmousemove = dragMove;
    }
  };
  const dragMove = (e: MouseEvent) => {
    e = e || window.event;
    if (ball.current) {
      let target = ball.current as HTMLDivElement;
      let parent = target.parentNode as HTMLDivElement;
      let line = parent.children[0] as HTMLDivElement;
      let moveValue = e.pageX - dis;
      if (moveValue < 0) {
        moveValue = 0;
      }
      if (moveValue > parent.offsetWidth) {
        moveValue = parent.offsetWidth;
      }
      let cale = parent.offsetWidth / 52;
      setdragValue(parseInt(String(moveValue / cale))); 
      target.style.left = moveValue + "px";
      line.style.width = moveValue + "px";
    }
  };
  const dragEnd = () => {
    document.onmousemove = null;
  };
  document.onmousedown = dragStart;
  document.onmouseup = dragEnd;
  return (
    <HarvestStyle>
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
              <div className="lovk-box">
                <div className="lovk">
                  Lovk for:<span>{dragValue} WEEK</span>
                </div>
                <div className="weight">
                  Weight:<span>1.02</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-border">
                  <div className="progress"></div>
                  <div className="ball" ref={ball}></div>
                </div>
                <div className="scale">
                  <div className="min">1</div>
                  <div className="max">52</div>
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

          <div className="approve">APPROVE</div>
          <div className="stake">STAKE</div>
        </div>
      </div>
    </HarvestStyle>
  );
};
// harvest style start
const HarvestStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  background-image: url(${wholeBg});
  box-sizing: border-box;
  .content-box {
    position: absolute;
    left: 50%;
    top: 202px;
    transform: translate(-50%, 0);
    width: 593px;
    /* height: 613px; */
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
        .lovk-box {
          display: flex;
          justify-content: space-between;
          font-family: Roboto;
          font-style: normal;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          padding-top: 45px;
          font-weight: 600;
          .lovk {
            span {
              color: #ff4f88;
            }
          }
          .weight {
            span {
              color: #fff;
            }
          }
        }
        .progress-bar {
          position: relative;
          .progress-border {
            position: relative;
            width: 453px;
            height: 13px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-sizing: border-box;
            border-radius: 10px;
            margin-top: 15px;
            .progress {
              width: 50%;
              height: 100%;
              background: linear-gradient(90deg, #ffc8da 0%, #f02467 100%);
              border-radius: 10px;
            }
            .ball {
              position: absolute;
              width: 24px;
              height: 24px;
              left: 50%;
              top: 50%;
              background: #ff4f88;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
              transform: translate(-50%, -50%);
              border-radius: 50%;
              /* 阻止选中文字 */
              -moz-user-select: none; /*火狐*/
              -webkit-user-select: none; /*webkit浏览器*/
              -ms-user-select: none; /*IE10*/
              -khtml-user-select: none; /*早期浏览器*/
              user-select: none;
              cursor: pointer;
            }
          }
          .scale {
            position: relative;
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            padding-bottom: 45px;
            > div {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              color: #ff4f88;
            }
          }
          .scale:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 453px;
            height: 2px;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.007) 100%
            );
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
    }
    .approve {
      width: 453px;
      height: 60px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 60px;
      background: linear-gradient(90deg, #00be79 0%, #1be69c 100%);
      margin-top: 40px;
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      cursor: pointer;
    }
    .stake {
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      cursor: pointer;
      height: 60px;
      margin-top: 24px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 60px;
      color: #ffffff;
      text-align: center;
      background: linear-gradient(90deg, #ef3c3c 0%, #f36061 100%);
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
`;
// harvest style end

export default Harvest;
