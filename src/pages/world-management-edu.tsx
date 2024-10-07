import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import { Package } from '../types/package';
import axios from 'axios';
import WorldDetails from './world-details';

const Tables = () => {
  const [openDetails, setOpenDetails] = useState(null);
  const [data, setData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      let formData = new FormData();
      formData.append("type", "trending");
      formData.append("limit", "999999")
      formData.append("include_json", "0");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.mitoworld.io/api/v1/mito-passcode/world-list",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.W10.GZGwmXGZ3PdHULNQeYSiDcxEgQCvHfqT1OHEtgl__ew`,
      },
      data: formData,
    };

    const response = await axios.request(config);
    setData(response.data.worldDetails);
  };
  fetchData();
  }, []);

  return (
    <>
      
      {openDetails != null ? <WorldDetails openDetails={openDetails} setOpenDetails={setOpenDetails} /> : 
      <>
        <Breadcrumb pageName="World Management" />
        <div className="flex flex-col gap-10">
          {data.length > 0 ? <TableThree data={data as typeof data} setOpenDetails={setOpenDetails} /> : 
          <div className="flex h-screen items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent">
            </div>
          </div>}
        </div>
      </>}
    </>
  );
};

export default Tables;
