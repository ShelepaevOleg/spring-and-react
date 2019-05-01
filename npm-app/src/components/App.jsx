import React from 'react';

/* templates */
import {Header, Main, Footer} from "./templates";

const App = () => (
        <div>
            <div className="content-wrapper">
                <Header />
                <Main />
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
);
export default App;
