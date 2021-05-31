import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default class CountriesList extends Component {
    state = {

    }

    render() {

            <div>
                <h1> Countries List </h1>
                {countries.map((country) => {
                    return (
                        <div key={country.cca3}>
                            <Link to={`/countriesList/${country.cca3}`}>
                                {country.name}
                            </Link>
                        </div>
                    );
                })} 
            </div>

    };
};
