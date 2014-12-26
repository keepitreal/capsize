/// <reference path="../../references.d.ts" />

module capsize.injectables {
	'use strict';

	declare var $;

	export function jQueryFactory() {
		return $;
	}

	plat.register.injectable('jQuery', jQueryFactory);
}
