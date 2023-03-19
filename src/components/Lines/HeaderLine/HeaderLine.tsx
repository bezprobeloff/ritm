import './HeaderLine.scss';
import { ReactComponent as SVGLine } from '../../../images/header-line.svg';
import React, { useRef } from 'react';
import useLine from '../../../utils/hooks/useLine';

const HeaderLine: React.FC = () => {
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && <SVGLine className="header-line-element" />;

  return (
    <div ref={lineWrapperRef} className="header-line-wrapper">
      {lineElement}
    </div>
  );
};

export default HeaderLine;
