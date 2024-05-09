import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './customfont.css';

//cd into client and run "npm start" command

function App(){

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/members").then(
          res => res.json()
      ).then(
          data => {
            setData(data)
            console.log(data)
          }
      )
  }, [])

  return(
      <div style={{ textAlign: 'center', fontFamily: 'CustomFont, Spectral'}}>
        <h1 fontFamily="CustomFont, Spectral" style={{ fontSize: '120px'}}>Paul's Website</h1>
        <img src={logo} alt="Logo" style={{width: '300px', height: '300', marginTop: '-130px'}} /> {logo.png}
        <div style={{textAlign: 'left'}}>
          {(typeof data.members === 'undefined') ? (
              <p>Loading...</p>
          ) : (
              data.members.map((member, i) => (
                <p key={i} fontFamily="CustomFont, Spectral" style={{ fontSize: '90px' }}>{member}</p>
            ))
          )}
        </div>
      </div>
  )
}

export default App