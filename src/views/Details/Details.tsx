import React from "react";
import styled from "styled-components";
import { Control } from "react-keeper";
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// 图片导入
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; // mobile 整体背景图
const Details: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  return (
    <DetailsStyle>
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
          <div className="right-con">OX2512...2A36</div>
        </div>
        <div className="content">
          <div className="title">Details</div>
          <div className="data">
            <div className="data-item">
              <div className="data-name">TVL</div>
              <div className="data-con">$1,749,698,547.89</div>
            </div>
            <div className="data-item">
              <div className="data-name">Weight</div>
              <div className="data-con">19.61%</div>
            </div>
            <div className="data-item">
              <div className="data-name">Pending rewards</div>
              <div className="data-con">0.00 SUV</div>
            </div>
            <div className="data-item">
              <div className="data-name">Pool APR</div>
              <div className="data-con">41.61%</div>
            </div>
            <div className="data-item">
              <div className="data-name">My liquidity</div>
              <div className="data-con">0 SUV</div>
            </div>
          </div>
        </div>
        <div
          className="stake"
          onClick={() => {
            Control.go("/stake");
          }}
        >
          STAKE
        </div>
        <div className="bottom-button">
          <div
            className="withdraw"
            onClick={() => {
              Control.go("/withdraw");
            }}
          >
            WITHDRAW
          </div>
          <div className="harvest">HARVEST</div>
        </div>
      </div>
      <Footer></Footer>
    </DetailsStyle>
  );
};
// details style start
const DetailsStyle = styled.div`
  position: relative;
  height: 1035px;
  margin: auto;
  box-sizing: border-box;
  .footer-bg {
    position: relative;
  }
  .content-box {
    position: relative;
    margin: 202px auto;
    width: 593px;
    height: 632px;
    box-shadow: inset 0px 0px 60px #00a3ff;
    box-sizing: border-box;
    padding: 0 70px;
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
      .right-con {
        width: 159px;
        height: 39px;
        text-align: center;
        line-height: 39px;
        border: 2px solid #6788ff;
        border: 2px solid #ddd;
        border-image: -webkit-linear-gradient(to right, #6788ff, #d4484b) 20 20;
        border-image: -moz-linear-gradient(to right, #6788ff, #d4484b) 20 20;
        border-image: -o-linear-gradient(to right, #6788ff, #d4484b) 20 20;
        border-image: linear-gradient(to right, #6788ff, #d4484b) 20 20;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #ffffff;
      }
    }
    .head:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.007) 100%
      );
    }
    .content {
      .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        padding: 27px 0;
      }
      .data {
        .data-item {
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
          color: #fff;
        }
        .data-item:last-child {
          padding: 0;
        }
      }
    }
    .stake {
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      cursor: pointer;
      height: 60px;
      margin-top: 47px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 60px;
      color: #ffffff;
      text-align: center;
      background: linear-gradient(90deg, #ef3c3c 0%, #f36061 100%);
    }
    .bottom-button {
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      display: flex;
      justify-content: space-between;
      padding-top: 25px;
      > div {
        width: 214px;
        height: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        cursor: pointer;
      }
      .withdraw {
        background: linear-gradient(90deg, #0cc2cd 0%, #21e5f1 100%);
      }
      .harvest {
        background: linear-gradient(90deg, #00bf7a 0%, #1ae59c 100%);
      }
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
    height: 100vh;
    overflow: scroll;
    margin: auto;
    background: url(${mobile_wholeBg});
    background-size: cover;
    .content-box {
      width: 6.7rem;
      height: 9.07rem;
      padding: 0 0.72rem;
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
          border-image: linear-gradient(to right, #6788ff, #d4484b) 10 10;
        }
      }
      .content {
        .title {
          font-size: 0.34rem;
          padding: 0.3rem 0;
          line-height: 0.4rem;
        }
        .data {
          .data-item {
            font-size: 0.26rem;
            padding-bottom: 0.26rem;
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      .stake {
        width: 5.26rem;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.34rem;
        margin-top: 0.73rem;
      }
      .bottom-button {
        padding-top: 0.3rem;
        .withdraw {
          width: 2.48rem;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.28rem;
        }
        .harvest {
          width: 2.48rem;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.28rem;
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
// details style end
export default Details;
