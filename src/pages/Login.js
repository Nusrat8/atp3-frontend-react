import React, {useState} from 'react';
//import {Link} from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';



function Login(){
   
const history = useNavigate();
const [loginInput,setLogin] = useState({
    username: '',
    password: '',
    error_list:[],

}) ;

  const handleInput =(e)=>
 {
     e.persist();
     setLogin({...loginInput, [e.target.name]: e.target.value });

 }
 const loginSubmit =(e)=>{
     e.preventDefault();

    const data ={
        username: loginInput.username,
        password: loginInput.password,
    
    }

axios.get('/sanctum/csrf-cookie').then(_response=>{
    axios.post('/api/login',data).then(res=>{
        if(res.data.status ===200)
        {
           //localStorage.setItem('auth_token',res.data.token);
           //localStorage.setItem('auth_email',res.data.email);
           swal("succcess",res.data.message,"success");
           history.push('/list')

        }
        else if(res.data.status === 401)
        {
            swal("warning",res.data.message,"warning");
        }
        else {
            setLogin({...loginInput,error_list: res.data.validation_errors });
        }
    

});



});
    
 }

    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className ="col-md-6">
                        <div className ="card">
                            <div className="card-header">
                                <div className="card-body">
                                    <form onSubmit={loginSubmit}>
                                        <div className="form-group mb-3">
                                            <label>User Name</label>
                                            <input type="text" name="username" onChange={handleInput} value={loginInput.username} className="form-control"/>
                                            <span>{loginInput.error_list.username} </span>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Password</label>
                                            <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                            <span>{loginInput.error_list.password} </span>

                                        </div>
                                        <div className="container ">
                                           <button type="submit" className = "btn btn-primary">Login</button>
                                        </div>
                                      
                                    </form>
                                    

                                </div>
                              

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        
        </div>
    );
    
    
    }
    
    export default Login;