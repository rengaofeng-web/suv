import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";
// pc图片导入
import foot_survivor_logo from "../../assets/socialMedia_logo/foot_logp.svg";
import foot_price_logo from "../../assets/socialMedia_logo/foot_price_logo.svg";
import foot_twitter from "../../assets/socialMedia_logo/twitter.svg";
import foot_telegram from "../../assets/socialMedia_logo/telegram.svg";
import foot_discord from "../../assets/socialMedia_logo/discord.svg";
import foot_medium from "../../assets/socialMedia_logo/medium.svg";
// 曲线图
import trend_line_green from "../../assets/socialMedia_logo/green.svg"; //绿色
import trend_line_red from "../../assets/socialMedia_logo/red.svg"; //红色
// mobile图片导入
import foot_survivor_logo_mobile from "../../assets/socialMedia_logo/foot_logp.svg";
import foot_price_logo_mobile from "../../assets/socialMedia_logo/foot_price_logo.svg";
import foot_twitter_mobile from "../../assets/socialMedia_logo/twitter.svg";
import foot_telegram_mobile from "../../assets/socialMedia_logo/telegram.svg";
import foot_discord_mobile from "../../assets/socialMedia_logo/discord.svg";
import foot_medium_mobile from "../../assets/socialMedia_logo/medium.svg";

