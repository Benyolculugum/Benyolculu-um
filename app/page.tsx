'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
      <main style={{ padding: 20, textAlign: 'center' }}>
            <h1>BenYolculuğum</h1>
                  <p>Kişisel gelişim yolculuğuna hoş geldin!</p>

                        <div style={{ marginTop: 20 }}>
                                <Link href="/gorevler">
                                          <button style={{
                                                      padding: '10px 20px',
                                                                  fontSize: '16px',
                                                                              backgroundColor: '#0070f3',
                                                                                          color: 'white',
                                                                                                      border: 'none',
                                                                                                                  borderRadius: '8px',
                                                                                                                              cursor: 'pointer'
                                                                                                                                        }}>
                                                                                                                                                    Görevler Sayfasına Git
                                                                                                                                                              </button>
                                                                                                                                                                      </Link>
                                                                                                                                                                            </div>
                                                                                                                                                                                </main>
                                                                                                                                                                                  );
                                                                                                                                                                                  }