import React from 'react';
import Places from './Components/places/places'
import Footer from './Components/footer/footer'
import Header from './Components/header/header'
import './App.css';

function App() {
  return (
    <React.Fragment> 
    <Header/>

    <Places
    title = "Half Fish, Half Lion"
    location = "Merlion Park, Singapore"
    image = "https://www.garyjwolff.com/images/singapore-the-lion-city-21757721.jpg"
    map = "https://www.google.com/maps?q=merlion+park+singapore&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjxzpa_y93uAhU8RhUIHdnVBgoQ_AUoAXoECBoQAw"
    comment = "Its a pretty nice statue."

    />
    <Places
    title = "Largest Regional Library in Europe?"
    location = "Broad Street, Birmingham"
    image = "https://www.5losttogether.com/wp-content/uploads/2019/11/Bucket-list-Taj-Mahal.jpg"
    map = "https://www.google.com/maps?q=birmingham+library&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjticj-y93uAhWwXhUIHcOcCm8Q_AUoAXoECBUQAw"
    comment = "The Plus side: Many books, many domes, all free for the public to use. The not so plus side: £188m bill means we'll have to wait 3 years for a new public bench."

    />
    <Footer/>
    
    </React.Fragment>
  );
}

export default App
