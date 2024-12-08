import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/Avatar.jpg';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv 
        }
    ];
    return (
        <div className='flex items-center justify-between gap-8 p-5'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='w-[80px] md:w-[115px] object-cover'/>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItem name={item.name} Icon={item.icon} key={index}/>
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} key={index}/>
                    ))}
                    <div className='md:hidden' onClick={handleToggle}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/>
                        {toggle 
                        ?   <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-4 py-4'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem name={item.name} Icon={item.icon} key={index}/>
                                ))}
                            </div>
                        : null}
                    </div>
                </div>
            </div>
            <img src={avatar} alt="" className='w-[40px]'/>
        </div>
    )
}

export default Header
