import { EmailAuthController } from "@/presentation/controllers/auth/email.auth.controller";
import { RegisterController } from "@/presentation/controllers/auth/register.controller";
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { Router } from "itty-router";

const loginRouter = Router({
  base: '/v1/auth'
});

loginRouter.get('/email', adaptRoute(new EmailAuthController()));
loginRouter.get('/email/register', adaptRoute(new RegisterController()));

export { loginRouter };
