import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Gambar from "./assets/images/gambar1.png";
import Quotes from "./components/Quotes";

const quotes = "Disaat payung teduh ku dengar , disitulah tugas terbabat abis";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
    name="Ahmad Hufron" 
    nim="21120118120028" 
    kelompok="27" 
    isNameBold
    image={Gambar}
     />
     <Quotes author="Ahmad Hufron" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
