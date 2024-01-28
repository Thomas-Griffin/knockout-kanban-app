import request from 'supertest'
import KanbanDatabase from '../../types/kanbanDatabase'
import * as fs from 'fs'

const server = 'http://localhost:3000'

const db: KanbanDatabase = JSON.parse(fs.readFileSync('db.json', 'utf8'))

describe('Task Routes', () => {
  describe('GET /tasks', () => {
    it('should return all tasks', async () => {
      const response = await request(server).get('/tasks');
      expect(response.body).toEqual(db.tasks);
    });
  });
});