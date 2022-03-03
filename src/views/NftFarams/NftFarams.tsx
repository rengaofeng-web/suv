import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";
// 组件导入
import Footer from "../../components/Footer/Footer"; //footer
// pc 图片导入
import feichuan5 from "../../assets/PC-config/NFT/feichuan5.png";
import feichuan4 from "../../assets/PC-config/NFT/feichuan4.png";
import feichuan3 from "../../assets/PC-config/NFT/feichuan3.png";
import feichuan2 from "../../assets/PC-config/NFT/feichuan2.png";
import feichuan1 from "../../assets/PC-config/NFT/feichuan1.png";
// mobile 图片导入
import mobile_wholeBg from "../../assets/Phone-config/bg2.jpg"; // mobile 整体背景图
import feichuan5_mobile from "../../assets/Phone-config/NFT/small_feichuan5.png";
import feichuan4_mobile from "../../assets/Phone-config/NFT/small_feichuan4.png";
import feichuan3_mobile from "../../assets/Phone-config/NFT/small_feichuan3.png";
import feichuan2_mobile from "../../assets/Phone-config/NFT/small_feichuan2.png";
import feichuan1_mobile from "../../assets/Phone-config/NFT/small_feichuan1.png";
import useFarmRows, { FarmWithStakedValue } from "src/hooks/useFarmRows";
import useApyDefault from "src/hooks/useApyDefault";
import BigNumber from "bignumber.js";
import useSushi from "src/hooks/useSushi";
import useReward from "src/hooks/useReward";
import {
  getDisplayBalance,
  getFullDisplayBalance,
} from "src/utils/formatBalance";
import useApprove from "src/hooks/useApprove";
import useStake from "src/hooks/useStake";
import useUnstake from "src/hooks/useUnstake";

const NftFarams: React.FC<{}> = () => {
  const isM: boolean = isMobile();
  const [switchCurrent, setSwitchCurrent] = useState([
    true,
    true,
    true,
    true,
    true,
  ]); //切换选项卡状态
  const { farmRows } = useFarmRows();
  const nftFarmRows = farmRows.filter(
    (item) => item.nftType && item.poolType === 3
  );

  return (
    <FaramsStyle>
      <div className="content-box">
        {nftFarmRows.map((item, index) => {
          return <FarmCard farm={item} key={index} />;
        })}
      </div>
      <Footer></Footer>
    </FaramsStyle>
  );
};

interface FarmCardProps {
  farm: FarmWithStakedValue;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [switchCurrent, setSwitchCurrent] = useState(true);
  const { apyDefault } = useApyDefault({ pid: farm.pid });
  const sushi = useSushi();

  const allowance = new BigNumber(farm.userAllowance || 0);
  const pendingRewards = new BigNumber(farm.userPending0 || 0);
  const stakedBalance = new BigNumber(farm.userStaked || 0);
  const tokenBalance = new BigNumber(farm.tokenBalance || 0);

