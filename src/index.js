import React from 'react';
import ReactDOM from 'react-dom';
import { Groove, useGroove } from 'react-groove';
import './styles.css';

const messages = [
  { left: '10%', top: '10%', message: 'Welcome to our tour!' },
  { left: '10%', top: '60%', message: 'Here is a step' },
  { left: '60%', top: '60%', message: 'Here is another step' }
];

const Bubble = ({ message, left, top, next, prev, ...props }) => (
  <Groove.Step>
    <div className="bubble" style={{ left, top }}>
      <p>{message}</p>
      <div>
        <button onClick={prev}>Back</button>
        <button onClick={next}>Next!</button>
      </div>
    </div>
  </Groove.Step>
);

function App() {
  const [state, { prev, next }, bind] = useGroove(messages.length);
  return (
    <React.Fragment>
      <Groove {...bind()}>
        {messages.map(msg => (
          <Bubble key={msg} {...msg} next={next} prev={prev} />
        ))}
      </Groove>
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
