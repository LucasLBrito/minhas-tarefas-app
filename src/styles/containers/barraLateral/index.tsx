import FiltroCard from '../../../components/FiltroCard'
import { Aside, Filtros } from './styles'
import { Campo, Botao } from '../../index'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { alteraTermo } from '../../../store/reducers/filtro'
import * as enums from '../../../utils/enums/tarefas'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  return (
    <Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <Filtros>
              <FiltroCard
                criterio="status"
                valor={enums.Status.PENDENTE}
                legenda="pendentes"
              />
              <FiltroCard
                criterio="status"
                valor={enums.Status.CONCLUIDA}
                legenda="concluídas"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.URGENTE}
                legenda="urgentes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.IMPORTANTE}
                legenda="importantes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.NORMAL}
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </Filtros>
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
