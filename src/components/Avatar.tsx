import avatar from '../assets/jpg/avatar.jpg';
import React from 'react';
import styles from './css/Avatar.module.css';

const Avatar: React.FC = () => (
  <div className={ styles.avatar }>
    <div>
      <img src={ avatar } alt='' />
    </div>
  </div>
);

export { Avatar };
