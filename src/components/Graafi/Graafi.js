import React from 'react';
import './graafi.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import testdata from '../testdata.js'; 

function Graafi(props)
{
  	return (
        <div className="baarit">
    	<BarChart width={400} height={300} data={testdata}
            margin={{top: 20, right: 30, left: 0, bottom: 5}}>
       <CartesianGrid strokeDasharray="2 2"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Bar dataKey="hours" stackId="a" fill="#8884d8" />
       
      </BarChart>
      </div>
    );
  




            } //function Graafi end
    
    
    



export default Graafi;