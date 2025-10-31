
import React from 'react';
import { Category, BlogPost, ShopItem } from './types';

export const NAV_LINKS = [
  { name: 'Categories', href: '#categories' },
  { name: 'Lookbook', href: '#lookbook' },
  { name: 'Blog', href: '#blog' },
  { name: 'Shop', href: '#shop' },
  { name: 'AI Assistant', href: '#assistant' },
];

export const CATEGORIES: Category[] = [
  { name: 'Formal Wear', image: 'https://picsum.photos/seed/formal/600/800' },
  { name: 'Casual Wear', image: 'https://picsum.photos/seed/casual/600/800' },
  { name: 'Streetwear', image: 'https://picsum.photos/seed/street/600/800' },
  { name: 'Ethnic Wear', image: 'https://picsum.photos/seed/ethnic/600/800' },
  { name: 'Accessories', image: 'https://picsum.photos/seed/accessories/600/800' },
];

export const LOOKBOOK_IMAGES: string[] = [
  'https://picsum.photos/seed/look1/600/900',
  'https://picsum.photos/seed/look2/600/900',
  'https://picsum.photos/seed/look3/600/900',
  'https://picsum.photos/seed/look4/600/900',
  'https://picsum.photos/seed/look5/600/900',
  'https://picsum.photos/seed/look6/600/900',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/blog1/800/600',
    title: '10 Must-Have Items for Your Summer Wardrobe',
    excerpt: 'Beat the heat in style with these essential summer pieces that every man should own.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/800/600',
    title: 'Grooming Guide: The Perfect Morning Routine',
    excerpt: 'Start your day right with our step-by-step guide to a flawless grooming routine.',
  },
  {
    image: 'https://picsum.photos/seed/blog3/800/600',
    title: 'How to Master the Art of Layering',
    excerpt: 'Learn how to combine different pieces to create stylish and functional layered outfits.',
  },
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    image: 'https://picsum.photos/seed/shop1/800/1000',
    name: 'The Weekend Getaway',
    items: ['Linen Shirt', 'Chino Shorts', 'Leather Loafers'],
    price: 249.99,
  },
  {
    image: 'https://picsum.photos/seed/shop2/800/1000',
    name: 'Urban Explorer',
    items: ['Graphic Tee', 'Cargo Pants', 'High-Top Sneakers'],
    price: 199.99,
  },
  {
    image: 'https://picsum.photos/seed/shop3/800/1000',
    name: 'Boardroom Ready',
    items: ['Tailored Suit', 'Crisp White Shirt', 'Oxford Shoes'],
    price: 499.99,
  },
];

export const SOCIAL_LINKS = [
  { 
    name: 'Instagram', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    name: 'Pinterest', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.55 7.69 6.04 9.1-.14-.87-.04-1.9.22-2.82.25-.9.16-1.02-.1-1.89-.25-.87.5-1.58 1.16-1.58.9 0 1.32.68 1.32 1.5 0 .9-.58 2.24-.87 3.47-.24 1.02.5 1.84 1.5 1.84 1.8 0 3.17-2.3 3.17-5.22 0-2.22-1.6-3.8-3.7-3.8-2.6 0-4.14 1.95-4.14 4.02 0 .78.28 1.64.63 2.1.07.1.07.18.05.28-.08.38-.27.9-.3.98-.05.15-.22.2-.4.12-1.48-.6-2.4-2.58-2.4-4.32 0-3.37 2.4-6.3 6.9-6.3 3.6 0 6.33 2.58 6.33 5.72 0 3.6-2.28 6.4-5.4 6.4-1.1 0-2.13-.58-2.48-1.28l-.78 2.98c-.28 1.05-.98 2.3-1.42 3.1.58.18 1.18.28 1.8.28 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
    )
  },
  { 
    name: 'YouTube', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.94,15.545V8.455l6.782,3.545L9.94,15.545z"/>
      </svg>
    )
  },
];
