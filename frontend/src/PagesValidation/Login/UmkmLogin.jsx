import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { LoginUser, reset } from '../../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import ReactLogo from '../../assets/logo.svg';
import IconPerson from '../../assets/icons/user.svg';
import iconLock from '../../assets/icons/lock.svg';
import iconUnhide from '../../assets/icons/visibility.svg';
import IconGoogle from '../../assets/icons/google.svg';

const UmkmLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector((state)=>state.auth);
    
    useEffect(()=>{
        if (user || isSuccess) {
            navigate('/');
        }
        dispatch(reset());
    },[user,isSuccess,dispatch,navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password}));
    };
    return (
    <>
        <div className="container mx-auto justify-center">
            <div className="flex flex-col items-center">
                <div className="mb-4 mt-20">
                    <Link to="/">
                     <img src={ReactLogo} alt="React Logo" />
                    </Link>
                </div>
                <div className="mb-2">
                <h1 className="font-title text-center font-semibold text-2xl">Masuk Sebagai Pemilik UMKM</h1>
                </div>

                <form onSubmit={Auth}>
                    { isError && <p className='text-lg'>{message}</p>}
                    <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                        <div className="relative mb-4 ml-5">
                            <img src={IconPerson} alt="" className="absolute ml-3 mt-2" />
                            <input type="text" id="username" placeholder="Masukkan username" className="pr-3 pl-12 py-2 w-72 text-black rounded-xl border border-Neutral_90" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="relative mb-4 ml-5">
                            <img src={iconLock} alt="" className="absolute ml-3 mt-2" />
                            <img src={iconUnhide} alt="" className="absolute ml-64 mt-2" />
                            <input type="password" id="password" placeholder="Masukkan kata sandi anda" className="pr-3 pl-12 py-2 w-72 text-black rounded-xl border border-black" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                        </div>
                        <div className="relative mb-4 ml-5">
                            <img src={IconGoogle} alt="" className="absolute ml-3 mt-2" />
                            <button className="pr-3 pl-12 py-2 w-72 text-black rounded-xl border border-black">Masuk Dengan Google</button> 
                        </div>
                        <div className="relative ml-5">
                            <button type='submit' className="py-2 w-72 text-center text-Neutral_10 rounded-xl bg-primary_70">{isLoading ? 'Loading...' : 'Masuk'}</button>
                        </div>
                        <div>
                            <p className="text-center">Belum punya akun? <Link to="/daftar/umkm"><span className="text-indigo-700">Daftar Sekarang</span></Link></p>
                            <Link to=""><p className="text-center text-indigo-700">Lupa Password?</p></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};

export default UmkmLogin;