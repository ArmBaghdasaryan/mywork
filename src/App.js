import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homePage';
import { Route, Redirect } from 'react-router-dom';
import './styles/global.css';
import Footer from './components/footer';
import ContactPage from "./pages/contactPage";
import ApplyPage from "./pages/applyPage";
import CoursePage from "./pages/coursesPage";
import ReactNativePage from "./pages/reactNativePage";
import JavaScriptPage from "./pages/javaScriptPage";
import HeaderMobile from "./components/headerMobile";
import PhytonPage from "./pages/phytonPage";
import ReactPage from "./pages/reactPage";
import AboutPage from './pages/aboutPage/aboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HeaderMobile />
      <Route exact path={'/'}>
        <Redirect to={'/home'} />
      </Route>
      <Route path={'/home'} component={HomePage} />
      <Route path={'/apply'} component={ApplyPage} />
      <Route path={'/contact'} component={ContactPage} />
      <Route path={'/course'} component={CoursePage} />
      <Route path={'/about'} component={AboutPage} />
      <Route path={'/reactNative'} component={ReactNativePage} />
      <Route path={'/javaScript'} component={JavaScriptPage} />
      <Route path={'/phyton'} component={PhytonPage} />
      <Route path={'/react'} component={ReactPage} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
