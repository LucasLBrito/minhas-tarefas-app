import GlobalStyle from './styles'
import { Container } from './styles'
import BarraLateral from './styles/containers/barraLateral'
import ListaDeTarefas from './styles/containers/listaDeTarefas'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
