import { FooterLink } from '../types/FooterLink.d';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './css/FooterLinks.module.css';

interface FooterLinksProps {
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = props => {
  const { links } = props;

  return (
    <div className={ styles['footer-links'] }>
      {links.map(link => (
        !link.to.startsWith('http') ?
          (
            <Link to={{ pathname: link.to }} target={ link.target } key={ link.name }>{ link.name }</Link>
          ) :
          (
            <a href={ link.to } target={ link.target } key={ link.name }>{ link.name }</a>
          )
      ))}
    </div>
  );
};

export { FooterLinks };
