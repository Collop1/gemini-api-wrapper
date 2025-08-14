import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { load } from 'js-yaml';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import geminiRoutes from './routes/geminiRoutes.js';
import { globalErrorHandler } from './errors/globalErrorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Read and parse the OpenAPI/Swagger file
const swaggerFile = fs.readFileSync(join(__dirname, 'swagger', 'openapi.yaml'), 'utf8');
const swaggerDocument = load(swaggerFile);

// Serve Swagger UI at /swagger endpoint
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/generate', geminiRoutes);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/swagger`);
});