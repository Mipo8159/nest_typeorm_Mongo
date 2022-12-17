if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}
import 'reflect-metadata'
import {NestFactory} from '@nestjs/core'
import {AppModule} from '@app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const PORT = process.env.PORT
  await app.listen(PORT, () =>
    console.log(`Server running on port: ${PORT}`),
  )
}
bootstrap()
