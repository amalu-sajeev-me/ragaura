/** @format */

import { LLMMessage, LLMResponse } from '../types/llm.types';

export interface LLMProvider {
  generate(messages: LLMMessage[]): Promise<LLMResponse>;
}
