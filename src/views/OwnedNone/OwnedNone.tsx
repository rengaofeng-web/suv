import React from "react";
import styled from "styled-components";
import { Control } from "react-keeper";
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// 图片导入
import noCard from "../../assets/PC-config/NFT/NO-CARD.png"; // pc 右边的大飞船
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; // mobile 整体背景图
import mobile_noCard from "../../assets/Phone-config/NFT/NO-CARD.png"; // mobile 右边的大飞船
const OwnedNone: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  return (
    <OwnedStyle>
      <div className="container">
        <div className="title">NO CARD</div>
        <div className="left-content">
          <div className="text">
            You don't have a card yet, please click the button below to go to the blind box purchase
            interface!
          </div>
          <div
            className="goButton"
            onClick={() => {
              Control.go("/suvBox");
            }}
          >
            GO
          </div>
        </div>
      </div>
      <div className="right-noCard">
        <img src={!isM ? noCard : mobile_noCard} alt="" />
      </div>
      <Footer></Footer>
    </OwnedStyle>
  );
};
// ownedNone style start
const OwnedStyle = styled.div`
  position: relative;
  /* max-width: 1920px;
  min-width: 1200px; */
  height: 1350px;
  margin: auto;
  box-sizing: border-box;

  .container {
    position: relative;
    width: 1200px;
    height: 650px;
    margin: 176px auto 300px;
    background: linear-gradient(180deg, rgba(5, 22, 43, 0.8) 0%, rgba(5, 22, 43, 0.24) 106.72%);
    box-shadow: inset 0px 0px 60px #00a3ff;
    background: linear-gradient(-45deg, transparent 36px, transparent 0) bottom right,
      linear-gradient(45deg, transparent 36px, transparent 0) bottom left,
      linear-gradient(135deg, #2f9ad7 37px, transparent 0) top left,
      linear-gradient(-135deg, #2f9ad7 38px, transparent 0) top right;
    background-size: 50% 51%;
    background-repeat: no-repeat;
    border-top: 5px solid #2f9ad7;
    -webkit-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -moz-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -ms-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    -o-clip-path: polygon(
      50px 0px,
      calc(100% - 50px) 0,
      100% 50px,
      100% calc(100% - 50px),
      calc(100% - 50px) 100%,
      50px 100%,
      0 calc(100% - 50px),
      0 50px
    );
    box-sizing: border-box;
    /* padding-left: 89px; */
    .title {
      width: 100%;
      text-align: center;
      font-family: Impact;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      letter-spacing: 0.175em;
      color: #57f4f4;
      padding-top: 63px;
    }
    .left-content {
      width: 550px;
      padding-top: 129px;
      margin-left: 89px;
      .text {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 214.69%;
        color: rgba(255, 255, 255, 0.8);
      }
      .goButton {
        position: relative;
        width: 484px;
        height: 86px;
        margin-top: 69px;
        background: linear-gradient(90deg, #ffe24a 0%, rgba(255, 226, 74, 0) 105.89%);
        font-family: Impact;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        letter-spacing: 0.445em;
        color: #ffffff;
        box-sizing: border-box;
        padding-left: 156px;
        line-height: 86px;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
      }
      .goButton:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 256px;
        width: 55px;
        height: 3px;
        background: linear-gradient(-135deg, transparent 2px, #fff 0) top right;
      }
      .goButton:after {
        content: "";
        position: absolute;
        top: 44%;
        left: 292.5px;
        width: 20px;
        height: 3px;
        background: linear-gradient(-45deg, transparent 2px, #fff 0) bottom right;
        transform: rotate(45deg);
      }
    }
  }
  .right-noCard {
    position: absolute;
    top: 177px;
    right: 356px;
  }
  /* 左右边框 */
  .container:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2c94ce, transparent);
  }
  .container:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2c94ce, transparent);
  }
  /* mobile styele start */
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    height: 100vh;
    overflow-y: scroll;
    margin: auto;
    background-image: url(${mobile_wholeBg});
    .footer-box {
      position: relative;
    }
    .right-noCard {
      top: 7.5rem;
      right: 0.4rem;
      img {
        width: 4.17rem;
      }
    }
    .container {
      width: 6.7rem;
      height: 8.68rem;
      background: none;
      backdrop-filter: blur(0px);
      margin: 2.36rem auto 3rem;
      background: linear-gradient(-45deg, transparent 0.36rem, rgba(4, 10, 58, 0.2) 0) bottom right,
        linear-gradient(45deg, transparent 0.36rem, rgba(4, 10, 58, 0.2) 0) bottom left,
        linear-gradient(135deg, #2f9ad7 0.36rem, rgba(4, 10, 58, 0.2) 0) top left,
        linear-gradient(-135deg, #2f9ad7 0.36rem, rgba(4, 10, 58, 0.2) 0) top right;
      -webkit-clip-path: polygon(
        0.5rem 0px,
        calc(100% - 0.5rem) 0,
        100% 0.5rem,
        100% calc(100% - 0.5rem),
        calc(100% - 0.5rem) 100%,
        0.5rem 100%,
        0 calc(100% - 0.5rem),
        0 0.5rem
      );
      box-shadow: inset 0px 0px 0.6rem #00a3ff;
      border-top: 0.03rem solid #2f9ad7;
      padding: 0;
      ::before,
      ::after {
        width: 0.03rem;
      }
      .title {
        padding-top: 0.81rem;
        font-size: 0.42rem;
        ::before {
          width: 2rem;
          height: 0.03rem;
          background: #2f9ad7;
          transform: rotate(-45deg);
          content: "";
          position: absolute;
          left: -0.52rem;
          top: 0;
        }
        ::after {
          width: 2rem;
          height: 0.03rem;
          background: #2f9ad7;
          transform: rotate(45deg);
          content: "";
          position: absolute;
          right: -0.52rem;
          top: 0;
        }
      }
      .left-content {
        text-align: center;
        width: auto;
        padding-top: 0.44rem;
        margin-left: 0;
        .text {
          width: 5.52rem;
          margin: auto;
          font-size: 0.3rem;
        }
        .goButton {
          width: 5.18rem;
          height: 0.9rem;
          padding-left: 1.77rem;
          margin: auto;
          text-align: left;
          font-size: 0.4rem;
          line-height: 0.85rem;
          margin-top: 0.66rem;
          ::before {
            left: 2.77rem;
            width: 0.55rem;
            height: 0.03rem;
          }
          ::after {
            left: 3.1rem;
            width: 0.25rem;
            height: 0.03rem;
            top: 44%;
          }
        }
      }
    }
  }
  /* mobile styele end */
`;
// ownedNone style end
// 导出组件
export default OwnedNone;
