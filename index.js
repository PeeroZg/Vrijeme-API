import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherForecast from './WeatherForecast';
import background from './assets/background.mp4';
import './styles.css';
import blackcircle from './assets/blackcircle.jpg';
import wpblack from './assets/wpblack.jpg'
import logo from './assets/logo.png'

function App() {
  return (
    <>

<div>

    <WeatherForecast/>
    
    <div className="background-video">
    <img src={logo} alt="logo" className='logoo' />
    <video autoPlay muted loop src={background} />
<div className='wpblackimg'>
  <img src={wpblack} alt="backgroundimg" />
  </div>
    <div className='blackcircleimg'>
    <img src={blackcircle} alt="Weather circle" className="weather-circle" />
    </div>
    </div>
    </div>
    


    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

