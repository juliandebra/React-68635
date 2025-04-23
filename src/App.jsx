import { Header, ItemListContainer } from './Components'
import Item from './Components/ItemListContainer/Item'
import ParentComp from './Components/ParentComp'
import { useInput } from './hooks/useInput'

function App() {
  // const name = useInput('', 'text')
  // const email = useInput('', 'email')
  // console.log(name)
  return (
    <>
      {/* 
        Ejemplo de Custom Hook
      <form>
        <label>Nombre: </label>
        <input {...name} />
        <label>Email:</label>
        <input {...email} />
        <button>Enviar</button>
        <h3>Nombre: {name.value}</h3>
        <h3>Email: {email.value}</h3>
      </form> */}
      {/* Ejemplo 1 de Children
      
      <ParentComp /> */}

      {/* 
      Ejemplo 2 de Children
      <Item title='Pepito' description='QA Engineer' id={1}>
        <h3>Facebook</h3>
        <h3>Linkedin</h3>
      </Item>
      <Item title='System Analyst' description='Job description' id={2} /> */}

      <Header />
      <ItemListContainer />
    </>
  )
}

export default App

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//   event.preventDefault()
// })
