export interface TabItem {
  name: string;
  icon: string;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActive: string;
  onTabChange?: (tabName: string) => void;
}
