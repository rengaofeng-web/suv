//@ts-nocheck
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { chainRPCs, supportedChainId } from "src/sushi/lib/constants";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { Coin98WalletAdapter } from "@solana/wallet-adapter-coin98";

export const injected = new InjectedConnector({
  supportedNetworks: [supportedChainId],

  supportedChainIds: [supportedChainId],
});

export const WalletLinkConnect = new WalletLinkConnector({
  url: chainRPCs,
  supportedNetworks: [supportedChainId],
  appName: "web3-react-suv",
  supportedChainIds: [supportedChainId],
});
export const Coin98Connect = new Coin98WalletAdapter({
  url: chainRPCs,
  supportedNetworks: [supportedChainId],

  supportedChainIds: [supportedChainId],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { [supportedChainId]: chainRPCs[supportedChainId] },
  qrcode: true,
});
