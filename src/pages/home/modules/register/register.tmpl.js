export const tmpl = `
    <section class="login">
        <div class="container login_container">
            <div class="login_block">
            <h1>
                Регистрация 
            </h1>

            <form class="login_form">
            {{#each fields}}
            <div class="form_input">
            {{{input}}}
        </div>
        {{/each}}

        {{{btnRegister}}}
            </form>

            {{{loginLink}}}
        </div>
        </div>
    </section>
`;