import { OpenAI } from 'openai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  });

  export async function POST(req: NextRequest) {
    try {
        const { message, mood, goal } = await req.json();

            const context = `
            Kullanıcının ruh hali: ${mood || 'bilinmiyor'}
            Gelişim hedefi: ${goal || 'belirtilmemiş'}
            Aşağıdaki mesaja kişisel gelişim konusunda yardımcı ol:
            `;

                const completion = await openai.chat.completions.create({
                      model: 'gpt-4',
                            messages: [
                                    {
                                              role: 'system',
                                                        content: context,
                                                                },
                                                                        {
                                                                                  role: 'user',
                                                                                            content: message,
                                                                                                    },
                                                                                                          ],
                                                                                                              });

                                                                                                                  return new Response(
                                                                                                                        JSON.stringify({ result: completion.choices[0].message.content }),
                                                                                                                              {
                                                                                                                                      headers: { 'Content-Type': 'application/json' },
                                                                                                                                              status: 200,
                                                                                                                                                    }
                                                                                                                                                        );
                                                                                                                                                          } catch (error) {
                                                                                                                                                              console.error(error);
                                                                                                                                                                  return new Response(JSON.stringify({ error: 'Bir hata oluştu.' }), {
                                                                                                                                                                        status: 500,
                                                                                                                                                                            });
                                                                                                                                                                              }
                                                                                                                                                                              }