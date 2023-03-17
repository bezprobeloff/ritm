import './Main.scss';
import React from 'react';
import Techs from '../Techs/Techs';
import Dev from '../Dev/Dev';
import Process from '../Process/Process';
import Feedback from '../Feedback/Feedback';
import FAQ from '../FAQ/FAQ';
import Contacts from '../Contacts/Contacts';
import { TDataFeedback } from '../../types/types';

type PropTypes = {
  onSubmitFeedback: (dataForm: TDataFeedback) => void;
  isPreloaderFeedbackEnabled: boolean;
};

const Main: React.FC<PropTypes> = ({ onSubmitFeedback, isPreloaderFeedbackEnabled }) => {
  return (
    <main className="main">
      <Techs />
      <Dev />
      <Process />
      <Feedback onSubmit={onSubmitFeedback} isPreloaderEnabled={isPreloaderFeedbackEnabled} />
      <FAQ />
      <Contacts />
    </main>
  );
};

export default Main;
