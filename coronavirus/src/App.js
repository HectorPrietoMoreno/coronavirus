import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Country from './components/Country';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deaths: null,
      confirmed: null,
      recovered: null,
      countryList: null,
      countryNameList: null,
      submitted: false,
      loading: true
    };
    this.onOptionSelection = this.onOptionSelection.bind(this);
  }
  
  async componentWillMount() {
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
      const data = await response.json();
      const countryList = data.countries;
      const nonSortedCountryNameList = data.countries.map((country)=> {return {name: country.name, id: country.id}})
      const countryNameList = nonSortedCountryNameList.sort((a, b) => (a.id < b.id) ? -1 :  (a.id > b.id) ? 1 : 0);
      this.setState({
        data: data,
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        countryList: countryList,
        countryNameList: countryNameList,
        selectedCountry: null,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  onOptionSelection(option) {
    this.setState({selectedCountry: option});
  }

  getSelectedCountryInfo() {
    if(this.state.selectedCountry) {
      return this.state.data.countries.find(item => item.id === this.state.selectedCountry);
    }
  }


  render() {
    if (this.state.loading) {
      return (<p>Loading...</p>);
    }
    return (
      <Router>
        <div>
          <h1>Coronavirus world status</h1>
          <Switch>
            <Route exact path="/">
              <Home 
                countryNameList={this.state.countryNameList} 
                deaths={this.state.deaths} 
                confirmed={this.state.confirmed} 
                recovered={this.state.recovered}
                onSelectedCountry={this.onOptionSelection }
                />
            </Route>
            <Route path="/country">
                <Country
                  countryInfo={this.getSelectedCountryInfo()}
                  />
              </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
