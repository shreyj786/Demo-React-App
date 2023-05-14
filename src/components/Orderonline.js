import { memo, useEffect, useState } from 'react';
import { useDataProvider } from './DataProvide';
import { Link } from 'react-router-dom';
import pic from '../Assets/lil-lemon.jpg'

function Orderonline() {
    const { orderItems, isLoggedIn, activeUser, myFun, linkClick } = useDataProvider();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    let dis = 0;
    useEffect(() => {
        let totalItems = 0;
        let totalPrice = 0;
        for (var item of orderItems) {
            if (item) {
                totalItems += item.qty;
                totalPrice += (Number(item.price) * item.qty);
            }
        }
        setTotalItems(totalItems);
        setTotalPrice(totalPrice);
    }, [orderItems])
    return (
        <>
            {
                totalItems > 0 ? (
                    <div className='orderSummary'>
                        <div className='container pb-5 pt-3' id='orderOnlineSection'>
                            <div className='row justify-content-center gap-3'>
                                <div className='col-10 px-0'>
                                    <h4>Order Summary</h4>
                                </div>
                                <div className='col-10 px-0 '>
                                    <div className='row justify-content-center mx-0'>
                                        <div className='col-2 px-0'><p className='fw-bold'>S.No</p></div>
                                        <div className='col-4 px-0'><p className='fw-bold'>Item</p></div>
                                        <div className='col-2 px-0'><p className='fw-bold'>Qty</p></div>
                                        <div className='col-2 px-0'><p className='fw-bold'>Price($)</p></div>
                                        <div className='col-2 px-0'><p className='fw-bold'>Total($)</p></div>
                                    </div>
                                    {
                                        (() => {
                                            let num = 0;
                                            return orderItems.map((item) => {
                                                item && num++;
                                                return item && (
                                                    <div className='row justify-content-center mx-0'>
                                                        <div className='col-2 px-0'><p>{num}</p></div>
                                                        <div className='col-4 px-0'><p>{item.name}</p></div>
                                                        <div className='col-2 px-0'><p>{item.qty}</p></div>
                                                        <div className='col-2 px-0'><p>{item.price}</p></div>
                                                        <div className='col-2 px-0'><p>{Number(item.price) * item.qty}.00</p></div>
                                                    </div>
                                                )
                                            })
                                        })()
                                    }
                                </div>
                                <div className='col-10 px-0'>
                                    <h4>Billing Details</h4>
                                    <div className='row mx-0'>
                                        <div className='col-5 px-0'>
                                            <p className='fw-bold'>Total Items</p>
                                        </div>
                                        <div className='col-2 px-0'>
                                            <p>{totalItems}</p>
                                        </div>
                                    </div>
                                    <div className='row mx-0'>
                                        <div className='col-5 px-0'>
                                            <p className='fw-bold'>Total Price</p>
                                        </div>
                                        <div className='col-2 px-0'>
                                            <p><span className='me-1'>$</span>{totalPrice}</p>
                                        </div>
                                    </div>
                                    <div className='row mx-0'>
                                        <div className='col-5 px-0'>
                                            <p className='fw-bold'>Discount(5%)</p>
                                        </div>
                                        <div className='col-2 px-0'>
                                            <p><span className='me-1'>$</span>{dis = (totalPrice * 5) / 100}</p>
                                        </div>
                                    </div>
                                    <div className='row mx-0'>
                                        <div className='col-5 px-0'>
                                            <p className='fw-bold'>To Pay</p>
                                        </div>
                                        <div className='col-2 px-0'>
                                            <p><span className='me-1'>$</span>{totalPrice - dis}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-10 px-0'>
                                    {
                                        isLoggedIn ? (
                                            activeUser.hasAdditionalInfo ? (
                                                <>
                                                    <h4>Shipping Details</h4>
                                                    <div className='row mx-0'>
                                                        <div className='col-5 px-0'>
                                                            <p className='fw-bold'>Deliver To</p>
                                                        </div>
                                                        <div className='col-5 px-0'>
                                                            <p>{activeUser.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row mx-0'>
                                                        <div className='col-5 px-0'>
                                                            <p className='fw-bold'>Address</p>
                                                        </div>
                                                        <div className='col-5 px-0'>
                                                            <p>{activeUser.address}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row mx-0'>
                                                        <div className='col-5 px-0'>
                                                            <p className='fw-bold'>Landmark</p>
                                                        </div>
                                                        <div className='col-5 px-0'>
                                                            <p>{activeUser.landmark}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row mx-0'>
                                                        <div className='col-5 px-0'>
                                                            <p className='fw-bold'>Mobile No.</p>
                                                        </div>
                                                        <div className='col-5 px-0'>
                                                            <p>{activeUser.mobile}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row mx-0 mt-2'>
                                                        <div className='col-10 px-0'>
                                                            <button className='main-btn' type='button' data-bs-toggle='modal' data-bs-target='#orderConfirm' onClick={()=>myFun("orderDone")}>Place Order</button>
                                                        </div>
                                                    </div>
                                                    <div className='modal fade' id='orderConfirm'>
                                                        <div className='modal-dialog modal-dialog-centered'>
                                                            <div className='modal-content'>
                                                                <div className='modal-header'>
                                                                    <p className='fw-bold'>Order Confirm</p>
                                                                    <button type='button' className='btn btn-close' data-bs-dismiss='modal'></button>
                                                                </div>
                                                                <div className='modal-body'>
                                                                    <p>Thanks <span className='text-decoration-underline fw-bold'>{activeUser.name} </span>
                                                                        for accesing our website but this is only a project. Checkout these food ordering websites for real food ordering.
                                                                    </p>
                                                                    <div className='container mt-1'>
                                                                        <div className='row justify-content-around'>
                                                                            <div className='col-2'>
                                                                                <a href="https://www.zomato.com" target="_blank"><img className='img-fluid' src={require('../Assets/zomato.jpg')} alt='zomato-img' /></a>
                                                                            </div>
                                                                            <div className='col-2'>
                                                                                <a href="https://www.swiggy.com" target="_blank"><img className='img-fluid' src={require('../Assets/swiggy.png')} alt='swiggy-img' /></a>
                                                                            </div>
                                                                            <div className='col-2'>
                                                                                <a href="https://www.ubereats.com" target="_blank"><img className='img-fluid' src={require('../Assets/Uber.png')} alt='uber-img' /></a>
                                                                            </div>
                                                                            <div className='col-2'>
                                                                                <a href="https://www.dominos.com" target="_blank"><img className='img-fluid' src={require('../Assets/dominos.png')} alt='foodPanda-img' /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className='row mx-0'>
                                                        <div className='col-10 px-0'>
                                                            <h4>You've not given your delivery address</h4>
                                                            <p className='fw-bold'>
                                                                Add your <Link onClick={()=>linkClick('account1')} to='/account'>additional info</Link> to complete your order.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        ) : (
                                            <>
                                                <div className='row mx-0'>
                                                    <div className='col-10 px-0'>
                                                        <h4>You're not logged in</h4>
                                                        <p className='fw-bold'>
                                                            Please <Link className='text-decoration-underline' to='/signup'>log in</Link> to your account and don't forget to add your additional info
                                                            so that we can deliver your faviourite food to your home.
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='container mb-5' id='orderOnlineSection'>
                        <div className='row justify-content-center gap-3'>
                            <div className='col-md-4 col-6'>
                                <img src={pic} className='img-fluid' alt='logo' />
                            </div>
                            <div className='col-10 text-center'>
                                <h4>You don't have any Orders right now</h4>
                            </div>
                            <div className='col-10'>
                                <div className='row px-0 align-items-center justify-content-center'>
                                    <div className='col-md-8 col-9'>
                                        <p className='mb-0'>Order some declicious food here, Checkout our menu</p>
                                    </div>
                                    <div className='col-md-2 col-3 text-center'>
                                        <Link onClick={()=>linkClick("menu1")} to='/menu'>View Menu</Link>
                                    </div>
                                </div>
                                <div className='row px-0 mt-2 align-items-center justify-content-center'>
                                    <div className='col-md-8 col-9'>
                                        <p className='mb-0'>Know more about our food and business</p>
                                    </div>
                                    <div className='col-md-2 col-3 text-center'>
                                        <Link onClick={()=>linkClick("about1")} to='/about'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default memo(Orderonline);