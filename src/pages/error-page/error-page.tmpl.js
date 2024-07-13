export const tmpl = `
    <section class="error_page">
    <div class="container">
        <div class="error_page-block">
        <h1 class="error_page-title">
        {{statusCode}}
        </h1>

        <div class="error_page-subtitle">
        {{message}}
        </div>

        <div class="error_page-link">
        {{{LinkChatPage}}}
        </div>
    </div>
    </div>
</section>
`;
