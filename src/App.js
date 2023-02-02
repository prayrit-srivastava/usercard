import './App.css';
import Icon from './Component/Icon';
import React, { useEffect, useState } from "react";
import './App.css';
import Grid from './Component/Grid';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import * as ReactBootstrap from 'react-bootstrap';


function App() {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  
  
  
  const handleClick = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://reqres.in/api/users', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
  
        const result = await response.json();

        setData(result);
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };


  return (
  <>
  <div id ="Navbar">
    <Icon/>
    <button id ="but" onClick={handleClick}>Get User</button>
  </div>
    {
    isLoading
    ?(<ReactBootstrap.Spinner animation="border" id="spinner"/>)
    :
    (
    <div className='users'>
    {
    data.data.map((item, index) => {
              return (
                <div key = {index} className ="grid">
                <Grid id = {item.id} name = {item.first_name + " " + item.last_name} email = {item.email} ava = {item.avatar}/>
                </div>
              )
            })
    }
    </div>
    )
    }
  </>
  );
}

export default App;
