import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimateTenant from '../../assets/gambar-daftar/umkm.svg';
import iconUnhide from '../../assets/icons/visibility.svg';
import IconGoogle from '../../assets/icons/google.svg';
import iconFB from '../../assets/icons/facebook.svg';
import axios from 'axios';

function UmkmRegister() {
   const [values, setValues] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confPassword: '',
      role: 'ownermerchant',
   });

   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post('http://localhost:8000/api/v1/register', values)
         .then(
            (res) => {
               console.log(res);
               navigate('/masuk/umkm');
            },

            (req) => {
               console.log(req);
            }
         )
         .catch((err) => console.log(err));
   };
   return (
      <>
         <div className="container mx-auto">
            <div className="flex">
               <div className="mt-36 pl-36">
                  <img src={AnimateTenant} alt="" />
               </div>

               <form onSubmit={handleSubmit}>
               {/* <input type="text" id="role" name="role" className="h-10 pl-4 border w-full border-black rounded-md" placeholder="Masukkan Nama Lengkap Anda" value={'ownerkost'} hidden /> */}
                  <div className="w-96 p-6 ml-52 mt-16 shadow-lg flex flex-col bg-white rounded-md">
                     <div>
                        <h1 className="font-bold text-2xl">Daftar Akun Penyewa UMKM</h1>
                        <label for="username" className="block text-base mb-2">
                           Nama Lengkap
                        </label>
                        <input type="text" id="username" name="name" className="h-10 pl-4 border w-full border-black rounded-md" placeholder="Masukkan Nama Lengkap Anda" onChange={(e) => setValues({ ...values, name: e.target.value })} />
                     </div>
                     <div className="mt-3">
                        <label for="handphone" className="block text-base mb-2">
                           Nomor Handphone
                        </label>
                        <input
                           type="text"
                           id="handphone"
                           name="phoneNumber"
                           className="h-10 pl-4 border w-full border-black rounded-md"
                           placeholder="Masukkan Nomor Handphone Anda"
                           onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
                        />
                     </div>
                     <div className="mt-3">
                        <label for="email" className="block text-base mb-2">
                           Email
                        </label>
                        <input type="text" id="email" name="email" className="h-10 pl-4 border w-full border-black rounded-md" placeholder="Masukkan Email Anda" onChange={(e) => setValues({ ...values, email: e.target.value })} />
                     </div>
                     <div className="mt-3">
                        <img src={iconUnhide} alt="" className="absolute ml-72 mt-10" />
                        <label for="password" className="block text-base mb-2">
                           Password
                        </label>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           className="h-10 pl-4 border w-full border-black rounded-md"
                           placeholder="Masukkan Password Anda"
                           onChange={(e) => setValues({ ...values, password: e.target.value })}
                        />
                     </div>
                     <div className="mt-3">
                        <img src={iconUnhide} alt="" className="absolute ml-72 mt-10" />
                        <label for="confirm" className="block text-base mb-2">
                           Konfirmasi Password
                        </label>
                        <input
                           type="confirm"
                           id="confirm"
                           name="confPassword"
                           className="h-10 pl-4 border w-full border-black rounded-md"
                           placeholder="Konfirmasi Password Anda"
                           onChange={(e) => setValues({ ...values, confPassword: e.target.value })}
                        />
                     </div>
                     <div className="mt-3">
                           <button className="h-10 pl-4 border w-full bg-primary_70 text-white border-black rounded-md">Daftar</button>
                     </div>
                  </div>
                  <div className="w-96 p-6 ml-48 ">
                     <div>
                        <h1>Masuk Melalui: </h1>
                     </div>
                     <div className="mt-3">
                        <img src={IconGoogle} alt="" className="absolute ml-4 mt-2" />
                        <button className="w-full pr-3 pl-16 py-2 text-black rounded-xl border border-black">Masuk Dengan Google</button>
                     </div>
                     <div className="mt-3">
                        <img src={iconFB} alt="" className="absolute ml-4 mt-2" />
                        <button className="w-full pr-3 pl-14 py-2 text-black rounded-xl border border-black">Masuk Dengan Facebook</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default UmkmRegister;
