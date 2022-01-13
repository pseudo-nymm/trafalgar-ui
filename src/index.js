import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/nav.scss';
import './styles/header.scss';
import './styles/servicesSection.scss';
import './styles/aboutUsSection.scss';
import './styles/appsSection.scss';
import './styles/testimonialsSection.scss';
import './styles/articlesSection.scss';
import './styles/footer.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

