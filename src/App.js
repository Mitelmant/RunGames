import logo from './logo.svg';
import './App.css';
import 'vanilla-tilt';

function App() {
  return (
    <body>
      <div className='card-shape' data-tilt>
        <img className='card-image' src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d823e0070b5f6e85f55bb68739e879f0.jpg"></img>
        <div className='card-text'>
          <div className='title'>Diablo 4</div>
          <div className='info'>BLah Blah Blah</div>
          <div className='launch'>Launch</div>
        </div>
      </div>
      {/* <script type="text/javascript" src="vanilla-tilt.js"></script> */}
    </body>
  );
}

export default App;