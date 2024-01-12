import './App.css';
import {useState, useEffect} from "react";



const countriesData = [
  {name:'Usa', capital:'washingtonD.C.', currency:'US Dollar'},
  {name:'Afghanistan', capital:'Kabul', currency:'Afghani'},
  {name:'Australia', capital:'Canberra', currency:'Australian dollar'},
  {name:'Brazil', capital:'Brasilia', currency:'Real'},
  {name:'Bulgaria', capital:'Sofia', currency:'Lev'},
  {name:'China', capital:'Beijing', currency:'Chinese Yuan'},
  {name:'India', capital:'New Delhi', currency:'Indian Rupee'},
  {name:'Indonesia', capital:'Jakarta', currency:'Rupiah'},
  {name:'Iran', capital:'Tehran', currency:'Rial'},
  {name:'Iraq', capital:'Baghdad', currency:'Iraqi Dinar'},
  {name:'Ireland', capital:'Dublin', currency:'Euro'},
  {name:'Italy', capital:'Rome', currency:'Euro'},
  {name:'Jamaica', capital:'Kingston', currency:'Jamaican dollar'},
  {name:'Japan', capital:'Tokyo', currency:'Yen'},
  {name:'South Korea	', capital:'Seoul', currency:'Won'},
  {name:'Kyrgyzstan', capital:'Bishkek', currency:'Som'},
  {name:'Latvia', capital:'Riga', currency:'Lats'},
  {name:'Lesotho', capital:'Maseru', currency:'Maluti'},
  {name:'Lithuania', capital:'Vilnius', currency:'Litas'},
  {name:'Malta', capital:'Valletta', currency:'Euro'},
  
]



function App() {
  const pageNumbers = [];
  const totalCountries = 20;
  const [countries, setCountries] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  // const [countriesPerPage] = useState(2);
  const countriesPerPage = 2;
// for creating a pagination array
  for(let i=1; i<= Math.ceil(totalCountries/countriesPerPage); i++){
    pageNumbers.push(i);
  }

 console.log(pageNumbers)
  

  const indexOfLastCountry = currPage*countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currcountries = countriesData.slice(indexOfFirstCountry, indexOfLastCountry);
  


  const handlePage = (e)=>{
    // console.log(e.target.innerText);
    setCurrPage(+e.target.innerText);
  
  }

  

  useEffect(()=>{
    //
    setCountries(currcountries);
    // console.log(countries);
  }, [currPage])
  return (
    <div className="App" id="container">
         {
          countries.map((i, ind )=>(
            <div  key={ind} style={{border:"1px solid black"}}>
            <p>Name: {i.name}</p>
            <p>Capital: {i.capital}</p>
            <p>Currency: {i.currency}</p>
            </div>
          ))

          

         }

         <div>
          {
            pageNumbers.map((page, i) =>(
              <button  disabled={currPage === page} key={i} onClick={handlePage}>{page}</button>
            )    
            )
          }
         </div>
    </div>
  );
}

export default App;
