import React, { Component } from 'react';
import { Link } from "gatsby"

import Search from "../zilker/Search"

import "./scss/components/SiteIntro.scss"
import img from "./img/community-collaboration.jpg"

class SiteIntro extends Component {

    render() {
        return (
            <section className="usa-section usa-grid">
                <div className="row">
                    <div class="container">
                        <img src={img} alt="Austin Community" class="image" />
                        <div class="content">
                            <h1>City of Austin Campus Collaborations</h1>
                            <p>"Enter description provided by client here... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." <a href="/about">Learn more about this website.</a>
                            </p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 coa-SearchBar" >
                                    <Search />
                                </div>
                                <div className="col-xs-12 col-sm-6 coa-SiteIntro__link">
                                    <Link to="/projects">View All Tracked Collaborations</Link>
                                </div>
                            </div> </div> </div> </div>
            </section>
        );
    }

}

export default SiteIntro;
