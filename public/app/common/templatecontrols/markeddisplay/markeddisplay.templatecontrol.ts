/// <reference path="../../../references.d.ts" />

module platynem.templatecontrols {
	'use strict';

	export class MarkedDisplay extends plat.ui.controls.Html {
		constructor(private marked: any,
			private $utils: plat.IUtils) {
			super();
		}

		options: plat.observable.IObservableProperty<{ editMode?: boolean; }>;

 		loaded() {
			var context = this.context;
			if (!this.$utils.isString(context)) {
				return;
			}

			var template = this.marked(context);

			if (this.$utils.isObject(this.options) && this.options.value.editMode) {
				this.dom.setInnerHtml(this.element, template);
				return;
			}

			this.bindTemplate(template);
		}

		bindTemplate(template: string) {
			var templateId = this.$utils.uniqueId('marked-');

			this.bindableTemplates.add(templateId, this.dom.serializeHtml(template));
			this.bindableTemplates.bind(templateId).then((clone) => {
				this.dom.clearNode(this.element);
				this.element.appendChild(clone);
			});
		}
	}

	plat.register.control('marked-display', MarkedDisplay, [
		injectables.Marked,
		plat.IUtils
	]);
}
