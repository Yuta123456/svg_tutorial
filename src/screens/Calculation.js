import React from 'react';

//screens
import Header from './Header';
import CalculationContent from './CalculationContent';
import Footer from './Footer';

class Calculation extends React.Component {
    render() {
        // return では一要素しか返せないところをReactFragmentで囲ってやることでOK
        return (
            <React.Fragment>
                <Header />
                <CalculationContent />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Calculation;