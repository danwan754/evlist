import React from 'react';
import Footer from '../components/Footer';

function RebateScreen(props) {
    return (
        <div className="info-container">
            <h1>
                Rebates
            </h1>
            <section>
                <h2>
                    BC's Vehicle Rebate
                </h2>
                <p>
                Residents, businesses, non-profit organizations and local government organizations leasing or buying a new electric vehicle in B.C. are eligible for a $3,000 off the after-tax vehicle price, thanks to the government of B.C.'s 
                &nbsp;<a href="https://www.cevforbc.ca/" target="_blank" rel="noreferrer">CEVforBC™</a> program. Through this program, EVs with a MSRP under $55,000 will qualify for the rebate.
                </p>
            </section>
            <section>
                <h2>
                    Federal Vehicle Rebate
                </h2>
                <p>
                    The federal government is also offering a rebate of $5000 for EVs with a base model that has a MSRP of $45,000 or less. Trims of these models can have a MSRP of up to $55,000 and still qualify for the rebate.
                </p>
                <p>
                    Federal rebate program details can be found&nbsp;
                    <a 
                        href="https://tc.canada.ca/en/road-transportation/innovative-technologies/zero-emission-vehicles"
                        target="_blank"
                        rel="noreferrer"><b>here</b></a>.
                </p>
            </section>
            <section>
                <h2>
                    Charger Rebate
                </h2>
                <p>
                    BC had a program that provided rebates for the purchase and installation of level 2 chargers for homes and businesses.
                </p>
                <p>
                    This program has expired as of February 28, 2021. It is currently under review for renewal.
                </p>
                <p>
                    If the program reopens, it would offer single-family homes a rebate of up to 50% of the purchase and installation costs of an eligible Level 2 EV charger, to a maximum of $350 to $700 (exact rebate amount subject to funding approval). This includes duplexes or townhouses with private garages or dedicated parking.
                </p>
                <p>
                    Find more details about this program for single family homes, condo/apartments buildings, and workplaces&nbsp;
                    <a 
                        href="https://electricvehicles.bchydro.com/incentives/charger-rebates"
                        target="_blank"
                        rel="noreferrer"><b>here</b></a>.
                </p>
            </section>
            <Footer link="https://electricvehicles.bchydro.com/incentives/charger-rebates" />
        </div>
    )
}

export default RebateScreen;