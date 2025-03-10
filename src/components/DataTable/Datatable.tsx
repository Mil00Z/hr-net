
import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';


import Pagination from '@/components/Pagination/Pagination';

import mock from '@/datas/mockTest';

// Styles
import '@/styles/components/Datatable.scss';


const DataTable = ({drillingDatas}) => {

  const employees = useSelector((state) => state.user.employees);

  const initialDatas = employees.length > 0 ? employees : mock;

  const [filteredDatas,setFilteredDatas] = useState(initialDatas);
  const [sortingDatas,setSortingDatas] = useState('asc');
  const [elementsPerPage,setElementsPerPage] = useState(initialDatas.length);
  const [counterPages,setCounterPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
 

  //backUp Data to testing 
  localStorage.setItem('employees', JSON.stringify(employees));

  //Choisir si on automatise la création des labels avec les intitulés du form initial 
  const colLabels = Object.keys(employees[0] ? employees[0] : mock[0]);

  //Ou utiliser un object statique formatté à la main
  // const colLabels =  [
  //   { title: 'First Name' },
  //   { title: 'Last Name' },
  //   { title: 'Start Date' },
  //   { title: 'Department' },
  //   { title: 'Date of Birth' },
  //   { title: 'Street' },
  //   { title: 'City' },
  //   { title: 'State'},
  //   { title: 'Zip Code'}
  // ];



  function entriesByPage(inputValue){

    let entry = parseInt(inputValue);

    // Record number of Element by Pages 
    setElementsPerPage((elementsPerPage) => entry);

    //Record Array of Pagination
    setCounterPages((counterPages) => listOfPages(entry))
    
  
  }

  function listOfPages(value){

    let numberOfPages = initialDatas.length / value;

    if(numberOfPages % value > 0){

      numberOfPages = Math.ceil(numberOfPages);

    }

    let links=[];
    for (let i = 1; i <= numberOfPages; i++) {
      links.push(i);
    }

    return links;
  }

  function lexicalFilter(value) {
    
    let sortedDatas;

    if (sortingDatas === 'asc') {
      sortedDatas = [...filteredDatas].sort((a, b) => {
        return a[value].localeCompare(b[value], 'fr');
      });
      setSortingDatas('desc');
    } else {
      sortedDatas = [...filteredDatas].sort((a, b) => {
        return b[value].localeCompare(a[value], 'fr');
      });
      setSortingDatas('asc');
    }
    setFilteredDatas(sortedDatas);
  }

  function globalSearch(input){

  
    if(filteredDatas.length === 0 || input === ''){

      setFilteredDatas(initialDatas);

    } else {

      const filteredSearch = filteredDatas.filter((row) => {
  
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(input.toLowerCase());
        })
      })
  
      setFilteredDatas(filteredSearch);
    }
    
  }


  useEffect(() => {

    //First Step of dispatch Datas by Pages
    setFilteredDatas((filteredDatas) => {

      const sliced = initialDatas.slice((pageIndex - 1) * elementsPerPage, elementsPerPage * pageIndex);

      
      console.log(sliced);

      return sliced;
    });
   
  },[elementsPerPage,pageIndex])



  return(
    <>
      <div className="top">
      
        <div className="numbering flex flex-row">

          <select className="text-base text-white" onChange={(event)=>{entriesByPage(event.target.value)}}>
              <option defaultValue="" value={initialDatas.length}>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="25">20</option>
          </select>
          <label htmlFor="dt-length-0" className="px-4 text-white font-semibold text-base"> {filteredDatas.length > 1 ? 'entries' : 'entry'} per page</label>
          
        </div>

        <div className="searching flex flex-row">
          <label htmlFor="search" className="px-2 mx-2 font-semibold text-white text-base">Search:</label>
          <input type="search" id="search" className="text-base" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
        </div>
        
      </div>

      
      <table id="employee-table" className="table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr >
                {colLabels.map((label,index) => {
                return (<th key={`label-${index}`} className="px-6 py-3 text-yellow-600 text-lg" data-head={`${label}`} onClick={()=>{lexicalFilter(label)}} scope="col">{label}</th>)
              })}
              </tr>
          </thead>
          <tbody>

            {filteredDatas.length > 0 ? (filteredDatas.map((row, index) => {
                  return (
                    <tr key={`row-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      
                      {Object.values(row).map((cell, index) => {
                        return (
                          <>
                            <td key={`cell-${index}`} className="px-6 py-4 text-base">
                            {cell.length !== 0 ? cell : '❌'}
                            </td>
                          </>
                        );
                      })}
                    </tr>);
                })
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <>
                    <td className="bg-red-600 px-6 py-4 text-white">
                      Aucun résultat trouvé
                    </td>
                  </>
                </tr>
              )}

          </tbody>
      </table>


      <div className="bottom my-2">

        <div className="px-5 my-2 details text-white text-base"> Show <span className="text-lg font-semibold text-red-600">{filteredDatas.length}</span> entries of <span className="text-lg font-bold text-yellow-600">{initialDatas.length}</span></div>

      
        <Pagination counterPages={counterPages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      
      </div>

    </>

  )
}

export default DataTable