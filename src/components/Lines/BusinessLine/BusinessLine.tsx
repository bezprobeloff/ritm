import './BusinessLine.scss';
import { ReactComponent as SVGLine } from '../../../images/business-line.svg';
import React, { useRef } from 'react';
import useLine from '../../../utils/hooks/useLine';

const BusinessLine: React.FC = () => {
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && <SVGLine className="business-line-element" />;

  return (
    <div ref={lineWrapperRef} className="business-line-wrapper">
      {lineElement}
    </div>
  );
};

export default BusinessLine;
