import './Tools.scss';
import iconReact from '../../../images/icon-react.svg';
import iconNodeJS from '../../../images/icon-nodejs.svg';
import iconNestJS from '../../../images/icon-nestjs.svg';
import iconNginx from '../../../images/icon-nginx.svg';

const Tools = () => {
  return (
    <div className='tools'>
      <div className='tools__list'>
        <div className='tools__item'>
          <img
            className='tools__item-image tools__item-image_type_react'
            src={iconReact}
            alt='React'
          />
        </div>
        <div className='tools__item'>
          <img
            className='tools__item-image tools__item-image_type_nodejs'
            src={iconNodeJS}
            alt='NodeJs'
          />
        </div>
        <div className='tools__item'>
          <img
            className='tools__item-image tools__item-image_type_nest'
            src={iconNestJS}
            alt='Nest'
          />
        </div>
        <div className='tools__item'>
          <img
            className='tools__item-image tools__item-image_type_nginx'
            src={iconNginx}
            alt='Nginx'
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
