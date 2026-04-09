import * as S from './styles'
import { useState } from 'react'

type Props = {
  titulo: string
  descricao: string
  prioridade: string
  status: string
}

const Tarefa = ({ titulo, descricao, prioridade, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao}></S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          // Se estiver editando, mostra os botões Salvar e Cancelar
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          // Se não estiver editando, mostra os botões Editar e Excluir
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Excluir</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
