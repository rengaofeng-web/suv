import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import Swiper from "swiper";
// import "swiper/css/swiper.css";
const NftPopup: React.FC<{}> = () => {
  const left = useRef(null);
  const right = useRef(null);
  useEffect(() => {
    // let mySwiper = new Swiper(".swiper-container", {
    //   loop: false,
    //   slidesPerView: 3,
    // });
    // if (left.current) {
    //   let l = left.current as HTMLDivElement;
    //   l.onclick = () => {
    //     setTimeout(() => {
    //       mySwiper.slideTo(0, 1000, false);
    //     });
    //     console.log(1111);
    //   };
    // }
    // if (right.current) {
    //   let r = right.current as HTMLDivElement;
    //   r.onclick = () => {
    //     console.log(2222);
    //     setTimeout(() => {
    //       mySwiper.slideTo(3, 1000, false);
    //     });
    //   };
    // }
  });
  return (
    <PopupStyle>
      <div className="popup-mask">
        <div className="content">
          <div className="congratulation">Congratulation! (1/4)</div>
          <div className="prize-exhibition">
            {/* swiper-no-swiping  */}
            <div className="prize ">
              <div className="swiper-container">
                <div className="swiper-wrapper ">
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan5.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan4.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan3.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan3.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan3.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={
                        require("../../assets/PC-config/NFT/feichuan3.png")
                          .default
                      }
                      alt=""
                    />
                    {/* <div className="identifier">#13245</div> */}
                  </div>
                </div>
                <div className="prev" ref={left}>
                  左
                </div>
                <div className="next" ref={right}>
                  右
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* close botton */}
        <div className="close-box-bg">
          <div className="close-box">
            <div className="close-button">+</div>
          </div>
        </div>
      </div>
    </PopupStyle>
  );
};
// nftSPopup style start
const PopupStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: none;
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
      background: linear-gradient(
            -45deg,
            transparent 36px,
            rgba(4, 10, 58, 0.3) 0
          )
          bottom right,
        linear-gradient(45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom
          left,
        linear-gradient(135deg, #33bfeb 36px, rgba(4, 10, 58, 0.3) 0) top left,
        linear-gradient(-135deg, #33bfeb 36px, rgba(4, 10, 58, 0.3) 0) top right;
      background-size: 50% 51%;
      background-repeat: no-repeat;
      border-top: 5px solid #33bfeb;
      .congratulation {
        padding-top: 45px;
        padding-left: 130px;
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
        .prize {
          width: 100%;
          .prev,
          .next {
            width: 43px;
            height: 43px;
            background: #666;
          }
          .swiper-slide {
            width: 356.667px !important;
          }
        }
        .peize-item {
          margin-right: 38px;
          position: relative;
          .identifier {
            position: absolute;
            right: 85px;
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
      background: linear-gradient(
        to bottom,
        #eb3f3f 66%,
        rgba(235, 63, 63, 0) 130.7%
      );

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
`;
// nftSPopup style end
export default NftPopup;
