import './App.css'
import Ejemplo from './Components/Ejemplo'
import Estudiante from './Components/Estudiante'
import Estudi from './Components/Estudiante'
const titleStyle = {
  backgroundColor: 'green',
  color: 'black',
  fontSize: '20px',
  padding: 100,
}

function App() {
  //Parte lógica sintaxis Js

  const auto = {
    name: '',
    marca: 'Fiat',
    modelo: '600',
    status: 'ok',
    color: 'purple',
  }
  const arr = ['Flor', 'Oclivar', 'Analia']

  // const marca = auto.marca
  // const modelo = auto.modelo
  // const color = auto.color

  const { marca, modelo, color } = auto
  console.log(marca, modelo, color)

  // const name1 = arr[0]
  // const name2 = arr[1]
  // const name3 = arr[2]

  const [name1, name2, name3] = arr
  console.log('flor: ', name1, ' Oclivar: ', name2, ' Analia: ', name3)

  const saludo = () => {
    console.log('Hola que tal?')
  }

  return (
    <div>
      {/* Sintaxis HTML */}
      <h1 style={titleStyle}>Volvemos a las 20:17!!</h1>
      <h1>Hola coders!</h1>
      <h2
        className='titulo2'
        style={{
          backgroundColor: color == 'red' ? 'red' : 'white',
          color: color === 'red' ? 'white' : 'black',
        }}
      >
        {marca} - {modelo}
      </h2>
      <button onClick={saludo}>Saludar</button>
      <h3>{color}</h3>
      <Ejemplo />
      <Estudiante />
    </div>
  )
}

export default App
