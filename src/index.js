import React from 'react';
import ReactDOM from 'react-dom';
import Multiplier from './ContainerComponents/Multiplier';
import MyStory from './ContainerComponents/MyStory';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './Redux/store'; 
import { Provider } from 'react-redux';

const App = () => {
  return (
  <Provider store={store}>
  <BrowserRouter>
  <div>
      <Route path="/" exact component={Multiplier}/>
      <Route path="/MyStory" exact component={MyStory}/> 
  </div>
  </BrowserRouter>
  </Provider>
  )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
  
  