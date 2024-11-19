interface menuItems {
    menu: string;
    link: string;
}
interface hero {
    title: string;
    subtitle: string;
}

interface Content {
    menuItems: menuItems[];
    hero: hero[];
}

 const content: Content = {
    menuItems: [
        {
            menu: "Home",
            link: "/"
        },
        {
            menu: "About Us",
            link: "/about"
        },
        {
            menu: "Features",
            link: "/features"
        },
        {
            menu: "Contact US",
            link: "/contact"
        },

     ],
     hero: [
         {
             title: "Discover meaningful relationships",
             subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
         }
     ]

    
}


export default content;