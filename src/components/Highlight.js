import { Link, useNavigate } from 'react-router-dom';
import { memo } from 'react';
import Button from './Button';
import { useDataProvider } from './DataProvide';
function Highlight({ heading, data, show, padding, id }) {
    const { myFun, linkClick } = useDataProvider();
    const navigate = useNavigate();
    return (
        <>
            <div className={"highlight "+ padding} id={id}>
                <div className="container-fluid row justify-content-center">
                    <div className="col-10">
                        <h4>{heading}</h4>
                    </div>
                    <div className="col-10 row justify-content-between p-0">
                        {
                            data.map(item => {
                                return (
                                    <div key={item.name} className="col-lg-4 col-md-6 mt-4 p-0">
                                        <div className="card border border-0">
                                            <div className="card-body rounded-2">
                                                <img className="img-fluid mb-4  shadow" src={item.path} alt="menu_img" />
                                                <h5>{item.name}</h5>
                                                <h5 className='price float-end'><b>${item.price}</b></h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                <hr></hr>
                                                <Button className="main-btn" onclick={() => {
                                                    myFun("directOrder", item);
                                                    navigate('/orderOnline');
                                                    linkClick('orderonline1')
                                                }} >
                                                    Order Now
                                                </Button>
                                                <Button className="secondary-btn" onclick={() => myFun("cartadd", item)}>
                                                    Add to cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {show && <div className="col-10 pt-4 ">
                        <Link onClick={()=>linkClick("menu1")} to="/menu" className='d-flex align-items-center'>view menu <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default memo(Highlight);