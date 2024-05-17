import './App.css';
import React from 'react';
import logo from './images/LegalAssist-White.png';
import profile from './images/profile-icon.png';
import notification from './images/notification-icon.png';
import hero from './images/hero-img.png';

function home() {
  return (
    <div className='container mt-4'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div className='flex gap-6'>
          <p>Info Hukum</p>
          <p>Tips Hukum</p>
          <p>Konsultasi Hukum</p>
        </div>
        <div className='flex gap-4'>
          <img src={notification} alt='logo' />
          <img src={profile} alt='logo' />
        </div>
      </div>
      <div className='flex my-32 justify-between items-center'>
        <div className='w-[572px]'>
          <h1 className='text-5xl font-bold mb-4'>
            Jangan Biarkan Tantangan Hukum Mengintimidasi Anda.
          </h1>
          <p className='text-lg'>
            Kami tidak hanya menyediakan informasi hukum, tetapi juga pandangan
            yang diarahkan untuk melindungi kepentingan Anda. Dari konsultasi
            hingga representasi, kami bersama Anda setiap langkah dalam
            perjalanan hukum Anda.
          </p>
        </div>
        <div className=''>
          <img src={hero} alt='' />
        </div>
      </div>
    </div>
  );
}

export default home;
