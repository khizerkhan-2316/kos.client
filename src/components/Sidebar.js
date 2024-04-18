import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { RiDashboard2Fill } from 'react-icons/ri';
import { AiOutlineControl } from 'react-icons/ai';
import { FaStickyNote, FaChevronRight, FaRegCopyright } from 'react-icons/fa';

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

  return (
    <div className="bg-[#1c1c1c] px-[25px] w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[13%] h-screen fixed">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Admin panel
        </h1>
      </div>
      <Link
        onClick={() => toggleHighlight('Homepage')}
        to="/"
        className="text-[14px] leading-[20px] font-bold text-white"
      >
        <div
          className="rounded flex items-center gap-[15px] pl-3 py-[10px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer"
          style={highlight.Homepage ? { backgroundColor: '#1976D2' } : {}}
        >
          <MdHome color="white" />
          Homepage
        </div>
      </Link>

      <div className="pt-[15px]  border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px]  font-extrabold leading-[16px] pl-3 text-white/[0.4]">
          {' '}
          INTERFACE
        </p>
        <Link
          onClick={() => toggleHighlight('dashboard')}
          to="/dashboard"
          className="text-[14px] leading-[20px] font-normal text-white"
        >
          <div
            className="flex items-center mt-1 justify-between gap-[10px] py-[10px] cursor-pointer rounded"
            style={highlight.dashboard ? { backgroundColor: '#1976D2' } : {}}
          >
            <div className="flex pl-3 items-center gap-[10px]">
              <RiDashboard2Fill color="white" /> Dashboard
            </div>

            <FaChevronRight color="white" />
          </div>
        </Link>

        <Link
          onClick={() => toggleHighlight('control')}
          to="/control"
          className="text-[14px] leading-[20px] font-normal text-white"
        >
          <div
            className="flex items-center justify-between gap-[10px] py-[10px] rounded cursor-pointer"
            style={highlight.control ? { backgroundColor: '#1976D2' } : {}}
          >
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
        <Link
          onClick={() => toggleHighlight('logs')}
          to="/logs"
          className="text-[14px] leading-[20px] font-normal text-white"
        >
          <div
            className="flex items-center justify-between mt-1 gap-[10px] py-[10px] rounded cursor-pointer"
            style={highlight.logs ? { backgroundColor: '#1976D2' } : {}}
          >
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
    </div>
  );
}

export default Sidebar;
