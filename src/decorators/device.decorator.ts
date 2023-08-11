import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import * as requestIp from 'request-ip';

export type DeviceType = { ip: string; agent: string };

export const Device = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): DeviceType => {
    try {
      const req = ctx.switchToHttp().getRequest();
      const { clientIp, headers } = req;

      const agentByHeader = headers['user-agent'];
      const userIp = requestIp.getClientIp(req);

      const reg = /\((.*?)\)/;
      const agent = reg.exec(agentByHeader)[0];

      if (clientIp) return { ip: clientIp, agent };

      const ip = userIp.startsWith('::ffff:') ? userIp.substring(7) : null;
      return { ip, agent };
    } catch (err) {
      console.log('get device error:', err);
    }
  },
);
