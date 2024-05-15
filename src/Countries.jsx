import { useState,useEffect } from "react";


const Tile=({Url,name,alt})=>{
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",border:"1px solid black",borderRadius:"8px",flexDirection:"column",width:"200px"}}>
            <img src={Url} alt={alt} style={{width:"100px",height:"100px"}} />
            <h2>{name}</h2>
        </div>
    )
}




export default function Countries(){
    const API="https://restcountries.com/v3.1/all";
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch(API)
        .then((response)=>response.json())
        .then((data)=>setCountries(data));
    },[]);
    console.log({countries});
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexWrap:"wrap"}}>
            {countries.map((country)=><Tile key={country.cca3} Url={country.flags.png} name={country.name.common} alt={country.flags.alt} />)}
        </div>
    )
}