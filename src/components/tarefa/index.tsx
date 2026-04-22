import * as S from './styles'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removerTarefa, editarTarefa } from '../../store/reducers/tarefas'
import TarefaModel from '../../models/Tarefas'

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
            <S.botaoSalvar
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
            </S.botaoSalvar>
            <S.botaoCancelarRemover
              type="button"
              onClick={() => {
                setEstaEditando(false)
                setDescricao(descricaoOriginal)
              }}
            >
              Cancelar
            </S.botaoCancelarRemover>
          </>
        ) : (
          // Se não estiver editando, mostra os botões Editar e Excluir
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.botaoCancelarRemover onClick={() => dispatch(removerTarefa(id))}>
              Excluir
            </S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
