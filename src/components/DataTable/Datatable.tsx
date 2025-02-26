import {useState} from 'react';
import {useSelector} from 'react-redux';

import mock from '@/datas/mockTest';

import '@/styles/components/Datatable.scss';


const DataTable = ({drillingDatas}) => {

  const [search,setSearch] = useState('');
 
  const employees = useSelector((state) => state.user.employees);

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

  const rowdatas = employees.length > 0 ? employees : mock;

  function globalSearch(element){

    setSearch(element);
    console.log(element)

    const filteredElements = mock.filter((row) =>{

      const lastNameFilter = row.lastName.toLowerCase().includes(element.toLowerCase());
      const firstNameFilter = row.firstName.toLowerCase().includes(element.toLowerCase());
      const dateOfBirthFilter = row.dateBirth.toLowerCase().includes(element.toLowerCase());
      const cityFilter = row.city.toLowerCase().includes(element.toLowerCase());
      const departmentFilter = row.department.toLowerCase().includes(element.toLowerCase());
      const startDateFilter = row.startDate.toLowerCase().includes(element.toLowerCase());
      const streetFilter = row.street.toLowerCase().includes(element.toLowerCase());
      const zipCodeFilter = row.zipCode.toLowerCase().includes(element.toLowerCase());

      return lastNameFilter || firstNameFilter || dateOfBirthFilter || cityFilter || departmentFilter || startDateFilter || streetFilter || zipCodeFilter;
    })

    console.log(filteredElements);
    
  }

 
  return(
    <>
      
      <div className="top">
        <div className="filtering"></div>
        <div className="searching">
          <input type="search" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
        </div>
        
      </div>

      <table id="employee-table" className="display data-table">
          
        <thead>
          <tr>

          {colLabels.map((label,index) => {
            return (<th key={`label-${index}`} className="table-label">{label}</th>)
          })}

           </tr>
        </thead>

        
        <tbody>
          {mock.map((row,index) => {
           
            return(
              <tr key={`id-${index}`} className="">
                {Object.values(row).map((cell,index) => {
                  return(
                    <td key={`entry-${index}`} className="table-entry">{cell.length !== 0 ? cell :'❌'}</td>
                  )  
                })} 
              </tr>
            )     
          })} 
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