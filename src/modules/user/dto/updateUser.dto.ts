import {PartialType} from '@nestjs/mapped-types'
import {CreateUserDto} from '@app/modules/user/dto/createUser.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {}
