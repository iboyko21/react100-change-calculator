import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aDue: "",
      aReceived: "",
      change: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
        [event.target.id]: event.target.value
    });
}

  handleOnClick(){
    
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
                  <label htmlFor="total" className="control-label">How much is due?</label>
                  <input type="number" step="0.01" id="aDue" name="aDue" className="form-control" value={this.state.aDue} onChange={this.handleOnChange}></input>
                </div>

                <div className="form-group">
                  <label htmlFor="received" className="control-label">How much was received?</label>
                  <input type="number" step="0.01" id="aReceived" name="aReceived" className="form-control" value={this.state.aReceived} onChange={this.handleOnChange}></input>
                </div>
              </div>

              <div className="card-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleOnClick}>Calculate</button>
              </div>
              
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
              <p className="bg-success p-2 text-center rounded">Total Change due is</p>

              <div className="container">
                <div className="row text-center">
                  <div className="col-sm border rounded bg-light mr-3">
                    <p>Twenties</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light mr-3">
                  <p>Tens</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light mr-3">
                  <p>Fives</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light">
                  <p>Ones</p>
                    <p>0</p>
                  </div>
                </div>

                <div className="row text-center">
                  <div className="col-sm border rounded bg-light mr-3 mt-3">
                    <p>Quarters</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light mr-3 mt-3">
                    <p>Dimes</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light mr-3 mt-3">
                    <p>Nickels</p>
                    <p>0</p>
                  </div>
                  <div className="col-sm border rounded bg-light mt-3">
                    <p>Pennies</p>
                    <p>0</p>
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
