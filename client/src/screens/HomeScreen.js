import React from 'react';
import TopCard from '../components/TopCard';

function HomeScreen(props) {
    return (
        <div>
            <div className="top-card-collection">
                <div className="best-car">
                    <TopCard heading="Best Overall" image='/images/tesla-e-3.jpg' description="Overall best range and value."/>
                </div>
                <div className="range-car">
                    <TopCard heading="Top range" image='/images/tesla-e-3.jpg' description="Go far, far!"/>
                </div>
                <div className="expensive-car">
                    <TopCard heading="Luxurious" image='/images/tesla-e-3.jpg' description="For the rich."/>
                </div>
                <div className="cheap-car">
                    <TopCard heading="Affordable" image='/images/tesla-e-3.jpg' description="For the chumps."/>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;