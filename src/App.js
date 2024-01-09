import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [list,setList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5158/api/Values",{method:"GET"})
    .then(res => res.json())
    .then(data => setList(data))
    .catch(console.log("Erro lista não carregada"))
  },[])

  useEffect(()=>console.log(list),[list])

  return (
    <div className="App">
      <header>
        <h1>Projeto recode api </h1>
      </header>
      <div className='containerButton'>
        <p>Pegar por faixa de preço.</p>
        <div className='containerInputs'>
          <p>Mínino:  </p>
          <input id='lowest' type='number'></input>
          <p>Máximo: </p>
          <input id='tallest' type='number'></input>
        </div>

        <button onClick={updateList}>Okay</button>

      </div>
      <main>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Data</th>
              <th>Embarque</th>
              <th>Destino</th>
              <th>Valor</th>
              <th>Desconto</th>
              <th>Valor com Desconto</th>
            </tr>
          </thead>
          <tbody>

            {
              list.length > 0 ? 
              list.map(element => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.date}</td>
                  <td>{element.boarding}</td>
                  <td>{element.destiny}</td>
                  <td>{element.price}</td>
                  <td>{element.promotion}</td>
                  <td>{element.price * element.promotion}</td>

                </tr>
              )) : (<></>)           
            }
          </tbody>
        </table>
      </main>

    </div>
    
  );

  function updateList(){

    let lowest = document.getElementById('lowest').value 
    let tallest = document.getElementById('tallest').value 

    console.log(lowest ? 0:lowest,tallest ? 10000:tallest)

    fetch(`http://localhost:5158/api/Values/${lowest ? lowest:0}/${tallest ? tallest:999999}`,{method:"GET"})
    .then(res => res.json())
    .then(data => setList(data))
    .catch(console.log("Erro lista não carregada"))

  }

}



export default App;
