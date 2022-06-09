import avatar from '../assets/jpg/avatar.jpg';
import { BrowserView } from 'react-device-detect';
import React from 'react';
import styles from './css/Avatar.module.css';
import stylesConstruction from './css/Construction.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Avatar: React.FC = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const path = '/~ronny';
  const onPath = location === path;

  const onClick = async (event: Event): Promise<void> => {
    event.preventDefault();
    navigate(path);
  };

  setTimeout(() => {
    const cl = stylesConstruction.construction;
    const el = document.getElementsByClassName(cl)[0];

    if (onPath) {
      el.classList.add(stylesConstruction.ronny);
    } else {
      el.classList.remove(stylesConstruction.ronny);
    }
  }, 250);

  const anchorAttr = !onPath ? { href: path, onClick } : null;
  const imageAttr = { src: avatar, className: anchorAttr?.href ? '' : styles.disabled, alt: path };

  const image = React.createElement('img', imageAttr);
  const anchor = React.createElement('a', anchorAttr, image);

  return (
    <BrowserView>
      <div className={ styles.avatar }>
        <div>
          { anchor }
        </div>
      </div>
    </BrowserView>
  );
};

export { Avatar };
