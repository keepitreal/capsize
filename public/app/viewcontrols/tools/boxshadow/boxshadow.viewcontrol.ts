/// <reference path="../../../references.d.ts" />

declare var $;

module platynem.viewcontrols {
	'use strict';

	export class BoxShadowViewControl extends plat.ui.WebViewControl {
		title = 'Tools - Box Shadow Generator';
		
		templateUrl = 'app/viewcontrols/tools/boxshadow/boxshadow.viewcontrol.html';

		$ = plat.acquire(platynem.injectables.jQueryFactory);

		colpick: any;

		context = {
			title: 'Box Shadow Generator'
		};

		loaded() {
			this.colpick = this.$('#colpick');
			this.colpick.colpick({
				flat: true,
				layout: 'full',
				submit: 0
			});
		}
	}

	plat.register.viewControl('boxshadow', BoxShadowViewControl, [], ['/tools/boxshadowgenerator']);
}