//@ts-nocheck
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { chainRPCs, supportedChainId } from "src/sushi/lib/constants";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const injected = new InjectedConnector({
  supportedNetworks: [supportedChainId],

  supportedChainIds: [supportedChainId],
});


export const walletconnect = new WalletConnectConnector({
  rpc: { [supportedChainId]: chainRPCs[supportedChainId] },
  qrcode: true,
});
