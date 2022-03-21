import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// pc图片导入
import mobile_wholeBg from "../../assets/Phone-config/bg1.jpg"; // mobile 整体背景图
import feichuan5 from "../../assets/PC-config/NFT/feichuan5.png";
import feichuan4 from "../../assets/PC-config/NFT/feichuan4.png";
import feichuan3 from "../../assets/PC-config/NFT/feichuan3.png";
import { useWallet } from "use-wallet";
import useFarmRows from "src/hooks/useFarmRows";

import { nftBalance } from "src/sushi/utils";
import useStakedBalance from "src/hooks/useStakedBalance";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
const Owned: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  const leftButton = useRef(null);
  const rightButton = useRef(null);
  sessionStorage.setItem("ownedIndex", '0');
  // const { account } = useWallet();
  const { farmRows } = useFarmRows();
  const context = useWeb3React<any>();
  const {
    connector,
    library,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;
  const nftPools = farmRows.filter((item) => item.nftType && item.poolType === 3);

  const [cards, setCards] = useState([]);
  const [loadingCards, setLoadingCards] = useState(false);

  useEffect(() => {
    let mySwiper = new Swiper(".owned-swiper", {
      loop: false,
      slidesPerView: !isM ? 3 : 2,
    });
    let index = sessionStorage.getItem("ownedIndex")
      ? parseInt(sessionStorage.getItem("ownedIndex"))
      : 0;
    mySwiper.slideTo(index);
    if (leftButton.current) {
      let left_button = leftButton.current as HTMLDivElement;
      left_button.onclick = () => {
        mySwiper.slidePrev();
        let index = parseInt(sessionStorage.getItem("ownedIndex"));
        index--;
        if (index <= 0) return false;
        sessionStorage.setItem("ownedIndex", index.toString());
      };
    }
    if (rightButton.current) {
      let right_button = rightButton.current as HTMLDivElement;
      right_button.onclick = () => {
        let index = parseInt(sessionStorage.getItem("ownedIndex"));
        index++;
        if (index > 3) return false;
        sessionStorage.setItem("ownedIndex", index.toString());
        mySwiper.slideNext();
      };
    }
  }, []);
  return (
    <OwnedSttyle>
      <div className="content">
        <div className="title">OWNED</div>
        <div className="container">
          {/* swiper-no-swiping 阻止拖动 */}
          <div className="swiper-container swiper-no-swiping  owned-swiper">
            <div className="swiper-wrapper">
              {nftPools.map((item: any, index: number) => {
                return <CardCon key={index} farm={item} nftAmount={cards[index]} />;
              })}
            </div>
          </div>
        </div>
        {/* <div className="number">(1/4)</div> */}
        <div className="controll">
          <div className="prev" ref={leftButton}></div>
          <div className="next" ref={rightButton}></div>
        </div>
      </div>
      <Footer></Footer>
    </OwnedSttyle>
  );
};

const CardCon = (props: any) => {
  const context = useWeb3React<any>();
  const {
    connector,
    library,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;
  const stakedBalance = useStakedBalance(props.farm.pid);
  const [nftAmount, setNftAmount] = useState("0");
  const fetchNFTAmount = async () => {
    const result = await nftBalance(props.farm.tokenContract, account);
    setNftAmount(result?.toString());
  };
  useEffect(() => {
    fetchNFTAmount();
  }, [props.farm]);
  return (
    <div className="swiper-slide">
      <img src={props.farm.icon} alt="" />
      <div className="identifier">
        {props.farm.symbolShowing}
        <div className="identifier2">{nftAmount?.toString()}</div>
      </div>
    </div>
  );
};
// owned style start
const OwnedSttyle = styled.div`
  position: relative;
  height: 1140px;
  margin: auto;
  box-sizing: border-box;

  .content {
    position: relative;
    width: 1200px;
    height: 650px;
    margin: 176px auto;
    background: linear-gradient(180deg, rgba(5, 22, 43, 0.8) 0%, rgba(5, 22, 43, 0.24) 106.72%);
    box-shadow: inset 0px 0px 60px #00a3ff;
    backdrop-filter: blur(10px);
    background: linear-gradient(-45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom right,
      linear-gradient(45deg, transparent 36px, rgba(4, 10, 58, 0.3) 0) bottom left,
      linear-gradient(135deg, #2f9ad7 37px, rgba(4, 10, 58, 0.3) 0) top left,
      linear-gradient(-135deg, #2f9ad7 38px, rgba(4, 10, 58, 0.3) 0) top right;
    background-size: 50% 50%;
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
          bottom: 63px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #ffffff;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        .identifier2 {
          position: absolute;
          left: -20px;
          bottom: 0px;
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
        content: "";
        position: absolute;
        left: -34px;
        top: -34px;
        width: 150%;
        height: 150%;
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
        background: linear-gradient(to left, #ffdf70 54%, rgba(255, 223, 112, 0) 100%);
        border-radius: 1px;
        transform: rotate(45deg);
      }
    }
  }
  /* 左右边框 */
  .content:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2fb8e5, transparent);
  }
  .content:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #2fb8e5, transparent);
  }
  /* mobile style start */
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
    .content {
      width: 6.7rem;
      height: 7.8rem;
      background: none;
      backdrop-filter: blur(0px);
      margin: 2.36rem auto 2rem;
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
      ::before,
      ::after {
        width: 0.03rem;
      }
      .title {
        padding-top: 0.81rem;
        font-size: 0.42rem;
        padding-left: 0;
        ::before {
          content: "";
          position: absolute;
          left: -0.51rem;
          top: 0;
          width: 2rem;
          height: 0.02rem;
          background: #2fb8e5;
          transform: rotate(-45deg);
        }
        ::after {
          content: "";
          position: absolute;
          right: -0.51rem;
          top: 0;
          width: 2rem;
          height: 0.02rem;
          background: #2fb8e5;
          transform: rotate(45deg);
        }
      }
      .container {
        padding-left: 0.2rem;
        width: 90%;
        margin-top: 0.44rem;
        .owned-swiper {
          .swiper-slide {
            width: 3rem !important;
            .identifier {
              right: 0.85rem;
              bottom: 0.48rem;
              font-size: 0.2rem;
            }
            .identifier2 {
              position: absolute;
              left: -0.3rem;
              bottom: 0.16rem;
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 0.2rem;
              line-height: 0;
              color: #ffffff;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            }
            img {
              width: 100%;
            }
          }
        }
      }
      .number {
        padding-top: 0.51rem;
        font-size: 0.32rem;
      }
      .controll {
        .prev {
          position: absolute;
          left: 1.32rem;
          width: 0.53rem;
          height: 0.53rem;
          top: 6.4rem;
          ::before {
            left: -0.4rem;
            top: -0.4rem;
          }
        }
        .next {
          position: absolute;
          right: 1.32rem;
          top: 6.4rem;
          width: 0.53rem;
          height: 0.53rem;
          ::before {
            right: -0.4rem;
            top: 0.14rem;
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// owned style end
// 导出组件
export default Owned;
