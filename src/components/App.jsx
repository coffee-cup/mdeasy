import React, { Component } from 'react';

// import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Interface from './interface/Interface.jsx';

class App extends Component {
    render() {
        return (
            <div className="main mw100 full">

                <Interface />
                <Footer />

            </div>
        );
    }
}

export default App;

