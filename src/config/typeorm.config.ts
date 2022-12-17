import {DataSource, DataSourceOptions} from 'typeorm'
import {ConfigService} from '@nestjs/config'
import * as dotenv from 'dotenv'

dotenv.config()
const configService = new ConfigService()
export const ConnectTypeorm = async (): Promise<DataSourceOptions> => ({
  type: configService.get<'postgres' | 'mysql'>('DB_TYPE'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  synchronize: false,
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
})

const dataSource: Promise<DataSource> = (async () =>
  new DataSource(await ConnectTypeorm()))()
export default dataSource
