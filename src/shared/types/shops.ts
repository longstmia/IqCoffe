export interface Shop {
  id: number;
  name: string;
  address: string;
  stylebook: {
    mainColor: string;
    secondColor: string;
    opacity: string;
    pattern: string;
  };
  categories: {
    icon: string;
    name: string;
  }[];
}
