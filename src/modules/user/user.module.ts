import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {UserService} from '@app/modules/user/user.service'
import {UserController} from '@app/modules/user/user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UserModule])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
