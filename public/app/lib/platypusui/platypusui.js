var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var platui;
(function (platui) {
    var __prefix = '$', __Promise = __prefix + 'Promise', __Compat = __prefix + 'Compat', __Regex = __prefix + 'Regex', __Window = __prefix + 'Window', __Document = __prefix + 'Document', __ExceptionStatic = __prefix + 'ExceptionStatic', __Utils = __prefix + 'Utils', __Animator = __prefix + 'Animator', __DomEventInstance = __prefix + 'DomEventInstance', __TemplateControlFactory = __prefix + 'TemplateControlFactory', __Plat = 'plat-', __Button = __Plat + 'button', __Checkbox = __Plat + 'checkbox', __Drawer = __Plat + 'drawer', __DrawerController = __Plat + 'drawer-controller', __Modal = __Plat + 'modal', __Navbar = __Plat + 'navbar', __ProgressBar = __Plat + 'progress', __ProgressRing = __Plat + 'ring', __Radio = __Plat + 'radio', __Toggle = __Plat + 'toggle', __Slider = __Plat + 'slider', __Range = __Plat + 'range', __Select = __Plat + 'select', __Input = __Plat + 'input', __Carousel = __Plat + 'carousel', __Listview = __Plat + 'listview', __Hide = __Plat + 'hide', __Hidden = __Plat + 'hidden', __Checked = __Plat + 'checked', __CamelChecked = 'platChecked', __Context = __Plat + 'context', __CamelContext = 'platContext', __Bind = __Plat + 'bind', __TemplateControlCache = '__templateControlCache', __Transition = __Plat + 'transition', __NavbarActionPulse = __Plat + 'navbar-action-pulse', __$tap = '$tap', __$touchstart = '$touchstart', __$touchend = '$touchend', __$swipe = '$swipe', __$track = '$track', __$trackend = '$trackend', __ButtonPrefix = '__plat-button-', __RadioPrefix = '__plat-radio-', __DrawerControllerInitEvent = '__platDrawerControllerInit', __DrawerControllerFetchEvent = '__platDrawerControllerFetch', __DrawerFoundEvent = '__platDrawerFound', __DrawerControllerDisposing = '__platDrawerControllerDisposing', __DrawerControllerDisposingFound = '__platDrawerControllerDisposingFound', __CONTEXT = 'context', __Reversed = '-reversed', __transitionNegate = {
        right: 'left',
        left: 'right',
        up: 'down',
        down: 'up'
    };
    if (typeof window !== 'undefined') {
        if (typeof window.platui === 'undefined') {
            window.platui = platui;
        }
        if (typeof window.module === 'undefined') {
            window.module = {};
        }
    }
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
            this.$document = plat.acquire(__Document);
            this.replaceWith = 'button';
            this.groupName = '';
        }
        Button.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Button + ' ' + (className || ''));
        };
        Button.prototype.initialize = function () {
            this.setClasses();
        };
        Button.prototype.setTemplate = function () {
            var $document = this.$document, element = this.element, childNodes = Array.prototype.slice.call(element.childNodes), childNode, span, match;
            if (childNodes.length === 0) {
                span = $document.createElement('span');
                element.insertBefore(span, null);
                return;
            }
            while (childNodes.length > 0) {
                childNode = childNodes.shift();
                if (childNode.nodeType === Node.TEXT_NODE) {
                    match = childNode.textContent.trim().match(/[^\r\n]/g);
                    if (match !== null && match.length > 0) {
                        span = $document.createElement('span');
                        span.insertBefore(childNode, null);
                        element.insertBefore(span, null);
                    }
                }
                else {
                    element.insertBefore(childNode, null);
                }
            }
        };
        Button.prototype.loaded = function () {
            var element = this.element, optionObj = this.options || {}, options = optionObj.value || {}, group = options.group;
            if (!group) {
                if (element.hasAttribute(__Bind)) {
                    this._addEventListeners(element.getAttribute(__Bind));
                }
                else if (element.hasAttribute('data-' + __Bind)) {
                    this._addEventListeners(element.getAttribute('data-' + __Bind));
                }
                return;
            }
            this._addEventListeners(group);
        };
        Button.prototype._addEventListeners = function (name) {
            var _this = this;
            var element = this.element, dom = this.dom;
            this.groupName = name;
            this._isSelected = false;
            this.addEventListener(element, __$tap, this._onTap, false);
            this.on(__ButtonPrefix + name, function () {
                if (_this._isSelected) {
                    dom.removeClass(element, 'plat-selected');
                    _this._isSelected = false;
                }
            });
        };
        Button.prototype._onTap = function () {
            if (this._isSelected) {
                return;
            }
            var element = this.element;
            this.dom.addClass(element, 'plat-selected');
            this.dispatchEvent(__ButtonPrefix + this.groupName, plat.events.EventManager.DIRECT);
            this._isSelected = true;
            this.propertyChanged(element.textContent);
        };
        return Button;
    })(plat.ui.BindablePropertyControl);
    platui.Button = Button;
    plat.register.control(__Button, Button);
    var Toggle = (function (_super) {
        __extends(Toggle, _super);
        function Toggle() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.templateString = '<div class="plat-toggle-container">' + '    <div class="plat-knob"></div>' + '</div>';
            this.isActive = false;
            this._targetType = 'slide';
        }
        Toggle.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Toggle + ' ' + (className || ''));
        };
        Toggle.prototype.initialize = function () {
            this.setClasses();
        };
        Toggle.prototype.loaded = function () {
            var element = this.element;
            this._targetElement = this._targetElement || element.firstElementChild;
            this.addEventListener(element, __$tap, this._onTap);
        };
        Toggle.prototype.setProperty = function (newValue, oldValue, setProperty) {
            if (newValue === oldValue) {
                return;
            }
            var isActive = !!newValue;
            if (isActive === this.isActive) {
                return;
            }
            this._toggle(setProperty);
        };
        Toggle.prototype._onTap = function (ev) {
            this._toggle(true);
            this._trigger('change');
        };
        Toggle.prototype._trigger = function (event) {
            var domEvent = plat.acquire(__DomEventInstance);
            domEvent.initialize(this.element, event);
            domEvent.trigger();
        };
        Toggle.prototype._toggle = function (setProperty) {
            var wasActive = this.isActive, isActive = !wasActive;
            this._activate(this._targetElement || (this._targetElement = this.element.firstElementChild));
            this.isActive = this.element.checked = isActive;
            if (setProperty === true) {
                this.propertyChanged(isActive, wasActive);
            }
        };
        Toggle.prototype._activate = function (element) {
            this.dom.toggleClass(element, __Plat + this._targetType);
        };
        return Toggle;
    })(plat.ui.BindablePropertyControl);
    platui.Toggle = Toggle;
    plat.register.control(__Toggle, Toggle);
    var Checkbox = (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox() {
            _super.apply(this, arguments);
            this.$document = plat.acquire(__Document);
            this.templateString = '<div class="plat-checkbox-container">\n' + '    <span class="plat-mark"></span>\n' + '</div>\n';
            this._targetTypeSet = false;
        }
        Checkbox.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Checkbox + ' ' + (className || ''));
        };
        Checkbox.prototype.setTemplate = function () {
            var isNull = this.$utils.isNull, innerTemplate = this.innerTemplate;
            if (isNull(innerTemplate)) {
                return;
            }
            var $document = this.$document, element = this.element, childNodes = Array.prototype.slice.call(innerTemplate.childNodes), childNode, span, match;
            while (childNodes.length > 0) {
                childNode = childNodes.shift();
                if (childNode.nodeType === Node.TEXT_NODE) {
                    match = childNode.textContent.trim().match(/[^\r\n]/g);
                    if (match !== null && match.length > 0) {
                        span = $document.createElement('span');
                        span.insertBefore(childNode, null);
                        element.insertBefore(span, null);
                    }
                }
                else {
                    element.insertBefore(childNode, null);
                }
            }
        };
        Checkbox.prototype.loaded = function () {
            _super.prototype.loaded.call(this);
            var optionObj = this.options || {}, options = optionObj.value || {}, previousType = this._targetType, mark = this._targetType = options.mark || 'check';
            this._convertChecked();
            switch (mark.toLowerCase()) {
                case 'check':
                case 'x':
                    break;
                default:
                    var Exception = plat.acquire(__ExceptionStatic);
                    Exception.warn('Invalid mark option specified for' + this.type + '. Defaulting to checkmark.');
                    this._targetType = 'check';
                    break;
            }
            if (this._targetTypeSet) {
                var target = this._targetElement;
                this.dom.removeClass(target, previousType);
                this._activate(target);
            }
            this._targetTypeSet = true;
        };
        Checkbox.prototype._convertChecked = function () {
            var element = this.element;
            if (element.hasAttribute(__Checked)) {
                this._convertAttribute(element.getAttribute(__Checked));
                this.attributes.observe(__CamelChecked, this._convertAttribute);
            }
            else if (element.hasAttribute('data-' + __Checked)) {
                this._convertAttribute(element.getAttribute('data-' + __Checked));
                this.attributes.observe(__CamelChecked, this._convertAttribute);
            }
            else if (element.hasAttribute('checked') || element.hasAttribute('data-checked')) {
                this._convertAttribute(true);
            }
        };
        Checkbox.prototype._convertAttribute = function (newValue, oldValue) {
            var $utils = this.$utils;
            if ($utils.isBoolean(newValue)) {
                return this.setProperty(newValue, oldValue, true);
            }
            else if (!$utils.isString(newValue)) {
                return;
            }
            this.setProperty(newValue === 'true', oldValue === 'true', true);
        };
        Checkbox.prototype._activate = function (element) {
            if (this._targetTypeSet) {
                this.dom.toggleClass(element, __Plat + this._targetType);
                return;
            }
            this._targetTypeSet = true;
        };
        return Checkbox;
    })(Toggle);
    platui.Checkbox = Checkbox;
    plat.register.control(__Checkbox, Checkbox);
    var Radio = (function (_super) {
        __extends(Radio, _super);
        function Radio() {
            _super.apply(this, arguments);
            this.templateString = '<div class="plat-radio-container">' + '    <div class="plat-mark"></div>' + '</div>';
            this.groupName = '';
            this._targetType = 'bullet';
            this._targetTypeSet = true;
        }
        Radio.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Radio + ' ' + (className || ''));
        };
        Radio.prototype.loaded = function () {
            var element = this.element;
            this._targetElement = this._targetElement || element.firstElementChild;
            this.addEventListener(element, __$tap, this._onTap);
            if (element.hasAttribute('name')) {
                this.groupName = element.getAttribute('name');
            }
            else if (element.hasAttribute(__Bind)) {
                this.groupName = element.getAttribute(__Bind);
            }
            else if (element.hasAttribute('data-' + __Bind)) {
                this.groupName = element.getAttribute('data-' + __Bind);
            }
            this._convertChecked();
        };
        Radio.prototype.setProperty = function (newValue, oldValue, setProperty) {
            if (newValue === oldValue) {
                return;
            }
            var isChecked = newValue === this._getValue(), wasChecked = this.isActive;
            if (isChecked === wasChecked) {
                return;
            }
            this._toggle(setProperty);
        };
        Radio.prototype.propertyChanged = function (newValue, oldValue) {
            if (this.isActive) {
                _super.prototype.propertyChanged.call(this, this._getValue());
            }
        };
        Radio.prototype._onTap = function (ev) {
            if (this.isActive) {
                return;
            }
            _super.prototype._onTap.call(this, ev);
        };
        Radio.prototype._toggle = function (setProperty) {
            var _this = this;
            _super.prototype._toggle.call(this, setProperty);
            if (this.$utils.isFunction(this._removeListener)) {
                this._removeListener();
                this._removeListener = null;
            }
            if (this.isActive) {
                var name = this.groupName;
                this.dispatchEvent(__RadioPrefix + name, plat.events.EventManager.DIRECT);
                var remover = this._removeListener = this.on(__RadioPrefix + name, function () {
                    _this._toggle();
                    remover();
                });
            }
        };
        Radio.prototype._convertAttribute = function (newValue, oldValue) {
            var $utils = this.$utils;
            if ($utils.isBoolean(newValue)) {
                if (newValue) {
                    this.setProperty(this._getValue(), null, true);
                }
                return;
            }
            else if (!$utils.isString(newValue)) {
                return;
            }
            if (newValue === 'true') {
                this.setProperty(this._getValue(), null, true);
            }
        };
        Radio.prototype._getValue = function () {
            var element = this.element;
            return element.hasAttribute('value') ? element.getAttribute('value').trim() : element.textContent.trim();
        };
        return Radio;
    })(Checkbox);
    platui.Radio = Radio;
    plat.register.control(__Radio, Radio);
    var ProgressRing = (function (_super) {
        __extends(ProgressRing, _super);
        function ProgressRing() {
            _super.apply(this, arguments);
            this.templateString = '<div class="plat-progress-container">' + '    <div class="plat-animated-ring"></div>' + '</div>';
        }
        ProgressRing.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __ProgressRing + ' ' + (className || ''));
        };
        ProgressRing.prototype.initialize = function () {
            this.setClasses();
        };
        return ProgressRing;
    })(plat.ui.TemplateControl);
    platui.ProgressRing = ProgressRing;
    plat.register.control(__ProgressRing, ProgressRing);
    var ProgressBar = (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.templateString = '<div class="plat-progress-container">\n' + '    <div class="plat-animated-bar"></div>\n' + '</div>\n';
            this._cloneAttempts = 0;
            this._maxCloneAttempts = 25;
        }
        ProgressBar.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __ProgressBar + ' ' + (className || ''));
        };
        ProgressBar.prototype.initialize = function () {
            this.setClasses();
        };
        ProgressBar.prototype.loaded = function () {
            var context = this.context, barElement = this._barElement = this.element.firstElementChild.firstElementChild, bar = this._barMax = barElement.parentElement.offsetWidth;
            if (!bar) {
                this._setOffsetWithClone();
            }
            if (!this.$utils.isNumber(context) || context > 1 || context < 0) {
                var Exception = plat.acquire(plat.IExceptionStatic);
                Exception.warn('The context of a "' + this.type + '" control must be a number between 0 and 1');
                return;
            }
            this.setProgress();
        };
        ProgressBar.prototype.contextChanged = function () {
            this.setProgress();
        };
        ProgressBar.prototype.setProgress = function (value) {
            var barValue = value || this.context;
            if (!this.$utils.isNumber(barValue) || barValue > 1 || barValue < 0) {
                var Exception = plat.acquire(plat.IExceptionStatic);
                Exception.warn('The context of a "' + this.type + '" control must be a number between 0 and 1');
                return;
            }
            this._barElement.style.width = Math.ceil(this._barMax * barValue) + 'px';
        };
        ProgressBar.prototype._setOffsetWithClone = function () {
            var element = this.element, $document = plat.acquire(__Document), body = $document.body;
            if (!body.contains(element)) {
                var cloneAttempts = ++this._cloneAttempts;
                if (cloneAttempts === this._maxCloneAttempts) {
                    var $exception = plat.acquire(__ExceptionStatic), type = this.type;
                    $exception.warn('Max clone attempts reached before the ' + type + ' was placed into the ' + 'DOM. Disposing of the ' + type);
                    plat.acquire(__TemplateControlFactory).dispose(this);
                    return;
                }
                this.$utils.postpone(this._setOffsetWithClone, null, this);
                return;
            }
            this._cloneAttempts = 0;
            var clone = element.cloneNode(true), regex = /\d+(?!\d+|%)/, $window = plat.acquire(__Window), parentChain = [], shallowCopy = clone, computedStyle, width;
            shallowCopy.id = '';
            while (!regex.test((width = (computedStyle = $window.getComputedStyle(element)).width))) {
                if (computedStyle.display === 'none') {
                    shallowCopy.style.setProperty('display', 'block', 'important');
                }
                shallowCopy.style.setProperty('width', width, 'important');
                element = element.parentElement;
                shallowCopy = element.cloneNode(false);
                shallowCopy.id = '';
                parentChain.push(shallowCopy);
            }
            if (parentChain.length > 0) {
                var curr = parentChain.pop(), currStyle = curr.style, temp;
                while (parentChain.length > 0) {
                    temp = parentChain.pop();
                    curr.insertBefore(temp, null);
                    curr = temp;
                }
                curr.insertBefore(clone, null);
            }
            var shallowStyle = shallowCopy.style;
            shallowStyle.setProperty('width', width, 'important');
            shallowStyle.setProperty('visibility', 'hidden', 'important');
            body.appendChild(shallowCopy);
            this._barMax = clone.firstElementChild.offsetWidth;
            body.removeChild(shallowCopy);
        };
        return ProgressBar;
    })(plat.ui.TemplateControl);
    platui.ProgressBar = ProgressBar;
    plat.register.control(__ProgressBar, ProgressBar);
    var Drawer = (function (_super) {
        __extends(Drawer, _super);
        function Drawer() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this._controllers = [];
            this._loaded = false;
            this._preloadedValue = false;
        }
        Drawer.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Drawer + ' ' + (className || ''));
        };
        Drawer.prototype.initialize = function () {
            var childNodes = Array.prototype.slice.call(this.element.childNodes);
            if (childNodes.length > 0) {
                this.innerTemplate = this.dom.appendChildren(childNodes);
            }
            this.setClasses();
        };
        Drawer.prototype.loaded = function () {
            var _this = this;
            var element = this.element, $utils = this.$utils, optionObj = this.options || {}, options = optionObj.value || {}, position = this._currentPosition = options.position || 'left', useContext = this._useContext = (options.useContext === true) || !$utils.isUndefined(this.attributes[__CamelContext]), id = options.id || '', templateUrl = options.templateUrl, isElastic = options.elastic === true;
            element.setAttribute(__Hide, '');
            this.dom.addClass(element, __Plat + position);
            if ($utils.isString(templateUrl)) {
                plat.ui.TemplateControl.determineTemplate(this, templateUrl).then(function (template) {
                    _this.innerTemplate = template;
                    if (_this._useContext) {
                        _this.bindTemplate('drawer', template.cloneNode(true));
                        _this._checkPreload();
                    }
                    _this._initializeEvents(id, position, isElastic);
                });
                return;
            }
            else if (useContext && $utils.isNode(this.innerTemplate)) {
                this.bindTemplate('drawer', this.innerTemplate.cloneNode(true));
                this._checkPreload();
            }
            this._initializeEvents(id, position, isElastic);
        };
        Drawer.prototype.open = function () {
            var controller = this._controllers[0];
            if (this.$utils.isNull(controller)) {
                var $promise = plat.acquire(__Promise), $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No controller, such as a ' + __DrawerController + ', found for the ' + this.type + ' attempting to open.', $exception.TEMPLATE);
                return $promise.resolve(null);
            }
            return controller.open();
        };
        Drawer.prototype.close = function () {
            var controller = this._controllers[0];
            if (this.$utils.isNull(controller)) {
                var $promise = plat.acquire(__Promise), $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No controller, such as a ' + __DrawerController + ', found for the ' + this.type + ' attempting to close.', $exception.TEMPLATE);
                return $promise.resolve(null);
            }
            return controller.close();
        };
        Drawer.prototype.toggle = function () {
            var controller = this._controllers[0];
            if (this.$utils.isNull(controller)) {
                var $promise = plat.acquire(__Promise), $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No controller, such as a ' + __DrawerController + ', found for the ' + this.type + ' attempting to toggle.', $exception.TEMPLATE);
                return $promise.resolve(null);
            }
            return controller.toggle();
        };
        Drawer.prototype.reset = function () {
            var controller = this._controllers[0];
            if (this.$utils.isNull(controller)) {
                var $promise = plat.acquire(__Promise), $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No controller, such as a ' + __DrawerController + ', found for the ' + this.type + ' attempting to reset.', $exception.TEMPLATE);
                return $promise.resolve(null);
            }
            return controller.reset();
        };
        Drawer.prototype.isOpen = function () {
            var controller = this._controllers[0];
            if (this.$utils.isNull(controller)) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No controller, such as a ' + __DrawerController + ', found for the ' + this.type + ' attempting to check if open.', $exception.TEMPLATE);
                return false;
            }
            return controller.isOpen();
        };
        Drawer.prototype.bindTemplate = function (name, node) {
            var _this = this;
            var bindableTemplates = this.bindableTemplates;
            bindableTemplates.add(name, node);
            bindableTemplates.bind(name).then(function (template) {
                var element = _this.element;
                _this.dom.clearNode(element);
                element.appendChild(template);
            }).catch(function (error) {
                _this.$utils.postpone(function () {
                    var $exception = plat.acquire(__ExceptionStatic);
                    $exception.fatal(error, $exception.BIND);
                });
            });
        };
        Drawer.prototype.setProperty = function (newValue) {
            if (!this.loaded) {
                this._preloadedValue = newValue;
                return;
            }
            var $utils = this.$utils, controller = this._controllers[0];
            if ($utils.isBoolean(newValue) && !$utils.isNull(controller)) {
                if (newValue) {
                    if (controller.isOpen()) {
                        return;
                    }
                    controller.open();
                    return;
                }
                if (controller.isOpen()) {
                    controller.close();
                }
            }
        };
        Drawer.prototype.controllerCount = function () {
            return this._controllers.length;
        };
        Drawer.prototype.spliceController = function (controller) {
            var controllers = this._controllers, index = controllers.indexOf(controller);
            if (index === -1) {
                return;
            }
            controllers.splice(index, 1);
        };
        Drawer.prototype._changeDirection = function (position) {
            if (this.$utils.isNull(position) || position === this._currentPosition) {
                return;
            }
            var dom = this.dom, element = this.element;
            dom.removeClass(element, __Plat + this._currentPosition);
            dom.addClass(element, __Plat + position);
            this._currentPosition = position;
        };
        Drawer.prototype._initializeEvents = function (id, position, isElastic) {
            var _this = this;
            var $utils = this.$utils, isString = $utils.isString, isNull = $utils.isNull, innerTemplate = this.innerTemplate, useContext = this._useContext, DIRECT = plat.events.EventManager.DIRECT;
            this.on(__DrawerControllerFetchEvent + '_' + id, function (event, controllerArg) {
                var control = controllerArg.control;
                if (isNull(control)) {
                    return;
                }
                if (isString(controllerArg.position)) {
                    position = controllerArg.position;
                    _this._changeDirection(position);
                }
                _this._controllers.unshift(control);
                if (!controllerArg.received) {
                    _this.dispatchEvent(__DrawerFoundEvent + '_' + id, DIRECT, {
                        control: _this,
                        received: true,
                        position: position,
                        useContext: useContext,
                        template: $utils.isNode(innerTemplate) ? innerTemplate.cloneNode(true) : null,
                        elastic: isElastic
                    });
                }
            });
            this.dispatchEvent(__DrawerFoundEvent + '_' + id, DIRECT, {
                control: this,
                received: false,
                position: position,
                useContext: useContext,
                template: $utils.isNode(innerTemplate) ? innerTemplate.cloneNode(true) : null,
                elastic: isElastic
            });
        };
        Drawer.prototype._checkPreload = function () {
            var _this = this;
            if (this._preloadedValue) {
                var $utils = this.$utils;
                $utils.postpone(function () {
                    var controller = _this._controllers[0];
                    if (!$utils.isNull(controller)) {
                        controller.open();
                    }
                });
            }
        };
        return Drawer;
    })(plat.ui.BindablePropertyControl);
    platui.Drawer = Drawer;
    plat.register.control(__Drawer, Drawer);
    var DrawerController = (function (_super) {
        __extends(DrawerController, _super);
        function DrawerController() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.$compat = plat.acquire(__Compat);
            this.$window = plat.acquire(__Window);
            this.$document = plat.acquire(__Document);
            this.$animator = plat.acquire(__Animator);
            this.$Promise = plat.acquire(__Promise);
            this._hasSwiped = false;
            this._hasTapped = false;
            this._isOpen = false;
            this._disposeRemover = function () {
            };
            this._loaded = false;
            this._preloadedValue = false;
        }
        DrawerController.prototype.initialize = function () {
            this.dom.addClass(this.element, __DrawerController);
        };
        DrawerController.prototype.loaded = function () {
            var optionObj = this.options || {}, options = optionObj.value || {}, position = options.position, id = options.id || '';
            this._type = options.type || 'tap track';
            this._isElastic = options.elastic;
            this._useContext = options.useContext;
            this._templateUrl = options.templateUrl;
            this._initializeEvents(id, position);
        };
        DrawerController.prototype.dispose = function () {
            var _this = this;
            var $utils = this.$utils, drawer = this._drawer;
            if ($utils.isNull(drawer)) {
                return;
            }
            drawer.spliceController(this);
            if (drawer.controllerCount() > 0) {
                return;
            }
            var storedStyle = this._rootElementStyle, rootElement = this._rootElement, disposeRootElement = true;
            this._disposeRemover();
            this.on(__DrawerControllerDisposingFound, function (ev, otherRoot) {
                if (!disposeRootElement) {
                    return;
                }
                disposeRootElement = rootElement !== otherRoot;
            });
            $utils.defer(function () {
                if (!disposeRootElement) {
                    return;
                }
                _this.dom.removeClass(rootElement, __Drawer + '-open plat-drawer-transition-prep ' + _this._directionalTransitionPrep);
                if ($utils.isObject(storedStyle)) {
                    var rootElementStyle = _this._rootElement.style;
                    $utils.extend(rootElementStyle, storedStyle);
                }
            }, 25);
            this.dispatchEvent(__DrawerControllerDisposing, plat.events.EventManager.DIRECT);
        };
        DrawerController.prototype.open = function () {
            var _this = this;
            var wasClosed = !this._isOpen, $utils = this.$utils;
            if ($utils.isFunction(this._toggleDelay)) {
                this._toggleDelay();
            }
            var promise = new this.$Promise(function (resolve) {
                _this._toggleDelay = $utils.postpone(function () {
                    _this._toggleDelay = null;
                    _this._open().then(resolve);
                });
            });
            if (wasClosed) {
                if (this._useContext) {
                    this.propertyChanged(true);
                }
                else if (!$utils.isNull(this._drawer)) {
                    this._drawer.propertyChanged(true);
                }
            }
            return promise;
        };
        DrawerController.prototype.close = function () {
            var _this = this;
            var wasOpen = this._isOpen, $utils = this.$utils;
            if ($utils.isFunction(this._toggleDelay)) {
                this._toggleDelay();
            }
            var promise = new this.$Promise(function (resolve) {
                _this._toggleDelay = $utils.postpone(function () {
                    _this._toggleDelay = null;
                    _this._close().then(resolve);
                });
            });
            if (wasOpen) {
                if (this._useContext) {
                    this.propertyChanged(false);
                }
                else if (!$utils.isNull(this._drawer)) {
                    this._drawer.propertyChanged(false);
                }
            }
            return promise;
        };
        DrawerController.prototype.toggle = function () {
            if (this._isOpen) {
                return this.close();
            }
            return this.open();
        };
        DrawerController.prototype.reset = function () {
            if (this._isOpen) {
                return this.open();
            }
            return this.close();
        };
        DrawerController.prototype.isOpen = function () {
            return this._isOpen;
        };
        DrawerController.prototype.bindTemplate = function (name, node) {
            var _this = this;
            var bindableTemplates = this.bindableTemplates;
            bindableTemplates.add(name, node);
            bindableTemplates.bind(name).then(function (template) {
                var element = _this._drawerElement;
                _this.dom.clearNode(element);
                element.appendChild(template);
            }).catch(function (error) {
                _this.$utils.postpone(function () {
                    var $exception = plat.acquire(__ExceptionStatic);
                    $exception.fatal(error, $exception.BIND);
                });
            });
        };
        DrawerController.prototype.setProperty = function (newValue) {
            var _this = this;
            if (!this.loaded) {
                this._preloadedValue = newValue;
                return;
            }
            var $utils = this.$utils;
            if ($utils.isBoolean(newValue)) {
                if (newValue) {
                    if (this._isOpen) {
                        return;
                    }
                    this._toggleDelay = $utils.postpone(function () {
                        _this._toggleDelay = null;
                        _this._open();
                    });
                    return;
                }
                if (this._isOpen) {
                    this._toggleDelay = $utils.postpone(function () {
                        _this._toggleDelay = null;
                        _this._close();
                    });
                }
            }
        };
        DrawerController.prototype._open = function () {
            var rootElement = this._rootElement, drawerElement = this._drawerElement, $utils = this.$utils, isNode = $utils.isNode, wasClosed = !this._isOpen;
            if (!(isNode(rootElement) && isNode(drawerElement))) {
                return this.$Promise.resolve(null);
            }
            var translation;
            switch (this._position) {
                case 'left':
                    translation = 'translate3d(' + this._maxOffset + 'px,0,0)';
                    break;
                case 'right':
                    translation = 'translate3d(' + (-this._maxOffset) + 'px,0,0)';
                    break;
                case 'top':
                    translation = 'translate3d(0,' + this._maxOffset + 'px,0)';
                    break;
                case 'bottom':
                    translation = 'translate3d(0,' + (-this._maxOffset) + 'px,0)';
                    break;
                default:
                    return this.$animator.resolve();
            }
            this._isOpen = true;
            drawerElement.removeAttribute(__Hide);
            if (wasClosed) {
                this.dom.addClass(rootElement, __Drawer + '-open ' + this._directionalTransitionPrep);
                this._addEventIntercepts();
            }
            else {
                this.dom.addClass(rootElement, this._directionalTransitionPrep);
            }
            var animationOptions = {};
            animationOptions[this._transform] = translation;
            return this.$animator.animate(rootElement, __Transition, {
                properties: animationOptions
            });
        };
        DrawerController.prototype._close = function () {
            var _this = this;
            var rootElement = this._rootElement, drawerElement = this._drawerElement, dom = this.dom, $utils = this.$utils, isNode = $utils.isNode;
            if (this._isOpen) {
                this._removeEventIntercepts();
                dom.removeClass(rootElement, __Drawer + '-open');
            }
            this._isOpen = false;
            if (!(isNode(rootElement) && isNode(drawerElement))) {
                return this.$Promise.resolve(null);
            }
            var animationOptions = {}, transform = this._transform;
            animationOptions[transform] = this._preTransform;
            return this.$animator.animate(rootElement, __Transition, {
                properties: animationOptions
            }).then(function () {
                if (_this._isOpen) {
                    return;
                }
                drawerElement.setAttribute(__Hide, '');
                dom.removeClass(rootElement, _this._directionalTransitionPrep);
            });
        };
        DrawerController.prototype._addEventIntercepts = function () {
            if (this._isTap) {
                this._addTapClose();
            }
            if (this._isSwipe) {
                this._addSwipeClose();
            }
            if (this._isTrack) {
                var rootElement = this._rootElement;
                var touchStartRemover = this.addEventListener(rootElement, __$touchstart, this._touchStart, false), trackRemover = this.addEventListener(rootElement, __$track, this._track, false), touchEnd = this._touchEnd, trackEndRemover = this.addEventListener(rootElement, __$trackend, touchEnd, false), touchEndRemover = this.addEventListener(rootElement, __$touchend, touchEnd, false);
                this._openTrackRemover = function () {
                    touchStartRemover();
                    trackRemover();
                    trackEndRemover();
                    touchEndRemover();
                };
            }
        };
        DrawerController.prototype._removeEventIntercepts = function () {
            var isFunction = this.$utils.isFunction;
            if (this._isTap && isFunction(this._openTapRemover)) {
                this._openTapRemover();
                this._openTapRemover = null;
            }
            if (this._isTrack && isFunction(this._openTrackRemover)) {
                this._openTrackRemover();
                this._openTrackRemover = null;
            }
            if (this._isSwipe && isFunction(this._openSwipeRemover)) {
                this._openSwipeRemover();
                this._openSwipeRemover = null;
            }
        };
        DrawerController.prototype._addSwipeOpen = function () {
            var _this = this;
            this._removeSwipeOpen = this.addEventListener(this.element, __$swipe + __transitionNegate[this._position], function () {
                _this._hasSwiped = true;
                _this.open();
            }, false);
        };
        DrawerController.prototype._addSwipeClose = function () {
            var _this = this;
            this._openSwipeRemover = this.addEventListener(this._rootElement, __$swipe + this._position, function () {
                _this._hasSwiped = true;
                _this.close();
            }, false);
        };
        DrawerController.prototype._addTapOpen = function () {
            var _this = this;
            this._removeTap = this.addEventListener(this.element, __$tap, function () {
                _this._hasTapped = true;
                _this.open();
            }, false);
        };
        DrawerController.prototype._addTapClose = function () {
            var _this = this;
            this._openTapRemover = this.addEventListener(this._rootElement, __$tap, function () {
                _this._hasTapped = true;
                _this.close();
            }, false);
        };
        DrawerController.prototype._addEventListeners = function (position) {
            var element = this.element, isNull = this.$utils.isNull, types = this._type.split(' ');
            this._position = position;
            this.addEventListener(this.$window, 'resize', this._setOffset, false);
            if (this._isTap = (types.indexOf('tap') !== -1)) {
                this._addTapOpen();
            }
            if (this._isSwipe = (types.indexOf('swipe') !== -1)) {
                this._addSwipeOpen();
            }
            if (this._isTrack = (types.indexOf('track') !== -1)) {
                var trackFn = this._track, trackDirection;
                switch (position) {
                    case 'left':
                    case 'right':
                        trackDirection = position;
                        break;
                    case 'top':
                        trackDirection = 'up';
                        break;
                    case 'bottom':
                        trackDirection = 'down';
                        break;
                    default:
                        var Exception = plat.acquire(plat.IExceptionStatic);
                        Exception.warn('Incorrect position: "' + position + '" defined for the drawer control, such as "' + __Drawer + '", or "' + this.type + '."');
                        return;
                }
                this._removePrimaryTrack = this.addEventListener(element, __$track + __transitionNegate[trackDirection], trackFn, false);
                this._removeSecondaryTrack = this.addEventListener(element, __$track + trackDirection, trackFn, false);
                if (isNull(this._lastTouch)) {
                    var touchEnd = this._touchEnd;
                    this._lastTouch = { x: 0, y: 0 };
                    this.addEventListener(element, __$touchstart, this._touchStart, false);
                    this.addEventListener(element, __$touchend, touchEnd, false);
                    this.addEventListener(element, __$trackend, touchEnd, false);
                }
            }
        };
        DrawerController.prototype._removeEventListeners = function () {
            var isFunction = this.$utils.isFunction;
            if (this._isTap && isFunction(this._removeTap)) {
                this._removeTap();
                this._removeTap = null;
            }
            if (this._isTrack) {
                if (isFunction(this._removePrimaryTrack)) {
                    this._removePrimaryTrack();
                    this._removePrimaryTrack = null;
                }
                if (isFunction(this._removeSecondaryTrack)) {
                    this._removeSecondaryTrack();
                    this._removeSecondaryTrack = null;
                }
            }
            if (this._isSwipe && isFunction(this._removeSwipeOpen)) {
                this._removeSwipeOpen();
                this._removeSwipeOpen = null;
            }
        };
        DrawerController.prototype._touchStart = function (ev) {
            this._inTouch = true;
            this._lastTouch = {
                x: ev.clientX,
                y: ev.clientY
            };
            if (this._isOpen) {
                return;
            }
            this._drawerElement.removeAttribute(__Hide);
            this.dom.addClass(this._rootElement, this._directionalTransitionPrep);
        };
        DrawerController.prototype._touchEnd = function (ev) {
            var inTouch = this._inTouch, hasSwiped = this._hasSwiped, hasTapped = this._hasTapped;
            this._inTouch = this._hasSwiped = this._hasTapped = false;
            if (hasTapped || !inTouch || hasSwiped) {
                return;
            }
            var distanceMoved;
            switch (this._position) {
                case 'left':
                case 'right':
                    distanceMoved = ev.clientX - this._lastTouch.x;
                    break;
                case 'top':
                case 'bottom':
                    distanceMoved = ev.clientY - this._lastTouch.y;
                    break;
                default:
                    return;
            }
            if (this._isRightDirection(distanceMoved) && Math.abs(distanceMoved) > Math.ceil(this._maxOffset / 2)) {
                this.$utils.postpone(this.toggle, null, this);
                return;
            }
            this.$utils.postpone(this.reset, null, this);
        };
        DrawerController.prototype._track = function (ev) {
            this._rootElement.style[this._transform] = this._calculateTranslation(ev);
        };
        DrawerController.prototype._isRightDirection = function (distanceMoved) {
            switch (this._position) {
                case 'left':
                case 'top':
                    return this._isOpen ? distanceMoved < 0 : distanceMoved > 0;
                case 'right':
                case 'bottom':
                    return this._isOpen ? distanceMoved > 0 : distanceMoved < 0;
                default:
                    return false;
            }
        };
        DrawerController.prototype._calculateTranslation = function (ev) {
            var distanceMoved;
            switch (this._position) {
                case 'left':
                    distanceMoved = this._isOpen ? this._checkElasticity(this._maxOffset + ev.clientX - this._lastTouch.x) : this._checkElasticity(ev.clientX - this._lastTouch.x);
                    return 'translate3d(' + distanceMoved + 'px,0,0)';
                case 'right':
                    distanceMoved = this._isOpen ? this._checkElasticity(this._maxOffset + this._lastTouch.x - ev.clientX) : this._checkElasticity(this._lastTouch.x - ev.clientX);
                    return 'translate3d(' + (-distanceMoved) + 'px,0,0)';
                case 'top':
                    distanceMoved = this._isOpen ? this._checkElasticity(this._maxOffset + ev.clientY - this._lastTouch.y) : this._checkElasticity(ev.clientY - this._lastTouch.y);
                    return 'translate3d(0,' + distanceMoved + 'px,0)';
                case 'bottom':
                    distanceMoved = this._isOpen ? this._checkElasticity(this._maxOffset + this._lastTouch.y - ev.clientY) : this._checkElasticity(this._lastTouch.y - ev.clientY);
                    return 'translate3d(0,' + (-distanceMoved) + 'px,0)';
                default:
                    return this._preTransform;
            }
        };
        DrawerController.prototype._checkElasticity = function (distanceMoved) {
            if (this._isElastic) {
                return distanceMoved;
            }
            if (distanceMoved < 0) {
                distanceMoved = 0;
            }
            else if (distanceMoved > this._maxOffset) {
                distanceMoved = this._maxOffset;
            }
            return distanceMoved;
        };
        DrawerController.prototype._initializeEvents = function (id, position) {
            var _this = this;
            this._setTransform();
            var eventRemover = this.on(__DrawerFoundEvent + '_' + id, function (event, drawerArg) {
                eventRemover();
                var $utils = _this.$utils, isString = $utils.isString, isUndefined = $utils.isUndefined, drawer = (_this._drawer = drawerArg.control) || {}, drawerElement = _this._drawerElement = drawer.element, useContext = _this._useContext;
                if (!isString(position)) {
                    if (isString(drawerArg.position)) {
                        position = drawerArg.position;
                    }
                    else {
                        var Exception = plat.acquire(plat.IExceptionStatic);
                        Exception.warn('"position" is incorrectly defined for the drawer control, such as "' + __Drawer + '" or "' + _this.type + '."' + ' Please ensure it is a string.');
                        return;
                    }
                }
                if (!_this._controllerIsValid(position)) {
                    return;
                }
                _this._addEventListeners(position.toLowerCase());
                _this._setOffset();
                if (isUndefined(_this._isElastic)) {
                    _this._isElastic = drawerArg.elastic === true;
                }
                if (!drawerArg.received) {
                    _this.dispatchEvent(__DrawerControllerFetchEvent + '_' + id, plat.events.EventManager.DIRECT, {
                        control: _this,
                        received: true,
                        position: position
                    });
                }
                if (useContext === false || (isUndefined(useContext) && drawerArg.useContext === true)) {
                    return;
                }
                _this._useContext = true;
                _this._determineTemplate(drawerArg.template);
                if (_this._preloadedValue) {
                    _this._toggleDelay = $utils.postpone(function () {
                        _this._toggleDelay = null;
                        _this._open();
                    });
                }
            });
            this.dispatchEvent(__DrawerControllerFetchEvent + '_' + id, plat.events.EventManager.DIRECT, {
                control: this,
                received: false,
                position: position
            });
        };
        DrawerController.prototype._determineTemplate = function (fragment) {
            var _this = this;
            var $utils = this.$utils;
            if ($utils.isString(this._templateUrl)) {
                plat.ui.TemplateControl.determineTemplate(this, this._templateUrl).then(function (template) {
                    _this.bindTemplate('drawer', template);
                });
            }
            else if ($utils.isNode(fragment)) {
                this.bindTemplate('drawer', fragment);
            }
        };
        DrawerController.prototype._setTransform = function () {
            var style = this.element.style, isUndefined = this.$utils.isUndefined, transform;
            if (isUndefined(style.transform)) {
                var vendorPrefix = this.$compat.vendorPrefix;
                if (!isUndefined(style[(vendorPrefix.lowerCase + 'Transform')])) {
                    transform = this._transform = vendorPrefix.lowerCase + 'Transform';
                }
                else if (!isUndefined(style[(vendorPrefix.js + 'Transform')])) {
                    transform = this._transform = vendorPrefix.lowerCase + 'Transform';
                }
            }
            else {
                transform = this._transform = 'transform';
            }
            this._preTransform = style[transform];
        };
        DrawerController.prototype._controllerIsValid = function (position) {
            var _this = this;
            var isNull = this.$utils.isNull, Exception;
            if (isNull(this._drawerElement)) {
                Exception = plat.acquire(plat.IExceptionStatic);
                Exception.warn('Could not find a corresponding drawer control, such as "' + __Drawer + '" for this "' + this.type + '."');
                return false;
            }
            var rootElement = this._rootElement = this._getRootElement(this.root);
            if (isNull(rootElement)) {
                Exception = plat.acquire(plat.IExceptionStatic);
                Exception.warn('Cannot have a "' + this.type + '" in a hierarchy above the corresponding drawer control, such as "' + __Drawer + '."');
                return false;
            }
            var dom = this.dom, transitionPrep = 'plat-drawer-transition-prep';
            if (!dom.hasClass(rootElement, transitionPrep)) {
                dom.addClass(rootElement, transitionPrep);
            }
            this._directionalTransitionPrep = 'plat-drawer-transition-' + position;
            this._disposeRemover = this.on(__DrawerControllerDisposing, function () {
                _this.dispatchEvent(__DrawerControllerDisposingFound, plat.events.EventManager.DIRECT, rootElement);
            });
            return true;
        };
        DrawerController.prototype._getRootElement = function (root) {
            var $utils = this.$utils, isNode = $utils.isNode;
            if (!$utils.isObject(root)) {
                return null;
            }
            var element = root.element, drawer = this._drawerElement, parent;
            while (isNode(element) && !((parent = element.parentElement).contains(drawer))) {
                element = parent;
            }
            var $window = this.$window, computedStyle = $window.getComputedStyle(element), style = element.style, position = computedStyle.position, zIndex = Number(computedStyle.zIndex), rootElementStyle;
            if (position === 'static') {
                rootElementStyle = {
                    position: style.position
                };
                style.position = 'relative';
            }
            if (!$utils.isNumber(zIndex) || zIndex < 1) {
                rootElementStyle = rootElementStyle || {};
                rootElementStyle.zIndex = style.zIndex;
                style.zIndex = '1';
            }
            this._rootElementStyle = rootElementStyle;
            return element;
        };
        DrawerController.prototype._setOffset = function () {
            var drawerElement = this._drawerElement;
            drawerElement.removeAttribute(__Hide);
            switch (this._position) {
                case 'left':
                case 'right':
                    this._maxOffset = this._drawerElement.offsetWidth;
                    break;
                case 'top':
                case 'bottom':
                    this._maxOffset = this._drawerElement.offsetHeight;
                    break;
                default:
                    break;
            }
            drawerElement.setAttribute(__Hide, '');
        };
        return DrawerController;
    })(plat.ui.BindablePropertyControl);
    platui.DrawerController = DrawerController;
    plat.register.control(__DrawerController, DrawerController);
    var Modal = (function (_super) {
        __extends(Modal, _super);
        function Modal() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.$compat = plat.acquire(__Compat);
            this.templateString = '<div class="plat-modal-container"></div>\n';
            this._isVisible = false;
            this._loaded = false;
            this._preloadedValue = false;
            this._transitionHash = {
                up: true,
                down: true,
                left: true,
                right: true,
                fade: true
            };
        }
        Modal.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Modal + ' ' + __Hide + ' ' + (className || ''));
        };
        Modal.prototype.initialize = function () {
            var optionObj = this.options || {}, options = optionObj.value || {};
            this.templateUrl = options.templateUrl;
            this.setClasses();
        };
        Modal.prototype.setTemplate = function () {
            var $utils = this.$utils, modalContainer;
            if ($utils.isString(this.templateUrl)) {
                var fragment = this.dom.serializeHtml(this.templateString), element = this.element, childNodes = Array.prototype.slice.call(element.childNodes);
                modalContainer = this._modalElement = fragment.firstChild;
                while (childNodes.length > 0) {
                    modalContainer.appendChild(childNodes.shift());
                }
                element.appendChild(fragment);
                return;
            }
            modalContainer = this._modalElement = this.element.firstElementChild;
            var innerTemplate = this.innerTemplate;
            if ($utils.isNode(innerTemplate)) {
                modalContainer.appendChild(innerTemplate);
            }
        };
        Modal.prototype.loaded = function () {
            var _this = this;
            var optionObj = this.options || {}, options = optionObj.value || {}, transition = options.transition;
            this._modalElement = this._modalElement || this.element.firstElementChild;
            this._loaded = true;
            if (!this.$utils.isString(transition) || transition === 'none') {
                this.dom.addClass(this._modalElement, __Plat + 'no-transition');
                if (this._preloadedValue) {
                    this.$utils.postpone(function () {
                        _this._show();
                    });
                }
                return;
            }
            else if (!this._transitionHash[transition]) {
                var Exception = plat.acquire(plat.IExceptionStatic);
                Exception.warn('Custom transition: "' + transition + '" defined for "' + this.type + '." Please ensure the transition is defined to avoid errors.');
            }
            this._transitionEnd = this.$compat.animationEvents.$transitionEnd;
            this.dom.addClass(this._modalElement, __Plat + transition + ' ' + __Plat + 'modal-transition');
            if (this._preloadedValue) {
                this.$utils.postpone(function () {
                    _this._show();
                });
            }
        };
        Modal.prototype.show = function () {
            var wasHidden = !this._isVisible;
            this._show();
            if (wasHidden) {
                this.propertyChanged(true);
            }
        };
        Modal.prototype.hide = function () {
            var wasVisible = this.isVisible;
            this._hide();
            if (wasVisible) {
                this.propertyChanged(false);
            }
        };
        Modal.prototype.toggle = function () {
            if (this._isVisible) {
                this.hide();
                return;
            }
            this.show();
        };
        Modal.prototype.isVisible = function () {
            return this._isVisible;
        };
        Modal.prototype.setProperty = function (newValue, oldValue) {
            if (!this._loaded) {
                this._preloadedValue = newValue;
                return;
            }
            if (this.$utils.isBoolean(newValue)) {
                if (newValue) {
                    if (this._isVisible) {
                        return;
                    }
                    this._show();
                    return;
                }
                if (this._isVisible) {
                    this._hide();
                }
            }
        };
        Modal.prototype._show = function () {
            var _this = this;
            var dom = this.dom;
            dom.removeClass(this.element, __Hide);
            this.$utils.defer(function () {
                dom.addClass(_this._modalElement, __Plat + 'activate');
            }, 25);
            this._isVisible = true;
        };
        Modal.prototype._hide = function () {
            var dom = this.dom;
            if (this.$utils.isString(this._transitionEnd)) {
                this._addHideOnTransitionEnd();
            }
            else {
                dom.addClass(this.element, __Hide);
            }
            dom.removeClass(this._modalElement, __Plat + 'activate');
            this._isVisible = false;
        };
        Modal.prototype._addHideOnTransitionEnd = function () {
            var _this = this;
            var element = this.element, remove = this.addEventListener(element, this._transitionEnd, function () {
                remove();
                _this.dom.addClass(element, __Hide);
            }, false);
        };
        return Modal;
    })(plat.ui.BindablePropertyControl);
    platui.Modal = Modal;
    plat.register.control(__Modal, Modal);
    var Navbar = (function (_super) {
        __extends(Navbar, _super);
        function Navbar() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.$animator = plat.acquire(__Animator);
            this.replaceWith = 'nav';
            this._actionAnimation = plat.acquire(platui.NavbarActionPulse);
        }
        Navbar.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Navbar + ' ' + (className || ''));
        };
        Navbar.prototype.initialize = function () {
            this.setClasses();
        };
        Navbar.prototype.setTemplate = function () {
            var element = this.element, navbarActions = element.querySelectorAll('.navbar-action'), i;
            for (i = 0; i < navbarActions.length; i++) {
                this.addEventListener(navbarActions[i], __$tap, this._actionPressed, false);
            }
        };
        Navbar.prototype._actionPressed = function (ev) {
            this.$animator.animate(ev.srcElement, __NavbarActionPulse, { pseudo: '::after' });
        };
        return Navbar;
    })(plat.ui.TemplateControl);
    platui.Navbar = Navbar;
    plat.register.control(__Navbar, Navbar);
    var NavbarActionPulse = (function (_super) {
        __extends(NavbarActionPulse, _super);
        function NavbarActionPulse() {
            _super.apply(this, arguments);
            this.className = __NavbarActionPulse;
        }
        return NavbarActionPulse;
    })(plat.ui.animations.SimpleCssAnimation);
    platui.NavbarActionPulse = NavbarActionPulse;
    plat.register.animation(__NavbarActionPulse, NavbarActionPulse);
    var Slider = (function (_super) {
        __extends(Slider, _super);
        function Slider() {
            _super.apply(this, arguments);
            this.$window = plat.acquire(__Window);
            this.$document = plat.acquire(__Document);
            this.$utils = plat.acquire(__Utils);
            this.$animator = plat.acquire(__Animator);
            this.templateString = '<div class="plat-slider-container">' + '    <div class="plat-slider-offset">' + '        <div class="plat-knob"></div>' + '    </div>' + '</div>';
            this._knobOffset = 0;
            this._loaded = false;
            this._cloneAttempts = 0;
            this._maxCloneAttempts = 25;
        }
        Slider.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Slider + ' ' + (className || ''));
        };
        Slider.prototype.initialize = function () {
            this.setClasses();
        };
        Slider.prototype.loaded = function () {
            var element = this.element, slider = this._slider = element.firstElementChild.firstElementChild, isNumber = this.$utils.isNumber, optionObj = this.options || {}, options = optionObj.value || {}, optionValue = Number(options.value), optionMin = options.min, optionMax = options.max, step = options.step, reversed = this._reversed = (options.reverse === true), orientation = this._orientation = options.orientation || 'horizontal', bindValue = this.value, min = this.min = isNumber(optionMin) ? Math.floor(optionMin) : 0, max = this.max = isNumber(optionMax) ? Math.ceil(optionMax) : 100, value = isNumber(bindValue) ? bindValue : isNumber(optionValue) ? optionValue : min, className = __Plat + orientation;
            this._knob = slider.firstElementChild;
            if (reversed) {
                className += __Reversed;
            }
            this.dom.addClass(element, className);
            this.value = min;
            this._step = isNumber(step) ? (step > 0 ? step : 1) : 1;
            if (min >= max) {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('"' + this.type + '\'s" min is greater than or equal to its max. Setting max to min + 1.');
                this.max = min + 1;
            }
            this._setLength();
            this._setIncrement();
            this._initializeEvents(orientation);
            this.setValue(value);
            this._loaded = true;
        };
        Slider.prototype.setProperty = function (newValue) {
            if (newValue === this.value) {
                return;
            }
            else if (!this.$utils.isNumber(newValue)) {
                newValue = this.min;
            }
            if (this._loaded) {
                this._setValue(newValue, true, false);
                return;
            }
            this.value = newValue;
        };
        Slider.prototype.setValue = function (value) {
            if (!this.$utils.isNumber(value)) {
                return;
            }
            this._setValue(value, true, true);
        };
        Slider.prototype._touchStart = function (ev) {
            this._lastTouch = {
                x: ev.clientX,
                y: ev.clientY,
                value: this.value
            };
        };
        Slider.prototype._touchEnd = function (ev) {
            var newOffset = this._calculateOffset(ev), maxOffset = this._maxOffset;
            if (this._lastTouch.value !== this.value) {
                this._trigger('change');
            }
            if (newOffset < 0) {
                this._knobOffset = 0;
                return;
            }
            else if (newOffset > maxOffset) {
                this._knobOffset = maxOffset;
                return;
            }
            this._knobOffset = newOffset;
        };
        Slider.prototype._track = function (ev) {
            var length = this._calculateOffset(ev), maxOffset = this._maxOffset, value;
            if (length < 0) {
                value = this.min;
                if (value - this.value >= 0) {
                    return;
                }
                length = 0;
            }
            else if (length > maxOffset) {
                value = this.max;
                if (value - this.value <= 0) {
                    return;
                }
                length = maxOffset;
            }
            else {
                value = this._calculateValue(length);
            }
            this._setValue(value, false, true);
            this._slider.style[this._lengthProperty] = length + 'px';
        };
        Slider.prototype._initializeEvents = function (orientation) {
            var _this = this;
            var knob = this._knob, trackFn = this._track, track, reverseTrack;
            switch (orientation) {
                case 'horizontal':
                    track = __$track + 'right';
                    reverseTrack = __$track + 'left';
                    break;
                case 'vertical':
                    track = __$track + 'down';
                    reverseTrack = __$track + 'up';
                    break;
                default:
                    return;
            }
            this.addEventListener(knob, __$touchstart, this._touchStart, false);
            this.addEventListener(knob, track, trackFn, false);
            this.addEventListener(knob, reverseTrack, trackFn, false);
            this.addEventListener(knob, __$trackend, this._touchEnd, false);
            this.addEventListener(this.$window, 'resize', function () {
                _this._setLength();
                _this._setIncrement();
                _this._setKnob();
            }, false);
        };
        Slider.prototype._calculateValue = function (width) {
            var step = this._step;
            return (this.min + Math.round(width / this._increment / step) * step);
        };
        Slider.prototype._calculateKnobPosition = function (value) {
            return (value - this.min) * this._increment;
        };
        Slider.prototype._calculateOffset = function (ev) {
            switch (this._orientation) {
                case 'horizontal':
                    return this._reversed ? (this._knobOffset + this._lastTouch.x - ev.clientX) : (this._knobOffset + ev.clientX - this._lastTouch.x);
                case 'vertical':
                    return this._reversed ? (this._knobOffset + this._lastTouch.y - ev.clientY) : (this._knobOffset + ev.clientY - this._lastTouch.y);
                default:
                    return 0;
            }
        };
        Slider.prototype._setLength = function (element) {
            var isNode = this.$utils.isNode(element), el = isNode ? element : this._slider.parentElement;
            switch (this._orientation) {
                case 'horizontal':
                    this._lengthProperty = 'width';
                    this._maxOffset = el.offsetWidth;
                    break;
                case 'vertical':
                    this._lengthProperty = 'height';
                    this._maxOffset = el.offsetHeight;
                    break;
                default:
                    var Exception = plat.acquire(__ExceptionStatic);
                    Exception.warn('Invalid orientation "' + this._orientation + '" for "' + this.type + '."');
                    return;
            }
            if (!(isNode || this._maxOffset)) {
                this._setOffsetWithClone();
            }
        };
        Slider.prototype._setIncrement = function () {
            return (this._increment = this._maxOffset / (this.max - this.min));
        };
        Slider.prototype._setValue = function (newValue, setKnob, propertyChanged) {
            var value = this.value;
            if (newValue === value) {
                return;
            }
            else if (newValue >= this.max) {
                newValue = this.max;
            }
            else if (newValue <= this.min) {
                newValue = this.min;
            }
            else if (Math.abs(newValue - value) < this._step) {
                return;
            }
            this.value = this.element.value = newValue;
            if (setKnob) {
                this._setKnob();
            }
            if (propertyChanged) {
                this.propertyChanged(newValue, value);
            }
            this._trigger('input');
        };
        Slider.prototype._setKnob = function (value) {
            var animationOptions = {}, length = this._calculateKnobPosition((value || this.value));
            if (length === this._knobOffset) {
                return;
            }
            animationOptions[this._lengthProperty] = length + 'px';
            this.$animator.animate(this._slider, __Transition, {
                properties: animationOptions
            });
            this._knobOffset = length;
        };
        Slider.prototype._trigger = function (event) {
            var domEvent = plat.acquire(__DomEventInstance);
            domEvent.initialize(this.element, event);
            domEvent.trigger();
        };
        Slider.prototype._setOffsetWithClone = function () {
            var element = this.element, body = this.$document.body;
            if (!body.contains(element)) {
                var cloneAttempts = ++this._cloneAttempts;
                if (cloneAttempts === this._maxCloneAttempts) {
                    var $exception = plat.acquire(__ExceptionStatic), type = this.type;
                    $exception.warn('Max clone attempts reached before the ' + type + ' was placed into the ' + 'DOM. Disposing of the ' + type);
                    plat.acquire(__TemplateControlFactory).dispose(this);
                    return;
                }
                this.$utils.postpone(this._setOffsetWithClone, null, this);
                return;
            }
            this._cloneAttempts = 0;
            var clone = element.cloneNode(true), regex = /\d+(?!\d+|%)/, $window = this.$window, parentChain = [], shallowCopy = clone, computedStyle, width;
            shallowCopy.id = '';
            while (!regex.test((width = (computedStyle = $window.getComputedStyle(element)).width))) {
                if (computedStyle.display === 'none') {
                    shallowCopy.style.setProperty('display', 'block', 'important');
                }
                shallowCopy.style.setProperty('width', width, 'important');
                element = element.parentElement;
                shallowCopy = element.cloneNode(false);
                shallowCopy.id = '';
                parentChain.push(shallowCopy);
            }
            if (parentChain.length > 0) {
                var curr = parentChain.pop(), currStyle = curr.style, temp;
                while (parentChain.length > 0) {
                    temp = parentChain.pop();
                    curr.insertBefore(temp, null);
                    curr = temp;
                }
                curr.insertBefore(clone, null);
            }
            var shallowStyle = shallowCopy.style;
            shallowStyle.setProperty('width', width, 'important');
            shallowStyle.setProperty('visibility', 'hidden', 'important');
            body.appendChild(shallowCopy);
            this._setLength(clone.firstElementChild);
            body.removeChild(shallowCopy);
        };
        return Slider;
    })(plat.ui.BindablePropertyControl);
    platui.Slider = Slider;
    plat.register.control(__Slider, Slider);
    var Range = (function (_super) {
        __extends(Range, _super);
        function Range() {
            _super.apply(this, arguments);
            this.$window = plat.acquire(__Window);
            this.$document = plat.acquire(__Document);
            this.$utils = plat.acquire(__Utils);
            this.$animator = plat.acquire(__Animator);
            this.templateString = '<div class="plat-range-container">' + '    <div class="plat-slider-offset">' + '        <div class="plat-lower-knob"></div>' + '        <div class="plat-upper-knob"></div>' + '    </div>' + '</div>';
            this._isSelf = false;
            this._cloneAttempts = 0;
            this._maxCloneAttempts = 25;
        }
        Range.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Range + ' ' + (className || ''));
        };
        Range.prototype.contextChanged = function () {
            var context = this.context, $utils = this.$utils;
            if (!$utils.isObject(context)) {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('"' + this.type + '\'s" context should be an object that implements the platui.IRangeContext interface.');
                return;
            }
            var lower = context.lower, upper = context.upper, isNumber = $utils.isNumber;
            this.setLower(isNumber(lower) ? lower : 0);
            this.setUpper(isNumber(upper) ? upper : this.max);
        };
        Range.prototype.initialize = function () {
            this.setClasses();
        };
        Range.prototype.loaded = function () {
            var context = this.context || {}, element = this.element, slider = this._slider = element.firstElementChild.firstElementChild, $utils = this.$utils, isNumber = $utils.isNumber, optionObj = this.options || {}, options = optionObj.value || {}, optionLower = Number(options.lower), optionUpper = Number(options.upper), optionMin = options.min, optionMax = options.max, step = options.step, orientation = this._orientation = options.orientation || 'horizontal', reversed = this._reversed = (options.reverse === true), contextLower = context.lower, contextUpper = context.upper, min = this.min = isNumber(optionMin) ? Math.floor(optionMin) : 0, max = this.max = isNumber(optionMax) ? Math.ceil(optionMax) : 100, lower = isNumber(contextLower) ? contextLower : isNumber(optionLower) ? optionLower : min, upper = isNumber(contextUpper) ? contextUpper : isNumber(optionUpper) ? optionUpper : max, className = __Plat + orientation, Exception;
            this._lowerKnob = slider.firstElementChild;
            this._upperKnob = slider.lastElementChild;
            if (reversed) {
                var lowerKnob = this._lowerKnob;
                this._lowerKnob = this._upperKnob;
                this._upperKnob = lowerKnob;
                className += __Reversed;
            }
            this.dom.addClass(element, className);
            this.lower = min;
            this.upper = max;
            this._step = isNumber(step) ? (step > 0 ? step : 1) : 1;
            if (min >= max) {
                Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('"' + this.type + '\'s" min is greater than or equal to its max. Setting max to min + 1.');
                this.max = min + 1;
            }
            this._setPositionAndLength();
            this._setIncrement();
            this._setLowerKnob(min);
            this._initializeEvents(orientation);
            if (!$utils.isObject(this.context)) {
                Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('"' + this.type + '\'s" context should be an object that implements the platui.IRangeContext interface.');
                return;
            }
            this.setLower(lower);
            this.setUpper(upper);
            this._watchContext();
        };
        Range.prototype.setLower = function (value) {
            var $utils = this.$utils, isNumber = $utils.isNumber;
            if (!$utils.isObject(this.context)) {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('Cannot set the lower value of a "' + this.type + '" whose context has ' + 'not yet been set to an object.');
                return;
            }
            else if (!isNumber(value)) {
                var numberVal = Number(value);
                if (isNumber(numberVal)) {
                    value = numberVal;
                }
                else {
                    return;
                }
            }
            this._setLower(value, true);
        };
        Range.prototype.setUpper = function (value) {
            var $utils = this.$utils, isNumber = $utils.isNumber;
            if (!$utils.isObject(this.context)) {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('Cannot set the upper value of a "' + this.type + '" whose context has ' + 'not yet been set to an object.');
                return;
            }
            else if (!isNumber(value)) {
                var numberVal = Number(value);
                if (isNumber(numberVal)) {
                    value = numberVal;
                }
                else {
                    return;
                }
            }
            this._setUpper(value, true);
        };
        Range.prototype._watchContext = function () {
            var _this = this;
            var context = this.context;
            this.observe(context, 'lower', function (newValue, oldValue) {
                if (_this._isSelf || newValue === oldValue) {
                    return;
                }
                _this.setLower(newValue);
            });
            this.observe(context, 'upper', function (newValue, oldValue) {
                if (_this._isSelf || newValue === oldValue) {
                    return;
                }
                _this.setUpper(newValue);
            });
        };
        Range.prototype._initializeEvents = function (orientation) {
            var _this = this;
            var lowerKnob = this._lowerKnob, upperKnob = this._upperKnob, touchstart = this._touchStart, touchEnd = this._touchEnd, trackLower = this._trackLower, trackUpper = this._trackUpper, track, reverseTrack;
            switch (orientation) {
                case 'horizontal':
                    track = __$track + 'right';
                    reverseTrack = __$track + 'left';
                    break;
                case 'vertical':
                    track = __$track + 'down';
                    reverseTrack = __$track + 'up';
                    break;
                default:
                    return;
            }
            this.addEventListener(lowerKnob, __$touchstart, touchstart, false);
            this.addEventListener(upperKnob, __$touchstart, touchstart, false);
            this.addEventListener(lowerKnob, track, trackLower, false);
            this.addEventListener(lowerKnob, reverseTrack, trackLower, false);
            this.addEventListener(upperKnob, track, trackUpper, false);
            this.addEventListener(upperKnob, reverseTrack, trackUpper, false);
            this.addEventListener(lowerKnob, __$trackend, touchEnd, false);
            this.addEventListener(upperKnob, __$trackend, touchEnd, false);
            this.addEventListener(this.$window, 'resize', function () {
                _this._setPositionAndLength();
                _this._setIncrement();
                _this._setLowerKnob();
                _this._setUpperKnob();
            }, false);
        };
        Range.prototype._touchStart = function (ev) {
            if (ev.touches.length > 1) {
                return;
            }
            var target = ev.currentTarget, lastTouch = this._lastTouch;
            if (!this.$utils.isNull(lastTouch)) {
                if (lastTouch.target !== target) {
                    lastTouch.target.style.zIndex = '0';
                    target.style.zIndex = '1';
                }
            }
            else {
                target.style.zIndex = '1';
            }
            this._lastTouch = {
                x: ev.clientX,
                y: ev.clientY,
                value: target === this._lowerKnob ? this.lower : this.upper,
                target: target
            };
        };
        Range.prototype._touchEnd = function (ev) {
            var lastTouch = this._lastTouch, target = ev.currentTarget;
            if (this.$utils.isNull(lastTouch) || (lastTouch.target !== target)) {
                return;
            }
            var isLower = target === this._lowerKnob, newOffset = this._calculateOffset(ev, isLower);
            if (isLower) {
                if (lastTouch.value !== this.lower) {
                    this._trigger('change');
                }
            }
            else if (lastTouch.value !== this.upper) {
                this._trigger('change');
            }
            this._setOffset(newOffset, isLower);
        };
        Range.prototype._setOffset = function (offset, isLower) {
            var maxOffset = this._maxOffset;
            if (offset < 0) {
                return isLower ? (this._lowerKnobOffset = 0) : (this._upperKnobOffset = 0);
            }
            else if (offset > maxOffset) {
                return isLower ? (this._lowerKnobOffset = maxOffset) : (this._upperKnobOffset = maxOffset);
            }
            return isLower ? (this._lowerKnobOffset = offset) : (this._upperKnobOffset = offset);
        };
        Range.prototype._trackLower = function (ev) {
            var maxOffset = this._maxOffset, position = this._calculateOffset(ev, true), value;
            if (position < 0) {
                value = this.min;
                if (value - this.lower >= 0) {
                    value = null;
                }
                position = 0;
            }
            else if (position > maxOffset) {
                value = this.max;
                if (value - this.lower <= 0) {
                    value = null;
                }
                position = maxOffset;
            }
            else {
                value = this._calculateValue(position);
                if (value - this.lower === 0) {
                    value = null;
                }
                if (position > this._upperKnobOffset) {
                    this._positionTogether(position, value);
                    this._setOffset(position, false);
                    return;
                }
            }
            this._positionLower(position, value);
        };
        Range.prototype._trackUpper = function (ev) {
            var maxOffset = this._maxOffset, position = this._calculateOffset(ev, false), value;
            if (position < 0) {
                value = this.min;
                if (value - this.upper >= 0) {
                    value = null;
                }
                position = 0;
            }
            else if (position > maxOffset) {
                value = this.max;
                if (value - this.upper <= 0) {
                    value = null;
                }
                position = maxOffset;
            }
            else {
                value = this._calculateValue(position);
                if (value - this.upper === 0) {
                    value = null;
                }
                if (position < this._lowerKnobOffset) {
                    this._positionTogether(position, value);
                    this._setOffset(position, true);
                    return;
                }
            }
            this._positionUpper(position, value);
        };
        Range.prototype._positionLower = function (position, value) {
            var style = this._slider.style;
            style[this._positionProperty] = position + 'px';
            style[this._lengthProperty] = (this._upperKnobOffset - position) + 'px';
            if (value === null) {
                return;
            }
            this._setLower(value, false);
        };
        Range.prototype._positionUpper = function (position, value) {
            this._slider.style[this._lengthProperty] = (position - this._lowerKnobOffset) + 'px';
            if (value === null) {
                return;
            }
            this._setUpper(value, false);
        };
        Range.prototype._positionTogether = function (position, value) {
            var style = this._slider.style;
            style[this._positionProperty] = position + 'px';
            style[this._lengthProperty] = '0px';
            if (value === null) {
                return;
            }
            this._setLower(value, false, false);
            this._setUpper(value, false);
        };
        Range.prototype._calculateValue = function (width) {
            var step = this._step;
            return (this.min + Math.round(width / this._increment / step) * step);
        };
        Range.prototype._calculateOffset = function (ev, isLower) {
            var currentOffset = isLower ? this._lowerKnobOffset : this._upperKnobOffset, displacement;
            if (this._orientation === 'vertical') {
                displacement = this._reversed ? this._lastTouch.y - ev.clientY : ev.clientY - this._lastTouch.y;
            }
            else {
                displacement = this._reversed ? this._lastTouch.x - ev.clientX : ev.clientX - this._lastTouch.x;
            }
            return currentOffset + displacement;
        };
        Range.prototype._calculateKnobPosition = function (value) {
            return (value - this.min) * this._increment;
        };
        Range.prototype._setLower = function (newValue, setKnob, trigger) {
            var lower = this.lower, context = this.context || {};
            if (newValue === lower) {
                if (context.lower !== lower) {
                    this._isSelf = true;
                    context.lower = lower;
                    this._isSelf = false;
                }
                return;
            }
            else if (newValue >= this.max) {
                newValue = this.max;
            }
            else if (newValue <= this.min) {
                newValue = this.min;
            }
            else if (Math.abs(newValue - lower) < this._step) {
                return;
            }
            this._isSelf = true;
            this.lower = context.lower = newValue;
            this._isSelf = false;
            if (setKnob) {
                this._setLowerKnob();
            }
            if (trigger === false) {
                return;
            }
            this._trigger('input');
        };
        Range.prototype._setUpper = function (newValue, setKnob, trigger) {
            var upper = this.upper, context = this.context || {};
            if (newValue === upper) {
                if (context.upper !== upper) {
                    this._isSelf = true;
                    context.upper = upper;
                    this._isSelf = false;
                }
                return;
            }
            else if (newValue >= this.max) {
                newValue = this.max;
            }
            else if (newValue <= this.min) {
                newValue = this.min;
            }
            else if (Math.abs(newValue - upper) < this._step) {
                return;
            }
            this._isSelf = true;
            this.upper = context.upper = newValue;
            this._isSelf = false;
            if (setKnob) {
                this._setUpperKnob();
            }
            if (trigger === false) {
                return;
            }
            this._trigger('input');
        };
        Range.prototype._setIncrement = function () {
            return (this._increment = this._maxOffset / (this.max - this.min));
        };
        Range.prototype._setPositionAndLength = function (element) {
            var isNode = this.$utils.isNode(element), el = isNode ? element : this._slider.parentElement;
            switch (this._orientation) {
                case 'horizontal':
                    this._lengthProperty = 'width';
                    this._positionProperty = this._reversed ? 'right' : 'left';
                    this._maxOffset = el.offsetWidth;
                    break;
                case 'vertical':
                    this._lengthProperty = 'height';
                    this._positionProperty = this._reversed ? 'bottom' : 'top';
                    this._maxOffset = el.offsetHeight;
                    break;
                default:
                    var Exception = plat.acquire(__ExceptionStatic);
                    Exception.warn('Invalid orientation "' + this._orientation + '" for "' + this.type + '."');
                    return;
            }
            if (!(isNode || this._maxOffset)) {
                this._setOffsetWithClone();
            }
        };
        Range.prototype._setLowerKnob = function (value) {
            var animationOptions = {}, upperKnobOffset = this._upperKnobOffset, upperOffset = this.$utils.isNumber(upperKnobOffset) ? upperKnobOffset : this._setOffset(this._calculateKnobPosition(this.upper), false), position = this._calculateKnobPosition((value || this.lower));
            if (position === this._lowerKnobOffset) {
                return;
            }
            animationOptions[this._positionProperty] = position + 'px';
            animationOptions[this._lengthProperty] = (upperOffset - position) + 'px';
            this.$animator.animate(this._slider, __Transition, {
                properties: animationOptions
            });
            this._lowerKnobOffset = position;
        };
        Range.prototype._setUpperKnob = function (value) {
            var animationOptions = {}, length = this._calculateKnobPosition((value || this.upper));
            if (length === this._upperKnobOffset) {
                return;
            }
            animationOptions[this._lengthProperty] = (length - this._lowerKnobOffset) + 'px';
            this.$animator.animate(this._slider, __Transition, {
                properties: animationOptions
            });
            this._upperKnobOffset = length;
        };
        Range.prototype._trigger = function (event) {
            var domEvent = plat.acquire(__DomEventInstance);
            domEvent.initialize(this.element, event);
            domEvent.trigger();
        };
        Range.prototype._setOffsetWithClone = function () {
            var element = this.element, body = this.$document.body;
            if (!body.contains(element)) {
                var cloneAttempts = ++this._cloneAttempts;
                if (cloneAttempts === this._maxCloneAttempts) {
                    var $exception = plat.acquire(__ExceptionStatic), type = this.type;
                    $exception.warn('Max clone attempts reached before the ' + type + ' was placed into the ' + 'DOM. Disposing of the ' + type);
                    plat.acquire(__TemplateControlFactory).dispose(this);
                    return;
                }
                this.$utils.postpone(this._setOffsetWithClone, null, this);
                return;
            }
            this._cloneAttempts = 0;
            var clone = element.cloneNode(true), regex = /\d+(?!\d+|%)/, $window = this.$window, parentChain = [], shallowCopy = clone, computedStyle, width;
            shallowCopy.id = '';
            while (!regex.test((width = (computedStyle = $window.getComputedStyle(element)).width))) {
                if (computedStyle.display === 'none') {
                    shallowCopy.style.setProperty('display', 'block', 'important');
                }
                shallowCopy.style.setProperty('width', width, 'important');
                element = element.parentElement;
                shallowCopy = element.cloneNode(false);
                shallowCopy.id = '';
                parentChain.push(shallowCopy);
            }
            if (parentChain.length > 0) {
                var curr = parentChain.pop(), currStyle = curr.style, temp;
                while (parentChain.length > 0) {
                    temp = parentChain.pop();
                    curr.insertBefore(temp, null);
                    curr = temp;
                }
                curr.insertBefore(clone, null);
            }
            var shallowStyle = shallowCopy.style;
            shallowStyle.setProperty('width', width, 'important');
            shallowStyle.setProperty('visibility', 'hidden', 'important');
            body.appendChild(shallowCopy);
            this._setPositionAndLength(clone.firstElementChild);
            body.removeChild(shallowCopy);
        };
        return Range;
    })(plat.ui.TemplateControl);
    platui.Range = Range;
    plat.register.control(__Range, Range);
    var Select = (function (_super) {
        __extends(Select, _super);
        function Select() {
            _super.apply(this, arguments);
        }
        Select.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Select + ' ' + (className || ''));
        };
        Select.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this.setClasses();
        };
        return Select;
    })(plat.ui.controls.Select);
    platui.Select = Select;
    plat.register.control(__Select, Select);
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.$compat = plat.acquire(__Compat);
            this.$regex = plat.acquire(__Regex);
            this.templateString = '<div class="plat-input-container">\n' + '    <span class="plat-input-image"></span>\n' + '    <input type="text" />\n' + '    <div class="plat-input-action"></div>\n' + '</div>\n';
            this._inTouch = false;
            this._inAction = false;
            this._usingBind = false;
            this._loaded = false;
            this._preloadedValue = '';
        }
        Input.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Input + ' ' + (className || ''));
        };
        Input.prototype.initialize = function () {
            this.setClasses();
        };
        Input.prototype.setTemplate = function () {
            var element = this.element, image = this._imageElement = element.firstElementChild.firstElementChild, input = this._inputElement = image.nextElementSibling, attributes = element.attributes, length = attributes.length, hasPlaceholder = false, attrRegex = /plat-(?!control|hide|options)/, attribute, $utils = this.$utils, name;
            for (var i = 0; i < length; ++i) {
                attribute = attributes[i];
                name = attribute.name;
                if (attrRegex.test(name)) {
                    if (name === __Bind || name === 'data-' + __Bind) {
                        this._usingBind = true;
                    }
                    else {
                        input.setAttribute(name, attribute.value);
                    }
                }
                else if (name === 'type') {
                    this._type = attribute.value;
                }
                else if (name === 'placeholder') {
                    input.placeholder = attribute.value;
                    hasPlaceholder = true;
                }
            }
            if (hasPlaceholder) {
                return;
            }
            var placeholder = this.innerTemplate.textContent.replace(/\r|\n/g, '');
            if (!$utils.isEmpty(placeholder)) {
                input.placeholder = placeholder;
            }
        };
        Input.prototype.loaded = function () {
            var optionObj = this.options || {}, options = optionObj.value || {}, element = this.element, type = this._type = this._type || options.type || 'text', pattern = options.pattern;
            this.dom.addClass(element, __Plat + type);
            this._actionElement = this._inputElement.nextElementSibling;
            if (this.$utils.isString(pattern)) {
                if (pattern[0] === '/' && pattern[pattern.length - 1] === '/') {
                    pattern = pattern.slice(1, -1);
                }
                this._pattern = new RegExp(pattern);
            }
            this._initializeType();
            this._loaded = true;
        };
        Input.prototype.dispose = function () {
            this._loaded = false;
        };
        Input.prototype.validate = function () {
            return this._pattern.test(this._inputElement.value);
        };
        Input.prototype.clear = function () {
            var inputElement = this._inputElement, value = inputElement.value;
            if (value === '') {
                return;
            }
            var actionElement = this._actionElement;
            this.propertyChanged((inputElement.value = ''), value);
            actionElement.textContent = this._typeChar = '';
            actionElement.setAttribute(__Hide, '');
        };
        Input.prototype.focus = function () {
            this._inputElement.focus();
        };
        Input.prototype.blur = function () {
            this._inputElement.blur();
        };
        Input.prototype.value = function () {
            return this._inputElement.value;
        };
        Input.prototype.setProperty = function (newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
            if (!this._loaded) {
                this._preloadedValue = newValue;
                return;
            }
            this._onInputChanged(newValue);
        };
        Input.prototype._initializeType = function () {
            var type = this._type, event = __$tap, actionElement = this._actionElement;
            switch (type) {
                case 'email':
                    this._pattern = this._pattern || this.$regex.validateEmail;
                    this._actionHandler = this._checkEmail.bind(this);
                    this._typeHandler = this._handleEmail;
                    break;
                case 'password':
                    var hidePassword = this._handlePasswordHide;
                    this._pattern = this._pattern || /[\S\s]*/;
                    this._actionHandler = this._checkPassword.bind(this);
                    this._typeHandler = this._handlePasswordShow;
                    this.addEventListener(actionElement, __$touchend, hidePassword);
                    this.addEventListener(actionElement, __$trackend, hidePassword);
                    event = __$touchstart;
                    break;
                case 'tel':
                case 'telephone':
                    this._pattern = this._pattern || this.$regex.validateTelephone;
                    this._actionHandler = this._checkText.bind(this);
                    this._typeHandler = this._erase;
                    break;
                case 'number':
                    this._pattern = this._pattern || /^[0-9\.,]*$/;
                    this._actionHandler = this._checkText.bind(this);
                    this._typeHandler = this._erase;
                    type = 'tel';
                    break;
                default:
                    this._pattern = this._pattern || /[\S\s]*/;
                    this._actionHandler = this._checkText.bind(this);
                    this._typeHandler = this._erase;
                    break;
            }
            this._inputElement.type = type;
            actionElement.textContent = this._typeChar = '';
            actionElement.setAttribute(__Hide, '');
            this._addEventListeners(event);
        };
        Input.prototype._addEventListeners = function (event) {
            var _this = this;
            var actionElement = this._actionElement, input = this._inputElement, actionEnd = function () { return (_this._inAction = false); };
            this.addEventListener(actionElement, event, this._typeHandler, false);
            this.addEventListener(actionElement, __$touchstart, function () { return (_this._inAction = true); }, false);
            this.addEventListener(actionElement, __$touchend, actionEnd, false);
            this.addEventListener(actionElement, __$trackend, actionEnd, false);
            this.addEventListener(input, 'focus', function () {
                if (input.value === '') {
                    return;
                }
                actionElement.removeAttribute(__Hide);
            }, false);
            this.addEventListener(input, 'blur', function (ev) {
                if (_this._inAction) {
                    return;
                }
                actionElement.setAttribute(__Hide, '');
            }, false);
            if (this._usingBind) {
                this._checkInput(this._preloadedValue);
            }
            this._addTextEventListener();
        };
        Input.prototype._addTextEventListener = function () {
            var _this = this;
            var input = this._inputElement, $compat = this.$compat, $utils = this.$utils, composing = false, timeout, eventListener = function () {
                if (composing) {
                    return;
                }
                _this._onInput();
            }, postponedEventListener = function () {
                if ($utils.isFunction(timeout)) {
                    return;
                }
                timeout = $utils.postpone(function () {
                    eventListener();
                    timeout = null;
                });
            };
            if ($utils.isUndefined($compat.ANDROID)) {
                this.addEventListener(input, 'compositionstart', function () { return (composing = true); }, false);
                this.addEventListener(input, 'compositionend', function () {
                    composing = false;
                    eventListener();
                }, false);
            }
            if ($compat.hasEvent('input')) {
                this.addEventListener(input, 'input', eventListener, false);
            }
            else {
                this.addEventListener(input, 'keydown', function (ev) {
                    var key = ev.keyCode;
                    if (key === 91 || key === 92 || (key > 15 && key < 28) || (key > 32 && key < 41)) {
                        return;
                    }
                    postponedEventListener();
                }, false);
                this.addEventListener(input, 'cut', postponedEventListener, false);
                this.addEventListener(input, 'paste', postponedEventListener, false);
            }
            this.addEventListener(input, 'change', eventListener, false);
        };
        Input.prototype._erase = function () {
            this.clear();
            this.focus();
        };
        Input.prototype._handlePasswordShow = function () {
            this._inTouch = true;
            this._inputElement.type = 'text';
        };
        Input.prototype._handlePasswordHide = function () {
            if (!this._inTouch) {
                return;
            }
            this._inTouch = false;
            var inputElement = this._inputElement;
            inputElement.type = this._type;
            inputElement.focus();
        };
        Input.prototype._handleEmail = function () {
            var inputElement = this._inputElement, value = inputElement.value, char = this._typeChar;
            this.propertyChanged((inputElement.value = (char === 'x' ? '' : value + char)), value);
            this._checkEmail();
            inputElement.focus();
        };
        Input.prototype._checkText = function () {
            var char = this._typeChar;
            if (char === 'x') {
                if (this._inputElement.value === '') {
                    this._typeChar = '';
                }
            }
            else if (this._inputElement.value !== '') {
                this._typeChar = 'x';
            }
            var newChar = this._typeChar;
            if (char !== newChar) {
                var actionElement = this._actionElement;
                actionElement.textContent = newChar;
                if (newChar === '') {
                    actionElement.setAttribute(__Hide, '');
                    return;
                }
                actionElement.removeAttribute(__Hide);
            }
        };
        Input.prototype._checkPassword = function () {
            var char = this._typeChar;
            if (char === '?') {
                if (this._inputElement.value === '') {
                    this._typeChar = '';
                }
            }
            else if (this._inputElement.value !== '') {
                this._typeChar = '?';
            }
            var newChar = this._typeChar;
            if (char !== newChar) {
                var actionElement = this._actionElement;
                actionElement.textContent = newChar;
                if (newChar === '') {
                    actionElement.setAttribute(__Hide, '');
                    return;
                }
                actionElement.removeAttribute(__Hide);
            }
        };
        Input.prototype._checkEmail = function () {
            var value = this._inputElement.value, char = this._typeChar;
            switch (char) {
                case '@':
                    if (value.indexOf('@') !== -1) {
                        if (value.indexOf('.com') !== -1) {
                            this._typeChar = 'x';
                            break;
                        }
                        this._typeChar = '.com';
                    }
                    break;
                case '.com':
                    if (value.indexOf('@') === -1) {
                        this._typeChar = '@';
                    }
                    else if (value.indexOf('.com') !== -1) {
                        this._typeChar = 'x';
                    }
                    break;
                case 'x':
                    if (value === '') {
                        this._typeChar = '';
                    }
                    else if (value.indexOf('@') === -1) {
                        this._typeChar = '@';
                    }
                    else if (value.indexOf('.com') === -1) {
                        this._typeChar = '.com';
                    }
                    break;
                default:
                    if (value === '') {
                        this._typeChar = '';
                    }
                    else if (value.indexOf('@') === -1) {
                        this._typeChar = '@';
                    }
                    break;
            }
            var newChar = this._typeChar;
            if (char !== newChar) {
                var actionElement = this._actionElement;
                actionElement.textContent = newChar;
                if (newChar === '') {
                    actionElement.setAttribute(__Hide, '');
                    return;
                }
                actionElement.removeAttribute(__Hide);
            }
        };
        Input.prototype._onInput = function () {
            var inputElement = this._inputElement, value = inputElement.value;
            switch (this._type) {
                case 'tel':
                case 'number':
                    var last = value.length - 1;
                    if (last >= 0 && (!this._pattern.test(value[last]) || !(last === 0 || this._type !== 'tel' || value[last] !== '+'))) {
                        value = inputElement.value = value.slice(0, -1);
                    }
                default:
                    this.propertyChanged(value);
                    break;
            }
            this._actionHandler();
        };
        Input.prototype._onInputChanged = function (newValue) {
            var inputElement = this._inputElement;
            if (newValue === inputElement.value) {
                return;
            }
            switch (this._type) {
                case 'tel':
                case 'number':
                    var last = newValue.length - 1;
                    if (last >= 0 && (!this._pattern.test(newValue[last]) || !(last === 0 || this._type !== 'tel' || newValue[last] !== '+'))) {
                        newValue = inputElement.value = newValue.slice(0, -1);
                        this.propertyChanged(newValue);
                        break;
                    }
                default:
                    inputElement.value = newValue;
                    break;
            }
            this._actionHandler();
        };
        Input.prototype._checkInput = function (value) {
            switch (this._type) {
                case 'tel':
                case 'number':
                    if (this._pattern.test(value)) {
                        this._inputElement.value = value;
                    }
                    else {
                        if (this._usingBind) {
                            var Exception = plat.acquire(__ExceptionStatic);
                            Exception.warn(this.type + ' control is bound to a value that does not satisfy ' + 'the given pattern and/or type. The bound value will be reset to "".');
                        }
                        this.propertyChanged((this._inputElement.value = ''), value);
                    }
                    break;
                default:
                    this._inputElement.value = value;
                    break;
            }
            this._actionHandler();
            this._actionElement.setAttribute(__Hide, '');
        };
        return Input;
    })(plat.ui.BindablePropertyControl);
    platui.Input = Input;
    plat.register.control(__Input, Input);
    var Carousel = (function (_super) {
        __extends(Carousel, _super);
        function Carousel() {
            _super.apply(this, arguments);
            this.$utils = plat.acquire(__Utils);
            this.$compat = plat.acquire(__Compat);
            this.$document = plat.acquire(__Document);
            this.$window = plat.acquire(__Window);
            this.$animator = plat.acquire(__Animator);
            this.templateString = '<plat-foreach class="plat-carousel-container"></plat-foreach>';
            this._hasSwiped = false;
            this._lastTouch = { x: 0, y: 0 };
            this._loaded = false;
            this._index = 0;
            this._currentOffset = 0;
            this._cloneAttempts = 0;
            this._maxCloneAttempts = 25;
        }
        Carousel.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Carousel + ' ' + (className || ''));
        };
        Carousel.prototype.contextChanged = function () {
            if (this._loaded) {
                return;
            }
            this.loaded();
        };
        Carousel.prototype.initialize = function () {
            this.setClasses();
        };
        Carousel.prototype.setTemplate = function () {
            var itemContainer = this.$document.createElement('div');
            itemContainer.className = 'plat-carousel-item';
            itemContainer.appendChild(this.innerTemplate);
            this.element.firstElementChild.appendChild(itemContainer);
        };
        Carousel.prototype.loaded = function () {
            var _this = this;
            var $utils = this.$utils, context = this.context;
            if (!$utils.isArray(context)) {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('The context of a ' + this.type + ' must be an Array.');
                return;
            }
            var optionObj = this.options || {}, options = optionObj.value || {}, orientation = this._orientation = options.orientation || 'horizontal', index = options.index;
            this.dom.addClass(this.element, __Plat + orientation);
            index = $utils.isNumber(index) && index >= 0 ? index < context.length ? index : (context.length - 1) : 0;
            this._onLoad = function () {
                _this.goToIndex(index);
                _this._addEventListeners(orientation);
            };
            this._init();
            this._loaded = true;
        };
        Carousel.prototype.goToNext = function () {
            if (this._index >= this.context.length - 1) {
                return;
            }
            this._index++;
            var animationOptions = {};
            animationOptions[this._transform] = this._calculateStaticTranslation(-this._intervalOffset);
            this._initiateAnimation({ properties: animationOptions });
        };
        Carousel.prototype.goToPrevious = function () {
            if (this._index <= 0) {
                return;
            }
            this._index--;
            var animationOptions = {};
            animationOptions[this._transform] = this._calculateStaticTranslation(this._intervalOffset);
            this._initiateAnimation({ properties: animationOptions });
        };
        Carousel.prototype.goToIndex = function (index) {
            if (index === this._index || index < 0 || index >= this.context.length) {
                return;
            }
            var animationOptions = {}, interval = (this._index - index) * this._intervalOffset;
            this._index = index;
            animationOptions[this._transform] = this._calculateStaticTranslation(interval);
            this._initiateAnimation({ properties: animationOptions });
        };
        Carousel.prototype.reset = function () {
            var animationOptions = {};
            animationOptions[this._transform] = this._calculateStaticTranslation(0);
            this._initiateAnimation({ properties: animationOptions });
        };
        Carousel.prototype._initiateAnimation = function (animationOptions) {
            var _this = this;
            if (!this.$utils.isNull(this._animationThenable)) {
                this._animationThenable = this._animationThenable.cancel().then(function () {
                    _this._animationThenable = _this.$animator.animate(_this._slider, __Transition, animationOptions).then(function () {
                        _this._animationThenable = null;
                    });
                });
                return;
            }
            this._animationThenable = this.$animator.animate(this._slider, __Transition, animationOptions).then(function () {
                _this._animationThenable = null;
            });
        };
        Carousel.prototype._init = function () {
            var _this = this;
            var foreach = this.controls[0];
            this._setTransform();
            this._slider = this.element.firstElementChild;
            this.itemsLoaded = foreach.itemsLoaded.then(function () {
                _this._setPosition();
                if (!_this._intervalOffset) {
                    _this._setOffsetWithClone();
                }
                else {
                    _this._onLoad();
                }
            }).catch(function () {
                var Exception = plat.acquire(__ExceptionStatic);
                Exception.warn('Error processing ' + _this.type + '. Please ensure you\'re context is correct.');
                _this._loaded = false;
                return;
            });
        };
        Carousel.prototype._addEventListeners = function (orientation) {
            var element = this.element, trackFn = this._track, touchEnd = this._touchEnd, track, reverseTrack;
            switch (orientation) {
                case 'horizontal':
                    track = __$track + 'right';
                    reverseTrack = __$track + 'left';
                    break;
                case 'vertical':
                    track = __$track + 'down';
                    reverseTrack = __$track + 'up';
                    break;
                default:
                    return;
            }
            this.addEventListener(element, track, trackFn, false);
            this.addEventListener(element, reverseTrack, trackFn, false);
            this.addEventListener(element, __$touchstart, this._touchStart, false);
            this.addEventListener(element, __$trackend, touchEnd, false);
            this.addEventListener(element, __$touchend, touchEnd, false);
        };
        Carousel.prototype._touchStart = function (ev) {
            var _this = this;
            if (this._inTouch) {
                return;
            }
            if (!this.$utils.isNull(this._animationThenable)) {
                this._animationThenable = this._animationThenable.cancel().then(function () {
                    _this._inTouch = true;
                    _this._lastTouch = {
                        x: ev.clientX,
                        y: ev.clientY
                    };
                    _this._animationThenable = null;
                });
                return;
            }
            this._inTouch = true;
            this._lastTouch = {
                x: ev.clientX,
                y: ev.clientY
            };
        };
        Carousel.prototype._touchEnd = function (ev) {
            var inTouch = this._inTouch, hasSwiped = this._hasSwiped;
            this._inTouch = this._hasSwiped = false;
            if (!inTouch || hasSwiped) {
                return;
            }
            var distanceMoved = (this._orientation === 'vertical') ? (ev.clientY - this._lastTouch.y) : (ev.clientX - this._lastTouch.x);
            if (Math.abs(distanceMoved) > Math.ceil(this._intervalOffset / 2)) {
                if (distanceMoved < 0) {
                    if (this._index < this.context.length - 1) {
                        this.goToNext();
                        return;
                    }
                }
                else if (this._index > 0) {
                    this.goToPrevious();
                    return;
                }
            }
            this.reset();
        };
        Carousel.prototype._track = function (ev) {
            this._slider.style[this._transform] = this._calculateDynamicTranslation(ev);
        };
        Carousel.prototype._calculateStaticTranslation = function (interval) {
            if (this._orientation === 'vertical') {
                return 'translate3d(0,' + (this._currentOffset += interval) + 'px,0)';
            }
            return 'translate3d(' + (this._currentOffset += interval) + 'px,0,0)';
        };
        Carousel.prototype._calculateDynamicTranslation = function (ev) {
            if (this._orientation === 'vertical') {
                return 'translate3d(0,' + (this._currentOffset + (ev.clientY - this._lastTouch.y)) + 'px,0)';
            }
            return 'translate3d(' + (this._currentOffset + (ev.clientX - this._lastTouch.x)) + 'px,0,0)';
        };
        Carousel.prototype._setTransform = function () {
            var style = this.element.style, isUndefined = this.$utils.isUndefined, transform;
            if (isUndefined(style.transform)) {
                var vendorPrefix = this.$compat.vendorPrefix;
                if (!isUndefined(style[(vendorPrefix.lowerCase + 'Transform')])) {
                    transform = this._transform = vendorPrefix.lowerCase + 'Transform';
                }
                else if (!isUndefined(style[(vendorPrefix.js + 'Transform')])) {
                    transform = this._transform = vendorPrefix.lowerCase + 'Transform';
                }
            }
            else {
                transform = this._transform = 'transform';
            }
        };
        Carousel.prototype._setPosition = function (element) {
            element = element || this.element.firstElementChild;
            switch (this._orientation) {
                case 'vertical':
                    this._positionProperty = 'top';
                    return (this._intervalOffset = element.offsetHeight);
                default:
                    this._positionProperty = 'left';
                    return (this._intervalOffset = element.offsetWidth);
            }
        };
        Carousel.prototype._setOffsetWithClone = function () {
            var element = this.element, body = this.$document.body;
            if (!body.contains(element)) {
                var cloneAttempts = ++this._cloneAttempts;
                if (cloneAttempts === this._maxCloneAttempts) {
                    var $exception = plat.acquire(__ExceptionStatic), type = this.type;
                    $exception.warn('Max clone attempts reached before the ' + type + ' was placed into the ' + 'DOM. Disposing of the ' + type);
                    plat.acquire(__TemplateControlFactory).dispose(this);
                    return;
                }
                this.$utils.postpone(this._setOffsetWithClone, null, this);
                return;
            }
            this._cloneAttempts = 0;
            var clone = element.cloneNode(true), regex = /\d+(?!\d+|%)/, $window = this.$window, parentChain = [], shallowCopy = clone, computedStyle, width;
            shallowCopy.id = '';
            while (!regex.test((width = (computedStyle = $window.getComputedStyle(element)).width))) {
                if (computedStyle.display === 'none') {
                    shallowCopy.style.setProperty('display', 'block', 'important');
                }
                shallowCopy.style.setProperty('width', width, 'important');
                element = element.parentElement;
                shallowCopy = element.cloneNode(false);
                shallowCopy.id = '';
                parentChain.push(shallowCopy);
            }
            if (parentChain.length > 0) {
                var curr = parentChain.pop(), currStyle = curr.style, temp;
                while (parentChain.length > 0) {
                    temp = parentChain.pop();
                    curr.insertBefore(temp, null);
                    curr = temp;
                }
                curr.insertBefore(clone, null);
            }
            var shallowStyle = shallowCopy.style;
            shallowStyle.setProperty('width', width, 'important');
            shallowStyle.setProperty('visibility', 'hidden', 'important');
            body.appendChild(shallowCopy);
            this._setPosition(clone.firstElementChild);
            body.removeChild(shallowCopy);
            this._onLoad();
        };
        return Carousel;
    })(plat.ui.TemplateControl);
    platui.Carousel = Carousel;
    plat.register.control(__Carousel, Carousel);
    var Listview = (function (_super) {
        __extends(Listview, _super);
        function Listview() {
            _super.apply(this, arguments);
            this.$window = plat.acquire(__Window);
            this.$document = plat.acquire(__Document);
            this.$utils = plat.acquire(__Utils);
            this.$compat = plat.acquire(__Compat);
            this.templateString = '<div class="plat-listview-container"></div>\n';
            this.templates = {};
            this._usingRenderFunction = false;
        }
        Listview.prototype.setClasses = function (className, element) {
            this.dom.addClass(element || this.element, __Listview + ' ' + (className || ''));
        };
        Listview.prototype.initialize = function () {
            var optionObj = this.options || {}, options = optionObj.value || {};
            this.templateUrl = options.templateUrl;
            this.setClasses();
        };
        Listview.prototype.setTemplate = function () {
            var $utils = this.$utils;
            if ($utils.isString(this.templateUrl)) {
                var fragment = this.dom.serializeHtml(this.templateString), element = this.element;
                this._container = fragment.firstChild;
                this._parseTemplates(element);
                element.appendChild(fragment);
                return;
            }
            var innerTemplate = this.innerTemplate;
            this._container = this.element.firstElementChild;
            if ($utils.isNode(innerTemplate)) {
                this._parseTemplates(innerTemplate);
            }
        };
        Listview.prototype.loaded = function () {
            var optionObj = this.options || {}, options = optionObj.value || {}, $utils = this.$utils, templates = this.templates, orientation = this._orientation = options.orientation || 'vertical', itemTemplate = options.itemTemplate, $exception;
            this.dom.addClass(this.element, __Plat + orientation);
            if (!$utils.isString(itemTemplate)) {
                $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No item template or item template selector specified for ' + this.type + '.', $exception.TEMPLATE);
            }
            this._determineItemTemplate(itemTemplate);
            if (!$utils.isArray(this.context)) {
                if (!$utils.isNull(this.context)) {
                    $exception = plat.acquire(__ExceptionStatic);
                    $exception.warn(this.type + ' context set to something other than an Array.', $exception.CONTEXT);
                }
                return;
            }
            this._setAliases();
            this._setListener();
            this.render();
        };
        Listview.prototype.render = function (index) {
            var $utils = this.$utils, bindableTemplates = this.bindableTemplates, container = this._container;
            if (!$utils.isNumber(index)) {
                index = 0;
            }
            if (this._usingRenderFunction) {
                return;
            }
            var key = this._itemTemplate;
            if ($utils.isUndefined(bindableTemplates.templates[key])) {
                return;
            }
            this._addItems(this.context.length - index, index);
        };
        Listview.prototype._determineItemTemplate = function (itemTemplate) {
            var $utils = this.$utils, templates = this.templates;
            if ($utils.isNode(templates[itemTemplate])) {
                this._itemTemplate = itemTemplate;
                return;
            }
            var controlProperty = this.findProperty(itemTemplate) || {};
            if (!$utils.isFunction(controlProperty.value)) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.warn(__Listview + ' item template "' + itemTemplate + '" was neither a template defined in the DOM nor a template selector function in its control hiearchy', $exception.TEMPLATE);
                return;
            }
            this._usingRenderFunction = true;
            this._itemTemplateSelector = controlProperty.value.bind(controlProperty.control);
        };
        Listview.prototype._bindItem = function (index) {
            return this.bindableTemplates.bind(this._itemTemplate, index, this._getAliases(index));
        };
        Listview.prototype._parseTemplates = function (node) {
            var $utils = this.$utils, $document = this.$document, templates = this.templates, bindableTemplates = this.bindableTemplates, slice = Array.prototype.slice, childNodes = slice.call(node.childNodes), childNode, subNodes, templateName, fragment;
            while (childNodes.length > 0) {
                childNode = childNodes.shift();
                if (childNode.nodeType === Node.ELEMENT_NODE) {
                    fragment = $document.createDocumentFragment();
                    subNodes = slice.call(childNode.childNodes);
                    while (subNodes.length > 0) {
                        fragment.appendChild(subNodes.shift());
                    }
                    templateName = $utils.camelCase(childNode.nodeName.toLowerCase());
                    bindableTemplates.add(templateName, fragment);
                    templates[templateName] = fragment;
                }
            }
        };
        return Listview;
    })(plat.ui.controls.ForEach);
    platui.Listview = Listview;
    plat.register.control(__Listview, Listview);
})(platui || (platui = {}));
//# sourceMappingURL=platypusui.js.map