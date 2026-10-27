import express from 'express'

import healthRoutes from './routes/health.routes.js'
import sessionRoutes from './routes/session.routes.js'

const app = express()

app.use( express.json() )

app.use('/api/health', healthRoutes)
app.use('/api/sessions', sessionRoutes )


export default app;