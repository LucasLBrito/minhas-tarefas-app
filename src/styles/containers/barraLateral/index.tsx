import FiltroCard from '../../../components/FiltroCard'
import { Aside, Campo, Filtros } from './styles'

const barraLateral = () => (
  <Aside>
    <Campo type="text" placeholder="Buscar" />
    <Filtros>
      <FiltroCard ativo />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
    </Filtros>
  </Aside>
)

export default barraLateral
