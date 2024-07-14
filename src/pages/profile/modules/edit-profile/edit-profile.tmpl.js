export const tmpl = `
    <section class="profile">
        <div class="container profile_container">
            <div class="profile_block">

            <div class="profile_user">
                <div class="profile_user-avatar">
                {{{avatar}}}
                </div>
                <label class="profile_newuser-avatar">
                    <span>Поменять фото профиля</span>
                    <input class="input_file" type="file" name="avatar">
                </label>
            </div>

            <form class="profile_edit-form">
                {{#each fields}}
                    <div class="profile_edit-form_input">
                    <div class="profile_edit-inpyt_label">
                    {{label}}
                    </div>
                    {{{input}}}
                    </div>
                {{/each}}

                {{{btnSave}}}
            </form>

            {{{LinkProfilePage}}}
        </div>
        </div>
    </section>
`;
