import { useEffect, useState } from 'react';
import DropdownIcon from '../../images/icon/dropdown-icon.svg';
import axios from 'axios';

const EditWorldName = ({name, setIsEditWorldName} : {name: String, setIsEditWorldName:Function}) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [newName, setNewName] = useState('');

    const handleUpdate = () => {
        setIsUpdated(true);
    };
  return (
    <div className='h-[100dvh] w-[100dvw] fixed top-0 left-0 z-999 bg-[#000000aa] flex justify-center items-center'>
        {!isUpdated ? 
        <div className='bg-white rounded-2xl w-[35%] p-7 dark:bg-boxdark'>
      <h3 className='text-title-sm font-bold mb-5 text-black dark:text-white'>Edit World Name</h3>
      <div className='mb-5'>
        <p className='font-semibold text-black dark:text-white mb-1'>Existing World Name</p>
        <div className='text-sm border border-[#CBD5E1] py-2 px-5 rounded-2xl'>{name}</div>
      </div>
      <div className='mb-6'>
        <p className='font-semibold text-black dark:text-white mb-1'>New World Name</p>
        <form>
            <input type='text' onChange={e=>setNewName(e.target.value)} className='text-sm border border-[#CBD5E1] bg-transparent w-full py-2 px-5 rounded-2xl'></input>
        </form>
      </div>
      <div className='flex'>
        <button className='bg-[#155A9F] text-sm text-white rounded-3xl py-5 px-8' onClick={()=>setIsEditWorldName(false)}>Cancel</button>
        <button className={`text-sm text-white rounded-3xl py-5 px-8 ml-2 ${newName == '' || newName == name ? 'bg-[#87DBBF] cursor-default' : 'bg-[#10B981]'}`} disabled={newName == '' || newName == name} onClick={handleUpdate}>Update</button>
    </div>
      </div> : 
      <div className='bg-white rounded-2xl w-[35%] p-7 flex flex-col items-center justify-center dark:bg-boxdark'>
            <h3 className='text-title-sm text-center font-bold mb-5 text-black dark:text-white'>World Name Updated</h3>
            <p className='text-center text-black dark:text-white'>An email has been sent to owneremail@gmail.com to notify about the world name update.</p>
            <button className='text-white rounded-2xl px-6 py-3 bg-[#155A9F] mt-5' onClick={()=>setIsEditWorldName(false)}>Done</button>
      </div>
      }
      
    </div>
  );
};

export default EditWorldName;
