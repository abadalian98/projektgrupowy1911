import React from 'react';
import Header from './Header';
import NavTop from './NavTop';
import NavLeft from './NavLeft';
import ChoiceDays from './ChoiceDays';
import Main from './Main';
import Footer from './Footer';
import "../styles/Container.css";

const Container = () => {
    return (<div className="container">
    <Header/>
    <NavTop/>
    <NavLeft/>
    <ChoiceDays/>
    <Main/>
    <Footer/>
    </div>)
}
export default Container;