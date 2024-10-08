import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import { Package } from '../types/package';
import BackArrow from '../images/icon/right-arrow-single.svg';
import TooltipPoint from '../images/icon/tooltip-point.svg';
import PencilIcon from '../images/icon/pencil-icon.svg';
import CopyIcon from '../images/icon/copy-icon.svg';
import axios from 'axios';
import EditWorldStatus from '../components/Forms/EditWorldStatus';
import EditWorldName from '../components/Forms/EditWorldName';

const Tables = ({world_id, setWorldId, type} : {world_id: string, setWorldId: Function, type: string}) => {
  const [data, setData] = useState({});
  const [linkCopied, setLinkCopied] = useState(false);
  const [isEditWorldStatus, setIsEditWorldStatus] = useState(false);
  const [isEditWorldName, setIsEditWorldName] = useState(false);
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        let formData = new FormData();
        formData.append("world_id", world_id);
        formData.append("include_json", "0");

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.mitoworld.io/api/v1/world-data/search",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.W10.GZGwmXGZ3PdHULNQeYSiDcxEgQCvHfqT1OHEtgl__ew`,
        },
        data: formData,
      };

      const response = await axios.request(config); 
      console.log(response.data[0]);
      setData(response.data[0]);
      } catch (error) {
        console.error(error);
    };
  };
  fetchData();
  }, []);

  const handleCloseDetails = () => {
    setWorldId('');
  };
  
  const handleLinkCopied = () => {
    navigator.clipboard.writeText(`https://mitoworld.io/world/${type}/${world_id}/${data.world_link}`);
    setLinkCopied(!linkCopied);
    console.log(linkCopied);
    setTimeout(() => {
      setLinkCopied(false);
    }, 1000);
  };

  const getMonthDifference = (startDate:Date, endDate:Date) => {
    return (
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth())
    );
  }
  
  const calcAvgVisits = (startDateString:string) => {
    const totalVisits = Number(data.visit_count);
    const startDate = new Date(startDateString);
    const today = new Date();
    return Math.ceil(totalVisits / getMonthDifference(startDate, today));

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
                  <td className='pb-7 pl-10 align-top text-black dark:text-white flex'>{data.world_name} <img src={PencilIcon} className='ml-3 cursor-pointer' onClick={()=>{setIsEditWorldName(true)}} />
                  </td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Email</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>email@email.com</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>World ID</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{data.world_id}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Status</td>
                  <td className='pb-7 pl-10 align-top flex text-black dark:text-white'>{data.world_status == "1" ? "Published" : data.world_status == "0" ? "Un-Published" : "Expired"}<img src={PencilIcon} className='ml-3 cursor-pointer' onClick={()=>{setIsEditWorldStatus(true)}}/></td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Date Created</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>01/12/2023</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Subscriptions</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>MitoPro - Yearly</td>
                </tr>
                <tr className='w-full'>
                  <td className='align-top font-semibold text-black dark:text-white'>World Link</td>
                  <td className='pb-7 pl-10 align-top flex relative'>
                    <p className='max-w-33 break-word break-all text-[#64748B]'>https://mitoworld.io/world/{type}/{world_id}/{data.world_link}</p>
                    <span className='relative flex items-center'><img src={CopyIcon} onClick={handleLinkCopied} className='cursor-pointer ml-3'/>
                    {linkCopied && <span className='absolute left-1 z-999 flex items-center text-xs w-30'><img src={TooltipPoint} className='w-2'/><p className='bg-[#155A9F] p-2 text-white rounded-lg'>Link Copied</p></span>}
                    </span>
                    
                    </td>
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
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{data.visit_count}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Total Playtime</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>1200 min 34 sec</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Total Likes</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{data.like_count}</td>
                  <td className='pl-10 align-top font-semibold text-black dark:text-white'>Avg. Playtime 
                  (per user)</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>10 min 6 sec</td>
                </tr>
                <tr>
                  <td className='align-top font-semibold text-black dark:text-white'>Average Monthly Visits</td>
                  <td className='pb-7 pl-10 align-top text-[#64748B]'>{calcAvgVisits(data.created_date_time)}</td>
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
      {isEditWorldStatus && <EditWorldStatus status={data.world_status} setIsEditWorldStatus={setIsEditWorldStatus}/>}
      {isEditWorldName && <EditWorldName name={data.world_name} setIsEditWorldName={setIsEditWorldName}/>}
    </>
  );
};

export default Tables;
