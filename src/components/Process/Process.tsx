import "../../styles/section.scss";
import "./Process.scss";
import Steps from "./Steps/Steps";

const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="section__wrapper">
        <h2 className="section__title process__title">Процесс работы</h2>
        <Steps />
      </div>
    </section>
  );
};

export default Process;
