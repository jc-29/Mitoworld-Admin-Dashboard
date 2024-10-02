import { Package } from '../../types/package';
import LeftArrowDouble from '../../images/icon/left-arrow-double.svg';
import RightArrowSingle from '../../images/icon/right-arrow-single.svg';
import { useEffect, useState } from 'react';

interface TableThreeProps {
  data: Package[];
}
const rowLimit = 10;

const TableThree: React.FC<TableThreeProps> = ({ data }) => {
  const [rows, setRows] = useState<Package[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(data.length / rowLimit);
  const handleNextPageClick = () => {
    if (currentPage == lastPage) return;
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPageClick = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleStartPageClick = () => {
    setCurrentPage(1);
  };
  const handleEndPageClick = () => {
    setCurrentPage(lastPage);
  };

  useEffect(() => {
    setRows(data.slice(rowLimit * (currentPage - 1), rowLimit * currentPage));
  }, [currentPage]);
  
  return (
    <div className="rounded-2xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-[#94A3B8] dark:text-white xl:pl-11">
                World ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-[#94A3B8] dark:text-white">
                World Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-[#94A3B8] dark:text-white">
                Email
              </th>
              <th className="py-4 px-4 font-medium text-[#94A3B8] dark:text-white">
                Visits
              </th>
              <th className="py-4 px-4 font-medium text-[#94A3B8] dark:text-white">
                Template
              </th>
              <th className="py-4 px-4 font-medium text-[#94A3B8] dark:text-white">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {row.world_id}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{row.world_name}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{row.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{row.visits}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{row.template}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button className="border border-[#E2E8F0] rounded-xl px-5 py-1.5 text-[#155A9F] text-sm font-semibold py-1 hover:bg-[#E2E8F0] dark:text-white dark:hover:bg-[#e2e8f02e]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="pagination" className="flex justify-between pt-6 pb-3">
        <p className="text-sm">
          Showing {rowLimit * (currentPage - 1) + 1} to{' '}
          {Math.min(data.length, rowLimit * currentPage)} out of {data.length}{' '}
          entries
        </p>
        <div className="flex gap-0.5">
          <div
            className="border border-[#E2E8F0] size-[1.5dvw] rounded-sm cursor-pointer relative dark:border-[#ababab]"
            onClick={handleStartPageClick}
          >
            
            <img src={LeftArrowDouble} />
            {currentPage == 1 && (
              <div className="absolute top-0 cursor-default size-full bg-[#edeff261] "></div>
            )}
          </div>
          <div
            className="border border-[#E2E8F0] size-[1.5dvw] rounded-sm cursor-pointer relative dark:border-[#ababab]"
            onClick={handlePrevPageClick}
          >
            <img src={RightArrowSingle} className="rotate-180" />
            {currentPage == 1 && (
              <div className="absolute top-0 cursor-default size-full bg-[#edeff261]"></div>
            )}
          </div>
          {currentPage != 1 && (
            <div
              className="border border-[#E2E8F0] size-[1.5dvw] flex justify-center items-center text-xs text-black rounded-sm cursor-pointer dark:border-[#ababab] dark:text-white"
              onClick={handlePrevPageClick}
            >
              {currentPage - 1}
            </div>
          )}
          <div className="border border-[#E2E8F0] size-[1.5dvw] flex justify-center items-center text-xs text-white rounded-sm bg-[#155A9F] cursor-pointer dark:border-[#ababab] dark:text-white">
            {currentPage}
          </div>
          {!(currentPage * rowLimit >= data.length) && (
            <div
              className="border border-[#E2E8F0] size-[1.5dvw] flex justify-center items-center text-xs text-black rounded-sm cursor-pointer dark:text-white"
              onClick={handleNextPageClick}
            >
              {currentPage + 1}
            </div>
          )}
          <div
            className="border border-[#E2E8F0] size-[1.5dvw] rounded-sm cursor-pointer relative dark:border-[#ababab]"
            onClick={handleNextPageClick}
          >
            <img src={RightArrowSingle} />
            {currentPage * rowLimit >= data.length && (
              <div className="absolute top-0 cursor-default size-full bg-[#edeff261] "></div>
            )}
          </div>
          <div
            className="border border-[#E2E8F0] size-[1.5dvw] rounded-sm cursor-pointer relative dark:border-[#ababab]"
            onClick={handleEndPageClick}
          >
            <img src={LeftArrowDouble} className="rotate-180" />

            {currentPage * rowLimit >= data.length && (
              <div className="absolute top-0 cursor-default size-full bg-[#edeff261] "></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableThree;
