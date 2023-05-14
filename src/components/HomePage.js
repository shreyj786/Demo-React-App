import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import Parallax from './Parallax';
import {memo} from 'react';

function HomePage(){
    const items = [
        {
            name: "Cheese Burger",
            path: require("../Assets/cheese_burger.jpg"),
            price: "12.00",
            qty : 1,
            id : 0
        },
        {
            name: "Choclate Brownies",
            path: require("../Assets/brownies2.jpg"),
            price: "10.00",
            qty : 1,
            id : 1
        },
        {
            name: "Croissant",
            path: require("../Assets/croissant.jpg"),
            price: "4.00",
            qty : 1,
            id : 2
        },
        {
            name: "Pork Chop",
            path: require("../Assets/pork_chop2.jpg"),
            price: "15.00",
            qty : 1,
            id : 3
        },
        {
            name: "Cheesecake",
            path: require("../Assets/cheese_cake.jpg"),
            price: "9.00",
            qty : 1,
            id : 4
        },
        {
            name: "Salmon Bowl",
            path: require("../Assets/salmon_bowl2.jpg"),
            price: "13.00",
            qty : 1,
            id : 5
        }
    ];
    return(
        <>
        <Hero/>
        <Highlight data={items} heading="This week's Specials" show={true} padding='py-5'/>
        <Parallax/>
        <Testimonial/>
        </>
    )
}

export default memo(HomePage);