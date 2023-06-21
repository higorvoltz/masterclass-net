import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket.members.respository';

@Controller('api')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}
  @Post('v1/rocket-member')
  async addMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }

  // @Get('v1/rocket-member')
  // async getAllMembers(): Promise<CreateTeamMemberBody[]> {
  //   return await this.rocketMembersRepository.findAll();
  // }

  // @Get('v1/rocket-member/:id')
  // async getMemberById(@Param('id') id: number): Promise<CreateTeamMemberBody> {
  //   return await this.rocketMembersRepository.findById(id);
  // }
}
