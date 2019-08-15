import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad;
    const positive = all ?  (props.good*100)/all : 0;

    const stats = all === 0 ? <p>no feedback given</p>: <div>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="all" value={all}/>
        <Statistic text="average" value={+all / 3}/>
        <Statistic text="positive" value={`${positive}%`}/>
    </div>
    return (
        stats
    );
};

const Statistic = (props) => {
    return (
        <div>
            <p>{props.text} {props.value}</p>
        </div>
    );
};


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>give feedback</h2>

            <button onClick={() =>setGood(good+1)}>good</button>
            <button onClick={() =>setNeutral(neutral+1)}>neutral</button>
            <button onClick={() => setBad(bad+1)}>bad</button>

            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
