export const tmpl = `
    <section class="chats">
            <div class="chats_block">
                <div class="chats_left">
                    <div class="chats_left_top"> 
                    {{{profileLink}}}
                        <div class="search"> 
                            <input class="input_serch" type="text" id="input_serch" name="search" value="" placeholder="Поиск...">
                        </div>
                    </div>
                    <div class="chats_left_bottom">
                        <ul class="chats_items">
                            <li class="chats_item">
                                <div class="chats_item_block">
                                    <div class="chats_item-info">
                                    <div class="chats_item-avatar">
                                        <img width="60px" height="60px" src="../../../static/img/user3.png" alt="Аватар чата" class="avatar">
                                    </div>
                                    <div class="chats_info-message">
                                        <div class="chats_item-name">
                                            Иван Иванов
                                        </div>
                                        <div class="message-text">
                                        Привет! 
                                        </div>
                                    </div>
                                  
                                    </div>
                                    <div class="chats_item-time">
                                        16:41
                                    </div>
                                </div>
                            </li>

                            <li class="chats_item active">
                                <div class="chats_item_block">
                                    <div class="chats_item-info">
                                    <div class="chats_item-avatar">
                                        <img width="60px" height="60px" src="../../../static/img/user3.png" alt="Аватар чата" class="avatar">
                                    </div>
                                    <div class="chats_info-message">
                                        <div class="chats_item-name">
                                            Иван Иванов
                                        </div>
                                        <div class="message-text">
                                        Привет! 
                                        </div>
                                    </div>
                                  
                                    </div>
                                    <div class="chats_item-time">
                                        16:41
                                    </div>
                                </div>
                            </li>

                            <li class="chats_item">
                                <div class="chats_item_block">
                                    <div class="chats_item-info">
                                    <div class="chats_item-avatar">
                                        <img width="60px" height="60px" src="../../../static/img/user3.png" alt="Аватар чата" class="avatar">
                                    </div>
                                    <div class="chats_info-message">
                                        <div class="chats_item-name">
                                            Иван Иванов
                                        </div>
                                        <div class="message-text">
                                        Привет! 
                                        </div>
                                    </div>
                                  
                                    </div>
                                    <div class="chats_item-time">
                                        16:41
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <buttom class="add_chat">
                            Создать чат 
                        </buttom>
                    </div>
                </div>
                <div class="chats_right">
                    <div class="chats_right_message">
                        <div class="chats_right-top">
                                <div class="chat_top-info_wrap">
                                <div class="chats_item-avatar">
                                    <img width="60px" height="60px" src="../../../static/img/user3.png" alt="Аватар чата" class="avatar">
                                </div>
                                <h2>Иван Иванов</h2>
                                </div>
                                <div class="chat_top-info_btn">
                                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9454 3.83491L13.3204 4.48443V4.48443L12.9454 3.83491ZM15.6774 4.56696L16.3269 4.19196V4.19196L15.6774 4.56696ZM16.1774 5.43299L15.5279 5.80799L16.1774 5.43299ZM15.4454 8.16504L15.8204 8.81456L15.4454 8.16504ZM15.4454 9.83491L15.0704 10.4844L15.4454 9.83491ZM16.1774 12.567L16.827 12.942L16.1774 12.567ZM15.6774 13.433L15.0279 13.058L15.6774 13.433ZM12.9454 14.165L13.3204 13.5155L12.9454 14.165ZM5.05307 14.165L4.67807 13.5155H4.67807L5.05307 14.165ZM2.32102 13.433L2.97054 13.058H2.97054L2.32102 13.433ZM1.82102 12.567L1.1715 12.942H1.1715L1.82102 12.567ZM2.55307 9.83491L2.17807 9.18539H2.17807L2.55307 9.83491ZM2.55309 8.16504L2.17809 8.81456H2.17809L2.55309 8.16504ZM1.82104 5.43299L1.17152 5.05799H1.17152L1.82104 5.43299ZM2.32104 4.56696L2.97056 4.94196L2.32104 4.56696ZM5.05309 3.83491L4.67809 4.48443L5.05309 3.83491ZM8.49914 0.25C6.98036 0.25 5.74914 1.48122 5.74914 3H7.24914C7.24914 2.30964 7.80879 1.75 8.49914 1.75V0.25ZM9.49914 0.25H8.49914V1.75H9.49914V0.25ZM12.2491 3C12.2491 1.48122 11.0179 0.25 9.49914 0.25V1.75C10.1895 1.75 10.7491 2.30964 10.7491 3H12.2491ZM16.3269 4.19196C15.5676 2.87666 13.8857 2.426 12.5704 3.18539L13.3204 4.48443C13.9182 4.13925 14.6827 4.3441 15.0279 4.94196L16.3269 4.19196ZM16.8269 5.05799L16.3269 4.19196L15.0279 4.94196L15.5279 5.80799L16.8269 5.05799ZM15.8204 8.81456C17.1357 8.05517 17.5863 6.37329 16.8269 5.05799L15.5279 5.80799C15.8731 6.40585 15.6682 7.17034 15.0704 7.51552L15.8204 8.81456ZM16.827 12.942C17.5864 11.6267 17.1357 9.94478 15.8204 9.18539L15.0704 10.4844C15.6683 10.8296 15.8731 11.5941 15.5279 12.192L16.827 12.942ZM16.327 13.808L16.827 12.942L15.5279 12.192L15.0279 13.058L16.327 13.808ZM12.5704 14.8146C13.8857 15.5739 15.5676 15.1233 16.327 13.808L15.0279 13.058C14.6828 13.6559 13.9183 13.8607 13.3204 13.5155L12.5704 14.8146ZM9.49914 17.75C11.0179 17.75 12.2491 16.5188 12.2491 15H10.7491C10.7491 15.6904 10.1895 16.25 9.49914 16.25V17.75ZM8.49914 17.75H9.49914V16.25H8.49914V17.75ZM5.74914 15C5.74914 16.5188 6.98036 17.75 8.49914 17.75V16.25C7.80879 16.25 7.24914 15.6904 7.24914 15H5.74914ZM1.6715 13.808C2.43089 15.1233 4.11276 15.574 5.42807 14.8146L4.67807 13.5155C4.0802 13.8607 3.31571 13.6559 2.97054 13.058L1.6715 13.808ZM1.1715 12.942L1.6715 13.808L2.97054 13.058L2.47054 12.192L1.1715 12.942ZM2.17807 9.18539C0.862764 9.94478 0.412107 11.6267 1.1715 12.942L2.47054 12.192C2.12536 11.5941 2.3302 10.8296 2.92807 10.4844L2.17807 9.18539ZM1.17152 5.05799C0.41213 6.37329 0.862787 8.05517 2.17809 8.81456L2.92809 7.51552C2.33023 7.17034 2.12538 6.40585 2.47056 5.80799L1.17152 5.05799ZM1.67152 4.19196L1.17152 5.05799L2.47056 5.80799L2.97056 4.94196L1.67152 4.19196ZM5.42809 3.18539C4.11279 2.426 2.43091 2.87666 1.67152 4.19196L2.97056 4.94196C3.31574 4.3441 4.08023 4.13925 4.67809 4.48443L5.42809 3.18539ZM4.67809 4.48443C5.82082 5.14419 7.24914 4.31942 7.24914 3H5.74914C5.74914 3.16481 5.57074 3.26775 5.42809 3.18539L4.67809 4.48443ZM2.92807 10.4844C4.07077 9.82469 4.07085 8.17529 2.92809 7.51552L2.17809 8.81456C2.32079 8.89694 2.32083 9.10297 2.17807 9.18539L2.92807 10.4844ZM7.24914 15C7.24914 13.6806 5.82085 12.8557 4.67807 13.5155L5.42807 14.8146C5.57069 14.7322 5.74914 14.8351 5.74914 15H7.24914ZM13.3204 13.5155C12.1777 12.8558 10.7491 13.6804 10.7491 15H12.2491C12.2491 14.8352 12.4276 14.7321 12.5704 14.8146L13.3204 13.5155ZM15.0704 7.51552C13.9276 8.17529 13.9277 9.82469 15.0704 10.4844L15.8204 9.18539C15.6776 9.10297 15.6777 8.89695 15.8204 8.81456L15.0704 7.51552ZM10.7491 3C10.7491 4.31962 12.1777 5.14415 13.3204 4.48443L12.5704 3.18539C12.4275 3.26785 12.2491 3.16473 12.2491 3H10.7491ZM10.431 8.99993C10.431 9.7907 9.78997 10.4318 8.9992 10.4318V11.9318C10.6184 11.9318 11.931 10.6191 11.931 8.99993H10.431ZM8.9992 10.4318C8.20843 10.4318 7.56738 9.7907 7.56738 8.99993H6.06738C6.06738 10.6191 7.38 11.9318 8.9992 11.9318V10.4318ZM7.56738 8.99993C7.56738 8.20916 8.20843 7.56812 8.9992 7.56812V6.06812C7.38 6.06812 6.06738 7.38073 6.06738 8.99993H7.56738ZM8.9992 7.56812C9.78997 7.56812 10.431 8.20916 10.431 8.99993H11.931C11.931 7.38073 10.6184 6.06812 8.9992 6.06812V7.56812Z" fill="white"></path>
                                        </svg>                                        
                                </div>
                        </div>
                        <div class="chats_right-content">
                            <div class="test test_1">
                                <div class="test_text">

                                
                                Привет!
                                <div class="text_time">
                                  <span><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)" stroke="#6B4EFF"></line>
                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#6B4EFF"></line>
                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#6B4EFF"></line>
                                    </svg>
                                    </span>  12:00
                                </div>
                            </div>
                            </div>
                            <div class="test test_2">
                                <div class="test_text">
                                    Привет!
                                    <div class="text_time">
                                     12:00
                                      </div>
                                </div>
                               
                            </div>

                            <div class="test test_1">
                                <div class="test_text">

                                
                                Как дела?
                                <div class="text_time">
                                  <span><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)" stroke="#6B4EFF"></line>
                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#6B4EFF"></line>
                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#6B4EFF"></line>
                                    </svg>
                                    </span>  12:01
                                </div>
                            </div>
                            </div>

                            <div class="test test_2">
                                <div class="test_text">
                                    Хорошо!
                                    <div class="text_time">
                                     12:00
                                      </div>
                                </div>
                               
                            </div>

                            <div class="test test_2">
                                <div class="test_text">
                                    Ты как?
                                    <div class="text_time">
                                     12:00
                                      </div>
                                </div>
                               
                            </div>



                            
                        </div>
                        <div class="chats_right-bottom">
                            <form class="chat_form">
                                <label class="chat_form_label" for="file">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.014L17.2768 8.43781L18.2196 9.38062L10.6435 16.9568L9.70067 16.014Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8706L25.1335 16.2945L26.0763 17.2373L18.5002 24.8134L17.5574 23.8706Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#6B4EFF"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#6B4EFF"></path>
                                            </svg>                                            
                                    </span>
                                    <input class="input-file" type="file" id="file" name="file" value="" placeholder="">
                                </label>
                                  <input class="chat_form_input" type="text" id="message" name="message" value="" placeholder="Написать сообщение...">
                                <button class="chat_button" type="submit">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="14" fill="#6B4EFF"></circle>
                                        <rect x="8" y="13.2" width="11" height="1.6" fill="white"></rect>
                                        <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"></path>
                                        </svg>
                                        
                                </button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
`;
