import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='font-poppins bg-white max-w-[1370px] mx-auto overflow-clip'>
            {/* navbar */}
            <section className=' bg-gray-200 sticky top-0 z-30  bg-opacity-90 backdrop:blur-xl'>
                <Navbar></Navbar>
            </section>
            {/* dynamic section */}
            <section className='bg-gray-50'>
                <Outlet></Outlet>
            </section>
            {/* footer */}
            <section className='bg-gray-200'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayouts;