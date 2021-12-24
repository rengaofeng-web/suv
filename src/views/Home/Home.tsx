import React, { useRef } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// pc图片导入
import top_bg from "../../assets/PC-config/shouye1.jpg";
import center_bg from "../../assets/PC-config/shouye2.jpg";
import center_bg2 from "../../assets/PC-config/shouye3.jpg";
import center_bg3 from "../../assets/PC-config/shouye4.jpg";
import bottom_bg from "../../assets/PC-config/shouye5.jpg";
// mobile图片导入
import mobile_wholeBg from "../../assets/Phone-config/shouye_bg.jpg"; //整体背景
const isM = isMobile();
const Home: React.FC = (props) => {
  let homeBox = useRef(null);
  return (
    <HomeStyle ref={homeBox}>
      {/* content-top */}
      <div className="top-bg">
        <img src={top_bg} alt="" />
      </div>
      <div className="content-bg-top">
        <img src={center_bg} alt="" />
        <div className="content-top">
          <div className="container">
            <div className="content">
              <div className="left-img">
                <img
                  src={
                    !isM
                      ? require("../../assets/PC-config/home/tu1.png").default
                      : require("../../assets/Phone-config/home/tu1.png").default
                  }
                  alt=""
                />
              </div>
              <div className="right-text">
                {!isM ? <div className="sanjiao"></div> : null}
                <div className="title">Build the perfect team</div>
                <div className="article">
                  Draft your starters. Challenge to be the best. Outsmart and counter your opponents
                  strategically to place rank in competition. Earn $ILV through play, and become
                  part of our community-based governance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-bg-center">
        <img src={center_bg2} alt="" />
        {/* content-center */}
        <div className="content-center">
          <div className="container">
            <div className="content">
              <div className="left-text">
                {!isM ? <div className="sanjiao"></div> : null}
                <div className="title">Build the perfect team</div>
                <div className="article">
                  Draft your starters. Challenge to be the best. Outsmart and counter your opponents
                  strategically to place rank in competition. Earn $ILV through play, and become
                  part of our community-based governance.
                </div>
              </div>
              <div className="right-img">
                <img
                  src={
                    !isM
                      ? require("../../assets/PC-config/home/tu2.png").default
                      : require("../../assets/Phone-config/home/tu2.png").default
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-bg-bottom">
        <img src={center_bg3} alt="" />
        {/* content-bottom */}
        <div className="content-bottom">
          <div className="container">
            <div className="content">
              <div className="left-img">
                <img
                  src={
                    !isM
                      ? require("../../assets/PC-config/home/tu3.png").default
                      : require("../../assets/Phone-config/home/tu3.png").default
                  }
                  alt=""
                />
              </div>
              <div className="right-text">
                {!isM ? <div className="sanjiao"></div> : null}
                <div className="title">Build the perfect team</div>
                <div className="article">
                  Draft your starters. Challenge to be the best. Outsmart and counter your opponents
                  strategically to place rank in competition. Earn $ILV through play, and become
                  part of our community-based governance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bg">
        <img src={bottom_bg} alt="" />
      </div>
      <Footer></Footer>
    </HomeStyle>
  );
};
// home style start
const HomeStyle = styled.div`
  width: 100%;
  position: relative;
  width: 100%;
  margin: auto;
  .top-bg {
    width: 100%;
    > img {
      width: 100%;
      display: block;
    }
  }
  .content-bg-top {
    position: relative;
    width: 100%;
    > img {
      width: 100%;
      display: block;
    }
    .content-top {
      position: absolute;
      width: 100%;
      height: 474px;
      top: 100px;
      background: linear-gradient(
        89.9deg,
        rgba(255, 255, 255, 0.1) 0.08%,
        rgba(255, 255, 255, 0) 99.91%
      );
      border-radius: 0px 1px 0px 0px;
      .container {
        max-width: 1920px;
        min-width: 1216px;
        margin: auto;
      }
      .content {
        padding-left: 379px;
        padding-top: 60px;
        display: flex;
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
            overflow: hidden;
            transform: rotate(30deg) translate(41px, -104px) skew(-35deg);
          }
          .sanjiao::before {
            content: "";
            display: block;
            width: 467px;
            height: 467px;
            transform: rotate(45deg) translateX(25%);
            background: linear-gradient(-90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
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
          }
        }
      }
    }
  }
  .content-bg-center {
    position: relative;
    > img {
      width: 100%;
      display: block;
    }
    /* content-center */
    .content-center {
      position: absolute;
      width: 100%;
      height: 474px;
      top: 30px;
      background: linear-gradient(
        89.9deg,
        rgba(255, 255, 255, 0.1) 0.08%,
        rgba(255, 255, 255, 0) 99.91%
      );
      border-radius: 0px 1px 0px 0px;
      .container {
        max-width: 1920px;
        min-width: 1216px;
        margin: auto;
      }
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
          background: linear-gradient(-90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
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
  .content-bg-bottom {
    position: relative;
    > img {
      width: 100%;
      display: block;
    }
    .content-bottom {
      position: absolute;
      width: 100%;
      top: 30px;
      height: 474px;
      background: linear-gradient(
        89.9deg,
        rgba(255, 255, 255, 0.1) 0.08%,
        rgba(255, 255, 255, 0) 99.91%
      );
      border-radius: 0px 1px 0px 0px;
      .container {
        max-width: 1920px;
        min-width: 1216px;
        margin: auto;
      }
      .content {
        padding-left: 379px;
        padding-top: 60px;
        display: flex;
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
          overflow: hidden;
          transform: rotate(30deg) translate(41px, -104px) skew(-35deg);
        }
        .sanjiao::before {
          content: "";
          display: block;
          width: 467px;
          height: 467px;
          transform: rotate(45deg) translateX(25%);
          background: linear-gradient(-90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
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
  }
  .bottom-bg {
    width: 100%;
    > img {
      width: 100%;
      display: block;
    }
  }

  // mobile style start
  @media screen and (max-width: 750px) {
    width: 7.5rem;
    height: 43.86rem;
    margin: auto;
    overflow: hidden;
    max-width: auto;
    min-width: auto;
    background-image: url(${mobile_wholeBg});
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    .top-bg {
      display: none;
    }
    .content-bg-top {
      > img {
        display: none;
      }
      .content-top {
        width: 100%;
        height: 8.8rem;
        background: linear-gradient(
          89.9deg,
          rgba(255, 255, 255, 0.15) 0.08%,
          rgba(255, 255, 255, 0) 99.91%
        );
        border-radius: 0px 1px 0px 0px;
        top: 7.55rem;
        .content {
          padding-top: 0;
          padding-left: 0.4rem;
          display: block;
          .left-img {
            img {
              width: 7.05rem;
            }
          }
          .right-text {
            transform: none;
            width: 6.7rem;
            .title {
              padding-top: 0.28rem;
              width: auto;
              text-align: left;
              transform: none;
              font-size: 0.34rem;
            }
            .article {
              padding-top: 0.06rem;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: normal;
              font-size: 0.28rem;
              line-height: 0.39rem;
              text-align: justify;
              letter-spacing: -0.03em;
              color: rgba(255, 255, 255, 0.8);
              width: 6.7rem;
              height: auto;
              transform: none;
            }
          }
        }
      }
    }
    .content-bg-center {
      > img {
        display: none;
      }
      .content-center {
        width: 100%;
        height: 8.8rem;
        background: linear-gradient(
          89.9deg,
          rgba(255, 255, 255, 0.15) 0.08%,
          rgba(255, 255, 255, 0) 99.91%
        );
        border-radius: 0px 1px 0px 0px;
        top: 16.85rem;
        .content {
          position: relative;
          padding-top: 0.15rem;
          padding-left: 0.4rem;
          width: auto;
          height: 100%;
          transform: none;
          display: block;
          .left-text {
            position: absolute;
            bottom: -8rem;
            .title {
              transform: none;
              width: auto;
              text-align: left;
              font-size: 0.34rem;
              padding-top: 0.28rem;
            }
            .article {
              width: 6.7rem;
              height: auto;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: normal;
              font-size: 0.28rem;
              line-height: 0.39rem;
              text-align: justify;
              letter-spacing: -0.03em;
              color: rgba(255, 255, 255, 0.8);
              padding-top: 0.06rem;
              transform: none;
            }
          }
          .right-img {
            position: absolute;
            top: 0;
            left: 0;
            img {
              width: 7.05rem;
            }
          }
        }
      }
    }
    .content-bg-bottom {
      >img{
        display: none;
      }
      .content-bottom {
        width: 100%;
        height: 8.8rem;
        background: linear-gradient(
          89.9deg,
          rgba(255, 255, 255, 0.15) 0.08%,
          rgba(255, 255, 255, 0) 99.91%
        );
        border-radius: 0px 1px 0px 0px;
        top: 26.15rem;
        .content {
          width: 100%;
          padding-top: 0.15rem;
          padding-left: 0.4rem;
          display: block;
          transform: none;
          .left-img {
            transform: none;
            img {
              width: 7.05rem;
            }
          }
          .right-text {
            .title {
              padding-top: 0.27rem;
              font-size: 0.34rem;
              width: auto;
              text-align: left;
              transform: none;
            }
            .article {
              font-family: PingFang SC;
              font-style: normal;
              font-weight: normal;
              font-size: 0.28rem;
              line-height: 0.39rem;
              text-align: justify;
              letter-spacing: -0.03em;
              color: rgba(255, 255, 255, 0.8);
              transform: none;
              width: 6.7rem;
              height: auto;
              padding-top: 0.06rem;
            }
          }
        }
      }
    }
    .bottom-bg{
      display: none;
    }
  }
  // mobile style end
`;
// home style end

export default Home;
