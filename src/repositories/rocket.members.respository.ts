export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;

  // abstract list(): Promise<string[]>;
}
