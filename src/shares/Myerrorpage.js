import React from 'react'

function Myerrorpage() {
  return (
    <Fragment>
    <div className='myerror'>
        <h1>404</h1>
        <div>Not Found Page</div>
        <Link to="/" className='btn btn-danger mt-5'>Back to Home Page</Link>
    </div>
</Fragment >
  )
}

export default Myerrorpage