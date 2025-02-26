import {useState} from 'react';
import {useSelector} from 'react-redux';

import mock from '@/datas/mockTest';

import '@/styles/components/Datatable.scss';


const DataTable = ({drillingDatas}) => {

  const employees = useSelector((state) => state.user.employees);

  const rowDatas = employees.length > 0 ? employees : mock;

  const [filteredDatas,setFilteredDatas] = useState(rowDatas);
 

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

  

  function globalSearch(element){

    console.log(element)

    if(filteredDatas.length === 0){

      setFilteredDatas(rowDatas);

    } else {

      const filteredSearch = filteredDatas.filter((row) =>{
  
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(element.toLowerCase());
        })
      })
  
      setFilteredDatas(filteredSearch);

    }
    
  }


  return(
    <>
      
      <div className="top">
        <div className="filtering"></div>
        <div className="searching">
          <input type="search" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
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

{ filteredDatas.length > 0 ? (filteredDatas.map((row, index) => {
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
      </table>

      <div className="bottom">
        <div className="details"></div>
        <div className="pagination"></div>
      </div>
    
    </>

  )
}

export default DataTable