import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariable } from '../utils/EnvironmentVariables';

export const postgresAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get(EnvironmentVariable.POSTGRES_HOST),
    port: Number(configService.get(EnvironmentVariable.POSTGRES_PORT)),
    username: configService.get(EnvironmentVariable.POSTGRES_USERNAME),
    password: configService.get(EnvironmentVariable.POSTGRES_PASSWORD),
    database: configService.get(EnvironmentVariable.POSTGRES_DATABASE),
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    synchronize: true,
  }),
  inject: [ConfigService],
};
