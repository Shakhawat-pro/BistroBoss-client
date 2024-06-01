import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/bg.png'
import googleImg from '../../assets/login/google.png'
import facebookImg from '../../assets/login/facebook.png'
import gitImg from '../../assets/login/github.png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoURL
                }).then(result => {
                    console.log(result);
                    Swal.fire({
                        title: "Sign Up Successful!",
                        text: "Your account has been created successfully .",
                        icon: "success"
                    }).then(() => {
                        // navigate('/')
                        {
                            location.state? navigate(location.state) : navigate('/')
                        }
                    })
                })
            }
            )
    }




    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value
    //     const photoURL = form.photoURL.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     const info = { name, email, password }
    //     console.log(info);
    //     createUser(email, password)
    //         .then(result => {
    //             updateProfile(result.user, {
    //                 displayName: name,
    //                 photoURL: photoURL
    //             }).then(result => {
    //                 console.log(result);
    //                 Swal.fire({
    //                     title: "Sign Up Successful!",
    //                     text: "Your account has been created successfully .",
    //                     icon: "success"
    //                 }).then(() => {
    //                     navigate('/')
    //                     {
    //                         // location.state? navigate(location.state) : navigate('/')
    //                     }
    //                 })
    //             })
    //         }

    //         )
    // }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <Helmet>
                <title>Bistro | Register</title>
            </Helmet>
            <div className="hero-content justify-between py-16 sm:px-20 md:w-11/12 flex flex-col lg:flex-row   shadow-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card lg:w-1/2 w-full">
                    <h1 className='text-center text-4xl font-bold'>Register</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">PhotoUrl</span>
                            </label>
                            <input type="url" name='photoURL' {...register("photoURL", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#D9B682] text-white font-bold text-lg" />
                        </div>
                    </form>
                    <Link to={'/login'} className='text-center text-[#D9B682]'>Already Register? <span className='font-bold text-[#D1A054]'>Go to Login</span></Link>
                    <p className='text-center font-semibold'>Or sign up with</p>
                    <div className='flex justify-center gap-5 mt-4'>
                        <button className='btn btn-circle border-2 border-black p-2'>
                            <img src={facebookImg} alt="" />
                        </button>
                        <button className='btn btn-circle border-2 border-black p-2'>
                            <img src={googleImg} alt="" />
                        </button>
                        <button className='btn btn-circle border-2 border-black p-2'>
                            <img src={gitImg} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;