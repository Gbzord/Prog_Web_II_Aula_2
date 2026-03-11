import express from 'express'
const app = express()

// Indicar para o express ler o body como json
app.use(express.json())

import router from '../routes.js'
app.use(router)

export default app