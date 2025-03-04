import Link from "next/link";


import '@/styles/components/Pagination.scss';


const Pagination = ({counterPages,pageIndex,setPageIndex}) =>  {

  function handleClick(event) {

    let numberPage = parseInt(event.target.textContent);

    setPageIndex((pageIndex) => numberPage);
  }


return (
  <>
  <div className="pagination px-5" data-counterpages={counterPages.length}>

      {counterPages.map((page,index)=>{
          return (<Link key={`pagination-element-${index}-coucou`} href="#" className="pagination-link" onClick={(event)=>{handleClick(event)}}>{page}</Link>)
      })}

  </div>
  </>
  
  )
}

export default Pagination;