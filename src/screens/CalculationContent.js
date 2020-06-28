import React from 'react';
import { NavLink } from 'react-router-dom';
var src = [];
var tar = [];
var x = [];
var y = [];
var vx = [];
var vy = [];
let n, m;
const width = window.innerWidth *3 / 4, height = window.innerHeight *3 / 4;
var minDistance = 0.001;
class CalculationContent extends React.Component {
    constructor(props){
        super(props);
        this.state={color:false};
    }
    render() {
        var nodes = [];
        var lines = [];
        calcPoint(this.props.text);
        var degree = Array(n);
        degree.fill(0);
        for(var i = 0;i < m;i++){
            degree[src[i]-1] += 1;
            degree[tar[i]-1] += 1;
        }
        var maxDegree = Math.max.apply(null, degree);
        console.log(degree);
        for(var i = 0;i < n;i++){
            var color = "#ffffff";
            if (this.props.colored){
                color = "#" + ('00' + (parseInt( degree[i]  * 255 / maxDegree)).toString(16)).slice(-2) + (180).toString(16) + (180).toString(16);
                console.log(color);
            }
            nodes.push( <g>
                            <circle cx={x[i]} cy={y[i]} r={20} fill={color} stroke="black"/>);
                            <text x={x[i]} y={y[i]} textAnchor="middle" dominantBaseline="central">{i+1}</text>
                        </g>
            )
        }
        console.log(lines);
        for(var i = 0;i < src.length;i++){
            var s = src[i] - 1;
            var t = tar[i] - 1;
            lines.push(<line x1={x[s]} y1={y[s]} x2={x[t]} y2={y[t]} stroke="black"/>);
        }
        if (x.length === 0){
            return (
                <div></div>
            );
        }else{
            return (   
                <section>
                    <div className="container">
                        <h1 className='title'>結果</h1>
                        <div>
                            <svg width={width} height={height}>
                                {lines}
                                {nodes}
                            </svg>
                        </div>
                        <div className="buttons is-centered are-medium">
                            <button className="button is-rounded is-primary is-outlined"><NavLink exact to="/">Back home</NavLink></button>
                        </div>
                    </div>
                </section>
            );
        }
    }
}
function updatePosition() {
    for (var i = 0; i < n; ++i) {
      x[i] += vx[i];
      y[i] += vy[i];
    }
}
function updateVelocity() {
    applySpringForce(0.01, 50.0);
    applyRepulsiveForce(300.0);
    applyCenteringForce(0.1);
    applyResistanceForce(0.1);
}
function applyResistanceForce(k) {
    for (var i = 0; i < n; ++i) {
      vx[i] += -k * vx[i];
      vy[i] += -k * vy[i];
    }
}
function applyCenteringForce(strength) {
    for (var i = 0; i < n; ++i) {
        vx[i] += (width / 2 - x[i]) * strength;
        vy[i] += (height / 2 - y[i]) * strength;
    }
}

function applyRepulsiveForce(q) {
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < n; ++j) {
            if (i === j) {
                continue;
            }
            var d = distance(i, j);
            var w = -q / (d * d);
            vx[i] += (x[j] - x[i]) * w;
            vy[i] += (y[j] - y[i]) * w;
        }
    }
}
function applySpringForce(k, L) {
    for (var i = 0; i < m; ++i) {
      var s = src[i]-1;
      var t = tar[i]-1;
      var d = distance(s, t);
      var theta = Math.atan(y[s] - y[t], x[s] - x[t]);
      var w = k * (L - d);
      vx[s] += w * Math.cos(theta);
      vy[s] += w * Math.sin(theta);
      vx[t] -= w * Math.cos(theta);
      vy[t] -= w * Math.sin(theta);
    }
}
function distance(i, j) {
    return Math.max(minDistance, Math.sqrt( Math.pow( x[i] - x[j], 2 ) + Math.pow( y[i] - y[j], 2 ) ));
}
function calcPoint(text){

    const input = text.replace(/(\r\n|\n|\r)/gm, ' ').split(' ');
    n = Number(input[0]);
    m = Number(input[1]);
    x = [];
    y = [];
    vx = [];
    vy = [];
    src = [];
    tar = []
    for(var i = 0;i < n;i++){
        x.push(Math.random() * width);
        y.push(Math.random() * height);
        vx.push(0.0);
        vy.push(0.0);
    }
    for(var i = 1;i <= m; i++){
        src.push(Number(input[i*2]));
        tar.push(Number(input[i*2 + 1]));
    }
    for(var i = 0; i < 100;i++){
        console.log(x);
        updatePosition();
        updateVelocity();
    }   

}
export default CalculationContent;