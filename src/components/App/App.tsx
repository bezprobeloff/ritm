import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { getTest, sendForm } from '../../utils/ApiRitm';
import { MESSAGE_SUCCESS } from '../../utils/constants';
import { TDataFeedback } from '../../types/types';

interface TPopupPropsState {
  title?: string;
  message: string;
}

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isPreloaderFeedbackEnabled, setIsPreloaderFeedbackEnabled] = useState(false);
  const [popupProps, setPopupProps] = useState<TPopupPropsState>({
    title: '',
    message: ''
  });
  const closePopup = () => {
    setIsPopupOpened(false);
  };

  const openPopup = () => {
    setIsPopupOpened(true);
  };

  const onSubmitFeedback = async (dataForm: TDataFeedback) => {
    setIsPreloaderFeedbackEnabled(true);
    try {
      // для теста попапа
      const test = await getTest();
      console.log(test);

      // раскомментировать для отправки формы
      // await sendForm(dataForm);

      setPopupProps({ title: MESSAGE_SUCCESS.title, message: MESSAGE_SUCCESS.message });
      openPopup();
    } catch (e) {
      console.log('Ошибка');
    } finally {
      setIsPreloaderFeedbackEnabled(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Main
        onSubmitFeedback={onSubmitFeedback}
        isPreloaderFeedbackEnabled={isPreloaderFeedbackEnabled}
      />
      <Footer />
      {isPopupOpened && (
        <Popup closePopup={closePopup} title={popupProps.title} message={popupProps.message} />
      )}
    </div>
  );
}

export default App;
