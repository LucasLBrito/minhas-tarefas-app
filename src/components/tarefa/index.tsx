import * as S from './styles'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  removerTarefa,
  editarTarefa,
  alteraStatus
} from '../../store/reducers/tarefas'
import TarefaModel from '../../models/Tarefas'
import { Botao, BotaoSalvar, BotaoCancelarRemover } from '../../styles'
import * as enums from '../../utils/enums/tarefas'

type Props = TarefaModel

const Tarefa = ({
  titulo,
  descricao: descricaoOriginal,
  prioridade,
  estado,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function alteraStatusTAREFA(evento: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={estado === enums.Status.CONCLUIDA}
          onChange={alteraStatusTAREFA}
        />
        <S.Titulo>
          {estaEditando && <em>Editando:</em>}
          {titulo}
        </S.Titulo>
      </label>

      <S.Tag $prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag $status={estado}>{estado}</S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      ></S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          // Se estiver editando, mostra os botões Salvar e Cancelar
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editarTarefa({
                    id,
                    descricao,
                    prioridade,
                    estado,
                    titulo
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover
              type="button"
              onClick={() => {
                setEstaEditando(false)
                setDescricao(descricaoOriginal)
              }}
            >
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          // Se não estiver editando, mostra os botões Editar e Excluir
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(removerTarefa(id))}>
              Excluir
            </BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
