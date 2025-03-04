import Link from "next/link";


import '@/styles/components/Pagination.scss';


const Pagination = ({counterPages}) =>  {


return (
  <>
  <div className="pagination px-5" data-counterpages={counterPages.length}>

      {counterPages.map((page,index)=>{
          return (<Link key={`pagination-element-${index}-coucou`} href="/" className="pagination-link">{page}</Link>)
      })}

  </div>
  </>
  
  )
}

export default Pagination;