/// <reference path="../../references.d.ts" />

module platynem.injectables {
	'use strict';

	declare var $;

	export function jQueryFactory() {
		return $;
	}

	plat.register.injectable('jQuery', jQueryFactory);
}
