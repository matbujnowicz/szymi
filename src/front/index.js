import './style.css';
import { useState } from 'react';
import Result from '../result/index'
import Start from '../start/index'
import data from '../data'

function Front() {
  const [szymi, setSzymi] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      {szymi?  <Result szymi={szymi} restart={()=>setSzymi(null)} />: <Start loading={loading} startLoading={startLoading}/>  }
    </div>
  );

  function startLoading() {
    setLoading(true)
    setTimeout(callback,2000)
  }

  function callback() {
    const index = Math.floor(Math.random() * data.length)
    setSzymi(data[index])
    setLoading(false)
  }
}


export default Front;
