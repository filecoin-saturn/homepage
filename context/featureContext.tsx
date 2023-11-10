import { createContext, useContext, useState, useEffect } from "react";
import { getGPUTier } from 'detect-gpu';

export type featureType = {
    [key: string]: boolean
}

const featureDefault : featureType = {
    "backdropBlur": false,
    "threeJsAnimations": false,
    "gsapContentAnimations": false
}


const FeatureContext = createContext(featureDefault)

type FeatureContextWrapperProps = {
    children: React.ReactNode
}

const featureToggleOrder = ["gsapContentAnimations", "backdropBlur", "threeJsAnimations"]

function getFeatures(n: number) {
    const newFeatures = {...featureDefault}
    for (let index = 0; index < n; index++) {
        newFeatures[featureToggleOrder[index]] = !newFeatures[featureToggleOrder[index]]
    }
    return newFeatures
}

export default function FeatureContextWrapper({children}: FeatureContextWrapperProps) {
    const [features, setFeatures] = useState(featureDefault)

    useEffect(() => {
        (async () => {
            let featureToggle = 0
            const gpuTier = await getGPUTier();
            if(gpuTier.tier >= 2) featureToggle = 3
            setFeatures(getFeatures(featureToggle))
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
