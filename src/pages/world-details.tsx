import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import { Package } from '../types/package';
import BackArrow from '../images/icon/right-arrow-single.svg';
import axios from 'axios';

const Tables = ({openDetails, setOpenDetails} : {openDetails: any, setOpenDetails: Function}) => {
  const [data, setData] = useState(openDetails);
  
   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api.mitoworld.io/api/v1/world-data/search');
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //   };
  // };
  console.log(openDetails);
  }, []);

  const handleCloseDetails = () => {
    setOpenDetails(null);
  };

  return (
    <>
      <span className='flex flex-col mb-5'>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white flex items-center">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-[2rem] stroke-black dark:stroke-white rotate-180 cursor-pointer hover:bg-[#b9b9b978] rounded-full' onClick={handleCloseDetails}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier" > <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      World Details
      </h2>
      <p className="text-sm text-[#666] dark:text-[#999]">Here you can edit world details, manage ownership and archive/delete worlds.</p>
      </span>
      <div className="rounded-2xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="w-full overflow-x-auto">
        <h3 className='text-title-sm font-bold mb-5 text-black dark:text-white'>World Details</h3>
        <div className='flex w-full'>
            <table className='w-full'>
              <tbody className='w-full'>
              <tr>
                  <td className='align-top font-semibold whitespace-nowrap text-black dark:text-white'>World Thumbnail</td>
                  <td className='pb-7 pl-10'><img src={data.world_pic} className='rounded-full bg-gray size-[13dvh]'/></td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>World Name</td>
                  <td className='pb-7 pl-10 align-top text-black dark:text-white'>{data.world_name}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Email</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>email@email.com</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>World ID</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{data.world_id}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Status</td>
                  <td className='pb-7 pl-10 align-top text-black dark:text-white'>Un-published</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Date Created</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>01/12/2023</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Subscriptions</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>MitoPro - Yearly</td>
                </tr>
                <tr className='w-full'>
                  <td className='align-top font-semibold text-black dark:text-white'>World Link</td>
                  <td className='pb-7 pl-10 max-w-35 break-word break-all align-top text-[#64748B]'>{data.link_demo}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Date Created</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{data.created_date_time}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      </div>
      <div className="rounded-2xl border border-stroke bg-white mt-5 px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="w-full overflow-x-auto">
      <h3 className='text-title-sm font-bold mb-5 text-black dark:text-white'>World Analytics</h3>
      <table className='w-full'>
              <tbody className='w-full'>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Total Visits</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>12</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Total Playtime</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>1200 min 34 sec</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Total Likes</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>7</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Avg. Playtime 
                  (per user)</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>10 min 6 sec</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Average Monthly Visits</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>18</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Retention Rate (Day 1)</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>67%</td>
                </tr>
                <tr className='w-full'>
                  <td className='align-top font-semibold text-black dark:text-white'>Storage</td>
                  <td className='pb-7 pl-10 break-word align-top text-[#64748B]'>
                    <div className='flex flex-col'>
                      <div className='w-[90%] h-1 rounded-md bg-[#DEDEDE] dark:bg-[#f6f5f55d] mb-2'><div className='h-full w-[66%] bg-black rounded-sm dark:bg-[#DEDEDE]'></div></div>
                      <p className='text-xs'>3.1 MB of 5 MB available (66%)</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
      </div>
    </>
  );
};

export default Tables;
