import { Card, Contador, Label } from './styles'
import { useDispatch } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefas'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'status' | 'prioridade' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificarSeEstaAtivo = () => {
    const mesmoValor = valor === filtro.valor
    const mesmoCriterio = criterio === filtro.criterio

    return mesmoValor && mesmoCriterio
  }
  const contadorDeTarefas = () => {
    if (criterio === 'todas') {
      return tarefas.itens.length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.estado === valor).length
    }
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }
  const contador = contadorDeTarefas()

  const estaAtivo = verificarSeEstaAtivo()

  return (
    <Card ativo={estaAtivo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Label>{legenda}</Label>
    </Card>
  )
}

export default FiltroCard
