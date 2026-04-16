import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as enums from '../../utils/enums/tarefas'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar javascript',
        'Estudar javascript',
        1,
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE
      ),
      new Tarefa(
        'Estudar TypeScript',
        'Estudar TypeScript',
        2,
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA
      ),
      new Tarefa(
        'Estudar Python',
        'Estudar Python',
        3,
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE
      )
    ] as Tarefa[]
  },
  reducers: {
    removerTarefa: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { removerTarefa } = tarefaSlice.actions
export default tarefaSlice.reducer
