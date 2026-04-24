import * as S from './styles'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removerTarefa, editarTarefa } from '../../store/reducers/tarefas'
import TarefaModel from '../../models/Tarefas'
import { Botao, BotaoSalvar, BotaoCancelarRemover } from '../../styles'

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

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={estado}>{estado}</S.Tag>
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
