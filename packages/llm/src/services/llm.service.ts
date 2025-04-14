/** @format */

import { LLMProvider } from '../interfaces/llm-provider.interface';
import { LLMMessage, LLMResponse } from '../types/llm.types';

export class LLMService {
  constructor(private readonly provider: LLMProvider) {}

  generate(messages: LLMMessage[]): Promise<LLMResponse> {
    return this.provider.generate(messages);
  }
}
