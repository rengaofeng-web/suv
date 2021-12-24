import React, { useState, useRef } from "react";
import styled from "styled-components";
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; // mobile 整体背景图
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
const Stake: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  let [current, setCurrent] = useState(true);
  const ball = useRef(null);

  let [dragValue, setdragValue] = useState(0);
  let dis: number = 0;
  // pc端小球拖拽代码
  if (!isM) {
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
  }
  // mobile 小球拖拽代码
  if (isM) {
    let dragStart = (e: TouchEvent) => {
      e = e || window.event;
      let target = e.target as HTMLDivElement;
      let pageX = e.touches[0].pageX;
      if (target.className === "ball") {
        dis = pageX - target.offsetLeft;
        document.ontouchmove = dragMove;
      }
    };
    const dragMove = (e: TouchEvent) => {
      e = e || window.event;
      let pageX = e.touches[0].pageX;
      if (ball.current) {
        let target = ball.current as HTMLDivElement;
        let parent = target.parentNode as HTMLDivElement;
        let line = parent.children[0] as HTMLDivElement;
        let moveValue = pageX - dis;
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
      document.ontouchmove = null;
    };
    document.ontouchstart = dragStart;
    document.ontouchend = dragEnd;
  }
  return (
    <StakeStyle>
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
      <Footer></Footer>
    </StakeStyle>
  );
};
// stake style start
const StakeStyle = styled.div`
  position: relative;
  margin: auto;
  .footer-bg {
    position: relative;
  }
  .content-box {
    position: relative;
    margin: 202px auto;
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
  /* mobile style start */
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    background: url(${mobile_wholeBg});
    background-size: cover;
    height: 100vh;
    overflow: scroll;
    .content-box {
      width: 6.7rem;
      height: auto;
      padding: 0 0.72rem 0.7rem;
      margin: 2.02rem auto;
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
        .right-con {
          width: 2.5rem;
          height: 0.63rem;
          line-height: 0.63rem;
          font-size: 0.26rem;
          border: 0.02rem solid #ddd;
          border-image: linear-gradient(to right, #6788ff, #d4484b) 20 20;
        }
      }
      .content {
        .switch-button {
          > div {
            width: 2.63rem;
            height: 0.9rem;
            font-size: 0.26rem;
            line-height: 0.9rem;
          }
        }
        .switch-content {
          .switch-item:first-child {
            .amount-box {
              padding: 0.45rem 0 0.14rem;
              .amount {
                font-size: 0.22rem;
              }
              .balance {
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
            .lovk-box {
              padding-top: 0.46rem;
              > div {
                font-size: 0.2rem;
              }
            }
            .progress-bar {
              width: 5.26rem;
              .progress-border {
                width: 5.26rem;
                height: 0.1509rem;
                .ball {
                  width: 0.3rem;
                  height: 0.3rem;
                }
              }
              .scale {
                padding: 0.14rem 0 0.3rem;
                > div {
                  font-size: 0.18rem;
                }
              }
              .scale:after {
                display: none;
              }
            }
            .amount-box {
              padding-top: 0;
              padding-bottom: 0.14rem;
              > div {
                font-size: 0.2rem;
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
        .approve {
          width: 100%;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.3rem;
        }
        .stake {
          width: 100%;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.3rem;
          margin-top: 0.3rem;
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
  /* mobile style end */
`;
// stake style end

export default Stake;
