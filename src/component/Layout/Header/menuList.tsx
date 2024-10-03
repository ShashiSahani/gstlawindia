// components/menuList.ts
const MenuList = [
    {
      name: 'Home',
      href: '/',
    },
    {
        name: 'About',
        href: '/about',
      },
      {
        name: 'circular',
        href: '/circular',
      },
    {
      name: 'Services',
      href: '/services',
      subMenu: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'App Development', href: '/services/app-development' },
        { name: 'SEO', href: '/services/seo' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];
  
  export default MenuList;
  