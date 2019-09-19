import React from 'react';
//import load from '../mediaFiles/load.gif';
import '../styles/Child.css';

export const Child = (props) => {
  let display;
  console.log(props.data)
  if((!props.loading)&&(props.data!=='Not Found')){
    display = (props.data.length > 0 ) ?
        <div>

           <table className="tableStyle">

            <thead>
              <tr>
                <th><b>ID</b></th>
                <th><b>Repo Name</b></th>
                <th><b>Number of Stars</b></th>
                <th><b>Number of Forks</b></th>
              </tr>
            </thead>

            <tbody>

             {props.data.map((item, i) => {

                return (
                  <tr key={item.id}>
                    <td><b>{i+1}</b></td>

                    <td><b>{item.name}</b></td>

                    <td>{item.stargazers_count}</td>

                    <td>{item.forks_count}</td>

                  </tr>
                )
              })}

            </tbody>
          </table>
        </div> 
        
        : null

      
  }
  else if(props.loading){
    display = <div align="center">Loading..</div>
  }
   return(
         <div>{display}</div>   
        );
};


export default Child;