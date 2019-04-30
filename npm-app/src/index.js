import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

/* stores */
import stores from './stores';

/* styles */
import './index.css';

/* views */
import App from './components/views/App';

/* use mobx strict mode */
configure({
    enforceActions: true
});

ReactDOM.render((
    <Provider { ...stores }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
