import React from 'react';

function InfoScreen(props) {
    return (
        <div className="info-container">
            <h1>
                Why Go Electric?
            </h1>
            <hr />
            <section>
                <h2>
                    Fight Climate Change
                </h2>
                <p>
                    If your electricity is generated by coal or other fossil fuels, you could argue that driving an EV doesn't make much difference to carbon emissions. But EVs make total sense in B.C., where 97% of the electricity we generate is clean.
                </p>
            </section>
            <section>
                <h2>
                    Save on Fuel Costs
                </h2>
                <p>
                    Electricity is not only cleaner, it's also a lot cheaper. Most EV owners in B.C. do the bulk of their charging at home or at work. This means that they're usually only paying the regular residential rate - and maybe even charging for free at work.
                </p>
                <p>
                    Based on BC Hydro rates, this means that a Nissan Leaf can travel 100 km for just $2 in electricity costs – a tiny fraction of what it would cost to drive an equivalent gas-powered car the same distance.
                </p>
            </section>
            <section>
                <h2>
                    Fewer Maintenance
                </h2>
                <p>
                    EVs have far fewer moving mechanical parts than gas-powered vehicles, so there's a lot less to go wrong. Braking is different in an EV, with the vast majority of slowing and stopping performed by regenerative braking. So an EV's traditional friction brakes get used much less. Anecdotal evidence from drivers suggests those friction brakes can last up to 300,000 km or more before being replaced.
                </p>
                <p>
                    Once you move to an electric vehicle, you can also say goodbye to oil changes. In fact, a Canadian EV cost study published in September 2018 concluded that on average, there was a 47% maintenance cost saving for electric vehicles over gas-powered vehicles.
                </p>
            </section>
            <section>
                <h2>
                    Amazing Driving Experience
                </h2>
                <p>
                    Driving an EV is a refreshingly different experience. You'll be amazed how quiet and fast it is, and reassured by all the efficiency information on display.
                </p>
            </section>
            <footer>
                <p>
                    All information obtained from&nbsp;
                    <a 
                        href="https://electricvehicles.bchydro.com/learn/benefits-of-driving-EV" 
                        target='_blank' 
                        rel="noreferrer"
                    >bchydro.com</a>
                </p>
            </footer>
        </div>
    )
}

export default InfoScreen;