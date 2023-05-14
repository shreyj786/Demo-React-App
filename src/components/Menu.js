import { memo, useState,useEffect } from 'react';
import Highlight from './Highlight';

function Reservation() {
    const [toggle, setToggle] = useState(false);
    function handleClick() {
        setToggle(val => !val);
    }
    useEffect(()=>{
        let a = document.getElementById('toggler');
        let b = document.getElementById('toggler-icon');
        document.body.addEventListener('click',(e)=>{
            if(e.target != a && e.target != b){
                setToggle(false);
            }
        })
    },[])
    const desserts = [
        {
            name: "Banana Sandwich",
            path: require("../Assets/bananasandwich.jpg"),
            price: "7.00",
            qty: 1,
            id: 7
        },
        {
            name: "Choclate Brownies",
            path: require("../Assets/brownies2.jpg"),
            price: "10.00",
            qty: 1,
            id: 1
        },
        {
            name: "Donuts",
            path: require("../Assets/donuts.jpg"),
            price: "3.00",
            qty: 1,
            id: 8
        },
        {
            name: "Strawberry Tart",
            path: require("../Assets/strawberry-tart.jpg"),
            price: "11.00",
            qty: 1,
            id: 9
        },
        {
            name: "Cheesecake",
            path: require("../Assets/cheese_cake.jpg"),
            price: "9.00",
            qty: 1,
            id: 4
        },
        {
            name: "Coho Muffin",
            path: require("../Assets/choclatMuffin.jpg"),
            price: "17.00",
            qty: 1,
            id: 10
        }
    ];

    const fastFood = [
        {
            name: "Cheese Burger",
            path: require("../Assets/cheese_burger.jpg"),
            price: "12.00",
            qty: 1,
            id: 0
        },
        {
            name: "Lasagna",
            path: require("../Assets/lasagna.jpg"),
            price: "10.00",
            qty: 1,
            id: 11
        },
        {
            name: "Italian Pizza",
            path: require("../Assets/italianPizza.jpg"),
            price: "16.00",
            qty: 1,
            id: 12
        },
    ];

    const mainCourse = [
        {
            name: "Grilled Chicken",
            path: require("../Assets/grilledmeat.jpg"),
            price: "16.00",
            qty: 1,
            id: 13
        },
        {
            name: "Greek Salad",
            path: require("../Assets/greekSalad.jpg"),
            price: "10.00",
            qty: 1,
            id: 14
        },
        {
            name: "Cheese Pasta",
            path: require("../Assets/cheesePasta.jpg"),
            price: "13.00",
            qty: 1,
            id: 15
        },
        {
            name: "Lamb Steak",
            path: require("../Assets/lamb-steak.jpg"),
            price: "19.00",
            qty: 1,
            id: 16
        },
        {
            name: "Salmon Bowl",
            path: require("../Assets/salmon_bowl2.jpg"),
            price: "13.00",
            qty: 1,
            id: 5
        },
        {
            name: "Pork Chop",
            path: require("../Assets/pork_chop2.jpg"),
            price: "15.00",
            qty: 1,
            id: 3
        }
    ];

    const drinks = [
        {
            name: "Mocha",
            path: require("../Assets/mocha.jpg"),
            price: "7.00",
            qty: 1,
            id: 17
        },
        {
            name: "Ice Tea",
            path: require("../Assets/iceTea.jpg"),
            price: "5.00",
            qty: 1,
            id: 18
        },
        {
            name: "Lemonade",
            path: require("../Assets/lemonade.jpg"),
            price: "4.00",
            qty: 1,
            id: 18
        },
    ];
    return (
        <>
            <div className='container-fluid mt-3 border-bottom pb-3'>
                <div className='row  justify-content-center gap-4'>
                    <div className='col-md-5 col-10 d-flex gap-4 align-items-center'>
                        <div>
                            <img src={require('../Assets/menu-logo.jpg')} className='img-fluid' id='menu-logo' alt='menu-logo' />
                        </div>
                        <div id='welcome'>
                            <h3>Menu Section</h3>
                            <p className='welcome-para'>Lifes is uncertain. Eat dessert first!!!</p>
                        </div>
                    </div>
                    <div className='col-md-5 col-10 d-flex flex-column gap-1'>
                        <p className='welcome-para mb-0'>Delicacies we offer...</p>
                        <div className='d-flex gap-5 align-items-center'>
                            <div className='text-center'>
                                <img src={require('../Assets/thai.jpg')} className='img-fluid' id='cat-logo' alt='menu-logo' />
                                <p className='welcome-para mb-0 mt-1'>Thai</p>
                            </div>
                            <div>
                                <img src={require('../Assets/greek.jpg')} className='img-fluid' id='cat-logo' alt='menu-logo' />
                                <p className='welcome-para mb-0 mt-1'>Greek</p>
                            </div>
                            <div>
                                <img src={require('../Assets/italian.jpg')} className='img-fluid' id='cat-logo' alt='menu-logo' />
                                <p className='welcome-para mb-0 mt-1'>Italian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' id='section-nav-parent'>
                <ul className={"nav flex-column align-items-center " + (toggle ? "rounded-pill" : "rounded-circle")} id='section-nav'>
                    {toggle && <>
                        <li className='nav-item'><a href='#' className='nav-link'></a></li>
                        <li className='nav-item'><a href='#beverages' className='nav-link'><i className="fa-solid fa-martini-glass-citrus fa-beat-fade"></i></a></li>
                        <li className='nav-item'><a href='#fastfood' className='nav-link'><i className="fa-solid fa-pizza-slice fa-beat-fade"></i></a></li>
                        <li className='nav-item'><a href='#maincourse' className='nav-link'><i className="fa-solid fa-bowl-rice fa-beat-fade"></i></a></li>
                        <li className='nav-item'><a href='#desserts' className='nav-link'><i className="fa-sharp fa-solid fa-cookie-bite fa-beat-fade"></i></a></li>
                    </>}
                    <li className='nav-item rounded-cricle' onClick={(e)=>{
                        e.preventDefault();
                        handleClick();
                    }}><a href='#' className='nav-link mt-2' id='toggler'>{toggle ? <i className="fa-solid fa-link-slash"></i> :  <i id='toggler-icon' class="fa-sharp fa-solid fa-link"></i>}</a></li>

                </ul>
            </div>
            <Highlight data={drinks} heading="Beverages Section" show={false} padding='pb-5 pt-4' id="beverages"/>
            <Highlight data={fastFood} heading="Fast Food Section" show={false} padding='pb-5' id='fastfood' />
            <Highlight data={mainCourse} heading="Main Course Section" show={false} padding='pb-5' id='maincourse' />
            <Highlight data={desserts} heading="Dessert Section" show={false} padding='pb-5' id='desserts' />
        </>
    )
}

export default memo(Reservation);