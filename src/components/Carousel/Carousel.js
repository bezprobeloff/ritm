import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.scss";

export const CarouselItem = ({ children }) => {
  return (
    <div className="carousel__item" style={{ width: "100%" }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="carousel__indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`carousel__indicators-button${
                index === activeIndex ? " carousel__indicators-button_active" : ""
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
