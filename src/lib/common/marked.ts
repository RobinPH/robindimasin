import { marked as _marked, type Tokens } from 'marked';

_marked.use({
	extensions: [
		{
			name: 'strong',
			renderer({ text }: Tokens.Generic) {
				return `<span class="font-medium text-gray-200">${text}</span>`;
			}
		}
		// {
		// 	name: 'link',
		// 	renderer({ href, text }: Tokens.Generic) {
		// 		return `<a href="${href}">${marked(text)}</a>`;
		// 	}
		// }
	]
});

export const marked = _marked;
