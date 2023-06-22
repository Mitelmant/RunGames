import './App.css';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const {options, ...rest} = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options)
  }, [options]);

  return <div ref={tilt} {...rest} />
}

function App() {
  const options = {
    reverse:                false,
    max:                    10,
    startX:                 0,
    startY:                 0,
    perspective:            1000,
    scale:                  1,
    speed:                  300,
    transition:             true,
    axis:                   null,
    reset:                  true,
    "reset-to-start":       true,
    easing:                 "cubic-bezier(.03,.98,.52,.99)",
    glare:                  true,
    "max-glare":            0.33,
    "glare-prerender":      false,
    "mouse-event-element":  null,
    gyroscope:              true,
    gyroscopeMinAngleX:     -45,
    gyroscopeMaxAngleX:     45,
    gyroscopeMinAngleY:     -45,
    gyroscopeMaxAngleY:     45,
  }

  return (
    <Tilt className="card-shape" options={options}>
      <img className="card-image" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d823e0070b5f6e85f55bb68739e879f0.jpg"></img>
      <div className="card-text">
        <div className="title">Diablo 4</div>
        <div className="info">Blah blah blah</div>
        <div className="launch">Launch</div>
      </div>
    </Tilt>
  );
}

export default App;