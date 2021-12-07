import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
// 图片导入
import wholeBg from '../../assets/PC-config/bg1.jpg' //整体背景图
const Owned: React.FC<{}> = () => {
  const leftButton = useRef(null)
  const rightButton = useRef(null)
  useEffect(() => {
    let mySwiper = new Swiper('.owned-swiper', {
      loop: false,
      slidesPerView: 3,
    })
    if (leftButton.current) {
      let left_button = leftButton.current as HTMLDivElement
      left_button.onclick = () => {
        mySwiper.slidePrev()
      }
    }
    if (rightButton.current) {
      let right_button = rightButton.current as HTMLDivElement
      right_button.onclick = () => {
        mySwiper.slideNext()
      }
    }
  })
  return (
    <OwnedSttyle>
      <div className="content">
        <div className="title">OWNED</div>
        <div className="container">
          {/* swiper-no-swiping 阻止拖动 */}
          <div className="swiper-container swiper-no-swiping  owned-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src={
                    require('../../assets/PC-config/NFT/feichuan5.png').default
                  }
                  alt=""
                />
                <div className="identifier">#13245</div>
              </div>
              <div className="swiper-slide">
                <img
                  src={
                    require('../../assets/PC-config/NFT/feichuan4.png').default
                  }
                  alt=""
                />
                <div className="identifier">#13245</div>
              </div>
              <div className="swiper-slide">
                <img
                  src={
                    require('../../assets/PC-config/NFT/feichuan3.png').default
                  }
                  alt=""
                />
                <div className="identifier">#13245</div>
              </div>
              <div className="swiper-slide">
                <img
                  src={
                    require('../../assets/PC-config/NFT/feichuan3.png').default
                  }
                  alt=""
                />
                <div className="identifier">#13245</div>
              </div>
            </div>
          </div>
        </div>
        <div className="number">(1/4)</div>
        <div className="controll">
          <div className="prev" ref={leftButton}></div>
          <div className="next" ref={rightButton}></div>
        </div>
      </div>
    </OwnedSttyle>
  )
}
// owned style start
const OwnedSttyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1035px;
  margin: auto;
  background-image: url(${wholeBg});
  box-sizing: border-box;
  .content {
    position: absolute;
    left: 50%;
    top: 176px;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 650px;
    /* display: flex; */
    background: linear-gradient(
      180deg,
      rgba(5, 22, 43, 0.8) 0%,
      rgba(5, 22, 43, 0.24) 106.72%
    );
    box-shadow: inset 0px 0px 60px #00a3ff;
    backdrop-filter: blur(10px);
    background: linear-gradient(
          -45deg,
          transparent 36px,
          rgba(4, 10, 58, 0.3) 0
        )
        bottom right,
      linear-gradient(45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom
        left,
      linear-gradient(135deg, #2f9ad7 37px, rgba(4, 10, 58, 0.3) 0) top left,
      linear-gradient(-135deg, #2f9ad7 38px, rgba(4, 10, 58, 0.3) 0) top right;
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
    .container {
      width: 80%;
      margin: auto;
      box-sizing: border-box;
      padding-left: 30px;
      .swiper-slide {
        position: relative;
        width: 320px !important;
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
    .number {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      color: #57f4f4;
      text-align: center;
      padding-top: 19px;
    }
    .controll {
      .prev,
      .next {
        width: 43px;
        height: 43px;
        background: #666;
      }
      .prev {
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
        content: '';
        position: absolute;
        left: -34px;
        top: -34px;
        width: 150%;
        height: 150%;
        /* background-color: #00a3ff; */
        background: linear-gradient(
          90deg,
          #ffdf70 54%,
          rgba(255, 223, 112, 0) 100%
        );
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
        content: '';
        position: absolute;
        right: -35px;
        top: 8px;
        width: 150%;
        height: 150%;
        /* background-color: #00a3ff; */
        background: linear-gradient(
          to left,
          #ffdf70 54%,
          rgba(255, 223, 112, 0) 100%
        );
        border-radius: 1px;
        transform: rotate(45deg);
      }
    }
  }
  /* 左右边框 */
  .content:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2c94ce, transparent);
  }
  .content:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2c94ce, transparent);
  }
`
// owned style end
// 导出组件
export default Owned
