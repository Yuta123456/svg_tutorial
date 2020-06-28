import React from 'react';
import { NavLink } from 'react-router-dom';
class DescriptionContent extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="content"></div>
                <div className='content'>
                    <h1 className='title'>使用方法</h1>
                    描画したいグラフを入力してください。
                    まず一行目にノード数とエッジの数を空白区切りで入力。
                    その後に、辺の接続情報を空白区切りで入力してください
                </div>
                <div className='content'>
                    <h1 className='title'>入力例</h1>
                    8 12<br/>
                    1 6<br/>
                    1 7<br/>
                    1 8<br/>
                    2 5<br/>
                    2 6<br/>
                    3 5<br/>
                    3 6<br/>
                    4 5<br/>
                    4 8<br/>
                    5 6<br/>
                    5 7<br/>
                    7 8<br/>
                </div>
                <div>
                    <h1 className='title'>出力例</h1>
                    <img src="example.png"></img>
                </div>
                <div className="buttons is-centered are-medium">
                    <button className='button is-rounded is-primary is-outlined '><NavLink exact to="/Input">Let's make graph</NavLink></button>
            
                </div>
                <div>
                    <h1 className='title'>参考文献</h1>
                    <a href="https://computing2.vdslab.jp/">https://computing2.vdslab.jp/</a><br/>
                    <a href="https://esa-pages.io/p/sharing/8704/posts/496/3ea7904b529048712e3e.html#SVG%EF%BC%88Scalable%20Vector%20Graphics%EF%BC%89">https://esa-pages.io/p/sharing/8704/posts/496/3ea7904b529048712e3e.html#SVG%EF%BC%88Scalable%20Vector%20Graphics%EF%BC%89</a>

                </div>
            </div>
        );
    }
}
export default DescriptionContent;