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
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.33,
  }

  return (
    <Tilt className="card-shape" options={options}>
      <img className="card-image" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/137bbbfdf66395b40d543a9ec56d3c8a.jpg"></img>
      <div className="card-text">
        <div className="title">Solasta: Crown of the Magister</div>
        <div className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus. Nulla facilisi cras fermentum odio eu. Diam quam nulla porttitor massa. Est velit egestas dui id ornare arcu odio ut sem.</div>
        <a className="launch" href="https://youtu.be/p7YXXieghto" target="_blank">Launch</a>
      </div>
    </Tilt>
  );
}

export default App;