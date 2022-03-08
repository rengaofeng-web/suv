import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";
import Swiper from "swiper";
import "swiper/css/swiper.css";

// 组件引入
import SuvBoxPopup from "../../components/SuvBoxPopup/SuvBoxPopup";
import Footer from "../../components/Footer/Footer"; //footer
// pc图片引入
import kejikuang from "src/assets/PC-config/NFT/kejikuang.png"; // pc 宝箱背景
import baoxiang_bg from "../../assets/PC-config/NFT/xuanzhaun_mp4.mp4"; //pc 宝箱背景 光环
import baoxiang1 from "../../assets/PC-config/NFT/baoxiang1.png"; // pc 宝箱1
import baoxiang2 from "../../assets/PC-config/NFT/baoxiang2.png"; //pc 宝箱2
import baoxiang3 from "../../assets/PC-config/NFT/baoxiang3.png"; //pc 宝箱3
import anniu from "../../assets/PC-config/NFT/anniu.svg";
import video from "../../assets/gif+mov/video.mp4";
import zhuangshi from "../../assets/PC-config/NFT/zhuangshi.svg";
// mobile 图片引入
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; //mobile 整体背景图
import mobile_kejikuang from "../../assets/Phone-config/NFT/kejikuang.png"; // mobile 宝箱背景
import mobile_baoxiangBg from "../../assets/PC-config/NFT/xuanzhaun_mp4.mp4"; //mobile 宝箱背景 光环
import baoxiang1_mobile from "../../assets/Phone-config/NFT/baoxiang1.png"; // mobile 宝箱1
import baoxiang2_mobile from "../../assets/Phone-config/NFT/baoxiang2.png"; //mobile 宝箱2
import baoxiang3_mobile from "../../assets/Phone-config/NFT/baoxiang3.png"; //mobile 宝箱3
import { contractAddresses, supportedChainId } from "src/sushi/lib/constants";
import useTokenBalance from "src/hooks/useTokenBalance";
import useAllowance from "src/hooks/useAllowance";
import useSushi from "src/hooks/useSushi";
import { getSushiContract } from "src/sushi/utils";
import useNftMint from "src/hooks/useNftMint";
import useModal from "src/hooks/useModal";

