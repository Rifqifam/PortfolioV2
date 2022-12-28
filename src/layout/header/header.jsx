import React from 'react'
import Nav from './components/nav/nav';

const header = () => {
  return (
    <div className='section header'>
      <div className='row header_row'>
        <div className='header_row_leftcol'>
          <h2>Rifqifam</h2>
        </div>
        <div className='header_row_rightcol'>
          <Nav/>
        </div>
      </div>
    </div>
  )
}

export default header