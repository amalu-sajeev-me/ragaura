import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LLMModule } from '@ragaura/llm';

@Module({
  imports: [LLMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
