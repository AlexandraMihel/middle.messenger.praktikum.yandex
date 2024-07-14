export const tmpl = `
    <section class="login">
        <div class="container login_container">
            <div class="login_block">
            <h1>
                Войти 
            </h1>

            <form class="login_form">
            {{#each fields}}
            <div class="form_input">
            {{{input}}}
        </div>
        {{/each}}

        {{{btnLogin}}}
            </form>

            {{{registrationLink}}}
        </div>
        </div>
    </section>
`;
