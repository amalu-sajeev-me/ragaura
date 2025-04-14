/** @format */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

import { LLMProvider } from '../interfaces/llm-provider.interface';
import { LLMMessage, LLMResponse } from '../types/llm.types';


export class GeminiProvider implements LLMProvider {
  private readonly model = new GoogleGenerativeAI(
    ''
  ).getGenerativeModel({
    model: 'gemini-2.0-flash',
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ],
  });

  async generate(messages: LLMMessage[]): Promise<LLMResponse> {
    const chat = this.model.startChat({
      history: messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );

    return {
      content: result.response.text(),
    };
  }
}
