import React from 'react';
import styles from './css/Construction.module.css';
import svg from '../assets/svg/construction.min.svg';

const Construction: React.FC = () =>
  (
    <div className={ styles.construction }>
      <svg className={ styles.construction }>
        <image xlinkHref={ svg } width='100%' height='100%' />
      </svg>
      <div className={ styles.headline }><p>under</p> <p>construction</p></div>
      <div className={ styles.subline }><p>this site is work in progress</p><p>please come back soon</p></div>
    </div>
  );

export { Construction };

