import React, { Component, useEffect, useRef } from "react";
import styled from "styled-components";
// 图片导入
import logo from "../../assets/MOS_LOGO/logo200.png";

const Home: React.FC = (props) => {
  let charts = useRef(null);
  useEffect(() => {
    if (charts.current) {
      const canvas = charts.current as unknown as HTMLCanvasElement;
      var ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "#21d9ad";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(2, 48);
        ctx.bezierCurveTo(50, -8, 124, 88, 204, 0);
        ctx.shadowColor = "rgba(33,217,173,0.2)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;
        ctx.shadowBlur = 2;
        ctx.stroke();
      }
    }
  });
  return (
    <HomeStyle>
      {/* header */}
      <div className="header">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* header-nav */}
        <div className="header-nav">
          <div className="item">Staking</div>
          <div className="item">NFT</div>
          <div className="item">Survivor</div>
          <div className="item">Community</div>
          <div className="item">More</div>
          <div className="connect">Connect</div>
        </div>
      </div>
      {/* content-top */}
      <div className="content-top-bg">
        <div className="content">
          <div className="left-img">
            <img
              src={require("../../assets/PC-config/home/tu1.png").default}
              alt=""
            />
          </div>
          <div className="right-text">
            <div className="sanjiao"></div>
            <div className="title">Build the perfect team</div>
            <div className="article">
              Draft your starters. Challenge to be the best. Outsmart and
              counter your opponents strategically to place rank in competition.
              Earn $ILV through play, and become part of our community-based
              governance.
            </div>
          </div>
        </div>
      </div>
      {/* content-center */}
      <div className="content-center-bg">
        <div className="content">
          <div className="left-text">
            <div className="sanjiao"></div>
            <div className="title">Build the perfect team</div>
            <div className="article">
              Draft your starters. Challenge to be the best. Outsmart and
              counter your opponents strategically to place rank in competition.
              Earn $ILV through play, and become part of our community-based
              governance.
            </div>
          </div>
          <div className="right-img">
            <img
              src={require("../../assets/PC-config/home/tu2.png").default}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* content-bottom */}
      <div className="content-bottom-bg">
        <div className="content">
          <div className="left-img">
            <img
              src={require("../../assets/PC-config/home/tu3.png").default}
              alt=""
            />
          </div>
          <div className="right-text">
            <div className="sanjiao"></div>
            <div className="title">Build the perfect team</div>
            <div className="article">
              Draft your starters. Challenge to be the best. Outsmart and
              counter your opponents strategically to place rank in competition.
              Earn $ILV through play, and become part of our community-based
              governance.
            </div>
          </div>
        </div>
      </div>
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
    </HomeStyle>
  );
};
const HomeStyle = styled.div`
  position: relative;
  width: 1920px;
  height: 3817px;
  margin: auto;
  background-image: url(${require("../../assets/PC-config/shouye_bg.jpg")
    .default});
  background-repeat: no-repeat;
  background-position-x: center;
  /* header */
  .header {
    width: 100%;
    height: 168px;
    box-sizing: border-box;
    padding-right: 360px;
    padding-left: 360px;

    .logo {
      width: 64px;
      padding-top: 22px;
      float: left;
      > img {
        width: 100%;
        height: 63px;
      }
    }
    /* nav */
    .header-nav {
      float: right;
      display: flex;
      padding-top: 28px;
      .item {
        color: #fff;
        margin-right: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        height: 43px;
        line-height: 43px;
      }
      .connect {
        height: 43px;
        width: 115px;
        border-radius: 0px;
        /* padding: 10px 20px 10px 20px; */
        text-align: center;
        line-height: 43px;
        font-size: 20px;
        background: rgba(88, 10, 26, 0.1);
        border: 1px solid #6dffe5;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 30px #53c1ff;
        color: #ffffff;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
      }
    }
  }
  /* content-top */
  .content-top-bg {
    position: absolute;
    width: 1920px;
    height: 474px;
    left: 0px;
    top: 1212px;
    background: linear-gradient(
      89.9deg,
      rgba(255, 255, 255, 0.1) 0.08%,
      rgba(255, 255, 255, 0) 99.91%
    );
    border-radius: 0px 1px 0px 0px;
    .content {
      padding-left: 379px;
      padding-top: 60px;
      display: flex;
      /* align-items: center; */
      .left-img {
      }
      .right-text {
        position: relative;
        transform: translate(-50px, 0);
        width: 500px;
        .sanjiao {
          width: 252px;
          height: 300px;
          position: absolute;
          transform: matrix(1, 0, 0, -1, 0, 0);
          /* transform: translate(0,-90px); */
          overflow: hidden;
          transform: rotate(30deg) translate(41px, -104px) skew(-35deg);
        }
        .sanjiao::before {
          content: "";
          display: block;
          width: 467px;
          height: 467px;
          transform: rotate(45deg) translateX(25%);
          background: linear-gradient(
            -90deg,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0)
          );
        }
        .title {
          font-family: Impact;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          color: #ffffff;
          width: 423px;
          text-align: center;
          padding-top: 244px;
          transform: translate(-30px, 0);
        }
        .article {
          width: 423px;
          height: 118px;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
          padding-top: 35px;
          transform: translate(-30px, 0);
          letter-spacing: 0.5px;
        }
      }
    }
  }
  /* content-center */
  .content-center-bg {
    position: absolute;
    width: 1920px;
    height: 474px;
    left: 0px;
    top: 1950px;
    background: linear-gradient(
      89.9deg,
      rgba(255, 255, 255, 0.1) 0.08%,
      rgba(255, 255, 255, 0) 99.91%
    );
    border-radius: 0px 1px 0px 0px;
    .content {
      padding-left: 379px;
      padding-top: 60px;
      display: flex;
      /* align-items: center; */
      .right-img {
      }
      position: relative;
      transform: translate(-50px, 0);
      width: 500px;
      .sanjiao {
        width: 252px;
        height: 300px;
        position: absolute;
        transform: matrix(1, 0, 0, -1, 0, 0);
        /* transform: translate(0,-90px); */
        overflow: hidden;
        transform: rotate(30deg) translate(41px, -104px) skew(-35deg);
      }
      .sanjiao::before {
        content: "";
        display: block;
        width: 467px;
        height: 467px;
        transform: rotate(45deg) translateX(25%);
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0.7),
          rgba(255, 255, 255, 0)
        );
      }
      .title {
        font-family: Impact;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        color: #ffffff;
        width: 423px;
        text-align: center;
        padding-top: 244px;
        transform: translate(-30px, 0);
      }
      .article {
        width: 423px;
        height: 118px;
        text-align: center;
        color: #ffffff;
        line-height: 22px;
        padding-top: 35px;
        transform: translate(-30px, 0);
        letter-spacing: 0.5px;
      }
    }
  }

  /* content-bottom */
  .content-bottom-bg {
    position: absolute;
    width: 1920px;
    height: 474px;
    left: 0px;
    top: 2697px;
    background: linear-gradient(
      89.9deg,
      rgba(255, 255, 255, 0.1) 0.08%,
      rgba(255, 255, 255, 0) 99.91%
    );
    border-radius: 0px 1px 0px 0px;
    .content {
      padding-left: 379px;
      padding-top: 60px;
      display: flex;
      /* align-items: center; */
      .left-img {
      }
      position: relative;
      transform: translate(-50px, 0);
      width: 500px;
      .sanjiao {
        width: 252px;
        height: 300px;
        position: absolute;
        transform: matrix(1, 0, 0, -1, 0, 0);
        /* transform: translate(0,-90px); */
        overflow: hidden;
        transform: rotate(30deg) translate(41px, -104px) skew(-35deg);
      }
      .sanjiao::before {
        content: "";
        display: block;
        width: 467px;
        height: 467px;
        transform: rotate(45deg) translateX(25%);
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0.7),
          rgba(255, 255, 255, 0)
        );
      }
      .title {
        font-family: Impact;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        color: #ffffff;
        width: 423px;
        text-align: center;
        padding-top: 244px;
        transform: translate(-30px, 0);
      }
      .article {
        width: 423px;
        height: 118px;
        text-align: center;
        color: #ffffff;
        line-height: 22px;
        padding-top: 35px;
        transform: translate(-30px, 0);
        letter-spacing: 0.5px;
      }
    }
  }

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
      text-align:center;
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
          width: 425px;
          height: 171px;
          box-sizing: border-box;
          padding: 1px;
          background: linear-gradient(
            180deg,
            #32c2d6 0%,
            rgba(50, 194, 214, 0) 100%
          );
          border-radius: 10px;
        }
        .center-data {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, #333854 0%, transparent 100%);
          backdrop-filter: blur(5px);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
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
  }
`;
export default Home;
