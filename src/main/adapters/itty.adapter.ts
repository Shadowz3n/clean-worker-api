import { Controller } from '@/presentation/protocols/controiller';
import { Request } from 'itty-router';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request): Promise<Response> => {
    const requestAdapted = {
      ...{ body: request.json || {} },
      ...{ query: request.query || {} },
      ...{ params: request.params || {} },
    };
    const httpResponse = await controller.handle(requestAdapted);
    return new Response(httpResponse.body, {
      status: httpResponse.statusCode,
    });
  }
}
