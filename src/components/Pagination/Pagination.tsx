import {useState} from 'react';
import Link from "next/link";


import '@/styles/components/Pagination.scss';


const Pagination = ({counterPages,pageIndex,setPageIndex}) =>  {

  const [activePage,setActivePage] = useState(pageIndex);



  function handleClick(pageNumber) {

    setPageIndex((pageIndex) => parseInt(pageNumber));
   
  }


return (
  <>
  <div className="pagination px-5" data-counterpages={counterPages.length}>

      {counterPages.map((page,index)=>{
          return (<Link key={`pagination-element-${index}`} href="#" className={`pagination-link dark:bg-gray-800 text-white hover:bg-white hover:text-gray-800 ${pageIndex === page ? 'active' : null}`} onClick={()=>{handleClick(page)}}>{page}</Link>)
      })}

  </div>
  </>
  
  )
}

export default Pagination;