import React, { useRef,useEffect } from "react";
import styled from "styled-components";

const Footer: React.FC<{}> = () => {
  let charts = useRef(null);
  useEffect(() => {
    if (charts.current) {
      const canvas = charts.current as unknown as HTMLCanvasElement;
      var ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "#21d9ad";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(8, 70);
        // ctx.bezierCurveTo(50, -8, 124, 88, 204, 0);
        ctx.bezierCurveTo(51, -2, 128, 86, 161, 0);
        ctx.shadowColor = "rgba(33,217,173,0.2)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;
        ctx.shadowBlur = 2;
        ctx.stroke();
      }
    }
  });
  return (
    <FooterStyle>
      {/* footer */}
      <div className="footer-bg">
        <div className="footer">
          <div className="left">
            <div className="footer-logo">
              <img
                src={
                  require("../../assets/PC-config/home/foot_survivor_logo.svg")
                    .default
                }
                alt=""
              />
            </div>
            <div className="footer-menu">
              <div className="menu-item">
                <div className="item">Staking</div>
                <div className="item">Illuviary</div>
                <div className="item">FAQ</div>
              </div>
              <div className="menu-item">
                <div className="item">Governance</div>
                <div className="item">Contributors</div>
                <div className="item">Careers</div>
              </div>
              <div className="menu-item">
                <div className="item">IlluviDex</div>

                <div className="item">Whitepaper</div>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="center-data-bg">
              <div className="line"></div>
              <div className="center-data">
                <div className="left-logo">
                  <img
                    src={
                      require("../../assets/PC-config/home/foot_price_logo.svg")
                        .default
                    }
                    alt=""
                  />
                  <div className="text">SUV</div>
                </div>
                <div className="price-data">
                  <div className="top">
                    <div className="text">price</div>
                    <div className="price">$669.3</div>
                  </div>
                  <div className="chart">
                    <canvas ref={charts} width="150" height="56"></canvas>
                    <div className="num">2.82%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="trademark-bg">
              <div className="trademark">
                <img
                  src={
                    require("../../assets/PC-config/home/foot_twitter.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <img
                  src={
                    require("../../assets/PC-config/home/foot_telegram.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <img
                  src={
                    require("../../assets/PC-config/home/foot_discord.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <img
                  src={
                    require("../../assets/PC-config/home/foot_medium.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reserved">Illuvium © 2021, All rights reserved</div>
      </div>
    </FooterStyle>
  );
};
// footer style start
const FooterStyle = styled.div`
  /* footer */
  .footer-bg {
    width: 100%;
    height: 338px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(6, 11, 64, 0.8) 0%,
      rgba(6, 11, 64, 0) 100%
    );
    box-sizing: border-box;
    padding-right: 360px;
    padding-left: 360px;
    padding-top: 71px;
    .reserved {
      width: 100%;
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #6066a7;
      padding-top: 40px;
    }
    .footer {
      display: flex;
      .left {
        .footer-logo {
          padding-bottom: 22px;
        }
        .footer-menu {
          width: 400px;
          display: flex;
          flex-wrap: wrap;
          .menu-item:first-child {
            width: 100px;
          }
          .item {
            width: 130px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #6066a7;
            padding-bottom: 16px;
          }
        }
        .center-data {
          width: 348px;
          height: 171px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          backdrop-filter: blur(5px);
          border-radius: 10px;
        }
      }
      .center {
        .center-data-bg {
          width: 348px;
          height: 171px;
          box-sizing: border-box;
          /* padding: 1px; */
          /* background: linear-gradient(
            180deg,
            #32c2d6 0%,
            rgba(50, 194, 214, 0) 100%
          ); */
          border-radius: 10px;
          position: relative;
        }
        .line {
          position: absolute;
          left: -1px;
          top: -1px;
          width: 350px;
          height: 23px;
          /* borderradius: 10px;
             */
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          /* background-color: #32c2d6; */
          border: 1px solid #32c2d6;
          box-sizing: border-box;
          border-bottom: none;
        }

        .center-data {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          backdrop-filter: blur(5px);
          border-radius: 10px;
          display: flex;
          position: relative;
        }
        .center-data::before {
          display: block;
          content: "";
          height: 162px;
          width: 1px;
          position: absolute;
          left: -1px;
          top: 9px;
          background: linear-gradient(
            180deg,
            #32c2d6 0%,
            rgba(50, 194, 214, 0) 100%
          );
          /* border-radius: 50px; */
        }
        .center-data::after {
          display: block;
          content: "";
          height: 162px;
          width: 1px;
          position: absolute;
          right: -1px;
          top: 10px;
          background: linear-gradient(
            180deg,
            #32c2d6 0%,
            rgba(50, 194, 214, 0) 100%
          );
          /* border-radius: 50px; */
        }
        .left-logo {
          text-align: center;
          padding-top: 34px;
          padding-left: 27px;
          .text {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #ffc8e6;
          }
        }
        .price-data {
          padding-left: 42px;
          .top {
            display: flex;
            .text {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              color: rgba(255, 255, 255, 0.8);
              padding-top: 26px;
            }
            .price {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 30px;
              line-height: 35px;
              padding-top: 21px;
              padding-left: 23px;
              color: #ffffff;
            }
          }
          .chart {
            /* border: 2px solid #21d9ad; */
            /* box-shadow: 0px 5px 4px rgba(33, 217, 173, 0.3); */
            .num {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 16px;
              color: #21d9ad;
              text-align: right;
            }
          }
        }
      }
    }
    .right {
      display: flex;
      padding-left: 102px;
      padding-top: 56px;
      .trademark-bg {
        width: 58px;
        height: 58px;
        box-sizing: border-box;
        background: linear-gradient(
          180deg,
          #fdfdfd 0%,
          rgba(255, 255, 255, 0) 100%
        );
        padding: 1px;
        border-radius: 50%;
        margin-right: 32px;
      }
      .trademark {
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #4c5165 0%, #1a2036 100%);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(30px);
        text-align: center;
        line-height: 81px;
        border-radius: 50%;
      }
    }
  }
`;
// footer style end
export default Footer;
