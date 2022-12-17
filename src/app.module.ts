import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'

import {PostModule} from '@app/modules/post/post.module'
import {UserModule} from '@app/modules/user/user.module'
import {MongooseModule} from '@nestjs/mongoose'
import {ConnectMongoose} from './config/mongoose.config'
import {ConnectTypeorm} from './config/typeorm.config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ConnectTypeorm(),
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ConnectMongoose(),
    }),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
