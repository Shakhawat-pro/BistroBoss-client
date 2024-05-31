import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/bg.png'
import googleImg from '../../assets/login/google.png'
import facebookImg from '../../assets/login/facebook.png'
import gitImg from '../../assets/login/github.png'

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';

const Login = () => {

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
        }
        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content justify-between py-16 sm:px-20 md:w-11/12 flex flex-col lg:flex-row   shadow-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name='captcha' placeholder="password" className="input input-bordered" required />
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

export default Login;