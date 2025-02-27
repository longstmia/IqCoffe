import React from 'react';
import { FooterContainer, FooterItem } from './Footer.styles';
import firstIcon from '../../assets/footer/first-icon.svg';
import mapMarkerIcon from '../../assets/footer/map-marker.svg';
import paymentIcon from '../../assets/footer/payment.svg';

const Footer: React.FC = () => {
  const footerItems = [
    { icon: firstIcon, label: 'IQ-Coffee' },
    { icon: mapMarkerIcon, label: 'Кофейни' },
    { icon: paymentIcon, label: 'К оплате' },
  ];

  return (
    <FooterContainer>
      {footerItems.map((item, index) => (
        <FooterItem key={index}>
          <img src={item.icon} alt={item.label} />
          <span>{item.label}</span>
        </FooterItem>
      ))}
    </FooterContainer>
  );
};

export default Footer;
