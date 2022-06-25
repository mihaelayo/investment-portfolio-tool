import React from 'react'
import { useNavigate } from 'react-router-dom'
import bankIcon from '../assets/bank.svg'

function Info() {

  let navigate = useNavigate();

  return (
    <div className='container'>
      <div className='info-text'>Advisory meeting with Jane Blakestone</div>
      <div className='text-body'>Hi Jane Blakestone, looking forward to our meeting on Friday 16.06.2023
      To provide the most tailored advice, we need to have an overview of your current investments. Your bank can provide us this information on your behalf.
    </div>
    <ul className='text-body-small'>
      <li>Connect effortlessly at your trusted home bank</li>
      <li>Your data belongs to you</li>
      <li>investment account data is analysed</li>
      <li>Connection is secured and encrypted</li>
    </ul>
    <button onClick={()=> {navigate('/data')}}>
      <img src={bankIcon} alt="bank-icon" className='bank-icon'/>
      <div>Synch information from your home bank</div>
    </button>
    <a href='#0' className='text-body-terms'>
    Data protection document <br></br>
    Terms and Conditions
    </a>
  </div>
  )
}

export default Info