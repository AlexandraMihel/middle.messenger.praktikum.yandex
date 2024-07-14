export const tmpl = `
    <section class="profile">
        <div class="container profile_container">
            <div class="profile_block">

            <div class="profile_user">
                <div class="profile_user-avatar">
                {{{avatar}}}
                </div>
                <h1>Изменить пароль</h1>
            </div>

            <form class="profile_edit_password-form">
                {{#each fields}}
                    <div class="profile_edit_password-form_input">
                    <div class="profile_edit-inpyt_label">
                    {{label}}
                    </div>
                    {{{input}}}
                    </div>
                {{/each}}

                {{{btnSave}}}
            </form>

            {{{LinkProfolePage}}}
        </div>
        </div>
    </section>
`;
