import { Injectable } from '@nestjs/common';
import { LLMService, LLMResponse } from '@ragaura/llm'; // Ensure GenerateResponse is imported or defined

@Injectable()
export class AppService {
  constructor(private readonly llm: LLMService) {}
  // async getHello() {
  //   return await this.llm.generate([{ role: 'user', content: 'hello' }]);
  // }

  async getGoodbye(): Promise<LLMResponse> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const response = await this?.llm?.generate?.([
      { role: 'user', content: 'goodbye' },
    ]);
    if (!response) {
      throw new Error('Failed to generate response');
    }
    return response;
  }
}
