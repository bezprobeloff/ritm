import React, { useEffect } from 'react';
import './Popup.scss';
import { KEYBOARD_KEYS } from '../../utils/constants';

type TProps = {
  title?: string;
  message: string;
  closePopup: () => void;
};

const Popup: React.FC<TProps> = ({ closePopup, title, message }) => {
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE) {
        closePopup();
      }
    };
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [closePopup]);

  const handleOverlayClose = (evt: React.MouseEvent | React.KeyboardEvent) => {
    return evt.target === evt.currentTarget && closePopup();
  };

  return (
    <div
      className="popup"
      onClick={handleOverlayClose}
      onKeyDown={handleOverlayClose}
      role="presentation"
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          onClick={closePopup}
          type="button"
          aria-label="Кнопка закрытия попапа"
        />
        {title && <h3 className="popup__title">{title}</h3>}
        <p className="popup__message">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
