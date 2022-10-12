import { useState } from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Conatiner from './components/Container'
import Button from './components/Button'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    email: '',
    lastname: ''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }
  console.log(formulario)
  console.log(formulario)
  return (
    <div style={{ marginTop: '15%' }}>
      <Conatiner>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder='Nombre'
              />
              <Input
                label="Apellido"
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
                placeholder='Apellido'
              />
              <Input
                label="Correo"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder='Correo'
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>)}
          </ul>
        </Card>
      </Conatiner>
    </div>
  )
}

export default App
