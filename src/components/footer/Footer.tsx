import React from 'react';
import { FooterContainer, FooterItem } from './Footer.styles';
import firstIcon from '../../assets/footer/first-icon.svg';
import mapMarkerIcon from '../../assets/footer/map-marker.svg';
import paymentIcon from '../../assets/footer/payment.svg';

const footerItems = [
  { id: 'iq-coffee', icon: firstIcon, label: 'IQ-Coffee' },
  { id: 'coffee-shops', icon: mapMarkerIcon, label: 'Кофейни' },
  { id: 'payment', icon: paymentIcon, label: 'К оплате' },
];

const Footer: React.FC = () => (
  <FooterContainer>
    {footerItems.map((item) => (
      <FooterItem key={item.id}>
        <img src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </FooterItem>
    ))}
  </FooterContainer>
);

export default Footer;
