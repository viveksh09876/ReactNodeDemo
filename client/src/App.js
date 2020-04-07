import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
import Header from './components/presentation/Header';
import Headline from './components/presentation/Headline';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import NewsArticle from './components/containers/newsArticle';

import './App.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <section className="main">
                <Headline header="Posts" desc="latest news posts" tempArr={tempArr}/>
              </section>
              <Layout>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path='/news/:id' component={NewsArticle}/>  
              </Layout>
            </BrowserRouter>
          </Provider>
          
        );
    }
}

export default App;