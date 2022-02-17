// @ts-nocheck

import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';

export let ApyData: { [key: string]: any } = {}

interface IConfig {
  pid: string | number
}

export const getApyDefault = (pid) => {
  const apy = ApyData[pid]
  if(apy !== null && typeof(apy) != "undefined") {
    return `${apy < 0.01 ? "100,000" : apy.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})}%` 
  }
  return 'Loading...'
}

export const getApyData = () => {
  return new Promise((resolve, reject)=>{
    axios.get('/apy.json?_' + new Date().getTime()).then(res => {
      ApyData = res.data
      resolve()
    }).catch(err=>{
      reject()
    })
  })
}

const useApyDefault = ({ pid }: IConfig) => {
  const [apy, setApy] = useState(ApyData[pid] ?? null)
  const apyDefault = useMemo(()=>{
    return getApyDefault(pid, apy)
  },[apy])
  useEffect(() => {
    // if (apy === null) getApyData()
  }, [])
  return {
    apyDefault
  }
}

export default useApyDefault
