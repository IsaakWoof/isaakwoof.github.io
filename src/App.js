import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './discomp/Header';



function App() {
  return (
    <div className="main mt-4 mb-4" style={{ 
        backgroundImage: `url("https://i.pinimg.com/originals/ff/71/51/ff71518f09ba4778843c8885c270aef4.jpg")` 
      }}>
     < Header />
    </div>
  );
}
export default App;