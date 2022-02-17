import React, { createContext, useCallback, useState, useEffect } from "react";
import { Theme } from "src/config/enum";
import useReduxState from "src/hooks/useReduxState";
import styled from "styled-components";
import { useWallet } from "use-wallet";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";
interface ModalsContext {
  content?: React.ReactNode;
  isOpen?: boolean;
  onPresent: (content: React.ReactNode, key?: string) => void;
  onDismiss: () => void;
}

export const Context = createContext<ModalsContext>({
  onPresent: () => {},
  onDismiss: () => {},
});

const Modals: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>();
  const [modalKey, setModalKey] = useState<string>();
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library: ethereum,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;
  const [beforeAccount, setBeforeAccount] = useState(account);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    if (account !== beforeAccount) {
      setRefresh(refresh + 1);
      setIsOpen(false);
    }
    setBeforeAccount(account);
  }, [account]);
  const handlePresent = useCallback(
    (modalContent: React.ReactNode, key?: string) => {
      setModalKey(key);
      setContent(modalContent);
      setIsOpen(true);
    },
    [setContent, setIsOpen, setModalKey]
  );
  const handleDismiss = useCallback(() => {
    setContent(undefined);
    setIsOpen(false);
  }, [setContent, setIsOpen, modalKey]);
  const { state, getTheme, changeTheme } = useReduxState();

  return (
    <Context.Provider
      value={{
        content,
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <StyledModalWrapper>
          <StyledModalBackdrop
            bgC={state.theme === Theme.Dark ? "#e7931a10" : "#e7931a10"}
            color={modalKey}
            onClick={handleDismiss}
            onTouchStart={handleDismiss}
          />
          {React.isValidElement(content) &&
            React.cloneElement(content, {
              onDismiss: handleDismiss,
            })}
        </StyledModalWrapper>
      )}
    </Context.Provider>
  );
};

const StyledModalWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledModalBackdrop = styled.div<any>`
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Modals;
