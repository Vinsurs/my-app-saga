import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import store from './store';
// import { getListSync } from './store/action-creators';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <List />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
