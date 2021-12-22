import React, { useEffect, useRef } from "react";
import { Control } from "react-keeper";
import styled from "styled-components";
import isMobile from "is-mobile";
import Swiper from "swiper";
import "swiper/css/swiper.css";
interface Props {
  change: Function;
}
const SuvBoxPopup: React.FC<Props> = (props) => {
  const isM: boolean = isMobile();
  const leftButton = useRef(null);
  const rightButton = useRef(null);
  let { change } = props;
  let show = sessionStorage.getItem("showNftPopup")
    ? Number(sessionStorage.getItem("showNftPopup"))
    : 0;
  useEffect(() => {
    let mySwiper = new Swiper(".popup-swiper", {
      loop: false,
      slidesPerView: !isM ? 3 : 2,
    });
    if (leftButton.current) {
      let left_button = leftButton.current as HTMLDivElement;
      left_button.onclick = () => {
        mySwiper.slidePrev();
      };
    }
    if (rightButton.current) {
      let right_button = rightButton.current as HTMLDivElement;
      right_button.onclick = () => {
        mySwiper.slideNext();
      };
    }
  });
  // 关闭窗口
  const close = () => {
    change();
    sessionStorage.setItem("showNftPopup", "0");
  };
  return (
    <PopupStyle style={{ display: show ? "block" : "none" }}>
      <div className="popup-mask">
        <div className="content">
          <div className="congratulation">
            Congratulation!
            {!isM ? <span>(1/4)</span> : null}
          </div>
          <div className="prize-exhibition">
            {/* swiper-no-swiping  阻止拖动*/}
            <div className="prize ">
              <div className="swiper-container popup-swiper swiper-no-swiping">
                <div className="swiper-wrapper ">
                  <div className="swiper-slide">
                    <img
                      src={
                        !isM
                          ? require("../../assets/PC-config/NFT/feichuan5.png").default
                          : require("../../assets/Phone-config/NFT/feichuan5.png").default
                      }
                      alt=""
                    />
                    <div className="identifier">#13245</div>
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        !isM
                          ? require("../../assets/PC-config/NFT/feichuan4.png").default
                          : require("../../assets/Phone-config/NFT/feichuan4.png").default
                      }
                      alt=""
                    />
                    <div className="identifier">#13245</div>
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        !isM
                          ? require("../../assets/PC-config/NFT/feichuan3.png").default
                          : require("../../assets/Phone-config/NFT/feichuan3.png").default
                      }
                      alt=""
                    />
                    <div className="identifier">#13245</div>
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        !isM
                          ? require("../../assets/PC-config/NFT/feichuan3.png").default
                          : require("../../assets/Phone-config/NFT/feichuan3.png").default
                      }
                      alt=""
                    />
                    <div className="identifier">#13245</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controll">
              <div className="prev" ref={leftButton}></div>
              {isM ? <div className="number">(1/5)</div> : null}
              <div className="next" ref={rightButton}></div>
            </div>
          </div>
          <div className="bottom-button">
            <div className="buy-again" onClick={close}>
              Buy Again
            </div>
            <div
              className="stake"
              onClick={() => {
                close();
                Control.go("/nftFarams");
              }}
            >
              Stake
            </div>
          </div>
        </div>
        {/* close botton */}
        <div className="close-box-bg">
          <div className="close-box" onClick={close}>
            <div className="close-button" onClick={() => {}}>
              +
            </div>
          </div>
        </div>
      </div>
    </PopupStyle>
  );
};
// SuvBoxPopup style start
const PopupStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  /* display: none; */
  .popup-mask {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 101;
    width: 1200px;
    height: 650px;
    transform: translate(-50%, -50%);
    .content {
      /* overflow: hidden; */
      width: 1200px;
      height: 650px;
      background: rgba(5, 22, 43, 0.95);
      box-shadow: inset 0px 0px 60px #00a3ff;
      color: #fff;
      box-sizing: border-box;
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
      background: linear-gradient(-45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom right,
        linear-gradient(45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom left,
        linear-gradient(135deg, #33bfeb 36px, rgba(4, 10, 58, 0.3) 0) top left,
        linear-gradient(-135deg, #33bfeb 36px, rgba(4, 10, 58, 0.3) 0) top right;
      background-size: 50% 51%;
      background-repeat: no-repeat;
      border-top: 5px solid #33bfeb;
      .congratulation {
        padding-top: 45px;
        padding-left: 138px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.8);
      }
      .prize-exhibition {
        display: flex;
        padding-left: 130px;
        padding-top: 20px;
        position: relative;
        .prize {
          width: 90%;
          position: relative;
          box-sizing: border-box;
          padding-left: 8px;
          .swiper-slide {
            width: 331.667px !important;
            .identifier {
              position: absolute;
              right: 116px;
              bottom: 43px;
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              color: #ffffff;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            }
          }
        }
        .controll {
          .prev,
          .next {
            width: 43px;
            height: 43px;
            background: #666;
            z-index: 10;
          }
          .prev {
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
            background-color: transparent;
            position: absolute;
            left: 80px;
            top: 42%;
            transform: rotate(-45deg);
            cursor: pointer;
          }
          .prev:before {
            content: "";
            position: absolute;
            left: -34px;
            top: -34px;
            width: 150%;
            height: 150%;
            /* background-color: #00a3ff; */
            background: linear-gradient(90deg, #ffdf70 54%, rgba(255, 223, 112, 0) 100%);
            border-radius: 1px;
            transform: rotate(45deg);
          }
          .next {
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
            background-color: transparent;
            position: absolute;
            right: 80px;
            top: 42%;
            transform: rotate(-45deg);
            z-index: 10;
            cursor: pointer;
          }
          .next:before {
            content: "";
            position: absolute;
            right: -35px;
            top: 8px;
            width: 150%;
            height: 150%;
            /* background-color: #00a3ff; */
            background: linear-gradient(to left, #ffdf70 54%, rgba(255, 223, 112, 0) 100%);
            border-radius: 1px;
            transform: rotate(45deg);
          }
        }
      }
      .bottom-button {
        width: 100%;
        display: flex;
        padding-left: 300px;
        padding-top: 27px;
        > div {
          width: 277px;
          height: 59px;
          text-align: center;
          line-height: 59px;
          /* 阻止选中文字 */
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          cursor: pointer;
        }
        .buy-again {
          background: linear-gradient(90deg, #08b8c4 0%, #22e5f2 100%);
          margin-right: 46px;
        }
        .stake {
          background: linear-gradient(90deg, #ef3b3b 0%, #f36061 100%);
        }
      }
    }
    .content:before {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      background-image: linear-gradient(to bottom, #33bfeb, transparent);
    }
    .content:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      right: 0;
      top: 0;
      background-image: linear-gradient(to bottom, #33bfeb, transparent);
    }
  }
  .close-box-bg {
    /* background: rgba(0, 0, 0, 1); */
    position: absolute;
    right: 0px;
    top: 0px;
    -webkit-transform: rotate(111deg);
    -ms-transform: rotate(111deg);
    transform: rotate(182deg) translate(-4px, -1px);
    overflow: hidden;
    width: 45px;
    height: 42px;
    /* box-shadow: 0px 0px 30px #00a3ff; */
    .close-box {
      position: absolute;
      left: -63px;
      top: 8px;
      width: 100px;
      height: 100px;
      -webkit-transform: rotate(-138deg);
      -ms-transform: rotate(-138deg);
      -webkit-transform: rotate(-138deg);
      -ms-transform: rotate(-138deg);
      transform: rotate(-138deg);
      background: linear-gradient(to bottom, #eb3f3f 66%, rgba(235, 63, 63, 0) 130.7%);

      .close-button {
        position: absolute;
        left: 39px;
        top: 68px;
        width: 17px;
        height: 35px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        color: #fff;
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        text-align: center;
        background: linear-gradient(to bottom, #fff 55.99%, transparent 96.7%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .close-box:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 750px) {
    .popup-mask {
      width: 6.69rem;
      height: 9.86rem;
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-clip-path: polygon(
          0.5rem 0px,
          calc(100% - 0.8rem) 0,
          100% 0.8rem,
          100% calc(100% - 0.5rem),
          calc(100% - 0.5rem) 100%,
          0.5rem 100%,
          0 calc(100% - 0.5rem),
          0 0.5rem
        );
        background: linear-gradient(-45deg, transparent 0.26rem, rgba(4, 10, 58, 0.3) 0) bottom
            right,
          linear-gradient(45deg, transparent 0.26rem, rgba(4, 10, 58, 0.3) 0) bottom left,
          linear-gradient(135deg, #33bfeb 0.26rem, rgba(4, 10, 58, 0.3) 0) top left,
          linear-gradient(-135deg, #33bfeb 0.26rem, rgba(4, 10, 58, 0.3) 0) top right;
        border-top: 0.05rem solid #33bfeb;
        ::before,
        ::after {
          width: 0.05rem;
        }
        .congratulation {
          padding-left: 0.8rem;
          padding-top: 0.6rem;
          font-size: 0.3rem; 
          ::before {
            content: "";
            position: absolute;
            left: -0.55rem;
            top: 0;
            width: 2rem;
            height: 0.05rem;
            background-color: #31bbe7;
            transform: rotate(-45deg);
          }
          ::after {
            content: "";
            position: absolute;
            right: -0.59rem;
            top: 0.33rem;
            width: 2rem;
            height: 0.05rem;
            background-color: #31bbe7;
            transform: rotate(45deg);
          }
        }
        .prize-exhibition {
          padding: 0;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          margin-left: 0.1rem;
          .prize {
            width: 100%;
            padding: 0;
            .swiper-slide {
              width: 2.8rem !important;
              margin-right: 0.1rem;
              img {
                width: 100%;
              }
              .identifier {
                right: 0.85rem;
                bottom: 0.52rem;
                font-size: 0.22rem;
              }
            }
          }
          .controll {
            position: absolute;
            left: 1.5rem;
            bottom: -1rem;
            display: flex;
            .number {
              padding-left: 0.72rem;
              padding-right: 0.72rem;
              line-height: 0.4rem;
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 0.3rem;
              letter-spacing: 0.135em;
              color: #57f4f4;
            }
            .prev,
            .next {
              position: relative;
              left: 0;
              top: 0;
            }
            .prev {
              width: 0.43rem;
              height: 0.43rem;
              ::before {
                left: -0.28rem;
                top: -0.33rem;
              }
            }
            .next {
              width: 0.43rem;
              height: 0.43rem;
              ::before {
                right: -0.31rem;
                top: 0.08rem;
              }
            }
          }
        }
        .bottom-button {
          padding: 0;
          display: block;
          margin-top: 1.64rem;
          > div {
            width: 5.57rem;
            height: 0.9rem;
            line-height: 0.9rem;
            margin: auto;
            font-size: 0.3rem;
          }
          .buy-again {
            margin: auto;
            margin-bottom: 0.3rem;
          }
        }
      }
      .close-box-bg {
        width: 0.66rem;
        height: 0.63rem;
        right: 0.04rem;
        .close-box {
          left: -0.5rem;
          top: 0.2rem;
          width: 1rem;
          height: 1rem;
          background: linear-gradient(to top, #eb3f3f -30%, rgba(235, 63, 63, 0) 78.7%);
          border-radius: 0;
          .close-button {
            left: 0.25rem;
            top: auto;
            bottom: 0.05rem;
            width: 0.57rem;
            height: 0.35rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 0.4rem;
            line-height: 0.35rem;
          }
        }
      }
    }
  }
`;
// SuvBoxPopup style end
export default SuvBoxPopup;
