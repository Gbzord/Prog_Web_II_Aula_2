import { getSelecoes, getSelecaoById, insertSelecao, updateSelecao, deleteSelecao } from '../database/index.js';

// Controller para listar todas as seleções
export const listarSelecoes = async (req, res) => {
  try {
    const selecoes = await getSelecoes();
    res.json(selecoes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar seleções');
  }
};

// Controller para obter seleção por ID
export const obterSelecao = async (req, res) => {
  try {
    const { id } = req.params;
    const selecao = await getSelecaoById(id);
    if (selecao.length === 0) {
      res.status(404).send('Seleção não encontrada');
    } else {
      res.json(selecao[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao obter seleção');
  }
};

// Controller para criar nova seleção
export const criarSelecao = async (req, res) => {
  try {
    const { selecao, grupo } = req.body;
    await insertSelecao(selecao, grupo);
    res.status(201).send('Seleção criada com sucesso');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar seleção');
  }
};

// Controller para atualizar seleção
export const atualizarSelecao = async (req, res) => {
  try {
    const { id } = req.params;
    const { selecao, grupo } = req.body;
    const result = await updateSelecao(id, selecao, grupo);
    if (result.affectedRows === 0) {
      res.status(404).send('Seleção não encontrada');
    } else {
      res.send('Seleção atualizada com sucesso');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar seleção');
  }
};

// Controller para deletar seleção
export const deletarSelecao = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteSelecao(id);
    if (result.affectedRows === 0) {
      res.status(404).send('Seleção não encontrada');
    } else {
      res.send('Seleção deletada com sucesso');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar seleção');
  }
};