import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './ContainerComponents/MainPage';
import MyStory from './ContainerComponents/SmallComponents/MyStory';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './Redux/store'; 
import { Provider } from 'react-redux';

const App = () => {
  return (
  <Provider store={store}>
  <BrowserRouter>
  <div>
      <Route path="/" exact component={MainPage}/>
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
  
  