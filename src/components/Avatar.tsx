import avatar from '../assets/jpg/avatar.jpg';
import React from 'react';
import styles from './css/Avatar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Avatar: React.FC = () => {
  const link = <img src={ avatar } alt='' />;
  const location = useLocation().pathname;
  const to = '/~ronny';

  return (
    <div className={ styles.avatar }>
      <div>
        { location !== to ? <Link to={ to }>{link}</Link> : link }
      </div>
    </div>
  );
};

export { Avatar };
