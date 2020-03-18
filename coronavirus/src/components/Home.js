import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
        const DEFAULT_COUNTRY = null;
        this.state = {
            deaths: props.deaths,
            confirmed: props.confirmed,
            recovered: props.recovered,
            selectedOption: DEFAULT_COUNTRY,
            options: props.countryNameList
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const selectedOption = e.target.options[e.target.selectedIndex].value;
        this.setState({selectedOption: selectedOption});
        this.props.onSelectedCountry(selectedOption);         
    }
    handleSubmit() {
        this.props.history.push('/country');
    }

    render() {
        return (
            <div id="Home">
                <section id="Summary">
                    <p>Confirmed: {this.state.confirmed}</p>
                    <p>Deaths: {this.state.deaths}</p>
                    <p>Recovered: {this.state.recovered}</p>
                </section>
                <section id="Selection">
                    <p>Choose an specific country: </p>
                    <select onChange={(e) => this.handleChange(e)}>
                        {this.state.options.map((country, i) => (<option key={country.id} value={country.id}>{country.name}</option>))}
                    </select>
                    <button id="Submit" onClick={(e) => this.handleSubmit(e)}> Submit </button>
                </section>
            </div>
        );
    }


}

export default withRouter(Home);