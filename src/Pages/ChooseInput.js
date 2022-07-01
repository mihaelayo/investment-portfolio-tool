import React, { useState } from 'react'
import Dropdown from '../components/Dropdown.js'
import addDocument from '../assets/add-document.svg'
import lock from '../assets/lock.svg'
import { useNavigate } from 'react-router-dom'

export default function ChooseInput() {

  const [ bank, setBank ] = useState("")

  let navigate = useNavigate();

  const openBank = url => {
    window.open(url, '_blank', 'popup, width=900px, height=600px');
  };

  return (
    <div className='container'>
      <div className='container-dropdown'>
        <div>Select the bank you would like to add</div>
        <Dropdown setBank = {setBank} />
      </div>


      <div className='container-security'>
          <img src={lock} alt="lock icon" className='lock-icon'/>
          <div className='text-body'>Our AI will only view your investment account data and nothing more.
          It's enough for us to analyse and give you the best advice we can. Your login data will not be stored and the connection is secured with SSL</div>
      </div>

      <div className='button-container'>
      {bank !== ""  && <button onClick={()=> {navigate('/success'); openBank('https://api-sandbox.commerzbank.com/auth/realms/sandbox/protocol/openid-connect/auth?response_type=code&client_id=aab6de52-86ad-4734-8761-779d1fa5deb4&redirect_uri=https://still-oasis-28539.herokuapp.com/login/oauth2/callback/commerz')}}>Continue to {bank}</button>}
      </div>

      <a href='/data' className='container-add-document'>
        <img src={addDocument} alt='add document icon' className='add-document-icon'/>
        <div className='text-body-small'>
        Your bank is not in the list? You can upload the PDF reports from your investment accounts.
        </div>
      </a>
    </div>
  )
}

