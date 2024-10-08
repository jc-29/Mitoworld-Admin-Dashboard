import { useEffect, useState } from 'react';
import DropdownIcon from '../../images/icon/dropdown-icon.svg';
import axios from 'axios';

const EditWorldStatus = ({status, setIdEditWorldStatus} : {status: String, setIdEditWorldStatus:Function}) => {
    const dropdownOptions = ['Published', 'Un-Published', 'Expired'];
    const currentStatus = status == "1" ? "Published" : status == "0" ? "Un-Published" : "Expired";
    const [selectedOption, setSelectedOption] = useState<String>('Please choose')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const handleNewSelection = (option : String) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };
  
    const handleUpdate = () => {
        setIsUpdated(true);
    };
  return (
    <div className='h-[100dvh] w-[100dvw] fixed top-0 left-0 z-999 bg-[#000000aa] flex justify-center items-center'>
        {!isUpdated ? 
        <div className='bg-white rounded-2xl w-[35%] p-7 dark:bg-boxdark'>
      <h3 className='text-title-sm font-bold mb-5 text-black dark:text-white'>Edit World Status</h3>
      <div className='mb-5'>
        <p className='font-semibold text-black dark:text-white mb-1'>Existing World Status</p>
        <div className='text-sm border border-[#CBD5E1] py-2 px-5 rounded-2xl items-center'>{currentStatus}</div>
      </div>
      <div className='mb-6'>
        <p className='font-semibold text-black dark:text-white mb-1'>New World Status</p>
        <div className='text-sm border border-[#CBD5E1] py-2 rounded-2xl'><span className='px-5 flex justify-between items-center'>{selectedOption}<img src={DropdownIcon} onClick={()=>setIsDropdownOpen(!isDropdownOpen)} className={`h-2.5 cursor-pointer ${isDropdownOpen ? 'rotate-180' : ''}`}/></span>
        {isDropdownOpen && <div className='flex flex-col w-full gap-2 mt-2'>
            {dropdownOptions.map(option => {
                return <div className='px-5 py-1 font-semibold text-sm text-black border-top border-bottom left-0 rounded-lg hover:bg-[#cbd5e168] cursor-pointer dark:text-white' onClick={() => handleNewSelection(option)}>{option}</div>
            })}
        </div>}
        </div>
      </div>
      <div className='flex'>
        <button className='bg-[#155A9F] text-sm text-white rounded-3xl py-5 px-8' onClick={()=>setIdEditWorldStatus(false)}>Cancel</button>
        <button className={`text-sm text-white rounded-3xl py-5 px-8 ml-2 ${selectedOption == currentStatus || selectedOption == 'Please choose' ? 'bg-[#87DBBF] cursor-default' : 'bg-[#10B981]'}`} disabled={selectedOption == currentStatus || selectedOption == 'Please choose'} onClick={handleUpdate}>Update</button>
    </div>
      </div> : 
      <div className='bg-white rounded-2xl w-[35%] p-7 flex flex-col items-center justify-center dark:bg-boxdark'>
            <h3 className='text-title-sm text-center font-bold mb-5 text-black dark:text-white'>World Status Updated</h3>
            <p className='text-center text-black dark:text-white'>An email has been sent to owneremail@gmail.com to notify about the world status update.</p>
            <button className='text-white rounded-2xl px-6 py-3 bg-[#155A9F] mt-5' onClick={()=>setIdEditWorldStatus(false)}>Done</button>
      </div>
      }
      
    </div>
  );
};

export default EditWorldStatus;
