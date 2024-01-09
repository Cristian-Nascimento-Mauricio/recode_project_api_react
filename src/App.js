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
            {list.map(element => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.date}</td>
                <td>{element.boarding}</td>
                <td>{element.destiny}</td>
                <td>{element.price}</td>
                <td>{element.promotion}</td>
                <td>{element.price * element.promotion}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </main>

    </div>
    
  );
}

export default App;
