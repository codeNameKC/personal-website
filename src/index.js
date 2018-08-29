import React from 'react';
import ReactDOM from 'react-dom';
import MyStory from './Components/MyStory';
import ContainerComponent from './ContainerComponent'; 
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './Redux/store'; 
import { Provider } from 'react-redux';

const App = () => {
  return (
  <Provider store={store}>
  <BrowserRouter>
  <div>
      <Route path="/" exact component={ContainerComponent}/>
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
  
  