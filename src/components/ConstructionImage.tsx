import React from 'react';

import styles from './css/ConstructionImage.module.css';

const ConstructionImage: React.FC = () =>
  (
    <div className={ styles['construction-image'] }>
      <img src='/assets/img/construction.jpg' alt='ronny.332.sh - under construction' />
    </div>
  );

export { ConstructionImage };

