import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [personajes,setPersonajes] =useState([])
  const [pagina,setPagina] = useState(1)
  let [resultadoTres, setResultadotres] = useState('')
  


  //useEffect(parametro1,dependencia)
  // no tenga nada==> que se ejecuta cada vez que se renderiza
  //[] se ejecuta una vez
  //[variables]cada vez que se cambie el valor de la variable, se ejecuta
  console.log('se ejecuta')
  useEffect(()=>{
        console.log('se ejecuta useEffect')
        // js
        // fecth("https://rickandmortyapi.com/api/character")
         // .then(valor=>valor.json())
        const obtenerPersonajes= async ()=>{
          const response =await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
          setPersonajes(response.data.results)
        }
        obtenerPersonajes()
      },[pagina])

      const busqueda=(e) =>{
        console.log(e.target.value)
        resultadoTres=personajes.filter(elemento=>elemento.name.toLowerCase().includes(e.target.value))
        setPersonajes(resultadoTres)
      }


    console.log('se termino de ejecutar')
      return (
        <>
        <div className='contenedor'>
          <div>
            <input type="text" placeholder='ingrese el nombre' onChange={(e)=>busqueda(e)}/>

          </div>
          {personajes.map((elemento)=>(
            <div key={elemento.id}>
            <h2>{elemento.name}</h2>
            <img src={elemento.image}/>
            </div>
            ))}
           
      <div className='botones'>  
        <button onClick={()=> setPagina(pagina-1)}>Anterior</button>
        <button onClick={()=> setPagina(pagina+1)}>Siguiente</button>  
      </div> 

    </div>
        </>
      )
    }
    
    export default App
    
      
    



