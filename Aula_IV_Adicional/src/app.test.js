import request from 'supertest';
import app from './app.js';

describe('API de Seleções', () => {
  it('deve retornar todas as seleções', async () => {
    const response = await request(app).get('/selecoes');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('deve retornar uma seleção por ID', async () => {
    const response = await request(app).get('/selecoes/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });


  it('deve criar uma nova seleção', async () => {
    const novaSelecao = { id: 5, selecao: 'Argentina', grupo: 'C' };
    const response = await request(app).post('/selecoes').send(novaSelecao);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Seleção cadastrada com sucesso!');
  });

  it('deve atualizar uma seleção', async () => {
    const updateData = { selecao: 'Brasil Atualizado', grupo: 'C' };
    const response = await request(app).put('/selecoes/1').send(updateData);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Seleção atualizada com sucesso!');
  });

  it('deve deletar uma seleção', async () => {
    const response = await request(app).delete('/selecoes/1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Seleção excluida com sucesso');
  });
});