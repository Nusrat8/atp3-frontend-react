import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Front from '../layouts/Front';

class List extends Component{
 state = {
     students:[],
     loading:true,

 }
 async componentDidMount (){
     const res = await axios.get('http://localhost:8000/api/list');
     if(res.data.status ===200)
     {
         this.setState({
             students:res.data.students,
             loading:false,
         });
     }
 }


render(){
  var student_HTMLTABLE = "" ;
  if(this.state.loading)
  {
      student_HTMLTABLE = <tr><td colspan="8"><h2>Loading....</h2></td></tr>
  }
else 
{
    student_HTMLTABLE = 
    this.state.students.map( (item)=> {
 return (
     <tr key={item.id}>
         <td>{item.username}</td>
         <td>{item.fullname}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
         <td>{item.address}</td>
         <td>{item.dob}</td>
         <td>{item.department_name}</td>
         <td>{item.admission_time}</td>
     </tr>
 )

    });
}

    return(

        <div>
             <Front/>
 <div className="container">
      <div className="row">
          <div className="col-md-12">
          <div className="card">
              <div className="card-header">

    <Link to={'/index'} className="btn btn-primary btn-sm float-end"> Back </Link>

</div>
<div className="card-body">
<table className="table table-borded table-striped">
    <thead>
        <tr>
      <th>User Name</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Dob</th>
      <th>Department Name</th>
      <th>Admission Session </th>
        </tr>
    </thead>
    <tbody>
        {student_HTMLTABLE}
    </tbody>
</table>

</div>
          </div>
          </div>

      </div>

  </div>


        </div>
 

        );
}

}
export default List;
