
import {logo,GraphicDesign,WebDesign,teams, oranges, coffee, digitalMarketing, marketing} from '../assets/images/images'

const Navlinks = [
  {
    id: "1",
    link: "/",
    label: "Home",
  },
  {
    id: "2",
    link: "/about",
    label: "About us",
  },
  {
    id: "3",
    link: "/contact",
    label: "Contact us",
  },
  {
    id: "4",
    link: "/services",
    label: "Services",
  },
];

const ServiceDetails= [
  {
    id:'1',
    serviceTitle:"Graphic Design",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/graphicdesign',
    photoUrl:GraphicDesign
  },
  {
    id:'2',
    serviceTitle:"Web Design",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/webdesign',
    photoUrl:WebDesign
  },
  {
    id:'3',
    serviceTitle:"Application Design",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/appdesign',
    photoUrl:teams
  },
  {
    id:'4',
    serviceTitle:"E-Commerce ",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/ecommerce',
    photoUrl:coffee
  },
  {
    id:'5',
    serviceTitle:"Marketing",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/marketing',
    photoUrl:marketing
  },
  {
    id:'6',
    serviceTitle:"digital Marketing",
    serviceDescription:'We Deal will Graphic Design.We have a experts who Create a well Graphic designs for out clients at an affordale price Chick the button below for more info',
    navigate:'/digitalmarketing',
    photoUrl:digitalMarketing
  },
]

export { Navlinks,ServiceDetails };
