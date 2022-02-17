import { useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
// import debounce from 'debounce'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useBlock = () => {
  const [block, setBlock] = useState(0)
  const context = useWeb3React<any>()
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

  useEffect(() => {
    // const setBlockDebounced = debounce(setBlock, 300)
    if (!library?.provider) return
    const web3 = new Web3(library?.provider)

    // const subscription = new Web3(ethereum).eth.subscribe(
    //   'newBlockHeaders',
    //   (error, result) => {
    //     if (!error) {
    //       setBlockDebounced(result.number)
    //     }
    //   },
    // )

    const interval = setInterval(async () => {
      const latestBlockNumber = await web3.eth.getBlockNumber()
      if (block !== latestBlockNumber) {
        setBlock(latestBlockNumber)
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [library?.provider])

  return block
}

export default useBlock
