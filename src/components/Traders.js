import React, { Component } from 'react'
import Trader from './Trader'

export default class Traders extends Component {
  render() {
      const { traders } =  this.props 

      console.log("Traders in Traders component", traders)
    return (
      <div className="row">




  

       
            
         
          { traders.map( t => (
                  
                    <Trader key={t.id} trader={ t } >
                    </Trader>
                ))}    
        <h2>I Am a Traders</h2>
     
      </div>
    )
  }
}
