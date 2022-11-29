import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const verifyIfUserExists = this.usersRepository.findById(user_id);

    if (!verifyIfUserExists) {
      throw new Error("User doesn't exists!");
    }
    return verifyIfUserExists;
  }
}

export { ShowUserProfileUseCase };
