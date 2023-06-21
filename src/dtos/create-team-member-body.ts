import { Length } from 'class-validator';

export class CreateTeamMemberBody {
  @Length(3, 50)
  name: string;
  @Length(1, 50)
  function: string;
}
