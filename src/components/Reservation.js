import { memo, useState } from 'react';
import { useDataProvider } from './DataProvide';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import yellow_brand from '../Assets/yellow_brand.png'


function Reservation() {
    const { activeUser } = useDataProvider();
    const [modal, setModal] = useState({});
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const initialValues = {
        name: activeUser ? activeUser.name : '',
        mobile: activeUser && activeUser.hasAdditionalInfo ? activeUser.mobile : '',
        date: '',
        time: '',
        occasion: ''
    }
    const onSubmit = (values, onsubmitprops) => {
        setModal(formik.values);
        console.log(formik.values);
        onsubmitprops.resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        mobile: Yup.string().matches(phoneRegExp, "Invalid mobile number").required("This field is required"),
        date: Yup.string().required("This field is required"),
        time: Yup.string().required("This field is required"),
        occasion: Yup.string().required("This field is required"),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <>
            <div id='input-banner-container'>
                <div className='container py-4'>
                    <div className='row mx-0 justify-content-center rounded-4' id='input-banner'>
                        <div className='col-md-5 col-10 py-4 d-flex flex-column gap-2' id='first'>
                            <div className='py-3 border-bottom'>
                                <img src={yellow_brand} alt="logo" id='logo' />
                            </div>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-6'>
                                    <img src={require('../Assets/pizzalineart.jpg')} className='img-fluid rounded' alt='pic' />
                                </div>
                                <div className='col-6'>
                                    <span className='reservation-heading'>Hello!</span>
                                    <p>Welcome to the best neighbourhood Mediterranean restaurant</p>
                                </div>
                            </div>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-6'>
                                    <span className='reservation-heading'>Book Now!</span>
                                    <p>Grab your table to enjoy Turkish,Italian and Greek delicacies with
                                        pleasing ambeince.
                                    </p>
                                </div>
                                <div className='col-6'>
                                    <img src={require('../Assets/dinningtable.jpg')} className='img-fluid rounded' alt='pic' />
                                </div>
                            </div>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-6'>
                                    <img src={require('../Assets/winelineart.jpg')} className='img-fluid rounded' alt='pic' />
                                </div>
                                <div className='col-6'>
                                    <span className='reservation-heading'>Event Oriented!</span>
                                    <p>Select your party event and let the little lemon handle everything for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-10 py-4' id='second'>
                            <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-2'>
                                <div>
                                    <label htmlFor='name' className='fs-sm form-label text-muted fw-bold'>Name</label>
                                    <input type='text' name='name' id='name'
                                        {...formik.getFieldProps('name')} className='form-control' />
                                    {formik.touched.name && formik.errors.name ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.name}</span> : null}
                                </div>
                                <div>
                                    <label htmlFor='mobile' className='fs-sm form-label text-muted fw-bold'>Mobile No.</label>
                                    <input type='tel' name='mobile' id='mobile'
                                        {...formik.getFieldProps('mobile')} className='form-control' />
                                    {formik.touched.mobile && formik.errors.mobile ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.mobile}</span> : null}

                                </div>
                                <div>
                                    <label htmlFor='date' className='fs-sm form-label text-muted fw-bold'>Select Date</label>
                                    <input type='date' name='date' id='date' min={new Date().toJSON().split('T')[0]}
                                        {...formik.getFieldProps('date')} className='form-control' />
                                    {formik.touched.date && formik.errors.date ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.date}</span> : null}

                                </div>
                                <div>
                                    <label htmlFor='time' className='fs-sm form-label text-muted fw-bold'>Select Time</label>
                                    <input type='time' name='time' id='time'
                                        {...formik.getFieldProps('time')} className='form-control' />
                                    {formik.touched.time && formik.errors.time ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.time}</span> : null}

                                </div>
                                <div>
                                    <label htmlFor='occasion' className='fs-sm form-label text-muted fw-bold'>Select Occasion</label>
                                    <select id='occasion' name='occasion' {...formik.getFieldProps('occasion')} className='form-select'>
                                        <option></option>
                                        <option>Anniversary</option>
                                        <option>Birthday</option>
                                        <option>Promotion</option>
                                        <option>Farewell Party</option>
                                        <option>Freshers Party</option>
                                    </select>
                                    {formik.touched.occasion && formik.errors.occasion ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.occasion}</span> : null}

                                </div>
                                <span className='fs-sm text-muted fw-bold'>Select table size for number of seats</span>
                                <div className='d-flex gap-sm-5 gap-3'>
                                    <div className='form-check'>
                                        <input type='radio' checked name='dinners' id='2' className='form-check-input' />
                                        <label htmlFor='2' className='form-check-label fs-sm text-muted fw-bold'>2</label>
                                    </div>
                                    <div className='form-check'>
                                        <input type='radio' name='dinners' id='4' className='form-check-input' />
                                        <label htmlFor='4' className='form-check-label fs-sm text-muted fw-bold'>4</label>
                                    </div>
                                    <div className='form-check'>
                                        <input type='radio' name='dinners' id='6' className='form-check-input' />
                                        <label htmlFor='6' className='form-check-label fs-sm text-muted fw-bold'>6</label>
                                    </div>
                                    <div className='form-check'>
                                        <input type='radio' name='dinners' id='8' className='form-check-input' />
                                        <label htmlFor='8' className='form-check-label fs-sm text-muted fw-bold'>8</label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='requests' className='form-label fs-sm text-muted fw-bold'>
                                        Additional details for your reservation:
                                    </label>
                                    <textarea className='form-control' id='requests' name='requests' rows='3' />
                                </div>
                                <button type='submit' className='main-btn mt-2' data-bs-toggle='modal'
                                    disabled={Object.keys(formik.errors).length > 0 || Object.keys(formik.touched).length === 0} data-bs-target='#reservationConfirm'>
                                    Book Now<i className=" ms-2 fa-solid fa-bookmark"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='modal' id='reservationConfirm'>
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <p className='fw-bold'>Confirmation Message</p>
                                <button type='button' className='btn btn-close' data-bs-dismiss='modal'></button>
                            </div>
                            <div className='modal-body'>
                                <p>Dear <b>{modal.name}</b> your table at Little Lemon
                                    has been booked for <b>{modal.date}</b> at <b>{modal.time}</b>. we
                                    are waiting eagerly to celebrate your <b>{modal.occasion}</b> event together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Reservation);