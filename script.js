
document.addEventListener('DOMContentLoaded', () => {
  // ページ内リンクをスムーズに移動
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
              const target = document.querySelector(link.getAttribute('href'));

                    if (target) {
                            event.preventDefault();
                                    target.scrollIntoView({
                                              behavior: 'smooth',
                                                        block: 'start'
                                                                });
                                                                      }
                                                                          });
                                                                            });

                                                                              // スクロール時にヘッダーへ影を付ける
                                                                                const header = document.querySelector('.header');

                                                                                  window.addEventListener('scroll', () => {
                                                                                      if (header) {
                                                                                            header.style.boxShadow =
                                                                                                    window.scrollY > 30
                                                                                                              ? '0 4px 20px rgba(0,0,0,0.15)'
                                                                                                                        : 'none';
                                                                                                                            }
                                                                                                                              });
                                                                                                                              });
                                                                                                                            