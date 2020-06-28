import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class InputContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    saveText(){
        var text = document.querySelector('textarea').value;
        return this.props.update(text);
    }
    render() {
        return (
            <div className='container'>
                {/*エラー処理しなきゃいけないのマジでだるい */}
                <div className="content"></div>
                <div className="content">
                    <h1 className="title">グラフを入力してください</h1>
                    <label class="checkbox">
                        <input type="checkbox" onChange={() => {this.props.setCol()}}/>
                            出次数に応じて色を付ける
                    </label>
                </div>
                
                <section>
                    <textarea className='textarea is-hovered' rows='10' id ='input' name='input'>
                        
                    </textarea>
                </section>
                <div>
                    {/* saveというボタンを押すとonclickでstateの値を変更してあげる */}
                    {/* このページの下に表示しようぜ */}
                    <div className="buttons is-centered are-medium">
                    <button className="button is-rounded is-primary is-outlined" type='submit' onClick={() => {this.saveText()}}>Look Result</button>
                        <button className='button is-rounded is-primary is-outlined '><NavLink exact to="/">Back home</NavLink></button>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default InputContent;