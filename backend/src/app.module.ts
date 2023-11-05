import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './coffee/coffee.module';
import { postgresAsyncConfig } from './config/typeorm-config';
import { IsUniqueConstraint } from './utils/custom-decorators/is-unique/is-unique-constraint';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(postgresAsyncConfig),
    CoffeeModule,
  ],
  controllers: [],
  providers: [IsUniqueConstraint],
})
export class AppModule {}
