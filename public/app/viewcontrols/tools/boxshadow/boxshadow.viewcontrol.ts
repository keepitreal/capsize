/// <reference path="../../../references.d.ts" />
'use strict';

declare var $;

import jQueryInjectable = require('../../../common/injectables/jquery.injectable');
import interfaces = require('./boxshadow.interfaces.viewcontrol');
import plat = require('../../../lib/platypus/platypus');

export class BoxShadowViewControl extends plat.ui.WebViewControl {
	title = 'Tools - Box Shadow Generator';
	
	templateUrl = 'app/viewcontrols/tools/boxshadow/boxshadow.viewcontrol.html';

	$ = plat.acquire(jQueryInjectable.jQueryFactory);
	$utils = plat.acquire(plat.IUtils);

	demoShape: plat.controls.INamedElement<HTMLDivElement, any>;
	colpick: any;

	context = {
		title: 'Box Shadow Generator',
		controlPanel: <interfaces.IBoxShadowValueSet>null,
		alphaAlias: 100,
		colorAlias: {
			r: 200,
			g: 200,
			b: 200
		},
		effects: <Array<interfaces.IBoxShadowEffect>>[],
		selectedEffect: 0
	};

	initialize() {
		var context = this.context;
		context.controlPanel = {
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
		};
		context.effects.push({
			effect:	this.$utils.clone({
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
			}),
			inlineStyle: ''
		});
	}

	loaded() {
		var context = this.context;

		this.colpick = this.$('#colpick');
		this.colpick.colpick({
			flat: true,
			layout: 'full',
			submit: 0,
			onChange: (hsb, hex, rgb) => {
				this.setColor(rgb);
				this.setProperty();
			}
		});

		this.setProperty();
	}

	setColor(rgb) {
		var context = this.context,
			rgba = this.context.effects[context.selectedEffect].effect.rgba;
			
		rgba.r = rgb.r;
		rgba.g = rgb.g;
		rgba.b = rgb.b;
	}

	objToInlineStr(effectId?: number) {
		var context = this.context,
			effect = context.effects[effectId].effect,
			color = effect.rgba, 
			str = effect.inset ? 'inset ' : '';
			
		str += effect.offsetX + 'px ' + effect.offsetY + 'px ';
		str += effect.blurRadius + 'px ' + effect.spreadRadius + 'px ';
		str += 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a +')';

		context.effects[effectId].inlineStyle = str;
	}

	concatInlineStrings(effects: Array<any>) {
		var str = '';
		
		this.$utils.forEach((effect, index) => {
			str += effect.inlineStyle;
			str += index === (this.context.effects.length - 1) ? '' : ', ';
		}, effects);

		return str;
	}

	selectEffect(index: number) {
		var context = this.context,
			effect = this.$utils.clone(context.effects[index].effect),
			rgba = effect.rgba;

		this.context.selectedEffect = index;
		
		this.setColpick(rgba.r, rgba.g, rgba.b);
		context.controlPanel = this.$utils.clone(effect);
	}

	setColpick(r: number, g: number, b: number) {
		this.colpick.colpickSetColor({ r: r, g: g, b: b });
	}

	createEffect() {
		var context = this.context,
			selected = context.selectedEffect;

		this.context.selectedEffect = context.effects.length;

		context.effects.push({
			effect:	this.$utils.clone({
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
			}),
			inlineStyle: defaultInlineString
		});

		context.controlPanel = this.$utils.clone({
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
		});
	}

	setAlpha() {
		var context = this.context;
		context.controlPanel.rgba.a = context.alphaAlias / 100;
		this.setProperty();
	}

	setProperty() {
		var context = this.context,
			selected = context.selectedEffect;

		this.context.effects[selected].effect = this.$utils.clone(context.controlPanel);
		this.objToInlineStr(context.selectedEffect);
		this.demoShape.element.style.boxShadow = this.concatInlineStrings(context.effects);
	}
}

var defaultInlineString = '5px 5px 4px 3px rgba(100,100,100,1)';

plat.register.viewControl('boxshadow', BoxShadowViewControl, null, ['/tools/boxshadowgenerator']);
