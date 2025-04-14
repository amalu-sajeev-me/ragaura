/** @format */

// packages/llm/src/nest/llm.module.ts
import { Module } from '@nestjs/common';
import { LLMService } from '../services/llm.service';
import { LLMProvider } from '../interfaces/llm-provider.interface';
import { GeminiProvider } from '../providers/gemini.provider';
import { LLM_PROVIDER } from '../token';

@Module({
  providers: [
    {
      provide: LLM_PROVIDER,
      useClass: GeminiProvider, // 👈 Swap to OpenAIProvider later if needed
    },
    {
      provide: LLMService,
      useFactory: (provider: LLMProvider) => new LLMService(provider),
      inject: [LLM_PROVIDER],
    },
  ],
  exports: [LLMService],
})
export class LLMModule {}
