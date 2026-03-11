import { getSelecoes, getSelecaoById, insertSelecao, updateSelecao, deleteSelecao } from '../database/index.js';

// Repository para seleções - abstrair o acesso aos dados
export class SelecaoRepository {
  // Obter todas as seleções
  static async findAll() {
    return await getSelecoes();
  }

  // Obter seleção por ID
  static async findById(id) {
    const result = await getSelecaoById(id);
    return result.length > 0 ? result[0] : null;
  }

  // Criar nova seleção
  static async create(selecao, grupo) {
    return await insertSelecao(selecao, grupo);
  }

  // Atualizar seleção
  static async update(id, selecao, grupo) {
    return await updateSelecao(id, selecao, grupo);
  }

  // Deletar seleção
  static async delete(id) {
    return await deleteSelecao(id);
  }
}