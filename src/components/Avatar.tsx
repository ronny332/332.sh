import avatar from '../assets/jpg/avatar.jpg';
import { BrowserView } from 'react-device-detect';
import React from 'react';
import styles from './css/Avatar.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Avatar: React.FC = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const path = '/~ronny';

  const onClick = async (event: Event): Promise<void> => {
    event.preventDefault();
    navigate(path);
  };

  const anchorAttr = location !== path ? { href: path, onClick } : null;
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
