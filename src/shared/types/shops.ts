export interface Shop {
  id: number;
  name: string;
  address: string;
  pattern: string;
  stylebook: {
    mainColor: string;
    secondColor: string;
    opacity: string;
    pattern: string;
  };
}
