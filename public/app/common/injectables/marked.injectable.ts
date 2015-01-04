/// <reference path="../../references.d.ts" />

module capsize.injectables {
	'use strict';

	declare var marked;
	var renderer = new marked.Renderer();

	export function Marked() {
		marked.setOptions({
			renderer: renderer
		});

		return marked;
	}

	plat.register.injectable('marked', Marked, null, plat.register.injectable.STATIC);
}
