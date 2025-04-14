import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config, SwaggerModule } from '@ragaura/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
