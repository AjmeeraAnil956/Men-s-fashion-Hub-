
export interface Category {
  name: string;
  image: string;
}

export interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
}

export interface ShopItem {
  image: string;
  name: string;
  items: string[];
  price: number;
}
