import '../../styles/section.scss';
import './Techs.scss';
import Web from './Web/Web';
import Advantage from './Advantage/Advantage';
import { ReactComponent as TechLine } from '../../images/tech-line.svg';
const Techs = () => {
  return (
    <section className='section techs'>
      <TechLine className='techs__line' />
      <h2 className='section__title'>Технологии</h2>
      <Web />
      <Advantage />
    </section>
  );
};

export default Techs;
