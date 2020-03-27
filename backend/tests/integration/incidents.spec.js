const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents creation', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new incident for an existing NGO', async () => {
        
        // Create a NGO
        const ngo_id = await request(app)
            .post('/ngos')
            .send({
                name: "APAD",
                email: "apad@gmail.com",
                whatsapp: "5551987654321",
                city: "Lajeado",
                uf: "RS"
            });

        /*
        // Get the id of the first NGO
        const ngos = await request(app)
            .get('/ngos');

        console.log(ngos.body);
        const ngo_id = ngos.body[0].id;
        */

        // Create incident
        const response = await request(app)
            .post('/incidents')
            .set('Authorization', ngo_id)
            .send({
                title: "Caso Lola",
                description: "Detalhes do caso.. Detalhes do caso.. Detalhes do caso.. Detalhes do caso...",
                value: 122.5
            })
            .expect(200);

        expect(response.body).toHaveProperty('id');
    });
});
