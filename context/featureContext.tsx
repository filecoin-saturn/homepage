import { createContext, useContext, useState, useEffect } from "react";
import { getGPUTier } from 'detect-gpu';

const featureDefault = {
    backdropBlur: false,
    threeJsAnimations: false,
    gsapContentAnimations: false
}

const FeatureContext = createContext(featureDefault)

type FeatureContextWrapperProps = {
    children: React.ReactNode
}

export function FeatureContextWrapper({children}: FeatureContextWrapperProps) {
    const [features, setFeatures] = useState(featureDefault)
    const [gpuTier, setGpuTier] = useState(0)

    useEffect(() => {
        (async () => {
          const gpuTier = await getGPUTier();
          setGpuTier(gpuTier.tier)
        })();
    }, [])

    return (
        <FeatureContext.Provider value={features}>
            {children}
        </FeatureContext.Provider>
    )
}

export function useFeatureContext() {
    return useContext(FeatureContext)
}