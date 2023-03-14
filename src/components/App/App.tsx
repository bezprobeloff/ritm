import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Techs from '../Techs/Techs';
import Dev from '../Dev/Dev';
import Process from '../Process/Process';
import Feedback from '../Feedback/Feedback';
import FAQ from '../FAQ/FAQ';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Techs />
        <Dev />
        <Process />
        <Feedback />
        <FAQ />
        <Contacts />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
