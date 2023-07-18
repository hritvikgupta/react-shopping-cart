import { useLoginPageContext } from "../contexts/LoginPageProvider"; // Update with your file path
import { ReactElement, useState } from "react";

export function useMultiStepForm(
  steps: ReactElement[],
  activeTabIndex: number
) {
  const [currentStepIndex, setCurrentStepIndex] = useState(activeTabIndex);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    goTo,
  };
}
