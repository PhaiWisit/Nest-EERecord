import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.enableCors();
  app.use(helmet());
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  await app.listen(5000);
}
bootstrap();
