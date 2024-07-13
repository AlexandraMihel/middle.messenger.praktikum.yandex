export const tmpl = `
    <main class="mainpage">
        <div class="container">
        <h1>Привет! Это мой чат.</h1>
        <nav class="mainpage_nav">
            <ul class="mainpage_lists">
                <li class="mainpage_list">{{{linkLogin}}}</li>
                <li class="mainpage_list">{{{linkRegister}}}</li>
                <li class="mainpage_list">{{{linkProfel}}}</li>
                <li class="mainpage_list">{{{EditProfel}}}</li>
                <li class="mainpage_list">{{{EditPassword}}}</li>
                <li class="mainpage_list">{{{linkError}}}</li>
                <li class="mainpage_list">{{{linkNotFound}}}</li>
                <li class="mainpage_list">{{{linkChats}}}</li>
            </ul>
        </nav>
        </div>
    </main>
`;