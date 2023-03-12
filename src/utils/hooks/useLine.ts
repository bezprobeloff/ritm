import { useEffect, useState } from "react";
import { isInViewport } from "../utils";

//хук управления формой и валидации формы

const useLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [element, setElement] = useState(null);

  // проверка по умолчанию области видимости элемента
  useEffect(() => {
    if (element !== null) {
      if (isInViewport(element)) {
        setIsEnabled(true);
      }
    }
  }, [element]);

  useEffect(() => {
    if (!isEnabled && isInViewport(element)) {
      setIsEnabled(true);
    }
  }, [scrollPosition]);

  return { isEnabled, setScrollPosition, setElement };
};

export default useLine;
