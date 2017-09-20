import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/Layout.js'
import Menu from './components/Menu.js'
import Find from './components/Findus.js'
import About from './components/About';


//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path= '/findus' component={Find}/>
      <Route path= '/menu' component={Menu}/>
      <Route path= '/' component={About}/>
    </Switch>
  </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
