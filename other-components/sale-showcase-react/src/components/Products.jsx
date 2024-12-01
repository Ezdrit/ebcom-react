import gucciDuffleBag from '../images/image-01.png';
import cpuCooler from '../images/image-02.png';
import controller from '../images/image-03.png';
import jacket from '../images/image-04.png';
import laptop from '../images/image-05.png';
import monitor from '../images/image-06.png';
import xbox from '../images/image-07.png';
import keyboard from '../images/image-08.png';



const products = [
    {
        id: 1,
        name: "Gucci Duffle Bag",
        price: 1160,
        discount: 35,
        image: gucciDuffleBag,
   
    },
    {
        id: 2,
        name: "CPU Cooler",
        price: 1960,
        image: cpuCooler,
    },
    {
        id: 3,
        name: "Game Controller",
        price: 550,
        image: controller,
    },
    {
        id: 4,
        name: "Quilted Satin Jacket",
        price: 750,
        image: jacket,
    },
    {
        id: 5,
        name: "ASUS FHD Gaming",
        price: 960,
        discount: 35,
        image: laptop,
        shqipron: true,
        engjell: true,
        reviews: 65,  
    },
    {
        id: 6,
        name: "IPS LCD Gaming ",
        price: 1160,
        image: monitor,
        shqipron: true,
        engjell: true,
        reviews: 65,  
    },
    {
        id: 7,
        name: "HAVIT HV-G92 Gamepad",
        price: 560,
        eladiad: true,
        shqipron: true,
        engjell: true,
        image: xbox,
        reviews: 65,  
    },
    {
        id: 8,
        name: "AK-900 Wired ",
        price: 200,
        image: keyboard,
        shqipron: true,
        engjell: true,
        reviews: 65,  
    },
];

export default products;
