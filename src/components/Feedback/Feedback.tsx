import "./Feedback.scss";
import { ReactComponent as FormLine } from "../../images/form-line.svg";
import Input from "./Input/Input";
import React, { useContext, useEffect, useRef } from "react";
import TextArea from "./TextArea/TextArea";
import useForm from "../../utils/hooks/useForm";
import { PATTERN_EMAIL } from "../../utils/constants";
import { LineContext } from "../../contexts/LineContext";
import useLine from "../../utils/hooks/useLine";

const inputNameAttributes = {
  minLength: 2,
  maxLength: 40,
  required: true,
};
const inputMobileAttributes = {
  required: true,
};

const inputEmailAttributes = {
  pattern: PATTERN_EMAIL,
  required: true,
};

const Feedback: React.FC = () => {
  const form = useForm();
  const scrollPositionContext = useContext(LineContext);
  const line = useLine();
  const feedbackElement = useRef(null);
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
  };

  useEffect(() => {
    line.setElement(feedbackElement.current);
  }, []);

  useEffect(() => {
    line.setScrollPosition(scrollPositionContext);
  }, [scrollPositionContext]);

  return (
    <section id="feedback" className="section feedback">
      <div className="section__wrapper feedback__wrapper">
        {line.isEnabled ? <FormLine className="feedback__line" /> : ""}
        <h2 className="section__title" ref={feedbackElement}>
          Форма обратной связи
        </h2>
        <h3 className="section__subtitle feedback__subtitle">
          Получить консультацию
        </h3>
        <p className="feedback__description">
          Если вы хотите больше узнать о нас, наших технологиях и опыте работы,
          обсудить конкретную задачу или просто получить консультацию, напишите
          нам через форму обратной связи
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
          <TextArea onChange={form.handleChange} />
          <label className="feedback__form__checkbox">
            <input
              name="data-policy"
              type="checkbox"
              className="feedback__form__checkbox-input"
              onChange={form.handleChange}
              required
            />
            <span className="feedback__form__checkbox-text">
              Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных.
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
