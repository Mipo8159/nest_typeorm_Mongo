import {ConfigService} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'
import * as dotenv from 'dotenv'

dotenv.config()
const configService = new ConfigService()
export const ConnectMongoose = async (): Promise<MongooseModule> => ({
  uri: configService.get('MONGO_URI'),
})
