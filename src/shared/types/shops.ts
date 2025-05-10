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
    id: number;
    category: string;
    icon: string;
    name: string;
  }[];
  mode: {
    weekday: {
      start: string;
      end: string;
    };
    free: {
      start: string;
      end: string;
    };
  };
  photos: {
    id: number;
    alt: string;
    src: string;
  }[];
}