  const [depositVal, setDepositVal] = useState("");
  const [withdrawVal, setWithdrawVal] = useState("");
  const { onStake } = useStake(farm.pid, false, farm.decimals, true);
  const { onUnstake } = useUnstake(farm.pid, farm.decimals, true);
  const [stakePendingTx, setStakePendingTx] = useState(false);
  const [unStakePendingTx, setUnstakePendingTx] = useState(false);

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(tokenBalance, 0);
  }, [tokenBalance]);

  const fullStakeBalance = useMemo(() => {
    return getFullDisplayBalance(stakedBalance, 0);
  }, [stakedBalance]);

  const handleDeposit = useCallback(async () => {
    if (depositVal) {
      try {
        setStakePendingTx(true);
        await onStake(depositVal, new BigNumber(0), 0, new BigNumber(0));
        setStakePendingTx(false);
        setDepositVal("");
      } catch (e) {
        setStakePendingTx(false);
        setDepositVal("");
      }
    }
  }, [depositVal, onStake]);

  const handleWithdraw = useCallback(async () => {
    if (withdrawVal) {
      try {
        setUnstakePendingTx(true);
        await onUnstake(withdrawVal);
        setUnstakePendingTx(false);
        setWithdrawVal("");
      } catch (e) {
        setUnstakePendingTx(false);
        setWithdrawVal("");
      }
    }
  }, [withdrawVal, onStake, onUnstake]);

  const [rewardPending, setRewardPending] = useState(false);
  const { onReward } = useReward(farm.pid, true);

  const [pendingApprove, setPendingApprove] = useState(false);

  const { onApprove } = useApprove(farm.tokenContract, true);

  const handleApprove = useCallback(async () => {
    setPendingApprove(true);
    const tx = await onApprove();
    if (!tx) setPendingApprove(false);
  }, [onApprove]);

  return (
    <div className="content-item">
      <div className="right-border"></div>
      <div className="left-blindBox">
        <img src={farm.icon} alt="" />
      </div>
      <div className="right-content">
        <div className="top">
          <div className="earned-box">
            <div className="right-boreder"></div>
            <div className="earned">
              <div className="earned-number">
                <div>Earned</div>
                <div className="number">
                  {getDisplayBalance(pendingRewards, 18, 2)}
                </div>
              </div>
              <div className="harvest">Harvest</div>
            </div>
          </div>
          <div className="staked">
            <div>staked</div>
            <div>{stakedBalance.toString()}</div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="switch-head">
              {allowance.isLessThanOrEqualTo(0) ? (
                <div
                  className="approve"
                  onClick={pendingApprove ? () => null : handleApprove}
                >
                  {pendingApprove ? "Pending" : "Approve"}
                </div>
              ) : null}

              <div
                className={switchCurrent ? "deposit active" : "deposit"}
                onClick={() => {
                  setSwitchCurrent(true);
                }}
              >
                Deposit
              </div>
              <div
                className={!switchCurrent ? "withdraw active" : "withdraw"}
                onClick={() => {
                  setSwitchCurrent(false);
                }}
              >
                Withdraw
              </div>
            </div>
            <div className="switch-content">
              <div
                className="switch-content-item"
                style={{
                  display: switchCurrent ? "block" : "none",
                }}
              >
                <div className="title">Available:{tokenBalance.toString()}</div>
                <div className="uinput">
                  <input
                    type="number"
                    value={depositVal}
                    onChange={(e) => {
                      setDepositVal(e.currentTarget.value);
                    }}
                  />
                  <div
                    className="max"
                    onClick={() => {
                      setDepositVal(fullBalance);
                    }}
                  >
                    MAX
                  </div>
                </div>
                <div
                  className="button"
                  onClick={stakePendingTx ? () => null : handleDeposit}
                >
                  {stakePendingTx ? "Pending Deposit" : "Deposit"}
                </div>
              </div>
              <div
                className="switch-content-item"
                style={{
                  display: !switchCurrent ? "block" : "none",
                }}
              >
                <div className="title">
                  Available:{stakedBalance.toString()}
                </div>
                <div className="uinput">
                  <input
                    type="number"
                    value={withdrawVal}
                    onChange={(e) => {
                      setWithdrawVal(e.currentTarget.value);
                    }}
                  />
                  <div
                    className="max"
                    onClick={() => {
                      setWithdrawVal(fullStakeBalance);
                    }}
                  >
                    MAX
                  </div>
                </div>
                <div
                  className="button"
                  onClick={unStakePendingTx ? () => null : handleWithdraw}
                >
                  {" "}
                  {unStakePendingTx ? "Pending Withdraw" : "Withdraw"}
                </div>
              </div>
            </div>
          </div>
          <div className="right-border"></div>
        </div>
      </div>
    </div>
  );
};

