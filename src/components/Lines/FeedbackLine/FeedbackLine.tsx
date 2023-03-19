import './FeedbackLine.scss';
import { ReactComponent as SVGLine } from '../../../images/form-line.svg';
import React, { useRef } from 'react';
import useLine from '../../../utils/hooks/useLine';

const FeedbackLine: React.FC = () => {
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && <SVGLine className="feedback-line-element" />;

  return (
    <div ref={lineWrapperRef} className="feedback-line-wrapper">
      {lineElement}
    </div>
  );
};

export default FeedbackLine;
