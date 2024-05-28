import '../App.css';
import { Link } from 'react-router-dom';
import { React, Fragment, useState } from 'react';
import logo from '../images/LegalAssist-White.png';
import profile from '../images/profile-icon.png';
import { Menu, Transition } from '@headlessui/react';
import notification from '../images/notification-icon.png';
import star from '../images/star.png';
import linkIcon from '../images/link-icon.png';
import location from '../images/location.png';
import lawyer1 from '../images/lawyer1.png';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const navigation = [
  { name: 'Info Hukum', href: '/info-hukum', current: false },
  { name: 'Tips Hukum', href: '/tips-hukum', current: false },
  { name: 'Konsultasi Hukum', href: '/konsultasi-hukum', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const dataLawyer = [
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
  {
    img: lawyer1,
    lawyerName: 'Aditya Pratama',
    lawyerCategory: 'Hukum Bisnis',
    lawyerRating: '4.7',
    lawyerDesc:
      'Saya memiliki pengalaman luas dalam menyusun, meninjau, dan menegosiasikan kontrak bisnis.',
    lawyerLink: 'apratama.com',
    lawyerLocation: 'Jakarta',
    lawyerPrice: 20000,
  },
];

function KonsultasiHukum() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='container mt-4'>
      {/* Navbar */}
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='flex gap-6'>
          {navigation.map((item) => (
            <Link key={item} to={item.href} className=''>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
          {isLoggedIn ? (
            <div>
              <img src={notification} alt='logo' />
              {/* Profile Dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className=' flex max-w-xs items-center'>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={profile}
                      alt=''
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className='flex gap-2 items-center'>
              <Link
                to='/register'
                className='bg-black text-white  rounded py-1 px-3 '
              >
                Masuk
              </Link>
              <Link
                to='/register'
                className='bg-[#FFB800] text-white py-1 px-3 rounded'
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Bantuan Hukum Terpecaya */}
      <div className='my-[100px]'>
        <div className='flex justify-between flex-wrap'>
          {dataLawyer.map((item) => (
            <Link
              to='/register'
              key={item}
              className='w-[440px] mb-5 px-8 py-6 rounded-xl border-[#D5E0F6] border-2 flex flex-col gap-4 hover:scale-105 transition-all duration-300 hover:cursor-pointer'
            >
              <div className='flex gap-4 items-center'>
                <img src={item.img} alt='' className='w-[86px]' />
                <div>
                  <h1 className='font-semibold text-[20px]'>
                    {item.lawyerName}
                  </h1>
                  <p>Konsultan {item.lawyerCategory}</p>
                  <div className='flex items-center gap-2'>
                    <img src={star} alt='' className='' />
                    <p>{item.lawyerRating}</p>
                  </div>
                </div>
              </div>
              <p>{item.lawyerDesc}</p>
              <div>
                <div className='flex items-center gap-2'>
                  <img src={linkIcon} alt='' />
                  <p>{item.lawyerLink}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={location} alt='' />
                  <p>{item.lawyerLocation}</p>
                </div>
              </div>
              <Link
                to='/register'
                className='text-[18px] bg-[#FFB800] py-3 text-center text-white rounded-[80px]'
              >
                Rp. {item.lawyerPrice} / Sesi
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KonsultasiHukum;
