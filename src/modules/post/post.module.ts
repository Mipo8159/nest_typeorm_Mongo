import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {PostEntity} from '@app/modules/post/entities/post.entity'
import {PostController} from '@app/modules/post/post.controller'
import {PostService} from '@app/modules/post/post.service'

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
