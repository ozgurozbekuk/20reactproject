import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data.js'

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

  const [loading,setLoading] = useState(false)
  const [enabledFlags,setEnabledFlags] = useState({})


  async function fetchFeature() {
    try {
      setLoading(true)
      const res = await featureFlagsDataServiceCall();
      setEnabledFlags(res)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    
  }

  useEffect(() =>{
    fetchFeature()
  },[])

  return (
    <FeatureFlagContext.Provider value={{loading,enabledFlags}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
