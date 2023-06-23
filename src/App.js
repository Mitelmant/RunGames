import './App.css';
import { useEffect, useRef, useState } from 'react';
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
  const [flyout, toggleFlyout] = useState(false);

  const options = {
    max: 10,
    scale: 1.05,
    glare: true,
    "max-glare": 0.33,
  }

  return (
    <Tilt className={`${flyout ? "card-shape flyout" : "card-shape"}`} onClick={() => toggleFlyout((current) => !current)} options={options}>
      <img className="card-image" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/137bbbfdf66395b40d543a9ec56d3c8a.jpg"></img>
      <div className="card-text">
        <div className="title">Solasta: Crown of the Magister</div>
        <div className="info">Roll for initiative, take attacks of opportunity, manage player location and the verticality of the battle field in this Turn-Based Tactical RPG based on the SRD 5.1 Ruleset. In Solasta, you make the choices, dice decide your destiny.</div>
        <a className="launch" href="https://youtu.be/p7YXXieghto" target="_blank">Launch</a>
      </div>
    </Tilt>
  );
}

export default App;