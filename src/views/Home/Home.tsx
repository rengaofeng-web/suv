import React, { Component } from "react";
import styled from "styled-components";
// 图片导入
import logo from "../../assets/MOS_LOGO/logo200.png";
const Home: React.FC = (props) => {
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
                  require("../../assets/PC-config/home/top_logo_white.svg")
                    .default
                }
                alt=""
              />
            </div>
          </div>
        </div>
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
        .sanjiao {
          width: 467px;
          height: 126px;
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 72.68%
          );
          transform: matrix(1, 0, 0, -1, 0, 0);
          position: relative;
        }
        .sanjiao::before {
          display: block;
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          left: 0;
          top: 0;
          background: transparent;
        }
        .title {
          font-family: Impact;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          color: #ffffff;
          width: 423px;
          text-align: center;
          padding-top: 42px;
        }
        .article {
          width: 423px;
          height: 118px;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
          padding-top: 35px;
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
      .left-text {
        .sanjiao {
          width: 467px;
          height: 126px;
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 72.68%
          );
          transform: matrix(1, 0, 0, -1, 0, 0);
          position: relative;
        }
        .sanjiao::before {
          display: block;
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          left: 0;
          top: 0;
          background: transparent;
        }
        .title {
          font-family: Impact;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          color: #ffffff;
          width: 423px;
          text-align: center;
          padding-top: 42px;
        }
        .article {
          width: 423px;
          height: 118px;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
          padding-top: 35px;
        }
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
      .right-text {
        .sanjiao {
          width: 467px;
          height: 126px;
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 72.68%
          );
          transform: matrix(1, 0, 0, -1, 0, 0);
          position: relative;
        }
        .sanjiao::before {
          display: block;
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          left: 0;
          top: 0;
          background: transparent;
        }
        .title {
          font-family: Impact;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          color: #ffffff;
          width: 423px;
          text-align: center;
          padding-top: 42px;
        }
        .article {
          width: 423px;
          height: 118px;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
          padding-top: 35px;
        }
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
  }
`;
export default Home;
