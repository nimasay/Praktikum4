import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return(
      <div> <hr />

         <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
          <Link class="navbar-brand" to="/"></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" 
            Saria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><Link class="nav-link" to="/">Beranda</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/tentangsaya">Tentang Saya</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/karya">Karya</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/kontak">Kontak</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/list">List</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <p><Utama /></p> */}
        <Utama />
        
      </div>
    )
  }
}

export default App;