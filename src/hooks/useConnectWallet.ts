import { useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
const useConnectWallet = () => {
  // const [status, setAllowance] = useState<string>(null);
  const context = useWeb3React<Web3Provider>()
  const {
    connector,
    library,

    chainId: chainId2,
    account,
    activate: connect,
    deactivate: reset,
    active,
    error,
  } = context
  const connectWallet = useCallback(() => {
    if (!active) {
      const connectorVal = localStorage.getItem('connector') as
        | 'injected'
        | 'walletconnect'
      // console.log(`[useConnectWallet] connect now, connectorVal:${connectorVal}`)
      if (connectorVal) {
        // connect(connectorVal)
      }
    }
    // console.log(`[useConnectWallet] useCallback status:${status}, account:${account}`)
  }, [active])

  const off = () => {
    // console.log(`[useConnectWallet] off reset`)
    reset()
    localStorage.removeItem('connector')
    // console.log(`[useConnectWallet] off status:${status}`)
  }

  // useEffect(() => {
  //     console.log(`[useConnectWallet] status:${status} account:${account}`)
  // }, [account])

  useEffect(() => {
    // console.log(`[useConnectWallet] status:${status}`)
    if (active) {
      // console.log(`[useConnectWallet] Storage.setItem:${status}`)
      localStorage.setItem('connector', 'null')
    } else if (!active) {
      localStorage.removeItem('connector')
    }
  }, [active])

  return [connectWallet, off]
}

export default useConnectWallet
