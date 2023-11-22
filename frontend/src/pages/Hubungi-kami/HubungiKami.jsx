import React from 'react';
import '../Hubungi-kami/hubungikami.css';
import AnimateContact from '../../assets/animasi/animasi-contact.svg';
import iconPone from '../../assets/icons/Phone.svg';

function HubungiKami() {
  return (
    <>
      <section className="pt-[6rem]" id="hubungi-kami">
        <div className="background-hubungikami">
          <h1 className="text-center py-24 font-title text-white font-semibold">Hubungi Kami</h1>
        </div>
        <div className="flex">
          <form action="">
            <div className="w-cols p-6 my-8 ml-20 flex flex-col rounded-md mb-20">
              <div>
                <h1 className="font-bold text-2xl pb-6">Kirim Pesan Anda</h1>
                <label for="username" className="block text-base mb-2">
                  Nama :
                </label>
                <input type="text" id="username" className="h-10 pl-4 border w-rows border-black rounded-md" placeholder="Masukkan Nama Anda" />
              </div>
              <div className="mt-3">
                <label for="handphone" className="block text-base mb-2">
                  Email :
                </label>
                <input type="text" id="handphone" className="h-10 pl-4 border w-rows border-black rounded-md" placeholder="Masukkan Email Anda" />
              </div>
              <div className="mt-3">
                <label for="email" className="block text-base mb-2">
                  Pesan :
                </label>
                <textarea type="text" id="email" className="h-40 pl-4 py-2 border w-rows border-black rounded-md" placeholder="Masukkan Pesan Anda" />
              </div>
              <div className="mt-3">
                <button className="w-28  py-2 text-white rounded-xl bg-primary_70">Kirim</button>
              </div>
            </div>
          </form>
          <div className="pl-96">
            <div className="my-16 pl-16">
              <div className="pl-24">
                <h1 className="font-bold text-2xl pb-6">Info Kontak</h1>
                <div className="flex my-3 ">
                  <img src={iconPone} />
                  <h1 className="pl-3">+62851-5652-7939</h1>
                </div>
                <div className="flex">
                  <div>
                    <i class="fa-solid fa-envelope text-indigo-700"></i>
                  </div>
                  <h1 className="pl-3 text-indigo-700">Lapaksentra@gmail.com</h1>
                </div>
              </div>
              <div className="my-16">
                <img src={AnimateContact} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HubungiKami;
