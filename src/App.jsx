import './App.css';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import { Routes, Route } from 'react-router-dom'

import  AboutPage  from 'pages/AboutPage/About';
import  ContactsPage  from 'pages/ContactsPage/ContactsPage';
import  FAQPage  from 'pages/FAQPage/FAQPage';
import HomePage  from 'pages/HomePage/HomePage'
import  LineUpPage  from 'pages/LineUpPage/LineUpPage';
import  NewsPage  from 'pages/NewsPage/NewsPage';
import  RulesPage  from 'pages/RulesPage/RulesPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" Component={ HomePage }/>
        <Route exact path="/about" Component={ AboutPage }/>
        <Route exact path="/lineUp" Component={ LineUpPage }/>
        <Route exact path="/news" Component={ NewsPage }/>
        <Route exact path="/rules" Component={ RulesPage }/>
        <Route exact path="/contacts" Component={ ContactsPage }/>
        <Route exact path="/FAQ" Component={ FAQPage }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
