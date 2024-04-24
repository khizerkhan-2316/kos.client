import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { RiDashboard2Fill } from 'react-icons/ri';
import { AiOutlineControl } from 'react-icons/ai';
import { FaStickyNote, FaChevronRight, FaRegCopyright } from 'react-icons/fa';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false); // State to track collapsed status

  useEffect(() => {
    const handleResize = () => {
      // Automatically collapse sidebar on small screens (width < 768px)
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-[#1c1c1c] px-[25px] w-[${collapsed ? '60px' : '60%'}] sm:w-[${collapsed ? '40px' : '40%'}] md:w-[${collapsed ? '30px' : '30%'}] lg:w-[${collapsed ? '25px' : '25%'}] xl:w-[${collapsed ? '20px' : '20%'}] 2xl:w-[${collapsed ? '13px' : '13%'}] h-screen fixed transition-all duration-300`}>
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
        <h1 className={`text-white text-[${collapsed ? '14px' : '20px'}] leading-[${collapsed ? '16px' : '24px'}] font-extrabold cursor-pointer`} onClick={toggleCollapse}>
          {collapsed ? 'AP' : 'Admin panel'}
        </h1>
      </div>
      {!collapsed && (
        <>
          <Link to="/" className="text-[14px] leading-[20px] font-bold text-white">
            <div className="rounded flex items-center gap-[15px] pl-3 py-[10px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
              <MdHome color="white" />
              Homepage
            </div>
          </Link>

          <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
            <p className="text-[10px]  font-extrabold leading-[16px] pl-3 text-white/[0.4]">
              {' '}
              INTERFACE
            </p>
            <Link to="/dashboard" className="text-[14px] leading-[20px] font-normal text-white">
              <div className="flex items-center mt-1 justify-between gap-[10px] py-[10px] cursor-pointer rounded">
                <div className="flex pl-3 items-center gap-[10px]">
                  <RiDashboard2Fill color="white" /> Dashboard
                </div>
                <FaChevronRight color="white" />
              </div>
            </Link>

            <Link to="/control" className="text-[14px] leading-[20px] font-normal text-white">
              <div className="flex items-center justify-between gap-[10px] py-[10px] rounded cursor-pointer">
                <div className="flex pl-3 items-center gap-[10px]">
                  <AiOutlineControl color="white" /> Actuator control
                </div>
                <FaChevronRight color="white" />
              </div>
            </Link>
          </div>
          <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
            <p className="text-[10px] font-extrabold leading-[16px] pl-3 text-white/[0.4]">
              {' '}
              ADDONS
            </p>
            <Link to="/logs" className="text-[14px] leading-[20px] font-normal text-white">
              <div className="flex items-center justify-between mt-1 gap-[10px] py-[10px] rounded cursor-pointer">
                <div className="flex pl-3 items-center gap-[10px]">
                  <FaStickyNote color="white" />
                  Logs
                </div>
                <FaChevronRight color="white" />
              </div>
            </Link>
          </div>
          <div className="absolute bottom-[20px] left-[55px]">
            <div className="flex items-center gap-[10px]">
              <FaRegCopyright color="white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                By Group 8
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
