 import {
  FaUniversity,
  FaEye,
  FaPaintBrush,
  FaCog,
  FaLeaf,
} 
from "react-icons/fa";
import { IconBase } from 'react-icons';

const aboutItems =[
  {
    title: 'TheInstitute',
    image:"/images/menu_institute.jpg",
    link:'/AboutUs/TheInstitute',
    icon:FaUniversity,
  },
  {
  title: 'History',
  image: "/images/menu_history.jpg",
  link:'/AboutUs/History', 
  icon :FaUniversity,
},
 
{
    title: 'Mission & Vision', 

 image: "/images/menu_mission.jpg",
 link:'/AboutUs/Missionandvision' , 
 icon: FaEye
},
 {
 title:'DirectorMessage',

 image : "/images/menu_director.jpg",
 link:'/AboutUs/DirectorMessage',
 icon: FaPaintBrush,
 },
 {
   title:'Manage cum Secratory Message',
  
   image: "/images/menu_manager.jpg",
   link:'/AboutUs/Manage cum Secratory Message',
   icon:FaLeaf
 } ,
 {
  title:'PrincipalMessage',
  
 image :"/images/menu_principal.jpg",
 link:'/AboutUs/principalmessage' ,
 icon:FaCog

},
{
 title:'Green-Campus',
 image: "/images/menu_greencampus.jpg",
 link:'/AboutUs/greencampus',
 icon:FaUniversity
},
];
export default aboutItems;