import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {backendurl} from '../../Servicepage';

function Profilepage() {

    const [sdata,setdatas]=useState([]);
    const {id}=useParams();

    const singleuser = () => {
        axios.get(`${backendurl}/singledata/${id}`).then((d) => {
          console.log(d.data);
          setdatas(d.data);
        });
      };
    
      useEffect(() => {
        singleuser();
      }, []);
    
  return (

    <div className='container-fluid border'>
        <div className='row'>
            <div className='col-md-10'>
                <h3 className='text-primary'>fullname:-{sdata.fullname}</h3>
                <hr/>
                <h4>{sdata.email}</h4>
                <h4>{sdata.phone}</h4>

                

            </div>
            <div className='col-md-2'>
                <img src={sdata.profile} alt={sdata._id} width={180} height={300} />
            </div>
        </div>
    </div>

)
}


export default Profilepage