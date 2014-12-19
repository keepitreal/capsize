/// <reference path="../../../references.d.ts" />

declare var $;

module platynem.viewcontrols {
	'use strict';

	export class BoxShadowViewControl extends BaseViewControl {
		title = 'Tools - Box Shadow Generator';
		
		templateUrl = 'app/viewcontrols/tools/boxshadow/boxshadow.viewcontrol.html';

		$ = plat.acquire(platynem.injectables.jQueryFactory);

		demoShape: plat.controls.INamedElement<HTMLDivElement, any>;

		colpick: any;

		context = {
			title: 'Box Shadow Generator',
			demoShape: {
				inset: false,
				offsetX: 5,
				offsetY: 5,
				blurRadius: 4,
				spreadRadius: 3,
				rgba: {
					red: 0,
					green: 0,
					blue: 0,
					alpha: 1
				}
			}
		};

		logProperty() {
			console.log(this.context.demoShape.offsetX);
		}

		contextChanged() {
			console.log('change');
		}

		loaded() {
			this.colpick = this.$('#colpick');
			this.colpick.colpick({
				flat: true,
				layout: 'full',
				submit: 0
			});
			this.setProperty(this.demoShape.element, 'boxShadow');
		}

		setProperty(el: HTMLElement, property: string) {
			var shapeContext = this.context.demoShape,
				value = '';

			value = this.concatValues(shapeContext) + ' rgba(20,20,20,1)';
			console.log(value);
			el.style[property] = value;
		}

		concatValues(obj) {
			var value: string = '';
			
			this.$utils.forEach(obj, (prop: any, key: any) => {
				if (key === 'inset') {
					value += prop ? 'inset' : '';
					return;
				}

				if (key === 'rgba') {
					return;
				}

				if (this.$utils.isNumber(prop)) {
					value += ' ' + prop + 'px';
				}
			});

			return value;
		}
	}

	plat.register.viewControl('boxshadow', BoxShadowViewControl, [], ['/tools/boxshadowgenerator']);
}