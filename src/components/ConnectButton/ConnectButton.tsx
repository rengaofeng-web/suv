import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 导入图片
import logo from "../../assets/PC-config/home/my-wallet_logo.svg";
interface Props {
  change: Function;
}

const ConnectButton: React.FC<Props> = (props) => {
  let { change } = props;
  let [selectFlag, setSelectFlag] = useState(false);
  let flag = false;//登录状态切换，true 已登录 false未登录
  // 点击弹出钱包登录
  const show_connect = () => {
    document.body.style.cssText = "overflow:hidden;height:100%;";
    change();
    sessionStorage.setItem("show", "1");
  };
  const show_Wallet = (e: React.MouseEvent) => {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true); //阻止冒泡
    selectFlag ? setSelectFlag(false) : setSelectFlag(true);
  };
  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      setSelectFlag(false);
    };
  });

  return (
    <ButtonStyle>
      {/* 未登录状态 */}
      <div className="connect" onClick={show_connect} style={{ display: flag ? "none" : "block" }}>
        Connect
      </div>
      {/* 登录状态 */}
      <div
        className="my-wallet"
        style={{ display: flag ? "block" : "none" }}
        onClick={show_Wallet}
      >
        My Wallet
        {/* select */}
        <div className="select" style={{ display: selectFlag ? "block" : "none" }}>
          <div className="top">
            {/* logo */}
            <img src={logo} alt="" className="myWallet-logo" />
            <div className="money">123,123.1235</div>
          </div>
          <div className="content">
            <div className="content-item active">View on Bscscan</div>
            <div className="content-item">Logout</div>
          </div>
        </div>
      </div>
    </ButtonStyle>
  );
};
// button style start
const ButtonStyle = styled.div`
  /*未登录 */
  .connect {
    height: 43px;
    width: 115px;
    border-radius: 0px;
    text-align: center;
    line-height: 43px;
    font-size: 20px;
    background: rgba(88, 10, 26, 0.1);
    border: 1px solid #6dffe5;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 30px #53c1ff;
    color: #ffffff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  .connect:hover {
    cursor: pointer;
  }
  /* 已登录 */
  .my-wallet {
    position: relative;
    height: 43px;
    width: 129px;
    border-radius: 0px;
    padding: 10px, 20px, 10px, 20px;
    background: rgba(88, 10, 26, 0.1);
    border: 1px solid #53c1ff;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 30px #53c1ff;
    border: 1px solid rgba(83, 193, 255, 1);
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 43px;
    text-align: center;
    color: #ffffff;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* select  */
    .select {
      /* display: none; */
      position: absolute;
      bottom: -192px;
      right: 0px;
      width: 227px;
      height: 186px;
      background: #041733;
      box-shadow: inset 0px 0px 25px #39ebf6;
      backdrop-filter: blur(10px);
      box-sizing: border-box;
      padding: 23px 26px 0;
      clip-path: polygon(
        15px 0px,
        calc(100% - 15px) 0,
        100% 15px,
        100% calc(100% - 15px),
        calc(100% - 15px) 100%,
        15px 100%,
        0 calc(100% - 15px),
        0 15px
      );
      background: linear-gradient(-45deg, #3aebf7 10px, #041733 0) bottom right,
        linear-gradient(45deg, #3aebf7 10px, #041733 0) bottom left,
        linear-gradient(135deg, #3aebf7 10px, #041733 0) top left,
        linear-gradient(-135deg, #3aebf7 10px, #041733 0) top right;
      border: 1px solid #3aebf7;
      background-size: 52% 51%;
      background-repeat: no-repeat;
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      .top {
        display: flex;
        justify-content: space-between;
        .myWallet-logo {
          width: 27px;
          height: 26px;
        }
        .money {
          font-family: PingFang SC;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          color: #39ebf6;
        }
      }
      .content {
        padding-top: 23px;
        .content-item {
          width: 100%;
          height: 40px;
          margin-bottom: 12px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 103.18%
          );
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 40px;
          color: #ffffff;
        }
        .content-item:active {
          color: #6dffe5;
        }
        .content-item:hover {
          cursor: pointer;
        }
      }
    }
  }
  .my-wallet:hover .select {
    display: block;
  }
  .my-wallet:hover {
    cursor: pointer;
  }
  /* mobile style start */
  @media screen and (max-width: 750px) {
    position: absolute;
    left: 0.46rem;
    top: -0.25rem;
    /* 未登录 */
    .connect {
      width: 1.53rem;
      height: 0.75rem;
      line-height: 0.75rem;
      font-size: 0.3rem;
      box-shadow: inset 0px 0px .3rem #53c1ff;
    }
    /* 已登录 */
    .my-wallet {
      width: 1.73rem;
      height: 0.75rem;
      font-size: 0.3rem;
      line-height: 0.75rem;
      .select {
        width: 3.78rem;
        height: 3.66rem;
        bottom: -3.8rem;
        box-shadow: inset 0px 0px 10px #39ebf6;
        padding: .26rem .36rem 0;
        .top{
          align-items: center;
          .myWallet-logo{
            width: .71rem;
            height: .69rem;
          }
          .money{
            font-size: .28rem;
          }
        }
        .content{
          padding-top: .24rem;
          .content-item{
            width: 3.06rem;
            height: .9rem;
            line-height: .9rem;
            font-size: .32rem;
            margin-bottom: .22rem;
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// button style end

export default ConnectButton;
