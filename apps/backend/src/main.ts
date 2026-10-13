import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Prefix all routes with /api (e.g., http://localhost:3000/api/whatsapp/webhook)
  app.setGlobalPrefix('api');
  
  // Enable CORS for frontend integration
  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}/api`);
}
bootstrap();