export const tmpl = `
    <input class="input {{#if placeholder}}with-placeholder{{/if}}" id="{{id}}" type="{{type}}" name="{{name}}" 
    {{#if placeholder}}placeholder="{{placeholder}}"{{/if}}
    {{#if value}}value="{{value}}"{{/if}}>
`;
