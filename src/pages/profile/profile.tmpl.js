export const tmpl = `
    <section class="profile">
    <div class="container profile_container">
        <div class="profile_block">

        <div class="profile_user">
            <div class="profile_user-avatar">
            {{{avatar}}}
            </div>
            <h1>
                Петр Петров
            </h1>
        </div>

        <div class="profile_user-info">
            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Имя
                </div>
                <div class="profile_user-right">
                    Петр
                </div>
            </div>

            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Фамилия
                </div>
                <div class="profile_user-right">
                    Петров
                </div>
            </div>

            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Логин
                </div>
                <div class="profile_user-right">
                    Petr_01
                </div>
            </div>

            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Email
                </div>
                <div class="profile_user-right">
                    petrptrov@mail.ru
                </div>
            </div>

            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Телефон
                </div>
                <div class="profile_user-right">
                    +7-(999)-999-99-99
                </div>
            </div>

            <div class="profile_user-info_item">
                <div class="profile_user-left">
                    Имя в чате
                </div>
                <div class="profile_user-right">
                    Петр
                </div>
            </div>
        </div>

        <div class="profile_link-wrap">
        {{{EdinProfile}}}
        {{{EditPassword}}}
        </div>

        <div class="profile_link-btn">
        {{{LinkChatPage}}}
        </div>
    </div>
    </div>
</section>
`;
