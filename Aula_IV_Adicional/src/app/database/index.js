import conexao from '../../../infra/conexao.js';

// Função para obter todas as seleções
export const getSelecoes = () => {
  return new Promise((resolve, reject) => {
    conexao.query('SELECT * FROM selecoes', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para obter seleção por ID
export const getSelecaoById = (id) => {
  return new Promise((resolve, reject) => {
    conexao.query('SELECT * FROM selecoes WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para inserir nova seleção
export const insertSelecao = (selecao, grupo) => {
  return new Promise((resolve, reject) => {
    conexao.query('INSERT INTO selecoes (selecao, grupo) VALUES (?, ?)', [selecao, grupo], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para atualizar seleção
export const updateSelecao = (id, selecao, grupo) => {
  return new Promise((resolve, reject) => {
    conexao.query('UPDATE selecoes SET selecao = ?, grupo = ? WHERE id = ?', [selecao, grupo, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para deletar seleção
export const deleteSelecao = (id) => {
  return new Promise((resolve, reject) => {
    conexao.query('DELETE FROM selecoes WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};