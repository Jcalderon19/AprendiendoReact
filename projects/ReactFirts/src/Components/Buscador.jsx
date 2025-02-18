import { useState } from "react";
export function Navbar(){
    const [activeTab, setActiveTab] = useState("parati");
    
    return(
        <>
        <button  className={`nav-button ${activeTab === "parati" ? "active" : ""}`}
        onClick={() => setActiveTab("parati")}><span>Para ti</span></button>
        <button className={`nav-button ${activeTab === "siguiendo" ? "active" : ""}`}
        onClick={() => setActiveTab("siguiendo")}><span  >Siguiendo</span></button>
        </>
    ) 
}