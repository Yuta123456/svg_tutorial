import React from 'react';

class Footer extends React.Component {
    render() {
        var twitter_style = {
            color : "cyan",  
        }
        var github_style = {
            color : "black",
        }
        var qiita_style = {
            width:40,
        }
        return (
            <footer className="footer has-text-centered">
                <div>
                    <div className="columns">
                        <span className="column"></span>
                        <span className="column"><a href="https://twitter.com/nayuta999999"><i className="fab fa-twitter fa-2x" style={twitter_style}></i></a></span>
                        <span className="column"><a href="https://github.com/Yuta123456" ><i className="fab fa-github fa-2x" style={github_style}></i></a></span>
                        <span className="column"><a href="https://qiita.com/nayuta9999" ><img src="favicon.png" style={qiita_style}></img></a></span>
                        <span className="column"></span>
                    </div>
                    <p class="title">By Tanaka Yuta</p>
                </div>
            </footer>
        );
    }
    
}
export default Footer;
