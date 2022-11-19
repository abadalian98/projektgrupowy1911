import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import PageGold from "./PageGold";
import {useState, useEffect} from "react";
import "../styles/Main.css";

const Main = () => {
    const [goldPrice, setGoldPrice] = useState('');
    useEffect(()=>{
        axios
        .get(`http://api.nbp.pl/api/cenyzlota`)
        .then((response) =>{
            console.log(response.data[0].data);
            console.log(response.data[0].cena);
        })
        .catch((err) =>{
            console.error(err.message);
        });
    }, []);
    
    return ( <main className="main">
        <Routes>
            <Route path="/gold" element={<PageGold/>} />

        </Routes>
    </main> );
}
 
export default Main;