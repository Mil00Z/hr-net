import Link from "next/link";

import '@/styles/components/Pagination.scss';

export interface PaginationProps {
  counterPages: number[];
  pageIndex: number;
  setPageIndex: (pageNumber: number) => void;
}


const Pagination = ({counterPages,pageIndex,setPageIndex}:PaginationProps) =>  {

  
  function handleClick(pageNumber:number) {

    setPageIndex(pageNumber);
   
  }


return (
  <>
    <div className="my-2 flex items-center gap-x-4" data-counterpages={counterPages.length}>

      {counterPages.map((page,index)=>{
          return (<Link key={`pagination-element-${index}`} href="#" className={`pagination-link dark:bg-gray-800 text-white hover:bg-white hover:text-gray-800 ${pageIndex === page ? 'active' : ''}`} onClick={()=>{handleClick(page)}}>{page}</Link>)
      })}

    </div>
  </>
  
  )
}

export default Pagination;