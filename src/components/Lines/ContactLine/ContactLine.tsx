import './ContactLine.scss';
import { ReactComponent as SVGLine } from '../../../images/contact-line.svg';
import React, { useRef } from 'react';
import useLine from '../../../utils/hooks/useLine';

const ContactLine: React.FC = () => {
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && <SVGLine className="contact-line-element" />;

  return (
    <div ref={lineWrapperRef} className="contact-line-wrapper">
      {lineElement}
    </div>
  );
};

export default ContactLine;
