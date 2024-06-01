import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import googleImg from '../../assets/login/google.png'
import facebookImg from '../../assets/login/facebook.png'
import gitImg from '../../assets/login/github.png'
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {  signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                const userInfo ={
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged In.",
                    icon: "success",
                    timer: 2000
                })
                axiosPublic.post('/users', userInfo)
                .then((res) => {
                    console.log(res.data);
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
    );
};

export default SocialLogin;