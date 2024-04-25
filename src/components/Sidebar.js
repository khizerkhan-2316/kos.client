// Add the following import statement at the top of your file
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { RiDashboard2Fill } from 'react-icons/ri';
import { AiOutlineControl } from 'react-icons/ai';
import { FaStickyNote, FaChevronRight, FaRegCopyright,FaUserShield } from 'react-icons/fa';

function Sidebar() {

  const [highlight, setHighlight] = useState({
    Homepage: true,
    dashboard: false,
    control: false,
    logs: false,
  });
 
  function toggleHighlight(page) {
    const newHighlight = { ...highlight };
    Object.keys(newHighlight).forEach((key) => {
      newHighlight[key] = false;
    });
    newHighlight[page] = true;
    setHighlight(newHighlight);
  }

  const [collapsed, setCollapsed] = useState(true); // Initially collapsed

  useEffect(() => {
    const handleResize = () => {
      // Automatically expand sidebar when window width is greater than 768px
      if (window.innerWidth > 768) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once initially to set the initial state correctly
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const toggleCollapse = () => {
    // Toggle collapsed state
    setCollapsed(!collapsed);
  };  

  return (
    <div className={`bg-[#1c1c1c] px-[25px] w-[${collapsed ? '60px' : 'calc(100vw - 25px)'}] sm:w-[${collapsed ? '40px' : 'calc(100vw - 25px)'}] md:w-[${collapsed ? '30px' : 'calc(100vw - 25px)'}] lg:w-[${collapsed ? '25px' : 'calc(100vw - 25px)'}] xl:w-[${collapsed ? '20px' : 'calc(100vw - 25px)'}] 2xl:w-[${collapsed ? '13px' : 'calc(100vw - 25px)'}] h-screen fixed transition-all duration-300`}>
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
        <h1 className={`text-white text-[${collapsed ? '14px' : '20px'}] leading-[${collapsed ? '16px' : '24px'}] font-extrabold cursor-pointer`} onClick={toggleCollapse}>
          {collapsed ? 'AP' : 'Admin panel'  }
        </h1>
      </div>
      <Link onClick={() => toggleHighlight('Homepage')} to="/" className="text-[14px] leading-[20px] font-bold text-white">  
        <div className="rounded flex items-center gap-[15px] pl-3 py-[10px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer"  style={highlight.Homepage ? { backgroundColor: '#FAF9F6',color:'black' } : {}}>
          <MdHome color={highlight.Homepage ? 'black' : 'white'} />
          {!collapsed && "Homepage"}
          {!collapsed && <FaChevronRight color="white" />}
        </div>
      </Link>
        <>
          <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
            <p className="text-[10px]  font-extrabold leading-[16px] pl-3 text-white/[0.4]">
              {' '}
              INTERFACE
            </p>
            <Link onClick={() => toggleHighlight('dashboard')} to="/dashboard" className="text-[14px] leading-[20px] font-normal text-white">
              <div className="flex items-center mt-1 justify-between gap-[10px] py-[10px] cursor-pointer rounded" style={highlight.dashboard ? { backgroundColor: '#FAF9F6',color:'black' } : {}}>
                <div className="flex pl-3 items-center gap-[10px]">
                  <RiDashboard2Fill color={highlight.dashboard ? 'black' : 'white'} />
                  {!collapsed &&  "Dashboard"}
                  {!collapsed && <FaChevronRight color="white" />}
                </div>
              </div>
            </Link>
            <Link onClick={() => toggleHighlight('control')} to="/control" className="text-[14px] leading-[20px] font-normal text-white ">
              <div className="flex items-center justify-between gap-[10px] py-[10px] rounded cursor-pointer"  style={highlight.control ? { backgroundColor: '#FAF9F6',color:'black' } : {}}>
                <div className="flex pl-3 items-center gap-[10px]">
                  <AiOutlineControl color={highlight.control ? 'black' : 'white'} />
                  {!collapsed && "Actuator control"}
                  {!collapsed && <FaChevronRight color="white" />}
                </div>
              </div>
            </Link>
          </div>
          <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
            <p className="text-[10px] font-extrabold leading-[16px] pl-3 text-white/[0.4]">
              {' '}
              ADDONS
            </p>
            <Link onClick={() => toggleHighlight('logs')} to="/logs" className="text-[14px] leading-[20px] font-normal text-white">
           <div className="flex items-center justify-between mt-1 gap-[10px] py-[10px] rounded cursor-pointer"style={highlight.logs ? { backgroundColor: '#FAF9F6',color:'black' } : {}}>
             <div className="flex pl-3 items-center gap-[10px]">
             <FaStickyNote color={highlight.logs ? 'black' : 'white'} />
             {!collapsed &&  "Logs"}
             {!collapsed && <FaChevronRight color="white" />} {/* Render arrow only if not collapsed */}
             </div>
           </div>
           </Link>
           </div>
        </>
        {!collapsed && (
        <div className="absolute bottom-[20px] left-[55px]">
          <div className="flex items-center gap-[10px]">
            <FaRegCopyright  color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              By Group 8
            </p>
          </div>
        </div>
      )}
      {collapsed && ( // Display copyright icon when collapsed
        <div className="absolute bottom-[20px] left-[50px]">
          <FaRegCopyright  color="white" />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
