import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { VlearningService } from '../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading } from '../redux/loadingSlice';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [listCourseCatalog, setListCourseCatalog] = useState([]);
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  useEffect(() => {
    const fetchCourseCatalog = async () => {
      try {
        const result = await VlearningService.getCourseCatalog();
        setListCourseCatalog(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        dispatch(turnOffLoading());
      }
    };

    fetchCourseCatalog();

    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const renderNavLinks = () => (
    <>
      <li className='bg-white'><NavLink onClick={toggleDropdown} to="/">Trang Chủ</NavLink></li>
      <li><NavLink onClick={toggleDropdown} to="/infoPage">Về Chúng Tôi</NavLink></li>
      <li><NavLink onClick={toggleDropdown} to="/event">Sự Kiện</NavLink></li>
      <li><NavLink onClick={toggleDropdown} to="/login">Đăng Nhập</NavLink></li>
      <li><NavLink onClick={toggleDropdown} to="/signup">Đăng Ký</NavLink></li>
      <li><NavLink onClick={toggleDropdown} to="/account">Tài Khoản</NavLink></li>
      <li className='font-bold text-yellow-500 p-1' onClick={toggleDropdown}>Danh Mục</li>
      {listCourseCatalog?.map((item, index) => (
        <li key={index}><NavLink onClick={toggleDropdown} to={`/searchCourse/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink></li>
      ))}
    </>
  );

  return (
    <div className='h-full w-full'>
      {/* header mobile */}
      <header className='w-full fixed text-black top-0 z-40 bg-white block md:hidden'>
        <div className="navbar container mx-auto">
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-start">
            <div className="drawer">
              <input id="my-drawer" onChange={toggleDropdown} checked={isDropdownOpen} type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white text-black min-h-full w-4/5 p-4 rounded-none collapse ">
                  <div className='flex flex-row w-full justify-between'>
                  <h2 className='font-bold text-2xl py-2'>V_LEARNING</h2>
                  <li onClick={toggleDropdown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg></li>
                  </div>
                  {renderNavLinks()}
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-center">
            <NavLink to="/" className='textTitle uppercase tracking-widest'>V-LEARNING</NavLink>
          </div>
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-end w-auto flex flex-row items-end gap-4">
            <div className='w-fit'>
              <NavLink to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      {/* header desktop */}
      <header className={`w-full fixed top-0 left-0 right-0 z-40 hidden md:block shadow hover:bg-white hover:text-black duration-700 ease-in-out ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
        <div className="navbar container mx-auto">
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {renderNavLinks()}
                </ul>
              )}
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-center">
            <NavLink to="/" className='textTitle uppercase tracking-widest nav-item'>V-LEARNING</NavLink>
          </div>
          <div data-aos="fade-down" data-aos-delay="100" className="navbar-end w-auto flex flex-row items-end gap-4">
            <div className='w-2/3'>
              <label className="border-b flex items-center gap-2">
                <input type="text" className="grow text-base focus:outline-none bg-transparent" placeholder="Tìm kiếm..." />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
              </label>
            </div>
            <div className='w-fit'>
              <NavLink to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
