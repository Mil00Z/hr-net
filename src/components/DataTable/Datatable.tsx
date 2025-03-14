'use client';

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';


import Pagination from '@/components/Pagination/Pagination';

import mock from '@/datas/mockTest';

// Styles
import '@/styles/components/Datatable.scss';

export interface DataTableProps {
  initialDatas: object[];
}


const DataTable = ({initialDatas} : DataTableProps) => {

  const employees = useSelector((state) => state.user.employees);

  let defaultDatas = employees.length > 0 ? employees : mock;


  const [searchedDatas,setSearchedDatas] = useState<object[]>(defaultDatas);
  const [filteredDatas,setFilteredDatas] = useState<object[]>([]);
  const [sortingDatas,setSortingDatas] = useState<string>('asc');
  const [elementsPerPage,setElementsPerPage] = useState<number>(defaultDatas.length);
  const [counterPages,setCounterPages] = useState<number[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
 

  //backUp Data to testing 
  // localStorage.setItem('employees', JSON.stringify(employees));

  //Choisir si on automatise la création des labels avec les intitulés du form initial 
  const colLabels = Object.keys(employees[0] ? employees[0] : mock[0]);

 

  function entriesByPage(inputValue:string){

    let entry = parseInt(inputValue);

    // Record number of Element by Pages 
    setElementsPerPage(entry);

    //Record Array of Pagination
    setCounterPages(listOfPages(entry))
    

  }

  function listOfPages(value:number){

    let numberOfPages = searchedDatas.length / value;

    if(numberOfPages % value > 0){

      numberOfPages = Math.ceil(numberOfPages);

    }

    let links=[];
    for (let i = 1; i <= numberOfPages; i++) {
      links.push(i);
    }

    return links;
  }


  // Filter by Lexical Order*
  interface OrderDatas {
    [key: string] : string,
  }

  function lexicalFilter(value:string) {
    
    let sortedDatas;

    if (sortingDatas === 'asc') {
      sortedDatas = [...searchedDatas].sort((a, b) => {
        return (a as OrderDatas)[value].localeCompare((b as OrderDatas)[value], 'fr');
      });
      setSortingDatas('desc');
    } else {
      sortedDatas = [...searchedDatas].sort((a, b) => {
        return (b as OrderDatas)[value].localeCompare((a as OrderDatas)[value], 'fr');
      });
      setSortingDatas('asc');
    }
    setSearchedDatas(sortedDatas);
  }


  function globalSearch(input:string){

    if(searchedDatas.length === 0 || input === ''){

      setSearchedDatas(defaultDatas);

    } else {

      const globalSearchedDatas = searchedDatas.filter((row) => {
  
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(input.toLowerCase());
        })
      })
  
      setSearchedDatas(globalSearchedDatas);
    }
    
  }


  useEffect(() => {

    //First Step of dispatch Datas by Pages
    setFilteredDatas(() => {

      return searchedDatas.slice((pageIndex - 1) * elementsPerPage, elementsPerPage * pageIndex);

    });
   
  },[elementsPerPage,pageIndex,searchedDatas]);



  return(
    <>
      <div className="top flex items-center py-2 my-4">
        
        <div className="numbering flex flex-row items-center">

          <select className="p-2 bg-gray-800 text-base text-white" onChange={(event)=>{entriesByPage(event.target.value)}} name="dt-length">
              <option defaultValue="" value={defaultDatas.length}>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="25">20</option>
          </select>
          <label htmlFor="dt-length-0" className="px-4 text-white font-semibold text-base"> {searchedDatas.length > 1 ? 'entries' : 'entry'} per page</label>
        
        </div>

        <div className="searching flex flex-row items-center ml-auto">
          <label htmlFor="search" className="px-2 mx-2 font-semibold text-white text-base">Search:</label>
          <input type="search" id="search" className="p-2 bg-gray-800 text-base text-white" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
        </div>
        
      </div>
      
      <table id="employee-table" className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-gray-800">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr >
                {colLabels.map((label,index) => {
                return (<th key={`label-${index}`} className="px-3 py-3 text-yellow-600 text-lg" data-head={`${label}`} onClick={()=>{lexicalFilter(label)}} scope="col">{label}</th>)
              })}
              </tr>
          </thead>
          <tbody>

            {defaultDatas.length > 0 ? (filteredDatas.map((row, index) => {
                  return (
                    <tr key={`row-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      
                      {Object.values(row).map((cell, index) => {
                        return (
                          <>
                            <td key={`cell-${index}`} className="px-3 py-4 text-base">
                            {cell.length !== 0 ? cell : '❌'}
                            </td>
                          </>
                        );
                      })}
                    </tr>);
                })
              ) : (
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-800">
                  <>
                    <td className="px-6 py-4 bg-red-600  text-white">
                      Aucun résultat trouvé
                    </td>
                  </>
                </tr>
              )}

          </tbody>
      </table>


      <div className="bottom px-2 my-2 flex justify-between items-center">

        <div className="details my-2 text-white text-base"> Show <span className="text-lg font-semibold text-red-600">{searchedDatas.length}</span> entries of <span className="text-lg font-bold text-yellow-600">{defaultDatas.length}</span></div>
        

        <Pagination counterPages={counterPages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>

    </>

  )
}

export default DataTable