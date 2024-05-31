import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/bg.png'
import googleImg from '../../assets/login/google.png'
import facebookImg from '../../assets/login/facebook.png'
import gitImg from '../../assets/login/github.png'

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const info = {name, email, password}
        console.log(info);
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content justify-between py-16 px-20 w-11/12 flex lg:flex flex-row-reverse  shadow-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card w-1/2">
                    <h1 className='text-center text-4xl font-bold'>Register</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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