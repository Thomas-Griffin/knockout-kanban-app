import request from 'supertest'
import KanbanDatabase from '../../types/kanbanDatabase'
import * as fs from 'fs'

const server = 'http://localhost:3000'

const db: KanbanDatabase = JSON.parse(fs.readFileSync('db.json', 'utf8'))

describe('Column Routes', () => {
  describe('GET /columns', () => {
    it('should return all columns', async () => {
      const response = await request(server).get('/columns');
      expect(response.body).toEqual(db.columns);
    });
  });
});