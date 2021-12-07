import React from "react";
import styled from "styled-components";
import { Control } from "react-keeper";
// 图片导入
import wholeBg from "../../assets/PC-config/bg1.jpg"; //整体背景图
import noCard from "../../assets/PC-config/NFT/NO-CARD.png"; //右边的大飞船
const OwnedNone: React.FC<{}> = () => {
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
        <img src={noCard} alt="" />
      </div>
    </OwnedStyle>
  );
};
const OwnedStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  background-image: url(${wholeBg});
  box-sizing: border-box;
  .container {
    position: absolute;
    left: 50%;
    top: 176px;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 650px;
    /* display: flex; */
    background: linear-gradient(180deg, rgba(5, 22, 43, 0.8) 0%, rgba(5, 22, 43, 0.24) 106.72%);
    box-shadow: inset 0px 0px 60px #00a3ff;
    /* backdrop-filter: blur(10px); */
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
    padding-left: 89px;
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
        /* background: #fff; */
        background: linear-gradient(-135deg, transparent 2px, #fff 0) top right;
        /* border-top-right-radius: 3px; */
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
`;
export default OwnedNone;
