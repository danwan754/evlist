import React from 'react';

function ChargingScreen(props) {
    return (
        <div className="info-container">
            <h1>
                Charging
            </h1>
            <hr />
            <section>
                <h2>
                    3 Levels of Charging
                </h2>
                <div className="inline-lists">
                    <div className="list-container">
                        <h3>
                            Level 1 chargers
                        </h3>
                        <ul>
                            <li>120-volt outlet (standard home outlets)</li>
                            <li>charges 8 km per hour</li>
                            <li>takes 12 to 20 hours to fully charge</li>
                            <li>mostly used in homes</li>
                        </ul>
                    </div>
                    <div className="list-container">
                        <h3>
                            Level 2 chargers
                        </h3>
                        <ul>
                            <li>240-volt outlet (like those used by ovens, dryer)</li>
                            <li>charges 30 km per hour</li>
                            <li>takes 6 to 14 hours to fully charge</li>
                            <li>used in homes, businesses, and public areas</li>
                        </ul>
                    </div>
                    <div className="list-container">
                        <h3>
                            Level 3 chargers (Fast Chargers)
                        </h3>
                        <ul>
                            <li>directly connected to an electrical system</li>
                            <li>charges 100km per 30 minutes</li>
                            <li>takes 1 to 4 hours to fully charge</li>
                            <li>mostly used in businesses and public areas</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h2>
                    Public Charging
                </h2>
                <p>
                    There are now more than 1,000 public charging stations in B.C and more are being added.
                    <br/><br/>
                    Most public charging stations are easy to find via&nbsp;
                    <a href="https://www.plugshare.com/" target="_blank" rel="noreferrer"><b>PlugShare</b></a>, a smartphone app and website. You can quickly use PlugShare's filters (network and plug type) to zero in on the stations that work best for you and your vehicle.
                    PlugShare is the most comprehensive, up-to-date tool for finding charging stations in North America, Europe, and Asia.
                </p>
            </section>
        </div>
    )
}

export default ChargingScreen;