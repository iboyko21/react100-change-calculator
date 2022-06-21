import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      changeDue: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
   
  handleOnChange(event) {
    this.setState({
        [event.target.id]: event.target.value
    });
}

  handleOnClick(){
    let returnValue = (this.state.amountReceived - this.state.amountDue) * 100;    
    let change = {};
    const coinTypes = ["twenty", "ten", "five", "dollar", "quarter", "dime", "nickle", "penny"];
    const coinValues = [2000, 1000, 500, 100, 25, 10, 5, 1];

    let amount;
    for (let i = 0; i < coinValues.length; i++){
        amount = Math.floor(returnValue/coinValues[i]);
        if (amount > 0) {
            change[coinTypes[i]] = amount;
            returnValue = returnValue % coinValues[i];
        } else if (amount == 0){
          change[coinTypes[i]] = 0;
        }
    }
    // console.log(change);
    
    this.setState({
      changeDue: (this.state.amountReceived - this.state.amountDue).toFixed(2),
      twenties: change.twenty,
      tens: change.ten,
      fives: change.five,
      ones: change.dollar,
      quarters: change.quarter,
      dimes: change.dime,
      nickels: change.nickle,
      pennies: change.penny
    });
  }

  render() {
    return (
      <div className="container">
        <header className="py-3 mb-4 border-bottom">
          <h1 className="text-white">Change Calculator</h1>
        </header>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="amountDue" className="control-label"><b>How much is due?</b></label>
                  <input type="number" step="0.01" id="amountDue" name="amountDue" className="form-control" value={this.state.amountDue} onChange={this.handleOnChange}></input>
                </div>

                <div className="form-group">
                  <label htmlFor="amountReceived" className="control-label"><b>How much was received?</b></label>
                  <input type="number" step="0.01" id="amountReceived" name="amountReceived" className="form-control" value={this.state.amountReceived} onChange={this.handleOnChange}></input>
                </div>
              </div>

              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" onClick={this.handleOnClick}>Calculate</button>
              </div>
              
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
              <div className="alert alert-success text-center">The total change due is ${this.state.changeDue}</div>

              <div className="container">
                <div className="row text-center g-2">
                  <div className="col-sm border rounded bg-light">
                    <h3>Twenties</h3>
	                  <p className="change">{this.state.twenties}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Tens</h3>
	                  <p className="change">{this.state.tens}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Fives</h3>
	                  <p className="change">{this.state.fives}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Ones</h3>
	                  <p className="change">{this.state.ones}</p>
                  </div>
                </div>

                <div className="row g-1 text-center">
                  <div className="col-sm border rounded bg-light">
                    <h3>Quarters</h3>
	                  <p className="change">{this.state.quarters}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Dimes</h3>
	                  <p className="change">{this.state.dimes}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Nickels</h3>
	                  <p className="change">{this.state.nickels}</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                    <h3>Pennies</h3>
	                  <p className="change">{this.state.pennies}</p>
                  </div>
                </div>
              </div>

              </div>
            </div>


          </div>
        </div>
      </div>

    );
  }
}

export default App;
