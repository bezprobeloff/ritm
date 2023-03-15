import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const closePopup = () => {
    setIsPopupOpened(false);
  };

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Popup isOpen={isPopupOpened} onClose={closePopup}>
        <p className="popup__title">Спасибо!</p>
        <p className="popup__message">Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
      </Popup>
    </div>
  );
}

export default App;
