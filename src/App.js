import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import Players from './components/Players'
import Team from './components/Team'
import "./styles/styles.scss"

/*


 */

function App() {
  return (
    <Provider store={store}>
        <main>
            <h1>EdManager</h1>
            <Players/>
            <Team/>
        </main>
    </Provider>
  );
}

export default App;
