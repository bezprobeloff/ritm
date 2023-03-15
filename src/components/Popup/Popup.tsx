import React, { useCallback, useEffect } from 'react';
import './Popup.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void | React.MouseEvent;
  children: React.ReactNode;
};

const Popup: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const classPopupOpened = `${isOpen ? 'popup_opened' : ''}`;
  const handleOverlayClose = (evt: React.MouseEvent) => {
    return evt.target === evt.currentTarget && onClose();
  };

  const handleEscClosePopup = useCallback((evt: KeyboardEvent) => {
    if (evt.key !== 'Escape') return;

    onClose();
  }, []);
  const setHandleEscClosePopup = () => {
    document.addEventListener('keydown', handleEscClosePopup);
  };
  const removeHandleEscClosePopup = () => {
    document.removeEventListener('keydown', handleEscClosePopup);
  };

  useEffect(() => {
    return isOpen ? setHandleEscClosePopup() : removeHandleEscClosePopup();
  }, [isOpen]);

  return (
    <div className={`popup ${classPopupOpened}`} onClick={handleOverlayClose}>
      <div className="popup__container">
        <button className="popup__button-close" onClick={onClose} type="button"></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
