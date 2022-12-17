import {Controller} from '@nestjs/common'
import {PostService} from '@app/modules/post/post.service'

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
}
