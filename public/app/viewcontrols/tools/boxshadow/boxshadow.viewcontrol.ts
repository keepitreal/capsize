/// <reference path="../../../references.d.ts" />
'use strict';

declare var $;

import plat = require('platypus');
import baseViewcontrol = require('../../base.viewcontrol');
import jQueryInjectable = require('../../../common/injectables/jquery.injectable');

export class BoxShadowViewControl extends baseViewcontrol.BaseViewControl {
	title = 'Tools - Box Shadow Generator';
	
	templateUrl = 'app/viewcontrols/tools/boxshadow/boxshadow.viewcontrol.html';

	$ = plat.acquire(jQueryInjectable.jQueryFactory);

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
		},
		alphaAlias: 100,
		effects: [
			{ id: 1, effect: null },
			{ id: 2, effect: null },
			// { id: 3, effect: null }
		]
	};

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

	setAlpha() {
		var context = this.context;
		context.demoShape.rgba.a = context.alphaAlias / 100;

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

plat.register.viewControl('boxshadow', BoxShadowViewControl, null, ['/tools/boxshadowgenerator']);
