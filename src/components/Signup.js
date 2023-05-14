import { memo, useState, useCallback } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import google from '../Assets/google-icon.svg'
import Facebook from '../Assets/facebook-icon.svg'
import { useDataProvider } from './DataProvide';
function Signup() {
    const [userExist, setUserExist] = useState(false);
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const authenticate = useCallback(
        (usersList, data) => {
            let { email, name } = data;
            for (var user of usersList) {
                if (email === user.email && name === user.name) {
                    setUserExist(true);
                    return true;
                }
            }
            return false;
        },[]
    );
    const onSubmit = (values,onsubmitprops)=>{
        if(authenticate(usersList,values)) return;
        const usr = {
            ...values,
            img_src : '',
            id : usersList.length,
            hasAdditionalInfo : false
        }
        myFun('addUser',usr);
        onsubmitprops.resetForm();
        navigate('/login');
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        email: Yup.string().email("Invalid email format").required("This field is required"),
        password: Yup.string().min("4").required("This field is required"),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password is not matching').required("This field is required")
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    const {myFun, usersList} = useDataProvider();
    return (
        <div className='container my-5' id='login-page'>
            {
            userExist ? (
                <div className="toast show">
                    <div className="toast-header">
                        <strong className="fs-5 text-danger me-auto">Error</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" onClick={()=> setUserExist(false)}></button>
                    </div>
                    <div className="toast-body">
                        <span className='fs-6'>User already exists.</span>
                    </div>
                </div>
            ): null
        }
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-sm-7 col-9 shadow rounded-2 py-2 px-3 text-center'>
                    <span className='fs-4 fw-bold ' >Signup </span>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <span className=' fw-normal text-muted fs-sm'>Already have an account?</span>
                        <Link to='/login' className='fs' style={{ color: "blue" }}>Signin</Link>
                    </div>
                    <span className='mx-3 text-muted fw-bold fs-sm'>Enter your details</span>
                    <form className='d-flex flex-column m-3 gap-3 text-start' onSubmit={formik.handleSubmit}>
                        <div>
                            <div className='form-floating'>
                                <input type='text' name='name' {...formik.getFieldProps('name')} placeholder='name' id='name' className='bg-light form-control' />
                                <label className='form-lable text-muted fw-bold fs-sm' htmlFor='name'>Name</label>
                            </div>
                            {formik.touched.name && formik.errors.name ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.name}</span> : null}
                        </div>
                        <div>
                            <div className='form-floating'>
                                <input type='email' name='name' {...formik.getFieldProps('email')} placeholder='email' id='email' className='bg-light form-control' />
                                <label className='form-lable text-muted fw-bold fs-sm' htmlFor='email'>Email</label>
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
                        <div>
                            <div className='form-floating'>
                                <input type='password' name='confirm_password' {...formik.getFieldProps('confirm_password')} placeholder='confirm-pwd' id='confirm_password' className='bg-light form-control' />
                                <label className='form-lable text-muted fw-bold fs-sm' htmlFor='confirm_password'>Confirm Password</label>
                            </div>
                            {formik.touched.confirm_password && formik.errors.confirm_password ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{formik.errors.confirm_password}</span> : null}
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='remember' />
                            <label htmlFor='remember' className='form-check-label fs-sm text-muted fw-bold user-select-none'>I accept <a href='#' className=' text-primary fs-sm text-lowercase text-decoration-underline'> terms and condition </a></label>
                        </div>
                        <button type='submit' disabled={Object.keys(formik.errors).length > 0 || Object.keys(formik.touched).length === 0} className='btn btn-primary fw-bold fs-sm'>Continue</button>
                    </form>
                    <span className='fw-bold text-muted fs-sm'>OR</span>
                    <div className='d-grid mx-3 mt-2 mb-3 gap-3 '>
                        <button className=' btn-block btn-primary btn shadow-sm'>
                            <img src={google} alt='google-icon' className='img-fluid me-3' width="25px" />
                            <span className=' fw-bold fs-sm'>Signup with Google</span>
                        </button>
                        <button className=' btn-block btn-primary btn shadow-sm'>
                            <img src={Facebook} alt='facebook-icon' className='img-fluid me-3' width="25px" />
                            <span className='  fw-bold fs-sm'>Signup with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Signup)