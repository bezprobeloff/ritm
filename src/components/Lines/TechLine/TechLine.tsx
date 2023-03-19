import './TechLine.scss';
import { ReactComponent as SVGLine } from '../../../images/tech-line.svg';
import React, { useRef } from 'react';
import useLine from '../../../utils/hooks/useLine';

const TechLine: React.FC = () => {
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && <SVGLine className="tech-line-element" />;

  return (
    <div ref={lineWrapperRef} className="tech-line-wrapper">
      {lineElement}
    </div>
  );
};

export default TechLine;
