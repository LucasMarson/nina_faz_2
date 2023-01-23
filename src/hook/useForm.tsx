import { ReactElement, useState } from "react";

export function useForm(stpes: ReactElement[]) {
    const [currentStep, setCurrentStpe] = useState(0)

    function next () {
        setCurrentStpe(i => {
            if( i >= stpes.length - 1 ) return i
            return i + 1
        })
    }

    function back () {
        setCurrentStpe(i => {
            if( i <= 0 ) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrentStpe(index)
    }

    return {
        currentStep,
        step: stpes[currentStep],
        stpes,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === stpes.length - 1,
        goTo,
        next,
        back
    }
}