// NftFarams style start
const FaramsStyle = styled.div`
  position: relative;
  height: 3100px;
  margin: auto;
  box-sizing: border-box;

  .content-box {
    width: 1200px;
    position: relative;
    margin: 176px auto;
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
    background-size: 50% 50%;
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
    padding: 48px 134px 20px;
    .content-item {
      position: relative;
      display: flex;
      margin-bottom: 83px;

      .left-blindBox {
      }
      .right-content {
        padding-left: 54px;
        .top {
          display: flex;
          margin-top: 30px;
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
          overflow: hidden;
          margin-top: 28px;
          .container {
            height: 246px;
            width: 567px;
            border-radius: 0px;
            box-sizing: border-box;
            background: rgba(14, 23, 42, 0.01);
            box-shadow: inset 0px 0px 20px rgba(57, 231, 199, 0.5);
            -webkit-clip-path: polygon(
              0px 0px,
              calc(100% - 0px) 0,
              100% 0px,
              100% calc(100% - 0px),
              calc(100% - 50px) 100%,
              50px 100%,
              0 calc(100% - 50px),
              0 50px
            );
            -webkit-clip-path: polygon(
              0px 0px,
              calc(100% - 0px) 0,
              100% 0px,
              100% calc(100% - 0px),
              calc(100% - 50px) 100%,
              37px 100%,
              0 calc(100% - 37px),
              0 37px
            );
            border-bottom: 3px solid #19d6e2;
            box-sizing: border-box;
            padding: 13px 29px 0 38px;
            .switch-head {
              display: flex;
              align-items: center;
              .approve {
                cursor: pointer;
                width: 94px;
                height: 43px;
                text-align: center;
                line-height: 43px;
                background: linear-gradient(90deg, #08c480 0%, #33eeab 100%);
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: #ffffff;
              }
              .deposit,
              .withdraw {
                padding-left: 33px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                color: rgba(255, 255, 255, 0.3);
                cursor: pointer;
                -moz-user-select: none; /*火狐*/
                -webkit-user-select: none; /*webkit浏览器*/
                -ms-user-select: none; /*IE10*/
                -khtml-user-select: none; /*早期浏览器*/
                user-select: none;
              }
              .active {
                color: #21e3ef;
              }
            }
            .switch-content {
              .switch-content-item {
                .title {
                  text-align: right;
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  color: rgba(255, 255, 255, 0.5);
                  padding-top: 5px;
                }
                .uinput {
                  height: 48px;
                  width: 499px;
                  border-radius: 0px;
                  margin-top: 15px;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.2) 0%,
                    rgba(255, 255, 255, 0.06) 100.6%
                  );
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  box-sizing: border-box;
                  padding: 0 18px 0 24px;
                  > input {
                    height: 100%;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    color: #ffffff;
                  }
                  .max {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    color: #18d6e2;
                    cursor: pointer;
                    -moz-user-select: none; /*火狐*/
                    -webkit-user-select: none; /*webkit浏览器*/
                    -ms-user-select: none; /*IE10*/
                    -khtml-user-select: none; /*早期浏览器*/
                    user-select: none;
                  }
                }
                .button {
                  cursor: pointer;
                  -moz-user-select: none; /*火狐*/
                  -webkit-user-select: none; /*webkit浏览器*/
                  -ms-user-select: none; /*IE10*/
                  -khtml-user-select: none; /*早期浏览器*/
                  user-select: none;
                  position: relative;
                  height: 48px;
                  width: 499px;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.5) 0%,
                    rgba(255, 255, 255, 0.15) 100.6%
                  );
                  backdrop-filter: blur(4px);
                  margin-top: 20px;
                  padding-left: 24px;
                  box-sizing: border-box;
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 48px;
                  color: #ffffff;
                }
                .button:before {
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 17px;
                  width: 34px;
                  height: 2px;
                  background: linear-gradient(-135deg, transparent 2px, #fff 0)
                    top right;
                }
                .button:after {
                  content: "";
                  position: absolute;
                  top: 45%;
                  right: 16px;
                  width: 12px;
                  height: 2px;
                  background: linear-gradient(-45deg, transparent 2px, #fff 0)
                    bottom right;
                  transform: rotate(45deg);
                }
              }
            }
          }
        }
        .bottom:after {
          content: "";
          position: absolute;
          left: -25px;
          bottom: 19px;
          width: 87px;
          height: 3px;
          background-color: #19d6e2;
          transform: rotate(45deg);
        }
        .bottom:before {
          content: "";
          position: absolute;
          left: 0px;
          top: -37px;
          width: 3px;
          height: 100%;
          background-image: linear-gradient(to top, #19d6e2, transparent);
        }
        .right-border {
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background-image: linear-gradient(to top, #19d6e2, transparent);
        }
      }
    }
    .content-item:after {
      content: "";
      position: absolute;
      bottom: -77px;
      height: 5px;
      width: 927px;
      border-radius: 0px;
      margin: 39px 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .content-item:last-child:after {
      display: none;
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
  /* mobile style start */
  @media screen and (max-width: 750px) {
    max-width: auto;
    min-width: auto;
    height: 100vh;
    margin: auto;
    overflow-y: scroll;
    background-image: url(${mobile_wholeBg});
    .footer-box {
      position: relative;
    }
    .content-box {
      width: 6.7rem;
      background: none;
      border-top: none;
      -webkit-clip-path: none;
      overflow: hidden;
      ::before,
      :after {
        display: none;
      }
      box-shadow: none;
      padding: 0;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      margin: 2rem auto 1rem;
      .content-item {
        width: 100%;
        height: 7.92rem;
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
        background: linear-gradient(
          180deg,
          rgba(1, 6, 44, 0.6) 0%,
          rgba(4, 10, 58, 0.3) 169.32%
        );
        box-shadow: inset 0px 0px 0.6rem #00a3ff;
        border-top: 0.03rem solid #34c0ec;
        border-bottom: 0.03rem solid #1883b9;
        box-sizing: border-box;
        padding-left: 0.33rem;
        padding-right: 0.33rem;
        ::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0.03rem;
          height: 100%;
          background: linear-gradient(to bottom, #34c0ec, #1883b9);
        }
        ::after,
        .right-border {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 0.03rem;
          height: 100%;
          bottom: auto;
          margin: 0;
          background: linear-gradient(to bottom, #34c0ec, #1883b9);
        }
        .left-blindBox {
          margin-top: 0.53rem;
          img {
            width: 1.92rem;
          }
          ::before {
            content: "";
            position: absolute;
            left: -0.12rem;
            top: -0.56rem;
            width: 0.03rem;
            height: 2rem;
            background: #34c0ec;
            transform: rotate(45deg);
          }
          ::after {
            content: "";
            position: absolute;
            left: -0.12rem;
            bottom: -0.56rem;
            width: 0.03rem;
            height: 2rem;
            background: #1883b9;
            transform: rotate(-45deg);
          }
        }
        .right-content {
          padding: 0;
          .top {
            display: block;
            margin-top: 0.65rem;
            .earned-box {
              width: 4.21rem;
              height: 1.32rem;
              ::before {
                left: -0.15rem;
                top: 0.1rem;
                width: 0.88rem;
                height: 0.03rem;
              }
              ::after {
                left: 0px;
                top: 0.4rem;
                height: 0.62rem;
                width: 0.03rem;
              }
              .right-boreder {
                width: 0.03rem;
              }
              .earned {
                width: 100%;
                height: 100%;
                -webkit-clip-path: polygon(
                  0.4rem 0px,
                  calc(100% - 0px) 0,
                  100% 0px,
                  100% calc(100% - 0px),
                  calc(100% - 0px) 100%,
                  0px 100%,
                  0 calc(100% - 0.3rem),
                  0 0.4rem
                );
                padding: 0.29rem 0px 0 0.45rem;
                box-shadow: inset 0px 0px 0.2rem rgb(57 231 199 / 50%);
                border-top: 0.03rem solid #19d3df;
                .earned-number {
                  font-size: 0.26rem;
                  .number {
                    font-size: 0.28rem;
                  }
                }
                .harvest {
                  width: 1.35rem;
                  height: 1.32rem;
                  margin-top: -0.3rem;
                  line-height: 1.32rem;
                  font-size: 0.3rem;
                }
              }
            }
            .staked {
              width: 4.21rem;
              height: 0.76rem;
              margin: 0;
              margin-top: 0.3rem;
              padding: 0rem 0.45rem 0 0.45rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: inset 0px 0px 0.2rem rgb(57 231 199 / 50%);
              border-top: 0.03rem solid #19d3df;
              ::before,
              ::after {
                width: 0.03rem;
                top: -0.01rem;
              }
              > div:first-child {
                font-size: 0.26rem;
              }
              > div:last-child {
                padding: 0;
                font-size: 0.29rem;
              }
            }
          }
          .bottom {
            position: absolute;
            right: 0.23rem;
            width: 6.16rem;
            height: 4rem;
            margin-top: 0.3rem;
            ::before {
              left: 0px;
              top: -0.25rem;
              width: 0.03rem;
            }
            ::after {
              left: -0.2rem;
              bottom: 0.1rem;
              width: 0.87rem;
              height: 0.03rem;
              transform: rotate(35deg);
            }
            .right-border {
              width: 0.03rem;
            }
            .container {
              width: 100%;
              height: 100%;
              box-shadow: inset 0px 0px 0.2rem rgb(57 231 199 / 50%);
              -webkit-clip-path: polygon(
                0px 0px,
                calc(100% - 0px) 0,
                100% 0px,
                100% calc(100% - 0px),
                calc(100% - 0.4rem) 100%,
                0.4rem 100%,
                0 calc(100% - 0.3rem),
                0 0.27rem
              );
              border-bottom: 0.03rem solid #19d6e2;
              padding: 0.34rem 0.4rem 0;

              .switch-head {
                justify-content: space-between;
                .deposit,
                .withdraw {
                  font-size: 0.26rem;
                  padding: 0;
                }

                .approve {
                  width: 1.31rem;
                  height: 0.49rem;
                  font-size: 0.26rem;
                  line-height: 0.49rem;
                }
              }
              .switch-content {
                .switch-content-item {
                  .title {
                    font-size: 0.24rem;
                    padding-top: 0.42rem;
                  }
                  .uinput {
                    height: 0.8rem;
                    width: 100%;
                    border-radius: 0px;
                    margin-top: 0.2rem;
                    padding: 0 0.18rem 0 0.24rem;
                    input {
                      font-size: 0.24rem;
                    }
                    .max {
                      font-size: 0.28rem;
                    }
                  }
                  .button {
                    height: 0.8rem;
                    width: 100%;
                    line-height: 0.8rem;
                    font-size: 0.24rem;
                    padding-left: 0.23rem;
                    margin-top: 0.25rem;
                    ::before {
                      right: 0.17rem;
                      width: 0.34rem;
                      height: 0.02rem;
                    }
                    ::after {
                      right: 0.16rem;
                      top: 43%;
                      width: 0.15rem;
                      height: 0.02rem;
                      background: #fff;
                    }
                  }
                }
              }
            }
          }
          ::before {
            content: "";
            position: absolute;
            right: -0.11rem;
            top: -0.56rem;
            width: 0.03rem;
            height: 2rem;
            background: #34c0ec;
            transform: rotate(-45deg);
          }
          ::after {
            content: "";
            position: absolute;
            right: -0.12rem;
            bottom: -0.56rem;
            width: 0.03rem;
            height: 2rem;
            background: #1883b9;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  /* mobile style end */
`;
// NftFarams style end
// 导出组件
export default NftFarams;
