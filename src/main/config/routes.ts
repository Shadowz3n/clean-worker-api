import { errorRouter } from '@/main/routes/error.routes';
import { loginRouter } from '@/main/routes/login.routes';
import { swaggerRouter } from '@/main/config/swagger';

export const routes = [
  ...swaggerRouter.routes,
  ...loginRouter.routes,
  ...errorRouter.routes,
];
