import './Dev.scss';
import '../../styles/section.scss';
import Stages from './Stages/Stages';
import Business from './Business/Business';
import Tools from './Tools/Tools';

const Dev = () => {
  return (
    <section className='section dev'>
      <h2 className='section__title'>Пример развития экосистемы</h2>
      <Stages />
      <Business />
      <Tools />
    </section>
  );
};

export default Dev;
