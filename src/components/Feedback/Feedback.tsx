import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';
import Input from '../Inputs/Input/Input';
import TextArea from '../Inputs/TextArea/TextArea';

import './Feedback.scss';
import { ReactComponent as FormLine } from '../../images/form-line.svg';

const inputNameAttributes = {
  minLength: 2,
  maxLength: 40,
  required: true
};
const inputMobileAttributes = {
  required: true
};

const inputEmailAttributes = {
  pattern: PATTERN_EMAIL,
  required: true
};

const Feedback: React.FC = () => {
  const form = useForm();
  const feedbackElementRef = useRef(null);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const intersection = useIntersection(feedbackElementRef, {
    root: null,
    rootMargin: '20px',
    threshold: 1
  });
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
  };

  useEffect(() => {
    if (!isLineEnabled && intersection?.intersectionRatio === 1) {
      setIsLineEnabled(true);
    }
  }, [intersection, isLineEnabled]);

  return (
    <section id="feedback" className="section feedback">
      <div className="section__wrapper feedback__wrapper">
        {isLineEnabled ? <FormLine className="feedback__line" /> : ''}
        <h2 className="section__title" ref={feedbackElementRef}>
          Форма обратной связи
        </h2>
        <h3 className="section__subtitle feedback__subtitle">Получить консультацию</h3>
        <p className="feedback__description">
          Если вы хотите больше узнать о нас, наших технологиях и опыте работы, обсудить конкретную
          задачу или просто получить консультацию, напишите нам через форму обратной связи
        </p>
        <form noValidate className="feedback__form" onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholderText="Имя"
            typeInput="text"
            errors={form.errors}
            validateAttributes={inputNameAttributes}
            onChange={form.handleChange}
          />
          <Input
            name="mobile"
            placeholderText="Телефон"
            typeInput="tel"
            errors={form.errors}
            validateAttributes={inputMobileAttributes}
            onChange={form.handleChange}
          />
          <Input
            name="email"
            placeholderText="Email"
            typeInput="email"
            errors={form.errors}
            validateAttributes={inputEmailAttributes}
            onChange={form.handleChange}
          />
          <TextArea
            name="textarea"
            placeholderText="Комментарий"
            errors={form.errors}
            onChange={form.handleChange}
          />
          <label className="feedback__form__checkbox">
            <input
              name="data-policy"
              type="checkbox"
              className="feedback__form__checkbox-input"
              onChange={form.handleChange}
              required
            />
            <span className="feedback__form__checkbox-text">
              Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
            </span>
          </label>
          <button
            className="button feedback__form-button-submit"
            type="submit"
            disabled={!form.isValid}
          >
            Отправить вопрос
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
