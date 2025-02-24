import {useSelector} from 'react-redux';

import mock from '@/datas/mockTest'

const DataTable = (props) => {

  const {drillingDatas} = props; 

  const employees = useSelector((state) => state.user.employees);

  //backUp Data
  localStorage.setItem('employees', JSON.stringify(employees));

  //testing data Callback
  const colLabels = Object.keys(employees[0] ? employees[0] : mock[0]);
  const rowdatas = employees.length > 0 ? employees : mock;

  console.log(employees);


  return(
    <>
      <table id="employee-table" className="display data-table">
          
        <thead>
          <tr>

          {colLabels.map((label,index) => {
            return (<th key={`label-${index}`} className="table-label">{label}</th>)
          })}

           </tr>
        </thead>

        
        <tbody>
          {rowdatas.map((obj,index) => {
           
            return(
              <tr key={`id-${index}`} className="">
                {Object.values(obj).map((entry,index) => {
                  return(
                    <td key={`entry-${index}`} className="table-entry">{entry.length !== 0 ? entry :'❌'}</td>
                  )  
                })} 
              </tr>
            )     
          })} 
        </tbody>
      </table>
    
    </>

  )
}

export default DataTable