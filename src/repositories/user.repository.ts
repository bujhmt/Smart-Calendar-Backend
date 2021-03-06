import User, { IUser } from '../models/user.entity'
import UserInputDto from '../dto/user-input.dto'

class UserRepository {
    async getUserById(userId: string): Promise<IUser | null> {
        return User.findOne({ _id: userId })
    }

    async updateUserData(userInputDto: UserInputDto, userId: string): Promise<IUser> {
        return await User.updateOne({ _id: userId }, userInputDto).exec()
    }
}

export default UserRepository
