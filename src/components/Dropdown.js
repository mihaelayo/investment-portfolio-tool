import React from 'react'


function Dropdown(props) {

  return (

    <div className='dropdown'>
      <select onChange={(e)=> {
        const selectedBank = e.target.value;
        props.setBank(selectedBank)
      }}>
      <option value=""></option>
        <option value="Commerzbank">Commerzbank</option>
        <option value="citi">CITI</option>
        <option value="Santander">Santander</option>
      </select>
    </div>
  )
}

export default Dropdown