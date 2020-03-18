import React, { Component } from 'react';


class Country extends Component {

    render() {
        debugger;
        return (
            <div id="country">
                <p>{this.props.countryInfo.name} status!</p>
                <p>Confirmed: {this.props.countryInfo.confirmed}</p>
                <p>Deaths: {this.props.countryInfo.deaths}</p>
                <p>Recovered: {this.props.countryInfo.recovered}</p>
            </div>
        );
    }


}

export default Country;