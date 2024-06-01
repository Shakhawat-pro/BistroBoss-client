import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/bg.png'
import googleImg from '../../assets/login/google.png'
import facebookImg from '../../assets/login/facebook.png'
import gitImg from '../../assets/login/github.png'
import Swal from 'sweetalert2'

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);


    const { signInUser, signInWithGoogle } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value

        if (validateCaptcha(captcha) == true) {
            const info = { name: email, password }
            console.log(info);
            signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged In.",
                    icon: "success"
                }).then(() => {
                    // navigate('/')
                    {
                        location.state? navigate(location.state) : navigate('/')
                    }
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign In Failed',
                    text: 'Please try again later.',
                    footer: `<span style="color: red;">${error.message}</span>`
                });
            })

        }
        else {
            Swal.fire({
                title: "Ops!",
                text: "Captcha does not match.",
                icon: "error",
                confirmButtonText: "Try Again"
            });
        }
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged In.",
                    icon: "success"
                }).then(() => {
                    // navigate('/')
                    {
                        location.state? navigate(location.state) : navigate('/')
                    }
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: 'Please try again later.',
                    footer: `<span style="color: red;">${error.message}</span>`
                });
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero-content justify-between md:h-[90%] sm:px-20 md:w-11/12 flex flex-col lg:flex-row   shadow-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card lg:w-1/2 w-full">
                    <h1 className='text-center text-4xl font-bold'>Login</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name='captcha' placeholder="Enter Captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#D9B682] text-white font-bold text-lg" />
                        </div>
                    </form>
                    <Link to={'/register'} className='text-center text-[#D9B682]'>New here? <span className='font-bold text-[#D1A054]'>Create a New Account</span></Link>
                    <p className='text-center font-semibold'>Or sign in with</p>
                    <div className='flex justify-center gap-5 mt-4'>
                        <button className='btn btn-circle border-2 border-black p-2'>
                            <img src={facebookImg} alt="" />
                        </button>
                        <button onClick={handleGoogle} className='btn btn-circle border-2 border-black p-2'>
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

export default Login;