import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


function Myregistorpage() {

    const appnavigate =useNavigate();

    const updateinput =(e)=>{
        const {name,value} = e.target;
        setdata((a) =>{
            return{
                ...a,
                [name]:value
            }
        })
    }

    const [insdata,setdata]=useState({
      fullname:"",
      email:"",
      phone:"",
      dob:"",
      gender:"",
      course:"",
      profile:"",
      pass:""

      });

    const registerpage = async()=>{

        const {fullname,email,phone,dob,gender,course,profile,pass} = insdata;
        const mydata = await fetch("http://localhost:5782/createdata",{
            method: "POST",
            headers: {"content-type":"application/json"}, 
            body: JSON.stringify({
                fullname,email,phone,dob,gender,course,profile,pass
            })
        })
        const res = await mydata.json();
        console.log(res);
        if(res.status===255)
        {
            alert("data submited succesfully")
            appnavigate("/")

        }
        else if(res.status===409)
        {
            alert("email allready used")
        }
        else if(res.status===450)
            {
                alert("name must be 3 digit")
            }
        

        
    }






  return (
    <form >
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-8 p-3'>
                    <div className='container-fluid border p-5 bg-light shadow'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h2>New User Registor Page</h2>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Full Name</label>
                                <input type='text' className='form-control' placeholder='Full Name' name='fullname' onChange={updateinput} value={insdata.fullname} />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Email Id</label>
                                <input type='email' className='form-control' placeholder='email' name='email' onChange={updateinput} value={insdata.email} />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Phone No</label>
                                <input type='text' className='form-control' placeholder='phone' name='phone' onChange={updateinput} value={insdata.phone} />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">DOB</label>
                                <input type='date' className='form-control' name='dob' onChange={updateinput}/>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Gender</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="male" onChange={updateinput}   />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="female"  onChange={updateinput}/>
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Course</label>
                                <select className='form-select' name='course'  onChange={updateinput} value={insdata.course} >
                                    <option>Mern</option>
                                    <option>Mean</option>
                                    <option>java</option>
                                    <option>UI/UX</option>
                                </select>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">profile picture</label>
                                <input type='text' className='form-control' placeholder='profile' name='profile' onChange={updateinput} value={insdata.profile}  />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">password</label>
                                <input type='password' className='form-control' placeholder='password' name='pass' onChange={updateinput} value={insdata.pass}  />
                            </div>
                            

                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='button' value="Registor Now" className='btn btn-success'onClick={registerpage} />
                                <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                                <Link to="/">login page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  ) 
}

export default Myregistorpage