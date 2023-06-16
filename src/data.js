import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const Serv = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    title: 'saving money',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    title: 'endless hiking',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    title: 'amazing comfort',
  },
];

export const tours = [
  {
    id: '1',
    image: tour1,
    date: 'august 26th, 2023',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    price: '1950$',
    location: 'China',
    duration: '6 days',
  },
  {
    id: '2',
    image: tour2,
    date: 'september 9th, 2023',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    price: '1800$',
    location: 'Indonesia',
    duration: '21 days',
  },
  {
    id: '3',
    image: tour3,
    date: 'december 2nd, 2023',
    title: 'explore hong-kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    price: '2400$',
    location: 'hong-kong',
    duration: '14 days',
  },
  {
    id: '4',
    image: tour4,
    date: 'october 17th, 2023',
    title: 'Kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    price: '2900$',
    location: 'Kenya',
    duration: '30 days',
  },
];
