import { memo, useState,useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import google from '../Assets/google-icon.svg'
import Facebook from '../Assets/facebook-icon.svg'
import { useDataProvider } from './DataProvide';
function Log() {
    const { usersList,myFun, linkClick } = useDataProvider();
    const [valid, setValid] = useState()
    const navigate = useNavigate();
    const authenticate = useCallback(
        (usersList, data) => {
            let { email, password } = data;
            for (var user of usersList) {
                if (email === user.email && password === user.password) {
                    myFun("login",user);
                    setValid(true);
                    return;
                }
            }
            setValid(false);
        },[]
    );
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values,onsubmitprops) => {
        authenticate(usersList, values);
        onsubmitprops.resetForm();
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("This field is required"),
        password: Yup.string().required("This field is required")
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <>
            {valid !== undefined ? (
                valid ? (()=>{
                    navigate('/account')
                    linkClick('account1')
                })(): (
                    <div className="toast show">
                        <div className="toast-header">
                            <strong className="fs-5 text-danger me-auto">Error</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" onClick={()=> setValid(undefined)}></button>
                        </div>
                        <div className="toast-body">
                            <span className='fs-6'>You entered wrong user credentials.</span>
                        </div>
                    </div>
                )
            ) : null}
            <div className='container my-5' id='login-page'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-sm-7 col-9 shadow rounded-2 py-2 px-3 text-center'>
                        <span className='fs-4 fw-bold ' >Login </span>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className=' fw-normal text-muted fs-sm'>Dont have an account?</span>
                            <Link to='/signup' className='fs' style={{ color: "blue" }}>Signup</Link>
                        </div>
                        <span className='fw-bold text-muted fs-sm'>OR</span>
                        <div className='d-grid mx-3 mt-2 mb-3 gap-3 '>
                            <button className=' btn-block btn-light btn shadow-sm'>
                                <img src={google} alt='google-icon' className='img-fluid me-3' width="25px" />
                                <span className=' text-muted fw-bold fs-sm'>Signup with Google</span>
                            </button>
                            <button className=' btn-block btn-light btn shadow-sm'>
                                <img src={Facebook} alt='facebook-icon' className='img-fluid me-3' width="25px" />
                                <span className=' text-muted fw-bold fs-sm'>Signup with Facebook</span>
                            </button>
                        </div>
                        <span className='mx-3 text-muted fw-bold fs-sm'>Enter your login details</span>
                        <form className='d-flex flex-column m-3 gap-3 text-start' onSubmit={formik.handleSubmit}>
                            <div>
                                <div className='form-floating'>
                                    <input type='email' name='email' {...formik.getFieldProps('email')} placeholder='Enter Email' id='email' className='bg-light form-control' />
                                    <label className='form-lable text-muted fw-bold fs-sm' htmlFor='email'>Enter Email</label>
                                </div>
                                {formik.touched.email && formik.errors.email ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.email}</span> : null}
                            </div>

                            <div>
                                <div className='form-floating'>
                                    <input type='password' name='password' {...formik.getFieldProps('password')} placeholder='pwd' id='password' className='bg-light form-control' />
                                    <label className='form-lable text-muted fw-bold fs-sm' htmlFor='password'>Password</label>
                                </div>
                                {formik.touched.password && formik.errors.password ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.password}</span> : null}
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='form-check'>
                                    <input type='checkbox' className='form-check-input' id='remember' />
                                    <label htmlFor='remember' className='form-check-label fs-sm text-muted fw-bold user-select-none'>Rememeber me</label>
                                </div>
                                <a href='#' className=' text-primary fs-sm'>Forgot password ?</a>
                            </div>
                            <button disabled={Object.keys(formik.errors).length > 0 || Object.keys(formik.touched).length === 0} type='submit' className='btn btn-primary fw-bold fs-sm'>Signin</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default memo(Log);