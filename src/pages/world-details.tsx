import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import { Package } from '../types/package';
import BackArrow from '../images/icon/right-arrow-single.svg';
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState([]);
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.mitoworld.io/api/v1/world-data/search');
        console.log(response.data);
      } catch (error) {
        console.error(error);
    };
  };
  }, []);

  return (
    <>
      <span className='flex flex-col mb-5'>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white flex items-center">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-[2rem] stroke-black dark:stroke-white rotate-180 cursor-pointer'><g id="SVGRepo_bgCarrier" strokeWidth="0" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier" > <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      World Details
      </h2>
      <p className="text-sm text-[#666] dark:text-[#999]">Here you can edit world details, manage ownership and archive/delete worlds.</p>
      </span>
      <div className="rounded-2xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto"></div>
      </div>
    </>
  );
};

export default Tables;
