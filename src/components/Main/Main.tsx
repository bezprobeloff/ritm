import "./Main.scss";
import Techs from "../Techs/Techs";
import Dev from "../Dev/Dev";
import Process from "../Process/Process";
import Feedback from "../Feedback/Feedback";
import FAQ from "../FAQ/FAQ";
import Contacts from "../Contacts/Contacts";

const Main = () => {
  return (
    <main className="main">
      <Techs />
      <Dev />
      <Process />
      <Feedback />
      <FAQ />
      <Contacts />
    </main>
  );
};

export default Main;
