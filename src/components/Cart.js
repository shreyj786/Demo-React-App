import { memo, useState, useEffect } from 'react';
import { useDataProvider } from './DataProvide';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
function Cart() {
    const { cartItems, totalItem, myFun, linkClick } = useDataProvider();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let to = 0;
        for (var x of cartItems) {
            if (x) to += (Number(x.price) * x.qty);
        }
        setTotal(to);
    }, [cartItems])
    let dis = 0;
    const navigate = useNavigate();
    return (
        <>
            <div className="offcanvas offcanvas-start" id="basket" >
                <div className="offcanvas-header border-bottom">
                    <div className='offcanvas-title'>
                        <img src={require('../Assets/yellow_brand.png')} alt="cart-heading" />
                    </div>
                    <button className="btn-close btn-primary" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='container'>
                        {
                            totalItem > 0 ? (
                                <>
                                    <h4 className='mb-3'>Your cart has {totalItem} items</h4>
                                    <div className='row mb-4 heading rounded p-2 justify-content-center'>
                                        <div className='col-7'>
                                            <h5 className='mb-0'>Cart Items</h5>
                                        </div>
                                        <div className='col-3'>
                                            <h5 className='mb-0'>Quantity</h5>
                                        </div>
                                    </div>
                                    {cartItems.map(item => {
                                        return item && (
                                            <div className='row py-2 border-bottom'>
                                                <div className='col-8'>
                                                    <div className='row '>
                                                        <div className='col-7'>
                                                            <img src={item.path} alt="cart-item" className='img-fluid shadow-sm rounded-2' />
                                                        </div>
                                                        <div className='col-5'>
                                                            <p className='mb-2 fw-bold'>{item.name}</p>
                                                            <p className='mb-0 fw-bold cart-price'>$<span className='ms-1'>{item.price}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4 d-flex flex-column gap-3'>
                                                    <p className="align-self-end mb-0" id="cancel-btn" onClick={() => myFun("cartdelete",item)}>x</p>
                                                    <div className='d-flex justify-content-between quantity align-items-center'>
                                                        <Button className="main-btn" abled={item.qty === 1} onclick={() => myFun("cartremove", item)}>
                                                            -
                                                        </Button>
                                                        <p className='mb-0 fw-bold'>{item.qty}</p>
                                                        <Button className="main-btn" onclick={() => myFun("cartadd", item)}>
                                                            +
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <h4 className='mt-5 mb-3'>Billing Details</h4>
                                    <div className='row justify-content-center billing-details gap-1'>
                                        <div className='col-7'>
                                            <h5>Total Amount:</h5>
                                        </div>
                                        <div className='col-3'>
                                            <h5>$<span className='ms-1'>{total}.00</span></h5>
                                        </div>
                                        <div className='col-7'>
                                            <h5>5% Discount:</h5>
                                        </div>
                                        <div className='col-3'>
                                            {
                                                (() => {
                                                    dis = ((total * 5) / 100).toFixed(2);
                                                    return <h5>$<span className='ms-1'>{dis}</span></h5>

                                                })()
                                            }

                                        </div>
                                        <div className='col-7'>
                                            <h5>Net Total:</h5>
                                        </div>
                                        <div className='col-3'>
                                            {
                                                <h5 className='text-decoration-underline'>$<span className='ms-1'>{(total - dis).toFixed(2)}</span></h5>
                                            }

                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='text-center py-3'>
                                    <h5>No items added</h5>
                                    <p>Add your favourite food items here</p>
                                </div>
                            )
                        }
                        <button onClick={
                            () => {
                                myFun("orderFromCart",cartItems)
                                navigate('/orderOnline')
                                linkClick('orderonline1')
                            }
                        } className='main-btn mt-5 w-100' disabled={totalItem === 0}
                        data-bs-dismiss="offcanvas">
                            Order Now<i className=" ms-3 fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Cart);