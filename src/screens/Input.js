import React from 'react';

//screens
import Header from './Header';
import InputContent from './InputContent';
import CalculationContent from './CalculationContent';
import Footer from './Footer';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: '',
          color: false,
        }
    }
    textUpdate(input){
        this.setState({text : input});
    }
    setColored(){
      this.setState({color : ! this.state.color});
      console.log(this.state.color);
    }
    render() {
        // return では一要素しか返せないところをReactFragmentで囲ってやることでOK
        return (
            <React.Fragment>
                <Header />
                <InputContent update={(x) => this.textUpdate(x)} setCol = {() => this.setColored()}/>
                <CalculationContent text={this.state.text} colored={this.state.color}/>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Input;