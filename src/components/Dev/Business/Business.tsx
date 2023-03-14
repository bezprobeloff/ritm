import './Business.scss';
import { ReactComponent as BusinessLine } from '../../../images/business-line.svg';
import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';

const Business: React.FC = () => {
  const businessElementRef = useRef(null);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const businessLineElement = isLineEnabled && <BusinessLine className="business__line" />;
  const ROOT_MARGIN = '20px';
  const THRESHOLD = 1;
  const intersection = useIntersection(businessElementRef, {
    root: null,
    rootMargin: ROOT_MARGIN,
    threshold: THRESHOLD
  });

  useEffect(() => {
    if (!isLineEnabled && intersection?.intersectionRatio === 1) {
      setIsLineEnabled(true);
    }
  }, [intersection, isLineEnabled]);

  return (
    <div className="business">
      {businessLineElement}
      <h3 ref={businessElementRef} className="section__subtitle business__title">
        Основные преимущества для вашего бизнеса
      </h3>
      <ul className="business__list">
        <li className="business__item">
          <div className="business__item-icon-wrapper" />
          <p className="business__item-description">
            Мы специализируется на сложных решениях, связанных с глубокой аналитикой
            бизнес-процессов. Совместно с вами мы изучим ваш бизнес и предложим наиболее оптимальное
            и эффективное решение.
          </p>
        </li>
        <li className="business__item">
          <div className="business__item-icon-wrapper" />
          <p className="business__item-description">
            Наша стратегия построена на долгосрочных партнерских отношениях. Если сейчас у вас нет
            сложных задач и вам требуется только простой сайт-визитка с обратной связью, мы с
            удовольствием поможем вам.
          </p>
        </li>
        <li className="business__item">
          <div className="business__item-icon-wrapper" />
          <p className="business__item-description">
            На каждом этапе развития вашей компании мы поможем вам развивать собственную
            IT-экосистему актуальную для ваших текущих задач и использующую самый современный стек
            технологий.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Business;
