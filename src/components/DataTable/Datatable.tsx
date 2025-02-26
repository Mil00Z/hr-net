import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import mock from '@/datas/mockTest';

import '@/styles/components/Datatable.scss';


const DataTable = ({drillingDatas}) => {

  const employees = useSelector((state) => state.user.employees);

  const initialDatas = employees.length > 0 ? employees : mock;

  const [filteredDatas,setFilteredDatas] = useState(initialDatas);
 

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

    setFilteredDatas(() => initialDatas.slice(0, entry))

  }

  function globalSearch(input){

  
    if(filteredDatas.length === 0 || input === ''){

      setFilteredDatas(initialDatas);

    } else {

      const filteredSearch = filteredDatas.filter((row) =>{
  
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(input.toLowerCase());
        })
      })
  
      setFilteredDatas(filteredSearch);

    }
    
  }

  useEffect(() => { 

    console.log('datas changing')

  }, [filteredDatas]);


  return(
    <>
      <div className="top">

        <div className="numbering flex flex-row">

          <select className="" id="" onChange={(event)=>{entriesByPage(event.target.value)}}>
              <option defaultValue="">All</option>
              <option value="1">1</option>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="25">20</option>
          </select>
          <label htmlFor="dt-length-0" className="px-4 text-white font-semibold"> entries per page</label>
          
        </div>

        <div className="searching flex flex-row">
          <label htmlFor="search" className="px-2 mx-2 font-semibold text-white">Search:</label>
          <input type="search" id="search" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
        </div>
        
      </div>

      <table id="employee-table" className="data-table">
          
        <thead>
          <tr>

          {colLabels.map((label,index) => {
            return (<th key={`label-${index}`} className="table-label">{label}</th>)
          })}

           </tr>
        </thead>

        
        <tbody>
          {filteredDatas.length > 0 ? (filteredDatas.map((row, index) => {
              return (
                <tr key={`id-${index}`} className="">
                  {Object.values(row).map((cell, index) => {
                    return (
                      <td key={`cell-${index}`} className="table-cell">
                        {cell.length !== 0 ? cell : '❌'}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="table-cell-full">
                Aucun résultat trouvé
              </td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>

          {colLabels.map((label,index) => {
            return (<th key={`label-${index}`} className="table-label">{label}</th>)
          })}

           </tr>
        </tfoot>

      </table>

      <div className="bottom">
        <div className="px-4 details text-white"> Show  <span className="font-semibold text-red-600">{filteredDatas.length}</span> entries of <span className="font-bold text-yellow-600">{initialDatas.length}</span> </div>
        <div className="pagination"></div>
      </div>
    </>

  )
}

export default DataTable