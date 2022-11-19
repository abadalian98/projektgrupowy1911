import React from 'react';
import Header from './Header';
import NavTop from './NavTop';
import NavLeft from './NavLeft';
import ChoiceDays from './ChoiceDays';
import Main from './Main';
import Footer from './Footer';

const Container = () => {
    return (<>
    <Header/>
    <NavTop/>
    <NavLeft/>
    <ChoiceDays/>
    <Main/>
    <Footer/>
    </>)
}
export default Container;