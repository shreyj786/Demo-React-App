import { useFormik } from 'formik'
import * as Yup from 'yup'
import { memo } from 'react'
import { useDataProvider } from './DataProvide';

function AdditionalInfo() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const {myFun} = useDataProvider();
    const initialValues = {
        address: '',
        city: '',
        landmark: '',
        mobile: ''
    }

    const onSubmit = values => {
        myFun("activeUser", values);
    }

    const validationSchema = Yup.object({
        address: Yup.string().required("This field is required"),
        city: Yup.string().required("This field is required"),
        landmark: Yup.string().required("This field is required"),
        mobile: Yup.string().matches(phoneRegExp, "Invaid mobile number").required("This field is required")
    })

    const Formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <>
            <div className='row align-items-center mt-4 details shadow p-4 rounded-2'>
                <div className='col-12 col-sm-6'><h4>You have not added additional info</h4></div>
                <div className='col-12 col-sm-6 mt-sm-0 mt-2'><button type='button' className='main-btn float-sm-end' data-bs-toggle='collapse' data-bs-target='#additionalInfo'>Add Info</button></div>
                <div className='col-12 mt-4 collapse' id="additionalInfo">
                    <form onSubmit={Formik.handleSubmit} className='row justify-content-center gap-3'>
                        <div className='col-sm-5 col-10 p-0'>
                            <div className='form-floating'>
                                <input type='text'
                                    placeholder='address' name='address' value={Formik.values.address}
                                    {...Formik.getFieldProps('address')} id='address' className='form-control' />
                                <label htmlFor='address'
                                    className='form-lable fw-bold text-muted fs-sm'>Enter Address</label>
                                {Formik.touched.address && Formik.errors.address ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{Formik.errors.address}</span> : null}
                            </div>
                        </div>
                        <div className='col-sm-5 col-10  p-0'>
                            <div className='form-floating'>
                                <input type='text'
                                    placeholder='city' name='city' value={Formik.values.city}
                                    {...Formik.getFieldProps('city')} id='city' className='form-control' />
                                <label htmlFor='city'
                                    className='form-lable fw-bold text-muted fs-sm'>City name</label>
                                {Formik.touched.city && Formik.errors.city ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{Formik.errors.city}</span> : null}
                            </div>
                        </div>
                        <div className='col-sm-5 col-10 p-0'>
                            <div className='form-floating'>
                                <input type='text'
                                    placeholder='landmark' name='landmark' value={Formik.values.landmark}
                                    {...Formik.getFieldProps('landmark')} id='landmark' className='form-control' />
                                <label htmlFor='landmark'
                                    className='form-lable fw-bold text-muted fs-sm'>Landmark</label>
                                {Formik.touched.landmark && Formik.errors.landmark ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{Formik.errors.landmark}</span> : null}
                            </div>
                        </div>
                        <div className='col-sm-5 col-10 p-0'>
                            <div className='form-floating'>
                                <input type='tel'
                                    placeholder='mobile' name='mobile' value={Formik.values.mobile}
                                    {...Formik.getFieldProps('mobile')} id='mobile' className='form-control' />
                                <label htmlFor='mobile'
                                    className='form-lable fw-bold text-muted fs-sm'>Mobile</label>
                                {Formik.touched.mobile && Formik.errors.mobile ? <span className='text-danger' style={{ fontSize: "0.8rem" }}>{Formik.errors.mobile}</span> : null}
                            </div>
                        </div>
                        <div className=" col-sm-5 col-10 p-0">
                            <button disabled={Object.keys(Formik.errors).length > 0 || Object.keys(Formik.touched).length === 0} type='submit' className='main-btn'>Submit</button>
                        </div>
                        <div className='col-sm-5'></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default memo(AdditionalInfo)