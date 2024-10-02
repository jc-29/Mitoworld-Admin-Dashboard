import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import { Package } from '../types/package';

const Tables = () => {
  const data: Package[] = [
    {
      world_id: '1',
      world_name: 'Timberland in Forest',
      email: 'othniel@gmail.com',
      visits: '100,000',
      template: 'Forest',
    },
    {
      world_id: '2',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '90,030',
      template: 'Forest',
    },
    {
      world_id: '3',
      world_name: 'Timberland in Forest',
      email: 'othniel@gmail.com',
      visits: '1,100',
      template: 'Forest',
    },
    {
      world_id: '4',
      world_name: 'Timberland in Forest',
      email: 'othniel@gmail.com',
      visits: '569',
      template: 'Forest',
    },
    {
      world_id: '5',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '1',
      template: 'Forest',
    },
    {
      world_id: '6',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '7',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '8',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '9',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '10',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },{
      world_id: '11',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },{
      world_id: '123566',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '123566',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
    {
      world_id: '123566',
      world_name: 'Rain Sound and Forest',
      email: 'othniel@gmail.com',
      visits: '0',
      template: 'Forest',
    },
  ];
  return (
    <>
      <Breadcrumb pageName="World Management" />

      <div className="flex flex-col gap-10">
        {/* <TableOne />
        <TableTwo /> */}
        <TableThree data={data}/>
      </div>
    </>
  );
};

export default Tables;
