import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import wholeBg from "../../assets/PC-config/bg1.jpg"; //整体背景图
import kejikuang from "../../assets/PC-config/NFT/kejikuang.png"; //宝箱背景
import baoxiang_bg from "../../assets/gif+mov/gif.gif"; //宝箱背景 gif
// import mov from "../../assets/gif+mov/mov.mov";
const Nft: React.FC<{}> = () => {
  let [swiperIndex, setSwiperIndex] = useState(0);
  let [quantity, setquantity] = useState(1);
  const leftButton = useRef(null);
  const rightButton = useRef(null);
  useEffect(() => {
    let swiper = new Swiper(".swiper-container", {
      loop: false,
    });
    if (leftButton.current) {
      let target = leftButton.current as HTMLDivElement;
      target.onclick = () => {
        let index = swiperIndex;
        index--;
        if (swiperIndex <= 0) return false;
        setSwiperIndex(index);
        setTimeout(() => {
          swiper.slideTo(index);
        });
      };
    }
    if (rightButton.current) {
      let target = rightButton.current as HTMLDivElement;
      target.onclick = () => {
        let index = swiperIndex;
        index++;
        if (index > 2) return false;
        setSwiperIndex(index);
        setTimeout(() => {
          swiper.slideTo(index);
        });
      };
    }
  });
  return (
    <NftStyle>
      <div className="content-box">
        <div className="left-operation-main">
          {/* 模拟外边框 */}
          <div className="top-line"></div>
          <div className="bottom-line"></div>
          <div className="left-operation">
            <div className="baoxiang-bg">
              <img src={baoxiang_bg} alt="" className="baoxiang_bg" />
              <div className="swiper swiper-no-swiping ">
                <div className="swiper-container">
                  <div className="swiper-wrapper ">
                    <div className="swiper-slide">
                      <img
                        src={
                          require("../../assets/PC-config/NFT/baoxiang1.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={
                          require("../../assets/PC-config/NFT/baoxiang2.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={
                          require("../../assets/PC-config/NFT/baoxiang3.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              <div className="previous" ref={leftButton}>
                <img
                  src={require("../../assets/PC-config/NFT/left.png").default}
                  alt=""
                />
              </div>
              <div className="number">{swiperIndex + 1}/3</div>
              <div className="next" ref={rightButton}>
                <img
                  src={require("../../assets/PC-config/NFT/left.png").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right-opertion">
            <div className="title">SUV BOX</div>
            <div className="amount">Remaining Amount:-</div>
            <div className="subtotal">
              Subtotal:<span>1 BNB</span>
            </div>
            <div className="quantity">Quantity</div>
            <div className="controll">
              <div
                className="reduce"
                onClick={() => {
                  if (quantity === 1) return false;
                  setquantity(--quantity);
                }}
              >
                -
              </div>
              <div className="num">{quantity}</div>
              <div
                className="add"
                onClick={() => {
                  setquantity(++quantity);
                }}
              >
                +
              </div>
            </div>
            <div className="buy">BUY NOW</div>
          </div>
        </div>
        <div className="right-jackpot">
          {/* <video src={mov}></video> */}
        </div>
      </div>
    </NftStyle>
  );
};
const NftStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  background-image: url(${wholeBg});
  box-sizing: border-box;
  .content-box {
    position: absolute;
    left: 50%;
    top: 202px;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 558px;
    .left-operation-main {
      position: relative;
      width: 530px;
      .top-line {
        position: absolute;
        top: -14px;
        left: 34px;
        background-image: linear-gradient(to right, #2ba3c9, transparent);
        width: 90%;
        height: 5px;
      }
      .top-line:before {
        content: "";
        position: absolute;
        left: -23px;
        top: -9px;
        width: 5px;
        height: 65px;
        background-image: linear-gradient(to bottom, #2ba3c9, #31bae6);
        -webkit-transform: rotate(46deg);
        -ms-transform: rotate(46deg);
        transform: rotate(46deg);
      }
      .top-line:after {
        content: "";
        position: absolute;
        left: -46px;
        top: 44px;
        width: 5px;
        height: 65px;
        background: #31bae6;
      }
      .bottom-line {
        position: absolute;
        bottom: -20px;
        right: 25px;
        background-image: linear-gradient(to right, transparent, #2ea8d0);
        width: 90%;
        height: 5px;
        border-bottom-right-radius: 3px;
      }
      .bottom-line:before {
        content: "";
        position: absolute;
        right: -23px;
        bottom: -9px;
        width: 5px;
        height: 65px;
        background-image: linear-gradient(to bottom, #32bbe7, #2ea8d0);
        -webkit-transform: rotate(46deg);
        -ms-transform: rotate(46deg);
        transform: rotate(46deg);
        border-bottom-right-radius: 3px;
        border-top-right-radius: 2px;
      }
      .bottom-line:after {
        content: "";
        position: absolute;
        right: -46px;
        bottom: 44px;
        width: 5px;
        height: 65px;
        background: #32bbe7;
        border-bottom-right-radius: 2px;
        /* background-image: linear-gradient(to bottom, #2ba3c9, #31bae6); */
      }
      .left-operation {
        width: 530px;
        height: 550px;
        box-sizing: border-box;
        padding-left: 54px;
        padding-top: 54px;
        box-shadow: inset 0px 0px 30px #00a3ff;
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
        background: linear-gradient(-45deg, #177ab1 23px, rgba(0, 0, 0, 0.6) 0)
            bottom right,
          linear-gradient(45deg, #177ab1 23px, rgba(0, 0, 0, 0.6) 0) bottom left,
          linear-gradient(135deg, #177ab1 23px, rgba(0, 0, 0, 0.6) 0) top left,
          linear-gradient(-135deg, #177ab1 23px, rgba(0, 0, 0, 0.6) 0) top right;
        background-size: 50% 51%;
        background-repeat: no-repeat;
        border: 3px solid #177ab1;
        .baoxiang-bg {
          width: 233.44px;
          height: 321.09px;
          background-image: url(${kejikuang});
          position: relative;
          .baoxiang_bg {
            position: absolute;
            z-index: -1;
          }
          .swiper {
            position: absolute;
            left: 12px;
            top: 51px;
            /* padding-top: 50px;
            padding-left: 22px; */
            width: 165px;
            .swiper-wrapper {
              transition: all 0.5s;
              transition-duration: 300ms !important;
            }
            .swiper-slide {
              padding-left: 13px;
              box-sizing: border-box;
            }
          }
        }
      }
      .control {
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        padding-left: 24px;
        padding-right: 0px;
        width: 233px;
        .previous {
          width: 46px;
          height: 46px;
          img {
            width: 35.06px;
            height: 46.13px;
          }
          cursor: pointer;
        }
        .number {
          color: #ffffff;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          padding-left: 12px;
          padding-right: 20px;
        }
        .next {
          img {
            width: 35.06px;
            height: 46.13px;
            transform: rotate(180deg);
          }
          cursor: pointer;
        }
      }
      .right-opertion {
        position: absolute;
        right: 67px;
        top: 106px;
        color: #fff;
        width: 184px;
        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          color: #ffffff;
        }
        .amount {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 18px;
        }
        .subtotal {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 80px;
          > span {
            color: #fff;
          }
        }
        .quantity {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 10px;
        }
        .controll {
          display: flex;
          padding-top: 17px;
          .reduce {
            width: 51px;
            height: 25px;
            background: linear-gradient(90deg, #aaaaaa 0%, #cccccc 123.96%);
            text-align: center;
            line-height: 25px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            color: #ffffff;
            cursor: pointer;
          }
          .num {
            flex: 1;
            text-align: center;
          }
          .add {
            width: 51px;
            height: 25px;
            background: linear-gradient(90deg, #ff4d4d 0%, #f01d1d 100%);
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
            text-align: center;
            line-height: 25px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            color: #ffffff;
            cursor: pointer;
          }
        }
        .buy {
          width: 186px;
          height: 46px;

          background: linear-gradient(
            90deg,
            #ffe24a 0%,
            rgba(255, 226, 74, 0) 105.65%
          );
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          line-height: 46px;
          margin-top: 40px;
          color: #ffffff;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
`;
export default Nft;
