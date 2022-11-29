import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyIfUserExists = this.usersRepository.findById(user_id);
    const users = this.usersRepository.list();

    if (!verifyIfUserExists) {
      throw new Error("User doesn't exists!");
    }
    if (!verifyIfUserExists.admin) {
      throw new Error("User provided is not an admin!");
    }
    return users;
  }
}

export { ListAllUsersUseCase };
