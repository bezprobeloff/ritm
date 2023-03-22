import React from 'react';
import LINKS from './constants';

type Props = {
  classNameNav: string;
  classNameLink: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Navigation: React.FC<Props> = ({ classNameNav, classNameLink, onClick }) => {
  const linkElements = LINKS.map((item, index) => {
    const linkKey = `link${index}`;
    return (
      <a key={linkKey} href={item.href} className={classNameLink} onClick={onClick}>
        {item.text}
      </a>
    );
  });

  return <nav className={classNameNav}>{linkElements}</nav>;
};

export default Navigation;
