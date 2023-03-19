import '../../styles/section.scss';
import './Techs.scss';
import Web from './Web/Web';
import Advantage from './Advantage/Advantage';

const Techs: React.FC = () => {
  return (
    <section id="techs" className="section techs">
      <h2 className="section__title">Технологии</h2>
      <Web />
      <Advantage />
    </section>
  );
};

export default Techs;
