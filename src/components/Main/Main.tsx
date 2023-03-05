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
      <h1 className="main__title">
        <span className="main__title main__title_type_blue">
          Разрабатываем и внедряем веб&#8209;приложения
        </span>
        , которые помогают оптимизировать бизнес-процессы и решить сложные
        управленческие задачи
      </h1>
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
