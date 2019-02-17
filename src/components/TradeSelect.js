import React, { Component } from 'react'

export default class TradeSelect extends Component {
    handleChange = (e) => {
        console.log("Handling Chagnge", e)
    } 
  render() {
    const { trades, onTradeChange } =  this.props

    let optionTemplate = []
    console.log("trades", trades)
    if (trades) { 
        optionTemplate = trades.map(v => (
            <option key={v.id} value={v.id}>{v.tradename}</option>
        ));
    } else {
    }
    console.log("Options", optionTemplate)

    return (
      <div>
          <label>
        Pick your favorite Number:
        <select value={trades.value} onChange={ onTradeChange.bind(this) }>
          {optionTemplate }
        </select>
      </label>
        
      </div>
    )
  }
}
