import React from 'react'
import graph from '../assets/graph.png'


const fetchAndLog = async () => {
    const response = await fetch('https://still-oasis-28539.herokuapp.com/assets');
    const json = await response.json();
    console.log(json);
}

fetchAndLog();

function ImportSuccess() {
  return (
    <div className='container'>
      <div className='info-text'>Your investment data has been successfully uploaded!</div>
      <div className='text-body'>Now we can analyze your portfolio</div>
      <img src={graph} alt="graph" className='graph'/>
      <button>Finish</button>
      <a href='/data' className='container-add-another'>
        <div className='text-body-small'>
        Would you like to add another investment account?
        </div>
      </a>
    </div>
  )
}

export default ImportSuccess