const SuvBox: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  let [swiperIndex, setSwiperIndex] = useState(0);
  let [quantity, setquantity] = useState(1);
  const leftButton = useRef(null);
  const rightButton = useRef(null);
  let [NftState, setState] = useState(false);
  let [blindBox, setBlindBox] = useState(1);
  const blindBoxArr = [1, 10, 100];
  const chengeState = () => {
    NftState ? setState(false) : setState(true);
  };

  const [nftNumber, setNftNumber] = useState(1);
  const [openResult, setOpenResult] = useState([]);
  const blindBoxPrice = 2000;

  const { onNftMint } = useNftMint();
  const sushi = useSushi();
  const [buying, setBuying] = useState(false);
  const allowance = useAllowance(getSushiContract(sushi));
  const sushiBalance = useTokenBalance(contractAddresses.sushi[supportedChainId]);

  useEffect(() => {
    if (openResult.length > 0) {
      chengeState();
      sessionStorage.setItem("showNftPopup", "1");
    }
  }, [openResult]);
  useEffect(() => {
    // 切换宝箱
    let swiper = new Swiper(".swiper-content", {
      loop: false,
    });
    if (leftButton.current) {
      let target = leftButton.current as HTMLDivElement;
      target.onclick = () => {
        let index = swiperIndex;
        index--;
        if (swiperIndex <= 0) return false;
        setSwiperIndex(index);
        // console.log(index)
        setBlindBox(blindBoxArr[index]);
        setTimeout(() => {
          swiper.slideTo(index);
          // swiper.slidePrev();
        }, 10);
      };
    }
    if (rightButton.current) {
      let target = rightButton.current as HTMLDivElement;
      target.onclick = () => {
        let index = swiperIndex;
        index++;
        if (index > 2) return false;
        setSwiperIndex(index);
        setBlindBox(blindBoxArr[index]);
        setTimeout(() => {
          swiper.slideTo(index);
          // swiper.slideNext();
        }, 10);
      };
    }
  });
  const buyNow = async () => {
    setBuying(true);
    let result = await onNftMint(quantity);
    setBuying(false);
    if (result) {
      setOpenResult(Object.values(result));
    }
  };
  return (
    <SuvBoxStyle>
      {/* 弹出框 */}
      <SuvBoxPopup
        change={chengeState}
        nftNumber={quantity}
        events={openResult}
        reset={() => {
          setOpenResult([]);
        }}
      ></SuvBoxPopup>
      <div className="content-box">
        <div className="left-operation-main">
          {/* 模拟外边框 */}
          <div className="top-line"></div>
          <div className="bottom-line"></div>
          <div className="left-operation">
            <div className="baoxiang-bg">
              {/* <img src={!isM ? baoxiang_bg : mobile_baoxiangBg} alt="" className="baoxiang_bg" /> */}
              <video
                src={baoxiang_bg}
                className="baoxiang_bg"
                autoPlay={true}
                loop={true}
                muted
              ></video>
              <div className="swiper swiper-no-swiping ">
                <div className="swiper-container swiper-content">
                  <div className="swiper-wrapper ">
                    <div className="swiper-slide">
                      <img src={!isM ? baoxiang1 : baoxiang1_mobile} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={!isM ? baoxiang2 : baoxiang2_mobile} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={!isM ? baoxiang3 : baoxiang3_mobile} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              {/* <div className="control-bg">
                <img src={anniu} alt="" />
              </div> */}
              {/* <div className="previous" ref={leftButton}></div> */}
              {/* <div className="number">{swiperIndex + 1}/3</div> */}
              {/* <div className="next" ref={rightButton}></div> */}
            </div>
          </div>
          <div className="right-opertion">
            <div className="title">SUV BOX</div>
            <div className="amount">Remaining Amount:-</div>
            <div className="subtotal">
              Subtotal:<span>{quantity * 2000} SUV</span>
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
                  if (quantity < 10) {
                    setquantity(++quantity);
                  }
                }}
              >
                +
              </div>
            </div>
            <div className="buy" onClick={buying ? () => null : buyNow}>
              {buying ? "Buying" : "BUY NOW"}
            </div>
          </div>
        </div>
        <div className="right-bg">
          <div className="right-jackpot">
            <div className="title">You have a chance to win the following prizes</div>
            <video src={video} autoPlay={true} loop={true} muted></video>
            <div className="bottom-decorate">
              <img src={zhuangshi} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </SuvBoxStyle>
  );
};
// SuvBox style start
const SuvBoxStyle = styled.div`
  position: relative;
  height: 1200px;
  margin: auto;
  box-sizing: border-box;

  .content-box {
    position: relative;
    width: 1400px;
    height: 558px;
    margin: 176px auto;
    display: flex;
    .left-operation-main {
      position: relative;
      margin-top: 80px;
      .top-line {
        position: absolute;
        top: -16px;
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
        bottom: -25px;
        right: 29px;
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
      }
      .left-operation {
        width: 523.19px;
        height: 487.92px;
        box-sizing: border-box;
        padding-left: 54px;
        padding-top: 65px;
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
        background: linear-gradient(-45deg, #177ab1 23px, rgba(0, 0, 0, 0.6) 0) bottom right,
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
            top: 24px;
            left: 20px;
          }
          .swiper {
            position: absolute;
            left: 12px;
            top: 76px;
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
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 24px;
        padding-right: 0px;
        width: 233px;
        .control-bg {
          position: absolute;
          z-index: -1;
        }
        .previous {
          width: 46px;
          height: 46px;
          cursor: pointer;
        }
        .number {
          color: #ffffff;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          padding: 0 20px 5px;
        }
        .next {
          width: 46px;
          height: 46px;
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

          background: linear-gradient(90deg, #ffe24a 0%, rgba(255, 226, 74, 0) 105.65%);
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
    .right-bg {
      width: 100%;
      background-color: #000;
      margin-left: 110px;
      width: 805.19px;
      height: 667.92px;
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
    }
    .right-jackpot {
      position: relative;
      width: 805.19px;
      height: 667.92px;
      border: 3px solid #1777ad;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 60px #00a3ff;
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
      background: linear-gradient(-45deg, #1777ad 23px, rgba(0, 0, 0, 0.6) 0) bottom right,
        linear-gradient(45deg, #1777ad 23px, #000 0) bottom left,
        linear-gradient(135deg, #1777ad 23px, rgba(0, 0, 0, 1) 0) top left,
        linear-gradient(-135deg, #1777ad 23px, rgba(0, 0, 0, 1) 0) top right;
      background-size: 50% 51%;
      background-repeat: no-repeat;
      .title {
        font-family: Impact;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 32px;
        /* identical to box height */
        letter-spacing: 0.05em;
        color: #53c1ff;
        padding-top: 56px;
        text-align: center;
      }
      video {
        mix-blend-mode: screen;
        margin-left: 70px;
        margin-top: 50px;
      }
      .bottom-decorate {
        margin: 0px 40px 0;
      }
    }
  }
  /* mobile style start */
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    height: 100vh;
    margin: auto;
    overflow-y: scroll;
    background-image: url(${mobile_wholeBg});
    background-repeat: repeat-y;
    .footer-box {
      position: relative;
    }
    .content-box {
      width: 6.7rem;
      height: auto;
      display: block;
      margin: 2.36rem auto 2rem;
      .left-operation-main {
        margin-top: 0.9rem;
        .top-line {
          position: absolute;
          top: -0.16rem;
          left: 0.53rem;
          width: 85%;
          height: 0.05rem;
          ::before {
            left: -0.33rem;
            top: -0.12rem;
            width: 0.05rem;
            height: 0.9rem;
            transform: rotate(47deg);
          }
          ::after {
            left: -0.65rem;
            top: 0.61rem;
            width: 0.05rem;
            height: 0.65rem;
          }
        }
        .bottom-line {
          bottom: -0.25rem;
          right: 0.45rem;
          width: 90%;
          height: 0.05rem;
          ::before {
            right: -0.31rem;
            bottom: -0.12rem;
            width: 0.05rem;
            height: 0.85rem;
          }
          ::after {
            right: -0.6rem;
            bottom: 0.6rem;
            width: 0.05rem;
            height: 0.65rem;
          }
        }
        .left-operation {
          width: 100%;
          height: 7.62rem;
          padding-top: 0.5rem;
          padding-left: 0.53rem;
          position: relative;
          box-shadow: inset 0px 0px 0.3rem #00a3ff;
          -webkit-clip-path: polygon(
            0.55rem 0px,
            calc(100% - 0.55rem) 0,
            100% 0.55rem,
            100% calc(100% - 0.55rem),
            calc(100% - 0.55rem) 100%,
            0.55rem 100%,
            0 calc(100% - 0.55rem),
            0 0.55rem
          );
          background: linear-gradient(-45deg, #177ab1 0.35rem, rgba(0, 0, 0, 0.6) 0) bottom right,
            linear-gradient(45deg, #177ab1 0.37rem, rgba(0, 0, 0, 0.6) 0) bottom left,
            linear-gradient(135deg, #177ab1 0.35rem, rgba(0, 0, 0, 0.6) 0) top left,
            linear-gradient(-135deg, #177ab1 0.35rem, rgba(0, 0, 0, 0.6) 0) top right;
          ::before {
            content: "";
            position: absolute;
            left: -0.58rem;
            top: 0;
            width: 2rem;
            height: 0.06rem;
            background-color: #1777ad;
            transform: rotate(-45deg);
            z-index: 1;
          }
          ::after {
            content: "";
            position: absolute;
            right: -0.575rem;
            top: 0;
            width: 2rem;
            height: 0.06rem;
            background-color: #1777ad;
            transform: rotate(45deg);
            z-index: 1;
          }
          .baoxiang-bg {
            width: 3.13rem;
            height: 4.3rem;
            background: url(${mobile_kejikuang});
            background-size: cover;
            .baoxiang_bg {
              width: 2.5rem;
              left: 0;
              top: 0;
            }
            .swiper {
              position: absolute;
              left: 0.12rem;
              top: 1rem;
              width: 2.2rem;
              .swiper-wrapper {
                transition: all 0.5s;
                transition-duration: 300ms !important;
              }
              .swiper-slide {
                padding-left: 0.13rem;
                box-sizing: border-box;
                img {
                  width: 2.14rem;
                }
              }
            }
          }
          .control {
            width: 2.5rem;
            padding-left: 0;
            margin-left: 0.1rem;
            display: flex;
            justify-content: space-between;
            .control-bg {
              img {
                width: 100%;
              }
            }
            .number {
              font-size: 0.24rem;
              padding: 0;
              padding-bottom: 0.05rem;
            }
            .previous,
            .next {
              width: 0.46rem;
              height: 0.46rem;
            }
          }
        }
        .right-opertion {
          left: 3.7rem;
          top: 1.15rem;
          width: 2.5rem;
          .title {
            font-size: 0.3rem;
          }
          .amount {
            font-size: 0.2rem;
            padding-top: 0.19rem;
          }
          .subtotal {
            padding-top: 1rem;
            font-size: 0.24rem;
          }
          .quantity {
            padding-top: 0.19rem;
            font-size: 0.24rem;
          }
          .controll {
            padding-top: 0.58rem;
            .reduce {
              width: 0.75rem;
              height: 0.45rem;
              line-height: 0.45rem;
              font-size: 0.3rem;
            }
            .add {
              width: 0.77rem;
              height: 0.45rem;
              line-height: 0.45rem;
              font-size: 0.3rem;
            }
            .num {
              font-size: 0.28rem;
              line-height: 0.45rem;
            }
          }
          .buy {
            position: absolute;
            right: 0;
            bottom: -1.8rem;
            width: 5.63rem;
            height: 0.9rem;
            line-height: 0.9rem;
            font-size: 0.34rem;
          }
        }
      }
      .right-bg {
        position: relative;
        width: 6.69rem;
        height: 5.5495rem;
        margin: 0;
        margin-top: 0.56rem;
        -webkit-clip-path: polygon(
          0.35rem 0px,
          calc(100% - 0.35rem) 0,
          100% 0.35rem,
          100% calc(100% - 0.35rem),
          calc(100% - 0.35rem) 100%,
          0.35rem 100%,
          0 calc(100% - 0.35rem),
          0 0.35rem
        );
        ::before {
          content: "";
          position: absolute;
          left: -0.62rem;
          top: 0;
          width: 2rem;
          height: 0.03rem;
          background-color: #1777ad;
          transform: rotate(-45deg);
          z-index: 1;
        }
        ::after {
          content: "";
          position: absolute;
          right: -0.62rem;
          top: 0;
          width: 2rem;
          height: 0.03rem;
          background-color: #1777ad;
          transform: rotate(45deg);
          z-index: 1;
        }
        .right-jackpot {
          width: 100%;
          height: 100%;
          border: 0.05rem solid #1777ad;
          box-shadow: inset 0px 0px 0.6rem #00a3ff;
          position: relative;
          -webkit-clip-path: polygon(
            0.35rem 0px,
            calc(100% - 0.35rem) 0,
            100% 0.35rem,
            100% calc(100% - 0.35rem),
            calc(100% - 0.35rem) 100%,
            0.35rem 100%,
            0 calc(100% - 0.35rem),
            0 0.35rem
          );
          background: linear-gradient(-45deg, #1777ad 0rem, rgba(0, 0, 0, 1) 0) bottom right,
            linear-gradient(45deg, #1777ad 0.23rem, #000 0) bottom left,
            linear-gradient(135deg, #1777ad 0.23rem, rgba(0, 0, 0, 1) 0) top left,
            linear-gradient(-135deg, #1777ad 0.23rem, rgba(0, 0, 0, 1) 0) top right;
          ::before {
            content: "";
            position: absolute;
            left: -0.71rem;
            bottom: 0;
            width: 2rem;
            height: 0.05rem;
            background-color: #1777ad;
            transform: rotate(-136deg);
            z-index: 1;
          }
          ::after {
            content: "";
            position: absolute;
            right: -0.71rem;
            bottom: 0;
            width: 2rem;
            height: 0.05rem;
            background-color: #1777ad;
            transform: rotate(136deg);
            z-index: 1;
          }
          .title {
            padding-top: 0.35rem;
            font-size: 0.28rem;
            width: 3.94rem;
            height: 0.68rem;
            margin: auto;
          }
          video {
            width: 5.2rem;
            margin: 0;
            margin-left: 0.65rem;
            margin-top: 0.5rem;
          }
          .bottom-decorate {
            margin: 0 0.33rem;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// SuvBox style end

export default SuvBox;
