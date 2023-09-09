import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [module,setModule] = useState([])
  const aply = ()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setModule([...res.data])
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <div className='container'>
        <button onClick={aply} >okay</button>
        <div className='row p-5'>
          {
            module.map((e,i)=>{
              return<>
              <div className='col-md-4  p-5 '>
            <div className='outline'>
            <img src={e.image} width='100%' height={250}/>
            <h3 className='p-3'>
             {e.title}
            </h3>
            <p className='px-3'>
             {e.description}
            </p>
            <div className='d-flex p-3'>
<div className='mx-2' >
  <button className='btn px-3 btn-primary'  >{e.price}</button>
</div>
<div className='mx-2'>
  <button className='btn px-3 btn-primary'  >buy Now</button>
</div>
            </div>
            </div>
          </div>
              </>
            })
          }






          
           </div>
      </div>
    </div>
  );
}

export default App;
