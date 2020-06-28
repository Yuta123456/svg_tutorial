import React from 'react';

//screens
import Header from './Header';
import DescriptionContent from './DescriptionContent';
import Footer from './Footer';
class Description extends React.Component {
    render() {
        // return では一要素しか返せないところをReactFragmentで囲ってやることでOK
        return (
            <React.Fragment>
                <Header />
                <DescriptionContent />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Description;