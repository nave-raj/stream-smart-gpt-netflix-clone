import OpenAI from 'openai';

const OPENAI_API_KEY = ''

export const gptClient = new OpenAI({
  apiKey: OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true,
});
