import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";



function Myhomepage() {
  const [mydata, setdata] = useState([]);

  const columns =[
    {field: '_id',headerName:'sno',width: 200},
    {field: 'fullname',headerName:'FullName',width:150},
    {field: 'email',headerName:'Email',width:300},
    {field: 'phone',headerName:'Phone',width:120},
    {field: 'dob',headerName:'DOB',width:100},
    {field: 'gender',headerName:'Gender',width:70},
    {field: 'course',headerName:'Course',width:70},
    {field: 'profile',headerName:'Profile',width:150},
    
  ]


  const myalldata = () => {
    axios.get("http://localhost:5782/allusers").then((d) => {
      console.log(d.data);
      setdata(d.data);
    });
  };

  useEffect(() => {
    myalldata();
  }, []);
     
       const mydeleterecord =(id)=>{
        axios.delete(`http://localhost:5782/deleterecord/${id}`).then((d)=>{
        console.log(d.data);
        myalldata();
        });
       }
 


  return (
    <Fragment>
      <div className="container-fluid ">
      <div className="row">
        <div className="col-md-3">
          <div class="card text-bg-primary mb-3">
            <div class="card-header">DB CALL</div>
            <div class="card-body">
              <h5 class="card-title">total users: {mydata.length}</h5>
            </div>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="col-md-12">
          <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">FullName</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">DOB</th>
      <th scope="col">phone</th>
      <th scope="col">Gender</th>
      <th scope="col">Course</th> 
      <th scope="col">Profile</th>
      <th scope="col">Action</th>



    </tr>
  </thead>
  <tbody>
    {mydata.map((d)=>{
      return(
        <tr>
      <th scope="row">{d._id}</th>
      <td>{d.fullname}</td>
      <td>{d.email}</td>
      <td>{d.phone}</td>
      <td>{d.dob}</td>
      <td>{d.phone}</td>
      <td>{d.gender}</td>
      <td>{d.course}</td>
      <td><img src={d.profile} alt={d._id} width={50}/></td>
      <td>
        <Link className="badge text-bg-primary" to={`view/`+d._id}><GrView/></Link>
        <Link class="badge text-bg-warning" to={`edit/`+d._id}><FaEdit/></Link>
        <button type="button" className="badge text-bg-danger" onClick={()=>{mydeleterecord(d._id)}} ><MdDeleteForever/></button>


      </td>
 



    </tr>

      )

    })}
    
    
  </tbody>
</table>

          </div>
        </div>
      </div>



    <div className="container-fluid">
      

      <div className="row">
        <div className="col-md-12">
          {mydata.length<=0 ? "<p>No data</p>": 
              
              <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={mydata}
              columns={columns}
              getRowId={(mydata) => mydata.name + mydata.phone}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
          

          }
        </div>
      </div>
      
    </div>
    </Fragment>
  );
}

export default Myhomepage;
