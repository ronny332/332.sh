import { Construction } from './Construction';
import { FooterLink } from '../types/FooterLink.d';
import { FooterLinks } from './FooterLinks';
import React from 'react';
import styles from './css/Root.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';

const flRonny: FooterLink[] = [
  {
    name: '>/root',
    target: '_self',
    to: '/root',
  },
  {
    name: 'GitHub',
    target: '_blank',
    to: 'https://github.com/ronny332',
  },
  {
    name: 'Stack Overflow',
    target: '_blank',
    to: 'https://stackoverflow.com/users/4559502/ronny332',
  },
  {
    name: 'Twitter',
    target: '_blank',
    to: 'https://twitter.com/ronny332',
  },
];

const flRoot: FooterLink[] = [
  {
    name: '>/~ronny',
    target: '_self',
    to: '/~ronny',
  },
];

const Root: React.FC = () => (
  <div className={ styles.root }>
    <Construction />
    <Routes>
      <Route path='/root' element={ <FooterLinks links={ flRoot } /> } />
      <Route path='/~ronny' element={ <FooterLinks links={ flRonny } /> } />
      <Route path='/*' element={ <Navigate to='/root' replace={ true } /> } />
    </Routes>
  </div>
);

export { Root };
