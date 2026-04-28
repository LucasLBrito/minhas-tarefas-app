import BarraLateral from '../../styles/containers/barraLateral'
import ListaDeTarefas from '../../styles/containers/listaDeTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
