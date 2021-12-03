import React, { useRef } from "react";
import styled from "styled-components";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// 图片导入
import wholeBg from "../../assets/PC-config/shouye_bg.jpg";//整体背景

const Home: React.FC = (props) => {
  let homeBox = useRef(null);
  return (
    <HomeStyle ref={homeBox}>
      {/* <Header></Header> */}
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
      <Footer></Footer>
    </HomeStyle>
  );
};
// home style start
const HomeStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1216px;
  height: 3817px;
  margin: auto;
  overflow: hidden;
  background-image: url(${wholeBg});
  background-repeat: no-repeat;
  background-position-x: center;

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
          height: 255px;
          position: absolute;
          left: -25px;
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
          padding-top: 204px;
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
          /* letter-spacing: 0.5px; */
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
        height: 255px;
        position: absolute;
        left: 357px;
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
        padding-top: 204px;
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
        /* letter-spacing: 0.5px; */
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
        height: 255px;
        position: absolute;
        right: -582px;
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
        width: 432px;
        text-align: center;
        padding-top: 204px;
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
        /* letter-spacing: 0.5px; */
      }
    }
  }
`;
// home style end

export default Home;
