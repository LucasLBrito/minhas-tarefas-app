import GlobalStyle from './styles'
import { Container } from './styles'
import BarraLateral from './styles/containers/barraLateral'
import ListaDeTarefas from './styles/containers/listaDeTarefas'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
