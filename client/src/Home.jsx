import './App.css';
import React from 'react';
import logo from './images/LegalAssist-White.png';
import profile from './images/profile-icon.png';
import notification from './images/notification-icon.png';
import hero from './images/hero-img.png';
import feature1 from './images/feature-1.png';
import feature2 from './images/feature-2.png';
import feature3 from './images/feature-3.png';
import profile1 from './images/profile-pict1.png';

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
      {/* Layanan Kami */}
      <div>
        <div>
          <h1>Layanan Kami</h1>
        </div>
        <div className='flex justify-between items-start'>
          <div className='w-[288px]'>
            <img src={feature1} alt='' />
            <h1 className='text-[32px]'>Info Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
          <div className='w-[288px]'>
            <img src={feature2} alt='' />
            <h1 className='text-[32px]'>Tips Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
          <div className='w-[288px]'>
            <img src={feature3} alt='' />
            <h1 className='text-[32px]'>Konsultasi Hukum</h1>
            <p className='text-[16px]'>
              Dalam dunia yang kompleks ini, pengetahuan adalah kekuatan. Kami
              memahami bahwa setiap keputusan hukum Anda membutuhkan pemahaman
              yang komprehensif dan terperinci. Itulah sebabnya kami hadir,
              sebagai sumber informasi hukum yang tepercaya dan terkini.
            </p>
          </div>
        </div>
      </div>
      {/* Bantuan Hukum Terpecaya */}
      <div>
        <div>
          <h1>Bantuan Hukum Terpecaya</h1>
        </div>
        <div>
          <div className='w-[320px]'>
            <div>
              <img src={profile1} alt='' />
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <h1 className='text-xl'>Anne Maria</h1>
                <p>Law Consultant</p>
                <p>2+ Years Experience</p>
              </div>
              <div>
                <h1>Pilih</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
