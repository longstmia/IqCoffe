import React, { useState, useEffect, useRef } from 'react';
import { TabsProps } from './tabs.types';
import { TabsWrapper, TabsContainer, TabItem, Glider } from './tabs.styles';

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [gliderLeft, setGliderLeft] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(0);

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.name === activeTab);
    const el = tabRefs.current[index];
    if (el) {
      setGliderLeft(el.offsetLeft);
      setGliderWidth(el.offsetWidth);
    }
  }, [activeTab, tabs]);

  const handleClick = (tabName: string, index: number) => {
    setActiveTab(tabName);
    if (onTabChange) onTabChange(tabName);

    const el = tabRefs.current[index];
    if (el) {
      setGliderLeft(el.offsetLeft);
      setGliderWidth(el.offsetWidth);
    }
  };

  return (
    <TabsWrapper>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabItem
            key={tab.name}
            ref={(el: HTMLDivElement | null) => {
              tabRefs.current[index] = el;
            }}
            $active={tab.name === activeTab}
            onClick={() => handleClick(tab.name, index)}
          >
            <img src={tab.icon} alt="" />
            {tab.name}
          </TabItem>
        ))}
        <Glider style={{ left: gliderLeft, width: gliderWidth }} />
      </TabsContainer>
    </TabsWrapper>
  );
};

export default Tabs;
