import React from "react";
import styled from "styled-components";
// 图片导入
import wholeBg from "../../assets/PC-config/bg2.jpg"; //整体背景图

export const NftFarams: React.FC<{}> = () => {
  return (
    <FaramsStyle>
      <div className="content-box">
        <div className="content-item">
          <div className="left-blindBox">
            <img
              src={require("../../assets/PC-config/NFT/feichuan5.png").default}
              alt=""
            />
          </div>
          <div className="right-content">
            <div className="top">
              <div className="earned-box">
                <div className="right-boreder"></div>
                <div className="earned">
                  <div className="earned-number">
                    <div>Earned</div>
                    <div className="number">1,123,155.12</div>
                  </div>
                  <div className="harvest">Harvest</div>
                </div>
              </div>
              <div className="staked">
                <div>staked</div>
                <div>1,123,155.12</div>
              </div>
            </div>
            <div className="bottom">
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    </FaramsStyle>
  );
};
// NftFarams style start
const FaramsStyle = styled.div`
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  height: 1541px;
  margin: auto;
  background-image: url(${wholeBg});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  .content-box {
    width: 1200px;
    height: 1041px;
    position: absolute;
    left: 50%;
    top: 176px;
    transform: translate(-50%, 0);
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
      linear-gradient(135deg, #33bfeb 37px, rgba(4, 10, 58, 0.3) 0) top left,
      linear-gradient(-135deg, #33bfeb 38px, rgba(4, 10, 58, 0.3) 0) top right;
    background-size: 50% 51%;
    background-repeat: no-repeat;
    border-top: 5px solid #33bfeb;
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
    padding: 48px 134px 66px;
    .content-item {
      display: flex;
      .left-blindBox {
      }
      .right-content {
        padding-left: 54px;
        .top {
          display: flex;
          .earned-box {
            position: relative;
            overflow: hidden;
            .earned {
              position: relative;
              height: 92px;
              width: 330px;
              background: rgba(14, 23, 42, 0.01);
              box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
              /* transform: matrix(-1, 0, 0, 1, 0, 0); */
              border-top: 3px solid #19d3df;
              -webkit-clip-path: polygon(
                30px 0px,
                calc(100% - 0px) 0,
                100% 0px,
                100% calc(100% - 0px),
                calc(100% - 0px) 100%,
                0px 100%,
                0 calc(100% - 20px),
                0 30px
              );
              display: flex;
              color: #fff;
              box-sizing: border-box;
              padding: 20px 20px 0 36px;
              justify-content: space-between;
              .earned-number {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.8);
                padding-bottom: 10px;
                .number {
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 22px;
                  /* identical to box height */
                  color: #ffffff;
                }
              }
              .harvest {
                height: 53px;
                width: 110px;
                text-align: center;
                line-height: 53px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: #ffffff;
                background: linear-gradient(90deg, #07b7c3 0%, #23e6f2 100%);
              }
            }
          }
          .earned-box:before {
            content: "";
            position: absolute;
            left: -18px;
            top: 4px;
            width: 88px;
            height: 3px;
            background-image: linear-gradient(to left, #19d2dd, #18aab4);
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-48deg);
          }
          .earned-box:after {
            content: "";
            position: absolute;
            left: 0px;
            top: 33px;
            height: 62px;
            width: 3px;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
            /* -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-48deg); */
          }
          .right-boreder {
            position: absolute;
            right: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #19d1dc, transparent);
          }
          .staked {
            position: relative;
            height: 92px;
            width: 209px;
            background: rgba(14, 23, 42, 0.01);
            box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
            border-top: 3px solid #19d3df;
            box-sizing: border-box;
            margin-left: 26px;
            padding: 17px 0 0 24px;
            > div:first-child {
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.8);
            }
            > div:nth-child(2) {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 22px;
              color: #ffffff;
              padding-top: 10px;
            }
          }
          .staked:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
          }
          .staked:after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom, #18a7b1, transparent);
          }
        }
        .bottom {
          position: relative;
          .container {
            height: 246px;
            width: 567px;
            border-radius: 0px;
            background: rgba(14, 23, 42, 0.01);
            box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
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
          }
        }
      }
    }
  }
  .content-box:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #31bce8, transparent);
  }
  .content-box:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-image: linear-gradient(to bottom, #31bce8, transparent);
  }
`;
// NftFarams style end
