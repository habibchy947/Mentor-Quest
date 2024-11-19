import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const links =
        <>
            <NavLink to='/' className={({isActive})=> ` px-4 py-2 font-medium ${isActive? 'text-orange-400':'text-black'}`}>Home</NavLink>
            <NavLink to='/profile' className={({isActive})=>` px-4 py-2 font-medium ${isActive? 'text-orange-400':'text-black'}`}>My profile</NavLink>
            <NavLink to='/about' className={({isActive})=>` px-4 py-2 font-medium ${isActive? 'text-orange-400':'text-black'}`}>About us</NavLink>
        </>
        const [toggle,setToggle] = useState(false)
        console.log(toggle)
    return (
        <div className="navbar px-0  w-11/12 mx-auto py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={()=>setToggle(!toggle)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm ${toggle && 'hidden'} dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                            {links}
                    </ul>
                </div>
                <NavLink to='/' className=" md:text-3xl text-xl font-bold"><span className='text-orange-400'>Mentor</span><span className='text-cyan-600'> Quest</span></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/authLayout/login' className="btn bg-orange-400 text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;