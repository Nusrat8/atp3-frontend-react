import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
//import {useNavigate} from 'react-router-dom';

/*function Register(){
    let history = useHistory();
    history.push("/list");

} */


class Addstudent extends Component
{
state = {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    department_name: '',
    admission_time: '',
    error_list:[],

}
handleInput =(e) =>
{
    this.setState({
        [e.target.name]: e.target.value
    });
}
saveStudent = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/list/addstudent',this.state);
    if(res.data.status === 200)
    {
console.log(res.data.message);
swal({
    title: "Registration Done Successfully !",
    //text: "success",
    icon: "success",
    button: "OK",
  });
  //history.push('/list')
this.setState({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    department_name: '',
    admission_time: '',
});
    }
    else{
        this.setState({
            error_list: res.data.validate_err,
        });
    }
}

render()
{
    return(

  <div className="container">
      <div className="row">
          <div className="col-md-6">
          <div className="card">
              <div className="card-header">
 
    <Link to={'/index'}className="btn btn-primary btn-sm float-end"> Back </Link>
</div>
<div className="card-body">

<form onSubmit={this.saveStudent}>

<div className="form-group mb-3">
    <label>User Name</label>
    <input type="text" name="username" onChange={this.handleInput} value={this.state.username}  className="form-control" />
    <span classname="text-danger">{this.state.error_list.username} </span>
</div>
<div className="form-group mb-3">
    <label>Full Name</label>
    <input type="text" name="fullname" onChange={this.handleInput} value={this.state.fullname} className="form-control" />
    <span classname="text-danger">{this.state.error_list.fullname} </span>
</div>
<div className="form-group mb-3">
    <label>Email</label>
    <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
    <span classname="text-danger">{this.state.error_list.email} </span>
</div>
<div className="form-group mb-3">
    <label>Phone </label>
    <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone}  className="form-control" />
    <span classname="text-danger">{this.state.error_list.phone} </span>
</div>
<div className="form-group mb-3">
    <label>Address</label>
    <input type="text" name="address" onChange={this.handleInput} value={this.state.address} className="form-control" />
    <span classname="text-danger">{this.state.error_list.address} </span>
</div>
<div className="form-group mb-3">
    <label>Date of Birth</label>
    <input type="date" name="dob" onChange={this.handleInput} value={this.state.dob}  className="form-control" />
    <span classname="text-danger">{this.state.error_list.dob} </span>
</div>
<div className="form-group mb-3">
    <label>Department Name</label>
    <input type="text" name="department_name" onChange={this.handleInput} value={this.state.department_name}  className="form-control" />
    <span classname="text-danger">{this.state.error_list.department_name} </span>
</div>
<div className="form-group mb-3">
    <label>Admission Session</label>
    <input type="text" name="admission_time" onChange={this.handleInput} value={this.state.admission_time} className="form-control" />
    <span classname="text-danger">{this.state.error_list.admmission_time} </span>
</div>
<div className="form-group mb-3">
    <button type="submit"  className="btn btn-primary">Register </button> 
</div>


</form>

</div>
          </div>
          </div>

      </div>

  </div>



 );
}

}
export default Addstudent;
