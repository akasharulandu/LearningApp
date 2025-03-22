import React from 'react';
import { Card } from 'antd';
    

const Dashboard = () => (
  <Card
    style={{
      // width: 1000,
      // height: 100,
      // padding:'0px',
      border:'2px solid',
      backgroundColor: '#9667e3',
      color: '#fff',
      borderRadius: 5,
    
      // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      // display: 'flex',
      //  justifyContent:'center',
      //  marginLeft: '18px',
      //  borderBlock: 'none',derBlock: 'none',derBlock: 'none',
       
    }}
    
  >
   <div>   
    <h1 style={{marginTop:'0', padding:'0', display:'inline-block',marginBlock:'0',}}>Welcom back, User!</h1>
    <p style={{marginTop:'10', padding:'0', marginBlock:'0', justifyContent:'flex'}}>Always stay updated with your code learning software</p>
    </div>
  </Card>
);
export default Dashboard;