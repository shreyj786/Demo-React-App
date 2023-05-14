import { memo } from 'react';
import Button from './Button';
import { useNavigate} from 'react-router-dom';
import { useDataProvider } from './DataProvide';
function Hero() {
    const navigate = useNavigate();
    const {linkClick} = useDataProvider();
    return (
        <>
            <div className="banner">
                <div className="row container-fluid justify-content-center align-items-center">
                    <div className="col-lg-5 col-10 p-3 banner-about">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.
                        </p>
                        <Button className="main-btn mt-4" role="booking" onclick={()=>{
                            navigate('/reservation');
                            linkClick("reservation1")
                            }}>
                            Book Table <i className=" ms-2 fa-solid fa-bookmark"></i>
                        </Button>
                        <Button className='secondary-btn ms-md-4 ms-sm-4 ms-md-0 ms-0 mt-4' role="order" onclick={()=>{
                            navigate('/menu');
                            linkClick("menu1")
                            }}>
                            Order Now <i className=" ms-2 fa-solid fa-basket-shopping"></i>
                        </Button>
                    </div>
                    <div className="col-lg-5 col-10 py-4 row ">
                        <img className="col-8 img-fluid g-2 " src={require('../Assets/img_1.jpg')} alt="hero_img" />
                        <img className="col-4 img-fluid g-2 " src={require('../Assets/img_4.jpg')} alt="hero_img" />
                        <img className="col-4 img-fluid g-2 " src={require('../Assets/img_3.jpg')} alt="hero_img" />
                        <img className="col-4 img-fluid g-2 " src={require('../Assets/img_5.jpg')} alt="hero_img" />
                        <img className="col-4 img-fluid g-2 " src={require('../Assets/img_6.jpg')} alt="hero_img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Hero);