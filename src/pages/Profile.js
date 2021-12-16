//import React, {useState,useEffect} from 'react';
import React from 'react';
import { useState } from 'react';
import { useParams } from "react-router";
//import {useFetch} from './pages/UseFetch';
import { UseFetch } from '../pages/UseFetch';
//import axios from 'axios';
//import swal from 'sweetalert';
//import {useNavigate} from 'react-router-dom';
import Front from '../layouts/Front';

const Profile = () => {
    
    const [username, setuserName] = useState("");
    const [fullname, setfullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");

    const [error, setError] = useState();

    const { id: eid } = useParams();

    const url = `http://localhost:8000//api/profile/${eid}`;
    const [userlist, setUserList] = useState([]);
    UseFetch(url, setUserList);

    async function update() {
        console.log(username,fullname,phone, address , dob);

        // setType(userlist.type);
        setError("");
        //let item = { name, email, address, phone, image, type, password, rpass };
        const formData = new FormData();
        formData.append('username', username);
        formData.append('fullname', fullname);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('dob', dob);

        if (username ==="" || fullname ==="" || phone ==="" || address ==="" || dob ==="") {
            setError("Please fill up all the fields");
        }
        
        else {
            console.log('bosos');
            let result = await fetch(`http://localhost:8000//api/profile/${eid}`, {
                method: 'POST',
                body: formData
            });

            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            const message = localStorage.getItem('user-info')
            JSON.parse(message);
            alert(message);
        }


    }

return (
    <div>
        <Front/>
        <div className="container py-5">
                <div className="row justify-content-center">
                    <div className ="col-md-6">
                        <div className ="card">
                            <div className="card-header">
                                <div className="card-body">
                                <fieldset>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    placeholder={userlist.username}
                                    className="form-control"
                                    onChange={(e) => setuserName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder={userlist.fullname}
                                    className="form-control"
                                    onChange={(e) => setfullName(e.target.value)} />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <input type="phone"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder={userlist.phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"
                                    name="address"
                                    id="address"
                                    className="form-control"
                                    placeholder={userlist.address}
                                    onChange={(e) => setAddress(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date"
                                    name="dob"
                                    id="dob"
                                    className="form-control"
                                    placeholder="dob"
                                    onChange={(e) => setDob(e.target.value)} />
                            </td>
                        </tr>
                        
                        <tr>
                            <td> <button onClick={update} > Update</button></td>
                        </tr>
                        </tbody>
                       
                    </table>
                    {error}
                </fieldset>
                                    

                                </div>
                              

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        
    
    </div>
);


}

export default Profile;