const isM = isMobile();
const Footer: React.FC<{}> = () => {
  let charts = useRef(null);
  // useEffect(() => {
  //   if (charts.current) {
  //     const canvas = charts.current as unknown as HTMLCanvasElement;
  //     var ctx = canvas.getContext("2d");
  //     if (ctx) {
  //       if (!isM) {
  //         ctx.strokeStyle = "#21d9ad";
  //         ctx.lineWidth = 2;
  //         ctx.beginPath();
  //         ctx.moveTo(8, 70);
  //         ctx.bezierCurveTo(182, -5, 219, 180, 324, 8);
  //         ctx.shadowColor = "rgba(33,217,173,0.2)";
  //         ctx.shadowOffsetX = 0;
  //         ctx.shadowOffsetY = 6;
  //         ctx.shadowBlur = 2;
  //         ctx.stroke();
  //       } else {
  //         ctx.strokeStyle = "#21d9ad";
  //         ctx.lineWidth = 3;
  //         ctx.beginPath();
  //         ctx.moveTo(-2, 160);
  //         ctx.bezierCurveTo(59, -2, 220, 139, 369, -20);
  //         ctx.shadowColor = "rgba(33,217,173,0.2)";
  //         ctx.shadowOffsetX = 0;
  //         ctx.shadowOffsetY = 6;
  //         ctx.shadowBlur = 2;
  //         ctx.stroke();
  //       }
  //     }
  //   }
  // });
  return (
    <FooterStyle className="footer-box">
      {/* footer */}
      {/* 渐变条 */}
      <div className="top_line"></div>
      <div className="footer-bg">
        <div className="footer">
          <div className="left">
            <div className="footer-logo">
              <img src={!isM ? foot_survivor_logo : foot_survivor_logo_mobile} alt="" />
            </div>
            <div className="footer-menu">
              <div className="menu-item">
                <div className="item">
                  <a href="/#">Staking</a>
                </div>
                <div className="item">
                  <a href="/#">Illuviary</a>
                </div>
                <div className="item">
                  <a href="/#">FAQ</a>
                </div>
              </div>
              <div className="menu-item">
                <div className="item">
                  <a href="/#">Governance</a>
                </div>
                <div className="item">
                  <a href="/#">Contributors</a>
                </div>
                <div className="item">
                  <a href="/#">Careers</a>
                </div>
              </div>
              <div className="menu-item">
                <div className="item">
                  <a href="/#">IlluviDex</a>
                </div>

                <div className="item">
                  <a href="/#">Whitepaper</a>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="center-data-bg">
              <div className="line"></div>
              <div className="center-data">
                <div className="left-logo">
                  <img src={!isM ? foot_price_logo : foot_price_logo_mobile} alt="" />
                  <div className="text">SUV</div>
                </div>
                <div className="price-data">
                  <div className="top">
                    <div className="text">price</div>
                    <div className="price">$669.3</div>
                  </div>
                  <div className="chart">
                    <div className="trend">
                      <img
                        src={trend_line_green}
                        alt=""
                        style={{ width: "100%", marginTop: "5px" }}
                      />
                    </div>
                    <div className="num rise">+2.82%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="trademark-bg">
              <div className="trademark">
                <a href="/#">
                  <img src={!isM ? foot_twitter : foot_twitter_mobile} alt="" />
                </a>
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <a href="/#">
                  <img src={!isM ? foot_telegram : foot_telegram_mobile} alt="" />
                </a>
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <a href="/#">
                  <img src={!isM ? foot_discord : foot_discord_mobile} alt="" />
                </a>
              </div>
            </div>
            <div className="trademark-bg">
              <div className="trademark">
                <a href="/#">
                  <img src={!isM ? foot_medium : foot_medium_mobile} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {!isM ? <div className="reserved">Illuvium © 2021, All rights reserved</div> : null}
      </div>
    </FooterStyle>
  );
};
// footer style start
const FooterStyle = styled.div`
  width: 100%;
  height: 306px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(6, 11, 64, 0.8) 0%, rgba(6, 11, 64, 0) 100%);
  box-sizing: border-box;
  padding-top: 63px;
  /* 渐变条 */
  .top_line {
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #d91919 0%, #d9198c 31.25%, #9019d9 56.25%, #197dd9 100%);
  }
  .footer-bg {
    .footer {
      max-width: 1920px;
      min-width: 1216px;
      margin: auto;
    }
    .reserved {
      width: 100%;
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #6066a7;
    }
    .footer {
      display: flex;
      justify-content: center;
      .left {
        .footer-logo {
          padding-bottom: 22px;
        }
        .footer-menu {
          width: 465px;
          display: flex;
          flex-wrap: wrap;
          .menu-item:first-child {
            width: 100px;
          }
          .item {
            width: 130px;
            padding-bottom: 16px;
            a {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              color: #6066a7;
            }
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
          border-radius: 10px;
          position: relative;
        }
        .line {
          position: absolute;
          left: -2px;
          top: -1px;
          width: 352px;
          height: 23px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border: 2px solid #32c2d6;
          box-sizing: border-box;
          border-bottom: none;
          z-index: 1;
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
          backdrop-filter: blur(2px);
          border-radius: 10px;
          display: flex;
          position: relative;
        }
        .center-data::before {
          display: block;
          content: "";
          height: 162px;
          width: 2px;
          position: absolute;
          left: -2px;
          top: 9px;
          background: linear-gradient(180deg, #32c2d6 0%, rgba(50, 194, 214, 0) 100%);
        }
        .center-data::after {
          display: block;
          content: "";
          height: 162px;
          width: 2px;
          position: absolute;
          right: -2px;
          top: 10px;
          background: linear-gradient(180deg, #32c2d6 0%, rgba(50, 194, 214, 0) 100%);
        }
        .left-logo {
          text-align: center;
          padding-top: 36px;
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
            position: relative;
            .num {
              position: absolute;
              right: 0;
              bottom: 8px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 16px;
            }
            .rise {
              color: #21d9ad;
            }
            .fall {
              color: #f46262;
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

        border-radius: 50%;
        margin-right: 32px;
      }
      .trademark {
        width: 100%;
        height: 100%;
        /* background: linear-gradient(180deg, #4c5165 0%, #1a2036 100%);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2); */
        /* backdrop-filter: blur(30px); */
        text-align: center;
        line-height: 81px;
        border-radius: 50%;
      }
    }
  }
  /* mobile style start */
  @media screen and (max-width: 750px) {
    width: 7.5rem;
    height: 7.9rem;
    background: linear-gradient(180deg, rgba(6, 11, 64, 0.8) 0%, rgba(6, 11, 64, 0) 195.35%);
    padding: 0;
    .top_line {
      height: 0.02rem;
    }
    .footer-bg {
      .footer {
        max-width: auto;
        min-width: auto;
        display: block;
        height: 100%;
        position: relative;
        .left {
          position: absolute;
          top: 4rem;
          width: 100%;
          box-sizing: border-box;
          padding-right: 0.5rem;
          .footer-menu {
            width: 100%;
            justify-content: space-around;
            .menu-item {
              text-align: center;
              .item {
                width: auto;
                padding-bottom: 0.16rem;
              }
              a {
                font-size: 0.3rem;
              }
            }
          }
          .footer-logo {
            position: absolute;
            top: -3.5rem;
            left: 0.4rem;
            z-index: 1;
            padding: 0;
            img {
              width: 2.36rem;
            }
          }
        }
        .center {
          position: absolute;
          top: 1.2rem;
          left: 50%;
          transform: translate(-50%, 0);
          width: 6.7rem;
          .center-data-bg {
            width: 100%;
            height: 2.21rem;
            .center-data {
              background: linear-gradient(
                to top,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0) 100%
              );
              backdrop-filter: blur(5px);
              border-radius: 0.1rem;
              .left-logo {
                padding-left: 0.4rem;
                padding-top: 0.35rem;
                img {
                  width: 0.99rem;
                }
                .text {
                  font-size: 0.34rem;
                  padding-top: 0.18rem;
                }
              }
              .price-data {
                padding-left: 1rem;
                .top {
                  .text {
                    font-size: 0.28rem;
                    padding-top: 0.24rem;
                  }
                  .price {
                    font-size: 0.34rem;
                    padding-left: 0.42rem;
                    padding-top: 0.1rem;
                  }
                }
                .chart {
                  position: relative;
                  > .trend {
                    position: absolute;
                    top: -0.5rem;
                    img {
                      margin-top: 0 !important;
                      width: 3.5rem !important;
                    }
                  }
                  .num {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0.3rem;
                    line-height: 0.36rem;
                    color: #21d9ad;
                    position: absolute;
                    right: -1.2rem;
                    bottom: -1.2rem;
                  }
                }
              }
            }
            .center-data:before {
              background: linear-gradient(to top, #32c2d6 0%, rgba(50, 194, 214, 0) 100%);
              height: 100%;
              top: -0.2rem;
              /* left: 0; */
            }
            .center-data:after {
              background: linear-gradient(to top, #32c2d6 0%, rgba(50, 194, 214, 0) 100%);
              top: -0.2rem;
              height: 100%;
              /* left: 0; */
            }
            .line {
              width: 6.78rem;
              top: 2.01rem;
              height: 0.23rem;
              left: -0.04rem;
              border-bottom: 1px solid #32c2d6;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: 0.1rem;
              border-bottom-right-radius: 0.1rem;
              border-top: none;
            }
          }
        }
        .right {
          position: absolute;
          bottom: -7.14rem;
          left: 50%;
          transform: translate(-50%, 0);
          padding: 0;
          .trademark-bg {
            margin-right: 0.64rem;
            width: 0.9rem;
            height: 0.9rem;
            .trademark {
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 0;
            }
            a {
              display: inline-block;
              img {
                width: 0.9rem;
              }
            }
          }
          .trademark-bg:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// footer style end
export default Footer;
