import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="not-found main mw100">
                <div className="grid-noGutter-centered bg-red full center-vertical gutter-small">
                    <div className="col-9_xs-12 animated fadeIn">
                        <h1 className="f1 mv0 near-black mono">
                            {"¯\_(ツ)_/¯"}
                        </h1>
                        <h2 className="f3 mb0 near-black">
                            404 Page not found. <a href="/"> Go home</a>.
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

