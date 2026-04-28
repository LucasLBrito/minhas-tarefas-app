import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as enums from '../../utils/enums/tarefas'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      {
        titulo: 'Estudar javascript',
        descricao: 'Estudar javascript',
        id: 1,
        prioridade: enums.Prioridade.URGENTE,
        estado: enums.Status.PENDENTE
      },
      {
        titulo: 'Estudar TypeScript',
        descricao: 'Estudar TypeScript',
        id: 2,
        prioridade: enums.Prioridade.URGENTE,
        estado: enums.Status.CONCLUIDA
      },
      {
        titulo: 'Estudar Python',
        descricao: 'Estudar Python',
        id: 3,
        prioridade: enums.Prioridade.URGENTE,
        estado: enums.Status.PENDENTE
      }
    ] as Tarefa[]
  },
  reducers: {
    removerTarefa: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editarTarefa: (state, action: PayloadAction<Tarefa>) => {
      const indiceDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indiceDaTarefa >= 0) {
        state.itens[indiceDaTarefa] = action.payload
      }
    },
    adicionarTarefa: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaExistente = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (TarefaExistente) {
        return alert('Já existe uma tarefa com esse título')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const novaTarefa: Tarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indiceDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indiceDaTarefa >= 0) {
        state.itens[indiceDaTarefa].estado =
          action.payload.finalizado === true
            ? enums.Status.CONCLUIDA
            : enums.Status.PENDENTE
      }
    }
  }
})

export const { removerTarefa, editarTarefa, adicionarTarefa, alteraStatus } =
  tarefaSlice.actions
export default tarefaSlice.reducer
