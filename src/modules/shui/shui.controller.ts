import { Controller, Get, Query } from '@nestjs/common';
import { ShuiService } from './shui.service';
import { Device, type DeviceType } from 'src/decorators/device.decorator';
import { genResponse } from 'src/common/response';

@Controller('/shui')
export class ShuiController {
  constructor(private readonly shuiService: ShuiService) {}

  @Get('/')
  async agent(@Query() query, @Device() device: DeviceType) {
    const { agent, ip } = device;
    await this.shuiService.insertInfo(agent, 'home', ip);
    return genResponse(null);
  }

  @Get('/agent_list')
  async agentList(@Device() device: DeviceType) {
    const { agent, ip } = device;
    await this.shuiService.insertInfo(agent, 'ip', ip);
    const ipList = await this.shuiService.findAll();
    return genResponse(ipList);
  }
}
