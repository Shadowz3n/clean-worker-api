import { serve, setup } from 'swagger-ui-express';
import swaggerConfig from '@/main/docs';
import { Router } from 'itty-router';

const swaggerRouter = Router();

// swaggerRouter.get('/docs', setup(swaggerConfig));

export { swaggerRouter };
