import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  pageDescription?: string;
}
const Breadcrumb = ({ pageName, pageDescription='' }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <span className='flex flex-col'>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>
      <p className="text-sm text-[#666] dark:text-[#999]">{pageDescription}</p>
      </span>
      
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
