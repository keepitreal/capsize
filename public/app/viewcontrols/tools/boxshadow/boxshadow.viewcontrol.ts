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
					r: 100,
					g: 100,
					b: 100,
					a: 1
				}
			}
		};

		logProperty() {
			console.log(this.colpick);
		}

		loaded() {
			var color = this.context.demoShape.rgba;
			this.colpick = this.$('#colpick');
			this.colpick.colpick({
				flat: true,
				layout: 'full',
				submit: 0,
				color: {
					r: color.r,
					g: color.g,
					b: color.b
				},
				onChange: (hsb, hex, rgb) => {
					color.r = rgb.r;
					color.g = rgb.g;
					color.b = rgb.b;
					this.setProperty();
				}
			});
			this.setProperty();
		}

		setProperty() {
			var shapeContext = this.context.demoShape,
				color = shapeContext.rgba,
				value = '';

			value += shapeContext.inset ? 'inset ' : '';
			value += shapeContext.offsetX + 'px ' + shapeContext.offsetY + 'px ';
			value += shapeContext.blurRadius + 'px ' + shapeContext.spreadRadius + 'px ';
			value += 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a +')';
			
			this.demoShape.element.style.boxShadow = value;
		}
	}

	plat.register.viewControl('boxshadow', BoxShadowViewControl, [], ['/tools/boxshadowgenerator']);
}