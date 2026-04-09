import FiltroCard from '../../../components/FiltroCard'
import { Aside, Campo, Filtros } from './styles'

const barraLateral = () => (
  <Aside>
    <Campo type="text" placeholder="Buscar" />
    <Filtros>
      <FiltroCard contador={1} legenda="pendentes" ativo />
      <FiltroCard contador={2} legenda="concluídas" />
      <FiltroCard contador={3} legenda="urgentes" />
      <FiltroCard contador={4} legenda="importantes" />
      <FiltroCard contador={5} legenda="normal" />
      <FiltroCard contador={6} legenda="todas" />
    </Filtros>
  </Aside>
)

export default barraLateral
