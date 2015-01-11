var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat;
(function (_plat) {
    var __prefix = '$', __AppStatic = __prefix + 'AppStatic', __App = __prefix + 'App', __Http = __prefix + 'Http', __HttpConfig = __prefix + 'HttpConfig', __Promise = __prefix + 'Promise', __Compat = __prefix + 'Compat', __ControlFactory = __prefix + 'ControlFactory', __AttributeControlFactory = __prefix + 'AttributeControlFactory', __Document = __prefix + 'Document', __DispatchEventInstance = __prefix + 'DispatchEventInstance', __ErrorEventStatic = __prefix + 'ErrorEventStatic', __EventManagerStatic = __prefix + 'EventManagerStatic', __LifecycleEventStatic = __prefix + 'LifecycleEventStatic', __NavigationEventStatic = __prefix + 'NavigationEventStatic', __ExceptionStatic = __prefix + 'ExceptionStatic', __Parser = __prefix + 'Parser', __Regex = __prefix + 'Regex', __Tokenizer = __prefix + 'Tokenizer', __NavigatorInstance = __prefix + 'NavigatorInstance', __RoutingNavigator = __prefix + 'RoutingNavigator', __ContextManagerStatic = __prefix + 'ContextManagerStatic', __Compiler = __prefix + 'Compiler', __CommentManagerFactory = __prefix + 'CommentManagerFactory', __ElementManagerFactory = __prefix + 'ElementManagerFactory', __NodeManagerStatic = __prefix + 'NodeManagerStatic', __TextManagerFactory = __prefix + 'TextManagerFactory', __CacheFactory = __prefix + 'CacheFactory', __ManagerCache = __prefix + 'ManagerCache', __TemplateCache = __prefix + 'TemplateCache', __Animator = __prefix + 'Animator', __AttributesInstance = __prefix + 'AttributesInstance', __BindableTemplatesFactory = __prefix + 'BindableTemplatesFactory', __Dom = __prefix + 'Dom', __DomEvents = __prefix + 'DomEvents', __DomEventsConfig = __prefix + 'DomEventsConfig', __DomEventInstance = __prefix + 'DomEventInstance', __ResourcesFactory = __prefix + 'ResourcesFactory', __TemplateControlFactory = __prefix + 'TemplateControlFactory', __BaseViewControlFactory = __prefix + 'BaseViewControlFactory', __Utils = __prefix + 'Utils', __Browser = __prefix + 'Browser', __BrowserConfig = __prefix + 'BrowserConfig', __Router = __prefix + 'Router', __UrlUtilsInstance = __prefix + 'UrlUtilsInstance', __Window = __prefix + 'Window', __LocalStorage = __prefix + 'LocalStorage', __SessionStorage = __prefix + 'SessionStorage', __Geolocation = __prefix + 'Geolocation', __BaseSegmentFactory = __prefix + 'BaseSegmentFactory', __BaseSegmentInstance = __prefix + 'BaseSegmentInstance', __StaticSegmentInstance = __prefix + 'StaticSegmentInstance', __VariableSegmentInstance = __prefix + 'VariableSegmentInstance', __DynamicSegmentInstance = __prefix + 'DynamicSegmentInstance', __SplatSegmentInstance = __prefix + 'SplatSegmentInstance', __StateStatic = __prefix + 'StateStatic', __StateInstance = __prefix + 'StateInstance', __RouteRecognizerInstance = __prefix + 'RouteRecognizerInstance', __Plat = 'plat-', __Bind = __Plat + 'bind', __Href = __Plat + 'href', __Src = __Plat + 'src', __KeyDown = __Plat + 'keydown', __KeyPress = __Plat + 'keypress', __KeyUp = __Plat + 'keyup', __Name = __Plat + 'name', __Options = __Plat + 'options', __Checked = __Plat + 'checked', __Disabled = __Plat + 'disabled', __Selected = __Plat + 'selected', __ReadOnly = __Plat + 'readonly', __Visible = __Plat + 'visible', __Style = __Plat + 'style', __Tap = __Plat + 'tap', __Blur = __Plat + 'blur', __Change = __Plat + 'change', __Copy = __Plat + 'copy', __Cut = __Plat + 'cut', __Paste = __Plat + 'paste', __DblTap = __Plat + 'dbltap', __Focus = __Plat + 'focus', __Submit = __Plat + 'submit', __TouchStart = __Plat + 'touchstart', __TouchEnd = __Plat + 'touchend', __TouchMove = __Plat + 'touchmove', __TouchCancel = __Plat + 'touchcancel', __Hold = __Plat + 'hold', __Release = __Plat + 'release', __Swipe = __Plat + 'swipe', __SwipeLeft = __Plat + 'swipeleft', __SwipeRight = __Plat + 'swiperight', __SwipeUp = __Plat + 'swipeup', __SwipeDown = __Plat + 'swipedown', __Track = __Plat + 'track', __TrackLeft = __Plat + 'trackleft', __TrackRight = __Plat + 'trackright', __TrackUp = __Plat + 'trackup', __TrackDown = __Plat + 'trackdown', __TrackEnd = __Plat + 'trackend', __React = __Plat + 'react', __Link = __Plat + 'link', __ForEach = __Plat + 'foreach', __Html = __Plat + 'html', __If = __Plat + 'if', __Ignore = __Plat + 'ignore', __Select = __Plat + 'select', __Template = __Plat + 'template', __Routeport = __Plat + 'routeport', __Viewport = __Plat + 'viewport', __Context = __Plat + __CONTEXT, __TemplateControlCache = '__templateControlCache', __ready = 'ready', __suspend = 'suspend', __resume = 'resume', __online = 'online', __offline = 'offline', __error = 'error', __shutdown = 'shutdown', __beforeLoad = 'beforeLoad', __beforeNavigate = 'beforeNavigate', __navigated = 'navigated', __navigating = 'navigating', __beforeRouteChange = 'beforeRouteChange', __routeChanged = 'routeChanged', __urlChanged = 'urlChanged', __pause = 'pause', __deviceReady = 'deviceReady', __backButton = 'backbutton', __backButtonPressed = 'backButtonPressed', __Hide = __Plat + 'hide', __Animating = __Plat + 'animating', __SimpleAnimation = __Plat + 'animation', __SimpleTransition = __Plat + 'transition', __Enter = __Plat + 'enter', __Leave = __Plat + 'leave', __Move = __Plat + 'move', __FadeIn = __Plat + 'fadein', __FadeOut = __Plat + 'fadeout', __tap = __prefix + 'tap', __dbltap = __prefix + 'dbltap', __touchstart = __prefix + 'touchstart', __touchend = __prefix + 'touchend', __touchmove = __prefix + 'touchmove', __touchcancel = __prefix + 'touchcancel', __hold = __prefix + 'hold', __release = __prefix + 'release', __swipe = __prefix + 'swipe', __swipeleft = __prefix + 'swipeleft', __swiperight = __prefix + 'swiperight', __swipeup = __prefix + 'swipeup', __swipedown = __prefix + 'swipedown', __track = __prefix + 'track', __trackleft = __prefix + 'trackleft', __trackright = __prefix + 'trackright', __trackup = __prefix + 'trackup', __trackdown = __prefix + 'trackdown', __trackend = __prefix + 'trackend', __errorSuffix = 'Error', __platError = 'Plat' + __errorSuffix, __parseError = 'Parsing' + __errorSuffix, __bindError = 'Binding' + __errorSuffix, __compileError = 'Compiling' + __errorSuffix, __nameError = 'PlatName' + __errorSuffix, __navigationError = 'Navigating' + __errorSuffix, __templateError = 'Templating' + __errorSuffix, __contextError = 'Context' + __errorSuffix, __eventError = 'DispatchEvent' + __errorSuffix, __injectableError = 'Injectable' + __errorSuffix, __compatError = 'Compatibility' + __errorSuffix, __forEachAliasOptions = {
        index: 'index',
        even: 'even',
        odd: 'odd',
        first: 'first',
        last: 'last'
    }, __BASE_SEGMENT_TYPE = 'base', __VARIABLE_SEGMENT_TYPE = 'variable', __STATIC_SEGMENT_TYPE = 'static', __SPLAT_SEGMENT_TYPE = 'splat', __DYNAMIC_SEGMENT_TYPE = 'dynamic', __startSymbol = '{{', __endSymbol = '}}', __STATIC = 'static', __SINGLETON = 'singleton', __INSTANCE = 'instance', __FACTORY = 'factory', __CLASS = 'class', __CSS = 'css', __COMPILED = '-compiled', __BOUND_PREFIX = '-@', __END_SUFFIX = '-end', __START_NODE = ': start node', __END_NODE = ': end node', __POPSTATE = 'popstate', __HASHCHANGE = 'hashchange', __WRAPPED_INJECTOR = 'wrapped', __JSONP_CALLBACK = 'plat_callback', __JS = 'js', __NOOP_INJECTOR = 'noop', __APP = '__app__', __CONTEXT = 'context', __RESOURCE = 'resource', __RESOURCES = __RESOURCE + 's', __ALIAS = 'alias', __ALIASES = __ALIAS + 'es', __OBSERVABLE_RESOURCE = 'observable', __INJECTABLE_RESOURCE = 'injectable', __OBJECT_RESOURCE = 'object', __FUNCTION_RESOURCE = 'function', __LITERAL_RESOURCE = 'literal', __ROOT_RESOURCE = 'root', __ROOT_CONTEXT_RESOURCE = 'rootContext', __CONTROL_RESOURCE = 'control', __CONTEXT_RESOURCE = __CONTEXT;
    var __nativeIsArray = !!Array.isArray, __uids__ = {}, objToString = Object.prototype.toString, toStringClass = '[object ', errorClass = toStringClass + 'Error]', fileClass = toStringClass + 'File]', arrayClass = toStringClass + 'Array]', boolClass = toStringClass + 'Boolean]', dateClass = toStringClass + 'Date]', funcClass = toStringClass + 'Function]', numberClass = toStringClass + 'Number]', objectClass = toStringClass + 'Object]', regexpClass = toStringClass + 'RegExp]', stringClass = toStringClass + 'String]', promiseClass = toStringClass + 'Promise]', objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    function noop() {
    }
    function extend(destination) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (isNull(destination)) {
            return destination;
        }
        var deep = isBoolean(destination);
        if (deep) {
            destination = sources.shift();
        }
        var keys, property;
        forEach(function (source, k) {
            if (!isObject(source)) {
                return;
            }
            keys = Object.keys(source);
            forEach(function (key) {
                property = source[key];
                if (deep) {
                    if (isArray(property)) {
                        extend(deep, destination[key] || (destination[key] = []), property);
                        return;
                    }
                    else if (isDate(property)) {
                        destination[key] = new Date(property.getTime());
                        return;
                    }
                    else if (isRegExp(property)) {
                        destination[key] = new RegExp(property);
                        return;
                    }
                    else if (isNode(property)) {
                        destination[key] = property.cloneNode(true);
                        return;
                    }
                    else if (isObject(property)) {
                        extend(deep, destination[key] || (destination[key] = {}), property);
                        return;
                    }
                }
                destination[key] = property;
            }, keys);
        }, sources);
        return destination;
    }
    function deepExtend(destination) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        return extend.apply(null, [true, destination].concat(sources));
    }
    function _clone(obj, deep) {
        if (!isObject(obj)) {
            return obj;
        }
        else if (isDate(obj)) {
            return new Date(obj.getTime());
        }
        else if (isRegExp(obj)) {
            return new RegExp(obj);
        }
        else if (isNode(obj)) {
            return obj.cloneNode(deep);
        }
        else if (isError(obj)) {
            return new obj.constructor(obj.message);
        }
        var type = {};
        if (isArray(obj)) {
            type = [];
        }
        if (isBoolean(deep) && deep) {
            return deepExtend(type, obj);
        }
        return extend(type, obj);
    }
    function isError(obj) {
        return objToString.call(obj) === errorClass;
    }
    function isObject(obj) {
        return obj != null && typeof obj === 'object';
    }
    function isWindow(obj) {
        return !!(obj && obj.document && obj.setInterval);
    }
    function isDocument(obj) {
        return !!(obj && obj.nodeType === Node.DOCUMENT_NODE);
    }
    function isNode(obj) {
        return !!(obj && typeof obj.nodeType === 'number');
    }
    function isDocumentFragment(obj) {
        return !!(obj && obj.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
    }
    function isFile(obj) {
        return isObject(obj) && objToString.call(obj) === fileClass;
    }
    function isString(obj) {
        return typeof obj === 'string' || isObject(obj) && objToString.call(obj) === stringClass;
    }
    function isRegExp(obj) {
        return isObject(obj) && objToString.call(obj) === regexpClass;
    }
    function isPromise(obj) {
        return isObject(obj) && (objToString.call(obj) === promiseClass || isFunction(obj.then));
    }
    function isEmpty(obj) {
        if (isNull(obj)) {
            return true;
        }
        if (isString(obj) || isArray(obj)) {
            return obj.length === 0;
        }
        if (!isObject(obj)) {
            return false;
        }
        return Object.keys(obj).length === 0;
    }
    function isBoolean(obj) {
        return obj === true || obj === false || isObject(obj) && objToString.call(obj) === boolClass;
    }
    function isNumber(obj) {
        return (typeof obj === 'number' || isObject(obj) && objToString.call(obj) === numberClass) && !isNaN(obj);
    }
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    function isNull(obj) {
        return obj === null || obj === undefined;
    }
    function isUndefined(obj) {
        return obj === undefined;
    }
    function isArray(obj) {
        if (__nativeIsArray) {
            return Array.isArray(obj);
        }
        return objToString.call(obj) === arrayClass;
    }
    function isArrayLike(obj) {
        if (isNull(obj) || isWindow(obj) || isFunction(obj)) {
            return false;
        }
        return isString(obj) || obj.length >= 0;
    }
    function isDate(obj) {
        return typeof obj === 'object' && objToString.call(obj) === dateClass;
    }
    function filter(iterator, obj, context) {
        var arr = [];
        if (isNull(obj)) {
            return arr;
        }
        if (isFunction(obj.filter)) {
            return obj.filter(iterator, context);
        }
        forEach(function (value, key, obj) {
            if (iterator(value, key, obj)) {
                arr.push(value);
            }
        }, obj);
        return arr;
    }
    function where(properties, obj) {
        return filter(function (value) { return !some(function (property, key) { return value[key] !== property; }, properties); }, obj);
    }
    function forEach(iterator, obj, context) {
        if (isNull(obj) || !(isObject(obj) || isArrayLike(obj))) {
            return obj;
        }
        var i, key, length;
        if (isFunction(obj.forEach)) {
            return obj.forEach(iterator, context);
        }
        else if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; ++i) {
                iterator.call(context, obj[i], i, obj);
            }
        }
        else {
            var keys = Object.keys(obj);
            length = keys.length;
            while (keys.length > 0) {
                key = keys.shift();
                iterator.call(context, obj[key], key, obj);
            }
        }
        return obj;
    }
    function map(iterator, obj, context) {
        var arr = [];
        if (isNull(obj)) {
            return arr;
        }
        if (isFunction(obj.map)) {
            return obj.map(iterator, context);
        }
        forEach(function (value, key) {
            arr.push(iterator.call(context, value, key, obj));
        }, obj);
        return arr;
    }
    var Promise;
    function mapAsync(iterator, obj, context) {
        Promise = Promise || plat.acquire(__Promise);
        return Promise.all(map(iterator, obj, context));
    }
    function mapAsyncWithOrder(iterator, array, context, descending) {
        Promise = Promise || plat.acquire(__Promise);
        var initialValue = Promise.resolve([]);
        if (!isArray(array)) {
            return initialValue;
        }
        iterator = iterator.bind(context);
        var promise, inOrder = function (previousValue, nextValue, nextIndex, array) {
            return previousValue.then(function (items) {
                return iterator(nextValue, nextIndex, array).then(function (moreItems) {
                    return items.concat(moreItems);
                });
            });
        };
        if (descending === true) {
            return array.reduceRight(inOrder, initialValue);
        }
        return array.reduce(inOrder, initialValue);
    }
    function mapAsyncInOrder(iterator, array, context) {
        return mapAsyncWithOrder(iterator, array, context);
    }
    function mapAsyncInDescendingOrder(iterator, array, context) {
        return mapAsyncWithOrder(iterator, array, context, true);
    }
    function pluck(key, obj) {
        return map(function (value) { return value[key]; }, obj);
    }
    function some(iterator, obj, context) {
        if (isNull(obj) || isFunction(obj)) {
            return false;
        }
        var i, key, length, ret;
        if (isFunction(obj.some)) {
            return obj.some(iterator, context);
        }
        else if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; ++i) {
                ret = iterator.call(context, obj[i], i, obj);
                if (ret === true) {
                    return true;
                }
            }
        }
        else {
            var keys = Object.keys(obj);
            length = keys.length;
            while (keys.length > 0) {
                key = keys.shift();
                ret = iterator.call(context, obj[key], key, obj);
                if (ret === true) {
                    return true;
                }
            }
        }
        return false;
    }
    function postpone(method, args, context) {
        return defer(method, 0, args, context);
    }
    function defer(method, timeout, args, context) {
        function defer() {
            method.apply(context, args);
        }
        var timeoutId = setTimeout(defer, timeout);
        return function () {
            clearTimeout(timeoutId);
        };
    }
    function uniqueId(prefix) {
        if (isNull(prefix)) {
            prefix = '';
        }
        var puid = __uids__[prefix];
        if (isNull(puid)) {
            puid = __uids__[prefix] = ['0', '/'];
        }
        var index = puid.length, charCode;
        while (index--) {
            charCode = puid[index].charCodeAt(0);
            if (charCode === 57) {
                puid[index] = 'A';
                return join();
            }
            if (charCode === 90) {
                puid[index] = 'a';
                return join();
            }
            if (charCode === 122) {
                puid[index] = '0';
            }
            else {
                puid[index] = String.fromCharCode(charCode + 1);
                return join();
            }
        }
        puid.unshift('0');
        function join() {
            return prefix + puid.join('');
        }
        return join();
    }
    var camelCaseRegex;
    function camelCase(str) {
        if (!isString(str) || isEmpty(str)) {
            return str;
        }
        str = str.charAt(0).toLowerCase() + str.slice(1);
        camelCaseRegex = camelCaseRegex || plat.acquire(__Regex).camelCaseRegex;
        return str.replace(camelCaseRegex, function (match, delimiter, char, index) { return index ? char.toUpperCase() : char; });
    }
    function deleteProperty(obj, property) {
        if (!isNull(obj)) {
            delete obj[property];
        }
        return obj;
    }
    function access(obj, property) {
        if (isNull(obj)) {
            return obj;
        }
        return obj[property];
    }
    var __nodeNameRegex = /<([\w:]+)/, __whiteSpaceRegex = /\s+/g, __option = [1, '<select multiple="multiple">', '</select>'], __table = [1, '<table>', '</table>'], __tableData = [3, '<table><tbody><tr>', '</tr></tbody></table>'], __svg = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', '</svg>'], __innerTableWrappers = {
        thead: __table,
        tbody: __table,
        tfoot: __table,
        colgroup: __table,
        caption: __table,
        tr: [2, '<table><tbody>', '</tbody></table>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        td: __tableData,
        th: __tableData
    }, __innerHtmlWrappers = extend({}, __innerTableWrappers, {
        option: __option,
        optgroup: __option,
        legend: [1, '<fieldset>', '</fieldset>'],
        area: [1, '<map>', '</map>'],
        param: [1, '<object>', '</object>'],
        text: __svg,
        circle: __svg,
        ellipse: __svg,
        line: __svg,
        path: __svg,
        polygon: __svg,
        polyline: __svg,
        rect: __svg,
        _default: [0, '', '']
    });
    function appendChildren(nodeList, root) {
        var isFragment = isDocumentFragment(root), nullRoot = isNull(root), fragment = isFragment ? root : (plat.acquire(__Document)).createDocumentFragment();
        if (nullRoot) {
            root = fragment;
        }
        var list;
        if (isFunction(nodeList.push)) {
            list = nodeList;
        }
        else {
            list = Array.prototype.slice.call(nodeList);
        }
        while (list.length > 0) {
            fragment.insertBefore(list.shift(), null);
        }
        if (!(isFragment || nullRoot)) {
            root.appendChild(fragment);
        }
        return root;
    }
    function clearNode(node) {
        var childNodes = Array.prototype.slice.call(node.childNodes);
        while (childNodes.length > 0) {
            node.removeChild(childNodes.pop());
        }
    }
    function clearNodeBlock(nodeList, parent) {
        if (!isFunction(nodeList.push)) {
            nodeList = Array.prototype.slice.call(nodeList);
        }
        if (!isNull(parent)) {
            clearNodeBlockWithParent(nodeList, parent);
            return;
        }
        var node;
        while (nodeList.length > 0) {
            node = nodeList.pop();
            parent = node.parentNode;
            if (isNull(parent)) {
                continue;
            }
            parent.removeChild(node);
        }
    }
    function clearNodeBlockWithParent(nodeList, parent) {
        while (nodeList.length > 0) {
            parent.removeChild(nodeList.pop());
        }
    }
    function stringToNode(html) {
        var $compat = plat.acquire(__Compat), $document = plat.acquire(__Document), nodeName = __nodeNameRegex.exec(html), element = $document.createElement('div');
        if (isNull(nodeName)) {
            element = innerHtml(element, html);
            return element.removeChild(element.lastChild);
        }
        html = html.trim();
        var mapTag = nodeName[1];
        if ($compat.pushState && isUndefined(__innerTableWrappers[mapTag])) {
            return innerHtml(element, html);
        }
        else if (mapTag === 'body') {
            element = innerHtml($document.createElement('html'), html);
            return element.removeChild(element.lastChild);
        }
        var wrapper = __innerHtmlWrappers[mapTag] || __innerHtmlWrappers._default, depth = wrapper[0], parentStart = wrapper[1], parentEnd = wrapper[2];
        element = innerHtml(element, parentStart + html + parentEnd);
        while (depth-- > 0) {
            element = element.lastChild;
        }
        return element;
    }
    function setInnerHtml(node, html) {
        clearNode(node);
        if (isEmpty(html)) {
            return;
        }
        var element = stringToNode(html);
        if (element.childNodes.length > 0) {
            appendChildren(element.childNodes, node);
        }
        else {
            node.insertBefore(element, null);
        }
        return node;
    }
    function insertBefore(parent, nodes, endNode) {
        if (isNull(parent) || !isObject(nodes)) {
            return;
        }
        else if (isUndefined(endNode)) {
            endNode = null;
        }
        var fragment;
        if (isNode(nodes)) {
            fragment = nodes;
            nodes = Array.prototype.slice.call(fragment.childNodes);
            parent.insertBefore(fragment, endNode);
            return nodes;
        }
        if (!isFunction(nodes.push)) {
            nodes = Array.prototype.slice.call(nodes);
        }
        var $document = plat.acquire(__Document), length = nodes.length;
        fragment = $document.createDocumentFragment();
        for (var i = 0; i < length; ++i) {
            fragment.insertBefore(nodes[i], null);
        }
        parent.insertBefore(fragment, endNode);
        return nodes;
    }
    function replace(node) {
        var parent = node.parentNode, nodes = insertBefore(parent, node.childNodes, node);
        parent.removeChild(node);
        return nodes;
    }
    function replaceWith(node, newNode) {
        if (isNull(newNode)) {
            return newNode;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
            var attributes = node.attributes, length = attributes.length, attribute;
            for (var i = 0; i < length; ++i) {
                attribute = attributes[i];
                newNode.setAttribute(attribute.name, attribute.value);
            }
        }
        var parent = node.parentNode;
        insertBefore(newNode, node.childNodes);
        parent.replaceChild(newNode, node);
        return newNode;
    }
    function serializeHtml(html) {
        var $document = plat.acquire(__Document), templateElement = $document.createDocumentFragment();
        if (!isEmpty(html)) {
            setInnerHtml(templateElement, html);
        }
        return templateElement;
    }
    function removeBetween(startNode, endNode) {
        if (isNull(startNode)) {
            return;
        }
        var currentNode = startNode.nextSibling, parentNode = startNode.parentNode, tempNode;
        if (isNull(endNode)) {
            endNode = null;
        }
        if (isNull(parentNode) || (!isNull(endNode) && endNode.parentNode !== parentNode)) {
            return;
        }
        while (currentNode !== endNode) {
            tempNode = currentNode.nextSibling;
            parentNode.removeChild(currentNode);
            currentNode = tempNode;
        }
    }
    function removeAll(startNode, endNode) {
        if (isNull(startNode)) {
            return;
        }
        removeBetween(startNode, endNode);
        removeNode(startNode);
        removeNode(endNode);
    }
    function innerHtml(element, html) {
        var $compat = plat.acquire(__Compat);
        if ($compat.msApp) {
            MSApp.execUnsafeLocalFunction(function () {
                element.innerHTML = html;
            });
        }
        else {
            element.innerHTML = html;
        }
        return element;
    }
    function removeNode(node) {
        if (isNull(node)) {
            return;
        }
        var parentNode = node.parentNode;
        if (!isNull(parentNode)) {
            node.parentNode.removeChild(node);
        }
    }
    function addClass(element, className) {
        var cName = (element || {}).className;
        if (!isString(cName) || !isString(className) || className === '') {
            return;
        }
        var split = className.split(__whiteSpaceRegex), name, classNameRegex;
        if (isUndefined(element.classList)) {
            if (isEmpty(cName)) {
                element.className = className;
                return;
            }
            while (split.length > 0) {
                name = split.shift();
                if (name !== '') {
                    classNameRegex = new RegExp('^' + name + '\\s+|\\s+' + name + '$|\\s+' + name + '\\s+', 'g');
                    if (!classNameRegex.test(cName)) {
                        element.className += ' ' + name;
                    }
                }
            }
            return;
        }
        while (split.length > 0) {
            name = split.shift();
            if (name !== '') {
                element.classList.add(name);
            }
        }
    }
    function removeClass(element, className) {
        var cName = (element || {}).className;
        if (!isString(cName) || !isString(className) || className === '') {
            return;
        }
        var split = className.split(__whiteSpaceRegex), name;
        if (isUndefined(element.classList)) {
            if (cName === className) {
                element.className = '';
                return;
            }
            while (split.length > 0) {
                name = split.shift();
                if (name !== '') {
                    element.className = cName = cName.replace(new RegExp('^' + name + '\\s+|\\s+' + name + '$|\\s+' + name + '\\s+', 'g'), '');
                }
            }
            return;
        }
        while (split.length > 0) {
            name = split.shift();
            if (name !== '') {
                element.classList.remove(name);
            }
        }
    }
    function toggleClass(element, className) {
        var cName = (element || {}).className;
        if (!isString(cName) || !isString(className) || className === '') {
            return;
        }
        var split = className.split(__whiteSpaceRegex), name;
        if (isUndefined(element.classList)) {
            var classNameRegex;
            if (cName === '') {
                element.className = className;
            }
            else if (cName === className) {
                element.className = '';
                return;
            }
            while (split.length > 0) {
                name = split.shift();
                if (name !== '') {
                    classNameRegex = new RegExp('^' + name + '\\s+|\\s+' + name + '$|\\s+' + name + '\\s+', 'g');
                    if (classNameRegex.test(cName)) {
                        element.className = cName = cName.replace(classNameRegex, '');
                        continue;
                    }
                    element.className += ' ' + name;
                }
            }
            return;
        }
        while (split.length > 0) {
            name = split.shift();
            if (name !== '') {
                element.classList.toggle(name);
            }
        }
    }
    function replaceClass(element, oldClass, newClass) {
        var cName = (element || {}).className;
        if (!isString(cName) || !isString(newClass) || newClass === '') {
            return;
        }
        var startRegex = new RegExp('^' + oldClass + '\\s+', 'g'), midRegex = new RegExp('\\s+' + oldClass + '\\s+', 'g'), endRegex = new RegExp('\\s+' + oldClass + '$', 'g');
        element.className = cName.replace(startRegex, newClass + ' ').replace(midRegex, ' ' + newClass + ' ').replace(endRegex, ' ' + newClass);
    }
    function hasClass(element, className) {
        var cName = (element || {}).className;
        if (!isString(cName) || !isString(className) || className === '') {
            return false;
        }
        var split = className.split(__whiteSpaceRegex);
        if (isUndefined(element.classList)) {
            if (cName === '') {
                return false;
            }
            else if (cName === className) {
                return true;
            }
            var name;
            while (split.length > 0) {
                name = split.shift();
                if (!(name === '' || new RegExp('^' + name + '\\s|\\s' + name + '$|\\s' + name + '\\s', 'g').test(cName))) {
                    return false;
                }
            }
            return true;
        }
        while (split.length > 0) {
            name = split.shift();
            if (!(name === '' || element.classList.contains(name))) {
                return false;
            }
        }
        return true;
    }
    var __$templateCache, __$http;
    function getTemplate(templateUrl) {
        __$templateCache = __$templateCache || plat.acquire(__TemplateCache);
        __$http = __$http || plat.acquire(__Http);
        var $exception, ajax = __$http.ajax;
        return __$templateCache.put(templateUrl, __$templateCache.read(templateUrl).catch(function (error) {
            if (isNull(error)) {
                return ajax({ url: templateUrl });
            }
        }).then(function (success) {
            if (isDocumentFragment(success)) {
                return __$templateCache.put(templateUrl, success);
            }
            else if (!isObject(success) || !isString(success.response)) {
                $exception = plat.acquire(__ExceptionStatic);
                $exception.warn('No template found at ' + templateUrl, $exception.AJAX);
                return __$templateCache.put(templateUrl, serializeHtml());
            }
            var templateString = success.response;
            if (isEmpty(templateString.trim())) {
                return __$templateCache.put(templateUrl, serializeHtml());
            }
            return __$templateCache.put(templateUrl, serializeHtml(templateString));
        }).catch(function (error) {
            postpone(function () {
                $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Failure to get template from ' + templateUrl + '.', $exception.TEMPLATE);
            });
            return error;
        }));
    }
    var register;
    (function (register) {
        function add(obj, name, Type, dependencies, injectableType, isStatic) {
            var injector = obj[name] = new dependency.Injector(name, Type, dependencies, injectableType);
            if (isStatic === true) {
                staticInjectors[name] = injector;
            }
            return register;
        }
        function app(name, Type, dependencies) {
            var app = new dependency.Injector(name, Type, dependencies), $appStatic = acquire(__AppStatic);
            $appStatic.registerApp(app);
            return register;
        }
        register.app = app;
        function control(name, Type, dependencies, isStatic) {
            if (isString(name)) {
                name = name.toLowerCase();
            }
            else {
                throw new Error('A Control must be registered with a string name');
            }
            return add(controlInjectors, name, Type, dependencies, isStatic ? __STATIC : undefined);
        }
        register.control = control;
        function viewControl(name, Type, dependencies, routes) {
            if (isString(name)) {
                name = name.toLowerCase();
            }
            else {
                throw new Error('A ViewControl must be registered with a string name');
            }
            var ret = add(viewControlInjectors, name, Type, dependencies);
            if (isArray(routes)) {
                var $Router = acquire(__Router);
                $Router.registerRoutes(name, routes);
            }
            return ret;
        }
        register.viewControl = viewControl;
        function injectable(name, Type, dependencies, injectableType) {
            if (!isString(injectableType)) {
                injectableType = __SINGLETON;
            }
            else {
                injectableType = injectableType.toLowerCase();
                if (injectableType === __FACTORY || injectableType === __STATIC || injectableType === __CLASS) {
                    return add(injectableInjectors, name, Type, dependencies, injectableType, true);
                }
                else if (!(injectableType === __SINGLETON || injectableType === __INSTANCE)) {
                    throw new Error('Invalid injectable type ' + injectableType + ' during injectable registration.');
                }
            }
            return add(injectableInjectors, name, Type, dependencies, injectableType, false);
        }
        register.injectable = injectable;
        var injectable;
        (function (injectable) {
            injectable.STATIC = __STATIC;
            injectable.SINGLETON = __SINGLETON;
            injectable.INSTANCE = __INSTANCE;
            injectable.FACTORY = __FACTORY;
            injectable.CLASS = __CLASS;
        })(injectable = register.injectable || (register.injectable = {}));
        function animation(name, Type, dependencies, animationType) {
            if (!isString(animationType)) {
                animationType = __CSS;
            }
            else {
                animationType = animationType.toLowerCase();
                if (!(animationType === animation.CSS || animationType === animation.JS)) {
                    throw new Error('Invalid animationType "' + animationType + '" during animation registration.');
                }
            }
            return add((animationType === __JS ? jsAnimationInjectors : animationInjectors), name, Type, dependencies, register.injectable.INSTANCE);
        }
        register.animation = animation;
        var animation;
        (function (animation) {
            animation.CSS = __CSS;
            animation.JS = __JS;
        })(animation = register.animation || (register.animation = {}));
    })(register = _plat.register || (_plat.register = {}));
    var controlInjectors = {};
    var viewControlInjectors = {};
    var injectableInjectors = {};
    var staticInjectors = {};
    var animationInjectors = {};
    var jsAnimationInjectors = {};
    var dependency;
    (function (_dependency) {
        var Injector = (function () {
            function Injector(name, Constructor, dependencies, type) {
                if (type === void 0) { type = null; }
                this.name = name;
                this.Constructor = Constructor;
                this.type = type;
                var deps = this.__dependencies = Injector.convertDependencies(dependencies), index = deps.indexOf(__NOOP_INJECTOR), circularReference;
                if (index > -1) {
                    var dependency = dependencies[index];
                    if (isNull(dependency)) {
                        throw new TypeError('The dependency for ' + name + ' at index ' + index + ' is undefined, did you forgot to include a file?');
                    }
                    throw new TypeError('Could not resolve dependency ' + dependency.slice(9, dependency.indexOf('(')) + ' for ' + name + '. Are you using a static injectable Type?');
                }
                circularReference = Injector.__findCircularReferences(this);
                if (isString(circularReference)) {
                    throw new Error('Circular dependency detected from ' + name + ' to ' + circularReference + '.');
                }
                if (name === __AppStatic) {
                    var App = this.inject();
                    this.__dependencies = deps;
                    App.start();
                }
            }
            Injector.initialize = function () {
                var injectors = staticInjectors, keys = Object.keys(injectors), length = keys.length;
                for (var i = 0; i < length; ++i) {
                    injectors[keys[i]].inject();
                }
                staticInjectors = {};
            };
            Injector.getDependencies = function (dependencies) {
                if (isNull(dependencies) || isEmpty(dependencies)) {
                    return [];
                }
                var deps = [], length = dependencies.length;
                for (var i = 0; i < length; ++i) {
                    deps.push(Injector.getDependency(dependencies[i]));
                }
                return deps;
            };
            Injector.getDependency = function (dependency) {
                if (isNull(dependency) || dependency === __NOOP_INJECTOR) {
                    return Injector.__noop();
                }
                else if (Injector.isInjector(dependency)) {
                    return dependency;
                }
                return Injector.__locateInjector(dependency);
            };
            Injector.convertDependencies = function (dependencies) {
                if (!isArray(dependencies)) {
                    return [];
                }
                var deps = [], length = dependencies.length, dependency, value;
                for (var i = 0; i < length; ++i) {
                    dependency = dependencies[i];
                    if (isNull(dependency)) {
                        deps.push('noop');
                        continue;
                    }
                    value = Injector.__getInjectorName(dependency);
                    deps.push(value);
                }
                return deps;
            };
            Injector.isInjector = function (dependency) {
                return isFunction(dependency.inject) && !isUndefined(dependency.type) && !isUndefined(dependency.name) && !isUndefined(dependency.Constructor);
            };
            Injector.__getInjectorName = function (dependency) {
                if (isNull(dependency)) {
                    return __NOOP_INJECTOR;
                }
                else if (isString(dependency)) {
                    return dependency;
                }
                else if (dependency === window) {
                    return __Window;
                }
                else if (dependency === window.document) {
                    return __Document;
                }
                var find = Injector.__findInjector.bind(Injector, dependency), injector = find(injectableInjectors) || find(staticInjectors) || find(viewControlInjectors) || find(controlInjectors) || find(animationInjectors) || find(jsAnimationInjectors);
                if (isObject(injector)) {
                    return injector.name;
                }
                return __NOOP_INJECTOR;
            };
            Injector.__construct = function (Constructor, args) {
                if (isNull(Constructor) || isNull(Constructor.prototype)) {
                    return Constructor;
                }
                var obj = Object.create(Constructor.prototype), ret = obj.constructor.apply(obj, args);
                if (!isUndefined(ret)) {
                    return ret;
                }
                return obj;
            };
            Injector.__locateInjector = function (Constructor) {
                if (isNull(Constructor)) {
                    return;
                }
                else if (Constructor === window) {
                    return injectableInjectors.$Window;
                }
                else if (Constructor === window.document) {
                    return injectableInjectors.$Document;
                }
                var find = Injector.__findInjector.bind(Injector, Constructor), injector = find(injectableInjectors) || find(staticInjectors) || find(viewControlInjectors) || find(controlInjectors) || find(animationInjectors) || find(jsAnimationInjectors) || Injector.__wrap(Constructor);
                return injector;
            };
            Injector.__findInjector = function (Constructor, injectors) {
                if (isString(Constructor)) {
                    return injectors[Constructor] || Injector.__noop();
                }
                var injector, keys = Object.keys(injectors), length = keys.length;
                for (var i = 0; i < length; ++i) {
                    injector = injectors[keys[i]];
                    if (injector.Constructor === Constructor) {
                        return injector;
                    }
                }
            };
            Injector.__wrap = function (value) {
                return {
                    inject: function () { return value; },
                    name: __WRAPPED_INJECTOR,
                    __dependencies: [],
                    Constructor: value
                };
            };
            Injector.__noop = function () {
                return {
                    inject: noop,
                    type: __NOOP_INJECTOR,
                    name: __NOOP_INJECTOR,
                    __dependencies: [],
                    Constructor: noop
                };
            };
            Injector.__findCircularReferences = function (injector) {
                if (!(isObject(injector) && isArray(injector.__dependencies))) {
                    return;
                }
                var source = injector.name, dependencies = injector.__dependencies, node, stack = [{
                    name: source,
                    dependencies: dependencies.slice(0)
                }], dependency, locate = Injector.__locateInjector, length;
                while (stack.length > 0) {
                    node = stack.pop();
                    dependencies = node.dependencies;
                    length = dependencies.length;
                    for (var i = 0; i < length; ++i) {
                        dependency = dependencies[i];
                        if (dependency === source) {
                            return node.name;
                        }
                        injector = locate(dependency);
                        if (!(isObject(injector) && isArray(injector.__dependencies))) {
                            continue;
                        }
                        stack.push({
                            name: injector.name,
                            dependencies: injector.__dependencies.slice(0)
                        });
                    }
                }
            };
            Injector.prototype.inject = function () {
                var toInject = [], type = this.type;
                var dependencies = this.__dependencies, length = dependencies.length, dependency, injectable;
                for (var i = 0; i < length; ++i) {
                    dependency = Injector.getDependency(dependencies[i]);
                    toInject.push(dependency.inject());
                }
                injectable = Injector.__construct(this.Constructor, toInject);
                if (type === __SINGLETON || type === __FACTORY || type === __STATIC || type === __CLASS) {
                    this._wrapInjector(injectable);
                }
                return injectable;
            };
            Injector.prototype._wrapInjector = function (value) {
                var name = this.name;
                return injectableInjectors[name] = {
                    type: this.type,
                    name: name,
                    __dependencies: this.__dependencies,
                    Constructor: this.Constructor,
                    inject: function () { return value; }
                };
            };
            return Injector;
        })();
        _dependency.Injector = Injector;
        var injectors;
        (function (injectors) {
            injectors.control = controlInjectors;
            injectors.viewControl = viewControlInjectors;
            injectors.injectable = injectableInjectors;
            injectors.staticInjectable = staticInjectors;
            injectors.animation = animationInjectors;
            injectors.jsAnimation = jsAnimationInjectors;
        })(injectors = _dependency.injectors || (_dependency.injectors = {}));
    })(dependency = _plat.dependency || (_plat.dependency = {}));
    if (!isUndefined(window)) {
        if (isUndefined(window.plat)) {
            window.plat = plat;
        }
        if (isUndefined(window.module)) {
            window.module = {};
        }
    }
    function acquire(dependencies) {
        var deps, array = isArray(dependencies);
        if (array) {
            deps = dependency.Injector.getDependencies(dependencies);
        }
        else {
            deps = dependency.Injector.getDependencies([dependencies]);
        }
        var length = deps.length, output = [];
        for (var i = 0; i < length; ++i) {
            output.push(deps[i].inject());
        }
        if (!array) {
            return output[0];
        }
        return output;
    }
    _plat.acquire = acquire;
    var Exception = (function () {
        function Exception() {
        }
        Exception.warn = function (message, type) {
            raise(message, type, false);
        };
        Exception.fatal = function (message, type) {
            raise(message, type, true);
        };
        Exception.PARSE = 0;
        Exception.COMPILE = 1;
        Exception.BIND = 2;
        Exception.NAME = 3;
        Exception.NAVIGATION = 4;
        Exception.TEMPLATE = 5;
        Exception.AJAX = 6;
        Exception.CONTEXT = 7;
        Exception.EVENT = 8;
        Exception.INJECTABLE = 9;
        Exception.COMPAT = 10;
        Exception.PROMISE = 11;
        Exception.ANIMATION = 12;
        return Exception;
    })();
    _plat.Exception = Exception;
    function IExceptionStatic() {
        return Exception;
    }
    _plat.IExceptionStatic = IExceptionStatic;
    register.injectable(__ExceptionStatic, IExceptionStatic, null, __STATIC);
    var PlatException = (function () {
        function PlatException(message, name) {
            this.message = message;
            this.name = name;
        }
        return PlatException;
    })();
    var PlatError = (function () {
        function PlatError(message) {
            this.message = message;
            this.name = __platError;
            this.message = message || '';
        }
        return PlatError;
    })();
    function setPrototypes(platError) {
        PlatError.prototype = platError || Error.prototype;
        PlatException.prototype = new PlatError();
    }
    function raise(message, type, isFatal) {
        var error;
        if (message instanceof Error) {
            setPrototypes(Object.getPrototypeOf(message));
        }
        else if (PlatError.prototype !== Error.prototype) {
            setPrototypes();
        }
        error = new PlatException(message, '');
        switch (type) {
            case Exception.PARSE:
                error.name = __parseError;
                break;
            case Exception.BIND:
                error.name = __bindError;
                break;
            case Exception.COMPILE:
                error.name = __compileError;
                break;
            case Exception.NAME:
                error.name = __nameError;
                break;
            case Exception.NAVIGATION:
                error.name = __navigationError;
                break;
            case Exception.TEMPLATE:
                error.name = __templateError;
                break;
            case Exception.CONTEXT:
                error.name = __contextError;
                break;
            case Exception.EVENT:
                error.name = __eventError;
                break;
            case Exception.INJECTABLE:
                error.name = __injectableError;
                break;
            case Exception.COMPAT:
                error.name = __compatError;
                break;
            default:
                error = new PlatError(message);
                break;
        }
        if (message instanceof Error) {
            var properties = Object.getOwnPropertyNames(message), length = properties.length;
            error.message = '';
            error = Object.create(error);
            for (var i = 0; i < length; ++i) {
                error[properties[i]] = message[properties[i]];
            }
            error.stack = message.stack;
            error.code = message.code;
        }
        var ErrorEvent = acquire(__ErrorEventStatic);
        ErrorEvent.dispatch(__error, Exception, error);
        if (isFatal) {
            if (message instanceof Error) {
                throw message;
            }
            throw error;
        }
    }
    var Compat = (function () {
        function Compat() {
            this.$Window = acquire(__Window);
            this.$Document = acquire(__Document);
            this.__events = {};
            this.__defineBooleans();
            this.__defineMappedEvents();
            this.__defineAnimationEvents();
            this.__determineCss();
        }
        Compat.prototype.hasEvent = function (event) {
            var events = this.__events, eventExists = events[event];
            if (isUndefined(eventExists)) {
                var element = this.$Document.createElement('div');
                if (event === 'input' && this.IE === 9) {
                    eventExists = events[event] = false;
                }
                else {
                    eventExists = events[event] = !isUndefined(element[('on' + event)]);
                }
            }
            return eventExists;
        };
        Compat.prototype.__defineBooleans = function () {
            var $window = this.$Window, navigator = $window.navigator || {}, userAgent = (navigator.userAgent || '').toLowerCase(), history = $window.history, def = $window.define, msA = $window.MSApp, android = parseInt((/android (\d+)/.exec(userAgent) || [])[1], 10);
            this.isCompatible = isFunction(Object.defineProperty) && isFunction(this.$Document.querySelector);
            this.cordova = !isNull($window.cordova);
            this.pushState = !(isNull(history) || isNull(history.pushState));
            this.fileSupported = !(isUndefined($window.File) || isUndefined($window.FormData));
            this.amd = isFunction(def) && !isNull(def.amd);
            this.msApp = isObject(msA) && isFunction(msA.execUnsafeLocalFunction);
            this.indexedDb = !isNull($window.indexedDB);
            this.proto = isObject({}.__proto__);
            this.getProto = isFunction(Object.getPrototypeOf);
            this.setProto = isFunction(Object.setPrototypeOf);
            this.hasTouchEvents = !isUndefined($window.ontouchstart);
            this.hasPointerEvents = !!navigator.pointerEnabled;
            this.hasMsPointerEvents = !!navigator.msPointerEnabled;
            if (isNumber(android)) {
                this.ANDROID = android;
                return;
            }
            var ie = parseInt((/msie (\d+)/.exec(userAgent) || [])[1], 10) || parseInt((/trident\/.*; rv:(\d+)/.exec(userAgent) || [])[1], 10);
            if (isNumber(ie)) {
                this.IE = ie;
            }
        };
        Compat.prototype.__defineMappedEvents = function () {
            if (this.hasPointerEvents) {
                this.mappedEvents = {
                    $touchstart: 'pointerdown',
                    $touchend: 'pointerup',
                    $touchmove: 'pointermove',
                    $touchcancel: 'pointercancel'
                };
            }
            else if (this.hasMsPointerEvents) {
                this.mappedEvents = {
                    $touchstart: 'MSPointerDown',
                    $touchend: 'MSPointerUp',
                    $touchmove: 'MSPointerMove',
                    $touchcancel: 'MSPointerCancel'
                };
            }
            else if (this.hasTouchEvents) {
                this.mappedEvents = {
                    $touchstart: 'touchstart',
                    $touchend: 'touchend',
                    $touchmove: 'touchmove',
                    $touchcancel: 'touchcancel'
                };
            }
            else {
                this.mappedEvents = {
                    $touchstart: 'mousedown',
                    $touchend: 'mouseup',
                    $touchmove: 'mousemove',
                    $touchcancel: null
                };
            }
        };
        Compat.prototype.__defineAnimationEvents = function () {
            var documentElement = this.$Document.documentElement, styles = this.$Window.getComputedStyle(documentElement, ''), prefix;
            if (!isUndefined(styles.OLink)) {
                prefix = 'o';
            }
            else {
                var matches = Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/);
                prefix = (isArray(matches) && matches.length > 1) ? matches[1] : '';
            }
            this.vendorPrefix = {
                lowerCase: prefix,
                css: prefix === '' ? '' : '-' + prefix + '-',
                js: prefix[0].toUpperCase() + prefix.slice(1)
            };
            if (prefix === 'webkit') {
                this.animationSupported = !isUndefined(documentElement.style.WebkitAnimation);
                if (!this.animationSupported) {
                    this.animationEvents = {
                        $animation: '',
                        $animationStart: '',
                        $animationEnd: '',
                        $transition: '',
                        $transitionStart: '',
                        $transitionEnd: ''
                    };
                    return;
                }
                this.animationEvents = {
                    $animation: 'webkitAnimation',
                    $animationStart: 'webkitAnimationStart',
                    $animationEnd: 'webkitAnimationEnd',
                    $transition: 'webkitTransition',
                    $transitionStart: 'webkitTransitionStart',
                    $transitionEnd: 'webkitTransitionEnd'
                };
            }
            else {
                this.animationSupported = !isUndefined(documentElement.style.animation);
                if (!this.animationSupported) {
                    this.animationEvents = {
                        $animation: '',
                        $animationStart: '',
                        $animationEnd: '',
                        $transition: '',
                        $transitionStart: '',
                        $transitionEnd: ''
                    };
                    return;
                }
                this.animationEvents = {
                    $animation: 'animation',
                    $animationStart: 'animationstart',
                    $animationEnd: 'animationend',
                    $transition: 'transition',
                    $transitionStart: 'transitionstart',
                    $transitionEnd: 'transitionend'
                };
            }
        };
        Compat.prototype.__determineCss = function () {
            var $document = this.$Document, head = $document.head, element = $document.createElement('div');
            element.setAttribute(__Hide, '');
            head.insertBefore(element, null);
            var computedStyle = this.$Window.getComputedStyle(element), display = computedStyle.display, visibility = computedStyle.visibility;
            if (display === 'none' || visibility === 'hidden') {
                this.platCss = true;
            }
            else {
                this.platCss = false;
            }
            head.removeChild(element);
        };
        return Compat;
    })();
    _plat.Compat = Compat;
    function ICompat() {
        return new Compat();
    }
    _plat.ICompat = ICompat;
    register.injectable(__Compat, ICompat);
    var Utils = (function () {
        function Utils() {
        }
        Utils.prototype.noop = function () {
        };
        Utils.prototype.extend = function (destination) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            return extend.apply(null, [destination].concat(sources));
        };
        Utils.prototype.deepExtend = function (destination) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            return extend.apply(null, [true, destination].concat(sources));
        };
        Utils.prototype.clone = function (obj, deep) {
            return _clone(obj, deep);
        };
        Utils.prototype.isObject = function (obj) {
            return isObject(obj);
        };
        Utils.prototype.isWindow = function (obj) {
            return isWindow(obj);
        };
        Utils.prototype.isDocument = function (obj) {
            return isDocument(obj);
        };
        Utils.prototype.isNode = function (obj) {
            return isNode(obj);
        };
        Utils.prototype.isDocumentFragment = function (obj) {
            return isDocumentFragment(obj);
        };
        Utils.prototype.isString = function (obj) {
            return isString(obj);
        };
        Utils.prototype.isRegExp = function (obj) {
            return isRegExp(obj);
        };
        Utils.prototype.isPromise = function (obj) {
            return isPromise(obj);
        };
        Utils.prototype.isEmpty = function (obj) {
            return isEmpty(obj);
        };
        Utils.prototype.isBoolean = function (obj) {
            return isBoolean(obj);
        };
        Utils.prototype.isNumber = function (obj) {
            return isNumber(obj);
        };
        Utils.prototype.isFunction = function (obj) {
            return isFunction(obj);
        };
        Utils.prototype.isNull = function (obj) {
            return isNull(obj);
        };
        Utils.prototype.isUndefined = function (obj) {
            return isUndefined(obj);
        };
        Utils.prototype.isArray = function (obj) {
            return isArray(obj);
        };
        Utils.prototype.isArrayLike = function (obj) {
            return isArrayLike(obj);
        };
        Utils.prototype.isDate = function (obj) {
            return isDate(obj);
        };
        Utils.prototype.filter = function (iterator, obj, context) {
            return filter(iterator, obj, context);
        };
        Utils.prototype.where = function (properties, array) {
            return where(properties, array);
        };
        Utils.prototype.forEach = function (iterator, obj, context) {
            return forEach(iterator, obj, context);
        };
        Utils.prototype.map = function (iterator, obj, context) {
            return map(iterator, obj, context);
        };
        Utils.prototype.mapAsync = function (iterator, obj, context) {
            return mapAsync(iterator, obj, context);
        };
        Utils.prototype.mapAsyncInOrder = function (iterator, array, context) {
            return mapAsyncInOrder(iterator, array, context);
        };
        Utils.prototype.mapAsyncInDescendingOrder = function (iterator, array, context) {
            return mapAsyncInDescendingOrder(iterator, array, context);
        };
        Utils.prototype.pluck = function (key, array) {
            return map(function (value) { return value[key]; }, array);
        };
        Utils.prototype.some = function (iterator, obj, context) {
            return some(iterator, obj, context);
        };
        Utils.prototype.postpone = function (method, args, context) {
            return defer(method, 0, args, context);
        };
        Utils.prototype.defer = function (method, timeout, args, context) {
            return defer(method, timeout, args, context);
        };
        Utils.prototype.uniqueId = function (prefix) {
            return uniqueId(prefix);
        };
        Utils.prototype.camelCase = function (str) {
            return camelCase(str);
        };
        return Utils;
    })();
    _plat.Utils = Utils;
    function IUtils() {
        return new Utils();
    }
    _plat.IUtils = IUtils;
    register.injectable(__Utils, IUtils);
    function Window() {
        return window;
    }
    _plat.Window = Window;
    register.injectable(__Window, Window);
    function Document($Window) {
        return $Window.document;
    }
    _plat.Document = Document;
    register.injectable(__Document, Document, [__Window]);
    var expressions;
    (function (expressions) {
        var Regex = (function () {
            function Regex() {
                this.argumentRegex = /\((.*)\)/;
                this.aliasRegex = /[^@\.\[\(]+(?=[\.\[\(])/;
                this.initialUrlRegex = /\/[^\/]*\.(?:html|htm)/;
                this.protocolRegex = /:\/\//;
                this.invalidVariableRegex = /[^a-zA-Z0-9@_$]/;
                this.fileNameRegex = /.*(?:\/|\\)/;
                this.shiftedKeyRegex = /[A-Z!@#$%^&*()_+}{":?><|~]/;
                this.fullUrlRegex = /^(?:[a-z0-9\-]+:)(?:\/\/)?|(?:\/\/)/i;
                this.validateEmail = new RegExp('^(([^<>()[\\]\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\.,;:\\s@\\"]+)*)|' + '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|' + '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
                this.validateTelephone = /^\+?[0-9\.\-\s]*$/;
                this.dynamicSegmentsRegex = /^:([^\/]+)$/;
                this.splatSegmentRegex = /^\*([^\/]+)$/;
                this.markupRegex = new RegExp(__startSymbol + '[\\S\\s]*' + __endSymbol);
            }
            Object.defineProperty(Regex.prototype, "newLineRegex", {
                get: function () {
                    return /\r|\n/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "optionalRouteRegex", {
                get: function () {
                    return /\((.*?)\)/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "namedParameterRouteRegex", {
                get: function () {
                    return /(\(\?)?:\w+/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "wildcardRouteRegex", {
                get: function () {
                    return /\*\w*/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "escapeRouteRegex", {
                get: function () {
                    return /[\-{}\[\]+?.,\\\^$|#\s]/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "camelCaseRegex", {
                get: function () {
                    return /([\-_\.\s])(\w+?)/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "whiteSpaceRegex", {
                get: function () {
                    return /("[^"]*?"|'[^']*?')|[\s\r\n\t\v]/g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Regex.prototype, "quotationRegex", {
                get: function () {
                    return /'|"/g;
                },
                enumerable: true,
                configurable: true
            });
            return Regex;
        })();
        expressions.Regex = Regex;
        function IRegex() {
            return new Regex();
        }
        expressions.IRegex = IRegex;
        register.injectable(__Regex, IRegex);
        var Tokenizer = (function () {
            function Tokenizer() {
                this.__previousChar = '';
                this.__variableRegex = acquire(__Regex).invalidVariableRegex;
                this.__outputQueue = [];
                this.__operatorStack = [];
                this.__argCount = [];
                this.__objArgCount = [];
                this.__lastColonChar = [];
                this.__lastCommaChar = [];
            }
            Tokenizer.prototype.createTokens = function (input) {
                if (isNull(input)) {
                    return [];
                }
                this._input = input;
                var char, length = input.length, ternary = 0, ternaryFound = false, isSpace = this._isSpace, isAlphaNumeric = this._isAlphaNumeric;
                for (var index = 0; index < length; index++) {
                    char = input[index];
                    if (isSpace(char)) {
                        continue;
                    }
                    else if (isAlphaNumeric(char)) {
                        index = this.__handleAplhaNumeric(index, char);
                    }
                    else if (isDelimiter(char)) {
                        switch (char) {
                            case '.':
                                index = this.__handlePeriod(index, char);
                                break;
                            case '{':
                                this.__handleLeftBrace(char);
                                break;
                            case '}':
                                this.__handleRightBrace(char);
                                break;
                            case '[':
                                this.__handleLeftBracket(char);
                                break;
                            case ']':
                                this.__handleRightBracket(char);
                                break;
                            case '(':
                                this.__handleLeftParenthesis(char);
                                break;
                            case ')':
                                this.__handleRightParenthesis(char);
                                break;
                            case ',':
                                this.__handleComma(char);
                                break;
                            case '\'':
                            case '"':
                                index = this.__handleStringLiteral(index, char);
                                break;
                        }
                    }
                    else if (isOperator(char)) {
                        switch (char) {
                            case '?':
                                ternaryFound = true;
                                ternary++;
                                this.__handleQuestion(char);
                                break;
                            case ':':
                                ternary = this.__handleColon(char, ternary);
                                break;
                            default:
                                index = this.__handleOtherOperator(index, char);
                        }
                    }
                    else if (char === ';') {
                        this._throwError('Unexpected semicolon');
                        return [];
                    }
                    this.__previousChar = char;
                }
                if (ternaryFound && (ternary > 0)) {
                    this._throwError('Improper ternary expression');
                    return [];
                }
                else if (this.__objArgCount.length > 0) {
                    this._throwError('Improper object literal');
                    return [];
                }
                this.__popRemainingOperators();
                var output = this.__outputQueue;
                this._resetTokenizer();
                return output;
            };
            Tokenizer.prototype._checkType = function (char, isNumberLike) {
                if (isNumberLike) {
                    return this._isNumeric(char);
                }
                return this._isAlphaNumeric(char);
            };
            Tokenizer.prototype._lookAhead = function (char, index, isNumberLike) {
                var ch, input = this._input, maxLength = input.length;
                while (++index < maxLength) {
                    ch = input[index];
                    if (this._checkType(ch, isNumberLike)) {
                        char += ch;
                    }
                    else {
                        break;
                    }
                }
                return char;
            };
            Tokenizer.prototype._lookAheadForOperatorFn = function (char, index) {
                var ch, fn = char, input = this._input, maxLength = input.length;
                while (++index < maxLength) {
                    ch = input[index];
                    fn += ch;
                    if (isOperator(fn)) {
                        char = fn;
                    }
                    else {
                        break;
                    }
                }
                return char;
            };
            Tokenizer.prototype._lookAheadForDelimiter = function (endChar, index) {
                var char = '', ch, input = this._input, maxLength = input.length;
                while ((++index < maxLength) && (ch = input[index]) !== endChar) {
                    char += ch;
                }
                return char;
            };
            Tokenizer.prototype._popStackForVal = function (topOperator, char, error) {
                var outputQueue = this.__outputQueue, operatorStack = this.__operatorStack;
                while (topOperator.val !== char) {
                    outputQueue.push(operatorStack.shift());
                    topOperator = operatorStack[0];
                    if (operatorStack.length === 0) {
                        return this._throwError(error);
                    }
                }
            };
            Tokenizer.prototype._isValEqual = function (obj, char) {
                if (isNull(obj) || isNull(obj.val)) {
                    return isNull(char);
                }
                else if (obj.val === '') {
                    return char === '';
                }
                return char.indexOf(obj.val) !== -1;
            };
            Tokenizer.prototype._isValUnequal = function (obj, char) {
                if (isNull(obj) || isNull(obj.val)) {
                    return !isNull(char);
                }
                else if (obj.val === '') {
                    return char !== '';
                }
                return char.indexOf(obj.val) === -1;
            };
            Tokenizer.prototype._resetTokenizer = function () {
                this._input = null;
                this.__previousChar = '';
                this.__outputQueue = [];
                this.__operatorStack = [];
                this.__argCount = [];
                this.__objArgCount = [];
                this.__lastColonChar = [];
                this.__lastCommaChar = [];
            };
            Tokenizer.prototype._throwError = function (error) {
                var $exception = acquire(__ExceptionStatic);
                $exception.fatal(error + ' in ' + this._input, $exception.PARSE);
            };
            Tokenizer.prototype._isNumeric = function (char) {
                return ('0' <= char && char <= '9');
            };
            Tokenizer.prototype._isSpace = function (char) {
                return (char === ' ' || char === '\r' || char === '\n' || char === '\t' || char === '\v' || char === '\u00A0');
            };
            Tokenizer.prototype._isAlphaNumeric = function (char) {
                return ('a' <= char && char <= 'z' || 'A' <= char && char <= 'Z' || '0' <= char && char <= '9' || '@' === char || '_' === char || '$' === char);
            };
            Tokenizer.prototype._isStringValidVariable = function (input) {
                return !this.__variableRegex.test(input);
            };
            Tokenizer.prototype.__handleAplhaNumeric = function (index, char) {
                var isNumberLike = this._isNumeric(char), lookAhead = this._lookAhead(char, index, isNumberLike);
                this.__outputQueue.push(isNumberLike ? ({ val: Number(lookAhead), args: 0 }) : ({ val: lookAhead, args: -1 }));
                return index + lookAhead.length - 1;
            };
            Tokenizer.prototype.__handlePeriod = function (index, char) {
                var outputQueue = this.__outputQueue, operatorStack = this.__operatorStack, topOutputLength = outputQueue.length - 1, previousChar = this.__previousChar, lookAhead;
                if (topOutputLength < 0 || this._isSpace(previousChar) || !isNull(OPERATORS[previousChar]) || previousChar === '(' || previousChar === ',') {
                    lookAhead = this._lookAhead(char, index, true);
                    index += lookAhead.length - 1;
                    outputQueue.push({ val: parseFloat(lookAhead), args: 0 });
                }
                else if (!(isNull(outputQueue[topOutputLength]) || !isNumber(Number(outputQueue[topOutputLength].val)) || this._isValEqual(outputQueue[topOutputLength - 1], char))) {
                    lookAhead = this._lookAhead(char, index, true);
                    index += lookAhead.length - 1;
                    outputQueue[topOutputLength].val += parseFloat(lookAhead);
                }
                else if (this._isValEqual(operatorStack[0], char)) {
                    outputQueue.push({ val: char, args: 0 });
                }
                else {
                    operatorStack.unshift({ val: char, args: 0 });
                }
                return index;
            };
            Tokenizer.prototype.__handleLeftBrace = function (char) {
                this.__operatorStack.unshift({ val: char, args: 0 });
                this.__objArgCount.push(0);
                this.__lastColonChar.push(char);
                this.__lastCommaChar.push(char);
            };
            Tokenizer.prototype.__handleRightBrace = function (char) {
                var operatorStack = this.__operatorStack, topOperator = operatorStack[0], lastArgCount = this.__objArgCount.pop();
                if (isNull(topOperator)) {
                    return this._throwError('Improper object literal');
                }
                this._popStackForVal(topOperator, '{', 'Improper object literal');
                operatorStack.shift();
                this.__lastColonChar.pop();
                this.__lastCommaChar.pop();
                this.__outputQueue.push({ val: '{}', args: lastArgCount });
            };
            Tokenizer.prototype.__handleLeftBracket = function (char) {
                var previousChar = this.__previousChar, operatorStack = this.__operatorStack;
                if (this._isValEqual(operatorStack[0], '.')) {
                    this.__outputQueue.push(operatorStack.shift());
                }
                operatorStack.unshift({ val: char, args: 0 });
                this.__argCount.push({
                    num: 0,
                    isArray: !(previousChar === ']' || previousChar === ')' || this._isAlphaNumeric(previousChar))
                });
                this.__lastCommaChar.push(char);
            };
            Tokenizer.prototype.__handleRightBracket = function (char) {
                var operatorStack = this.__operatorStack, topOperator = operatorStack[0], lastArgCountObj = this.__argCount.pop();
                if (isNull(topOperator) || isNull(lastArgCountObj)) {
                    return this._throwError('Brackets mismatch');
                }
                if (!lastArgCountObj.isArray) {
                    lastArgCountObj.num--;
                }
                this._popStackForVal(topOperator, '[', 'Brackets mismatch');
                operatorStack.shift();
                this.__lastCommaChar.pop();
                this.__outputQueue.push({
                    val: '[]',
                    args: (this.__previousChar === '[') ? -1 : lastArgCountObj.num + 1
                });
            };
            Tokenizer.prototype.__handleLeftParenthesis = function (char) {
                var previousChar = this.__previousChar, operatorStack = this.__operatorStack;
                if (this._isAlphaNumeric(previousChar) || previousChar === ']' || previousChar === ')') {
                    var outputQueue = this.__outputQueue, topOutput = outputQueue[outputQueue.length - 1];
                    if (this._isValEqual(topOutput, '[]')) {
                        operatorStack.unshift(outputQueue.pop());
                        operatorStack.unshift(outputQueue.pop());
                    }
                    else if (!(this._isValEqual(topOutput, '()') || this._isNumeric(topOutput.val))) {
                        operatorStack.unshift(outputQueue.pop());
                    }
                    this.__argCount.push({ num: 0 });
                }
                operatorStack.unshift({ val: char, args: 0 });
                this.__lastCommaChar.push(char);
            };
            Tokenizer.prototype.__handleRightParenthesis = function (char) {
                var operatorStack = this.__operatorStack, topOperator = operatorStack[0], localArgCountObj = this.__argCount.pop();
                if (isNull(topOperator)) {
                    return this._throwError('Parentheses mismatch');
                }
                this._popStackForVal(topOperator, '(', 'Parentheses mismatch');
                operatorStack.shift();
                this.__lastCommaChar.pop();
                if (!isNull(localArgCountObj)) {
                    var localArgNum = localArgCountObj.num;
                    if (this.__previousChar === '(') {
                        if (this.__removeFnFromStack(localArgNum)) {
                            this.__outputQueue.push({
                                val: '()',
                                args: 0
                            });
                        }
                        return;
                    }
                    else if (this.__removeFnFromStack(localArgNum + 1)) {
                        this.__outputQueue.push({
                            val: '()',
                            args: (localArgNum + 1)
                        });
                    }
                }
            };
            Tokenizer.prototype.__handleComma = function (char) {
                var lastCommaArray = this.__lastCommaChar, lastCommaArg = lastCommaArray[lastCommaArray.length - 1];
                if (lastCommaArg === '(' || lastCommaArg === '[') {
                    var argCountArray = this.__argCount, length = argCountArray.length;
                    if (length > 0) {
                        argCountArray[length - 1].num++;
                    }
                    else {
                        return this._throwError('Mismatch with ' + lastCommaArg);
                    }
                }
                var topOperator = this.__operatorStack[0];
                if (isNull(topOperator)) {
                    return this._throwError('Unexpected comma');
                }
                this._popStackForVal(topOperator, lastCommaArg, 'Unexpected comma');
            };
            Tokenizer.prototype.__handleStringLiteral = function (index, char) {
                var lookAhead = this._lookAheadForDelimiter(char, index), operatorStack = this.__operatorStack;
                if (this._isValEqual(operatorStack[0], '([')) {
                    operatorStack.unshift({ val: lookAhead, args: 0 });
                }
                else {
                    this.__outputQueue.push({ val: lookAhead, args: 0 });
                }
                return index + lookAhead.length + 1;
            };
            Tokenizer.prototype.__handleQuestion = function (char) {
                this.__lastColonChar.push(char);
                this.__determinePrecedence(char);
            };
            Tokenizer.prototype.__handleColon = function (char, ternary) {
                var lastColonCharArray = this.__lastColonChar, lastColonCharacter = lastColonCharArray[lastColonCharArray.length - 1], outputQueue = this.__outputQueue;
                if (lastColonCharacter === '?') {
                    var operatorStack = this.__operatorStack, topOperator = operatorStack[0];
                    if (isNull(topOperator)) {
                        this._throwError('Ternary mismatch');
                        return;
                    }
                    ternary--;
                    lastColonCharArray.pop();
                    this._popStackForVal(topOperator, '?', 'Ternary mismatch');
                    outputQueue.push(operatorStack.shift());
                    operatorStack.unshift({ val: char, args: -2 });
                }
                else if (lastColonCharacter === '{') {
                    var objArgCount = this.__objArgCount, outputLast = outputQueue.length - 1;
                    objArgCount[objArgCount.length - 1]++;
                    if (outputLast < 0) {
                        this._throwError('Unexpected colon');
                        return;
                    }
                    outputQueue[outputLast].args = 1;
                }
                else {
                    this._throwError('Unexpected colon');
                    return;
                }
                return ternary;
            };
            Tokenizer.prototype.__handleOtherOperator = function (index, char) {
                var lookAhead = this._lookAheadForOperatorFn(char, index);
                this.__determinePrecedence(lookAhead);
                return index + lookAhead.length - 1;
            };
            Tokenizer.prototype.__popRemainingOperators = function () {
                var outputQueue = this.__outputQueue, operatorStack = this.__operatorStack, topOperator, topOperatorVal;
                while (operatorStack.length > 0) {
                    topOperator = operatorStack.shift();
                    topOperatorVal = topOperator.val;
                    if (topOperatorVal === '(' || topOperatorVal === ')') {
                        return this._throwError('Parentheses mismatch');
                    }
                    outputQueue.push(topOperator);
                }
            };
            Tokenizer.prototype.__determineOperator = function (operator) {
                switch (operator) {
                    case '+':
                    case '-':
                        if (this.__outputQueue.length === 0 || isOperator(this.__previousChar)) {
                            return OPERATORS['u' + operator];
                        }
                    default:
                        return OPERATORS[operator];
                }
            };
            Tokenizer.prototype.__determinePrecedence = function (operator) {
                var determined = false, operatorFn = this.__determineOperator(operator), operatorPrecedence = operatorFn.precedence, isLtR = operatorFn.associativity === 'ltr', operatorStack = this.__operatorStack, outputQueue = this.__outputQueue, firstArrayOperator, firstArrayVal;
                if (operatorStack.length === 0) {
                    operatorStack.unshift({ val: operator, args: operatorFn.fn.length - 2 });
                    return;
                }
                do {
                    firstArrayVal = operatorStack[0].val;
                    if (firstArrayVal === '.') {
                        outputQueue.push(operatorStack.shift());
                        continue;
                    }
                    firstArrayOperator = OPERATORS[firstArrayVal];
                    if (!(isNull(firstArrayOperator) || !(firstArrayOperator.precedence < operatorPrecedence || (isLtR && firstArrayOperator.precedence === operatorPrecedence)))) {
                        outputQueue.push(operatorStack.shift());
                    }
                    else {
                        operatorStack.unshift({ val: operator, args: operatorFn.fn.length - 2 });
                        return;
                    }
                } while (operatorStack.length > 0);
                operatorStack.unshift({ val: operator, args: operatorFn.fn.length - 2 });
            };
            Tokenizer.prototype.__removeFnFromStack = function (argCount) {
                var outputQueue = this.__outputQueue, operatorStack = this.__operatorStack, topOperator = operatorStack[0], isValEqual = this._isValEqual, isValUnequal = this._isValUnequal, fnToken, atLeastOne = false;
                while (!isNull(topOperator) && isValUnequal(topOperator, '([') && (this._isStringValidVariable(topOperator.val) || isValEqual(topOperator.val, '.[]') || isAccessor(topOperator.val))) {
                    fnToken = operatorStack.shift();
                    if (!(fnToken.args !== -1 || isValEqual(fnToken, '.[]'))) {
                        fnToken.args = -2;
                    }
                    outputQueue.push(fnToken);
                    topOperator = operatorStack[0];
                    atLeastOne = true;
                }
                if (!(atLeastOne || isValUnequal(outputQueue[outputQueue.length - argCount - 1], '()'))) {
                    atLeastOne = true;
                }
                return atLeastOne;
            };
            return Tokenizer;
        })();
        expressions.Tokenizer = Tokenizer;
        function ITokenizer() {
            return new Tokenizer();
        }
        expressions.ITokenizer = ITokenizer;
        register.injectable(__Tokenizer, ITokenizer);
        var Parser = (function () {
            function Parser() {
                this.$Tokenizer = acquire(__Tokenizer);
                this._tokens = [];
                this.__cache = {};
                this.__codeArray = [];
                this.__identifiers = [];
                this.__tempIdentifiers = [];
                this.__aliases = {};
            }
            Parser.prototype.parse = function (expression) {
                var parsedObject = this.__cache[expression];
                if (!isNull(parsedObject)) {
                    return parsedObject;
                }
                this._tokens = this.$Tokenizer.createTokens(expression);
                parsedObject = this._evaluate(expression);
                var identifiers = parsedObject.identifiers;
                if (identifiers.length === 0) {
                    var noModel = parsedObject.evaluate(null);
                    parsedObject.evaluate = function () { return noModel; };
                }
                this.__cache[expression] = parsedObject;
                return parsedObject;
            };
            Parser.prototype.clearCache = function (key) {
                if (isString(key)) {
                    deleteProperty(this.__cache, key);
                    return;
                }
                this.__cache = {};
            };
            Parser.prototype._evaluate = function (expression) {
                var tokens = this._tokens, length = tokens.length, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, useLocalContext = false, tokenObj, token, args;
                for (var index = 0; index < length; index++) {
                    tokenObj = tokens[index];
                    token = tokenObj.val;
                    args = tokenObj.args;
                    if (isAccessor(token)) {
                        switch (token) {
                            case '()':
                                useLocalContext = this.__handleFunction(index, args, useLocalContext);
                                break;
                            case '{}':
                                codeArray.push(this.__convertObject(args));
                                tempIdentifiers.push('.');
                                break;
                            default:
                                if (args < 0) {
                                    codeArray.push('[]');
                                    tempIdentifiers.push('.');
                                }
                                else if (args > 0) {
                                    codeArray.push(this.__convertArrayLiteral(args));
                                    tempIdentifiers.push('.');
                                }
                                else {
                                    useLocalContext = this.__indexIntoObject(index, token, useLocalContext);
                                }
                                break;
                        }
                    }
                    else if (isOperator(token)) {
                        if (args === 0) {
                            codeArray.push(this.__convertPrimitive(index, token, args));
                        }
                        else {
                            switch (token) {
                                case '?':
                                    this.__handleQuestion();
                                    break;
                                case ':':
                                    this.__handleColon();
                                    break;
                                case '+':
                                case '-':
                                    if (args === 1) {
                                        token = 'u' + token;
                                    }
                                default:
                                    this.__handleOperator(token, args);
                                    break;
                            }
                        }
                    }
                    else {
                        if (args < 0) {
                            codeArray.push(this.__convertFunction(index, token, useLocalContext));
                        }
                        else {
                            codeArray.push(this.__convertPrimitive(index, token, args));
                        }
                    }
                }
                this._popRemainingIdentifiers();
                this._makeIdentifiersUnique();
                var parsedExpression = {
                    evaluate: new Function(__CONTEXT, __ALIASES, 'var initialContext;' + 'return ' + (codeArray.length === 0 ? ('"' + expression + '"') : codeArray.join('')) + ';'),
                    expression: expression,
                    identifiers: this.__identifiers.slice(0),
                    aliases: Object.keys(this.__aliases)
                };
                this._resetParser();
                return parsedExpression;
            };
            Parser.prototype.__convertPrimitive = function (index, token, args) {
                if (args > 0) {
                    this.__tempIdentifiers.push('.');
                    return token;
                }
                var castTokenIsNumberLike = isNumber(Number(token)), peek = this._peek(index), isPeekIndexer = !(isNull(peek) || peek.args >= 1), isValEqual = this._isValEqual;
                if (isKeyword(token) || (isString(token) && (castTokenIsNumberLike || this._isValUnequal(peek, '[]()') || (isValEqual(peek, '[]') && !isPeekIndexer)))) {
                    this.__tempIdentifiers.push('.');
                    return '"' + token + '"';
                }
                else {
                    if (!castTokenIsNumberLike || (isValEqual(peek, '.[]') && isPeekIndexer)) {
                        this.__tempIdentifiers.push(token);
                    }
                    else {
                        this.__tempIdentifiers.push('.');
                    }
                    return token;
                }
            };
            Parser.prototype.__convertFunction = function (index, token, useLocalContext) {
                if (token[0] === '@') {
                    this.__aliases[token.slice(1)] = true;
                }
                else if (isKeyword(token)) {
                    this.__tempIdentifiers.push('.');
                    return token;
                }
                var nextToken = this._peek(index), isValEqual = this._isValEqual;
                if (isValEqual(this._tokens[index - 1], '()') && isValEqual(nextToken, '.[]')) {
                    this.__tempIdentifiers.push('.');
                }
                else {
                    this.__tempIdentifiers.push(token);
                }
                if (!isNull(nextToken)) {
                    switch (nextToken.val) {
                        case '.':
                        case '()':
                            return token;
                        default:
                            if (!useLocalContext) {
                                return '(initialContext = (' + this.__findInitialContext.toString() + ')(context,aliases,"' + token + '"))';
                            }
                            break;
                    }
                }
                else {
                    return '(initialContext = (' + this.__findInitialContext.toString() + ')(context,aliases,"' + token + '"))';
                }
            };
            Parser.prototype.__convertObject = function (args) {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, j = 0, key, codeStr = '{', tempIdentifier, temp;
                while (j++ < args) {
                    temp = codeArray.pop();
                    key = codeArray.pop();
                    codeStr += ',"' + key + '":' + temp;
                    if (tempIdentifiers.length > 1) {
                        tempIdentifier = tempIdentifiers.pop();
                        tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                        }
                    }
                }
                return codeStr.replace(',', '') + '}';
            };
            Parser.prototype.__convertArrayLiteral = function (args) {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, j = 0, tempStr = '', tempIdentifier;
                while (j++ < args) {
                    tempStr = codeArray.pop() + ',' + tempStr;
                    if (tempIdentifiers.length > 0) {
                        tempIdentifier = tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                        }
                    }
                }
                return '[' + tempStr.slice(0, -1) + ']';
            };
            Parser.prototype.__handleFunction = function (index, args, useLocalContext) {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, j = 0, previousToken = this._lookBack(index), grabFnName = !isNull(previousToken) && (previousToken.args === -2 || this._isValEqual(previousToken, '.[]')), tempStr = '', tempIdentifier, fnName = '', identifierFnName = '', codeStr, pushedIdentifier = false;
                if (grabFnName) {
                    fnName = codeArray.pop();
                    identifierFnName = tempIdentifiers.pop();
                }
                while (j++ < args) {
                    tempStr = codeArray.pop() + ',' + tempStr;
                    if (tempIdentifiers.length > 0) {
                        tempIdentifier = tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                            pushedIdentifier = true;
                        }
                    }
                }
                if (args > 0) {
                    codeStr = '.call(initialContext || context,' + tempStr.slice(0, tempStr.length - 1) + ')';
                }
                else {
                    codeStr = '.call(initialContext || context)';
                }
                if (useLocalContext) {
                    useLocalContext = false;
                    if (codeArray.length > 0) {
                        var context = codeArray.pop(), lastIndex = tempIdentifiers.length - 1;
                        if (!(lastIndex < 0 || tempIdentifiers[lastIndex] === '.' || identifierFnName === '')) {
                            tempIdentifiers[lastIndex] += '.' + identifierFnName;
                            identifiers.push(tempIdentifiers.pop());
                        }
                        else if (!(identifierFnName === '' || !pushedIdentifier || context[0] === '[' || context[context.length - 1] === ']')) {
                            identifiers[identifiers.length - 1] += '.' + identifierFnName;
                        }
                        if (isEmpty(fnName)) {
                            codeStr = context + codeStr;
                        }
                        else {
                            codeStr = '((' + this.__indexIntoContext.toString() + ')(' + context + ',"' + fnName + '") || (function () {}))' + codeStr;
                        }
                    }
                    else {
                        this._throwError('Improper expression or context');
                    }
                }
                else {
                    if (grabFnName) {
                        codeStr = '(initialContext = ((' + this.__findInitialContext.toString() + ')(context,aliases,"' + fnName + '") || (function () {}))' + codeStr + ')';
                        identifiers.push(fnName);
                    }
                    else {
                        codeStr = codeArray.pop() + codeStr;
                    }
                }
                codeArray.push(codeStr);
                var length = tempIdentifiers.length;
                if (this._isValEqual(this._peek(index), '[]') && length > 0 && tempIdentifiers[length - 1] !== '.') {
                    identifiers.push(tempIdentifiers.pop());
                }
                return useLocalContext;
            };
            Parser.prototype.__indexIntoObject = function (index, token, useLocalContext) {
                var isValEqual = this._isValEqual;
                if (isValEqual(this._peek(index), '()')) {
                    return true;
                }
                var codeArray = this.__codeArray, codeStr = codeArray.pop(), identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, previousToken = this._lookBack(index), identifierIndexer = tempIdentifiers.pop(), hasIdentifierIndexer = !isNull(identifierIndexer), lastIndex;
                if (hasIdentifierIndexer && identifierIndexer[0] === '@') {
                    codeStr = '(' + this.__indexIntoContext.toString() + ')(' + codeArray.pop() + ',' + codeStr + ')';
                    identifiers.push(identifierIndexer);
                    if (tempIdentifiers.length > 0) {
                        identifiers.push(tempIdentifiers.pop());
                    }
                }
                else if (isValEqual(previousToken, '++--()[]*/%?:>=<=&&||!===')) {
                    codeStr = '(' + this.__indexIntoContext.toString() + ')(' + codeArray.pop() + ',' + codeStr + ')';
                    tempIdentifiers.push('.');
                }
                else if (token === '[]' && !(isNull(previousToken) || previousToken.args >= 0)) {
                    codeStr = '(' + this.__indexIntoContext.toString() + ')(' + codeArray.pop() + ',' + codeStr + ')';
                    lastIndex = tempIdentifiers.length - 1;
                    if (lastIndex >= 0) {
                        if (tempIdentifiers[lastIndex] !== '.') {
                            identifiers.push(tempIdentifiers.pop());
                        }
                    }
                    identifiers.push(identifierIndexer);
                }
                else {
                    codeStr = '(' + this.__indexIntoContext.toString() + ')(' + codeArray.pop() + ',"' + codeStr + '")';
                    lastIndex = tempIdentifiers.length - 1;
                    if (lastIndex >= 0) {
                        if (tempIdentifiers[lastIndex] !== '.') {
                            tempIdentifiers[lastIndex] += '.' + identifierIndexer;
                        }
                    }
                    else if (hasIdentifierIndexer && identifierIndexer !== '.' && token !== '.') {
                        identifiers.push(identifierIndexer);
                    }
                }
                codeArray.push(codeStr);
                return useLocalContext;
            };
            Parser.prototype.__handleQuestion = function () {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, temp = codeArray.pop(), tempIdentifier;
                for (var i = 0; i < 2; i++) {
                    if (tempIdentifiers.length > 0) {
                        tempIdentifier = tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                        }
                    }
                    else {
                        break;
                    }
                }
                codeArray.push(codeArray.pop() + '?' + temp);
            };
            Parser.prototype.__handleColon = function () {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, temp = codeArray.pop(), tempIdentifier;
                for (var i = 0; i < 2; i++) {
                    if (tempIdentifiers.length > 0) {
                        tempIdentifier = tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                        }
                    }
                    else {
                        break;
                    }
                }
                codeArray.push(codeArray.pop() + ':' + temp);
            };
            Parser.prototype.__handleOperator = function (token, args) {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, codeArray = this.__codeArray, j = 0, tempStr = '', tempIdentifier;
                while (j++ < args) {
                    tempStr = 'function (context, aliases) { return ' + codeArray.pop() + '; }' + ',' + tempStr;
                    if (tempIdentifiers.length > 0) {
                        tempIdentifier = tempIdentifiers.pop();
                        if (tempIdentifier !== '.') {
                            identifiers.push(tempIdentifier);
                        }
                    }
                }
                codeArray.push('(' + OPERATORS[token].fn.toString() + ')(context, aliases,' + tempStr.slice(0, tempStr.length - 1) + ')');
            };
            Parser.prototype.__findInitialContext = function (context, aliases, token) {
                if (token[0] === '@' && aliases !== null && typeof aliases === 'object') {
                    return aliases[token.slice(1)];
                }
                else if (context !== null && typeof context === 'object') {
                    return context[token];
                }
            };
            Parser.prototype.__indexIntoContext = function (context, token) {
                if (context !== null && typeof context === 'object') {
                    return context[token];
                }
            };
            Parser.prototype._peek = function (index) {
                return this._tokens[index + 1];
            };
            Parser.prototype._lookBack = function (index) {
                return this._tokens[index - 1];
            };
            Parser.prototype._popRemainingIdentifiers = function () {
                var identifiers = this.__identifiers, tempIdentifiers = this.__tempIdentifiers, last;
                while (tempIdentifiers.length > 0) {
                    last = tempIdentifiers.pop();
                    if (last !== '.') {
                        identifiers.push(last);
                    }
                }
            };
            Parser.prototype._makeIdentifiersUnique = function () {
                var identifiers = this.__identifiers, uniqueIdentifiers = [], uniqueIdentifierObject = {}, identifier;
                while (identifiers.length > 0) {
                    identifier = identifiers.pop();
                    if (!uniqueIdentifierObject[identifier]) {
                        uniqueIdentifierObject[identifier] = true;
                        uniqueIdentifiers.push(identifier);
                    }
                }
                this.__identifiers = uniqueIdentifiers;
            };
            Parser.prototype._isValEqual = function (obj, char) {
                if (isNull(obj) || isNull(obj.val)) {
                    return isNull(char);
                }
                else if (obj.val === '') {
                    return char === '';
                }
                return char.indexOf(obj.val) !== -1;
            };
            Parser.prototype._isValUnequal = function (obj, char) {
                if (isNull(obj) || isNull(obj.val)) {
                    return !isNull(char);
                }
                else if (obj.val === '') {
                    return char !== '';
                }
                return char.indexOf(obj.val) === -1;
            };
            Parser.prototype._resetParser = function () {
                this._tokens = [];
                this.__codeArray = [];
                this.__identifiers = [];
                this.__tempIdentifiers = [];
                this.__aliases = {};
            };
            Parser.prototype._throwError = function (error) {
                var $exception = acquire(__ExceptionStatic);
                $exception.fatal(error, $exception.PARSE);
            };
            return Parser;
        })();
        expressions.Parser = Parser;
        function IParser() {
            return new Parser();
        }
        expressions.IParser = IParser;
        register.injectable(__Parser, IParser);
    })(expressions = _plat.expressions || (_plat.expressions = {}));
    var web;
    (function (web) {
        var Browser = (function () {
            function Browser() {
                this.$EventManagerStatic = acquire(__EventManagerStatic);
                this.$Compat = acquire(__Compat);
                this.$Regex = acquire(__Regex);
                this.$Window = acquire(__Window);
                this.$Dom = acquire(__Dom);
                this.__lastUrl = this.$Window.location.href;
                this.__initializing = false;
                var ContextManager = acquire(__ContextManagerStatic);
                ContextManager.defineGetter(this, 'uid', uniqueId(__Plat));
                this.$EventManagerStatic.on(this.uid, __beforeLoad, this.initialize, this);
            }
            Browser.prototype.initialize = function () {
                var $config = Browser.config, $compat = this.$Compat;
                this.$EventManagerStatic.dispose(this.uid);
                if ($config.routingType === $config.NONE) {
                    return;
                }
                this.__initializing = true;
                acquire(__UrlUtilsInstance);
                var url = this.url(), trimmedUrl = url, changed = this._urlChanged.bind(this), $dom = this.$Dom, $window = this.$Window;
                if (trimmedUrl !== url) {
                    this.url(trimmedUrl, true);
                }
                if ($compat.pushState) {
                    $dom.addEventListener($window, __POPSTATE, changed, false);
                }
                $dom.addEventListener($window, __HASHCHANGE, changed, false);
                this.__initializing = false;
            };
            Browser.prototype.url = function (url, replace) {
                var location = this.$Window.location;
                if (isString(url) && this.__lastUrl !== url) {
                    this._setUrl(url, replace);
                }
                return this.__currentUrl || location.href;
            };
            Browser.prototype.urlUtils = function (url) {
                url = url || this.url();
                var $urlUtils = acquire(__UrlUtilsInstance), $config = Browser.config;
                if ($config.routingType === $config.HASH) {
                    url = url.replace(new RegExp('#' + ($config.hashPrefix || '') + '/?'), '');
                }
                $urlUtils.initialize(url);
                return $urlUtils;
            };
            Browser.prototype.isCrossDomain = function (url) {
                if (!isString(url)) {
                    return false;
                }
                var urlUtils = this.urlUtils(url), locationUtils = this.urlUtils();
                return urlUtils.protocol !== locationUtils.protocol || urlUtils.hostname !== locationUtils.hostname || urlUtils.port !== locationUtils.port;
            };
            Browser.prototype._urlChanged = function () {
                if (this.__initializing) {
                    return;
                }
                this.__currentUrl = null;
                var url = this.url(), $config = Browser.config;
                if (this.__lastUrl === url || ($config.routingType === $config.STATE && url.indexOf(this.__lastUrl + '#') > -1)) {
                    return;
                }
                this.__lastUrl = url;
                var $manager = this.$EventManagerStatic;
                $manager.dispatch(__urlChanged, this, $manager.DIRECT, [this.urlUtils()]);
            };
            Browser.prototype._setUrl = function (url, replace) {
                url = this._formatUrl(url);
                var utils = this.urlUtils(url);
                if (utils.href.indexOf(Browser.config.baseUrl) === -1) {
                    location.href = url;
                    return;
                }
                if (!this.$Regex.fullUrlRegex.test(url) && url[0] !== '/') {
                    url = '/' + url;
                }
                if (this.$Compat.pushState) {
                    if (replace) {
                        history.replaceState(null, '', url);
                    }
                    else {
                        history.pushState(null, '', url);
                    }
                    if (!this.__initializing) {
                        this._urlChanged();
                    }
                }
                else {
                    this.__currentUrl = url;
                    if (replace) {
                        location.replace(url);
                    }
                    else {
                        location.href = url;
                    }
                }
            };
            Browser.prototype._formatUrl = function (url) {
                var $config = Browser.config;
                if (url.indexOf($config.baseUrl) > -1 && $config.routingType === $config.HASH) {
                    var hasProtocol = url.indexOf(this.urlUtils().protocol) !== -1, prefix = $config.hashPrefix || '', hashRegex = new RegExp('#' + prefix + '|#/');
                    if (hasProtocol && !hashRegex.test(url)) {
                        url = url + '#' + prefix + '/';
                    }
                    else if (!hashRegex.test(url)) {
                        url = '#' + prefix + '/' + url;
                    }
                }
                return url;
            };
            Browser.config = {
                NONE: 'none',
                HASH: 'hash',
                STATE: 'state',
                routingType: 'none',
                hashPrefix: '',
                baseUrl: ''
            };
            return Browser;
        })();
        web.Browser = Browser;
        function IBrowser() {
            return new Browser();
        }
        web.IBrowser = IBrowser;
        register.injectable(__Browser, IBrowser);
        function IBrowserConfig() {
            return Browser.config;
        }
        web.IBrowserConfig = IBrowserConfig;
        register.injectable(__BrowserConfig, IBrowserConfig);
        var UrlUtils = (function () {
            function UrlUtils() {
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                this.$Document = acquire(__Document);
                this.$Window = acquire(__Window);
                this.$Compat = acquire(__Compat);
                this.$Regex = acquire(__Regex);
                this.$BrowserConfig = acquire(__BrowserConfig);
                var $config = this.$BrowserConfig;
                if (isEmpty($config.baseUrl) || !this.$Regex.fullUrlRegex.test($config.baseUrl)) {
                    var url = this.$Window.location.href, trimmedUrl = url.replace(this.$Regex.initialUrlRegex, '/'), baseUrl = $config.baseUrl;
                    if (isString(baseUrl)) {
                        if (baseUrl.indexOf('/') === 0) {
                            baseUrl = baseUrl.slice(1);
                        }
                    }
                    else {
                        baseUrl = '';
                    }
                    baseUrl = UrlUtils.__getBaseUrl(trimmedUrl) + baseUrl;
                    while (baseUrl[baseUrl.length - 1] === '/') {
                        baseUrl = baseUrl.slice(0, -1);
                    }
                    $config.baseUrl = baseUrl + '/';
                }
            }
            UrlUtils.__getQuery = function (search) {
                if (isEmpty(search)) {
                    return;
                }
                var split = search.split('&'), query = {}, length = split.length, item;
                for (var i = 0; i < length; ++i) {
                    item = split[i].split('=');
                    query[item[0]] = item[1];
                }
                return query;
            };
            UrlUtils.__getBaseUrl = function (url) {
                var $Regex = acquire(__Regex), origin = window.location.origin, protocol = window.location.protocol, host = window.location.host;
                if (protocol === 'file:' || protocol.indexOf('wmapp') > -1) {
                    origin = window.location.href;
                }
                else if (isUndefined(origin)) {
                    origin = window.location.protocol + "//" + window.location.host;
                }
                origin = origin.replace($Regex.initialUrlRegex, '');
                return origin.split('?')[0].split('#')[0] + '/';
            };
            UrlUtils.prototype.initialize = function (url) {
                url = url || '';
                var element = UrlUtils.__urlUtilsElement || (UrlUtils.__urlUtilsElement = this.$Document.createElement('a')), define = this.$ContextManagerStatic.defineGetter, $BrowserConfig = this.$BrowserConfig;
                if (url[0] === '/' && url.indexOf('//') !== 0) {
                    url = url.slice(1);
                }
                if (!this.$Regex.fullUrlRegex.test(url)) {
                    url = $BrowserConfig.baseUrl + url;
                }
                element.setAttribute('href', url);
                url = element.href;
                element.setAttribute('href', url);
                url = element.href;
                var protocol = element.protocol ? element.protocol.replace(/:$/, '') : '';
                define(this, 'href', url, true, true);
                define(this, 'protocol', element.protocol ? element.protocol.replace(/:$/, '') : '', true, true);
                define(this, 'host', element.host, true, true);
                define(this, 'search', element.search ? element.search.replace(/^\?/, '') : '', true, true);
                define(this, 'hash', element.hash ? element.hash.replace(/^#/, '') : '', true, true);
                define(this, 'hostname', element.hostname, true, true);
                define(this, 'port', element.port, true, true);
                var path;
                if (!isEmpty($BrowserConfig.baseUrl)) {
                    path = url.replace($BrowserConfig.baseUrl, '/');
                }
                else {
                    path = (element.pathname.charAt(0) === '/') ? element.pathname : '/' + element.pathname;
                }
                define(this, 'pathname', path.split('?')[0].split('#')[0], true, true);
                define(this, 'query', UrlUtils.__getQuery(this.search), true, true);
            };
            UrlUtils.prototype.toString = function () {
                return this.href;
            };
            return UrlUtils;
        })();
        web.UrlUtils = UrlUtils;
        function IUrlUtilsInstance() {
            return new UrlUtils();
        }
        web.IUrlUtilsInstance = IUrlUtilsInstance;
        register.injectable(__UrlUtilsInstance, IUrlUtilsInstance, null, __INSTANCE);
        var Router = (function () {
            function Router() {
                var _this = this;
                this.$Browser = acquire(__Browser);
                this.$BrowserConfig = acquire(__BrowserConfig);
                this.$EventManagerStatic = acquire(__EventManagerStatic);
                this.$NavigationEventStatic = acquire(__NavigationEventStatic);
                this.$Compat = acquire(__Compat);
                this.$Regex = acquire(__Regex);
                this.$Window = acquire(__Window);
                this._routes = [];
                this.__escapeRegex = this.$Regex.escapeRouteRegex;
                this.__optionalRegex = this.$Regex.optionalRouteRegex;
                this.__pathSlashRegex = /^\/|\/$/g;
                this.__firstRoute = true;
                var ContextManager = acquire(__ContextManagerStatic);
                ContextManager.defineGetter(this, 'uid', uniqueId(__Plat));
                this._removeListener = this.$EventManagerStatic.on(this.uid, __urlChanged, function (ev, utils) {
                    postpone(function () {
                        _this._routeChanged(ev, utils);
                    });
                }, this);
                var $browserConfig = this.$BrowserConfig;
                if ($browserConfig.routingType === $browserConfig.NONE) {
                    $browserConfig.routingType = $browserConfig.HASH;
                    $browserConfig.hashPrefix = $browserConfig.hashPrefix || '';
                }
                if (this.$Compat.msApp) {
                    this.__history = [];
                }
            }
            Router.prototype.registerRoutes = function (type, routes) {
                if (!isArray(routes)) {
                    return;
                }
                var injector = viewControlInjectors[type], length = routes.length;
                for (var i = 0; i < length; ++i) {
                    this._registerRoute(routes[i], injector, type);
                }
            };
            Router.prototype.route = function (path, options) {
                options = options || {};
                var replace = options.replace, route, match, $browser = this.$Browser, currentUtils = $browser.urlUtils();
                if (this.__firstRoute) {
                    this.__firstRoute = false;
                    if (isEmpty(path)) {
                        this._routeChanged(null, currentUtils);
                        return true;
                    }
                }
                var build = this._buildRoute(path, options.query);
                if (isNull(build)) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.warn('Route: ' + path + ' is not a matched route.', $exception.NAVIGATION);
                    return false;
                }
                route = build.route;
                match = build.match;
                var event = this.$NavigationEventStatic.dispatch(__beforeRouteChange, this, {
                    parameter: match.route,
                    target: match.injector,
                    type: match.type,
                    options: null
                });
                if (event.defaultPrevented) {
                    return false;
                }
                var nextUtils = $browser.urlUtils(route);
                if (currentUtils.href === nextUtils.href) {
                    replace = true;
                }
                $browser.url(route, replace);
                return true;
            };
            Router.prototype.goBack = function (length) {
                this.$Window.history.go(-length);
                var history = this.__history;
                if (isArray(history) && history.length > 1) {
                    this.__history = history.slice(0, history.length - length);
                    this.$Browser.url(this.__history.pop() || '');
                }
            };
            Router.prototype._buildRoute = function (routeParameter, query) {
                var queryStr = this._buildQueryString(query);
                if (!isString(routeParameter)) {
                    return;
                }
                var route = routeParameter + queryStr, utils = this.$Browser.urlUtils(route), match = this._match(utils);
                if (isNull(match)) {
                    return;
                }
                return {
                    route: route,
                    match: match
                };
            };
            Router.prototype._buildQueryString = function (query) {
                var queryStr = [];
                if (!isObject(query)) {
                    return queryStr.join();
                }
                var keys = Object.keys(query), length = keys.length, key;
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    queryStr.push(key + '=' + query[key]);
                }
                return '?' + queryStr.join('&');
            };
            Router.prototype._routeChanged = function (ev, utils) {
                var matchedRoute = this._match(utils);
                if (isNull(matchedRoute)) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.warn('Could not match route: ' + utils.pathname, $exception.NAVIGATION);
                    return;
                }
                if (this.__history) {
                    this.__history.push(matchedRoute.route.path);
                }
                this.$NavigationEventStatic.dispatch(__routeChanged, this, {
                    parameter: matchedRoute.route,
                    target: matchedRoute.injector,
                    type: matchedRoute.type,
                    options: null
                });
            };
            Router.prototype._registerRoute = function (route, injector, type) {
                var regexp = isRegExp(route), routeParameters;
                if (!(regexp || isString(route))) {
                    return;
                }
                else if (regexp) {
                    routeParameters = {
                        regex: route,
                        type: type,
                        injector: injector,
                        args: []
                    };
                }
                else if (isEmpty(route)) {
                    this._defaultRoute = {
                        injector: injector,
                        type: type
                    };
                    return;
                }
                else if (route.trim() === '/') {
                    this._baseRoute = {
                        injector: injector,
                        type: type
                    };
                    return;
                }
                else {
                    if (route[0] === '/') {
                        route = route.slice(1);
                    }
                    routeParameters = this._getRouteParameters(route);
                    routeParameters.injector = injector;
                    routeParameters.type = type;
                }
                this._routes.push(routeParameters);
            };
            Router.prototype._getRouteParameters = function (route) {
                var $regex = this.$Regex, namedRegex = $regex.namedParameterRouteRegex, escapeRegex = this.__escapeRegex, optionalRegex = this.__optionalRegex, wildcardRegex = $regex.wildcardRouteRegex, regexArgs = route.match(namedRegex), wildcard = wildcardRegex.exec(route), args = [];
                route = route.replace(escapeRegex, '\\$').replace(optionalRegex, '(?:$1)?').replace(namedRegex, function (match, optional) { return optional ? match : '([^/?]+)'; }).replace(wildcardRegex, '([^?]*?)');
                if (!isNull(regexArgs)) {
                    var length = regexArgs.length;
                    for (var i = 0; i < length; ++i) {
                        args.push(regexArgs[i].slice(1));
                    }
                }
                if (!isNull(wildcard)) {
                    var wildCardName = wildcard[0].slice(1);
                    if (isEmpty(wildCardName)) {
                        wildCardName = 'wildcard';
                    }
                    args.push(wildCardName);
                }
                return {
                    regex: new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$'),
                    args: args
                };
            };
            Router.prototype._match = function (utils) {
                var routes = this._routes, url = this._getUrlFragment(utils), route, exec, args, routeParams = {}, path, argsLength, length = routes.length;
                if (isEmpty(url)) {
                    var base = this._baseRoute || this._defaultRoute;
                    if (isNull(base)) {
                        return;
                    }
                    return {
                        injector: base.injector,
                        type: base.type,
                        route: {
                            path: url,
                            parameters: {},
                            query: utils.query
                        }
                    };
                }
                for (var i = 0; i < length; ++i) {
                    route = routes[i];
                    exec = route.regex.exec(url);
                    if (isNull(exec)) {
                        continue;
                    }
                    args = route.args;
                    argsLength = args.length;
                    path = exec.input;
                    if (argsLength === 0) {
                        args = Object.keys(exec.slice());
                        exec.unshift('');
                        argsLength = args.length;
                    }
                    for (var j = 0; j < argsLength; ++j) {
                        routeParams[args[j]] = exec[j + 1];
                    }
                    return {
                        injector: route.injector,
                        type: route.type,
                        route: {
                            path: path,
                            parameters: routeParams,
                            query: utils.query
                        }
                    };
                }
                var defaultRoute = this._defaultRoute;
                if (isNull(defaultRoute)) {
                    return;
                }
                return {
                    injector: defaultRoute.injector,
                    type: defaultRoute.type,
                    route: {
                        path: url,
                        parameters: {},
                        query: utils.query
                    }
                };
            };
            Router.prototype._getUrlFragment = function (utils) {
                return utils.pathname.replace(this.__pathSlashRegex, '');
            };
            return Router;
        })();
        web.Router = Router;
        function IRouter() {
            return new Router();
        }
        web.IRouter = IRouter;
        register.injectable(__Router, IRouter);
    })(web = _plat.web || (_plat.web = {}));
    var async;
    (function (async) {
        var Promise = (function () {
            function Promise(resolveFunction) {
                var $exception;
                if (!isFunction(resolveFunction)) {
                    $exception = acquire(__ExceptionStatic);
                    $exception.fatal(new TypeError('You must pass a resolver function as the first argument to the promise constructor'), $exception.PROMISE);
                }
                if (!(this instanceof Promise)) {
                    $exception = acquire(__ExceptionStatic);
                    $exception.fatal(new TypeError('Failed to construct "Promise": ' + 'Please use the "new" operator, this object constructor cannot be called as a function.'), $exception.PROMISE);
                }
                this.__subscribers = [];
                Promise.__invokeResolveFunction(resolveFunction, this);
            }
            Promise.all = function (promises) {
                if (!isArray(promises)) {
                    return Promise.all([promises]);
                }
                return new Promise(function (resolve, reject) {
                    var results = [], remaining = promises.length, promise;
                    if (remaining === 0) {
                        resolve([]);
                    }
                    function resolver(index) {
                        return function (value) { return resolveAll(index, value); };
                    }
                    function resolveAll(index, value) {
                        results[index] = value;
                        if (--remaining === 0) {
                            resolve(results);
                        }
                    }
                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];
                        if (isPromise(promise)) {
                            promise.then(resolver(i), reject);
                        }
                        else {
                            resolveAll(i, promise);
                        }
                    }
                });
            };
            Promise.race = function (promises) {
                if (!isArray(promises)) {
                    return Promise.race([promises]);
                }
                return new Promise(function (resolve, reject) {
                    var promise;
                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];
                        if (promise && typeof promise.then === 'function') {
                            promise.then(resolve, reject);
                        }
                        else {
                            resolve(promise);
                        }
                    }
                });
            };
            Promise.resolve = function (value) {
                return new Promise(function (resolve, reject) {
                    resolve(value);
                });
            };
            Promise.reject = function (error) {
                return new Promise(function (resolve, reject) {
                    reject(error);
                });
            };
            Promise.__invokeResolveFunction = function (resolveFunction, promise) {
                function resolvePromise(value) {
                    Promise.__resolve(promise, value);
                }
                function rejectPromise(reason) {
                    Promise.__reject(promise, reason);
                }
                try {
                    resolveFunction(resolvePromise, rejectPromise);
                }
                catch (e) {
                    rejectPromise(e);
                }
            };
            Promise.__invokeCallback = function (settled, promise, callback, detail) {
                var hasCallback = isFunction(callback), value, error, succeeded, failed;
                if (hasCallback) {
                    try {
                        value = callback(detail);
                        succeeded = true;
                    }
                    catch (e) {
                        failed = true;
                        error = e;
                    }
                }
                else {
                    value = detail;
                    succeeded = true;
                }
                if (Promise.__handleThenable(promise, value)) {
                    return;
                }
                else if (hasCallback && succeeded) {
                    Promise.__resolve(promise, value);
                }
                else if (failed) {
                    Promise.__reject(promise, error);
                }
                else if (settled === 1 /* FULFILLED */) {
                    Promise.__resolve(promise, value);
                }
                else if (settled === 2 /* REJECTED */) {
                    Promise.__reject(promise, value);
                }
            };
            Promise.__publish = function (promise, settled) {
                var subscribers = promise.__subscribers, detail = promise.__detail, child, callback;
                for (var i = 0; i < subscribers.length; i += 3) {
                    child = subscribers[i];
                    callback = subscribers[i + settled];
                    Promise.__invokeCallback(settled, child, callback, detail);
                }
                promise.__subscribers = null;
            };
            Promise.__publishFulfillment = function (promise) {
                Promise.__publish(promise, promise.__state = 1 /* FULFILLED */);
            };
            Promise.__publishRejection = function (promise) {
                Promise.__publish(promise, promise.__state = 2 /* REJECTED */);
            };
            Promise.__reject = function (promise, reason) {
                if (promise.__state !== State.PENDING) {
                    return;
                }
                promise.__state = 0 /* SEALED */;
                promise.__detail = reason;
                Promise.config.async(Promise.__publishRejection, promise);
            };
            Promise.__fulfill = function (promise, value) {
                if (promise.__state !== State.PENDING) {
                    return;
                }
                promise.__state = 0 /* SEALED */;
                promise.__detail = value;
                Promise.config.async(Promise.__publishFulfillment, promise);
            };
            Promise.__resolve = function (promise, value) {
                if (promise === value) {
                    Promise.__fulfill(promise, value);
                }
                else if (!Promise.__handleThenable(promise, value)) {
                    Promise.__fulfill(promise, value);
                }
            };
            Promise.__handleThenable = function (promise, value) {
                var resolved;
                try {
                    if (promise === value) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(new TypeError('A promises callback cannot return the same promise.'), $exception.PROMISE);
                    }
                    if (isPromise(value)) {
                        value.then.call(value, function (val) {
                            if (resolved) {
                                return true;
                            }
                            resolved = true;
                            if (value !== val) {
                                Promise.__resolve(promise, val);
                            }
                            else {
                                Promise.__fulfill(promise, val);
                            }
                        }, function (val) {
                            if (resolved) {
                                return true;
                            }
                            resolved = true;
                            Promise.__reject(promise, val);
                        });
                        return true;
                    }
                }
                catch (error) {
                    if (resolved) {
                        return true;
                    }
                    Promise.__reject(promise, error);
                    return true;
                }
                return false;
            };
            Promise.__subscribe = function (parent, child, onFulfilled, onRejected) {
                var subscribers = parent.__subscribers;
                var length = subscribers.length;
                subscribers[length] = child;
                subscribers[length + 1 /* FULFILLED */] = onFulfilled;
                subscribers[length + 2 /* REJECTED */] = onRejected;
            };
            Promise.prototype.then = function (onFulfilled, onRejected) {
                var promise = this;
                var thenPromise = new this.constructor(function () {
                }, this);
                if (this.__state) {
                    var callbacks = arguments;
                    Promise.config.async(function () {
                        Promise.__invokeCallback(promise.__state, thenPromise, callbacks[promise.__state - 1], promise.__detail);
                    });
                }
                else {
                    Promise.__subscribe(this, thenPromise, onFulfilled, onRejected);
                }
                return thenPromise;
            };
            Promise.prototype.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            Promise.prototype.toString = function () {
                return '[object Promise]';
            };
            Promise.config = {
                async: function (callback, arg) {
                    var length = queue.push([callback, arg]);
                    if (length === 1) {
                        scheduleFlush();
                    }
                }
            };
            return Promise;
        })();
        async.Promise = Promise;
        var State;
        (function (State) {
            State[State["PENDING"] = (void 0)] = "PENDING";
            State[State["SEALED"] = 0] = "SEALED";
            State[State["FULFILLED"] = 1] = "FULFILLED";
            State[State["REJECTED"] = 2] = "REJECTED";
        })(State || (State = {}));
        ;
        var browserGlobal = (typeof window !== 'undefined') ? window : {}, BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
        function useNextTick() {
            return function () {
                process.nextTick(flush);
            };
        }
        function useMutationObserver() {
            var observer = new BrowserMutationObserver(flush), $document = acquire(__Document), $window = acquire(__Window), element = $document.createElement('div');
            observer.observe(element, { attributes: true });
            $window.addEventListener('unload', function () {
                observer.disconnect();
                observer = null;
            }, false);
            return function () {
                element.setAttribute('drainQueue', 'drainQueue');
            };
        }
        function useSetTimeout() {
            var global = global, local = (typeof global !== 'undefined') ? global : this;
            return function () {
                local.setTimeout(flush, 1);
            };
        }
        var queue = [];
        function flush() {
            var tuple, callback, arg;
            for (var i = 0; i < queue.length; i++) {
                tuple = queue[i];
                callback = tuple[0];
                arg = tuple[1];
                callback(arg);
            }
            queue = [];
        }
        var process = process, scheduleFlush;
        if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
            scheduleFlush = useNextTick();
        }
        else if (BrowserMutationObserver) {
            scheduleFlush = useMutationObserver();
        }
        else {
            scheduleFlush = useSetTimeout();
        }
        function IPromise($Window) {
            if (!isNull($Window.Promise) && isFunction($Window.Promise.all) && isFunction($Window.Promise.race) && isFunction($Window.Promise.resolve) && isFunction($Window.Promise.reject)) {
                return $Window.Promise;
            }
            return Promise;
        }
        async.IPromise = IPromise;
        register.injectable(__Promise, IPromise, [__Window], __CLASS);
        var HttpRequest = (function () {
            function HttpRequest(options) {
                this.$Browser = acquire(__Browser);
                this.$Window = acquire(__Window);
                this.$Document = acquire(__Document);
                this.$config = acquire(__HttpConfig);
                this.__fileSupported = acquire(__Compat).fileSupported;
                this.__options = extend({}, this.$config, options);
            }
            HttpRequest.prototype.execute = function () {
                var options = this.__options, url = options.url;
                if (!isString(url) || isEmpty(url.trim())) {
                    return this._invalidOptions();
                }
                options.url = this.$Browser.urlUtils(url).toString();
                var isCrossDomain = options.isCrossDomain || false, xDomain = false;
                if (isCrossDomain) {
                    xDomain = true;
                }
                else {
                    this.xhr = new XMLHttpRequest();
                    if (isUndefined(this.xhr.withCredentials)) {
                        xDomain = this.$Browser.isCrossDomain(url);
                    }
                }
                if (xDomain) {
                    this.xhr = null;
                    this.jsonpCallback = options.jsonpCallback || uniqueId(__JSONP_CALLBACK);
                    return this.executeJsonp();
                }
                return this._sendXhrRequest();
            };
            HttpRequest.prototype.executeJsonp = function () {
                var _this = this;
                var options = this.__options, url = options.url;
                if (!isString(url) || isEmpty(url.trim())) {
                    return this._invalidOptions();
                }
                options.url = this.$Browser.urlUtils(url).toString();
                if (isNull(this.jsonpCallback)) {
                    this.jsonpCallback = options.jsonpCallback || uniqueId('plat_callback');
                }
                var promise = new AjaxPromise(function (resolve, reject) {
                    var $window = _this.$Window, $document = _this.$Document, scriptTag = $document.createElement('script'), jsonpCallback = _this.jsonpCallback, jsonpIdentifier = options.jsonpIdentifier || 'callback';
                    scriptTag.src = url + ((url.indexOf('?') > -1) ? '&' : '?') + jsonpIdentifier + '=' + jsonpCallback;
                    var oldValue = $window[jsonpCallback];
                    $window[jsonpCallback] = function (response) {
                        if (isFunction(_this.clearTimeout)) {
                            _this.clearTimeout();
                        }
                        $document.head.removeChild(scriptTag);
                        if (isUndefined(oldValue)) {
                            deleteProperty($window, jsonpCallback);
                        }
                        else {
                            $window[jsonpCallback] = oldValue;
                        }
                        resolve({
                            response: response,
                            status: 200
                        });
                    };
                    $document.head.appendChild(scriptTag);
                    var timeout = options.timeout;
                    if (isNumber(timeout) && timeout > 0) {
                        _this.clearTimeout = postpone(function () {
                            _this.clearTimeout = defer(function () {
                                reject(new AjaxError({
                                    response: 'Request timed out in ' + timeout + 'ms for ' + url,
                                    status: 408
                                }));
                                $window[jsonpCallback] = noop;
                            }, timeout - 1);
                        });
                    }
                });
                promise.initialize(this);
                return promise;
            };
            HttpRequest.prototype._xhrOnReadyStateChange = function () {
                var xhr = this.xhr;
                if (xhr.readyState === 4) {
                    var status = xhr.status;
                    if (status === 0) {
                        var response = xhr.response;
                        if (isNull(response)) {
                            try {
                                response = xhr.responseText;
                            }
                            catch (e) {
                            }
                        }
                        if (!isEmpty(response)) {
                            return true;
                        }
                        return false;
                    }
                    if ((status >= 200 && status < 300) || status === 304) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            };
            HttpRequest.prototype._sendXhrRequest = function () {
                var _this = this;
                var xhr = this.xhr, options = this.__options, method = options.method, url = options.url, promise = new AjaxPromise(function (resolve, reject) {
                    xhr.onreadystatechange = function () {
                        var success = _this._xhrOnReadyStateChange();
                        if (isNull(success)) {
                            return;
                        }
                        var response = _this._formatResponse(options.responseType, success);
                        if (success) {
                            resolve(response);
                        }
                        else {
                            reject(new AjaxError(response));
                        }
                        _this.xhr = options = null;
                    };
                    if (!isString(method)) {
                        var Exception = acquire(__ExceptionStatic);
                        Exception.warn('AjaxOptions method was not of type string. Defaulting to "GET".', Exception.AJAX);
                        method = 'GET';
                    }
                    xhr.open(method.toUpperCase(), url, true, options.user, options.password);
                    var responseType = options.responseType;
                    if (!(_this.__fileSupported || responseType === '' || responseType === 'text')) {
                        responseType = '';
                    }
                    xhr.responseType = responseType;
                    xhr.withCredentials = options.withCredentials;
                    var mimeType = options.overrideMimeType, data = options.data;
                    if (isString(mimeType) && !isEmpty(mimeType)) {
                        xhr.overrideMimeType(mimeType);
                    }
                    if (isNull(data) || data === '') {
                        _this.__setHeaders();
                        xhr.send();
                    }
                    else {
                        var transforms = options.transforms || [], length = transforms.length, contentType = options.contentType, contentTypeExists = isString(contentType) && !isEmpty(contentType);
                        if (length > 0) {
                            for (var i = 0; i < length; ++i) {
                                data = transforms[i](data, xhr);
                            }
                            if (contentTypeExists) {
                                xhr.setRequestHeader('Content-Type', contentType);
                            }
                            _this.__setHeaders();
                            xhr.send(data);
                        }
                        else if (isObject(data)) {
                            if (contentTypeExists) {
                                var contentTypeLower = contentType.toLowerCase();
                                if (contentTypeLower.indexOf('x-www-form-urlencoded') !== -1) {
                                    data = _this.__serializeFormData();
                                    xhr.setRequestHeader('Content-Type', contentType);
                                    _this.__setHeaders();
                                    xhr.send(data);
                                }
                                else if (contentTypeLower.indexOf('multipart/form-data') !== -1) {
                                    if (_this.__fileSupported) {
                                        data = _this.__appendFormData();
                                        _this.__setHeaders();
                                        xhr.send(data);
                                    }
                                    else {
                                        _this.__submitFramedFormData().then(function (response) {
                                            resolve(response);
                                        }, function () {
                                            _this.xhr = null;
                                        });
                                    }
                                }
                                else {
                                    data = JSON.stringify(data);
                                    xhr.setRequestHeader('Content-Type', contentType);
                                    _this.__setHeaders();
                                    xhr.send(data);
                                }
                            }
                            else {
                                _this.__setHeaders();
                                xhr.send(data);
                            }
                        }
                        else {
                            if (contentTypeExists) {
                                xhr.setRequestHeader('Content-Type', contentType);
                            }
                            _this.__setHeaders();
                            xhr.send(data);
                        }
                    }
                    var timeout = options.timeout;
                    if (isNumber(timeout) && timeout > 0) {
                        _this.clearTimeout = postpone(function () {
                            _this.clearTimeout = defer(function () {
                                reject(new AjaxError({
                                    response: 'Request timed out in ' + timeout + 'ms for ' + options.url,
                                    status: xhr.status,
                                    getAllResponseHeaders: function () {
                                        return xhr.getAllResponseHeaders();
                                    },
                                    xhr: xhr
                                }));
                                xhr.onreadystatechange = null;
                                xhr.abort();
                                _this.xhr = null;
                            }, timeout - 1);
                        });
                    }
                });
                promise.initialize(this);
                return promise;
            };
            HttpRequest.prototype._invalidOptions = function () {
                return new AjaxPromise(function (resolve, reject) {
                    var exceptionFactory = acquire(__ExceptionStatic);
                    exceptionFactory.warn('Attempting a request without specifying a url', exceptionFactory.AJAX);
                    reject(new AjaxError({
                        response: 'Attempting a request without specifying a url',
                        status: null,
                        getAllResponseHeaders: null,
                        xhr: null
                    }));
                });
            };
            HttpRequest.prototype._formatResponse = function (responseType, success) {
                var xhr = this.xhr, status = xhr.status, response = xhr.response;
                if (isNull(response)) {
                    try {
                        response = xhr.responseText;
                    }
                    catch (e) {
                    }
                }
                if (status === 0) {
                    status = success ? 200 : 404;
                }
                xhr.onreadystatechange = null;
                if (isFunction(this.clearTimeout)) {
                    this.clearTimeout();
                }
                if (responseType === 'json' && isString(response)) {
                    try {
                        response = JSON.parse(response);
                    }
                    catch (e) {
                    }
                }
                return {
                    response: response,
                    status: status,
                    getAllResponseHeaders: function () {
                        return xhr.getAllResponseHeaders();
                    },
                    xhr: xhr
                };
            };
            HttpRequest.prototype.__setHeaders = function () {
                var headers = this.__options.headers, keys = Object.keys(headers || {}), xhr = this.xhr, length = keys.length, key, i;
                for (i = 0; i < length; ++i) {
                    key = keys[i];
                    xhr.setRequestHeader(key, headers[key]);
                }
            };
            HttpRequest.prototype.__serializeFormData = function () {
                var data = this.__options.data, keys = Object.keys(data), key, val, formBuffer = [];
                while (keys.length > 0) {
                    key = keys.pop();
                    val = data[key];
                    if (isNull(val)) {
                        val = '';
                    }
                    else if (isObject(val)) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.warn('Invalid form entry with key "' + key + '" and value "' + val, $exception.AJAX);
                        val = JSON.stringify(val);
                    }
                    formBuffer.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
                }
                return formBuffer.join('&').replace(/%20/g, '+');
            };
            HttpRequest.prototype.__appendFormData = function () {
                var data = this.__options.data, formData = new FormData(), keys = Object.keys(data), key, val;
                while (keys.length > 0) {
                    key = keys.pop();
                    val = data[key];
                    if (isNull(val)) {
                        formData.append(key, '');
                    }
                    else if (isObject(val)) {
                        if (isFile(val)) {
                            formData.append(key, val, val.name || val.fileName || 'blob');
                        }
                        else {
                            var $exception = acquire(__ExceptionStatic);
                            $exception.warn('Invalid form entry with key "' + key + '" and value "' + val, $exception.AJAX);
                            formData.append(key, JSON.stringify(val));
                        }
                    }
                    else {
                        formData.append(key, val);
                    }
                }
                return formData;
            };
            HttpRequest.prototype.__submitFramedFormData = function () {
                var _this = this;
                var options = this.__options, data = options.data, url = options.url, $document = this.$Document, $body = $document.body, Promise = acquire(__Promise), form = $document.createElement('form'), iframe = $document.createElement('iframe'), iframeName = uniqueId('iframe_target'), keys = Object.keys(data), key;
                iframe.name = form.target = iframeName;
                iframe.src = 'javascript:false;';
                form.enctype = form.encoding = 'multipart/form-data';
                form.action = url;
                form.method = 'POST';
                form.style.display = 'none';
                while (keys.length > 0) {
                    key = keys.pop();
                    form.insertBefore(this.__createInput(key, data[key]), null);
                }
                return new Promise(function (resolve, reject) {
                    _this.xhr.abort = function () {
                        iframe.onload = null;
                        $body.removeChild(form);
                        $body.removeChild(iframe);
                        reject();
                    };
                    iframe.onload = function () {
                        var content = iframe.contentDocument.body.innerHTML;
                        $body.removeChild(form);
                        $body.removeChild(iframe);
                        resolve({
                            response: content,
                            status: 200,
                            getAllResponseHeaders: function () { return ''; }
                        });
                        _this.xhr = iframe.onload = null;
                    };
                    $body.insertBefore(form, null);
                    $body.insertBefore(iframe, null);
                    form.submit();
                });
            };
            HttpRequest.prototype.__createInput = function (key, val) {
                var $document = this.$Document, $exception, input = $document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                if (isNull(val)) {
                    input.value = '';
                }
                else if (isObject(val)) {
                    if (isFunction(val.slice) && !(isUndefined(val.name) || isUndefined(val.path))) {
                        var fileList = $document.querySelectorAll('input[type="file"][name="' + key + '"]'), length = fileList.length;
                        if (length === 0) {
                            $exception = acquire(__ExceptionStatic);
                            $exception.warn('Could not find input[type="file"] with [name="' + key + '"]. Stringifying data instead.', $exception.AJAX);
                            input.value = JSON.stringify(val);
                        }
                        else if (length === 1) {
                            input = fileList[0];
                            var clone = input.cloneNode(true);
                            input.parentNode.insertBefore(clone, input);
                        }
                        else {
                            var fileInput, path = val.path;
                            while (length-- > 0) {
                                fileInput = fileList[length];
                                if (fileInput.value === path) {
                                    input = fileInput;
                                    var inputClone = input.cloneNode(true);
                                    input.parentNode.insertBefore(inputClone, input);
                                    break;
                                }
                            }
                            if (length === -1) {
                                $exception = acquire(__ExceptionStatic);
                                $exception.warn('Could not find input[type="file"] with [name="' + key + '"] and [value="' + val.path + '"]. Stringifying data instead.', $exception.AJAX);
                                input.value = JSON.stringify(val);
                            }
                        }
                    }
                    else {
                        $exception = acquire(__ExceptionStatic);
                        $exception.warn('Invalid form entry with key "' + key + '" and value "' + val, $exception.AJAX);
                        input.value = JSON.stringify(val);
                    }
                }
                else {
                    input.value = val;
                }
                return input;
            };
            return HttpRequest;
        })();
        async.HttpRequest = HttpRequest;
        var AjaxError = (function () {
            function AjaxError(response) {
                this.name = 'AjaxError';
                Error.apply(this);
                this.response = this.message = response.response;
                this.status = response.status;
                this.getAllResponseHeaders = response.getAllResponseHeaders;
                this.xhr = response.xhr;
            }
            AjaxError.prototype.toString = function () {
                var response = this.response, responseText = response;
                if (isObject(response) && !response.hasOwnProperty('toString')) {
                    responseText = JSON.stringify(response);
                }
                return 'Request failed with status: ' + this.status + ' and response: ' + responseText;
            };
            return AjaxError;
        })();
        AjaxError.prototype = Error.prototype;
        var AjaxPromise = (function (_super) {
            __extends(AjaxPromise, _super);
            function AjaxPromise(resolveFunction, promise) {
                _super.call(this, resolveFunction);
                this.$Window = acquire(__Window);
                if (!isNull(promise)) {
                    this.__http = promise.__http;
                }
            }
            AjaxPromise.prototype.initialize = function (http) {
                if (isObject(http) && isNull(this.__http)) {
                    this.__http = http;
                }
            };
            AjaxPromise.prototype.cancel = function () {
                var http = this.__http, xhr = http.xhr, jsonpCallback = http.jsonpCallback;
                if (isFunction(http.clearTimeout)) {
                    http.clearTimeout();
                }
                if (!isNull(xhr)) {
                    xhr.onreadystatechange = null;
                    xhr.abort();
                    http.xhr = null;
                }
                else if (!isNull(jsonpCallback)) {
                    this.$Window[jsonpCallback] = noop;
                }
                this.__subscribers = [];
            };
            AjaxPromise.prototype.then = function (onFulfilled, onRejected) {
                return _super.prototype.then.call(this, onFulfilled, onRejected);
            };
            AjaxPromise.prototype.catch = function (onRejected) {
                return _super.prototype.catch.call(this, onRejected);
            };
            return AjaxPromise;
        })(Promise);
        async.AjaxPromise = AjaxPromise;
        var Http = (function () {
            function Http() {
                this.responseType = {
                    DEFAULT: '',
                    ARRAYBUFFER: 'arraybuffer',
                    BLOB: 'blob',
                    DOCUMENT: 'document',
                    JSON: 'json',
                    TEXT: 'text'
                };
                this.contentType = {
                    ENCODED_FORM: 'application/x-www-form-urlencoded;charset=utf-8',
                    JSON: 'application/json;charset=utf-8',
                    MULTIPART_FORM: 'multipart/form-data',
                    OCTET_STREAM: 'application/octet-stream;charset=utf-8',
                    XML: 'application/xml;charset=utf-8',
                    PLAIN_TEXT: 'text/plain',
                    HTML: 'text/html'
                };
            }
            Http.prototype.ajax = function (options) {
                return new HttpRequest(options).execute();
            };
            Http.prototype.jsonp = function (options) {
                return new HttpRequest(options).executeJsonp();
            };
            Http.prototype.json = function (options) {
                return new HttpRequest(extend({}, options, { responseType: 'json' })).execute();
            };
            Http.config = {
                url: null,
                method: 'GET',
                responseType: '',
                transforms: [],
                headers: {},
                withCredentials: false,
                timeout: null,
                jsonpIdentifier: 'callback',
                contentType: 'application/json;charset=utf-8'
            };
            return Http;
        })();
        async.Http = Http;
        function IHttp() {
            return new Http();
        }
        async.IHttp = IHttp;
        register.injectable(__Http, IHttp);
        function IHttpConfig() {
            return Http.config;
        }
        async.IHttpConfig = IHttpConfig;
        register.injectable(__HttpConfig, IHttpConfig);
    })(async = _plat.async || (_plat.async = {}));
    var storage;
    (function (_storage) {
        var caches = {};
        var internalCaches = {};
        var Cache = (function () {
            function Cache(id, options) {
                this.__id = id;
                this.__options = options;
                this.__size = 0;
                if (isNull(options)) {
                    this.__options = {
                        timeout: 0
                    };
                }
                internalCaches[id] = {};
            }
            Cache.create = function (id, options) {
                var cache = caches[id];
                if (isNull(cache)) {
                    cache = caches[id] = new Cache(id, options);
                }
                return cache;
            };
            Cache.fetch = function (id) {
                return caches[id];
            };
            Cache.clear = function () {
                var keys = Object.keys(caches), length = keys.length;
                for (var i = 0; i < length; ++i) {
                    caches[keys[i]].clear();
                }
                caches = {};
            };
            Cache.prototype.info = function () {
                return {
                    id: this.__id,
                    size: this.__size,
                    options: this.__options
                };
            };
            Cache.prototype.put = function (key, value) {
                var val = internalCaches[this.__id][key];
                internalCaches[this.__id][key] = value;
                if (isUndefined(val)) {
                    this.__size++;
                }
                var timeout = this.__options.timeout;
                if (isNumber(timeout) && timeout > 0) {
                    defer(this.remove, timeout, [key], this);
                }
                return value;
            };
            Cache.prototype.read = function (key) {
                return internalCaches[this.__id][key];
            };
            Cache.prototype.remove = function (key) {
                deleteProperty(internalCaches[this.__id], key);
                this.__size--;
            };
            Cache.prototype.clear = function () {
                internalCaches[this.__id] = {};
                this.__size = 0;
            };
            Cache.prototype.dispose = function () {
                this.clear();
                deleteProperty(caches, this.__id);
            };
            return Cache;
        })();
        _storage.Cache = Cache;
        function ICacheFactory() {
            return Cache;
        }
        _storage.ICacheFactory = ICacheFactory;
        register.injectable(__CacheFactory, ICacheFactory, null, __FACTORY);
        var managerCache = Cache.create('__managerCache');
        function IManagerCache() {
            return managerCache;
        }
        _storage.IManagerCache = IManagerCache;
        register.injectable(__ManagerCache, IManagerCache);
        var TemplateCache = (function (_super) {
            __extends(TemplateCache, _super);
            function TemplateCache() {
                _super.call(this, '__templateCache');
                this.$Promise = acquire(__Promise);
            }
            TemplateCache.prototype.put = function (key, value) {
                var Promise = this.$Promise;
                _super.prototype.put.call(this, key, Promise.resolve(value));
                if (isDocumentFragment(value)) {
                    value = value.cloneNode(true);
                }
                else if (isNode(value)) {
                    var fragment = document.createDocumentFragment();
                    fragment.appendChild(value.cloneNode(true));
                    value = fragment;
                }
                return Promise.resolve(value);
            };
            TemplateCache.prototype.read = function (key) {
                var _this = this;
                var promise = _super.prototype.read.call(this, key);
                if (isNull(promise)) {
                    return this.$Promise.reject(null);
                }
                return promise.then(function (node) {
                    return _this.put(key, node);
                }, function (error) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.warn('Error retrieving template from promise.', $exception.TEMPLATE);
                    return null;
                });
            };
            return TemplateCache;
        })(Cache);
        _storage.TemplateCache = TemplateCache;
        function ITemplateCache() {
            return new TemplateCache();
        }
        _storage.ITemplateCache = ITemplateCache;
        register.injectable(__TemplateCache, ITemplateCache);
        var BaseStorage = (function () {
            function BaseStorage(storage) {
                var _this = this;
                this._storage = storage;
                forEach(function (value, key) {
                    _this[key] = value;
                }, storage);
            }
            Object.defineProperty(BaseStorage.prototype, "length", {
                get: function () {
                    return this._storage.length;
                },
                enumerable: true,
                configurable: true
            });
            BaseStorage.prototype.clear = function () {
                this._storage.clear();
            };
            BaseStorage.prototype.getItem = function (key) {
                return this._storage.getItem(key);
            };
            BaseStorage.prototype.key = function (index) {
                return this._storage.key(index);
            };
            BaseStorage.prototype.removeItem = function (key) {
                this._storage.removeItem(key);
            };
            BaseStorage.prototype.setItem = function (key, data) {
                this._storage.setItem(key, data);
                this[key] = this.getItem(key);
            };
            return BaseStorage;
        })();
        _storage.BaseStorage = BaseStorage;
        var LocalStorage = (function (_super) {
            __extends(LocalStorage, _super);
            function LocalStorage() {
                _super.call(this, plat.acquire(__Window).localStorage);
            }
            return LocalStorage;
        })(BaseStorage);
        _storage.LocalStorage = LocalStorage;
        function ILocalStorage() {
            return new LocalStorage();
        }
        _storage.ILocalStorage = ILocalStorage;
        register.injectable(__LocalStorage, ILocalStorage);
        var SessionStorage = (function (_super) {
            __extends(SessionStorage, _super);
            function SessionStorage() {
                _super.call(this, plat.acquire(__Window).sessionStorage);
            }
            return SessionStorage;
        })(BaseStorage);
        _storage.SessionStorage = SessionStorage;
        function ISessionStorage() {
            return new SessionStorage();
        }
        _storage.ISessionStorage = ISessionStorage;
        register.injectable(__SessionStorage, ISessionStorage);
    })(storage = _plat.storage || (_plat.storage = {}));
    var OPERATORS = {
        'u+': {
            precedence: 4,
            associativity: 'rtl',
            fn: function (context, aliases, a) { return +a(context, aliases); }
        },
        '+': {
            precedence: 6,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) + b(context, aliases); }
        },
        'u-': {
            precedence: 4,
            associativity: 'rtl',
            fn: function (context, aliases, a) { return -a(context, aliases); }
        },
        '-': {
            precedence: 6,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) - b(context, aliases); }
        },
        '*': {
            precedence: 5,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) * b(context, aliases); }
        },
        '/': {
            precedence: 5,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) / b(context, aliases); }
        },
        '%': {
            precedence: 5,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) % b(context, aliases); }
        },
        '?': {
            precedence: 15,
            associativity: 'rtl',
            fn: function () { return undefined; }
        },
        ':': {
            precedence: 15,
            associativity: 'rtl',
            fn: function () { return undefined; }
        },
        '>': {
            precedence: 8,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) > b(context, aliases); }
        },
        '<': {
            precedence: 8,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) < b(context, aliases); }
        },
        '!': {
            precedence: 4,
            associativity: 'rtl',
            fn: function (context, aliases, a) { return !a(context, aliases); }
        },
        '~': {
            precedence: 4,
            associativity: 'rtl',
            fn: function (context, aliases, a) { return ~a(context, aliases); }
        },
        '&': {
            precedence: 10,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) & b(context, aliases); }
        },
        '|': {
            precedence: 12,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) | b(context, aliases); }
        },
        '>>': {
            precedence: 7,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) >> b(context, aliases); }
        },
        '<<': {
            precedence: 7,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) << b(context, aliases); }
        },
        '>>>': {
            precedence: 7,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) >>> b(context, aliases); }
        },
        '&&': {
            precedence: 13,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) && b(context, aliases); }
        },
        '||': {
            precedence: 14,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) || b(context, aliases); }
        },
        '==': {
            precedence: 9,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) == b(context, aliases); }
        },
        '===': {
            precedence: 9,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) === b(context, aliases); }
        },
        '!=': {
            precedence: 9,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) != b(context, aliases); }
        },
        '!==': {
            precedence: 9,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) !== b(context, aliases); }
        },
        '>=': {
            precedence: 8,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) >= b(context, aliases); }
        },
        '<=': {
            precedence: 8,
            associativity: 'ltr',
            fn: function (context, aliases, a, b) { return a(context, aliases) <= b(context, aliases); }
        },
        '=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '++': {
            precedence: 3,
            associativity: '',
            fn: function (context, aliases, a) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '--': {
            precedence: 3,
            associativity: '',
            fn: function (context, aliases, a) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '+=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '-=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '*=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '/=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        },
        '%=': {
            precedence: 17,
            associativity: 'rtl',
            fn: function (context, aliases, a, b) {
                var $exception = plat.acquire(__ExceptionStatic);
                $exception.fatal('Assignment operators are not supported', $exception.PARSE);
            }
        }
    };
    var ACCESSORS = {
        '()': { precedence: 2, associativity: null, fn: null },
        '[]': { precedence: 2, associativity: null, fn: null },
        '.': { precedence: 2, associativity: null, fn: null },
        '{}': { precedence: 1, associativity: null, fn: null }
    };
    var DELIMITERS = {
        '{': { precedence: 1, associativity: null, fn: null },
        '}': { precedence: 1, associativity: null, fn: null },
        '[': { precedence: 2, associativity: null, fn: null },
        ']': { precedence: 2, associativity: null, fn: null },
        '(': { precedence: 2, associativity: null, fn: null },
        ')': { precedence: 2, associativity: null, fn: null },
        '.': { precedence: 2, associativity: null, fn: null },
        ',': { precedence: 18, associativity: null, fn: null },
        '\'': { precedence: 0, associativity: null, fn: null },
        '"': { precedence: 0, associativity: null, fn: null }
    };
    var KEYWORDS = {
        false: false,
        true: true,
        null: null,
        undefined: 'undefined'
    };
    function isDelimiter(key) {
        return !isNull(DELIMITERS[key]);
    }
    function isAccessor(key) {
        return !isNull(ACCESSORS[key]);
    }
    function isOperator(key) {
        return !isNull(OPERATORS[key]);
    }
    function isKeyword(key) {
        return !isUndefined(KEYWORDS[key]);
    }
    var observable;
    (function (observable) {
        var arrayMethods = ['push', 'pop', 'reverse', 'shift', 'sort', 'splice', 'unshift'];
        var ContextManager = (function () {
            function ContextManager() {
                this.$Compat = acquire(__Compat);
                this.__identifiers = {};
                this.__identifierHash = {};
                this.__lengthListeners = {};
                this.__contextObjects = {};
                this.__isArrayFunction = false;
            }
            ContextManager.getManager = function (control) {
                var contextManager, managers = ContextManager.__managers, uid = control.uid, manager = managers[uid];
                if (!isNull(manager)) {
                    contextManager = manager;
                    return contextManager;
                }
                contextManager = managers[uid] = new ContextManager();
                contextManager.context = control;
                return contextManager;
            };
            ContextManager.dispose = function (control, persist) {
                if (isNull(control)) {
                    return;
                }
                var uid = control.uid, controls = ContextManager.__controls, identifiers = controls[uid] || {}, managers = ContextManager.__managers, manager = managers[uid];
                if (!isNull(manager)) {
                    manager.dispose();
                    deleteProperty(managers, uid);
                }
                var keys = Object.keys(identifiers), listeners;
                while (keys.length > 0) {
                    listeners = identifiers[keys.shift()];
                    while (listeners.length > 0) {
                        listeners.shift()();
                    }
                }
                deleteProperty(controls, uid);
                if (!isNull(control.context)) {
                    ContextManager.defineProperty(control, __CONTEXT, persist === true ? _clone(control.context, true) : null, true, true, true);
                }
            };
            ContextManager.removeArrayListeners = function (absoluteIdentifier, uid) {
                var listeners = ContextManager.postArrayListeners[absoluteIdentifier];
                if (!isNull(listeners)) {
                    deleteProperty(listeners, uid);
                }
            };
            ContextManager.getContext = function (rootContext, split) {
                if (isNull(rootContext)) {
                    return rootContext;
                }
                split = split.slice(0);
                while (split.length > 0) {
                    rootContext = rootContext[split.shift()];
                    if (isNull(rootContext)) {
                        return rootContext;
                    }
                }
                return rootContext;
            };
            ContextManager.defineProperty = function (obj, key, value, enumerable, configurable, writable) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: enumerable === true,
                    configurable: configurable === true,
                    writable: writable === true
                });
            };
            ContextManager.defineGetter = function (obj, key, value, enumerable, configurable) {
                Object.defineProperty(obj, key, {
                    get: function () { return value; },
                    enumerable: enumerable === true,
                    configurable: configurable === true
                });
            };
            ContextManager.pushRemoveListener = function (identifier, uid, listener) {
                var controls = ContextManager.__controls, control = controls[uid], listeners;
                if (isNull(control)) {
                    control = controls[uid] = {};
                }
                listeners = control[identifier];
                if (isNull(listeners)) {
                    listeners = control[identifier] = [];
                }
                listeners.push(listener);
            };
            ContextManager.spliceRemoveListener = function (identifier, uid, listener) {
                var controls = ContextManager.__controls, control = controls[uid], listeners;
                if (isNull(control)) {
                    return;
                }
                listeners = control[identifier];
                if (isNull(listeners)) {
                    return;
                }
                var index = listeners.indexOf(listener);
                if (index === -1) {
                    return;
                }
                listeners.splice(index, 1);
                if (listeners.length === 0) {
                    deleteProperty(control, identifier);
                }
            };
            ContextManager.removeIdentifier = function (uids, identifier) {
                var length = uids.length, controls = ContextManager.__controls, identifiers;
                for (var i = 0; i < length; ++i) {
                    identifiers = controls[uids[i]];
                    if (isNull(identifiers)) {
                        continue;
                    }
                    deleteProperty(identifiers, identifier);
                }
            };
            ContextManager.createContext = function (control, identifier) {
                var context = control.context;
                if (!isObject(context)) {
                    if (isNull(context)) {
                        context = control.context = {};
                    }
                    else {
                        var Exception = acquire(__ExceptionStatic);
                        Exception.warn('A child control is trying to create a child context that has ' + 'a parent control with a primitive type context', Exception.BIND);
                        return;
                    }
                }
                var split = identifier.split('.'), property, temp;
                while (split.length > 0) {
                    property = split.shift();
                    temp = context[property];
                    if (isNull(temp)) {
                        if (isNumber(Number(split[0]))) {
                            temp = context[property] = [];
                        }
                        else {
                            temp = context[property] = {};
                        }
                    }
                    context = temp;
                }
                return context;
            };
            ContextManager.prototype.getContext = function (split) {
                var join = split.join('.'), context = this.__contextObjects[join];
                if (isNull(context)) {
                    context = this.__contextObjects[join] = this._observeImmediateContext(split, join);
                }
                return context;
            };
            ContextManager.prototype.observe = function (absoluteIdentifier, observableListener) {
                var _this = this;
                if (isEmpty(absoluteIdentifier)) {
                    return noop;
                }
                var split = absoluteIdentifier.split('.'), key = split.pop(), hasIdentifier = this._hasIdentifier(absoluteIdentifier), hasObservableListener = !isNull(observableListener), join, context;
                if (split.length > 0) {
                    join = split.join('.');
                    context = this.__contextObjects[join];
                    if (isNull(context)) {
                        context = this.__contextObjects[join] = this._observeImmediateContext(split, join);
                    }
                }
                else {
                    join = key;
                    context = this.context;
                }
                if (!isObject(context)) {
                    if (hasObservableListener) {
                        if (key === 'length') {
                            this.__lengthListeners[absoluteIdentifier] = observableListener;
                            ContextManager.pushRemoveListener(absoluteIdentifier, observableListener.uid, function () {
                                deleteProperty(_this.__lengthListeners, absoluteIdentifier);
                            });
                        }
                        return this._addObservableListener(absoluteIdentifier, observableListener);
                    }
                    return noop;
                }
                this.__observedIdentifier = null;
                this.__contextObjects[absoluteIdentifier] = context[key];
                var observedIdentifier = this.__observedIdentifier, isObserved = !isNull(observedIdentifier), removeCallback = noop;
                if (isObserved) {
                    hasIdentifier = true;
                }
                if (hasObservableListener) {
                    var removeObservedCallback = noop, removeAbsoluteCallback = this._addObservableListener(absoluteIdentifier, observableListener);
                    if (isObserved && absoluteIdentifier !== observedIdentifier) {
                        removeObservedCallback = this._addObservableListener(observedIdentifier, observableListener);
                    }
                    removeCallback = function () {
                        removeAbsoluteCallback();
                        removeObservedCallback();
                    };
                }
                if (!hasIdentifier) {
                    if (key === 'length' && isArray(context)) {
                        var property = split.pop(), parentContext = this.getContext(split);
                        this.__observedIdentifier = null;
                        access(parentContext, property);
                        if (isString(this.__observedIdentifier)) {
                            join = this.__observedIdentifier;
                        }
                        var removeObservableListener = removeCallback, removeListener = noop, removeArrayObserve = noop;
                        if (hasObservableListener) {
                            var uid = observableListener.uid;
                            removeListener = this.observeArray(uid, null, noop, join, context, null), removeArrayObserve = this.observe(join, {
                                uid: uid,
                                listener: function (newValue, oldValue) {
                                    removeListener();
                                    removeListener = _this.observeArray(uid, null, noop, join, newValue, oldValue);
                                }
                            });
                        }
                        removeCallback = function () {
                            removeObservableListener();
                            removeArrayObserve();
                            removeListener();
                        };
                    }
                    else {
                        this._define(absoluteIdentifier, context, key);
                    }
                }
                return removeCallback;
            };
            ContextManager.prototype.observeArray = function (uid, preListener, postListener, absoluteIdentifier, array, oldArray) {
                var length = arrayMethods.length, method, i, $compat = this.$Compat, proto = $compat.proto, setProto = $compat.setProto;
                if (isArray(oldArray)) {
                    this._restoreArray(oldArray);
                }
                if (isNull(array)) {
                    return noop;
                }
                var split = absoluteIdentifier.split('.'), property = split.pop(), context = this.getContext(split);
                this.__observedIdentifier = null;
                access(context, property);
                if (isString(this.__observedIdentifier)) {
                    absoluteIdentifier = this.__observedIdentifier;
                }
                var removeListeners = [];
                if (isFunction(preListener)) {
                    removeListeners.push(this._pushArrayListener(uid, absoluteIdentifier, preListener, ContextManager.preArrayListeners));
                }
                if (isFunction(postListener)) {
                    removeListeners.push(this._pushArrayListener(uid, absoluteIdentifier, postListener, ContextManager.postArrayListeners));
                }
                this._overwriteArray(absoluteIdentifier, array);
                return function () {
                    while (removeListeners.length > 0) {
                        removeListeners.pop()();
                    }
                };
            };
            ContextManager.prototype.dispose = function () {
                this.context = null;
                this.__identifiers = {};
                this.__identifierHash = {};
                this.__contextObjects = {};
            };
            ContextManager.prototype._pushArrayListener = function (uid, absoluteIdentifier, listener, arrayListeners) {
                var arrayCallbacks = arrayListeners[absoluteIdentifier];
                if (isNull(arrayCallbacks)) {
                    arrayCallbacks = arrayListeners[absoluteIdentifier] = {};
                }
                var callbacks = arrayCallbacks[uid];
                if (isNull(callbacks)) {
                    callbacks = arrayCallbacks[uid] = [];
                }
                var listenerRemoved = false, removeListener = function () {
                    if (listenerRemoved) {
                        return;
                    }
                    listenerRemoved = true;
                    ContextManager.spliceRemoveListener(absoluteIdentifier, uid, removeListener);
                    var index = callbacks.indexOf(listener);
                    if (index === -1) {
                        return;
                    }
                    callbacks.splice(index, 1);
                    if (callbacks.length === 0) {
                        deleteProperty(arrayCallbacks, uid);
                        if (isEmpty(arrayCallbacks)) {
                            deleteProperty(arrayListeners, absoluteIdentifier);
                        }
                    }
                };
                callbacks.push(listener);
                ContextManager.pushRemoveListener(absoluteIdentifier, uid, removeListener);
                return removeListener;
            };
            ContextManager.prototype._restoreArray = function (array) {
                var $compat = this.$Compat;
                if ($compat.setProto) {
                    Object.setPrototypeOf(array, Object.create(Array.prototype));
                }
                else if ($compat.proto) {
                    array.__proto__ = Object.create(Array.prototype);
                }
                else {
                    var length = arrayMethods.length, method;
                    for (var i = 0; i < length; ++i) {
                        method = arrayMethods[i];
                        array[method] = Array.prototype[method];
                    }
                }
            };
            ContextManager.prototype._overwriteArray = function (absoluteIdentifier, array) {
                var $compat = this.$Compat, length = arrayMethods.length, method, i;
                if ($compat.proto) {
                    var obj = Object.create(Array.prototype);
                    for (i = 0; i < length; ++i) {
                        method = arrayMethods[i];
                        obj[method] = this._overwriteArrayFunction(absoluteIdentifier, method);
                    }
                    if ($compat.setProto) {
                        Object.setPrototypeOf(array, obj);
                    }
                    else {
                        array.__proto__ = obj;
                    }
                    return;
                }
                for (i = 0; i < length; ++i) {
                    method = arrayMethods[i];
                    ContextManager.defineProperty(array, method, this._overwriteArrayFunction(absoluteIdentifier, method), false, true, true);
                }
            };
            ContextManager.prototype._getImmediateContext = function (split) {
                var context = this.context;
                while (split.length > 0) {
                    context = context[split.shift()];
                    if (isNull(context)) {
                        break;
                    }
                }
                return context;
            };
            ContextManager.prototype._observeImmediateContext = function (split, identifier) {
                if (isNull(this.__identifiers[identifier])) {
                    this.observe(identifier, null);
                }
                return this._getImmediateContext(split);
            };
            ContextManager.prototype._getValues = function (split, newRootContext, oldRootContext) {
                var property, doNew = true, doOld = true;
                while (split.length > 1) {
                    property = split.shift();
                    if (doNew) {
                        newRootContext = newRootContext[property];
                        if (isNull(newRootContext)) {
                            doNew = false;
                        }
                    }
                    if (doOld) {
                        oldRootContext = oldRootContext[property];
                        if (isNull(oldRootContext)) {
                            doOld = false;
                        }
                    }
                    if (!(doNew || doOld)) {
                        return null;
                    }
                }
                property = split[0];
                var newValue, oldValue;
                if (!isNull(newRootContext)) {
                    newValue = newRootContext[property];
                }
                if (!isNull(oldRootContext)) {
                    oldValue = oldRootContext[property];
                }
                return {
                    newValue: newValue,
                    oldValue: oldValue
                };
            };
            ContextManager.prototype._notifyChildProperties = function (identifier, newValue, oldValue) {
                var _this = this;
                var mappings = this.__identifierHash[identifier];
                if (isNull(mappings)) {
                    return;
                }
                var length = mappings.length, binding, property, parentProperty, split, values = {}, value, key, start = identifier.length + 1, newParent, oldParent, newChild, oldChild;
                if (length === 0) {
                    deleteProperty(this.__identifierHash, identifier);
                    return;
                }
                for (var i = 0; i < length; ++i) {
                    binding = mappings[i];
                    property = binding.slice(start);
                    split = property.split('.');
                    key = split.pop();
                    parentProperty = split.join('.');
                    if (isEmpty(parentProperty)) {
                        newParent = newValue;
                        oldParent = oldValue;
                        newChild = isNull(newParent) ? undefined : newParent[key];
                        oldChild = isNull(oldParent) ? undefined : oldParent[key];
                        if (key === 'length' && !isArray(oldParent) && isArray(newParent)) {
                            var lengthListener = this.__lengthListeners[binding];
                            if (!isNull(lengthListener)) {
                                var uid = lengthListener.uid, arraySplit = identifier.split('.'), arrayKey = arraySplit.pop(), arrayParent = this.getContext(arraySplit), join;
                                this.__observedIdentifier = null;
                                access(arrayParent, arrayKey);
                                join = isString(this.__observedIdentifier) ? this.__observedIdentifier : arraySplit.join('.');
                                var removeListener = this.observeArray(uid, null, noop, join, newParent, null);
                                this.observe(join, {
                                    uid: uid,
                                    listener: function (nValue, oValue) {
                                        removeListener();
                                        removeListener = _this.observeArray(uid, null, noop, join, nValue, oValue);
                                    }
                                });
                                deleteProperty(this.__lengthListeners, binding);
                            }
                        }
                    }
                    else {
                        value = values[parentProperty];
                        if (isNull(value)) {
                            value = values[parentProperty] = this._getValues(split, newValue, oldValue);
                            if (isNull(value)) {
                                this._execute(binding, null, null);
                                continue;
                            }
                        }
                        newParent = value.newValue;
                        oldParent = value.oldValue;
                        newChild = isNull(newParent) ? undefined : newParent[key];
                        oldChild = isNull(oldParent) ? undefined : oldParent[key];
                    }
                    values[property] = {
                        newValue: newChild,
                        oldValue: oldChild
                    };
                    if (isObject(newParent) && (!isArray(newParent) || newParent.length > key)) {
                        this._define(binding, newParent, key);
                    }
                    this._execute(binding, newChild, oldChild);
                }
                values = null;
            };
            ContextManager.prototype._addObservableListener = function (absoluteIdentifier, observableListener) {
                var _this = this;
                var split = absoluteIdentifier.split('.'), property = split.pop(), isLength = property === 'length', context;
                if (isLength) {
                    property = split.pop();
                    context = this.getContext(split);
                }
                if (isObject(context)) {
                    this.__observedIdentifier = null;
                    access(context, property);
                    if (isString(this.__observedIdentifier)) {
                        absoluteIdentifier = this.__observedIdentifier + (isLength ? '.length' : '');
                    }
                }
                this.__add(absoluteIdentifier, observableListener);
                var uid = observableListener.uid, remove = function () {
                    ContextManager.spliceRemoveListener(absoluteIdentifier, uid, remove);
                    _this._removeCallback(absoluteIdentifier, observableListener);
                };
                ContextManager.pushRemoveListener(absoluteIdentifier, uid, remove);
                return remove;
            };
            ContextManager.prototype._define = function (identifier, immediateContext, key) {
                if (isObject(immediateContext[key])) {
                    this.__defineObject(identifier, immediateContext, key);
                }
                else {
                    this.__definePrimitive(identifier, immediateContext, key);
                }
            };
            ContextManager.prototype._overwriteArrayFunction = function (absoluteIdentifier, method) {
                var preCallbackObjects = ContextManager.preArrayListeners[absoluteIdentifier] || {}, postCallbackObjects = ContextManager.postArrayListeners[absoluteIdentifier] || {}, _this = this;
                return function observedArrayFn() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    var oldArray = this.slice(0), returnValue, isShift = method.indexOf('shift') !== -1, keys = Object.keys(preCallbackObjects), length = keys.length, callbacks, jLength, i, j;
                    for (i = 0; i < length; ++i) {
                        callbacks = preCallbackObjects[keys[i]];
                        jLength = callbacks.length;
                        for (j = 0; j < jLength; ++j) {
                            callbacks[j]({
                                method: method,
                                arguments: args
                            });
                        }
                    }
                    if (isShift) {
                        _this.__isArrayFunction = true;
                        returnValue = Array.prototype[method].apply(this, args);
                        _this.__isArrayFunction = false;
                    }
                    else {
                        returnValue = Array.prototype[method].apply(this, args);
                    }
                    keys = Object.keys(postCallbackObjects);
                    length = keys.length;
                    for (i = 0; i < length; ++i) {
                        callbacks = postCallbackObjects[keys[i]];
                        jLength = callbacks.length;
                        for (j = 0; j < jLength; ++j) {
                            callbacks[j]({
                                method: method,
                                returnValue: returnValue,
                                oldArray: oldArray,
                                newArray: this,
                                arguments: args
                            });
                        }
                    }
                    if (isShift) {
                        _this._notifyChildProperties(absoluteIdentifier, this, oldArray);
                    }
                    else if (oldArray.length !== this.length) {
                        _this._execute(absoluteIdentifier + '.length', this.length, oldArray.length);
                    }
                    return returnValue;
                };
            };
            ContextManager.prototype._removeCallback = function (identifier, listener) {
                var callbacks = this.__identifiers[identifier];
                if (isNull(callbacks)) {
                    return;
                }
                var index = callbacks.indexOf(listener);
                if (index === -1) {
                    return;
                }
                callbacks.splice(index, 1);
                if (isEmpty(this.__identifiers[identifier])) {
                    deleteProperty(this.__identifierHash, identifier);
                    deleteProperty(this.__contextObjects, identifier);
                }
            };
            ContextManager.prototype._hasIdentifier = function (identifier) {
                return !isEmpty(this.__identifiers[identifier]);
            };
            ContextManager.prototype._execute = function (identifier, value, oldValue) {
                var observableListeners = this.__identifiers[identifier];
                if (isUndefined(value)) {
                    deleteProperty(this.__contextObjects, identifier);
                }
                else {
                    this.__contextObjects[identifier] = value;
                }
                if (isNull(observableListeners)) {
                    return;
                }
                var length = observableListeners.length, newLength = length, i = 0;
                while (i < length) {
                    observableListeners[i].listener(value, oldValue);
                    newLength = observableListeners.length;
                    i += newLength - length + 1;
                    length = newLength;
                }
            };
            ContextManager.prototype.__defineObject = function (identifier, immediateContext, key) {
                var _this = this;
                var value = immediateContext[key];
                Object.defineProperty(immediateContext, key, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        _this.__observedIdentifier = identifier;
                        return value;
                    },
                    set: function (newValue) {
                        if (value === newValue) {
                            return;
                        }
                        var oldValue = value;
                        value = newValue;
                        if (_this.__isArrayFunction) {
                            return;
                        }
                        var childPropertiesExist = (_this.__identifierHash[identifier] || []).length > 0;
                        _this._execute(identifier, value, oldValue);
                        if (childPropertiesExist) {
                            _this._notifyChildProperties(identifier, value, oldValue);
                        }
                        if (!childPropertiesExist && isEmpty(_this.__identifiers[identifier])) {
                            ContextManager.defineProperty(immediateContext, key, value, true, true, true);
                        }
                        else if (!isObject(value)) {
                            _this.__definePrimitive(identifier, immediateContext, key);
                        }
                    }
                });
            };
            ContextManager.prototype.__definePrimitive = function (identifier, immediateContext, key) {
                var _this = this;
                var value = immediateContext[key], isDefined = !isNull(value);
                if (isArray(immediateContext) && key === 'length') {
                    return;
                }
                Object.defineProperty(immediateContext, key, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        _this.__observedIdentifier = identifier;
                        return value;
                    },
                    set: function (newValue) {
                        if (value === newValue) {
                            return;
                        }
                        var oldValue = value;
                        value = newValue;
                        if (_this.__isArrayFunction && isArray(immediateContext)) {
                            return;
                        }
                        var childPropertiesExist = (_this.__identifierHash[identifier] || []).length > 0;
                        _this._execute(identifier, newValue, oldValue);
                        if (!childPropertiesExist && isEmpty(_this.__identifiers[identifier])) {
                            ContextManager.defineProperty(immediateContext, key, value, true, true, true);
                        }
                        else if (isObject(value)) {
                            _this.__defineObject(identifier, immediateContext, key);
                            if (childPropertiesExist) {
                                _this._notifyChildProperties(identifier, newValue, oldValue);
                            }
                        }
                        else if (!isDefined) {
                            _this.__definePrimitive(identifier, immediateContext, key);
                            isDefined = true;
                        }
                    }
                });
            };
            ContextManager.prototype.__add = function (identifier, observableListener) {
                var callbacks = this.__identifiers[identifier];
                if (isNull(callbacks)) {
                    callbacks = this.__identifiers[identifier] = [];
                }
                callbacks.push(observableListener);
                this.__addHashValues(identifier);
            };
            ContextManager.prototype.__addHashValues = function (identifier) {
                var split = identifier.split('.'), ident = split.shift(), hashValue = this.__identifierHash[ident];
                if (isNull(hashValue)) {
                    hashValue = this.__identifierHash[ident] = [];
                    if (split.length === 0) {
                        return;
                    }
                }
                if (ident !== identifier && hashValue.indexOf(identifier) === -1) {
                    hashValue.push(identifier);
                }
                while (split.length > 0) {
                    ident += '.' + split.shift();
                    hashValue = this.__identifierHash[ident];
                    if (isNull(hashValue)) {
                        hashValue = this.__identifierHash[ident] = [];
                        if (ident !== identifier) {
                            hashValue.push(identifier);
                        }
                    }
                    else if (ident !== identifier && hashValue.indexOf(identifier) === -1) {
                        hashValue.push(identifier);
                    }
                }
            };
            ContextManager.preArrayListeners = {};
            ContextManager.postArrayListeners = {};
            ContextManager.__managers = {};
            ContextManager.__controls = {};
            return ContextManager;
        })();
        observable.ContextManager = ContextManager;
        function IContextManagerStatic() {
            return ContextManager;
        }
        observable.IContextManagerStatic = IContextManagerStatic;
        register.injectable(__ContextManagerStatic, IContextManagerStatic, null, __STATIC);
    })(observable = _plat.observable || (_plat.observable = {}));
    var events;
    (function (events) {
        var DispatchEvent = (function () {
            function DispatchEvent() {
                this.$EventManagerStatic = acquire(__EventManagerStatic);
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                this.defaultPrevented = false;
                this.stopped = false;
            }
            DispatchEvent.prototype.initialize = function (name, sender, direction) {
                this.name = name;
                this.direction = direction || this.$EventManagerStatic.UP;
                this.sender = sender;
            };
            DispatchEvent.prototype.preventDefault = function () {
                if (!this.defaultPrevented) {
                    this.$ContextManagerStatic.defineGetter(this, 'defaultPrevented', true);
                }
            };
            DispatchEvent.prototype.stopPropagation = function () {
                if (this.direction === this.$EventManagerStatic.UP) {
                    this.stopped = true;
                    this.$EventManagerStatic.propagatingEvents[this.name] = false;
                }
            };
            return DispatchEvent;
        })();
        events.DispatchEvent = DispatchEvent;
        function IDispatchEventInstance() {
            return new DispatchEvent();
        }
        events.IDispatchEventInstance = IDispatchEventInstance;
        register.injectable(__DispatchEventInstance, IDispatchEventInstance, null, __INSTANCE);
        var LifecycleEvent = (function (_super) {
            __extends(LifecycleEvent, _super);
            function LifecycleEvent() {
                _super.apply(this, arguments);
            }
            LifecycleEvent.dispatch = function (name, sender) {
                var event = new LifecycleEvent();
                event.initialize(name, sender);
                EventManager.sendEvent(event);
            };
            LifecycleEvent.prototype.initialize = function (name, sender) {
                _super.prototype.initialize.call(this, name, sender, this.$EventManagerStatic.DIRECT);
            };
            return LifecycleEvent;
        })(DispatchEvent);
        events.LifecycleEvent = LifecycleEvent;
        function ILifecycleEventStatic() {
            return LifecycleEvent;
        }
        events.ILifecycleEventStatic = ILifecycleEventStatic;
        register.injectable(__LifecycleEventStatic, ILifecycleEventStatic, null, __STATIC);
        var EventManager = (function () {
            function EventManager() {
            }
            EventManager.initialize = function () {
                if (EventManager.__initialized) {
                    return;
                }
                EventManager.__initialized = true;
                var lifecycleListeners = EventManager.__lifecycleEventListeners, length = lifecycleListeners.length, $compat = EventManager.$Compat, $document = EventManager.$Document, $dom = EventManager.$Dom, dispatch = LifecycleEvent.dispatch, listener;
                while (lifecycleListeners.length > 0) {
                    listener = lifecycleListeners.pop();
                    $document.removeEventListener(listener.name, listener.value, false);
                }
                if ($compat.cordova) {
                    var eventNames = [__resume, __online, __offline], event;
                    length = eventNames.length;
                    for (var i = 0; i < eventNames.length; ++i) {
                        event = eventNames[i];
                        lifecycleListeners.push({
                            name: event,
                            value: (function (ev) { return function () {
                                dispatch(ev, EventManager);
                            }; })(event)
                        });
                        $dom.addEventListener($document, event, lifecycleListeners[i].value, false);
                    }
                    lifecycleListeners.push({
                        name: __pause,
                        value: function () {
                            dispatch(__suspend, EventManager);
                        }
                    });
                    $dom.addEventListener($document, __pause, lifecycleListeners[lifecycleListeners.length - 1].value, false);
                    lifecycleListeners.push({
                        name: __deviceReady,
                        value: function () {
                            dispatch(__ready, EventManager);
                        }
                    });
                    $dom.addEventListener($document, __deviceReady, lifecycleListeners[lifecycleListeners.length - 1].value, false);
                    lifecycleListeners.push({
                        name: __backButton,
                        value: function () {
                            dispatch(__backButton, EventManager);
                        }
                    });
                    $dom.addEventListener($document, __backButton, lifecycleListeners[lifecycleListeners.length - 1].value, false);
                }
                else if ($compat.amd) {
                    return;
                }
                else {
                    $dom.addEventListener(EventManager.$Window, 'load', function () {
                        dispatch(__ready, EventManager);
                    });
                }
            };
            EventManager.dispose = function (uid) {
                deleteProperty(EventManager.__eventsListeners, uid);
            };
            EventManager.on = function (uid, eventName, listener, context) {
                var eventsListener = EventManager.__eventsListeners[uid];
                if (isNull(eventsListener)) {
                    eventsListener = EventManager.__eventsListeners[uid] = {
                        listeners: {},
                        context: context
                    };
                }
                var eventListeners = eventsListener.listeners[eventName];
                if (!isArray(eventListeners)) {
                    eventListeners = eventsListener.listeners[eventName] = [];
                }
                eventListeners.push(listener);
                return function () {
                    var index = eventListeners.indexOf(listener);
                    if (index === -1) {
                        return;
                    }
                    eventListeners.splice(index, 1);
                };
            };
            EventManager.dispatch = function (name, sender, direction, args) {
                var $dispatchEvent = acquire(__DispatchEventInstance);
                $dispatchEvent.initialize(name, sender, direction);
                EventManager.sendEvent($dispatchEvent, args);
            };
            EventManager.hasDirection = function (direction) {
                return (direction === EventManager.UP || direction === EventManager.DOWN || direction === EventManager.DIRECT);
            };
            EventManager.sendEvent = function (event, args) {
                var name = event.name, direction = event.direction;
                args = args || [];
                EventManager.propagatingEvents[name] = true;
                args = args || [];
                switch (direction) {
                    case EventManager.UP:
                        EventManager._dispatchUp(event, args);
                        break;
                    case EventManager.DOWN:
                        EventManager._dispatchDown(event, args);
                        break;
                    case EventManager.DIRECT:
                        EventManager._dispatchDirect(event, args);
                        break;
                }
                deleteProperty(EventManager.propagatingEvents, name);
            };
            EventManager._dispatchUp = function (event, args) {
                var name = event.name, parent = event.sender;
                while (!isNull(parent) && EventManager.propagatingEvents[name]) {
                    if (isNull(parent.uid)) {
                        continue;
                    }
                    EventManager.__executeEvent(parent.uid, event, args);
                    parent = parent.parent;
                }
            };
            EventManager._dispatchDown = function (event, args) {
                var controls = [], control, name = event.name;
                controls.push(event.sender);
                while (controls.length && EventManager.propagatingEvents[name]) {
                    control = controls.pop();
                    if (isNull(control.uid)) {
                        continue;
                    }
                    EventManager.__executeEvent(control.uid, event, args);
                    if (isNull(control.controls)) {
                        continue;
                    }
                    controls = controls.concat(control.controls);
                }
            };
            EventManager._dispatchDirect = function (event, args) {
                var uids = Object.keys(EventManager.__eventsListeners), length = uids.length, name = event.name, eventsListener;
                for (var i = 0; i < length; ++i) {
                    if (!EventManager.propagatingEvents[name]) {
                        break;
                    }
                    eventsListener = EventManager.__eventsListeners[uids[i]];
                    if (isNull(eventsListener) || isNull(eventsListener.listeners[name])) {
                        continue;
                    }
                    EventManager.__callListeners(eventsListener.context, event, eventsListener.listeners[name], args);
                }
            };
            EventManager.__executeEvent = function (uid, ev, args) {
                var eventsListener = EventManager.__eventsListeners[uid];
                if (isNull(eventsListener)) {
                    return;
                }
                var context = eventsListener.context, listeners = eventsListener.listeners[ev.name];
                if (isNull(listeners)) {
                    return;
                }
                EventManager.__callListeners(context, ev, listeners, args);
            };
            EventManager.__callListeners = function (context, ev, listeners, args) {
                var name = ev.name, length = listeners.length, index = -1;
                args = [ev].concat(args);
                while (++index < length && EventManager.propagatingEvents[name]) {
                    try {
                        listeners[index].apply(context, args);
                    }
                    catch (e) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.warn(e, $exception.EVENT);
                    }
                }
            };
            EventManager.UP = 'up';
            EventManager.DOWN = 'down';
            EventManager.DIRECT = 'direct';
            EventManager.propagatingEvents = {};
            EventManager.__eventsListeners = {};
            EventManager.__lifecycleEventListeners = [];
            EventManager.__initialized = false;
            return EventManager;
        })();
        events.EventManager = EventManager;
        function IEventManagerStatic($Compat, $Document, $Window, $Dom) {
            EventManager.$Compat = $Compat;
            EventManager.$Document = $Document;
            EventManager.$Window = $Window;
            EventManager.$Dom = $Dom;
            return EventManager;
        }
        events.IEventManagerStatic = IEventManagerStatic;
        register.injectable(__EventManagerStatic, IEventManagerStatic, [
            __Compat,
            __Document,
            __Window,
            __Dom
        ], __STATIC);
        var NavigationEvent = (function (_super) {
            __extends(NavigationEvent, _super);
            function NavigationEvent() {
                _super.apply(this, arguments);
            }
            NavigationEvent.dispatch = function (name, sender, eventOptions) {
                var event = new NavigationEvent();
                event.initialize(name, sender, null, eventOptions);
                NavigationEvent.$EventManagerStatic.sendEvent(event, []);
                return event;
            };
            NavigationEvent.prototype.initialize = function (name, sender, direction, eventOptions) {
                _super.prototype.initialize.call(this, name, sender, this.$EventManagerStatic.DIRECT);
                this.parameter = eventOptions.parameter;
                this.options = eventOptions.options;
                this.target = eventOptions.target;
                this.type = eventOptions.type;
            };
            return NavigationEvent;
        })(DispatchEvent);
        events.NavigationEvent = NavigationEvent;
        function INavigationEventStatic($EventManagerStatic) {
            NavigationEvent.$EventManagerStatic = $EventManagerStatic;
            return NavigationEvent;
        }
        events.INavigationEventStatic = INavigationEventStatic;
        register.injectable(__NavigationEventStatic, INavigationEventStatic, [__EventManagerStatic], __STATIC);
        var ErrorEvent = (function (_super) {
            __extends(ErrorEvent, _super);
            function ErrorEvent() {
                _super.apply(this, arguments);
            }
            ErrorEvent.dispatch = function (name, sender, error) {
                var event = new ErrorEvent();
                event.initialize(name, sender, null, error);
                ErrorEvent.$EventManagerStatic.sendEvent(event);
            };
            ErrorEvent.prototype.initialize = function (name, sender, direction, error) {
                _super.prototype.initialize.call(this, name, sender, this.$EventManagerStatic.DIRECT);
                this.error = error;
            };
            return ErrorEvent;
        })(DispatchEvent);
        events.ErrorEvent = ErrorEvent;
        function IErrorEventStatic($EventManagerStatic) {
            ErrorEvent.$EventManagerStatic = $EventManagerStatic;
            return ErrorEvent;
        }
        events.IErrorEventStatic = IErrorEventStatic;
        register.injectable(__ErrorEventStatic, IErrorEventStatic, [__EventManagerStatic], __STATIC);
    })(events = _plat.events || (_plat.events = {}));
    var Control = (function () {
        function Control() {
            this.priority = 0;
            this.dom = acquire(__Dom);
            var ContextManager = Control.$ContextManagerStatic || acquire(__ContextManagerStatic);
            ContextManager.defineGetter(this, 'uid', uniqueId(__Plat));
        }
        Control.getRootControl = function (control) {
            if (isNull(control)) {
                return control;
            }
            else if (!isNull(control.root)) {
                return control.root;
            }
            while (!(isNull(control.parent) || control.hasOwnContext)) {
                if (!isNull(control.root)) {
                    return control.root;
                }
                control = control.parent;
            }
            return control;
        };
        Control.load = function (control) {
            if (isNull(control)) {
                return;
            }
            var ctrl = control;
            if (isString(ctrl.absoluteContextPath) && isFunction(ctrl.contextChanged)) {
                var contextManager = Control.$ContextManagerStatic.getManager(ctrl.root);
                contextManager.observe(ctrl.absoluteContextPath, {
                    uid: control.uid,
                    listener: function (newValue, oldValue) {
                        ui.TemplateControl.contextChanged(control, newValue, oldValue);
                    }
                });
                if (isFunction(ctrl.zCC__plat)) {
                    ctrl.zCC__plat();
                    deleteProperty(ctrl, 'zCC__plat');
                }
            }
            if (isFunction(control.loaded)) {
                return Control.$Promise.resolve(control.loaded());
            }
            return Control.$Promise.resolve(null);
        };
        Control.dispose = function (control) {
            var ctrl = control;
            if (isNull(ctrl)) {
                return;
            }
            else if (!isUndefined(ctrl.templateControl)) {
                AttributeControl.dispose(ctrl);
                return;
            }
            else if (ctrl.hasOwnContext) {
                ui.BaseViewControl.dispose(ctrl);
                return;
            }
            else if (ctrl.controls) {
                ui.TemplateControl.dispose(ctrl);
                return;
            }
            if (isFunction(control.dispose)) {
                control.dispose();
            }
            Control.removeEventListeners(control);
            Control.$ContextManagerStatic.dispose(control);
            control.element = null;
            Control.removeParent(control);
        };
        Control.removeParent = function (control) {
            if (isNull(control)) {
                return;
            }
            var parent = control.parent;
            if (isNull(parent)) {
                return;
            }
            var controls = parent.controls || [], index = controls.indexOf(control);
            if (index !== -1) {
                controls.splice(index, 1);
            }
            control.parent = null;
        };
        Control.removeEventListeners = function (control) {
            if (isNull(control)) {
                return;
            }
            var removeListeners = Control.__eventListeners, uid = control.uid;
            var listeners = removeListeners[uid];
            if (isArray(listeners)) {
                var index = listeners.length;
                while (index-- > 0) {
                    listeners[index]();
                }
                deleteProperty(removeListeners, uid);
            }
        };
        Control.getInstance = function () {
            return new Control();
        };
        Control.__addRemoveListener = function (uid, listener) {
            var removeListeners = Control.__eventListeners;
            if (isArray(removeListeners[uid])) {
                removeListeners[uid].push(listener);
                return;
            }
            removeListeners[uid] = [listener];
        };
        Control.__spliceRemoveListener = function (uid, listener) {
            var removeListeners = Control.__eventListeners, controlListeners = removeListeners[uid];
            if (isArray(controlListeners)) {
                var index = controlListeners.indexOf(listener);
                if (index === -1) {
                    return;
                }
                controlListeners.splice(index, 1);
            }
        };
        Control.__getControls = function (control, key, value) {
            var controls = [], root = Control.getRootControl(control), child;
            if (!isNull(root) && root[key] === value) {
                controls.push(root);
            }
            var children = root.controls;
            if (isNull(children)) {
                return controls;
            }
            var queue = [].concat(children);
            while (queue.length > 0) {
                child = queue.shift();
                if (child[key] === value) {
                    controls.push(child);
                }
                if (isNull(child.controls)) {
                    continue;
                }
                queue = queue.concat(child.controls);
            }
            return controls;
        };
        Control.prototype.initialize = function () {
        };
        Control.prototype.loaded = function () {
        };
        Control.prototype.getControlsByName = function (name) {
            return Control.__getControls(this, 'name', name);
        };
        Control.prototype.getControlsByType = function (type) {
            if (isString(type)) {
                return Control.__getControls(this, 'type', type);
            }
            return Control.__getControls(this, 'constructor', type);
        };
        Control.prototype.addEventListener = function (element, type, listener, useCapture) {
            if (!isFunction(listener)) {
                var Exception = acquire(__ExceptionStatic);
                Exception.warn('"Control.addEventListener" must take a function as the third argument.', Exception.EVENT);
                return noop;
            }
            listener = listener.bind(this);
            var removeListener = this.dom.addEventListener(element, type, listener, useCapture), uid = this.uid;
            Control.__addRemoveListener(uid, removeListener);
            return function () {
                removeListener();
                Control.__spliceRemoveListener(uid, removeListener);
            };
        };
        Control.prototype.observe = function (context, property, listener) {
            if (isNull(context) || !context.hasOwnProperty(property)) {
                return noop;
            }
            var control = isFunction(this.getAbsoluteIdentifier) ? this : this.parent;
            if (isNull(control) || !isFunction(control.getAbsoluteIdentifier)) {
                return noop;
            }
            var absoluteIdentifier = control.getAbsoluteIdentifier(context);
            if (isNull(absoluteIdentifier)) {
                return noop;
            }
            var $ContextManagerStatic = Control.$ContextManagerStatic || acquire(__ContextManagerStatic), contextManager = $ContextManagerStatic.getManager(Control.getRootControl(this));
            return contextManager.observe(absoluteIdentifier + '.' + property, {
                listener: listener.bind(this),
                uid: this.uid
            });
        };
        Control.prototype.observeArray = function (context, property, preListener, postListener) {
            if (isNull(context) || !context.hasOwnProperty(property)) {
                return noop;
            }
            var array = context[property];
            if (!isArray(array)) {
                return noop;
            }
            var control = isFunction(this.getAbsoluteIdentifier) ? this : this.parent;
            if (isNull(control) || !isFunction(control.getAbsoluteIdentifier)) {
                return noop;
            }
            var preIsFunction = isFunction(preListener), postIsFunction = isFunction(postListener);
            if (!(preIsFunction || postIsFunction)) {
                return noop;
            }
            var absoluteIdentifier = control.getAbsoluteIdentifier(context), ContextManager = Control.$ContextManagerStatic || acquire(__ContextManagerStatic);
            if (isNull(absoluteIdentifier)) {
                if (property === __CONTEXT) {
                    absoluteIdentifier = control.absoluteContextPath;
                }
                else {
                    return noop;
                }
            }
            else {
                absoluteIdentifier += '.' + property;
            }
            var contextManager = ContextManager.getManager(Control.getRootControl(this)), preCallback = preIsFunction ? preListener.bind(this) : null, postCallback = postIsFunction ? postListener.bind(this) : null, uid = this.uid, removeListener = contextManager.observeArray(uid, preCallback, postCallback, absoluteIdentifier, array, null), removeCallback = contextManager.observe(absoluteIdentifier, {
                listener: function (newValue, oldValue) {
                    removeListener();
                    removeListener = contextManager.observeArray(uid, preCallback, postCallback, absoluteIdentifier, newValue, oldValue);
                },
                uid: uid
            });
            return function () {
                removeListener();
                removeCallback();
            };
        };
        Control.prototype.observeExpression = function (expression, listener) {
            if (isEmpty(expression)) {
                return noop;
            }
            if (isString(expression)) {
                expression = Control.$Parser.parse(expression);
            }
            else if (!isFunction(expression.evaluate)) {
                return noop;
            }
            var control = !isNull(this.resources) ? this : this.parent;
            if (isNull(control) || !isString(control.absoluteContextPath)) {
                return noop;
            }
            listener = listener.bind(this);
            var aliases = expression.aliases, alias, length = aliases.length, resources = {}, resourceObj, ContextManager = Control.$ContextManagerStatic || acquire(__ContextManagerStatic), getManager = ContextManager.getManager, TemplateControl = ui.TemplateControl, findResource = TemplateControl.findResource, evaluateExpression = TemplateControl.evaluateExpression, i;
            for (i = 0; i < length; ++i) {
                alias = aliases[i];
                resourceObj = findResource(control, alias);
                if (!isNull(resourceObj) && resourceObj.resource.type === __OBSERVABLE_RESOURCE) {
                    resources[alias] = getManager(resourceObj.control);
                }
            }
            var identifiers = expression.identifiers, contextManager = getManager(Control.getRootControl(control)), identifier, split = [], topIdentifier, absolutePath = control.absoluteContextPath + '.', managers = {};
            length = identifiers.length;
            for (i = 0; i < length; ++i) {
                identifier = identifiers[i];
                split = identifier.split('.');
                topIdentifier = split[0];
                if (topIdentifier === 'this') {
                    identifier = identifier.slice(5);
                }
                else if (identifier[0] === '@') {
                    alias = topIdentifier.slice(1);
                    identifier = identifier.replace(topIdentifier, 'resources.' + alias + '.value');
                    if (!isNull(resources[alias])) {
                        managers[identifier] = resources[alias];
                    }
                    continue;
                }
                managers[absolutePath + identifier] = contextManager;
            }
            identifiers = Object.keys(managers);
            length = identifiers.length;
            var oldValue = evaluateExpression(expression, control), listeners = [], uid = this.uid;
            for (i = 0; i < length; ++i) {
                identifier = identifiers[i];
                listeners.push(managers[identifier].observe(identifier, {
                    uid: uid,
                    listener: function () {
                        var value = evaluateExpression(expression, control);
                        listener(value, oldValue);
                        oldValue = value;
                    }
                }));
            }
            return function () {
                var length = listeners.length;
                for (var i = 0; i < length; ++i) {
                    listeners[i]();
                }
            };
        };
        Control.prototype.evaluateExpression = function (expression, aliases) {
            return ui.TemplateControl.evaluateExpression(expression, this.parent, aliases);
        };
        Control.prototype.findProperty = function (property) {
            var control = this, expression = Control.$Parser.parse(property), value;
            while (!isNull(control)) {
                value = expression.evaluate(control);
                if (!isNull(value)) {
                    return {
                        control: control,
                        value: value
                    };
                }
                control = control.parent;
            }
        };
        Control.prototype.dispatchEvent = function (name, direction) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var manager = Control.$EventManagerStatic || acquire(__EventManagerStatic);
            if (!manager.hasDirection(direction)) {
                if (!isUndefined(direction)) {
                    args.unshift(direction);
                }
                direction = manager.UP;
            }
            var sender = this;
            if (!isNull(sender.templateControl)) {
                sender = sender.templateControl;
            }
            manager.dispatch(name, sender, direction, args);
        };
        Control.prototype.on = function (name, listener) {
            var $EventManagerStatic = Control.$EventManagerStatic || acquire(__EventManagerStatic);
            return $EventManagerStatic.on(this.uid, name, listener, this);
        };
        Control.prototype.dispose = function () {
        };
        Control.__eventListeners = {};
        return Control;
    })();
    _plat.Control = Control;
    function IControlFactory($Parser, $ContextManagerStatic, $EventManagerStatic, $Promise) {
        Control.$Parser = $Parser;
        Control.$ContextManagerStatic = $ContextManagerStatic;
        Control.$EventManagerStatic = $EventManagerStatic;
        Control.$Promise = $Promise;
        return Control;
    }
    _plat.IControlFactory = IControlFactory;
    register.injectable(__ControlFactory, IControlFactory, [
        __Parser,
        __ContextManagerStatic,
        __EventManagerStatic,
        __Promise
    ], __FACTORY);
    var AttributeControl = (function (_super) {
        __extends(AttributeControl, _super);
        function AttributeControl() {
            _super.apply(this, arguments);
            this.templateControl = null;
        }
        AttributeControl.dispose = function (control) {
            deleteProperty(control, 'templateControl');
            Control.dispose(control);
        };
        AttributeControl.getInstance = function () {
            return new AttributeControl();
        };
        return AttributeControl;
    })(Control);
    _plat.AttributeControl = AttributeControl;
    function IAttributeControlFactory() {
        return AttributeControl;
    }
    _plat.IAttributeControlFactory = IAttributeControlFactory;
    register.injectable(__AttributeControlFactory, IAttributeControlFactory, null, __FACTORY);
    var ui;
    (function (ui) {
        var TemplateControl = (function (_super) {
            __extends(TemplateControl, _super);
            function TemplateControl() {
                _super.apply(this, arguments);
                this.priority = 100;
                this.context = null;
                this.absoluteContextPath = null;
                this.hasOwnContext = false;
                this.replaceWith = 'any';
            }
            TemplateControl.evaluateExpression = function (expression, control, aliases) {
                if (isEmpty(expression)) {
                    return expression;
                }
                if (isString(expression)) {
                    expression = TemplateControl.$Parser.parse(expression);
                }
                else if (!isFunction(expression.evaluate)) {
                    return expression;
                }
                if (isNull(control)) {
                    return expression.evaluate(null, aliases);
                }
                if (expression.aliases.length > 0) {
                    aliases = TemplateControl.getResources(control, expression.aliases, aliases);
                }
                return expression.evaluate(control.context, aliases);
            };
            TemplateControl.getResources = function (control, aliases, resources) {
                if (isNull(control)) {
                    return {};
                }
                var length = aliases.length, alias, resource, resourceObj, cache = TemplateControl.__resourceCache[control.uid];
                if (isNull(cache)) {
                    cache = TemplateControl.__resourceCache[control.uid] = {};
                }
                resources = resources || {};
                for (var i = 0; i < length; ++i) {
                    alias = aliases[i];
                    if (alias[0] === '@') {
                        alias = alias.slice(1);
                    }
                    if (!isNull(resources[alias])) {
                        continue;
                    }
                    else if (!isNull(cache[alias])) {
                        var resourceControl = cache[alias].control, controlResources = resourceControl.resources;
                        if (isNull(controlResources)) {
                            resourceObj = TemplateControl.findResource(control, alias);
                        }
                        else {
                            resourceObj = {
                                control: resourceControl,
                                resource: controlResources[alias]
                            };
                        }
                    }
                    else {
                        resourceObj = TemplateControl.findResource(control, alias);
                    }
                    if (isNull(resourceObj)) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.warn('Attempting to use a resource that is not defined.', $exception.CONTEXT);
                        continue;
                    }
                    cache[alias] = resourceObj;
                    resource = resourceObj.resource;
                    resources[alias] = isNull(resource) ? resource : resource.value;
                }
                return resources;
            };
            TemplateControl.findResource = function (control, alias) {
                var resource;
                if (isNull(control) || isNull(control.resources) || !isString(alias) || isEmpty(alias)) {
                    return null;
                }
                if (alias[0] === '@') {
                    alias = alias.slice(1);
                }
                if (alias === __ROOT_CONTEXT_RESOURCE) {
                    control = Control.getRootControl(control);
                    return {
                        resource: control.resources[alias],
                        control: control
                    };
                }
                else if (alias === __CONTEXT_RESOURCE || alias === __CONTROL_RESOURCE) {
                    return {
                        resource: (control.resources || {})[alias],
                        control: control
                    };
                }
                while (!isNull(control)) {
                    resource = (control.resources || {})[alias];
                    if (!isNull(resource)) {
                        return {
                            resource: resource,
                            control: control
                        };
                    }
                    control = control.parent;
                }
            };
            TemplateControl.dispose = function (control) {
                if (isNull(control)) {
                    return;
                }
                var uid = control.uid, childControls = control.controls, controls = (childControls && childControls.slice(0)), ContextManager = Control.$ContextManagerStatic, define = ContextManager.defineProperty;
                if (!isNull(controls)) {
                    var length = controls.length - 1;
                    for (var i = length; i >= 0; --i) {
                        Control.dispose(controls[i]);
                    }
                }
                if (isFunction(control.dispose)) {
                    control.dispose();
                }
                Control.removeEventListeners(control);
                TemplateControl.removeElement(control);
                TemplateControl.$ResourcesFactory.dispose(control);
                TemplateControl.$BindableTemplatesFactory.dispose(control);
                deleteProperty(TemplateControl.__resourceCache, control.uid);
                ContextManager.dispose(control);
                events.EventManager.dispose(control.uid);
                TemplateControl.$ManagerCache.remove(uid);
                Control.removeParent(control);
                define(control, __CONTEXT, null, true, true, true);
                define(control, __RESOURCES, null, true, true, true);
                control.attributes = null;
                control.bindableTemplates = null;
                control.controls = [];
                control.root = null;
                control.innerTemplate = null;
            };
            TemplateControl.loadControl = function (control) {
                var children = control.controls, length = children.length, child;
                for (var i = 0; i < length; ++i) {
                    child = children[i];
                    if (!isNull(child.controls)) {
                        TemplateControl.loadControl(child);
                    }
                    else {
                        child.loaded();
                    }
                }
                control.loaded();
            };
            TemplateControl.contextChanged = function (control, newValue, oldValue) {
                control.context = newValue;
                TemplateControl.setContextResources(control);
                if (isFunction(control.contextChanged)) {
                    control.contextChanged(newValue, oldValue);
                }
            };
            TemplateControl.setContextResources = function (control) {
                var value = control.context;
                if (isNull(control.resources)) {
                    control.resources = TemplateControl.$ResourcesFactory.getInstance();
                    control.resources.initialize(control);
                }
                if (control.hasOwnContext) {
                    if (isNull(control.resources.rootContext)) {
                        control.resources.add({
                            root: {
                                type: __OBSERVABLE_RESOURCE,
                                value: value
                            }
                        });
                    }
                    else {
                        control.resources.rootContext.value = value;
                    }
                }
                if (isNull(control.resources.context)) {
                    control.resources.add({
                        context: {
                            type: __OBSERVABLE_RESOURCE,
                            value: value
                        }
                    });
                    return;
                }
                control.resources.context.value = value;
            };
            TemplateControl.removeElement = function (control) {
                if (isNull(control)) {
                    return;
                }
                var dom = control.dom, element = control.element, parentNode;
                if (control.replaceWith === null || control.replaceWith === '' || isDocumentFragment(element)) {
                    dom.removeAll(control.startNode, control.endNode);
                    control.elementNodes = control.startNode = control.endNode = null;
                    return;
                }
                else if (isNull(element)) {
                    return;
                }
                parentNode = element.parentNode;
                if (!isNull(parentNode)) {
                    parentNode.removeChild(element);
                }
                control.element = null;
            };
            TemplateControl.setAbsoluteContextPath = function (control, path) {
                Control.$ContextManagerStatic.defineGetter(control, 'absoluteContextPath', path, false, true);
            };
            TemplateControl.determineTemplate = function (control, templateUrl) {
                var template, templateCache = TemplateControl.$TemplateCache, dom = control.dom, Promise = TemplateControl.$Promise;
                if (!isNull(templateUrl)) {
                }
                else if (!isNull(control.templateUrl)) {
                    templateUrl = control.templateUrl;
                }
                else if (!isNull(control.templateString)) {
                    var type = control.type;
                    return templateCache.read(type).catch(function (template) {
                        if (isNull(template)) {
                            template = dom.serializeHtml(control.templateString);
                        }
                        return templateCache.put(type, template);
                    });
                }
                else {
                    return Promise.reject(null);
                }
                return dom.getTemplate(templateUrl);
            };
            TemplateControl.detach = function (control) {
                if (isNull(control) || isNull(control.controls)) {
                    return;
                }
                var controls = control.controls.slice(0), length = controls.length;
                for (var i = 0; i < length; ++i) {
                    Control.dispose(controls[i]);
                }
                Control.removeEventListeners(control);
                TemplateControl.removeElement(control);
                TemplateControl.$ResourcesFactory.dispose(control, true);
                deleteProperty(TemplateControl.__resourceCache, control.uid);
                Control.$ContextManagerStatic.dispose(control, true);
                events.EventManager.dispose(control.uid);
                TemplateControl.$ManagerCache.remove(control.uid);
                Control.removeParent(control);
                control.controls = [];
                control.attributes = null;
            };
            TemplateControl.getInstance = function () {
                return new TemplateControl();
            };
            TemplateControl.prototype.contextChanged = function (newValue, oldValue) {
            };
            TemplateControl.prototype.setTemplate = function () {
            };
            TemplateControl.prototype.getIdentifier = function (context) {
                var queue = [], dataContext = this.context, found = false, obj = {
                    context: dataContext,
                    identifier: ''
                }, length, keys, key, newObj;
                if (dataContext === context) {
                    found = true;
                }
                else {
                    queue.push(obj);
                }
                while (queue.length > 0) {
                    obj = queue.pop();
                    if (!isObject(obj.context)) {
                        continue;
                    }
                    keys = Object.keys(obj.context);
                    length = keys.length;
                    for (var i = 0; i < length; ++i) {
                        key = keys[i];
                        newObj = obj.context[key];
                        if (newObj === context) {
                            return (obj.identifier !== '') ? (obj.identifier + '.' + key) : key;
                        }
                        queue.push({
                            context: newObj,
                            identifier: (obj.identifier !== '') ? (obj.identifier + '.' + key) : key
                        });
                    }
                }
                if (!found) {
                    return;
                }
                return obj.identifier;
            };
            TemplateControl.prototype.getAbsoluteIdentifier = function (context) {
                if (context === this.context) {
                    return this.absoluteContextPath;
                }
                var localIdentifier = this.getIdentifier(context);
                if (isNull(localIdentifier)) {
                    return localIdentifier;
                }
                return this.absoluteContextPath + '.' + localIdentifier;
            };
            TemplateControl.prototype.getResources = function (aliases, resources) {
                return TemplateControl.getResources(this, aliases, resources);
            };
            TemplateControl.prototype.findResource = function (alias) {
                return TemplateControl.findResource(this, alias);
            };
            TemplateControl.prototype.evaluateExpression = function (expression, context) {
                return TemplateControl.evaluateExpression(expression, this, context);
            };
            TemplateControl.__resourceCache = {};
            return TemplateControl;
        })(Control);
        ui.TemplateControl = TemplateControl;
        function ITemplateControlFactory($ResourcesFactory, $BindableTemplatesFactory, $ManagerCache, $TemplateCache, $Parser, $Http, $Promise) {
            TemplateControl.$ResourcesFactory = $ResourcesFactory;
            TemplateControl.$BindableTemplatesFactory = $BindableTemplatesFactory;
            TemplateControl.$ManagerCache = $ManagerCache;
            TemplateControl.$TemplateCache = $TemplateCache;
            TemplateControl.$Parser = $Parser;
            TemplateControl.$Http = $Http;
            TemplateControl.$Promise = $Promise;
            return TemplateControl;
        }
        ui.ITemplateControlFactory = ITemplateControlFactory;
        register.injectable(__TemplateControlFactory, ITemplateControlFactory, [
            __ResourcesFactory,
            __BindableTemplatesFactory,
            __ManagerCache,
            __TemplateCache,
            __Parser,
            __Http,
            __Promise
        ], __FACTORY);
        var BindablePropertyControl = (function (_super) {
            __extends(BindablePropertyControl, _super);
            function BindablePropertyControl() {
                _super.apply(this, arguments);
                this._listeners = [];
            }
            BindablePropertyControl.prototype.observeProperty = function (listener) {
                var listeners = this._listeners;
                listeners.push(listener);
                return function () {
                    var index = listeners.indexOf(listener);
                    if (index === -1) {
                        return;
                    }
                    listeners.splice(index, 1);
                };
            };
            BindablePropertyControl.prototype.setProperty = function (newValue, oldValue, firstTime) {
            };
            BindablePropertyControl.prototype.propertyChanged = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                var listeners = this._listeners, length = listeners.length;
                for (var i = 0; i < length; ++i) {
                    listeners[i](newValue, oldValue);
                }
            };
            BindablePropertyControl.prototype.dispose = function () {
                this._listeners = [];
            };
            return BindablePropertyControl;
        })(TemplateControl);
        ui.BindablePropertyControl = BindablePropertyControl;
        var BaseViewControl = (function (_super) {
            __extends(BaseViewControl, _super);
            function BaseViewControl() {
                _super.apply(this, arguments);
                this.hasOwnContext = true;
            }
            BaseViewControl.detach = function (control) {
                TemplateControl.detach(control);
            };
            BaseViewControl.dispose = function (control) {
                TemplateControl.dispose(control);
            };
            BaseViewControl.getInstance = function () {
                return new BaseViewControl();
            };
            BaseViewControl.prototype.navigatedTo = function (parameter) {
            };
            BaseViewControl.prototype.navigatingFrom = function () {
            };
            return BaseViewControl;
        })(TemplateControl);
        ui.BaseViewControl = BaseViewControl;
        function IBaseViewControlFactory() {
            return BaseViewControl;
        }
        ui.IBaseViewControlFactory = IBaseViewControlFactory;
        register.injectable(__BaseViewControlFactory, IBaseViewControlFactory, null, __FACTORY);
        var ViewControl = (function (_super) {
            __extends(ViewControl, _super);
            function ViewControl() {
                _super.call(this);
                var backButtonPressed = this[__backButtonPressed];
                if (isFunction(backButtonPressed)) {
                    this.on(__backButtonPressed, backButtonPressed);
                }
            }
            return ViewControl;
        })(BaseViewControl);
        ui.ViewControl = ViewControl;
        var WebViewControl = (function (_super) {
            __extends(WebViewControl, _super);
            function WebViewControl() {
                var _this = this;
                _super.call(this);
                this.title = '';
                this.description = '';
                this.on(__navigated, function () {
                    if (isEmpty(_this.title)) {
                        _this.title = '';
                    }
                    if (isEmpty(_this.description)) {
                        _this.description = '';
                    }
                    WebViewControl.setTitle(_this.title);
                    WebViewControl.setDescription(_this.description);
                });
            }
            WebViewControl.setTitle = function (title) {
                var element = WebViewControl.titleElement;
                if (!isNode(element)) {
                    var $document = plat.acquire(plat.Document);
                    element = WebViewControl.titleElement = $document.head.querySelector('title');
                    if (!isNode(element)) {
                        element = WebViewControl.titleElement = $document.head.appendChild($document.createElement('title'));
                    }
                }
                element.textContent = title.replace(/\//g, ' ');
            };
            WebViewControl.setDescription = function (description) {
                var element = WebViewControl.descriptionElement;
                if (!isNode(element)) {
                    var $document = plat.acquire(plat.Document);
                    element = WebViewControl.descriptionElement = $document.head.querySelector('meta[name="description"]');
                    if (!isNode(element)) {
                        element = WebViewControl.descriptionElement = $document.head.appendChild($document.createElement('meta'));
                        element.setAttribute('name', 'description');
                    }
                }
                element.setAttribute('content', description.replace(/\//g, ' '));
            };
            WebViewControl.prototype.setTitle = function (title) {
                this.title = title;
                WebViewControl.setTitle(title);
            };
            WebViewControl.prototype.setDescription = function (description) {
                this.description = description;
                WebViewControl.setDescription(description);
            };
            return WebViewControl;
        })(BaseViewControl);
        ui.WebViewControl = WebViewControl;
        var Dom = (function () {
            function Dom() {
                this.$DomEvents = acquire(__DomEvents);
            }
            Dom.prototype.addEventListener = function (element, type, listener, useCapture) {
                return this.$DomEvents.addEventListener(element, type, listener, useCapture);
            };
            Dom.prototype.appendChildren = function (nodeList, root) {
                return appendChildren(nodeList, root);
            };
            Dom.prototype.clearNode = function (node) {
                return clearNode(node);
            };
            Dom.prototype.clearNodeBlock = function (nodeList, parent) {
                return clearNodeBlock(nodeList, parent);
            };
            Dom.prototype.setInnerHtml = function (node, html) {
                return setInnerHtml(node, html);
            };
            Dom.prototype.insertBefore = function (parent, nodes, endNode) {
                return insertBefore(parent, nodes, endNode);
            };
            Dom.prototype.replace = function (node) {
                return replace(node);
            };
            Dom.prototype.replaceWith = function (node, newNode) {
                return replaceWith(node, newNode);
            };
            Dom.prototype.serializeHtml = function (html) {
                return serializeHtml(html);
            };
            Dom.prototype.removeBetween = function (startNode, endNode) {
                return removeBetween(startNode, endNode);
            };
            Dom.prototype.removeAll = function (startNode, endNode) {
                return removeAll(startNode, endNode);
            };
            Dom.prototype.addClass = function (element, className) {
                return addClass(element, className);
            };
            Dom.prototype.removeClass = function (element, className) {
                return removeClass(element, className);
            };
            Dom.prototype.toggleClass = function (element, className) {
                return toggleClass(element, className);
            };
            Dom.prototype.replaceClass = function (element, oldClass, newClass) {
                return replaceClass(element, oldClass, newClass);
            };
            Dom.prototype.hasClass = function (element, className) {
                return hasClass(element, className);
            };
            Dom.prototype.getTemplate = function (templateUrl) {
                return getTemplate(templateUrl);
            };
            return Dom;
        })();
        ui.Dom = Dom;
        function IDom() {
            return new Dom();
        }
        ui.IDom = IDom;
        register.injectable(__Dom, IDom);
        var BindableTemplates = (function () {
            function BindableTemplates() {
                this.$ResourcesFactory = acquire(__ResourcesFactory);
                this.$TemplateControlFactory = acquire(__TemplateControlFactory);
                this.$Promise = acquire(__Promise);
                this.$ManagerCache = acquire(__ManagerCache);
                this.$Document = acquire(__Document);
                this.$ElementManagerFactory = acquire(__ElementManagerFactory);
                this.templates = {};
                this.cache = {};
                this.__compiledControls = [];
            }
            BindableTemplates.create = function (control, original) {
                var bindableTemplates = new BindableTemplates();
                bindableTemplates.control = control;
                if (!isNull(original)) {
                    bindableTemplates.templates = original.templates;
                    bindableTemplates.cache = original.cache;
                }
                return bindableTemplates;
            };
            BindableTemplates.dispose = function (control) {
                if (isNull(control)) {
                    return;
                }
                var instance = control.bindableTemplates;
                if (isNull(instance) || !isFunction(instance.dispose)) {
                    return;
                }
                instance.dispose();
            };
            BindableTemplates.isBoundControl = function (control) {
                if (isNull(control)) {
                    return false;
                }
                var parent = control.parent;
                if (isNull(parent)) {
                    return false;
                }
                return control.type.indexOf(parent.type + __BOUND_PREFIX) === 0;
            };
            BindableTemplates.prototype.bind = function (key, relativeIdentifier, resources) {
                var _this = this;
                var templatePromise = this.templates[key], $exception;
                if (isNull(templatePromise)) {
                    $exception = acquire(__ExceptionStatic);
                    $exception.fatal('Cannot bind template, no template stored with key: ' + key, $exception.TEMPLATE);
                    return;
                }
                if (!(isNull(relativeIdentifier) || isNumber(relativeIdentifier) || isString(relativeIdentifier))) {
                    $exception = acquire(__ExceptionStatic);
                    $exception.warn('Cannot bind template with relativeIdentifier: ' + relativeIdentifier + '. Identifier must be either a string or number', $exception.BIND);
                    return;
                }
                return templatePromise.then(function (result) {
                    return _this._bindTemplate(key, result.cloneNode(true), relativeIdentifier, resources);
                }).then(null, function (error) {
                    postpone(function () {
                        $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.BIND);
                    });
                    return null;
                });
            };
            BindableTemplates.prototype.add = function (key, template) {
                if (isNull(template)) {
                    return;
                }
                if (isDocumentFragment(template)) {
                    this._compile(key, template);
                    return;
                }
                var fragment = this.$Document.createDocumentFragment();
                if (isNode(template)) {
                    fragment.appendChild(template);
                }
                else if (isArrayLike(template)) {
                    appendChildren(template, fragment);
                }
                else {
                    return;
                }
                this._compile(key, fragment);
            };
            BindableTemplates.prototype.dispose = function () {
                var dispose = this.$TemplateControlFactory.dispose, compiledControls = this.__compiledControls, length = compiledControls.length;
                for (var i = 0; i < length; ++i) {
                    dispose(compiledControls[i]);
                }
                this.__compiledControls = [];
                this.control = null;
                this.cache = {};
                this.templates = {};
            };
            BindableTemplates.prototype._bindTemplate = function (key, template, contextId, resources) {
                var _this = this;
                var control = this._createBoundControl(key, template, resources), nodeMap = this._createNodeMap(control, template, contextId), disposed = false, dispose = isFunction(control.dispose) ? control.dispose.bind(control) : noop;
                control.dispose = function () {
                    disposed = true;
                    dispose();
                    control.dispose = dispose;
                };
                return this._bindNodeMap(nodeMap, key).then(function () {
                    var $document = _this.$Document;
                    if (disposed) {
                        return $document.createDocumentFragment();
                    }
                    control.startNode = template.insertBefore($document.createComment(control.type + __START_NODE), template.firstChild);
                    control.endNode = template.insertBefore($document.createComment(control.type + __END_NODE), null);
                    return template;
                }, function (error) {
                    postpone(function () {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.COMPILE);
                    });
                    return null;
                });
            };
            BindableTemplates.prototype._bindNodeMap = function (nodeMap, key) {
                var manager = this.cache[key], child = nodeMap.uiControlNode.control, template = nodeMap.element, $managerCache = this.$ManagerCache;
                this.control.controls.push(child);
                manager.clone(template, $managerCache.read(this.control.uid), nodeMap);
                return $managerCache.read(child.uid).bindAndLoad();
            };
            BindableTemplates.prototype._compile = function (key, template) {
                var control = this._createBoundControl(key + __COMPILED, template), nodeMap = this._createNodeMap(control, template);
                this.__compiledControls.push(control);
                this._compileNodeMap(control, nodeMap, key);
            };
            BindableTemplates.prototype._compileNodeMap = function (control, nodeMap, key) {
                var _this = this;
                var manager = this.$ElementManagerFactory.getInstance(), promises = [];
                manager.isClone = true;
                manager.initialize(nodeMap, null);
                manager.setUiControlTemplate();
                this.cache[key] = manager;
                promises.push(manager.fulfillTemplate());
                this.templates[key] = this.$Promise.all(promises).then(function () {
                    var element = nodeMap.element, startNode, endNode;
                    var clone = nodeMap.element.cloneNode(true);
                    startNode = control.startNode = _this.$Document.createComment(control.type + __START_NODE);
                    endNode = control.endNode = _this.$Document.createComment(control.type + __END_NODE);
                    element.insertBefore(startNode, element.firstChild);
                    element.insertBefore(endNode, null);
                    return clone;
                });
            };
            BindableTemplates.prototype._createNodeMap = function (uiControl, template, childContext) {
                return {
                    element: template,
                    attributes: {},
                    nodes: [],
                    childContext: childContext,
                    uiControlNode: {
                        control: uiControl,
                        nodeName: uiControl.type,
                        expressions: [],
                        injector: null
                    }
                };
            };
            BindableTemplates.prototype._createBoundControl = function (key, template, resources) {
                var $TemplateControlFactory = this.$TemplateControlFactory, control = $TemplateControlFactory.getInstance(), $ResourcesFactory = this.$ResourcesFactory, parent = this.control, compiledManager = this.cache[key], _resources = $ResourcesFactory.getInstance();
                if (isObject(compiledManager)) {
                    var compiledControl = compiledManager.getUiControl();
                    _resources.initialize(control, compiledControl.resources);
                    _resources.add(resources);
                }
                else {
                    _resources.initialize(control, resources);
                }
                control.resources = _resources;
                $ResourcesFactory.addControlResources(control);
                control.parent = parent;
                control.controls = [];
                control.element = template;
                control.type = parent.type + __BOUND_PREFIX + key;
                return control;
            };
            return BindableTemplates;
        })();
        ui.BindableTemplates = BindableTemplates;
        function IBindableTemplatesFactory() {
            return BindableTemplates;
        }
        ui.IBindableTemplatesFactory = IBindableTemplatesFactory;
        register.injectable(__BindableTemplatesFactory, IBindableTemplatesFactory, null, __FACTORY);
        var Attributes = (function () {
            function Attributes() {
                this.__listeners = {};
            }
            Attributes.prototype.initialize = function (control, attributes) {
                this.__control = control;
                var keys = Object.keys(attributes), attributeListeners = this.__listeners, key, length = keys.length;
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    this[key] = attributes[key];
                    attributeListeners[key] = [];
                }
            };
            Attributes.prototype.observe = function (key, listener) {
                var listeners = this.__listeners[camelCase(key)];
                if (isNull(listeners)) {
                    return noop;
                }
                listener = listener.bind(this.__control);
                listeners.push(listener);
                return function () {
                    var index = listeners.indexOf(listener);
                    if (index === -1) {
                        return;
                    }
                    listeners.splice(index, 1);
                };
            };
            Attributes.prototype._attributeChanged = function (key, newValue, oldValue) {
                var listeners = this.__listeners[camelCase(key)], length = listeners.length;
                for (var i = 0; i < length; ++i) {
                    listeners[i](newValue, oldValue);
                }
            };
            return Attributes;
        })();
        ui.Attributes = Attributes;
        function IAttributesInstance() {
            return new Attributes();
        }
        ui.IAttributesInstance = IAttributesInstance;
        register.injectable(__AttributesInstance, IAttributesInstance, null, __INSTANCE);
        var Resources = (function () {
            function Resources() {
                this.__resources = {};
                this.__bound = false;
            }
            Resources.create = function (control, resource) {
                if (isNull(resource)) {
                    return resource;
                }
                var value;
                switch (resource.type.toLowerCase()) {
                    case __INJECTABLE_RESOURCE:
                        var injector = injectableInjectors[resource.value];
                        if (!isNull(injector)) {
                            resource.value = injector.inject();
                        }
                        break;
                    case __OBSERVABLE_RESOURCE:
                        Resources._observeResource(control, resource);
                        break;
                    case __OBJECT_RESOURCE:
                        value = resource.value;
                        if (isString(value)) {
                            resource.value = control.evaluateExpression(value);
                        }
                        break;
                    case __LITERAL_RESOURCE:
                        break;
                    case __FUNCTION_RESOURCE:
                        value = resource.value;
                        if (isString(value)) {
                            value = control[value];
                            if (isFunction(value)) {
                                resource.value = value.bind(control);
                            }
                            else {
                                var $exception = acquire(__ExceptionStatic);
                                $exception.warn('Attempted to create a "function" ' + 'type Resource with a function not found on your control.', $exception.BIND);
                                resource.value = noop;
                            }
                        }
                        break;
                }
                return resource;
            };
            Resources.addControlResources = function (control) {
                control.resources.add({
                    context: {
                        value: control.context,
                        type: __OBSERVABLE_RESOURCE
                    },
                    control: {
                        value: control,
                        type: __FUNCTION_RESOURCE
                    }
                });
                if (control.hasOwnContext) {
                    Resources.__addRoot(control);
                }
            };
            Resources.bindResources = function (resourcesInstance) {
                var resources = resourcesInstance.__resources;
                if (isNull(resources)) {
                    return;
                }
                var control = resourcesInstance.__controlInstance, aliases = Object.keys(resources), controlResources = Resources.__controlResources, length = aliases.length, alias;
                for (var i = 0; i < length; ++i) {
                    alias = aliases[i];
                    if (controlResources.indexOf(alias) !== -1) {
                        continue;
                    }
                    resourcesInstance[alias] = resources[alias] = Resources.create(control, resourcesInstance[alias]);
                }
                resourcesInstance.__bound = true;
            };
            Resources.dispose = function (control, persist) {
                var resources = control.resources;
                if (isNull(resources)) {
                    return;
                }
                var keys = Object.keys(resources.__resources), key, length = keys.length, define = Resources.$ContextManagerStatic.defineProperty, resource;
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    resource = resources[key];
                    if (!isNull(resource) && resource.type === __OBSERVABLE_RESOURCE) {
                        define(resources, key, persist ? _clone(resource, true) : null, true, true, true);
                    }
                }
                Resources._removeListeners(resources.__controlInstance);
            };
            Resources.parseElement = function (element) {
                var children = Array.prototype.slice.call(element.children), child, $regex = Resources.$Regex, whiteSpaceRegex = $regex.whiteSpaceRegex, quotationRegex = $regex.quotationRegex, resources = {}, resource, types = Resources.__resourceTypes, attrs, attr, nodeName, text;
                while (children.length > 0) {
                    child = children.pop();
                    nodeName = child.nodeName.toLowerCase();
                    if (types.indexOf(nodeName) === -1) {
                        continue;
                    }
                    attrs = child.attributes;
                    resource = {};
                    attr = attrs.getNamedItem(__ALIAS);
                    if (isNull(attr)) {
                        continue;
                    }
                    resource.alias = attr.value;
                    text = child.textContent.replace(whiteSpaceRegex, '$1');
                    if (isEmpty(text)) {
                        continue;
                    }
                    resource.value = (nodeName === __INJECTABLE_RESOURCE || nodeName === __LITERAL_RESOURCE) ? text.replace(quotationRegex, '') : text;
                    resource.type = nodeName;
                    resources[resource.alias] = resource;
                }
                return resources;
            };
            Resources.getInstance = function () {
                return new Resources();
            };
            Resources._observeResource = function (control, resource) {
                var value = resource.value, uid = control.uid, removeListeners = Resources.__observableResourceRemoveListeners[uid];
                if (isNull(removeListeners)) {
                    removeListeners = Resources.__observableResourceRemoveListeners[uid] = [];
                }
                if (isString(value)) {
                    if (!isNull(resource.initialValue)) {
                        value = resource.initialValue;
                    }
                    else {
                        resource.initialValue = value;
                    }
                    var listener = control.observeExpression(value, function (newValue) {
                        resource.value = newValue;
                    });
                    resource.value = control.evaluateExpression(value);
                    removeListeners.push(listener);
                }
            };
            Resources._removeListeners = function (control) {
                if (isNull(control)) {
                    return;
                }
                var uid = control.uid, removeListeners = Resources.__observableResourceRemoveListeners[uid];
                if (isArray(removeListeners)) {
                    var length = removeListeners.length;
                    for (var i = 0; i < length; ++i) {
                        removeListeners[i]();
                    }
                }
                deleteProperty(Resources.__observableResourceRemoveListeners, uid);
            };
            Resources.__addRoot = function (control) {
                control.resources.add({
                    root: {
                        value: control,
                        type: __OBJECT_RESOURCE,
                        alias: __ROOT_RESOURCE
                    },
                    rootContext: {
                        value: control.context,
                        type: __OBSERVABLE_RESOURCE,
                        alias: __ROOT_CONTEXT_RESOURCE
                    }
                });
            };
            Resources.prototype.initialize = function (controlInstance, resources) {
                this.__controlInstance = controlInstance;
                if (isNull(resources)) {
                    return;
                }
                else if (isNode(resources)) {
                    resources = Resources.parseElement(resources);
                }
                else if (isObject(resources.resources)) {
                    resources = resources.resources;
                }
                this.__resources = resources;
                var keys = Object.keys(resources), key, length = keys.length;
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    this[key] = resources[key];
                }
            };
            Resources.prototype.add = function (resources) {
                if (isNull(resources)) {
                    return;
                }
                else if (isNode(resources)) {
                    resources = Resources.parseElement(resources);
                }
                var keys = Object.keys(resources), length = keys.length, resource, control = this.__controlInstance, bound = this.__bound, key, create = Resources.create;
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    resource = resources[key];
                    resource.alias = key;
                    this[key] = this.__resources[key] = bound ? create(control, resource) : resource;
                }
            };
            Resources.INJECTABLE = __INJECTABLE_RESOURCE;
            Resources.OBJECT = __OBJECT_RESOURCE;
            Resources.OBSERVABLE = __OBSERVABLE_RESOURCE;
            Resources.LITERAL = __LITERAL_RESOURCE;
            Resources.FUNCTION = __FUNCTION_RESOURCE;
            Resources.__controlResources = [__CONTROL_RESOURCE, __CONTEXT_RESOURCE, __ROOT_RESOURCE, __ROOT_CONTEXT_RESOURCE];
            Resources.__resourceTypes = [__INJECTABLE_RESOURCE, __OBJECT_RESOURCE, __OBSERVABLE_RESOURCE, __FUNCTION_RESOURCE, __LITERAL_RESOURCE];
            Resources.__observableResourceRemoveListeners = {};
            return Resources;
        })();
        ui.Resources = Resources;
        function IResourcesFactory($ContextManagerStatic, $Regex) {
            Resources.$ContextManagerStatic = $ContextManagerStatic;
            Resources.$Regex = $Regex;
            return Resources;
        }
        ui.IResourcesFactory = IResourcesFactory;
        register.injectable(__ResourcesFactory, IResourcesFactory, [
            __ContextManagerStatic,
            __Regex
        ], __FACTORY);
        var DomEvents = (function () {
            function DomEvents() {
                this.$Document = acquire(__Document);
                this.$Compat = acquire(__Compat);
                this._inMouse = false;
                this._subscribers = {};
                this._gestures = {
                    $tap: __tap,
                    $dbltap: __dbltap,
                    $hold: __hold,
                    $release: __release,
                    $swipe: __swipe,
                    $swipeleft: __swipeleft,
                    $swiperight: __swiperight,
                    $swipeup: __swipeup,
                    $swipedown: __swipedown,
                    $track: __track,
                    $trackleft: __trackleft,
                    $trackright: __trackright,
                    $trackup: __trackup,
                    $trackdown: __trackdown,
                    $trackend: __trackend
                };
                this._gestureCount = {
                    $tap: 0,
                    $dbltap: 0,
                    $hold: 0,
                    $release: 0,
                    $swipe: 0,
                    $track: 0,
                    $trackend: 0
                };
                this.__START = 'start';
                this.__MOVE = 'move';
                this.__END = 'end';
                this.__hasMoved = false;
                this.__hasSwiped = false;
                this.__hasRelease = false;
                this.__detectingMove = false;
                this.__tapCount = 0;
                this.__touchCount = 0;
                this.__cancelDeferredTap = noop;
                this.__cancelDeferredHold = noop;
                this.__cancelRegex = /cancel/i;
                this.__pointerEndRegex = /up|cancel/i;
                this.__reverseMap = {};
                this.__mappedEventListener = this.__handleMappedEvent.bind(this);
                this.__mappedCount = {
                    $touchstart: 0,
                    $touchmove: 0,
                    $touchend: 0,
                    $touchcancel: 0
                };
                this.__pointerHash = {};
                this.__pointerEvents = [];
                this.__listeners = {
                    start: this._onTouchStart.bind(this),
                    move: this._onTouchMove.bind(this),
                    end: this._onTouchEnd.bind(this)
                };
                this.__getTypes();
            }
            DomEvents.prototype.addEventListener = function (element, type, listener, useCapture) {
                var _this = this;
                var $compat = this.$Compat, mappedGestures = $compat.mappedEvents, mappedType = mappedGestures[type], mappingExists = !isNull(mappedType), mappedCount = this.__mappedCount, mappedRemoveListener = noop, mappedTouchRemoveListener = noop, gestures = this._gestures, listenerRemoved = false;
                if (mappingExists) {
                    var count = mappedCount[type];
                    this.__reverseMap[mappedType] = type;
                    this.__registerElement(element, type);
                    mappedCount[type]++;
                    mappedRemoveListener = this.__addMappedEvent(count, mappedType, useCapture);
                    if ($compat.hasTouchEvents && !this.__cancelRegex.test(mappedType)) {
                        mappedType = mappedType.replace('touch', 'mouse').replace('start', 'down').replace('end', 'up');
                        this.__reverseMap[mappedType] = type;
                        mappedTouchRemoveListener = this.__addMappedEvent(count, mappedType, useCapture);
                    }
                }
                element.addEventListener(type, listener, useCapture);
                if (!isUndefined(element['on' + type]) || isUndefined(gestures[type]) || mappingExists) {
                    return function () {
                        if (listenerRemoved) {
                            return;
                        }
                        else if (mappingExists) {
                            var currentCount = mappedCount[type];
                            if (isNumber(currentCount)) {
                                if (currentCount > 0) {
                                    currentCount = --mappedCount[type];
                                }
                                if (currentCount === 0) {
                                    mappedRemoveListener();
                                    mappedTouchRemoveListener();
                                }
                            }
                            _this.__unregisterElement(element, type);
                        }
                        listenerRemoved = true;
                        element.removeEventListener(type, listener, useCapture);
                    };
                }
                var swipeGesture = gestures.$swipe, trackGesture = gestures.$track, countType = type;
                if (type.indexOf(trackGesture) !== -1) {
                    var trackend = gestures.$trackend;
                    countType = type === trackend ? trackend : trackGesture;
                }
                else if (type.indexOf(swipeGesture) !== -1) {
                    countType = swipeGesture;
                }
                this._gestureCount[countType]++;
                this.__registerElement(element, type);
                return function () {
                    if (listenerRemoved) {
                        return;
                    }
                    listenerRemoved = true;
                    _this.__removeEventListener(element, type, listener, useCapture);
                };
            };
            DomEvents.prototype.dispose = function () {
                this.__unregisterTypes();
                this._gestureCount = {
                    $tap: 0,
                    $dbltap: 0,
                    $hold: 0,
                    $release: 0,
                    $swipe: 0,
                    $track: 0,
                    $trackend: 0
                };
                this.__mappedCount = {
                    $touchstart: 0,
                    $touchmove: 0,
                    $touchend: 0,
                    $touchcancel: 0
                };
                this._isActive = false;
                this._subscribers = {};
                this.__pointerEvents = [];
                this.__pointerHash = {};
                this.__reverseMap = {};
                this.__tapCount = this.__touchCount = 0;
                this.__detectingMove = this.__hasMoved = this.__hasRelease = this.__hasSwiped = false;
                this.__lastMoveEvent = this.__lastTouchDown = this.__lastTouchUp = null;
                this.__swipeOrigin = this.__capturedTarget = this.__focusedElement = null;
                this.__cancelDeferredHold = this.__cancelDeferredTap = noop;
            };
            DomEvents.prototype._onTouchStart = function (ev) {
                var _this = this;
                if (this.__touchCount++ > 0) {
                    return true;
                }
                if (ev.type !== 'mousedown') {
                    this._inTouch = true;
                }
                else if (this._inTouch === true) {
                    ev.preventDefault();
                    return false;
                }
                else if (this.$Compat.hasTouchEvents) {
                    this._inMouse = true;
                }
                ev = this.__standardizeEventObject(ev);
                if (isNull(ev)) {
                    return true;
                }
                this.__capturedTarget = this.__lastMoveEvent = null;
                this.__hasMoved = false;
                this.__lastTouchDown = this.__swipeOrigin = {
                    clientX: ev.clientX,
                    clientY: ev.clientY,
                    timeStamp: ev.timeStamp,
                    target: ev.target,
                    identifier: ev.identifier
                };
                var gestureCount = this._gestureCount, noHolds = gestureCount.$hold <= 0, noRelease = gestureCount.$release <= 0;
                if (gestureCount.$track > 0 || gestureCount.$trackend > 0 || gestureCount.$swipe > 0) {
                    this.__registerType(this.__MOVE);
                    this.__detectingMove = true;
                }
                if (noHolds && noRelease) {
                    return true;
                }
                var holdInterval = DomEvents.config.intervals.holdInterval, domEvent, subscribeFn, domEventFound = false;
                if (noHolds) {
                    this.__hasRelease = false;
                    this.__cancelDeferredHold = defer(function () {
                        _this.__hasRelease = true;
                    }, holdInterval);
                    return true;
                }
                else if (noRelease) {
                    domEvent = this.__findFirstSubscriber(ev.target, this._gestures.$hold);
                    if ((domEventFound = !isNull(domEvent))) {
                        subscribeFn = function () {
                            domEvent.trigger(ev);
                            _this.__cancelDeferredHold = noop;
                        };
                    }
                }
                else {
                    this.__hasRelease = false;
                    domEvent = this.__findFirstSubscriber(ev.target, this._gestures.$hold);
                    if ((domEventFound = !isNull(domEvent))) {
                        subscribeFn = function () {
                            domEvent.trigger(ev);
                            _this.__hasRelease = true;
                            _this.__cancelDeferredHold = noop;
                        };
                    }
                }
                if (domEventFound) {
                    this.__cancelDeferredHold = defer(subscribeFn, holdInterval);
                }
            };
            DomEvents.prototype._onTouchMove = function (ev) {
                this.__cancelDeferredHold();
                this.__cancelDeferredHold = noop;
                if (this._inTouch === true && ev.type === 'mousemove') {
                    return true;
                }
                ev = this.__standardizeEventObject(ev);
                if (isNull(ev)) {
                    return true;
                }
                var gestureCount = this._gestureCount, noTracking = gestureCount.$track <= 0, noSwiping = gestureCount.$swipe <= 0, config = DomEvents.config, swipeOrigin = this.__swipeOrigin, x = ev.clientX, y = ev.clientY, minMove = this.__hasMoved || (this.__getDistance(swipeOrigin.clientX, x, swipeOrigin.clientY, y) >= config.distances.minScrollDistance);
                if (!minMove) {
                    return true;
                }
                this.__hasMoved = true;
                if (noTracking && noSwiping) {
                    return true;
                }
                var lastMove = this.__lastMoveEvent || swipeOrigin, direction = ev.direction = this.__getDirection(x - lastMove.clientX, y - lastMove.clientY), originChanged = this.__checkForOriginChanged(direction), velocity = ev.velocity = this.__getVelocity(x - swipeOrigin.clientX, y - swipeOrigin.clientY, ev.timeStamp - swipeOrigin.timeStamp);
                if (!(noSwiping || (this.__hasSwiped && !originChanged))) {
                    this.__setRegisteredSwipes(direction, velocity);
                }
                if (!noTracking) {
                    this.__handleTrack(ev);
                }
                this.__lastMoveEvent = ev;
            };
            DomEvents.prototype._onTouchEnd = function (ev) {
                var eventType = ev.type, hasMoved = this.__hasMoved;
                if (eventType !== 'mouseup') {
                    if (eventType === 'touchend') {
                        if (hasMoved) {
                            if (ev.cancelable === true) {
                                ev.preventDefault();
                            }
                        }
                        else if (this._inTouch === true) {
                            this.__handleInput(ev.target);
                            if (ev.cancelable === true) {
                                ev.preventDefault();
                            }
                        }
                        else {
                            this.__preventClickFromTouch();
                            if (ev.cancelable === true) {
                                ev.preventDefault();
                            }
                            return true;
                        }
                        this.__preventClickFromTouch();
                    }
                    this._inTouch = false;
                }
                else if (!isUndefined(this._inTouch)) {
                    if (!this._inMouse) {
                        if (ev.cancelable === true) {
                            ev.preventDefault();
                        }
                        return false;
                    }
                    this._inMouse = false;
                }
                if (this.__cancelRegex.test(eventType)) {
                    this.__handleCanceled(ev);
                    return true;
                }
                ev = this.__standardizeEventObject(ev);
                if (isNull(ev)) {
                    return true;
                }
                this.__clearTempStates();
                this.__touchCount = ev.touches.length;
                if (this.__hasRelease) {
                    this.__handleRelease(ev);
                }
                if (this.__hasSwiped) {
                    this.__handleSwipe();
                }
                var config = DomEvents.config, intervals = config.intervals, touchEnd = ev.timeStamp, touchDown = this.__lastTouchDown;
                if (hasMoved) {
                    this.__handleTrackEnd(ev);
                    this.__tapCount = 0;
                    return true;
                }
                else if (isNull(touchDown) || ((touchEnd - touchDown.timeStamp) > intervals.tapInterval)) {
                    this.__tapCount = 0;
                    return true;
                }
                var lastTouchUp = this.__lastTouchUp, x = ev.clientX, y = ev.clientY;
                if (this.__tapCount > 0 && this.__getDistance(x, lastTouchUp.clientX, y, lastTouchUp.clientY) <= config.distances.maxDblTapDistance && ((touchEnd - lastTouchUp.timeStamp) <= intervals.dblTapInterval)) {
                    this.__handleDbltap(ev);
                }
                else {
                    this.__tapCount = 0;
                }
                this.__handleTap(ev);
                this.__lastTouchUp = ev;
            };
            DomEvents.prototype.__clearTempStates = function () {
                this.__cancelDeferredHold();
                this.__cancelDeferredHold = noop;
                if (this.__detectingMove) {
                    this.__unregisterType(this.__MOVE);
                    this.__detectingMove = false;
                }
            };
            DomEvents.prototype.__resetTouchEnd = function () {
                this.__tapCount = this.__touchCount = 0;
                this._inTouch = this.__hasRelease = this.__hasSwiped = false;
                this.__pointerHash = {};
                this.__pointerEvents = [];
                this.__capturedTarget = null;
            };
            DomEvents.prototype.__handleCanceled = function (ev) {
                var touches = ev.touches || this.__pointerEvents, index = this.__getTouchIndex(touches);
                ev = index >= 0 ? touches[index] : this.__standardizeEventObject(ev);
                this.__clearTempStates();
                if (this.__hasMoved) {
                    this.__handleTrackEnd(ev);
                }
                this.__resetTouchEnd();
            };
            DomEvents.prototype.__handleTap = function (ev) {
                var _this = this;
                this.__tapCount++;
                if (this._gestureCount.$tap <= 0) {
                    return;
                }
                var gestures = this._gestures, domEvent = this.__findFirstSubscriber(ev.target, gestures.$tap);
                if (isNull(domEvent)) {
                    return;
                }
                if (DomEvents.config.intervals.dblTapZoomDelay <= 0 || ev.pointerType === 'mouse' || ev.type === 'mouseup') {
                    domEvent.trigger(ev);
                    return;
                }
                this.__cancelDeferredTap = defer(function () {
                    domEvent.trigger(ev);
                    _this.__tapCount = 0;
                    _this.__cancelDeferredTap = noop;
                }, DomEvents.config.intervals.dblTapZoomDelay);
            };
            DomEvents.prototype.__handleDbltap = function (ev) {
                this.__tapCount = 0;
                this.__cancelDeferredTap();
                this.__cancelDeferredTap = noop;
                if (this._gestureCount.$dbltap <= 0) {
                    return;
                }
                var domEvent = this.__findFirstSubscriber(ev.target, this._gestures.$dbltap);
                if (isNull(domEvent)) {
                    return;
                }
                domEvent.trigger(ev);
                this.__tapCount = -1;
            };
            DomEvents.prototype.__handleRelease = function (ev) {
                var domEvent = this.__findFirstSubscriber(ev.target, this._gestures.$release);
                if (!isNull(domEvent)) {
                    domEvent.trigger(ev);
                }
                this.__hasRelease = false;
            };
            DomEvents.prototype.__handleSwipe = function () {
                var lastMove = this.__lastMoveEvent;
                if (isNull(lastMove)) {
                    this.__hasSwiped = false;
                    this.__swipeSubscribers = null;
                    return;
                }
                var swipeSubscribers = this.__swipeSubscribers || [];
                while (swipeSubscribers.length > 0) {
                    swipeSubscribers.pop().trigger(lastMove);
                }
                this.__hasSwiped = false;
                this.__lastMoveEvent = null;
                this.__swipeSubscribers = null;
            };
            DomEvents.prototype.__handleTrack = function (ev) {
                var trackGesture = this._gestures.$track, direction = ev.direction, eventTarget = this.__capturedTarget || ev.target;
                var domEvents = this.__findFirstSubscribers(eventTarget, [trackGesture, (trackGesture + direction.x), (trackGesture + direction.y)]);
                if (domEvents.length > 0) {
                    if (this.$Compat.ANDROID) {
                        ev.preventDefault();
                    }
                    while (domEvents.length > 0) {
                        domEvents.pop().trigger(ev);
                    }
                }
            };
            DomEvents.prototype.__handleTrackEnd = function (ev) {
                if (this._gestureCount.$trackend <= 0) {
                    return;
                }
                var eventTarget = this.__capturedTarget || ev.target, domEvent = this.__findFirstSubscriber(eventTarget, this._gestures.$trackend);
                if (isNull(domEvent)) {
                    return;
                }
                domEvent.trigger(ev);
            };
            DomEvents.prototype.__handleMappedEvent = function (ev) {
                var mappedType = ev.type, eventType = this.__reverseMap[mappedType], domEvent = this.__findFirstSubscriber(ev.target, eventType);
                if (isNull(domEvent)) {
                    return;
                }
                ev = this.__standardizeEventObject(ev);
                if (isNull(ev)) {
                    return;
                }
                domEvent.trigger(ev);
            };
            DomEvents.prototype.__getTypes = function () {
                var $compat = this.$Compat, touchEvents = $compat.mappedEvents;
                if ($compat.hasPointerEvents) {
                    this._startEvents = [touchEvents.$touchstart];
                    this._moveEvents = [touchEvents.$touchmove];
                    this._endEvents = [touchEvents.$touchend, touchEvents.$touchcancel];
                    return;
                }
                else if ($compat.hasTouchEvents) {
                    this._startEvents = [touchEvents.$touchstart, 'mousedown'];
                    this._moveEvents = [touchEvents.$touchmove, 'mousemove'];
                    this._endEvents = [touchEvents.$touchend, touchEvents.$touchcancel, 'mouseup'];
                    return;
                }
                var cancelEvent = touchEvents.$touchcancel;
                this._startEvents = [touchEvents.$touchstart];
                this._moveEvents = [touchEvents.$touchmove];
                this._endEvents = isNull(cancelEvent) ? [touchEvents.$touchend] : [touchEvents.$touchend, cancelEvent];
            };
            DomEvents.prototype.__registerTypes = function () {
                this.__registerType(this.__START);
                this.__registerType(this.__END);
            };
            DomEvents.prototype.__unregisterTypes = function () {
                this.__unregisterType(this.__START);
                this.__unregisterType(this.__MOVE);
                this.__unregisterType(this.__END);
            };
            DomEvents.prototype.__registerType = function (event) {
                var events, listener = this.__listeners[event], $document = this.$Document;
                switch (event) {
                    case this.__START:
                        events = this._startEvents;
                        break;
                    case this.__MOVE:
                        events = this._moveEvents;
                        break;
                    case this.__END:
                        events = this._endEvents;
                        break;
                    default:
                        return;
                }
                var index = events.length;
                while (index-- > 0) {
                    $document.addEventListener(events[index], listener, false);
                }
            };
            DomEvents.prototype.__unregisterType = function (event) {
                var events, listener = this.__listeners[event], $document = this.$Document;
                switch (event) {
                    case this.__START:
                        events = this._startEvents;
                        break;
                    case this.__MOVE:
                        events = this._moveEvents;
                        break;
                    case this.__END:
                        events = this._endEvents;
                        break;
                    default:
                        return;
                }
                var index = events.length;
                while (index-- > 0) {
                    $document.removeEventListener(events[index], listener, false);
                }
            };
            DomEvents.prototype.__registerElement = function (element, type) {
                var id, plat = element.__plat;
                if (isNull(plat)) {
                    id = uniqueId('domEvent_');
                    element.__plat = plat = {
                        domEvent: id
                    };
                }
                else if (isNull(plat.domEvent)) {
                    id = uniqueId('domEvent_');
                    plat.domEvent = id;
                }
                if (!this._isActive) {
                    this.__registerTypes();
                    if (isNull(this._isActive)) {
                        this.__appendGestureStyle();
                    }
                    this._isActive = true;
                }
                var $domEvent;
                if (isNull(id)) {
                    var subscriber = this._subscribers[plat.domEvent];
                    if (isUndefined(subscriber[type])) {
                        $domEvent = new CustomDomEvent(element, type);
                        subscriber[type] = $domEvent;
                    }
                    else {
                        subscriber[type].count++;
                    }
                    subscriber.gestureCount++;
                    return;
                }
                var newSubscriber = { gestureCount: 1 };
                $domEvent = new CustomDomEvent(element, type);
                newSubscriber[type] = $domEvent;
                this._subscribers[id] = newSubscriber;
                if (!isUndefined(element.className)) {
                    addClass(element, DomEvents.config.styleConfig[0].className);
                }
                this.__removeSelections(element);
            };
            DomEvents.prototype.__unregisterElement = function (element, type) {
                var plat = element.__plat;
                if (isNull(plat) || isNull(plat.domEvent)) {
                    return;
                }
                var domEventId = plat.domEvent, eventSubscriber = this._subscribers[domEventId], domEvent = eventSubscriber[type];
                if (isNull(domEvent)) {
                    return;
                }
                domEvent.count--;
                if (domEvent.count === 0) {
                    deleteProperty(eventSubscriber, type);
                }
                eventSubscriber.gestureCount--;
                if (eventSubscriber.gestureCount === 0) {
                    deleteProperty(this._subscribers, domEventId);
                    this.__removeElement(element);
                }
            };
            DomEvents.prototype.__setTouchPoint = function (ev) {
                var eventType = ev.type, $compat = this.$Compat;
                if ($compat.hasPointerEvents || $compat.hasMsPointerEvents) {
                    this.__updatePointers(ev, this.__pointerEndRegex.test(eventType));
                    return;
                }
                ev.pointerType = eventType.indexOf('mouse') === -1 ? 'touch' : 'mouse';
            };
            DomEvents.prototype.__setCapture = function (target) {
                if (isNull(this.__capturedTarget) && !isDocument(target)) {
                    this.__capturedTarget = target;
                }
            };
            DomEvents.prototype.__updatePointers = function (ev, remove) {
                var id = ev.pointerId, pointerHash = this.__pointerHash, pointer = pointerHash[id], index;
                if (remove) {
                    if (!isUndefined(pointer)) {
                        index = this.__pointerEvents.indexOf(pointer);
                        if (index > -1) {
                            this.__pointerEvents.splice(index, 1);
                        }
                        deleteProperty(this.__pointerHash, id);
                    }
                }
                else {
                    if (id === 1 && !isEmpty(pointerHash)) {
                        return;
                    }
                    ev.identifier = ev.pointerId;
                    if (isUndefined(pointer) || (index = this.__pointerEvents.indexOf(pointer)) < 0) {
                        this.__pointerEvents.push(ev);
                    }
                    else {
                        this.__pointerEvents.splice(index, 1, ev);
                    }
                    pointerHash[id] = ev;
                }
            };
            DomEvents.prototype.__findFirstSubscriber = function (eventTarget, type) {
                if (isNull(eventTarget)) {
                    return;
                }
                var plat, subscriber, domEvent;
                do {
                    plat = eventTarget.__plat;
                    if (isUndefined(plat) || isUndefined(plat.domEvent)) {
                        continue;
                    }
                    subscriber = this._subscribers[plat.domEvent];
                    domEvent = subscriber[type];
                    if (isUndefined(domEvent)) {
                        continue;
                    }
                    return domEvent;
                } while (!isNull(eventTarget = eventTarget.parentNode));
            };
            DomEvents.prototype.__findFirstSubscribers = function (eventTarget, types) {
                if (isNull(eventTarget)) {
                    return [];
                }
                var plat, subscriber, subscriberKeys, subscriberKey, domEvents = [], index;
                do {
                    plat = eventTarget.__plat;
                    if (isUndefined(plat) || isUndefined(plat.domEvent)) {
                        continue;
                    }
                    subscriber = this._subscribers[plat.domEvent];
                    subscriberKeys = Object.keys(subscriber);
                    while (subscriberKeys.length > 0) {
                        subscriberKey = subscriberKeys.pop();
                        index = types.indexOf(subscriberKey);
                        if (index !== -1) {
                            domEvents.push(subscriber[subscriberKey]);
                            types.splice(index, 1);
                        }
                    }
                } while (types.length > 0 && !isNull(eventTarget = eventTarget.parentNode));
                return domEvents;
            };
            DomEvents.prototype.__addMappedEvent = function (count, mappedEvent, useCapture) {
                var _this = this;
                var $document = this.$Document;
                if (count === 0) {
                    $document.addEventListener(mappedEvent, this.__mappedEventListener, useCapture);
                }
                return function () {
                    $document.removeEventListener(mappedEvent, _this.__mappedEventListener, useCapture);
                };
            };
            DomEvents.prototype.__removeEventListener = function (element, type, listener, useCapture) {
                var gestures = this._gestures;
                element.removeEventListener(type, listener, useCapture);
                var swipeGesture = gestures.$swipe, trackGesture = gestures.$track, countType = type;
                if (type.indexOf(trackGesture) !== -1) {
                    var trackend = gestures.$trackend;
                    countType = type === trackend ? trackend : trackGesture;
                }
                else if (type.indexOf(swipeGesture) !== -1) {
                    countType = swipeGesture;
                }
                this._gestureCount[countType]--;
                this.__unregisterElement(element, type);
            };
            DomEvents.prototype.__removeElement = function (element) {
                this.__returnSelections(element);
                if (!isUndefined(element.className)) {
                    removeClass(element, DomEvents.config.styleConfig[0].className);
                }
                var plat = element.__plat;
                deleteProperty(plat, 'domEvent');
                if (isEmpty(plat)) {
                    deleteProperty(element, '__plat');
                }
                if (isEmpty(this._subscribers)) {
                    this.dispose();
                }
            };
            DomEvents.prototype.__standardizeEventObject = function (ev) {
                this.__setTouchPoint(ev);
                var isStart = this._startEvents.indexOf(ev.type) !== -1, touches = ev.touches || this.__pointerEvents, changedTouches = ev.changedTouches, changedTouchesExist = !isUndefined(changedTouches), timeStamp = ev.timeStamp;
                if (changedTouchesExist) {
                    if (isStart) {
                        ev = changedTouches[0];
                    }
                    else {
                        var changedTouchIndex = this.__getTouchIndex(changedTouches);
                        if (changedTouchIndex >= 0) {
                            ev = changedTouches[changedTouchIndex];
                        }
                        else if (this.__getTouchIndex(touches) >= 0) {
                            return null;
                        }
                    }
                }
                if (isStart) {
                    this.__setCapture(ev.target);
                }
                ev.touches = touches;
                ev.offset = this.__getOffset(ev);
                ev.timeStamp = timeStamp;
                return ev;
            };
            DomEvents.prototype.__getTouchIndex = function (touches) {
                var identifier = (this.__lastTouchDown || {}).identifier, length = touches.length;
                for (var i = 0; i < length; ++i) {
                    if (touches[i].identifier === identifier) {
                        return i;
                    }
                }
                return -1;
            };
            DomEvents.prototype.__getOffset = function (ev) {
                var target = this.__capturedTarget || ev.target;
                if (isDocument(target)) {
                    return {
                        x: ev.clientX,
                        y: ev.clientY
                    };
                }
                else if (!isUndefined(ev.offsetX) && target === ev.target) {
                    return {
                        x: ev.offsetX,
                        y: ev.offsetY
                    };
                }
                var x = target.offsetLeft, y = target.offsetTop;
                while (!isNull(target = target.offsetParent)) {
                    x += target.offsetLeft;
                    y += target.offsetTop;
                }
                return {
                    x: (ev.clientX - x),
                    y: (ev.clientY - y)
                };
            };
            DomEvents.prototype.__getDistance = function (x1, x2, y1, y2) {
                var x = x2 - x1, y = y2 - y1;
                return Math.sqrt((x * x) + (y * y));
            };
            DomEvents.prototype.__getVelocity = function (dx, dy, dt) {
                return {
                    x: Math.abs(dx / dt) || 0,
                    y: Math.abs(dy / dt) || 0
                };
            };
            DomEvents.prototype.__getDirection = function (dx, dy) {
                var distanceX = Math.abs(dx), distanceY = Math.abs(dy), lastDirection = (this.__lastMoveEvent || {}).direction || {}, horizontal = dx === 0 ? (lastDirection.x || 'none') : (dx < 0 ? 'left' : 'right'), vertical = dy === 0 ? (lastDirection.y || 'none') : (dy < 0 ? 'up' : 'down');
                return {
                    x: horizontal,
                    y: vertical,
                    primary: (distanceX === distanceY ? (lastDirection.primary || 'none') : (distanceX > distanceY ? horizontal : vertical))
                };
            };
            DomEvents.prototype.__checkForOriginChanged = function (direction) {
                var lastMove = this.__lastMoveEvent;
                if (isNull(lastMove)) {
                    this.__hasSwiped = false;
                    return true;
                }
                var swipeDirection = lastMove.direction;
                if (swipeDirection.x === direction.x && swipeDirection.y === direction.y) {
                    return false;
                }
                this.__swipeOrigin = {
                    clientX: lastMove.clientX,
                    clientY: lastMove.clientY,
                    timeStamp: lastMove.timeStamp,
                    target: lastMove.target,
                    identifier: lastMove.identifier
                };
                this.__hasSwiped = false;
                return true;
            };
            DomEvents.prototype.__setRegisteredSwipes = function (direction, velocity) {
                var swipeTarget = (this.__swipeOrigin || {}).target, swipeGesture = this._gestures.$swipe, minSwipeVelocity = DomEvents.config.velocities.minSwipeVelocity, events = [swipeGesture];
                if (velocity.x >= minSwipeVelocity) {
                    this.__hasSwiped = true;
                    events.push(swipeGesture + direction.x);
                }
                if (velocity.y >= minSwipeVelocity) {
                    this.__hasSwiped = true;
                    events.push(swipeGesture + direction.y);
                }
                this.__swipeSubscribers = this.__findFirstSubscribers(swipeTarget, events);
            };
            DomEvents.prototype.__isHorizontal = function (direction) {
                return direction === 'left' || direction === 'right';
            };
            DomEvents.prototype.__appendGestureStyle = function () {
                var $document = this.$Document, styleClasses, classLength;
                if (this.$Compat.platCss) {
                    return;
                }
                else if (!isNull($document.styleSheets) && $document.styleSheets.length > 0) {
                    var styleSheet = $document.styleSheets[0];
                    styleClasses = DomEvents.config.styleConfig;
                    classLength = styleClasses.length;
                    while (classLength-- > 0) {
                        styleSheet.insertRule(this.__createStyle(styleClasses[classLength]), 0);
                    }
                    return;
                }
                var head = $document.head, style = $document.createElement('style'), textContent = '';
                style.type = 'text/css';
                styleClasses = DomEvents.config.styleConfig;
                classLength = styleClasses.length;
                while (classLength-- > 0) {
                    textContent = this.__createStyle(styleClasses[classLength]) + textContent;
                }
                style.textContent = textContent;
                head.appendChild(style);
            };
            DomEvents.prototype.__createStyle = function (styleClass) {
                var styles = styleClass.styles || [], styleLength = styles.length, style = '.' + styleClass.className + ' { ', textContent = '';
                styleLength = styles.length;
                for (var j = 0; j < styleLength; ++j) {
                    textContent += styles[j] + ';';
                }
                style += textContent + ' } ';
                return style;
            };
            DomEvents.prototype.__isFocused = function (target) {
                return target === this.__focusedElement;
            };
            DomEvents.prototype.__handleInput = function (target) {
                var _this = this;
                var nodeName = target.nodeName, focusedElement = this.__focusedElement || {};
                if (!isString(nodeName)) {
                    this.__focusedElement = null;
                    if (isFunction(focusedElement.blur)) {
                        focusedElement.blur();
                    }
                    return;
                }
                var remover;
                switch (nodeName.toLowerCase()) {
                    case 'input':
                        switch (target.type) {
                            case 'range':
                                if (isFunction(focusedElement.blur)) {
                                    focusedElement.blur();
                                }
                                break;
                            case 'button':
                            case 'submit':
                            case 'checkbox':
                            case 'radio':
                            case 'file':
                                if (isFunction(focusedElement.blur)) {
                                    focusedElement.blur();
                                }
                                postpone(function () {
                                    if (_this.$Document.body.contains(target)) {
                                        target.click();
                                    }
                                });
                                break;
                            default:
                                this.__focusedElement = target;
                                target.focus();
                                remover = this.addEventListener(target, 'blur', function () {
                                    if (_this.__isFocused(target)) {
                                        _this.__focusedElement = null;
                                    }
                                    remover();
                                }, false);
                                return;
                        }
                        break;
                    case 'a':
                    case 'button':
                    case 'label':
                        if (isFunction(focusedElement.blur)) {
                            focusedElement.blur();
                        }
                        postpone(function () {
                            if (_this.$Document.body.contains(target)) {
                                target.click();
                            }
                        });
                        break;
                    case 'textarea':
                        this.__focusedElement = target;
                        target.focus();
                        remover = this.addEventListener(target, 'blur', function () {
                            if (_this.__isFocused(target)) {
                                _this.__focusedElement = null;
                            }
                            remover();
                        }, false);
                        return;
                    case 'select':
                        if (isFunction(focusedElement.blur)) {
                            focusedElement.blur();
                        }
                        postpone(function () {
                            var $document = _this.$Document;
                            if ($document.body.contains(target)) {
                                var event = $document.createEvent('MouseEvents');
                                event.initMouseEvent('mousedown', false, false, null, null, null, null, null, null, null, null, null, null, null, null);
                                target.dispatchEvent(event);
                            }
                        });
                        break;
                    default:
                        if (isFunction(focusedElement.blur)) {
                            focusedElement.blur();
                        }
                        postpone(function () {
                            if (_this.$Document.body.contains(target) && isFunction(target.click)) {
                                target.click();
                            }
                        });
                        break;
                }
                this.__focusedElement = null;
            };
            DomEvents.prototype.__preventClickFromTouch = function () {
                var _this = this;
                var $document = this.$Document, delayedClickRemover = defer(function () {
                    $document.removeEventListener('click', preventDefault, true);
                    $document.removeEventListener('mousedown', preventDefault, true);
                    $document.removeEventListener('mouseup', preventDefault, true);
                }, 400), preventDefault = function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    $document.removeEventListener(ev.type, preventDefault, true);
                    if (delayedClickRemover === noop) {
                        return false;
                    }
                    delayedClickRemover();
                    delayedClickRemover = noop;
                    var touchDown = _this.__lastTouchDown;
                    if (isNull(touchDown) || _this.__isFocused(touchDown.target)) {
                        return false;
                    }
                    _this.__handleInput(touchDown.target);
                    return false;
                };
                postpone(function () {
                    $document.addEventListener('click', preventDefault, true);
                    $document.addEventListener('mousedown', preventDefault, true);
                    $document.addEventListener('mouseup', preventDefault, true);
                });
            };
            DomEvents.prototype.__removeSelections = function (element) {
                if (!isNode(element)) {
                    return;
                }
                if (!isUndefined(element.onselectstart)) {
                    element.addEventListener('selectstart', this.__preventDefault, false);
                }
                if (!isUndefined(element.ondragstart)) {
                    element.addEventListener('dragstart', this.__preventDefault, false);
                }
            };
            DomEvents.prototype.__returnSelections = function (element) {
                if (!isNode(element)) {
                    return;
                }
                if (!isUndefined(element.onselectstart)) {
                    element.removeEventListener('selectstart', this.__preventDefault, false);
                }
                if (!isUndefined(element.ondragstart)) {
                    element.removeEventListener('dragstart', this.__preventDefault, false);
                }
            };
            DomEvents.prototype.__preventDefault = function (ev) {
                var nodeName = ev.target.nodeName;
                if (isString(nodeName)) {
                    nodeName = nodeName.toLowerCase();
                }
                if (nodeName === 'input' || nodeName === 'textarea') {
                    return true;
                }
                ev.preventDefault();
                return false;
            };
            DomEvents.config = {
                intervals: {
                    tapInterval: 200,
                    dblTapInterval: 300,
                    holdInterval: 400,
                    dblTapZoomDelay: 0
                },
                distances: {
                    minScrollDistance: 3,
                    maxDblTapDistance: 20
                },
                velocities: {
                    minSwipeVelocity: 0.8
                },
                styleConfig: [{
                    className: 'plat-gesture',
                    styles: [
                        '-moz-user-select: none',
                        '-khtml-user-select: none',
                        '-webkit-touch-callout: none',
                        '-webkit-user-select: none',
                        '-webkit-user-drag: none',
                        '-webkit-tap-highlight-color: transparent',
                        '-webkit-overflow-scrolling: touch',
                        '-ms-user-select: none',
                        '-ms-touch-action: manipulation',
                        'touch-action: manipulation'
                    ]
                }, {
                    className: 'plat-no-touch-action',
                    styles: [
                        '-ms-touch-action: none',
                        'touch-action: none'
                    ]
                }]
            };
            return DomEvents;
        })();
        ui.DomEvents = DomEvents;
        function IDomEvents() {
            return new DomEvents();
        }
        ui.IDomEvents = IDomEvents;
        register.injectable(__DomEvents, IDomEvents);
        function IDomEventsConfig() {
            return DomEvents.config;
        }
        ui.IDomEventsConfig = IDomEventsConfig;
        register.injectable(__DomEventsConfig, IDomEventsConfig);
        var DomEvent = (function () {
            function DomEvent() {
                this.$Document = acquire(__Document);
            }
            DomEvent.prototype.initialize = function (element, event) {
                this.element = element;
                this.event = event;
            };
            DomEvent.prototype.trigger = function (eventExtension) {
                var customEv = this.$Document.createEvent('CustomEvent');
                if (isObject(eventExtension)) {
                    extend(customEv, eventExtension);
                }
                customEv.initCustomEvent(this.event, true, true, 0);
                this.element.dispatchEvent(customEv);
            };
            return DomEvent;
        })();
        ui.DomEvent = DomEvent;
        function IDomEventInstance() {
            return new DomEvent();
        }
        ui.IDomEventInstance = IDomEventInstance;
        register.injectable(__DomEventInstance, IDomEventInstance, null, __INSTANCE);
        var CustomDomEvent = (function (_super) {
            __extends(CustomDomEvent, _super);
            function CustomDomEvent(element, event) {
                _super.call(this);
                this.count = 0;
                this.element = element;
                this.event = event;
                this.count++;
            }
            CustomDomEvent.prototype.trigger = function (ev) {
                var customEv = this.$Document.createEvent('CustomEvent');
                this.__extendEventObject(customEv, ev);
                customEv.initCustomEvent(this.event, true, true, 0);
                this.element.dispatchEvent(customEv);
            };
            CustomDomEvent.prototype.__extendEventObject = function (customEv, ev) {
                var pointerType = ev.pointerType;
                customEv.clientX = ev.clientX;
                customEv.clientY = ev.clientY;
                customEv.offsetX = ev.offset.x;
                customEv.offsetY = ev.offset.y;
                customEv.direction = ev.direction || {
                    x: 'none',
                    y: 'none',
                    primary: 'none'
                };
                customEv.touches = ev.touches;
                customEv.velocity = ev.velocity || { x: 0, y: 0 };
                customEv.identifier = ev.identifier || 0;
                customEv.pointerType = isNumber(pointerType) ? this.__convertPointerType(pointerType, ev.type) : pointerType;
                customEv.screenX = ev.screenX;
                customEv.screenY = ev.screenY;
                customEv.pageX = ev.pageX;
                customEv.pageY = ev.pageY;
            };
            CustomDomEvent.prototype.__convertPointerType = function (pointerType, eventType) {
                switch (pointerType) {
                    case MSPointerEvent.MSPOINTER_TYPE_MOUSE:
                        return 'mouse';
                    case MSPointerEvent.MSPOINTER_TYPE_PEN:
                        return 'pen';
                    case MSPointerEvent.MSPOINTER_TYPE_TOUCH:
                        return 'touch';
                }
                return (eventType.indexOf('mouse') === -1) ? 'touch' : 'mouse';
            };
            return CustomDomEvent;
        })(DomEvent);
        var animations;
        (function (animations) {
            var Animator = (function () {
                function Animator() {
                    this.$Compat = acquire(__Compat);
                    this._elements = {};
                }
                Animator.prototype.animate = function (element, key, options) {
                    if (!isNode(element) || element.nodeType !== Node.ELEMENT_NODE) {
                        return this.resolve();
                    }
                    var animation = animationInjectors[key], jsAnimation = jsAnimationInjectors[key], animationInstance;
                    if (!this.$Compat.animationSupported || isUndefined(animation)) {
                        if (isUndefined(jsAnimation)) {
                            return this.resolve();
                        }
                        animationInstance = jsAnimation.inject();
                    }
                    else {
                        animationInstance = animation.inject();
                    }
                    var animatingParentId = this.__parentIsAnimating(element), id = this.__setAnimationId(element, animationInstance), animationPromise = animationInstance.instantiate(element, options), animatedElement = this._elements[id];
                    if (!isNull(animatingParentId)) {
                        animatedElement.animationEnd(true);
                        var parent = this._elements[animatingParentId];
                        if (isPromise(parent.promise)) {
                            return animationPromise.then(function () {
                                return function () {
                                    return parent.promise;
                                };
                            });
                        }
                        return this.resolve();
                    }
                    this.__stopChildAnimations(element);
                    animationPromise = animationPromise.then(function () {
                        animatedElement.promise = null;
                        animatedElement.animationEnd();
                        return function () {
                            return animationPromise;
                        };
                    });
                    if (isPromise(animatedElement.promise)) {
                        return animatedElement.promise.then(function () {
                            animationInstance.start();
                            return (animatedElement.promise = animationPromise);
                        });
                    }
                    animationInstance.start();
                    return (animatedElement.promise = animationPromise);
                };
                Animator.prototype.resolve = function () {
                    var animationPromise = new AnimationPromise(function (resolve) {
                        resolve(function () {
                            return animationPromise;
                        });
                    });
                    return animationPromise;
                };
                Animator.prototype.__parentIsAnimating = function (element) {
                    var animationId;
                    while (!isDocument(element = element.parentNode) && element.nodeType === Node.ELEMENT_NODE) {
                        if (hasClass(element, __Animating)) {
                            animationId = (element.__plat || {}).animation;
                            if (isString(animationId)) {
                                if (!isNull(this._elements[animationId])) {
                                    return animationId;
                                }
                                deleteProperty(element.__plat, 'animation');
                                if (isEmpty(plat)) {
                                    deleteProperty(element, '__plat');
                                }
                                removeClass(element, __Animating);
                            }
                        }
                    }
                };
                Animator.prototype.__setAnimationId = function (element, animationInstance) {
                    var elements = this._elements, plat = element.__plat, id;
                    if (isUndefined(plat)) {
                        element.__plat = plat = {};
                    }
                    if (isUndefined(plat.animation)) {
                        plat.animation = id = uniqueId('animation_');
                    }
                    else {
                        id = plat.animation;
                    }
                    var animatedElement = elements[id], removeListener = function (cancel, reanimating) {
                        if (cancel === true) {
                            animationInstance.cancel();
                            animationInstance.end();
                            if (reanimating === true) {
                                return;
                            }
                        }
                        removeClass(element, __Animating);
                        deleteProperty(elements, id);
                        deleteProperty(plat, 'animation');
                        if (isEmpty(plat)) {
                            deleteProperty(element, '__plat');
                        }
                    };
                    if (isUndefined(animatedElement)) {
                        addClass(element, __Animating);
                        elements[id] = {
                            animationEnd: removeListener
                        };
                    }
                    else {
                        animatedElement.animationEnd(true, true);
                        animatedElement.animationEnd = removeListener;
                    }
                    return id;
                };
                Animator.prototype.__stopChildAnimations = function (element) {
                    var elements = this._elements, customAnimationElements = Array.prototype.slice.call(element.querySelectorAll('.' + __Animating)), customAnimationElement, animatedElement, plat, id;
                    while (customAnimationElements.length > 0) {
                        customAnimationElement = customAnimationElements.pop();
                        plat = customAnimationElement.__plat || {};
                        id = plat.animation;
                        if (isNull(id)) {
                            continue;
                        }
                        animatedElement = elements[id] || {};
                        if (isFunction(animatedElement.animationEnd)) {
                            animatedElement.animationEnd(true);
                        }
                    }
                };
                return Animator;
            })();
            animations.Animator = Animator;
            function IAnimator() {
                return new Animator();
            }
            animations.IAnimator = IAnimator;
            register.injectable('$Animator', IAnimator);
            var AnimationPromise = (function (_super) {
                __extends(AnimationPromise, _super);
                function AnimationPromise(resolveFunction, promise) {
                    _super.call(this, resolveFunction);
                    if (!isNull(promise)) {
                        this.__animationInstance = promise.__animationInstance;
                    }
                }
                AnimationPromise.prototype.initialize = function (instance) {
                    if (isObject(instance) && isNull(this.__animationInstance)) {
                        this.__animationInstance = instance;
                    }
                };
                AnimationPromise.prototype.cancel = function () {
                    var animationInstance = this.__animationInstance;
                    if (!isNull(animationInstance)) {
                        if (isFunction(animationInstance.cancel)) {
                            animationInstance.cancel();
                        }
                        if (isFunction(animationInstance.end)) {
                            animationInstance.end();
                        }
                    }
                    return this;
                };
                AnimationPromise.prototype.dispose = function () {
                    var animationInstance = this.__animationInstance;
                    if (!isNull(animationInstance)) {
                        if (isFunction(animationInstance.dispose)) {
                            animationInstance.dispose();
                        }
                    }
                    return this;
                };
                AnimationPromise.prototype.then = function (onFulfilled) {
                    return _super.prototype.then.call(this, onFulfilled);
                };
                AnimationPromise.prototype.catch = function (onRejected) {
                    return _super.prototype.catch.call(this, onRejected);
                };
                return AnimationPromise;
            })(async.Promise);
            animations.AnimationPromise = AnimationPromise;
            var BaseAnimation = (function () {
                function BaseAnimation() {
                    this.$Compat = acquire(__Compat);
                    this.dom = acquire(__Dom);
                }
                BaseAnimation.prototype.initialize = function () {
                };
                BaseAnimation.prototype.start = function () {
                };
                BaseAnimation.prototype.end = function () {
                    if (isFunction(this._resolve)) {
                        this._resolve();
                        this._resolve = null;
                    }
                };
                BaseAnimation.prototype.cancel = function () {
                };
                BaseAnimation.prototype.dispose = function () {
                };
                BaseAnimation.prototype.instantiate = function (element, options) {
                    var _this = this;
                    this.element = element;
                    this.options = options;
                    var promise = new AnimationPromise(function (resolve) {
                        _this._resolve = resolve;
                        _this.initialize();
                    });
                    promise.initialize(this);
                    return promise;
                };
                return BaseAnimation;
            })();
            animations.BaseAnimation = BaseAnimation;
            var CssAnimation = (function (_super) {
                __extends(CssAnimation, _super);
                function CssAnimation() {
                    _super.apply(this, arguments);
                    this.__animationEvents = this.$Compat.animationEvents;
                    this.__subscribers = [];
                }
                CssAnimation.prototype.dispose = function () {
                    if (isFunction(this.__removeListener)) {
                        this.__removeListener();
                        this.__removeListener = null;
                    }
                    this.__subscribers = [];
                };
                CssAnimation.prototype.animationStart = function (listener) {
                    return this.__addEventListener(this.__animationEvents.$animationStart, listener);
                };
                CssAnimation.prototype.transitionStart = function (listener) {
                    return this.__addEventListener(this.__animationEvents.$transitionStart, listener);
                };
                CssAnimation.prototype.animationEnd = function (listener) {
                    return this.__addEventListener(this.__animationEvents.$animationEnd, listener);
                };
                CssAnimation.prototype.transitionEnd = function (listener) {
                    return this.__addEventListener(this.__animationEvents.$transitionEnd, listener);
                };
                CssAnimation.prototype.__addEventListener = function (event, listener) {
                    var _this = this;
                    var subscribers = this.__subscribers, subscriber = function () {
                        _this.__removeListener = _this.dom.addEventListener(_this.element, event, function (ev) {
                            _this.__removeListener();
                            _this.__removeListener = null;
                            if (subscribers.length === 0) {
                                return;
                            }
                            listener.call(_this);
                            subscribers.shift();
                            if (subscribers.length === 0) {
                                return;
                            }
                            subscribers[0]();
                        }, false);
                    };
                    subscribers.push(subscriber);
                    if (subscribers.length === 1) {
                        subscriber();
                    }
                    return this;
                };
                return CssAnimation;
            })(BaseAnimation);
            animations.CssAnimation = CssAnimation;
            var JsAnimation = (function (_super) {
                __extends(JsAnimation, _super);
                function JsAnimation() {
                    _super.apply(this, arguments);
                    this.isJs = true;
                }
                return JsAnimation;
            })(BaseAnimation);
            animations.JsAnimation = JsAnimation;
            var SimpleCssAnimation = (function (_super) {
                __extends(SimpleCssAnimation, _super);
                function SimpleCssAnimation() {
                    _super.apply(this, arguments);
                    this.$Window = acquire(__Window);
                    this.className = __SimpleAnimation;
                }
                SimpleCssAnimation.prototype.initialize = function () {
                    var element = this.element, className = this.className, hasClassName = hasClass(element, className);
                    removeClass(element, className + ' ' + className + __END_SUFFIX);
                    if (hasClassName) {
                        postpone(addClass, [element, className]);
                        return;
                    }
                    addClass(element, className);
                };
                SimpleCssAnimation.prototype.start = function () {
                    var _this = this;
                    var animationId = this.$Compat.animationEvents.$animation, element = this.element, className = this.className, computedStyle = this.$Window.getComputedStyle(element, (this.options || {}).pseudo), animationName = computedStyle[(animationId + 'Name')];
                    if (animationName === '' || animationName === 'none' || computedStyle[(animationId + 'PlayState')] === 'paused') {
                        replaceClass(element, className, className + __END_SUFFIX);
                        this.end();
                        return;
                    }
                    this.animationEnd(function () {
                        replaceClass(element, className, className + __END_SUFFIX);
                        _this.end();
                    });
                };
                SimpleCssAnimation.prototype.cancel = function () {
                    var className = this.className;
                    replaceClass(this.element, className, className + __END_SUFFIX);
                };
                SimpleCssAnimation.prototype.dispose = function () {
                    var className = this.className;
                    removeClass(this.element, className + ' ' + className + __END_SUFFIX);
                };
                return SimpleCssAnimation;
            })(CssAnimation);
            animations.SimpleCssAnimation = SimpleCssAnimation;
            register.animation(__SimpleAnimation, SimpleCssAnimation);
            var FadeIn = (function (_super) {
                __extends(FadeIn, _super);
                function FadeIn() {
                    _super.apply(this, arguments);
                    this.className = __FadeIn;
                }
                return FadeIn;
            })(SimpleCssAnimation);
            animations.FadeIn = FadeIn;
            register.animation(__FadeIn, FadeIn);
            var FadeOut = (function (_super) {
                __extends(FadeOut, _super);
                function FadeOut() {
                    _super.apply(this, arguments);
                    this.className = __FadeOut;
                }
                return FadeOut;
            })(SimpleCssAnimation);
            animations.FadeOut = FadeOut;
            register.animation(__FadeOut, FadeOut);
            var Enter = (function (_super) {
                __extends(Enter, _super);
                function Enter() {
                    _super.apply(this, arguments);
                    this.className = __Enter;
                }
                return Enter;
            })(SimpleCssAnimation);
            animations.Enter = Enter;
            register.animation(__Enter, Enter);
            var Leave = (function (_super) {
                __extends(Leave, _super);
                function Leave() {
                    _super.apply(this, arguments);
                    this.className = __Leave;
                }
                return Leave;
            })(SimpleCssAnimation);
            animations.Leave = Leave;
            register.animation(__Leave, Leave);
            var SimpleCssTransition = (function (_super) {
                __extends(SimpleCssTransition, _super);
                function SimpleCssTransition() {
                    _super.apply(this, arguments);
                    this.$Window = acquire(__Window);
                    this.className = __SimpleTransition;
                    this._modifiedProperties = {};
                    this._started = false;
                }
                SimpleCssTransition.prototype.initialize = function () {
                    addClass(this.element, this.className);
                };
                SimpleCssTransition.prototype.start = function () {
                    var _this = this;
                    var transitionId = this.$Compat.animationEvents.$transition, element = this.element, endFn = function () {
                        removeClass(element, _this.className);
                        _this.end();
                    }, computedStyle = this.$Window.getComputedStyle(element, (this.options || {}).pseudo), transitionProperty = computedStyle[(transitionId + 'Property')], transitionDuration = computedStyle[(transitionId + 'Duration')];
                    this._started = true;
                    if (transitionProperty === '' || transitionProperty === 'none' || transitionDuration === '' || transitionDuration === '0s') {
                        this._animate();
                        endFn();
                        return;
                    }
                    this.transitionEnd(endFn);
                    if (this._animate()) {
                        return;
                    }
                    endFn();
                };
                SimpleCssTransition.prototype.cancel = function () {
                    removeClass(this.element, this.className);
                    if (this._started) {
                        return;
                    }
                    this._animate();
                };
                SimpleCssTransition.prototype.dispose = function () {
                    var style = this.element.style || {}, modifiedProperties = this._modifiedProperties, keys = Object.keys(modifiedProperties), key;
                    while (keys.length > 0) {
                        key = keys.pop();
                        style[key] = modifiedProperties[key];
                    }
                };
                SimpleCssTransition.prototype._animate = function () {
                    var style = this.element.style || {}, properties = (this.options || {}).properties || {}, keys = Object.keys(properties), length = keys.length, key, modifiedProperties = this._modifiedProperties, currentProperty, newProperty, unchanged = 0;
                    while (keys.length > 0) {
                        key = keys.shift();
                        currentProperty = style[key];
                        newProperty = properties[key];
                        if (!isString(newProperty)) {
                            unchanged++;
                            continue;
                        }
                        style[key] = newProperty;
                        if (currentProperty === style[key]) {
                            unchanged++;
                        }
                        else {
                            modifiedProperties[key] = currentProperty;
                        }
                    }
                    return unchanged < length;
                };
                return SimpleCssTransition;
            })(CssAnimation);
            animations.SimpleCssTransition = SimpleCssTransition;
            register.animation(__SimpleTransition, SimpleCssTransition);
        })(animations = ui.animations || (ui.animations = {}));
        var controls;
        (function (_controls) {
            var Baseport = (function (_super) {
                __extends(Baseport, _super);
                function Baseport(navigator) {
                    _super.call(this);
                    this.$ManagerCache = acquire(__ManagerCache);
                    this.$Document = acquire(__Document);
                    this.$ElementManagerFactory = acquire(__ElementManagerFactory);
                    this.$Animator = acquire(__Animator);
                    this.$Promise = acquire(__Promise);
                    this.navigator = navigator;
                }
                Baseport.prototype.setTemplate = function () {
                    clearNode(this.element);
                    this._load();
                };
                Baseport.prototype.dispose = function () {
                    this.navigator.dispose();
                };
                Baseport.prototype.navigateTo = function (ev) {
                    var control = ev.target, parameter = ev.parameter, options = ev.options, element = this.element, controlType = ev.type, newControl = dependency.Injector.isInjector(control), injectedControl = newControl ? control.inject() : control, replaceType = injectedControl.replaceWith, node = (isEmpty(replaceType) || replaceType === 'any') ? this.$Document.createElement('div') : this.$Document.createElement(replaceType), attributes = {}, nodeMap = {
                        element: node,
                        attributes: attributes,
                        nodes: [],
                        uiControlNode: {
                            control: injectedControl,
                            nodeName: controlType,
                            expressions: [],
                            injector: control,
                            childManagerLength: 0
                        }
                    };
                    node.setAttribute('plat-control', controlType);
                    node.className = 'plat-viewcontrol';
                    element.appendChild(node);
                    var animationPromise = this._animationPromise;
                    if (!isNull(animationPromise)) {
                        animationPromise.dispose();
                    }
                    this._animationPromise = this.$Animator.animate(this.element, __Enter);
                    var viewportManager = this.$ManagerCache.read(this.uid), manager = this.$ElementManagerFactory.getInstance(), navigator = this.navigator;
                    viewportManager.children = [];
                    manager.initialize(nodeMap, viewportManager, !newControl);
                    control = this.controls[0];
                    control.navigator = navigator;
                    navigator.navigated(control, parameter, options);
                    if (navigator.navigating) {
                        return;
                    }
                    manager.setUiControlTemplate();
                };
                Baseport.prototype.backButtonPressed = function () {
                    this.navigator.goBack();
                };
                Baseport.prototype.navigateFrom = function (fromControl) {
                    if (isNull(fromControl) || !isFunction(fromControl.navigatingFrom)) {
                        return this.$Animator.resolve();
                    }
                    fromControl.navigatingFrom();
                    var animationPromise = this._animationPromise;
                    if (!isNull(animationPromise)) {
                        animationPromise.dispose();
                    }
                    return (this._animationPromise = this.$Animator.animate(this.element, __Leave));
                };
                Baseport.prototype._load = function (navigationParameter, options) {
                    var navigator = this.navigator;
                    navigator.registerPort(this);
                    navigator.navigate(navigationParameter, options);
                };
                return Baseport;
            })(TemplateControl);
            _controls.Baseport = Baseport;
            var Viewport = (function (_super) {
                __extends(Viewport, _super);
                function Viewport() {
                    _super.apply(this, arguments);
                    this.$EventManagerStatic = plat.acquire(__EventManagerStatic);
                }
                Viewport.__addViewport = function (viewport) {
                    var ports = Viewport.__endViewports, control = viewport, type = viewport.type, index;
                    while (!isNull(control)) {
                        if (control.type === type) {
                            index = ports.indexOf(control);
                            if (index > -1) {
                                ports.splice(index, 1);
                            }
                        }
                        control = control.parent;
                    }
                    ports.push(viewport);
                };
                Viewport.prototype.backButtonPressed = function () {
                    var viewports = Viewport.__endViewports, length = viewports.length, viewport, child, sendEvent = this.$EventManagerStatic.sendEvent, ev = plat.acquire(__DispatchEventInstance);
                    ev.initialize(__backButtonPressed, this);
                    for (var i = 0; i < length; ++i) {
                        viewport = viewports[i];
                        child = viewport.controls[0];
                        if (isObject(child)) {
                            ev.sender = child;
                            sendEvent(ev);
                            if (ev.stopped) {
                                break;
                            }
                        }
                    }
                    if (!ev.stopped) {
                        _super.prototype.backButtonPressed.call(this);
                    }
                };
                Viewport.prototype._load = function () {
                    var $exception;
                    if (isNull(this.options)) {
                        $exception = acquire(__ExceptionStatic);
                        $exception.warn('No defaultView specified in plat-options for plat-viewport.', $exception.NAVIGATION);
                        return;
                    }
                    var options = this.options.value || {}, controlType = options.defaultView, injector = viewControlInjectors[controlType];
                    if (isNull(injector)) {
                        $exception = acquire(__ExceptionStatic);
                        $exception.fatal('The defaultView ' + controlType + ' is not a registered view control.', $exception.NAVIGATION);
                        return;
                    }
                    Viewport.__addViewport(this);
                    _super.prototype._load.call(this, injector);
                };
                Viewport.__endViewports = [];
                return Viewport;
            })(Baseport);
            _controls.Viewport = Viewport;
            register.control(__Viewport, Viewport, [__NavigatorInstance]);
            var Routeport = (function (_super) {
                __extends(Routeport, _super);
                function Routeport() {
                    _super.apply(this, arguments);
                }
                Routeport.prototype._load = function () {
                    var path = '', options = this.options;
                    if (!isNull(options) && !isNull(options.value)) {
                        path = options.value.defaultRoute || '';
                    }
                    _super.prototype._load.call(this, path, {
                        replace: true
                    });
                };
                return Routeport;
            })(Baseport);
            _controls.Routeport = Routeport;
            register.control(__Routeport, Routeport, [__RoutingNavigator]);
            var Template = (function (_super) {
                __extends(Template, _super);
                function Template() {
                    _super.call(this);
                    this.$Promise = acquire(__Promise);
                    this.$TemplateCache = acquire(__TemplateCache);
                    this.$Document = acquire(__Document);
                    this.replaceWith = null;
                    this.__isFirst = false;
                    var $cacheFactory = acquire(__CacheFactory);
                    this.__templateControlCache = $cacheFactory.create(__TemplateControlCache);
                }
                Template.prototype.initialize = function () {
                    var optionsObj = this.options || {}, options = optionsObj.value || {}, id = this._id = options.id;
                    if (isNull(id)) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.warn(this.type + ' instantiated without an id option', $exception.COMPILE);
                        return;
                    }
                    this._url = options.templateUrl;
                    var templatePromise = this.__templateControlCache.read(id);
                    if (!isNull(templatePromise)) {
                        this.__templatePromise = templatePromise;
                        return;
                    }
                    this.__isFirst = true;
                    this._initializeTemplate();
                };
                Template.prototype.loaded = function () {
                    if (!this.__isFirst) {
                        this._waitForTemplateControl(this.__templatePromise);
                    }
                };
                Template.prototype.dispose = function () {
                    if (this.__isFirst) {
                        var cache = this.__templateControlCache;
                        cache.remove(this._id);
                        if (cache.info().size === 0) {
                            cache.dispose();
                        }
                    }
                };
                Template.prototype._initializeTemplate = function () {
                    var _this = this;
                    var id = this._id;
                    if (isNull(id)) {
                        return;
                    }
                    var parentNode = this.endNode.parentNode, url = this._url, template;
                    if (!isNull(url)) {
                        template = this.$TemplateCache.read(url);
                        clearNodeBlock(this.elementNodes, parentNode);
                    }
                    else {
                        template = this.$Document.createDocumentFragment();
                        appendChildren(this.elementNodes, template);
                    }
                    var controlPromise;
                    if (isPromise(template)) {
                        controlPromise = template.catch(function (error) {
                            if (isNull(error)) {
                                return TemplateControl.determineTemplate(_this, url);
                            }
                        }).then(function (template) {
                            _this.bindableTemplates.add(id, template.cloneNode(true));
                            return _this;
                        });
                    }
                    else {
                        this.bindableTemplates.add(id, template.cloneNode(true));
                        controlPromise = this.$Promise.resolve(this);
                    }
                    this.__templateControlCache.put(id, controlPromise);
                };
                Template.prototype._waitForTemplateControl = function (templatePromise) {
                    var _this = this;
                    var $exception;
                    templatePromise.then(function (templateControl) {
                        if (!(isNull(_this._url) || (_this._url === templateControl._url))) {
                            $exception = acquire(__ExceptionStatic);
                            $exception.warn('The specified url: ' + _this._url + ' does not match the original ' + _this.type + ' with id: ' + '"' + _this._id + '". The original url will be loaded.', $exception.TEMPLATE);
                        }
                        _this.__mapBindableTemplates(templateControl);
                        return _this.bindableTemplates.bind(_this._id);
                    }).then(function (clone) {
                        var endNode = _this.endNode;
                        insertBefore(endNode.parentNode, clone, endNode);
                    }).catch(function (error) {
                        postpone(function () {
                            $exception = acquire(__ExceptionStatic);
                            $exception.warn('Problem resolving ' + _this.type + ' url: ' + error.response, $exception.TEMPLATE);
                        });
                    });
                };
                Template.prototype.__mapBindableTemplates = function (control) {
                    var bindableTemplates = this.bindableTemplates;
                    bindableTemplates.cache = control.bindableTemplates.cache;
                    bindableTemplates.templates = control.bindableTemplates.templates;
                };
                return Template;
            })(TemplateControl);
            _controls.Template = Template;
            register.control(__Template, Template);
            var Ignore = (function (_super) {
                __extends(Ignore, _super);
                function Ignore() {
                    _super.apply(this, arguments);
                }
                Ignore.prototype.setTemplate = function () {
                    this.innerTemplate = appendChildren(this.element.childNodes);
                };
                Ignore.prototype.loaded = function () {
                    this.element.appendChild(this.innerTemplate.cloneNode(true));
                };
                return Ignore;
            })(TemplateControl);
            _controls.Ignore = Ignore;
            register.control(__Ignore, Ignore);
            var ForEach = (function (_super) {
                __extends(ForEach, _super);
                function ForEach() {
                    var _this = this;
                    _super.call(this);
                    this.$Animator = acquire(__Animator);
                    this.$Promise = acquire(__Promise);
                    this.priority = 120;
                    this._aliases = {
                        index: __forEachAliasOptions.index,
                        even: __forEachAliasOptions.even,
                        odd: __forEachAliasOptions.odd,
                        first: __forEachAliasOptions.first,
                        last: __forEachAliasOptions.last
                    };
                    this._blockLength = 0;
                    this._currentAnimations = [];
                    this.__listenerSet = false;
                    this.itemsLoaded = new this.$Promise(function (resolve) {
                        _this.__resolveFn = resolve;
                    });
                }
                ForEach.prototype.setTemplate = function () {
                    var childNodes = Array.prototype.slice.call(this.element.childNodes);
                    this.bindableTemplates.add('item', childNodes);
                };
                ForEach.prototype.contextChanged = function (newValue, oldValue) {
                    if (!isArray(newValue)) {
                        var $exception = plat.acquire(__ExceptionStatic);
                        $exception.warn(this.type + ' context set to something other than an Array.', $exception.CONTEXT);
                        return;
                    }
                    this._setListener();
                    if (newValue.length === 0) {
                        this._removeItems(this.controls.length);
                        return;
                    }
                    this._setAliases();
                    this._executeEvent({
                        method: 'splice',
                        arguments: null,
                        returnValue: null,
                        oldArray: oldValue || [],
                        newArray: newValue || []
                    });
                };
                ForEach.prototype.loaded = function () {
                    var context = this.context;
                    if (!isArray(context)) {
                        if (!isNull(context)) {
                            var $exception = plat.acquire(__ExceptionStatic);
                            $exception.warn(this.type + ' context set to something other than an Array.', $exception.CONTEXT);
                        }
                        return;
                    }
                    this._setAliases();
                    this._addItems(context.length, 0);
                    this._setListener();
                };
                ForEach.prototype.dispose = function () {
                    this.__resolveFn = null;
                };
                ForEach.prototype._setAliases = function () {
                    var optionsObj = this.options || {}, options = optionsObj.value || {}, aliases = options.aliases;
                    if (!isObject(aliases)) {
                        return;
                    }
                    var _aliases = this._aliases, keys = Object.keys(_aliases), length = keys.length, value;
                    for (var i = 0; i < length; ++i) {
                        value = aliases[keys[i]];
                        if (isString(value)) {
                            _aliases[keys[i]] = value;
                        }
                    }
                };
                ForEach.prototype._addItems = function (numberOfItems, index, animate) {
                    var _this = this;
                    var context = this.context, max = +(index + numberOfItems);
                    if (!isArray(context) || !isNumber(max) || (context.length < max)) {
                        return;
                    }
                    var promises = [];
                    while (index < max) {
                        promises.push(this._bindItem(index++));
                    }
                    if (promises.length > 0) {
                        this.itemsLoaded = this.$Promise.all(promises).then(function (templates) {
                            _this._setBlockLength(templates);
                            if (animate === true) {
                                var length = templates.length;
                                for (var i = 0; i < length; ++i) {
                                    _this._appendAnimatedItem(templates[i], __Enter);
                                }
                            }
                            else {
                                _this._appendItems(templates);
                            }
                            if (isFunction(_this.__resolveFn)) {
                                _this.__resolveFn();
                                _this.__resolveFn = null;
                            }
                        }).catch(function (error) {
                            postpone(function () {
                                var $exception = acquire(__ExceptionStatic);
                                $exception.warn(error, $exception.BIND);
                            });
                        });
                    }
                    else {
                        if (isFunction(this.__resolveFn)) {
                            this.__resolveFn();
                            this.__resolveFn = null;
                        }
                        this.itemsLoaded = new this.$Promise(function (resolve) {
                            _this.__resolveFn = resolve;
                        });
                    }
                    return this.itemsLoaded;
                };
                ForEach.prototype._appendItems = function (items) {
                    appendChildren(items, this.element);
                };
                ForEach.prototype._appendAnimatedItem = function (item, key) {
                    if (!isNode(item)) {
                        return;
                    }
                    var $animator = this.$Animator, childNodes = Array.prototype.slice.call(item.childNodes), childNode;
                    insertBefore(this.element, item);
                    var currentAnimations = this._currentAnimations;
                    while (childNodes.length > 0) {
                        childNode = childNodes.shift();
                        if (childNode.nodeType === Node.ELEMENT_NODE) {
                            currentAnimations.push($animator.animate(childNode, key).then(function () {
                                currentAnimations.shift();
                            }));
                        }
                    }
                };
                ForEach.prototype._removeItems = function (numberOfItems) {
                    for (var i = 0; i < numberOfItems; ++i) {
                        this._removeItem();
                    }
                    if (this.controls.length > 0) {
                        this._updateResources();
                    }
                };
                ForEach.prototype._removeItem = function () {
                    var controls = this.controls, length = controls.length - 1;
                    TemplateControl.dispose(controls[length]);
                };
                ForEach.prototype._bindItem = function (index) {
                    return this.bindableTemplates.bind('item', index, this._getAliases(index));
                };
                ForEach.prototype._setBlockLength = function (templates) {
                    if (this._blockLength > 0 || templates.length === 0) {
                        return;
                    }
                    this._blockLength = templates[0].childNodes.length;
                };
                ForEach.prototype._updateResources = function () {
                    var controls = this.controls, length = controls.length;
                    for (var i = 0; i < length; ++i) {
                        controls[i].resources.add(this._getAliases(i));
                    }
                };
                ForEach.prototype._setListener = function () {
                    if (!this.__listenerSet) {
                        this.observeArray(this, __CONTEXT, this._preprocessEvent, this._executeEvent);
                        this.__listenerSet = true;
                    }
                };
                ForEach.prototype._preprocessEvent = function (ev) {
                    var method = '_pre' + ev.method;
                    if (isFunction(this[method])) {
                        this[method](ev);
                    }
                };
                ForEach.prototype._executeEvent = function (ev) {
                    var method = '_' + ev.method;
                    if (isFunction(this[method])) {
                        this[method](ev);
                    }
                };
                ForEach.prototype._getAliases = function (index) {
                    var isEven = (index & 1) === 0, aliases = {}, _aliases = this._aliases, type = __OBSERVABLE_RESOURCE;
                    aliases[_aliases.index] = {
                        value: index,
                        type: type
                    };
                    aliases[_aliases.even] = {
                        value: isEven,
                        type: type
                    };
                    aliases[_aliases.odd] = {
                        value: !isEven,
                        type: type
                    };
                    aliases[_aliases.first] = {
                        value: index === 0,
                        type: type
                    };
                    aliases[_aliases.last] = {
                        value: index === (this.context.length - 1),
                        type: type
                    };
                    return aliases;
                };
                ForEach.prototype._push = function (ev) {
                    this._addItems(ev.arguments.length, ev.oldArray.length, true);
                };
                ForEach.prototype._pop = function (ev) {
                    var _this = this;
                    this._animateItems(ev.newArray.length, 1, __Leave).then(function () {
                        _this._removeItems(1);
                    });
                };
                ForEach.prototype._preshift = function (ev) {
                    this._animateItems(0, 1, __Leave, true);
                };
                ForEach.prototype._shift = function (ev) {
                    this._removeItems(1);
                };
                ForEach.prototype._presplice = function (ev) {
                    var arguments = ev.arguments, addCount = arguments.length - 2, deleteCount = arguments[1];
                    if (addCount >= deleteCount) {
                        this._animateItems(arguments[0], addCount, __Enter);
                        return;
                    }
                    this._animateItems(arguments[0], deleteCount, __Leave, true);
                };
                ForEach.prototype._splice = function (ev) {
                    var oldLength = this.controls.length, newLength = ev.newArray.length;
                    if (newLength > oldLength) {
                        this._addItems(newLength - oldLength, oldLength);
                    }
                    else if (oldLength > newLength) {
                        this._removeItems(oldLength - newLength);
                    }
                };
                ForEach.prototype._preunshift = function (ev) {
                    this._animateItems(0, 1, __Enter);
                };
                ForEach.prototype._unshift = function (ev) {
                    this._addItems(ev.arguments.length, ev.oldArray.length);
                };
                ForEach.prototype._sort = function (ev) {
                };
                ForEach.prototype._reverse = function (ev) {
                };
                ForEach.prototype._animateItems = function (startIndex, numberOfItems, key, clone, cancel) {
                    var blockLength = this._blockLength;
                    if (blockLength === 0) {
                        return this.$Promise.resolve();
                    }
                    var start = startIndex * blockLength;
                    return this._initiateAnimation(start, numberOfItems * blockLength + start, key, clone, cancel);
                };
                ForEach.prototype._initiateAnimation = function (startNode, endNode, key, clone, cancel) {
                    var _this = this;
                    var animationPromises = [], currentAnimations = this._currentAnimations, length = currentAnimations.length;
                    if (length === 0 || cancel === false) {
                        return this.__handleAnimation(startNode, endNode, key, clone);
                    }
                    while (length-- > 0) {
                        animationPromises.push(currentAnimations[length].cancel());
                    }
                    return this.$Promise.all(animationPromises).then(function () {
                        return _this.__handleAnimation(startNode, endNode, key, clone);
                    });
                };
                ForEach.prototype.__handleAnimation = function (startNode, endNode, key, clone) {
                    var element = this.element, nodes = Array.prototype.slice.call(element.childNodes, startNode, endNode), node, firstNode = nodes[0], $animator = this.$Animator, currentAnimations = this._currentAnimations, callback, animationPromise;
                    clone = clone === true;
                    while (nodes.length > 0) {
                        node = nodes.shift();
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (clone) {
                                node = node.cloneNode(true);
                                element.insertBefore(node, firstNode);
                                callback = function () {
                                    currentAnimations.shift();
                                    element.removeChild(this);
                                }.bind(node);
                            }
                            else {
                                callback = function () {
                                    currentAnimations.shift();
                                };
                            }
                            animationPromise = $animator.animate(node, key).then(callback);
                            currentAnimations.push(animationPromise);
                        }
                    }
                    return animationPromise;
                };
                return ForEach;
            })(TemplateControl);
            _controls.ForEach = ForEach;
            register.control(__ForEach, ForEach);
            var Html = (function (_super) {
                __extends(Html, _super);
                function Html() {
                    _super.apply(this, arguments);
                }
                Html.prototype.contextChanged = function () {
                    this.loaded();
                };
                Html.prototype.loaded = function () {
                    var context = this.context;
                    if (!isString(context)) {
                        return;
                    }
                    setInnerHtml(this.element, context);
                };
                return Html;
            })(TemplateControl);
            _controls.Html = Html;
            register.control(__Html, Html);
            var Select = (function (_super) {
                __extends(Select, _super);
                function Select() {
                    var _this = this;
                    _super.call(this);
                    this.$Promise = acquire(__Promise);
                    this.$Document = acquire(__Document);
                    this.replaceWith = 'select';
                    this.priority = 120;
                    this.groups = {};
                    this.__isGrouped = false;
                    this.__isNativeSelect = false;
                    this.itemsLoaded = new this.$Promise(function (resolve) {
                        _this.__resolveFn = resolve;
                    });
                }
                Select.prototype.setTemplate = function () {
                    var $document = this.$Document, options = this.options || {}, platOptions = options.value || {}, option = $document.createElement('option'), value = platOptions.value, textContent = platOptions.textContent;
                    if (isUndefined(value) && isUndefined(textContent)) {
                        this.__isNativeSelect = true;
                        return;
                    }
                    if (!isNull(platOptions.group)) {
                        var group = this.__group = platOptions.group, optionGroup = $document.createElement('optgroup');
                        optionGroup.label = __startSymbol + group + __endSymbol;
                        this.bindableTemplates.add('group', optionGroup);
                    }
                    if (!isString(value) || isEmpty(value)) {
                        value = undefined;
                    }
                    if (!isString(textContent) || isEmpty(textContent)) {
                        textContent = undefined;
                    }
                    option.value = __startSymbol + (value || textContent) + __endSymbol;
                    option.textContent = __startSymbol + (textContent || value) + __endSymbol;
                    this.bindableTemplates.add('option', option);
                };
                Select.prototype.contextChanged = function (newValue, oldValue) {
                    if (this.__isNativeSelect || !isArray(newValue)) {
                        return;
                    }
                    var newLength = isArray(newValue) ? newValue.length : 0, oldLength = isArray(oldValue) ? oldValue.length : 0;
                    this._setListener();
                    if (newLength > oldLength) {
                        this._addItems(newLength - oldLength, oldLength);
                    }
                    else if (newLength < oldLength) {
                        this._removeItems(oldLength - newLength);
                    }
                };
                Select.prototype.loaded = function () {
                    if (this.__isNativeSelect) {
                        return;
                    }
                    var options = this.options || {}, platOptions = options.value || {};
                    if (isUndefined(platOptions.value) && isUndefined(platOptions.textContent)) {
                        this.__isNativeSelect = true;
                        return;
                    }
                    var context = this.context, element = this.element, firstElementChild = element.firstElementChild;
                    if (isNode(firstElementChild) && firstElementChild.nodeName.toLowerCase() === 'option') {
                        this.__defaultOption = firstElementChild.cloneNode(true);
                    }
                    this.__isGrouped = !isNull((this.__group = platOptions.group));
                    if (!isArray(context)) {
                        return;
                    }
                    this._addItems(context.length, 0);
                    this._setListener();
                };
                Select.prototype.dispose = function () {
                    this.__resolveFn = null;
                    this.__defaultOption = null;
                };
                Select.prototype._setListener = function () {
                    if (!this.__listenerSet) {
                        this.observeArray(this, __CONTEXT, null, this._executeEvent);
                        this.__listenerSet = true;
                    }
                };
                Select.prototype._executeEvent = function (ev) {
                    var method = '_' + ev.method;
                    if (isFunction(this[method])) {
                        this[method](ev);
                    }
                };
                Select.prototype._addItems = function (numberOfItems, length) {
                    var _this = this;
                    var index = length, item, bindableTemplates = this.bindableTemplates, promises = [];
                    for (var i = 0; i < numberOfItems; ++i, ++index) {
                        item = this.context[index];
                        promises.push(bindableTemplates.bind('option', index).then(this._insertOptions.bind(this, index, item)));
                    }
                    if (promises.length > 0) {
                        this.itemsLoaded = this.$Promise.all(promises).then(function () {
                            if (isFunction(_this.__resolveFn)) {
                                _this.__resolveFn();
                                _this.__resolveFn = null;
                            }
                            return;
                        });
                    }
                    else {
                        if (isFunction(this.__resolveFn)) {
                            this.__resolveFn();
                            this.__resolveFn = null;
                        }
                        this.itemsLoaded = new this.$Promise(function (resolve) {
                            _this.__resolveFn = resolve;
                        });
                    }
                    return this.itemsLoaded;
                };
                Select.prototype._insertOptions = function (index, item, optionClone) {
                    var element = this.element;
                    if (this.__isGrouped) {
                        var groups = this.groups, newGroup = item[this.__group], optgroup = groups[newGroup];
                        if (isNull(optgroup)) {
                            return (groups[newGroup] = this.bindableTemplates.bind('group', index).then(function (groupClone) {
                                optgroup = groups[newGroup] = groupClone.childNodes[1];
                                optgroup.appendChild(optionClone);
                                element.appendChild(groupClone);
                                return optgroup;
                            }));
                        }
                        else if (isPromise(optgroup)) {
                            return optgroup.then(function (group) {
                                group.appendChild(optionClone);
                                return group;
                            });
                        }
                        optgroup.appendChild(optionClone);
                        return this.$Promise.resolve(null);
                    }
                    element.appendChild(optionClone);
                    return this.$Promise.resolve(null);
                };
                Select.prototype._removeItem = function (index) {
                    if (index < 0) {
                        return;
                    }
                    TemplateControl.dispose(this.controls[index]);
                };
                Select.prototype._removeItems = function (numberOfItems) {
                    var controls = this.controls, length = controls.length - 1;
                    while (numberOfItems-- > 0) {
                        this._removeItem(length--);
                    }
                };
                Select.prototype._itemRemoved = function (ev) {
                    if (ev.oldArray.length === 0) {
                        return;
                    }
                    else if (this.__isGrouped) {
                        this._resetSelect();
                        return;
                    }
                    this._removeItems(1);
                };
                Select.prototype._resetSelect = function () {
                    var itemLength = this.context.length, element = this.element, nodeLength = element.childNodes.length;
                    this._removeItems(nodeLength);
                    this.groups = {};
                    if (!isNull(this.__defaultOption)) {
                        element.appendChild(this.__defaultOption.cloneNode(true));
                    }
                    this._addItems(itemLength, 0);
                };
                Select.prototype._push = function (ev) {
                    this._addItems(ev.arguments.length, ev.oldArray.length);
                };
                Select.prototype._pop = function (ev) {
                    this._itemRemoved(ev);
                };
                Select.prototype._shift = function (ev) {
                    this._itemRemoved(ev);
                };
                Select.prototype._splice = function (ev) {
                    if (this.__isGrouped) {
                        this._resetSelect();
                        return;
                    }
                    var oldLength = ev.oldArray.length, newLength = ev.newArray.length;
                    if (newLength > oldLength) {
                        this._addItems(newLength - oldLength, oldLength);
                    }
                    else if (oldLength > newLength) {
                        this._removeItems(oldLength - newLength);
                    }
                };
                Select.prototype._unshift = function (ev) {
                    if (this.__isGrouped) {
                        this._resetSelect();
                        return;
                    }
                    this._addItems(ev.arguments.length, ev.oldArray.length);
                };
                Select.prototype._sort = function (ev) {
                    if (this.__isGrouped) {
                        this._resetSelect();
                    }
                };
                Select.prototype._reverse = function (ev) {
                    if (this.__isGrouped) {
                        this._resetSelect();
                    }
                };
                return Select;
            })(TemplateControl);
            _controls.Select = Select;
            register.control(__Select, Select);
            var If = (function (_super) {
                __extends(If, _super);
                function If() {
                    _super.call(this);
                    this.$Animator = acquire(__Animator);
                    this.$Promise = acquire(__Promise);
                    this.__condition = true;
                    this.__firstTime = true;
                    var $document = acquire(__Document);
                    this.commentNode = $document.createComment('plat-if' + __BOUND_PREFIX + 'placeholder');
                }
                If.prototype.contextChanged = function () {
                    var options = this.options.value;
                    if (isEmpty(options)) {
                        return;
                    }
                    return this._setter(options);
                };
                If.prototype.setTemplate = function () {
                    var childNodes = Array.prototype.slice.call(this.element.childNodes);
                    this.bindableTemplates.add('template', childNodes);
                };
                If.prototype.loaded = function () {
                    if (isNull(this.options)) {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.warn('No condition specified in plat-options for plat-if.', $exception.BIND);
                        this.options = {
                            value: {
                                condition: true
                            },
                            observe: noop
                        };
                    }
                    var promise = this.contextChanged();
                    this.__removeListener = this.options.observe(this._setter);
                    return promise;
                };
                If.prototype.dispose = function () {
                    if (isFunction(this.__removeListener)) {
                        this.__removeListener();
                        this.__removeListener = null;
                    }
                    this.commentNode = null;
                    this.fragmentStore = null;
                };
                If.prototype._setter = function (options) {
                    var _this = this;
                    var value = !!options.condition, promise;
                    if (value === this.__condition && !this.__firstTime) {
                        return this.$Promise.resolve(null);
                    }
                    if (value) {
                        if (!isNull(this.__leaveAnimation)) {
                            promise = this.__leaveAnimation.cancel().then(function () {
                                _this.__leaveAnimation = null;
                                return _this._addItem();
                            });
                        }
                        else {
                            promise = this._addItem();
                        }
                    }
                    else {
                        if (!isNull(this.__enterAnimation)) {
                            promise = this.__enterAnimation.cancel().then(function () {
                                _this.__enterAnimation = null;
                                return _this._removeItem();
                            });
                        }
                        else {
                            this._removeItem();
                            promise = this.$Promise.resolve(null);
                        }
                    }
                    this.__condition = value;
                    return promise;
                };
                If.prototype._addItem = function () {
                    var _this = this;
                    if (!isNode(this.commentNode.parentNode) && !this.__firstTime) {
                        return this.$Promise.resolve(null);
                    }
                    if (this.__firstTime) {
                        this.__firstTime = false;
                        this.__initialBind = this.bindableTemplates.bind('template').then(function (template) {
                            var element = _this.element;
                            element.appendChild(template);
                            _this.__initialBind = null;
                            if (element.parentNode === _this.fragmentStore) {
                                return _this._animateEntrance();
                            }
                            return _this.__enterAnimation = _this.$Animator.animate(element, __Enter);
                        }).then(function () {
                            _this.__enterAnimation = null;
                        });
                        return this.__initialBind;
                    }
                    if (isPromise(this.__initialBind)) {
                        return this.__initialBind.then(function () {
                            return _this._animateEntrance();
                        });
                    }
                    return this._animateEntrance();
                };
                If.prototype._animateEntrance = function () {
                    var _this = this;
                    var commentNode = this.commentNode, parentNode = commentNode.parentNode;
                    parentNode.replaceChild(this.fragmentStore, commentNode);
                    return this.__enterAnimation = this.$Animator.animate(this.element, __Enter).then(function () {
                        _this.__enterAnimation = null;
                    });
                };
                If.prototype._removeItem = function () {
                    var _this = this;
                    if (isPromise(this.__initialBind)) {
                        return this.__initialBind.then(function () {
                            return _this._animateLeave();
                        });
                    }
                    return this._animateLeave();
                };
                If.prototype._animateLeave = function () {
                    var _this = this;
                    var element = this.element;
                    return this.__leaveAnimation = this.$Animator.animate(element, __Leave).then(function () {
                        _this.__leaveAnimation = null;
                        element.parentNode.insertBefore(_this.commentNode, element);
                        if (!isDocumentFragment(_this.fragmentStore)) {
                            var $document = plat.acquire(__Document);
                            _this.fragmentStore = $document.createDocumentFragment();
                        }
                        insertBefore(_this.fragmentStore, element);
                    });
                };
                return If;
            })(TemplateControl);
            _controls.If = If;
            register.control(__If, If);
            var Link = (function (_super) {
                __extends(Link, _super);
                function Link() {
                    _super.apply(this, arguments);
                    this.replaceWith = 'a';
                    this.removeClickListener = noop;
                    this.$browserConfig = acquire(__BrowserConfig);
                    this.$browser = acquire(__Browser);
                }
                Link.prototype.initialize = function () {
                    var _this = this;
                    var element = this.element;
                    this.removeClickListener = this.addEventListener(element, 'click', function (ev) {
                        ev.preventDefault();
                        _this.removeClickListener();
                    });
                    this.addEventListener(element, __tap, function (ev) {
                        var href = _this.getHref();
                        if (isUndefined(href)) {
                            return;
                        }
                        ev.preventDefault();
                        if (isEmpty(href)) {
                            return;
                        }
                        _this.$browser.url(href);
                        _this.removeClickListener();
                        element.addEventListener('click', _this.getListener(element));
                    }, false);
                };
                Link.prototype.getListener = function (element) {
                    var _this = this;
                    var listener = function (ev) {
                        ev.preventDefault();
                        _this.removeClickListener();
                        cancel();
                        element.removeEventListener('click', listener);
                    };
                    var cancel = defer(function () {
                        element.removeEventListener('click', listener);
                    }, 3000);
                    return listener;
                };
                Link.prototype.loaded = function () {
                    this.setHref();
                };
                Link.prototype.setHref = function () {
                    var options = this.options;
                    if (isObject(options) && options.value.ignore) {
                        return;
                    }
                    var href = this.getHref();
                    if (!isEmpty(href)) {
                        this.element.href = href;
                    }
                };
                Link.prototype.getHref = function () {
                    var options = this.options;
                    if (isObject(options) && options.value.ignore) {
                        return;
                    }
                    var element = this.element, href = element.href || '', $browserConfig = this.$browserConfig, baseUrl = $browserConfig.baseUrl.slice(0, -1), routingType = $browserConfig.routingType, usingHash = routingType !== $browserConfig.STATE, prefix = $browserConfig.hashPrefix;
                    if (isEmpty(href) || href.indexOf(baseUrl) === -1) {
                        return href;
                    }
                    var urlWithHash = baseUrl + '/#';
                    if (usingHash && href.indexOf('#') === -1) {
                        href = urlWithHash + prefix + href.replace(baseUrl, '');
                    }
                    else if (!usingHash && href.indexOf(urlWithHash) > -1 && href !== urlWithHash) {
                        href = baseUrl + href.replace(baseUrl, '').slice(2 + prefix.length);
                    }
                    return href;
                };
                return Link;
            })(TemplateControl);
            _controls.Link = Link;
            register.control(__Link, Link);
        })(controls = ui.controls || (ui.controls = {}));
    })(ui = _plat.ui || (_plat.ui = {}));
    var processing;
    (function (processing) {
        var Compiler = (function () {
            function Compiler() {
                this.$ElementManagerFactory = acquire(__ElementManagerFactory);
                this.$TextManagerFactory = acquire(__TextManagerFactory);
                this.$CommentManagerFactory = acquire(__CommentManagerFactory);
                this.$ManagerCache = acquire(__ManagerCache);
            }
            Compiler.prototype.compile = function (node, control) {
                var childNodes = node.childNodes, length, newLength, childNode, hasControl = !isNull(control), manager = (hasControl ? this.$ManagerCache.read(control.uid) : null), create = this.$ElementManagerFactory.create;
                if (!isUndefined(childNodes)) {
                    childNodes = Array.prototype.slice.call(childNodes);
                }
                else if (isFunction(node.push)) {
                    childNodes = node;
                }
                else {
                    childNodes = Array.prototype.slice.call(node);
                }
                if (isNull(manager)) {
                    length = childNodes.length;
                    for (var i = 0; i < length; ++i) {
                        childNode = childNodes[i];
                        if (childNode.nodeType === Node.ELEMENT_NODE) {
                            if (!isNull(create(childNode))) {
                                this.compile(childNode);
                            }
                        }
                        newLength = childNodes.length;
                        i += newLength - length;
                        length = newLength;
                    }
                }
                else {
                    this._compileNodes(childNodes, manager);
                }
            };
            Compiler.prototype._compileNodes = function (nodes, manager) {
                var length = nodes.length, node, newManager, newLength, create = this.$ElementManagerFactory.create, commentCreate = this.$CommentManagerFactory.create, textCreate = this.$TextManagerFactory.create;
                for (var i = 0; i < length; ++i) {
                    node = nodes[i];
                    switch (node.nodeType) {
                        case Node.ELEMENT_NODE:
                            newManager = create(node, manager);
                            if (!isNull(newManager)) {
                                this._compileNodes(Array.prototype.slice.call(node.childNodes), newManager);
                            }
                            break;
                        case Node.TEXT_NODE:
                            textCreate(node, manager);
                            break;
                        case Node.COMMENT_NODE:
                            commentCreate(node, manager);
                            break;
                    }
                    newLength = nodes.length;
                    i += newLength - length;
                    length = newLength;
                }
            };
            return Compiler;
        })();
        processing.Compiler = Compiler;
        function ICompiler() {
            return new Compiler();
        }
        processing.ICompiler = ICompiler;
        register.injectable(__Compiler, ICompiler);
        var NodeManager = (function () {
            function NodeManager() {
                this.isClone = false;
            }
            NodeManager.hasMarkup = function (text) {
                return NodeManager._markupRegex.test(text);
            };
            NodeManager.findMarkup = function (text) {
                var start, end, parsedExpressions = [], wrapExpression = NodeManager._wrapExpression, substring, expression, $parser = NodeManager.$Parser;
                text = text.replace(NodeManager._newLineRegex, '');
                while ((start = text.indexOf(__startSymbol)) !== -1 && (end = text.indexOf(__endSymbol)) !== -1) {
                    if (start !== 0) {
                        parsedExpressions.push(wrapExpression(text.slice(0, start)));
                    }
                    while (text[++end] === '}') {
                    }
                    substring = text.slice(start + 2, end - 2);
                    if (substring[0] === '=') {
                        expression = $parser.parse(substring.slice(1).trim());
                        expression.oneTime = true;
                        parsedExpressions.push(expression);
                    }
                    else {
                        parsedExpressions.push($parser.parse(substring.trim()));
                    }
                    text = text.slice(end);
                }
                if (start > -1 && end >= 0) {
                    parsedExpressions.push(wrapExpression(text.slice(end)));
                }
                else if (text !== '') {
                    parsedExpressions.push(wrapExpression(text));
                }
                return parsedExpressions;
            };
            NodeManager.build = function (expressions, control) {
                var text = '', length = expressions.length, resources = {}, expression, value, evaluateExpression = NodeManager.$TemplateControlFactory.evaluateExpression;
                for (var i = 0; i < length; ++i) {
                    expression = expressions[i];
                    value = evaluateExpression(expression, control, resources);
                    if (isObject(value)) {
                        try {
                            text += JSON.stringify(value, null, 4);
                        }
                        catch (e) {
                            if (!isNull(e.description)) {
                                e.description = 'Cannot stringify object: ' + e.description;
                            }
                            e.message = 'Cannot stringify object: ' + e.message;
                            var $exception = acquire(__ExceptionStatic);
                            $exception.warn(e, $exception.PARSE);
                        }
                    }
                    else if (!isNull(value)) {
                        text += value;
                    }
                    if (expression.oneTime && !isUndefined(value)) {
                        expressions[i] = NodeManager._wrapExpression(value);
                    }
                }
                return text;
            };
            NodeManager.observeExpressions = function (expressions, control, listener) {
                var uniqueIdentiifers = NodeManager.__findUniqueIdentifiers(expressions), identifiers = uniqueIdentiifers.identifiers, oneTimeIdentifiers = uniqueIdentiifers.oneTimeIdentifiers, oneTimeIdentifier, observableCallback = {
                    listener: listener,
                    uid: control.uid
                }, observationDetails, manager, absoluteIdentifier, stopObserving, stopListening;
                while (identifiers.length > 0) {
                    observationDetails = NodeManager.__getObservationDetails(identifiers.pop(), control);
                    manager = observationDetails.manager;
                    if (!isNull(manager)) {
                        manager.observe(observationDetails.absoluteIdentifier, observableCallback);
                    }
                }
                while (oneTimeIdentifiers.length > 0) {
                    oneTimeIdentifier = oneTimeIdentifiers.pop();
                    observationDetails = NodeManager.__getObservationDetails(oneTimeIdentifier, control);
                    manager = observationDetails.manager;
                    if (!(isNull(manager) || observationDetails.isDefined)) {
                        absoluteIdentifier = observationDetails.absoluteIdentifier;
                        stopObserving = manager.observe(absoluteIdentifier, observableCallback);
                        stopListening = manager.observe(absoluteIdentifier, {
                            uid: control.uid,
                            listener: function () {
                                stopObserving();
                                stopListening();
                            }
                        });
                    }
                }
            };
            NodeManager._wrapExpression = function (text) {
                return {
                    evaluate: function () { return text; },
                    identifiers: [],
                    aliases: [],
                    expression: text
                };
            };
            NodeManager.__findUniqueIdentifiers = function (expressions) {
                var length = expressions.length, expression;
                if (length === 1) {
                    expression = expressions[0];
                    if (expression.oneTime) {
                        return {
                            identifiers: [],
                            oneTimeIdentifiers: expression.identifiers.slice(0)
                        };
                    }
                    return {
                        identifiers: expression.identifiers.slice(0),
                        oneTimeIdentifiers: []
                    };
                }
                var uniqueIdentifierObject = {}, oneTimeIdentifierObject = {}, uniqueIdentifiers = [], oneTimeIdentifiers = [], identifiers, identifier, j, jLength, oneTime;
                for (var i = 0; i < length; ++i) {
                    expression = expressions[i];
                    oneTime = expression.oneTime;
                    identifiers = expression.identifiers;
                    jLength = identifiers.length;
                    for (j = 0; j < jLength; ++j) {
                        identifier = identifiers[j];
                        if (oneTime) {
                            if (uniqueIdentifierObject[identifier] === true) {
                                continue;
                            }
                            if (!oneTimeIdentifierObject[identifier]) {
                                oneTimeIdentifierObject[identifier] = true;
                                oneTimeIdentifiers.push(identifier);
                            }
                        }
                        else {
                            if (!uniqueIdentifierObject[identifier]) {
                                uniqueIdentifierObject[identifier] = true;
                                uniqueIdentifiers.push(identifier);
                            }
                            if (oneTimeIdentifierObject[identifier] === true) {
                                oneTimeIdentifierObject[identifier] = false;
                                oneTimeIdentifiers.splice(oneTimeIdentifiers.indexOf(identifier), 1);
                            }
                        }
                    }
                }
                return {
                    identifiers: uniqueIdentifiers,
                    oneTimeIdentifiers: oneTimeIdentifiers
                };
            };
            NodeManager.__getObservationDetails = function (identifier, control) {
                var $contextManager = NodeManager.$ContextManagerStatic, manager, split = identifier.split('.'), absoluteIdentifier = '', isDefined = false;
                if (identifier[0] === '@') {
                    var resourceObj, resources = {}, alias = split.shift().slice(1);
                    if (split.length > 0) {
                        absoluteIdentifier = '.' + split.join('.');
                    }
                    resourceObj = resources[alias];
                    if (isNull(resourceObj)) {
                        resourceObj = resources[alias] = control.findResource(alias);
                    }
                    if (!isNull(resourceObj) && !isNull(resourceObj.resource) && resourceObj.resource.type === __OBSERVABLE_RESOURCE) {
                        manager = $contextManager.getManager(resources[alias].control);
                        absoluteIdentifier = 'resources.' + alias + '.value' + absoluteIdentifier;
                    }
                }
                else {
                    isDefined = !isUndefined($contextManager.getContext(control.context, split));
                    if (isDefined || isUndefined($contextManager.getContext(control, split))) {
                        manager = $contextManager.getManager(Control.getRootControl(control));
                        absoluteIdentifier = control.absoluteContextPath + '.' + identifier;
                    }
                    else {
                        manager = null;
                    }
                }
                return {
                    absoluteIdentifier: absoluteIdentifier,
                    manager: manager,
                    isDefined: isDefined
                };
            };
            NodeManager.prototype.initialize = function (nodeMap, parent) {
                this.nodeMap = nodeMap;
                this.parent = parent;
                if (!isNull(parent)) {
                    this.isClone = parent.isClone;
                    parent.children.push(this);
                }
            };
            NodeManager.prototype.getParentControl = function () {
                var parent = this.parent, control;
                while (isNull(control)) {
                    if (isNull(parent)) {
                        break;
                    }
                    control = parent.getUiControl();
                    parent = parent.parent;
                }
                return control;
            };
            NodeManager.prototype.clone = function (newNode, parentManager) {
                return 1;
            };
            NodeManager.prototype.bind = function () {
            };
            return NodeManager;
        })();
        processing.NodeManager = NodeManager;
        function INodeManagerStatic($Regex, $ContextManagerStatic, $Parser, $TemplateControlFactory) {
            NodeManager._markupRegex = $Regex.markupRegex;
            NodeManager._newLineRegex = $Regex.newLineRegex;
            NodeManager.$ContextManagerStatic = $ContextManagerStatic;
            NodeManager.$Parser = $Parser;
            NodeManager.$TemplateControlFactory = $TemplateControlFactory;
            return NodeManager;
        }
        processing.INodeManagerStatic = INodeManagerStatic;
        register.injectable(__NodeManagerStatic, INodeManagerStatic, [
            __Regex,
            __ContextManagerStatic,
            __Parser,
            __TemplateControlFactory
        ], __STATIC);
        var ElementManager = (function (_super) {
            __extends(ElementManager, _super);
            function ElementManager() {
                _super.apply(this, arguments);
                this.$Promise = acquire(__Promise);
                this.$Compiler = acquire(__Compiler);
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                this.$CommentManagerFactory = acquire(__CommentManagerFactory);
                this.$ControlFactory = acquire(__ControlFactory);
                this.$TemplateControlFactory = acquire(__TemplateControlFactory);
                this.$BindableTemplatesFactory = acquire(__BindableTemplatesFactory);
                this.children = [];
                this.type = 'element';
                this.replace = false;
                this.hasOwnContext = false;
            }
            ElementManager.create = function (element, parent) {
                var name = element.nodeName.toLowerCase(), nodeName = name, injector = controlInjectors[name] || viewControlInjectors[name], noControlAttribute = true, hasUiControl = false, uiControlNode;
                if (isNull(injector)) {
                    if (element.hasAttribute('plat-control')) {
                        name = element.getAttribute('plat-control').toLowerCase();
                        injector = controlInjectors[name] || viewControlInjectors[name];
                        noControlAttribute = false;
                    }
                    else if (element.hasAttribute('data-plat-control')) {
                        name = element.getAttribute('data-plat-control').toLowerCase();
                        injector = controlInjectors[name] || viewControlInjectors[name];
                        noControlAttribute = false;
                    }
                }
                if (!isNull(injector)) {
                    var uiControl = injector.inject(), resourceElement = ElementManager.locateResources(element);
                    uiControlNode = {
                        control: uiControl,
                        resourceElement: resourceElement,
                        nodeName: name,
                        expressions: [],
                        injector: injector
                    };
                    hasUiControl = true;
                    if (noControlAttribute) {
                        element.setAttribute('plat-control', name);
                    }
                    var replacementType = uiControl.replaceWith, replaceWithDiv = replacementType === 'any' && noControlAttribute;
                    if (!isEmpty(replacementType) && (replacementType !== 'any' || replaceWithDiv) && replacementType.toLowerCase() !== nodeName) {
                        if (replaceWithDiv) {
                            replacementType = 'div';
                        }
                        var replacement = ElementManager.$Document.createElement(replacementType);
                        if (replacement.nodeType === Node.ELEMENT_NODE) {
                            element = replaceWith(element, replacement.cloneNode(true));
                        }
                    }
                }
                var elementMap = ElementManager._collectAttributes(element.attributes), manager = new ElementManager();
                elementMap.element = element;
                elementMap.uiControlNode = uiControlNode;
                manager.initialize(elementMap, parent);
                if (!(elementMap.hasControl || hasUiControl)) {
                    manager.bind = function () {
                        return [];
                    };
                }
                else {
                    manager.setUiControlTemplate();
                    return hasUiControl ? null : manager;
                }
                return manager;
            };
            ElementManager.locateResources = function (node) {
                var childNodes = Array.prototype.slice.call(node.childNodes), childNode;
                while (childNodes.length > 0) {
                    childNode = childNodes.shift();
                    if (childNode.nodeName.toLowerCase() === 'plat-resources') {
                        return node.removeChild(childNode);
                    }
                }
                return null;
            };
            ElementManager.clone = function (sourceManager, parent, element, newControl, nodeMap) {
                if (isNull(nodeMap)) {
                    nodeMap = ElementManager._cloneNodeMap(sourceManager.nodeMap, element, parent.getUiControl() || parent.getParentControl(), newControl);
                }
                var manager = new ElementManager(), hasNewControl = !isNull(newControl);
                manager.nodeMap = nodeMap;
                manager.parent = parent;
                if (!isNull(parent)) {
                    parent.children.push(manager);
                }
                manager.replace = sourceManager.replace;
                manager.replaceNodeLength = sourceManager.replaceNodeLength;
                manager.hasOwnContext = sourceManager.hasOwnContext;
                manager.isClone = true;
                if (!(nodeMap.hasControl || hasNewControl)) {
                    manager.bind = function () {
                        return [];
                    };
                }
                if (hasNewControl) {
                    ElementManager.$ManagerCache.put(newControl.uid, manager);
                }
                return manager;
            };
            ElementManager.cloneUiControl = function (sourceMap, parent) {
                var uiControlNode = sourceMap.uiControlNode;
                if (isNull(uiControlNode) || isNull(uiControlNode.injector)) {
                    return;
                }
                var uiControl = uiControlNode.control, newUiControl = uiControlNode.injector.inject(), resources = ElementManager.$ResourcesFactory.getInstance(), attributes = acquire(__AttributesInstance);
                newUiControl.parent = parent;
                parent.controls.push(newUiControl);
                newUiControl.controls = [];
                attributes.initialize(newUiControl, sourceMap.attributes);
                newUiControl.attributes = attributes;
                resources.initialize(newUiControl, uiControl.resources);
                newUiControl.resources = resources;
                ElementManager.$ResourcesFactory.addControlResources(newUiControl);
                if (!isNull(uiControl.innerTemplate)) {
                    newUiControl.innerTemplate = uiControl.innerTemplate.cloneNode(true);
                }
                newUiControl.type = uiControl.type;
                newUiControl.bindableTemplates = ElementManager.$BindableTemplatesFactory.create(newUiControl, uiControl.bindableTemplates);
                newUiControl.replaceWith = uiControl.replaceWith;
                return newUiControl;
            };
            ElementManager.createAttributeControls = function (nodeMap, parent, templateControl, newElement, isClone) {
                var nodes = nodeMap.nodes, element = isClone === true ? newElement : nodeMap.element, attributes;
                if (isNode(element)) {
                    if (element.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        return isClone === true ? ElementManager._copyAttributeNodes(nodes) : [];
                    }
                    attributes = element.attributes;
                }
                var attrs = nodeMap.attributes, newAttributes, node, injector, control, newNodes = [], length = nodes.length, nodeName, i;
                for (i = 0; i < length; ++i) {
                    node = nodes[i];
                    nodeName = node.nodeName;
                    injector = node.injector;
                    control = null;
                    if (!isNull(injector)) {
                        control = injector.inject();
                        node.control = control;
                        control.parent = parent;
                        control.element = element;
                        newAttributes = acquire(__AttributesInstance);
                        newAttributes.initialize(control, attrs);
                        control.attributes = newAttributes;
                        control.type = nodeName;
                        if (!isString(control.uid)) {
                            control.uid = uniqueId(__Plat);
                        }
                        control.templateControl = templateControl;
                    }
                    if (isClone === true) {
                        newNodes.push({
                            control: control,
                            expressions: node.expressions,
                            node: !attributes ? null : (attributes.getNamedItem(nodeName) || attributes.getNamedItem('data-' + nodeName)),
                            nodeName: nodeName,
                            injector: injector
                        });
                        if (!isNull(control)) {
                            if (!isNull(parent)) {
                                parent.controls.push(control);
                            }
                            if (isFunction(control.initialize)) {
                                control.initialize();
                            }
                        }
                    }
                }
                if (!isClone) {
                    nodes.sort(function (a, b) {
                        var aControl = a.control, bControl = b.control;
                        if (isNull(aControl)) {
                            return 1;
                        }
                        else if (isNull(bControl)) {
                            return -1;
                        }
                        var aPriority = isNumber(aControl.priority) ? aControl.priority : 0, bPriority = isNumber(bControl.priority) ? bControl.priority : 0;
                        return bPriority - aPriority;
                    });
                    for (i = 0; i < length; ++i) {
                        node = nodes[i];
                        control = node.control;
                        if (!isNull(control)) {
                            if (!isNull(parent)) {
                                parent.controls.push(control);
                            }
                            if (isFunction(control.initialize)) {
                                control.initialize();
                            }
                        }
                    }
                }
                return newNodes;
            };
            ElementManager.getInstance = function () {
                return new ElementManager();
            };
            ElementManager._collectAttributes = function (attributes) {
                var nodes = [], attribute, name, value, childContext, childIdentifier, hasMarkup, hasMarkupFn = NodeManager.hasMarkup, findMarkup = NodeManager.findMarkup, $parser = NodeManager.$Parser, build = NodeManager.build, expressions, hasControl = false, injector, length = attributes.length, controlAttributes = {};
                for (var i = 0; i < length; ++i) {
                    attribute = attributes[i];
                    value = attribute.value;
                    name = attribute.name.replace(/^data-/i, '').toLowerCase();
                    injector = controlInjectors[name] || viewControlInjectors[name];
                    if (name === 'plat-context') {
                        if (value !== '') {
                            childContext = $parser.parse(value);
                            if (childContext.identifiers.length !== 1) {
                                var $exception = acquire(__ExceptionStatic);
                                $exception.warn('Incorrect plat-context: ' + value + ', must contain a single identifier.', $exception.COMPILE);
                            }
                            childIdentifier = childContext.identifiers[0];
                        }
                    }
                    else if (name !== 'plat-control') {
                        hasMarkup = hasMarkupFn(value);
                        expressions = hasMarkup ? findMarkup(value) : [];
                        if (!hasControl && (hasMarkup || !isNull(injector))) {
                            hasControl = true;
                        }
                        nodes.push({
                            control: null,
                            node: attribute,
                            nodeName: name,
                            expressions: expressions,
                            injector: injector
                        });
                    }
                    controlAttributes[camelCase(name)] = value;
                }
                return {
                    element: null,
                    attributes: controlAttributes,
                    nodes: nodes,
                    childContext: childIdentifier,
                    hasControl: hasControl
                };
            };
            ElementManager._copyAttributeNodes = function (nodes) {
                var newNodes = [], length = nodes.length, node;
                for (var i = 0; i < length; ++i) {
                    node = nodes[i];
                    newNodes.push({
                        expressions: node.expressions,
                        nodeName: node.nodeName
                    });
                }
                return newNodes;
            };
            ElementManager._cloneNode = function (sourceNode, node, newControl) {
                return {
                    control: newControl,
                    injector: sourceNode.injector,
                    expressions: sourceNode.expressions,
                    node: node,
                    nodeName: sourceNode.nodeName
                };
            };
            ElementManager._cloneNodeMap = function (sourceMap, element, parent, newControl) {
                var hasControl = sourceMap.hasControl, nodeMap = {
                    attributes: sourceMap.attributes,
                    childContext: sourceMap.childContext,
                    nodes: [],
                    element: element,
                    uiControlNode: !isNull(sourceMap.uiControlNode) ? ElementManager._cloneNode(sourceMap.uiControlNode, element, newControl) : null,
                    hasControl: hasControl
                };
                if (hasControl) {
                    nodeMap.nodes = ElementManager.createAttributeControls(sourceMap, parent, newControl, element, true);
                }
                return nodeMap;
            };
            ElementManager.prototype.clone = function (newNode, parentManager, nodeMap) {
                var childNodes, clonedManager, replace = this.replace, children = this.children, newControl = !isNull(nodeMap) ? nodeMap.uiControlNode.control : null, newControlExists = !isNull(newControl), startNodeManager, endNodeManager;
                if (!newControlExists) {
                    newControl = ElementManager.cloneUiControl(this.nodeMap, (parentManager.getUiControl() || parentManager.getParentControl()));
                    newControlExists = !isNull(newControl);
                }
                if (replace) {
                    var nodes = newNode.parentNode.childNodes, arrayProto = Array.prototype, startIndex = arrayProto.indexOf.call(nodes, newNode);
                    childNodes = arrayProto.slice.call(nodes, startIndex + 1, startIndex + this.replaceNodeLength);
                    clonedManager = ElementManager.clone(this, parentManager, null, newControl, nodeMap);
                    newControl.elementNodes = childNodes;
                    newControl.startNode = newNode;
                    newControl.endNode = childNodes.pop();
                    startNodeManager = children.shift();
                    endNodeManager = children.shift();
                    startNodeManager.clone(newControl.startNode, clonedManager);
                    endNodeManager.clone(newControl.endNode, clonedManager);
                    if (isFunction(newControl.initialize)) {
                        newControl.initialize();
                    }
                }
                else {
                    childNodes = Array.prototype.slice.call(newNode.childNodes);
                    clonedManager = ElementManager.clone(this, parentManager, newNode, newControl, nodeMap);
                    nodeMap = clonedManager.nodeMap;
                    if (newControlExists) {
                        newControl.element = newNode;
                        if (isFunction(newControl.initialize)) {
                            newControl.initialize();
                        }
                    }
                }
                if (clonedManager.hasOwnContext) {
                    postpone(function () {
                        clonedManager.observeRootContext(newControl, clonedManager.bindAndLoad);
                    });
                }
                var length = children.length, childNodeOffset = 0;
                for (var i = 0; i < length; ++i) {
                    childNodeOffset += children[i].clone(childNodes[childNodeOffset], clonedManager);
                }
                if (replace) {
                    children.unshift(endNodeManager);
                    children.unshift(startNodeManager);
                    return childNodeOffset + 2;
                }
                return 1;
            };
            ElementManager.prototype.initialize = function (nodeMap, parent, dontInitialize) {
                _super.prototype.initialize.call(this, nodeMap, parent);
                var controlNode = nodeMap.uiControlNode, hasUiControl = !isNull(controlNode), control;
                if (hasUiControl) {
                    this._populateUiControl();
                    control = controlNode.control;
                    this.hasOwnContext = control.hasOwnContext;
                }
                if (nodeMap.hasControl) {
                    ElementManager.createAttributeControls(nodeMap, this.getParentControl(), control);
                }
                if (!dontInitialize && hasUiControl && isFunction(control.initialize)) {
                    control.initialize();
                }
            };
            ElementManager.prototype.bind = function () {
                var _this = this;
                var nodeMap = this.nodeMap, parent = this.getParentControl(), controlNode = nodeMap.uiControlNode, controls = [];
                if (!isNull(controlNode)) {
                    var uiControl = controlNode.control, childContext = nodeMap.childContext, getManager = this.$ContextManagerStatic.getManager, contextManager, absoluteContextPath = isNull(parent) ? __CONTEXT : parent.absoluteContextPath, $TemplateControlFactory = this.$TemplateControlFactory, inheritsContext = !uiControl.hasOwnContext;
                    controls.push(uiControl);
                    if (inheritsContext && !isNull(childContext)) {
                        if (childContext[0] === '@') {
                            var split = childContext.split('.'), alias = split.shift().slice(1), resourceObj = $TemplateControlFactory.findResource(uiControl, alias), $exception;
                            if (isObject(resourceObj)) {
                                var resource = resourceObj.resource;
                                if (isObject(resource) && resource.type === __OBSERVABLE_RESOURCE) {
                                    absoluteContextPath = 'resources.' + alias + '.value' + (split.length > 0 ? ('.' + split.join('.')) : '');
                                    uiControl.root = resourceObj.control;
                                }
                                else {
                                    $exception = acquire(__ExceptionStatic);
                                    $exception.warn('Only resources of type "observable" can be set as context.', $exception.CONTEXT);
                                }
                            }
                            else {
                                $exception = acquire(__ExceptionStatic);
                                $exception.warn('Could not set the context of ' + uiControl.type + ' with the resource specified as "' + childContext + '".', $exception.CONTEXT);
                            }
                        }
                        else {
                            absoluteContextPath += '.' + childContext;
                        }
                    }
                    uiControl.root = this.$ControlFactory.getRootControl(uiControl) || uiControl;
                    contextManager = getManager(uiControl.root);
                    var awaitContext = false;
                    if (inheritsContext) {
                        uiControl.context = contextManager.getContext(absoluteContextPath.split('.'));
                        awaitContext = isUndefined(uiControl.context);
                    }
                    else {
                        absoluteContextPath = __CONTEXT;
                    }
                    if (awaitContext) {
                        this.contextPromise = new this.$Promise(function (resolve, reject) {
                            var removeListener = contextManager.observe(absoluteContextPath, {
                                uid: uiControl.uid,
                                listener: function (newValue, oldValue) {
                                    if (isUndefined(newValue)) {
                                        return;
                                    }
                                    removeListener();
                                    uiControl.context = newValue;
                                    _this._beforeLoad(uiControl, absoluteContextPath);
                                    resolve();
                                }
                            });
                        });
                    }
                    else {
                        this._beforeLoad(uiControl, absoluteContextPath);
                    }
                }
                this._observeControlIdentifiers(nodeMap.nodes, parent, controls);
                return controls;
            };
            ElementManager.prototype.setUiControlTemplate = function (templateUrl) {
                var _this = this;
                var controlNode = this.nodeMap.uiControlNode;
                if (!isNull(controlNode)) {
                    var control = controlNode.control;
                    this.templatePromise = this.$TemplateControlFactory.determineTemplate(control, templateUrl).then(function (template) {
                        _this.templatePromise = null;
                        _this._initializeControl(control, template.cloneNode(true));
                    }, function (error) {
                        _this.templatePromise = null;
                        if (isNull(error)) {
                            var template = error;
                            if (_this.$BindableTemplatesFactory.isBoundControl(control)) {
                                template = appendChildren(control.element.childNodes);
                            }
                            _this._initializeControl(control, template);
                        }
                        else {
                            postpone(function () {
                                var $exception = acquire(__ExceptionStatic);
                                $exception.fatal(error, $exception.COMPILE);
                            });
                        }
                    });
                    return;
                }
                if (!isNull(this.parent)) {
                    return;
                }
                this.bindAndLoad();
            };
            ElementManager.prototype.getUiControl = function () {
                var uiControlNode = this.nodeMap.uiControlNode;
                if (isNull(uiControlNode)) {
                    return;
                }
                return uiControlNode.control;
            };
            ElementManager.prototype.fulfillTemplate = function () {
                var _this = this;
                if (!isNull(this.templatePromise)) {
                    return this.templatePromise.then(function () {
                        return _this._fulfillChildTemplates();
                    });
                }
                return this._fulfillChildTemplates();
            };
            ElementManager.prototype.bindAndLoad = function () {
                var _this = this;
                var controls = this.bind(), promise;
                if (isPromise(this.contextPromise)) {
                    promise = this.contextPromise.then(function () {
                        return _this._bindChildren();
                    });
                }
                else {
                    promise = this._bindChildren();
                }
                return promise.then(function () {
                    return _this._loadControls(controls, _this.getUiControl());
                }).catch(function (error) {
                    postpone(function () {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.BIND);
                    });
                });
            };
            ElementManager.prototype.observeRootContext = function (root, loadMethod) {
                var _this = this;
                loadMethod = loadMethod.bind(this);
                if (!isNull(root.context)) {
                    this.loadedPromise = loadMethod();
                    return;
                }
                this.loadedPromise = new this.$Promise(function (resolve) {
                    var removeListener = _this.$ContextManagerStatic.getManager(root).observe(__CONTEXT, {
                        listener: function () {
                            removeListener();
                            loadMethod().then(resolve);
                        },
                        uid: root.uid
                    });
                }).catch(function (error) {
                    postpone(function () {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.BIND);
                    });
                });
            };
            ElementManager.prototype._beforeLoad = function (uiControl, absoluteContextPath) {
                var contextManager = this.$ContextManagerStatic.getManager(uiControl.root), $TemplateControlFactory = this.$TemplateControlFactory;
                uiControl.zCC__plat = contextManager.observe(absoluteContextPath, {
                    uid: uiControl.uid,
                    listener: function (newValue, oldValue) {
                        uiControl.context = newValue;
                    }
                });
                $TemplateControlFactory.setAbsoluteContextPath(uiControl, absoluteContextPath);
                $TemplateControlFactory.setContextResources(uiControl);
                ElementManager.$ResourcesFactory.bindResources(uiControl.resources);
                if (!this.replace) {
                    var element = uiControl.element;
                    if (!isNull(element) && isFunction(element.removeAttribute)) {
                        element.removeAttribute(__Hide);
                    }
                }
            };
            ElementManager.prototype._bindChildren = function () {
                var children = this.children, length = children.length, child, promises = [];
                for (var i = 0; i < length; ++i) {
                    child = children[i];
                    if (child.hasOwnContext) {
                        promises.push(child.loadedPromise);
                    }
                    else if (!isUndefined(child.children)) {
                        promises.push(child.bindAndLoad());
                    }
                    else {
                        child.bind();
                    }
                }
                return this.$Promise.all(promises);
            };
            ElementManager.prototype._observeControlIdentifiers = function (nodes, parent, controls) {
                var length = nodes.length, bindings = [], attributeChanged = this._attributeChanged, hasParent = !isNull(parent), node, control, i = 0;
                for (; i < length; ++i) {
                    node = nodes[i];
                    control = node.control;
                    if (hasParent && node.expressions.length > 0) {
                        NodeManager.observeExpressions(node.expressions, parent, attributeChanged.bind(this, node, parent, controls));
                        bindings.push(node);
                    }
                    if (!isNull(control)) {
                        controls.push(control);
                    }
                }
                length = bindings.length;
                for (i = 0; i < length; ++i) {
                    this._attributeChanged(bindings[i], parent, controls);
                }
            };
            ElementManager.prototype._loadControls = function (controls, templateControl) {
                var length = controls.length, control, load = this.$ControlFactory.load, templateControlLoaded = isNull(templateControl), promise, templateControlPriority, i;
                if (templateControlLoaded) {
                    i = 0;
                }
                else {
                    var priority = templateControl.priority;
                    templateControlPriority = isNumber(priority) ? priority : 100;
                    i = 1;
                }
                for (; i < length; ++i) {
                    control = controls[i];
                    control.templateControl = templateControl;
                    if (!templateControlLoaded && templateControlPriority > control.priority) {
                        templateControlLoaded = true;
                        promise = load(templateControl);
                    }
                    load(control);
                }
                if (!templateControlLoaded) {
                    promise = load(templateControl);
                }
                return promise;
            };
            ElementManager.prototype._fulfillAndLoad = function () {
                var _this = this;
                return this.fulfillTemplate().then(function () {
                    return _this.bindAndLoad();
                }).catch(function (error) {
                    postpone(function () {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.BIND);
                    });
                });
            };
            ElementManager.prototype._populateUiControl = function () {
                var nodeMap = this.nodeMap, parent = this.getParentControl(), controlNode = nodeMap.uiControlNode, uiControl = controlNode.control, uid = uiControl.uid, resources = uiControl.resources, element = nodeMap.element, childNodes = Array.prototype.slice.call(element.childNodes), newAttributes = acquire(__AttributesInstance), replace = this.replace = (uiControl.replaceWith === null || uiControl.replaceWith === '');
                if (!isString(uid)) {
                    uid = uiControl.uid = uniqueId(__Plat);
                }
                ElementManager.$ManagerCache.put(uid, this);
                if (!isNull(parent) && uiControl.parent !== parent) {
                    parent.controls.push(uiControl);
                    uiControl.parent = parent;
                }
                if (isFunction(element.setAttribute)) {
                    element.setAttribute(__Hide, '');
                }
                uiControl.element = element;
                uiControl.controls = [];
                newAttributes.initialize(uiControl, nodeMap.attributes);
                uiControl.attributes = newAttributes;
                if (isObject(resources) && isFunction(resources.add)) {
                    resources.add(controlNode.resourceElement);
                }
                else {
                    resources = ElementManager.$ResourcesFactory.getInstance();
                    resources.initialize(uiControl, controlNode.resourceElement);
                    uiControl.resources = resources;
                }
                ElementManager.$ResourcesFactory.addControlResources(uiControl);
                uiControl.type = controlNode.nodeName;
                uiControl.bindableTemplates = uiControl.bindableTemplates || ElementManager.$BindableTemplatesFactory.create(uiControl);
                if (childNodes.length > 0 && (!isEmpty(uiControl.templateString) || !isEmpty(uiControl.templateUrl))) {
                    uiControl.innerTemplate = appendChildren(childNodes);
                }
                if (replace) {
                    this._replaceElement(uiControl, nodeMap);
                }
            };
            ElementManager.prototype._replaceElement = function (control, nodeMap) {
                var element = nodeMap.element, parentNode = element.parentNode, $document = ElementManager.$Document, controlType = control.type, controlUid = control.uid, startNode = control.startNode = $document.createComment(controlType + ' ' + controlUid + __START_NODE), endNode = control.endNode = $document.createComment(controlType + ' ' + controlUid + __END_NODE), create = this.$CommentManagerFactory.create;
                create(startNode, this);
                create(endNode, this);
                parentNode.insertBefore(startNode, element);
                parentNode.insertBefore(endNode, element.nextSibling);
                control.elementNodes = replace(element);
                control.element = nodeMap.element = null;
            };
            ElementManager.prototype._initializeControl = function (uiControl, template) {
                var element = this.nodeMap.element, replaceElement = this.replace, endNode;
                if (!isNull(template)) {
                    var resourceElement = ElementManager.locateResources(template);
                    if (!isNull(resourceElement)) {
                        uiControl.resources.add(ElementManager.$ResourcesFactory.parseElement(resourceElement));
                    }
                    if (replaceElement) {
                        endNode = uiControl.endNode;
                        uiControl.elementNodes = Array.prototype.slice.call(template.childNodes);
                        insertBefore(endNode.parentNode, template, endNode);
                    }
                    else {
                        insertBefore(element, template, element.lastChild);
                    }
                }
                if (isFunction(uiControl.setTemplate)) {
                    uiControl.setTemplate();
                }
                if (replaceElement) {
                    this.$Compiler.compile(uiControl.elementNodes, uiControl);
                    var startNode = uiControl.startNode, parentNode = startNode.parentNode, childNodes = Array.prototype.slice.call(parentNode.childNodes);
                    endNode = uiControl.endNode;
                    uiControl.elementNodes = childNodes.slice(childNodes.indexOf(startNode) + 1, childNodes.indexOf(endNode));
                    this.replaceNodeLength = uiControl.elementNodes.length + 2;
                }
                else {
                    this.$Compiler.compile(element, uiControl);
                }
                if (uiControl.hasOwnContext && !this.isClone) {
                    this.observeRootContext(uiControl, this._fulfillAndLoad);
                }
                else if (isNull(uiControl.parent)) {
                    this._fulfillAndLoad();
                }
            };
            ElementManager.prototype._attributeChanged = function (node, parent, controls) {
                var length = controls.length, key = camelCase(node.nodeName), value = NodeManager.build(node.expressions, parent), attributes, oldValue;
                for (var i = 0; i < length; ++i) {
                    attributes = controls[i].attributes;
                    oldValue = attributes[key];
                    attributes[key] = value;
                    attributes._attributeChanged(key, value, oldValue);
                }
                if (!this.replace) {
                    node.node.value = value;
                }
            };
            ElementManager.prototype._fulfillChildTemplates = function () {
                var children = this.children, child, length = children.length, promises = [];
                for (var i = 0; i < length; ++i) {
                    child = children[i];
                    if (!isUndefined(child.children)) {
                        promises.push(child.fulfillTemplate());
                    }
                }
                return this.$Promise.all(promises).catch(function (error) {
                    postpone(function () {
                        var $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.COMPILE);
                    });
                });
            };
            return ElementManager;
        })(NodeManager);
        processing.ElementManager = ElementManager;
        function IElementManagerFactory($Document, $ManagerCache, $ResourcesFactory, $BindableTemplatesFactory) {
            ElementManager.$Document = $Document;
            ElementManager.$ManagerCache = $ManagerCache;
            ElementManager.$ResourcesFactory = $ResourcesFactory;
            ElementManager.$BindableTemplatesFactory = $BindableTemplatesFactory;
            return ElementManager;
        }
        processing.IElementManagerFactory = IElementManagerFactory;
        register.injectable(__ElementManagerFactory, IElementManagerFactory, [
            __Document,
            __ManagerCache,
            __ResourcesFactory,
            __BindableTemplatesFactory
        ], __FACTORY);
        var TextManager = (function (_super) {
            __extends(TextManager, _super);
            function TextManager() {
                _super.apply(this, arguments);
                this.type = 'text';
            }
            TextManager.create = function (node, parent) {
                var value = node.nodeValue, manager = new TextManager();
                if (NodeManager.hasMarkup(value)) {
                    var expressions = NodeManager.findMarkup(value), map = {
                        nodes: [{
                            node: node,
                            expressions: expressions,
                        }]
                    };
                    manager.initialize(map, parent);
                    return manager;
                }
                manager.initialize(null, parent);
                manager.bind = noop;
                return manager;
            };
            TextManager._cloneNodeMap = function (sourceMap, newNode) {
                var node = sourceMap.nodes[0], nodeMap = {
                    nodes: [{
                        expressions: node.expressions,
                        nodeName: node.nodeName,
                        node: newNode
                    }]
                };
                return nodeMap;
            };
            TextManager._clone = function (sourceManager, node, parent) {
                var map = sourceManager.nodeMap, manager = new TextManager();
                if (!isNull(map)) {
                    manager.initialize(TextManager._cloneNodeMap(map, node), parent);
                }
                else {
                    manager.initialize(null, parent);
                    manager.bind = noop;
                }
                return manager;
            };
            TextManager.prototype.clone = function (newNode, parentManager) {
                TextManager._clone(this, newNode, parentManager);
                return 1;
            };
            TextManager.prototype.bind = function () {
                var parent = this.getParentControl(), node = this.nodeMap.nodes[0], textNode = node.node, expressions = node.expressions;
                NodeManager.observeExpressions(node.expressions, parent, this._setText.bind(this, textNode, parent, expressions));
                this._setText(textNode, parent, expressions);
            };
            TextManager.prototype._setText = function (node, control, expressions) {
                node.nodeValue = NodeManager.build(expressions, (control || {}));
            };
            return TextManager;
        })(NodeManager);
        processing.TextManager = TextManager;
        function ITextManagerFactory() {
            return TextManager;
        }
        processing.ITextManagerFactory = ITextManagerFactory;
        register.injectable(__TextManagerFactory, ITextManagerFactory, null, __FACTORY);
        var CommentManager = (function (_super) {
            __extends(CommentManager, _super);
            function CommentManager() {
                _super.apply(this, arguments);
                this.type = 'comment';
            }
            CommentManager.create = function (node, parent) {
                var manager = new CommentManager();
                manager.initialize({
                    nodes: [{
                        node: node
                    }]
                }, parent);
                return manager;
            };
            CommentManager.prototype.clone = function (newNode, parentManager) {
                CommentManager.create(newNode, parentManager);
                return 1;
            };
            return CommentManager;
        })(NodeManager);
        processing.CommentManager = CommentManager;
        function ICommentManagerFactory() {
            return CommentManager;
        }
        processing.ICommentManagerFactory = ICommentManagerFactory;
        register.injectable(__CommentManagerFactory, ICommentManagerFactory, null, __FACTORY);
    })(processing = _plat.processing || (_plat.processing = {}));
    var routing;
    (function (routing) {
        var specialCharacters = [
            '/',
            '.',
            '*',
            '+',
            '?',
            '|',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '\\'
        ], escapeRegex = new RegExp('(\\' + specialCharacters.join('|\\') + ')', 'g'), baseSegment, dynamicSegments = {}, splatSegments = {}, staticSegments = {};
        var BaseSegment = (function () {
            function BaseSegment() {
                this.type = __BASE_SEGMENT_TYPE;
                this.name = '';
                this.regex = '';
            }
            BaseSegment.parse = function (route, names, types) {
                if (!isString(route) || !isArray(names) || !isObject(types)) {
                    return [];
                }
                else if (route[0] === '/') {
                    route = route.slice(1);
                }
                var segments = route.split('/'), length = segments.length, __findSegment = BaseSegment.__findSegment, results = [], result, segment, name, match, $Regex = BaseSegment.$Regex;
                for (var i = 0; i < length; ++i) {
                    segment = segments[i];
                    if (segment === '') {
                        if (!isObject(baseSegment)) {
                            baseSegment = acquire(__BaseSegmentInstance);
                        }
                        results.push(baseSegment);
                    }
                    else if (match = segment.match($Regex.dynamicSegmentsRegex)) {
                        name = match[1];
                        results.push(__findSegment(name, __DynamicSegmentInstance, dynamicSegments));
                        names.push(name);
                        types.dynamics++;
                    }
                    else if (match = segment.match($Regex.splatSegmentRegex)) {
                        name = match[1];
                        results.push(__findSegment(name, __SplatSegmentInstance, splatSegments));
                        names.push(name);
                        types.splats++;
                    }
                    else {
                        results.push(__findSegment(segment, __StaticSegmentInstance, staticSegments));
                        types.statics++;
                    }
                }
                return results;
            };
            BaseSegment.__findSegment = function (name, token, cache) {
                var segment = cache[name];
                if (!isObject(segment)) {
                    segment = cache[name] = acquire(token);
                    segment.initialize(name);
                }
                return segment;
            };
            BaseSegment.prototype.initialize = function (name) {
                this.name = name;
            };
            BaseSegment.prototype.reduceCharacters = function (iterator, initialValue) {
                if (isObject(this._specification)) {
                    initialValue = iterator(initialValue, this._specification);
                }
                return initialValue;
            };
            BaseSegment.prototype.generate = function (parameters) {
                return this.name;
            };
            return BaseSegment;
        })();
        routing.BaseSegment = BaseSegment;
        function IBaseSegmentFactory($Regex) {
            BaseSegment.$Regex = $Regex;
            return BaseSegment;
        }
        routing.IBaseSegmentFactory = IBaseSegmentFactory;
        plat.register.injectable(__BaseSegmentFactory, IBaseSegmentFactory, [__Regex], __FACTORY);
        function IBaseSegmentInstance() {
            return new BaseSegment();
        }
        routing.IBaseSegmentInstance = IBaseSegmentInstance;
        plat.register.injectable(__BaseSegmentInstance, IBaseSegmentInstance, null, __INSTANCE);
        var StaticSegment = (function (_super) {
            __extends(StaticSegment, _super);
            function StaticSegment() {
                _super.apply(this, arguments);
                this.type = __STATIC_SEGMENT_TYPE;
            }
            StaticSegment.prototype.initialize = function (name) {
                _super.prototype.initialize.call(this, name);
                this.regex = this.name.replace(escapeRegex, '\\$1');
            };
            StaticSegment.prototype.reduceCharacters = function (iterator, initialValue) {
                var name = this.name, length = name.length, value = initialValue;
                for (var i = 0; i < length; ++i) {
                    value = iterator(value, { validCharacters: name[i] });
                }
                return value;
            };
            return StaticSegment;
        })(BaseSegment);
        routing.StaticSegment = StaticSegment;
        function IStaticSegmentInstance() {
            return new StaticSegment();
        }
        routing.IStaticSegmentInstance = IStaticSegmentInstance;
        plat.register.injectable(__StaticSegmentInstance, IStaticSegmentInstance, null, __INSTANCE);
        var VariableSegment = (function (_super) {
            __extends(VariableSegment, _super);
            function VariableSegment() {
                _super.apply(this, arguments);
                this.type = __VARIABLE_SEGMENT_TYPE;
            }
            VariableSegment.prototype.generate = function (parameters) {
                if (isObject(parameters)) {
                    return parameters[this.name];
                }
            };
            return VariableSegment;
        })(BaseSegment);
        routing.VariableSegment = VariableSegment;
        function IVariableSegmentInstance() {
            return new VariableSegment();
        }
        routing.IVariableSegmentInstance = IVariableSegmentInstance;
        plat.register.injectable(__VariableSegmentInstance, IVariableSegmentInstance, null, __INSTANCE);
        var SplatSegment = (function (_super) {
            __extends(SplatSegment, _super);
            function SplatSegment() {
                _super.apply(this, arguments);
                this.type = __SPLAT_SEGMENT_TYPE;
                this.regex = '(.+)';
                this._specification = {
                    invalidCharacters: '',
                    repeat: true
                };
            }
            return SplatSegment;
        })(VariableSegment);
        routing.SplatSegment = SplatSegment;
        function ISplatSegmentInstance() {
            return new SplatSegment();
        }
        routing.ISplatSegmentInstance = ISplatSegmentInstance;
        plat.register.injectable(__SplatSegmentInstance, ISplatSegmentInstance, null, __INSTANCE);
        var DynamicSegment = (function (_super) {
            __extends(DynamicSegment, _super);
            function DynamicSegment() {
                _super.apply(this, arguments);
                this.type = __DYNAMIC_SEGMENT_TYPE;
                this.regex = '([^/]+)';
                this._specification = {
                    invalidCharacters: '/',
                    repeat: true
                };
            }
            return DynamicSegment;
        })(VariableSegment);
        routing.DynamicSegment = DynamicSegment;
        function IDynamicSegmentInstance() {
            return new DynamicSegment();
        }
        routing.IDynamicSegmentInstance = IDynamicSegmentInstance;
        plat.register.injectable(__DynamicSegmentInstance, IDynamicSegmentInstance, null, __INSTANCE);
        var State = (function () {
            function State() {
                this.initialize();
            }
            State.compile = function (segment, state) {
                return segment.reduceCharacters(function (s, char) {
                    return s.add(char);
                }, state);
            };
            State.link = function (state, path) {
                var delegates = state.delegates, regex = state.regex, length = delegates.length, matches = path.match(regex), matchIndex = 1, result = [], names, parameters, j, jLength, delegate;
                for (var i = 0; i < length; ++i) {
                    delegate = delegates[i];
                    names = delegate.names;
                    parameters = {};
                    for (j = 0, jLength = names.length; j < jLength; ++j) {
                        parameters[names[j]] = matches[matchIndex++];
                    }
                    result.push({
                        delegate: delegate.delegate,
                        parameters: parameters,
                        isDynamic: jLength > 0
                    });
                }
                return result;
            };
            State.recognize = function (char, states) {
                var nextStates = [], length = states.length, state;
                for (var i = 0; i < length; ++i) {
                    state = states[i];
                    nextStates = nextStates.concat(state.match(char));
                }
                return nextStates;
            };
            State.sort = function (states) {
                if (!isArray(states)) {
                    return states;
                }
                var aTypes, aSplats, aStatics, aDynamics, bTypes, bSplats, bStatics, bDynamics;
                return states.sort(function (a, b) {
                    aTypes = a.types;
                    bTypes = b.types;
                    aSplats = aTypes.splats;
                    bSplats = bTypes.splats;
                    if (aSplats !== bSplats) {
                        return aSplats - bSplats;
                    }
                    aStatics = aTypes.statics;
                    aDynamics = aTypes.dynamics;
                    bStatics = bTypes.statics;
                    bDynamics = bTypes.dynamics;
                    if (aSplats > 0) {
                        if (aStatics !== bStatics) {
                            return bStatics - aStatics;
                        }
                        if (aDynamics !== bDynamics) {
                            return bDynamics - aDynamics;
                        }
                    }
                    if (aDynamics !== bDynamics) {
                        return aDynamics - bDynamics;
                    }
                    if (aStatics !== bStatics) {
                        return bStatics = aStatics;
                    }
                    return 0;
                });
            };
            State.prototype.initialize = function (specification) {
                this.specification = specification;
                this.nextStates = [];
            };
            State.prototype.add = function (specification) {
                var state = this._find(specification);
                if (isObject(state)) {
                    return state;
                }
                state = new State();
                state.initialize(specification);
                this.nextStates.push(state);
                if (specification.repeat) {
                    state.nextStates.push(state);
                }
                return state;
            };
            State.prototype.match = function (char) {
                var matches = [], spec, chars;
                this._someChildren(function (child) {
                    spec = child.specification;
                    chars = spec.validCharacters;
                    if (isString(chars) && chars.indexOf(char) > -1) {
                        matches.push(child);
                        return;
                    }
                    chars = spec.invalidCharacters;
                    if (isString(chars) && chars.indexOf(char) === -1) {
                        matches.push(child);
                    }
                });
                return matches;
            };
            State.prototype._find = function (spec) {
                var validChars = spec.validCharacters, invalidChars = spec.invalidCharacters, s, found;
                this._someChildren(function (child) {
                    s = child.specification;
                    if (s.validCharacters === validChars && s.invalidCharacters === invalidChars) {
                        found = child;
                        return true;
                    }
                });
                return found;
            };
            State.prototype._someChildren = function (iterator) {
                var nextStates = this.nextStates, length = nextStates.length;
                for (var i = 0; i < length; ++i) {
                    if (iterator(nextStates[i]) === true) {
                        return true;
                    }
                }
            };
            return State;
        })();
        routing.State = State;
        function IStateStatic() {
            return State;
        }
        routing.IStateStatic = IStateStatic;
        plat.register.injectable(__StateStatic, IStateStatic, null, __STATIC);
        function IStateInstance() {
            return new State();
        }
        routing.IStateInstance = IStateInstance;
        plat.register.injectable(__StateInstance, IStateInstance, null, __INSTANCE);
        var RouteRecognizer = (function () {
            function RouteRecognizer() {
                this.$BaseSegmentFactory = acquire(__BaseSegmentFactory);
                this.$StateStatic = acquire(__StateStatic);
                this._rootState = acquire(__StateInstance);
                this._namedRoutes = {};
            }
            RouteRecognizer.prototype.register = function (routes, options) {
                if (!isArray(routes)) {
                    return;
                }
                var finalState = this._rootState, length = routes.length, regex = ['^'], types = {
                    statics: 0,
                    dynamics: 0,
                    splats: 0
                }, delegates = [], allSegments = [], segments;
                for (var i = 0; i < length; ++i) {
                    segments = this._parse(routes[i], delegates, types);
                    allSegments = allSegments.concat(segments);
                    finalState = this._compile(segments, finalState, regex);
                }
                finalState = this._finalize(finalState, regex);
                finalState.delegates = delegates;
                finalState.regex = new RegExp(regex.join('') + '$');
                finalState.types = types;
                if (isObject(options) && isString(options.name)) {
                    this._namedRoutes[options.name] = {
                        segments: allSegments,
                        delegates: delegates
                    };
                }
            };
            RouteRecognizer.prototype.recognize = function (path) {
                var isTrailingSlashDropped = false, solutions = [];
                path = this._addLeadingSlash(path);
                isTrailingSlashDropped = this._hasTrailingSlash(path);
                if (isTrailingSlashDropped) {
                    path = path.substr(0, path.length - 1);
                }
                solutions = this._filter(this._findStates(path));
                return this._link(solutions[0], path, isTrailingSlashDropped);
            };
            RouteRecognizer.prototype.generate = function (name, parameters) {
                var route = this._namedRoutes[name], output = "", segments, length;
                if (!isObject(route)) {
                    return;
                }
                segments = route.segments;
                length = segments.length;
                for (var i = 0; i < length; i++) {
                    var segment = segments[i];
                    if (segment.type === __BASE_SEGMENT_TYPE) {
                        continue;
                    }
                    output += "/";
                    output += segment.generate(parameters);
                }
                output = this._addLeadingSlash(output);
                return output;
            };
            RouteRecognizer.prototype.delegatesFor = function (name) {
                var namedRoute = this._namedRoutes[name], delegates;
                if (!isObject(namedRoute)) {
                    return [];
                }
                delegates = namedRoute.delegates;
                if (!isArray(delegates)) {
                    return [];
                }
                return delegates.slice(0);
            };
            RouteRecognizer.prototype.exists = function (name) {
                return isObject(this._namedRoutes[name]);
            };
            RouteRecognizer.prototype._finalize = function (state, regex) {
                if (state === this._rootState) {
                    state = state.add({
                        validCharacters: '/'
                    });
                    regex.push('/');
                }
                return state;
            };
            RouteRecognizer.prototype._parse = function (route, delegates, types) {
                var names = [];
                delegates.push({
                    delegate: route.delegate,
                    names: names
                });
                return this.$BaseSegmentFactory.parse(route.pattern, names, types);
            };
            RouteRecognizer.prototype._compile = function (segments, state, regex) {
                var length = segments.length, compile = this.$StateStatic.compile, segment;
                for (var i = 0; i < length; ++i) {
                    segment = segments[i];
                    if (segment.type === __BASE_SEGMENT_TYPE) {
                        continue;
                    }
                    state = state.add({ validCharacters: '/' });
                    state = compile(segment, state);
                    regex.push('/' + segment.regex);
                }
                return state;
            };
            RouteRecognizer.prototype._addLeadingSlash = function (path) {
                path = decodeURI(path);
                if (path[0] !== '/') {
                    path = '/' + path;
                }
                return path;
            };
            RouteRecognizer.prototype._hasTrailingSlash = function (path) {
                var length = path.length;
                return length > 1 && path[length - 1] === '/';
            };
            RouteRecognizer.prototype._findStates = function (path) {
                var states = [
                    this._rootState
                ], recognize = this.$StateStatic.recognize, length = path.length;
                for (var i = 0; i < length; ++i) {
                    states = recognize(path[i], states);
                    if (states.length === 0) {
                        break;
                    }
                }
                return states;
            };
            RouteRecognizer.prototype._filter = function (states) {
                var length = states.length, solutions = [], state;
                for (var i = 0; i < length; ++i) {
                    state = states[i];
                    if (isArray(state.delegates)) {
                        solutions.push(state);
                    }
                }
                return this.$StateStatic.sort(solutions);
            };
            RouteRecognizer.prototype._link = function (state, path, isTrailingSlashDropped) {
                if (isObject(state) && isArray(state.delegates)) {
                    if (isTrailingSlashDropped && this._isDynamic(state)) {
                        path = path + '/';
                    }
                    return this.$StateStatic.link(state, path);
                }
            };
            RouteRecognizer.prototype._isDynamic = function (state) {
                return state.regex.source.slice(-5) === '(.+)$';
            };
            return RouteRecognizer;
        })();
        routing.RouteRecognizer = RouteRecognizer;
        function IRouteRecognizerInstance() {
            return new RouteRecognizer();
        }
        routing.IRouteRecognizerInstance = IRouteRecognizerInstance;
        plat.register.injectable(__RouteRecognizerInstance, IRouteRecognizerInstance, null, __INSTANCE);
        ;
    })(routing = _plat.routing || (_plat.routing = {}));
    var navigation;
    (function (navigation) {
        var BaseNavigator = (function () {
            function BaseNavigator() {
                this.$EventManagerStatic = acquire(__EventManagerStatic);
                this.$NavigationEventStatic = acquire(__NavigationEventStatic);
                this.$BaseViewControlFactory = acquire(__BaseViewControlFactory);
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                var uid = uniqueId(__Plat);
                this.$ContextManagerStatic.defineGetter(this, 'uid', uid);
                this.$EventManagerStatic.on(uid, __backButton, this.backButtonPressed, this);
            }
            BaseNavigator.prototype.registerPort = function (baseport) {
            };
            BaseNavigator.prototype.navigate = function (navigationParameter, options) {
                this.navigating = true;
            };
            BaseNavigator.prototype.navigated = function (control, parameter, options) {
                this.navigating = false;
                control.navigator = this;
                control.navigatedTo(parameter);
                this._sendEvent(__navigated, control, control.type, parameter, options);
            };
            BaseNavigator.prototype.goBack = function (options) {
            };
            BaseNavigator.prototype.backButtonPressed = function () {
                this.goBack();
            };
            BaseNavigator.prototype.dispose = function () {
            };
            BaseNavigator.prototype._sendEvent = function (name, target, type, parameter, options) {
                return this.$NavigationEventStatic.dispatch(name, this, {
                    target: target,
                    type: type,
                    parameter: parameter,
                    options: options
                });
            };
            return BaseNavigator;
        })();
        navigation.BaseNavigator = BaseNavigator;
        var Navigator = (function (_super) {
            __extends(Navigator, _super);
            function Navigator() {
                _super.apply(this, arguments);
                this.history = [];
            }
            Navigator.prototype.registerPort = function (viewport, main) {
                if (isNull(Navigator.__mainNavigator)) {
                    Navigator.__mainNavigator = this;
                }
                else if (main) {
                    if (!Navigator.__mainNavigatorFound) {
                        this.$EventManagerStatic.dispose(Navigator.__mainNavigator.uid);
                        Navigator.__mainNavigatorFound = true;
                    }
                    Navigator.__mainNavigator = this;
                }
                else {
                    this.$EventManagerStatic.dispose(this.uid);
                }
                this.viewport = viewport;
            };
            Navigator.prototype.navigate = function (Constructor, options) {
                var _this = this;
                options = options || {};
                var state = this.currentState || {}, viewControl = state.control, injector, key, parameter = options.parameter, initialize = options.initialize === true, event, baseport = this.viewport, index = -1;
                event = this._sendEvent(__beforeNavigate, Constructor, null, parameter, options);
                if (event.defaultPrevented) {
                    return;
                }
                this.navigating = true;
                if (isObject(parameter)) {
                    parameter = _clone(parameter, true);
                }
                baseport.controls = [];
                if (isFunction(Constructor.inject)) {
                    injector = Constructor;
                    key = Constructor.name;
                }
                else if (!initialize && ((index = this._findInHistory(Constructor)) > -1 || this.isCurrentState(Constructor))) {
                    if (this.isCurrentState(Constructor)) {
                        injector = viewControl;
                    }
                    else {
                        injector = this.history[index].control;
                    }
                    key = injector.type;
                }
                else if (isString(Constructor)) {
                    injector = viewControlInjectors[(key = Constructor)];
                }
                else {
                    var keys = Object.keys(viewControlInjectors), control;
                    while (keys.length > 0) {
                        key = keys.pop();
                        control = viewControlInjectors[key];
                        if (control.Constructor === Constructor) {
                            injector = control;
                            break;
                        }
                    }
                }
                if (isNull(injector)) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.fatal('Attempting to navigate to unregistered view control.', $exception.NAVIGATION);
                }
                event.target = injector;
                event.type = key;
                if (!isNull(viewControl)) {
                    baseport.navigateFrom(viewControl).then(function () {
                        _this.$BaseViewControlFactory.detach(viewControl);
                        if (!options.replace) {
                            _this.history.push({ control: viewControl });
                        }
                        baseport.navigateTo(event);
                    }).catch(function (error) {
                        postpone(function () {
                            var Exception = acquire(__ExceptionStatic);
                            Exception.fatal(error, Exception.NAVIGATION);
                        });
                    });
                    return;
                }
                postpone(function () {
                    baseport.navigateTo(event);
                });
            };
            Navigator.prototype.isCurrentState = function (Constructor) {
                if (isNull(this.currentState)) {
                    return false;
                }
                var viewControl = this.currentState.control;
                if (isString(Constructor)) {
                    return viewControl.type === Constructor;
                }
                return viewControl.constructor === Constructor;
            };
            Navigator.prototype.goBack = function (options) {
                var _this = this;
                var opts = options || {}, currentState = this.currentState || {}, history = this.history, viewControl = currentState.control, indexInHistory = this._findInHistory(viewControl.type), inHistory = indexInHistory > -1, length = isNumber(opts.length) ? opts.length : 1, Constructor = opts.ViewControl, parameter = opts.parameter, baseport = this.viewport;
                if (history.length === 0) {
                    var $EventManager = this.$EventManagerStatic;
                    $EventManager.dispatch(__shutdown, this, $EventManager.DIRECT);
                }
                if (isNull(viewControl)) {
                    return;
                }
                var event = this._sendEvent(__beforeNavigate, viewControl, viewControl.type, parameter, options);
                if (event.defaultPrevented) {
                    return;
                }
                var $exception;
                if (!isNull(Constructor)) {
                    var index = this._findInHistory(Constructor);
                    if (index > -1) {
                        length = history.length - index;
                    }
                    else {
                        $exception = acquire(__ExceptionStatic);
                        $exception.warn('Cannot find ViewControl in navigation history.', $exception.NAVIGATION);
                        return;
                    }
                }
                if (!isNumber(length) || length > history.length) {
                    $exception = acquire(__ExceptionStatic);
                    $exception.warn('Not enough views in the navigation history in order to navigate back.', $exception.NAVIGATION);
                    return;
                }
                baseport.navigateFrom(viewControl).then(function () {
                    if (inHistory) {
                        _this.$BaseViewControlFactory.detach(viewControl);
                    }
                    else {
                        _this.$BaseViewControlFactory.dispose(viewControl);
                    }
                    var last = _this._goBackLength(length);
                    if (isNull(last)) {
                        return;
                    }
                    viewControl = last.control;
                    _this.currentState = last;
                    event.target = viewControl;
                    event.type = viewControl.type;
                    baseport.navigateTo(event);
                }).catch(function (error) {
                    postpone(function () {
                        $exception = acquire(__ExceptionStatic);
                        $exception.fatal(error, $exception.NAVIGATION);
                    });
                });
            };
            Navigator.prototype.backButtonPressed = function () {
                this.viewport.backButtonPressed();
            };
            Navigator.prototype.canGoBack = function () {
                return this.history.length > 0;
            };
            Navigator.prototype.clearHistory = function () {
                var history = this.history, dispose = this.$BaseViewControlFactory.dispose;
                while (history.length > 0) {
                    dispose(history.pop().control);
                }
            };
            Navigator.prototype.navigated = function (control, parameter, options) {
                this.currentState = {
                    control: control
                };
                _super.prototype.navigated.call(this, control, parameter, options);
            };
            Navigator.prototype._findInHistory = function (Constructor) {
                var history = this.history, index = -1, i;
                if (isFunction(Constructor)) {
                    for (i = (history.length - 1); i >= 0; --i) {
                        if (history[i].control.constructor === Constructor) {
                            index = i;
                            break;
                        }
                    }
                }
                else if (isString(Constructor)) {
                    for (i = (history.length - 1); i >= 0; --i) {
                        if (history[i].control.type === Constructor) {
                            index = i;
                            break;
                        }
                    }
                }
                return index;
            };
            Navigator.prototype._goBackLength = function (length) {
                length = isNumber(length) ? length : 1;
                var last, dispose = this.$BaseViewControlFactory.dispose, history = this.history, control;
                while (length-- > 0) {
                    if (!isNull(last) && !isNull(last.control)) {
                        control = last.control;
                        if (this._findInHistory(control.type) < 0) {
                            dispose(control);
                        }
                    }
                    last = history.pop();
                }
                return last;
            };
            Navigator.__mainNavigatorFound = false;
            return Navigator;
        })(BaseNavigator);
        navigation.Navigator = Navigator;
        function INavigatorInstance() {
            return new Navigator();
        }
        navigation.INavigatorInstance = INavigatorInstance;
        register.injectable(__NavigatorInstance, INavigatorInstance, null, __INSTANCE);
        var RoutingNavigator = (function (_super) {
            __extends(RoutingNavigator, _super);
            function RoutingNavigator() {
                _super.apply(this, arguments);
                this.$Router = acquire(__Router);
                this.$Window = acquire(__Window);
                this.__removeListeners = [];
                this.__historyLength = 0;
            }
            RoutingNavigator.prototype.registerPort = function (routeport) {
                this.routeport = routeport;
                var removeListeners = this.__removeListeners, $EventManager = this.$EventManagerStatic, uid = this.uid;
                removeListeners.push($EventManager.on(uid, __routeChanged, this._onRouteChanged, this));
                removeListeners.push($EventManager.on(uid, __beforeRouteChange, this._beforeRouteChange, this));
            };
            RoutingNavigator.prototype.navigate = function (path, options) {
                this.navigating = true;
                if (!this.$Router.route(path, options)) {
                    this.navigating = false;
                }
            };
            RoutingNavigator.prototype.navigated = function (control, parameter, options) {
                this.currentState = {
                    control: control,
                    route: parameter
                };
                _super.prototype.navigated.call(this, control, parameter, options);
            };
            RoutingNavigator.prototype.goBack = function (options) {
                options = options || {};
                this.__historyLength -= 2;
                if (this.__historyLength < 0) {
                    this.$EventManagerStatic.dispatch(__shutdown, this, this.$EventManagerStatic.DIRECT);
                }
                this.$Router.goBack((isNumber(options.length) ? options.length : 1));
            };
            RoutingNavigator.prototype.dispose = function () {
                var listeners = this.__removeListeners;
                while (listeners.length > 0) {
                    listeners.pop()();
                }
            };
            RoutingNavigator.prototype._beforeRouteChange = function (ev) {
                var event = this._sendEvent(__beforeNavigate, ev.target, ev.type, ev.parameter, ev.options);
                if (event.defaultPrevented) {
                    ev.preventDefault();
                }
            };
            RoutingNavigator.prototype._onRouteChanged = function (ev) {
                var _this = this;
                var state = this.currentState || {}, viewControl = state.control, injector = ev.target, baseport = this.routeport;
                if (isNull(injector)) {
                    return;
                }
                this.__historyLength++;
                baseport.navigateFrom(viewControl).then(function () {
                    _this.$BaseViewControlFactory.dispose(viewControl);
                    baseport.navigateTo(ev);
                }).catch(function (error) {
                    postpone(function () {
                        var Exception = acquire(__ExceptionStatic);
                        Exception.fatal(error, Exception.NAVIGATION);
                    });
                });
            };
            return RoutingNavigator;
        })(BaseNavigator);
        navigation.RoutingNavigator = RoutingNavigator;
        function IRoutingNavigator() {
            return new RoutingNavigator();
        }
        navigation.IRoutingNavigator = IRoutingNavigator;
        register.injectable(__RoutingNavigator, IRoutingNavigator);
    })(navigation = _plat.navigation || (_plat.navigation = {}));
    var controls;
    (function (controls) {
        var Name = (function (_super) {
            __extends(Name, _super);
            function Name() {
                _super.apply(this, arguments);
            }
            Name.prototype.initialize = function () {
                var attr = camelCase(this.type), name = this.attributes[attr];
                if (isEmpty(name) || this._isPrecompiled()) {
                    return;
                }
                this._label = name;
                this._define(name);
            };
            Name.prototype.dispose = function () {
                var name = this._label, control = this.parent;
                while (!isUndefined(name) && isObject(control)) {
                    if (isObject(control[name]) && isNode(control[name].element) && control[name].element === this.element) {
                        deleteProperty(control, name);
                    }
                    control = control.parent;
                }
            };
            Name.prototype._define = function (name) {
                var templateControl = this.templateControl;
                if (!isNull(templateControl)) {
                    templateControl.name = name;
                }
                var control = this.parent, namedElement = {
                    element: this.element,
                    control: templateControl
                };
                while (isObject(control)) {
                    var obj = control[name];
                    if (!isObject(obj)) {
                        control[name] = namedElement;
                    }
                    control = control.parent;
                }
            };
            Name.prototype._isPrecompiled = function () {
                var control = this.parent;
                while (!isNull(control)) {
                    if (control.type.indexOf(__COMPILED) !== -1) {
                        return true;
                    }
                    control = control.parent;
                }
                return false;
            };
            return Name;
        })(AttributeControl);
        controls.Name = Name;
        register.control(__Name, Name);
        var SimpleEventControl = (function (_super) {
            __extends(SimpleEventControl, _super);
            function SimpleEventControl() {
                _super.apply(this, arguments);
                this.$Parser = acquire(__Parser);
                this.$Regex = acquire(__Regex);
                this._expression = [];
                this._aliases = [];
            }
            SimpleEventControl.prototype.loaded = function () {
                if (isNull(this.element)) {
                    return;
                }
                this.attribute = camelCase(this.type);
                this._setListener();
            };
            SimpleEventControl.prototype._setListener = function () {
                var fn = this.attributes[this.attribute];
                if (isEmpty(this.event) || isEmpty(fn)) {
                    return;
                }
                this._parseArgs(fn);
                this._addEventListeners();
            };
            SimpleEventControl.prototype._addEventListeners = function () {
                this.addEventListener(this.element, this.event, this._onEvent, false);
            };
            SimpleEventControl.prototype._buildExpression = function () {
                var expression = this._expression.slice(0), parent = this.parent, hasParent = !isNull(parent), listenerStr = expression.shift(), listener, control, fn, aliases, argContext;
                if (!isNull(parent)) {
                    aliases = parent.getResources(this._aliases);
                    argContext = parent.context;
                }
                if (listenerStr[0] !== '@') {
                    listener = this._fn || (this._fn = this.findProperty(listenerStr));
                    if (isNull(listener)) {
                        return {
                            fn: noop,
                            control: {},
                            args: []
                        };
                    }
                    fn = listener.value;
                    control = listener.control;
                }
                else {
                    fn = isNull(aliases) ? noop : (aliases[listenerStr] || noop);
                    control = undefined;
                }
                var length = expression.length, args = [], $parser = this.$Parser;
                for (var i = 0; i < length; ++i) {
                    args.push($parser.parse(expression[i]).evaluate(argContext, aliases));
                }
                return {
                    fn: fn,
                    control: control,
                    args: args
                };
            };
            SimpleEventControl.prototype._onEvent = function (ev) {
                var expression = this._buildExpression(), fn = expression.fn;
                if (!isFunction(fn)) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.warn('Cannot find registered event method ' + this._expression[0] + ' for control: ' + this.type, $exception.BIND);
                    return;
                }
                fn.apply(expression.control, expression.args.concat(ev));
            };
            SimpleEventControl.prototype._findAliases = function (args) {
                var length = args.length, arg, exec, aliases = {}, $regex = this.$Regex;
                for (var i = 0; i < length; ++i) {
                    arg = args[i].trim();
                    if (arg[0] === '@') {
                        exec = $regex.aliasRegex.exec(arg);
                        aliases[!isNull(exec) ? exec[0] : arg.slice(1)] = true;
                    }
                }
                return Object.keys(aliases);
            };
            SimpleEventControl.prototype._parseArgs = function (expression) {
                if (isEmpty(expression)) {
                    return;
                }
                var exec = this.$Regex.argumentRegex.exec(expression);
                if (!isNull(exec)) {
                    this._expression = [expression.slice(0, exec.index)].concat((exec[1] !== '') ? exec[1].split(',') : []);
                }
                else {
                    this._expression.push(expression);
                }
                this._aliases = this._findAliases(this._expression);
            };
            return SimpleEventControl;
        })(AttributeControl);
        controls.SimpleEventControl = SimpleEventControl;
        var Tap = (function (_super) {
            __extends(Tap, _super);
            function Tap() {
                _super.apply(this, arguments);
                this.event = __tap;
            }
            return Tap;
        })(SimpleEventControl);
        controls.Tap = Tap;
        var Blur = (function (_super) {
            __extends(Blur, _super);
            function Blur() {
                _super.apply(this, arguments);
                this.event = 'blur';
            }
            return Blur;
        })(SimpleEventControl);
        controls.Blur = Blur;
        var Change = (function (_super) {
            __extends(Change, _super);
            function Change() {
                _super.apply(this, arguments);
                this.event = 'change';
            }
            return Change;
        })(SimpleEventControl);
        controls.Change = Change;
        var Copy = (function (_super) {
            __extends(Copy, _super);
            function Copy() {
                _super.apply(this, arguments);
                this.event = 'copy';
            }
            return Copy;
        })(SimpleEventControl);
        controls.Copy = Copy;
        var Cut = (function (_super) {
            __extends(Cut, _super);
            function Cut() {
                _super.apply(this, arguments);
                this.event = 'cut';
            }
            return Cut;
        })(SimpleEventControl);
        controls.Cut = Cut;
        var Paste = (function (_super) {
            __extends(Paste, _super);
            function Paste() {
                _super.apply(this, arguments);
                this.event = 'paste';
            }
            return Paste;
        })(SimpleEventControl);
        controls.Paste = Paste;
        var DblTap = (function (_super) {
            __extends(DblTap, _super);
            function DblTap() {
                _super.apply(this, arguments);
                this.event = __dbltap;
            }
            return DblTap;
        })(SimpleEventControl);
        controls.DblTap = DblTap;
        var Focus = (function (_super) {
            __extends(Focus, _super);
            function Focus() {
                _super.apply(this, arguments);
                this.event = 'focus';
            }
            return Focus;
        })(SimpleEventControl);
        controls.Focus = Focus;
        var TouchStart = (function (_super) {
            __extends(TouchStart, _super);
            function TouchStart() {
                _super.apply(this, arguments);
                this.event = __touchstart;
            }
            return TouchStart;
        })(SimpleEventControl);
        controls.TouchStart = TouchStart;
        var TouchEnd = (function (_super) {
            __extends(TouchEnd, _super);
            function TouchEnd() {
                _super.apply(this, arguments);
                this.event = __touchend;
            }
            return TouchEnd;
        })(SimpleEventControl);
        controls.TouchEnd = TouchEnd;
        var TouchMove = (function (_super) {
            __extends(TouchMove, _super);
            function TouchMove() {
                _super.apply(this, arguments);
                this.event = __touchmove;
            }
            return TouchMove;
        })(SimpleEventControl);
        controls.TouchMove = TouchMove;
        var TouchCancel = (function (_super) {
            __extends(TouchCancel, _super);
            function TouchCancel() {
                _super.apply(this, arguments);
                this.event = __touchcancel;
            }
            return TouchCancel;
        })(SimpleEventControl);
        controls.TouchCancel = TouchCancel;
        var Hold = (function (_super) {
            __extends(Hold, _super);
            function Hold() {
                _super.apply(this, arguments);
                this.event = __hold;
            }
            return Hold;
        })(SimpleEventControl);
        controls.Hold = Hold;
        var Release = (function (_super) {
            __extends(Release, _super);
            function Release() {
                _super.apply(this, arguments);
                this.event = __release;
            }
            return Release;
        })(SimpleEventControl);
        controls.Release = Release;
        var Swipe = (function (_super) {
            __extends(Swipe, _super);
            function Swipe() {
                _super.apply(this, arguments);
                this.event = __swipe;
            }
            return Swipe;
        })(SimpleEventControl);
        controls.Swipe = Swipe;
        var SwipeLeft = (function (_super) {
            __extends(SwipeLeft, _super);
            function SwipeLeft() {
                _super.apply(this, arguments);
                this.event = __swipeleft;
            }
            return SwipeLeft;
        })(SimpleEventControl);
        controls.SwipeLeft = SwipeLeft;
        var SwipeRight = (function (_super) {
            __extends(SwipeRight, _super);
            function SwipeRight() {
                _super.apply(this, arguments);
                this.event = __swiperight;
            }
            return SwipeRight;
        })(SimpleEventControl);
        controls.SwipeRight = SwipeRight;
        var SwipeUp = (function (_super) {
            __extends(SwipeUp, _super);
            function SwipeUp() {
                _super.apply(this, arguments);
                this.event = __swipeup;
            }
            return SwipeUp;
        })(SimpleEventControl);
        controls.SwipeUp = SwipeUp;
        var SwipeDown = (function (_super) {
            __extends(SwipeDown, _super);
            function SwipeDown() {
                _super.apply(this, arguments);
                this.event = __swipedown;
            }
            return SwipeDown;
        })(SimpleEventControl);
        controls.SwipeDown = SwipeDown;
        var Track = (function (_super) {
            __extends(Track, _super);
            function Track() {
                _super.apply(this, arguments);
                this.event = __track;
            }
            return Track;
        })(SimpleEventControl);
        controls.Track = Track;
        var TrackLeft = (function (_super) {
            __extends(TrackLeft, _super);
            function TrackLeft() {
                _super.apply(this, arguments);
                this.event = __trackleft;
            }
            return TrackLeft;
        })(SimpleEventControl);
        controls.TrackLeft = TrackLeft;
        var TrackRight = (function (_super) {
            __extends(TrackRight, _super);
            function TrackRight() {
                _super.apply(this, arguments);
                this.event = __trackright;
            }
            return TrackRight;
        })(SimpleEventControl);
        controls.TrackRight = TrackRight;
        var TrackUp = (function (_super) {
            __extends(TrackUp, _super);
            function TrackUp() {
                _super.apply(this, arguments);
                this.event = __trackup;
            }
            return TrackUp;
        })(SimpleEventControl);
        controls.TrackUp = TrackUp;
        var TrackDown = (function (_super) {
            __extends(TrackDown, _super);
            function TrackDown() {
                _super.apply(this, arguments);
                this.event = __trackdown;
            }
            return TrackDown;
        })(SimpleEventControl);
        controls.TrackDown = TrackDown;
        var TrackEnd = (function (_super) {
            __extends(TrackEnd, _super);
            function TrackEnd() {
                _super.apply(this, arguments);
                this.event = __trackend;
            }
            return TrackEnd;
        })(SimpleEventControl);
        controls.TrackEnd = TrackEnd;
        var Submit = (function (_super) {
            __extends(Submit, _super);
            function Submit() {
                _super.apply(this, arguments);
                this.event = 'submit';
            }
            Submit.prototype._onEvent = function (ev) {
                if (!this.element.hasAttribute('action')) {
                    ev.preventDefault();
                }
                _super.prototype._onEvent.call(this, ev);
            };
            return Submit;
        })(SimpleEventControl);
        controls.Submit = Submit;
        var React = (function (_super) {
            __extends(React, _super);
            function React() {
                _super.apply(this, arguments);
                this.$Compat = acquire(__Compat);
                this.event = 'input';
            }
            React.prototype._addEventListeners = function () {
                var _this = this;
                var element = this.element, $compat = this.$Compat, composing = false, input = 'input', timeout, eventListener = function (ev) {
                    if (composing) {
                        return;
                    }
                    _this._onEvent(ev);
                }, postponedEventListener = function (ev) {
                    if (isFunction(timeout)) {
                        return;
                    }
                    timeout = postpone(function () {
                        eventListener(ev);
                        timeout = null;
                    });
                };
                if (isUndefined($compat.ANDROID)) {
                    this.addEventListener(element, 'compositionstart', function () { return (composing = true); }, false);
                    this.addEventListener(element, 'compositionend', function (ev) {
                        composing = false;
                        eventListener(ev);
                    }, false);
                }
                this.addEventListener(element, input, eventListener, false);
                this.addEventListener(element, 'change', eventListener, false);
                if ($compat.hasEvent(input)) {
                    return;
                }
                this.addEventListener(element, 'keydown', function (ev) {
                    var key = ev.keyCode, codes = controls.KeyCodes;
                    if (key === codes.lwk || key === codes.rwk || (key >= codes.shift && key <= codes.escape) || (key > codes.space && key <= codes.down)) {
                        return;
                    }
                    postponedEventListener(ev);
                }, false);
                this.addEventListener(element, 'cut', postponedEventListener, false);
                this.addEventListener(element, 'paste', postponedEventListener, false);
            };
            return React;
        })(SimpleEventControl);
        controls.React = React;
        register.control(__Tap, Tap);
        register.control(__Blur, Blur);
        register.control(__Change, Change);
        register.control(__Copy, Copy);
        register.control(__Cut, Cut);
        register.control(__Paste, Paste);
        register.control(__DblTap, DblTap);
        register.control(__Focus, Focus);
        register.control(__Submit, Submit);
        register.control(__TouchStart, TouchStart);
        register.control(__TouchEnd, TouchEnd);
        register.control(__TouchMove, TouchMove);
        register.control(__TouchCancel, TouchCancel);
        register.control(__Hold, Hold);
        register.control(__Release, Release);
        register.control(__Swipe, Swipe);
        register.control(__SwipeLeft, SwipeLeft);
        register.control(__SwipeRight, SwipeRight);
        register.control(__SwipeUp, SwipeUp);
        register.control(__SwipeDown, SwipeDown);
        register.control(__Track, Track);
        register.control(__TrackLeft, TrackLeft);
        register.control(__TrackRight, TrackRight);
        register.control(__TrackUp, TrackUp);
        register.control(__TrackDown, TrackDown);
        register.control(__TrackEnd, TrackEnd);
        register.control(__React, React);
        controls.KeyCodes = {
            'backspace': 8,
            'tab': 9,
            'enter': 13,
            'shift': 16,
            'ctrl': 17,
            'alt': 18,
            'pause': 19,
            'break': 19,
            'caps lock': 20,
            'escape': 27,
            'space': 32,
            'page up': 33,
            'page down': 34,
            'end': 35,
            'home': 36,
            'left': 37,
            'left arrow': 37,
            'up': 38,
            'up arrow': 38,
            'right': 39,
            'right arrow': 39,
            'down': 40,
            'down arrow': 40,
            'insert': 45,
            'delete': 46,
            '0': 48,
            'zero': 48,
            ')': 48,
            'right parenthesis': 48,
            '1': 49,
            'one': 49,
            '!': 49,
            'exclamation': 49,
            'exclamation point': 49,
            '2': 50,
            'two': 50,
            '@': 50,
            'at': 50,
            '3': 51,
            'three': 51,
            '#': 51,
            'number sign': 51,
            'hash': 51,
            'pound': 51,
            '4': 52,
            'four': 52,
            '$': 52,
            'dollar': 52,
            'dollar sign': 52,
            '5': 53,
            'five': 53,
            '%': 53,
            'percent': 53,
            'percent sign': 53,
            '6': 54,
            'six': 54,
            '^': 54,
            'caret': 54,
            '7': 55,
            'seven': 55,
            '&': 55,
            'ampersand': 55,
            '8': 56,
            'eight': 56,
            '*': 56,
            'asterisk': 56,
            '9': 57,
            'nine': 57,
            '(': 57,
            'left parenthesis': 57,
            'a': 65,
            'b': 66,
            'c': 67,
            'd': 68,
            'e': 69,
            'f': 70,
            'g': 71,
            'h': 72,
            'i': 73,
            'j': 74,
            'k': 75,
            'l': 76,
            'm': 77,
            'n': 78,
            'o': 79,
            'p': 80,
            'q': 81,
            'r': 82,
            's': 83,
            't': 84,
            'u': 85,
            'v': 86,
            'w': 87,
            'x': 88,
            'y': 89,
            'z': 90,
            'lwk': 91,
            'left window key': 91,
            'rwk': 92,
            'right window key': 92,
            'select': 93,
            'select key': 93,
            'numpad 0': 96,
            'numpad 1': 97,
            'numpad 2': 98,
            'numpad 3': 99,
            'numpad 4': 100,
            'numpad 5': 101,
            'numpad 6': 102,
            'numpad 7': 103,
            'numpad 8': 104,
            'numpad 9': 105,
            'multiply': 106,
            'add': 107,
            'subtract': 109,
            'decimal point': 110,
            'divide': 111,
            'f1': 112,
            'f2': 113,
            'f3': 114,
            'f4': 115,
            'f5': 116,
            'f6': 117,
            'f7': 118,
            'f8': 119,
            'f9': 120,
            'f10': 121,
            'f11': 122,
            'f12': 123,
            'num lock': 144,
            'scroll lock': 145,
            ';': 186,
            'semi-colon': 186,
            ':': 186,
            'colon': 186,
            '=': 187,
            'equal': 187,
            'equal sign': 187,
            '+': 187,
            'plus': 187,
            ',': 188,
            'comma': 188,
            '<': 188,
            'lt': 188,
            'less than': 188,
            'left angle bracket': 188,
            '-': 189,
            'dash': 189,
            '_': 189,
            'underscore': 189,
            '.': 190,
            'period': 190,
            '>': 190,
            'gt': 190,
            'greater than': 190,
            'right angle bracket': 190,
            '/': 191,
            'forward slash': 191,
            '?': 191,
            'question mark': 191,
            '`': 192,
            'grave accent': 192,
            '~': 192,
            'tilde': 192,
            '[': 219,
            'open bracket': 219,
            '{': 219,
            'open brace': 219,
            '\\': 220,
            'back slash': 220,
            '|': 220,
            'pipe': 220,
            ']': 221,
            'close bracket': 221,
            '}': 221,
            'close brace': 221,
            '\'': 222,
            'single quote': 222,
            '"': 222,
            'double quote': 222
        };
        var KeyCodeEventControl = (function (_super) {
            __extends(KeyCodeEventControl, _super);
            function KeyCodeEventControl() {
                _super.apply(this, arguments);
                this.$Regex = plat.acquire(__Regex);
            }
            KeyCodeEventControl.prototype._setListener = function () {
                var attr = this.attribute;
                if (isEmpty(this.event) || isEmpty(attr)) {
                    return;
                }
                var expression = this.attributes[attr].trim();
                if (expression[0] === '{') {
                    var eventObject = this.evaluateExpression(expression) || { method: '', key: null }, key = eventObject.key, keys = eventObject.keys;
                    this._parseArgs(eventObject.method);
                    if (isNull(key) && isNull(keys)) {
                        this.attributes[attr] = eventObject.method;
                        this._setKeyCodes();
                        _super.prototype._setListener.call(this);
                        return;
                    }
                    keys = isArray(keys) ? keys : [key];
                    this._setKeyCodes(keys);
                    this.addEventListener(this.element, this.event, this._onEvent, false);
                    return;
                }
                this._setKeyCodes();
                _super.prototype._setListener.call(this);
            };
            KeyCodeEventControl.prototype._onEvent = function (ev) {
                var keyCodes = this.keyCodes, code;
                if (isEmpty(keyCodes)) {
                    _super.prototype._onEvent.call(this, ev);
                }
                else if (!isUndefined(keyCodes[ev.keyCode])) {
                    code = keyCodes[ev.keyCode];
                    if (!code.shifted || ev.shiftKey) {
                        _super.prototype._onEvent.call(this, ev);
                    }
                }
            };
            KeyCodeEventControl.prototype._setKeyCodes = function (keys) {
                if (!isArray(keys)) {
                    keys = [];
                }
                var length = keys.length, key, keyCodes = this.keyCodes, index, shifted = this.$Regex.shiftedKeyRegex;
                if (!isObject(keyCodes)) {
                    keyCodes = this.keyCodes = {};
                }
                for (var i = 0; i < length; ++i) {
                    key = keys[i];
                    index = isNumber(key) ? key : controls.KeyCodes[key.toLowerCase()];
                    keyCodes[index] = { shifted: shifted.test(key) };
                }
            };
            return KeyCodeEventControl;
        })(SimpleEventControl);
        controls.KeyCodeEventControl = KeyCodeEventControl;
        var KeyDown = (function (_super) {
            __extends(KeyDown, _super);
            function KeyDown() {
                _super.apply(this, arguments);
                this.event = 'keydown';
                this.cancelEvent = noop;
            }
            KeyDown.prototype._onEvent = function (ev) {
                var _this = this;
                var keyCode = ev.keyCode;
                if ((keyCode >= 48 && keyCode <= 90) || (keyCode >= 186) || (keyCode >= 96 && keyCode <= 111)) {
                    this.cancelEvent = postpone(function () {
                        _super.prototype._onEvent.call(_this, ev);
                    });
                }
            };
            KeyDown.prototype.dispose = function () {
                this.cancelEvent();
                this.cancelEvent = null;
            };
            return KeyDown;
        })(KeyCodeEventControl);
        controls.KeyDown = KeyDown;
        var KeyPress = (function (_super) {
            __extends(KeyPress, _super);
            function KeyPress() {
                _super.apply(this, arguments);
                this.event = 'keydown';
                this.cancelEvent = noop;
            }
            KeyPress.prototype._onEvent = function (ev) {
                var _this = this;
                var keyCode = ev.keyCode;
                if ((keyCode >= 48 && keyCode <= 90) || (keyCode >= 186) || (keyCode >= 96 && keyCode <= 111)) {
                    this.cancelEvent = postpone(function () {
                        _super.prototype._onEvent.call(_this, ev);
                    });
                }
            };
            KeyPress.prototype.dispose = function () {
                this.cancelEvent();
                this.cancelEvent = null;
            };
            return KeyPress;
        })(KeyCodeEventControl);
        controls.KeyPress = KeyPress;
        var KeyUp = (function (_super) {
            __extends(KeyUp, _super);
            function KeyUp() {
                _super.apply(this, arguments);
                this.event = 'keyup';
            }
            return KeyUp;
        })(KeyCodeEventControl);
        controls.KeyUp = KeyUp;
        register.control(__KeyDown, KeyDown);
        register.control(__KeyPress, KeyPress);
        register.control(__KeyUp, KeyUp);
        var SetAttributeControl = (function (_super) {
            __extends(SetAttributeControl, _super);
            function SetAttributeControl() {
                _super.apply(this, arguments);
                this.property = '';
            }
            SetAttributeControl.prototype.loaded = function () {
                if (isNull(this.element)) {
                    return;
                }
                this.attribute = camelCase(this.type);
                this.setter();
                this.__removeListener = this.attributes.observe(this.attribute, this.setter);
            };
            SetAttributeControl.prototype.contextChanged = function () {
                if (isNull(this.element)) {
                    return;
                }
                this.setter();
            };
            SetAttributeControl.prototype.dispose = function () {
                if (isFunction(this.__removeListener)) {
                    this.__removeListener();
                    this.__removeListener = null;
                }
            };
            SetAttributeControl.prototype.setter = function () {
                var _this = this;
                postpone(function () {
                    var element = _this.element, property = _this.property;
                    if (!isNode(element)) {
                        return;
                    }
                    switch (_this.attributes[_this.attribute]) {
                        case 'false':
                        case '0':
                        case 'null':
                        case '':
                            element.setAttribute(property, '');
                            element[property] = false;
                            element.removeAttribute(property);
                            break;
                        default:
                            element.setAttribute(property, property);
                            element[property] = true;
                    }
                });
            };
            return SetAttributeControl;
        })(AttributeControl);
        controls.SetAttributeControl = SetAttributeControl;
        var Checked = (function (_super) {
            __extends(Checked, _super);
            function Checked() {
                _super.apply(this, arguments);
                this.property = 'checked';
            }
            return Checked;
        })(SetAttributeControl);
        controls.Checked = Checked;
        var Disabled = (function (_super) {
            __extends(Disabled, _super);
            function Disabled() {
                _super.apply(this, arguments);
                this.property = 'disabled';
            }
            return Disabled;
        })(SetAttributeControl);
        controls.Disabled = Disabled;
        var Selected = (function (_super) {
            __extends(Selected, _super);
            function Selected() {
                _super.apply(this, arguments);
                this.property = 'selected';
            }
            return Selected;
        })(SetAttributeControl);
        controls.Selected = Selected;
        var ReadOnly = (function (_super) {
            __extends(ReadOnly, _super);
            function ReadOnly() {
                _super.apply(this, arguments);
                this.property = 'readonly';
            }
            return ReadOnly;
        })(SetAttributeControl);
        controls.ReadOnly = ReadOnly;
        var Visible = (function (_super) {
            __extends(Visible, _super);
            function Visible() {
                _super.apply(this, arguments);
                this.property = 'display';
                this.value = 'none';
                this.importance = 'important';
                this._initialValue = '';
            }
            Visible.prototype.initialize = function () {
                var style = this.element.style || { getPropertyValue: noop }, initialValue = style.getPropertyValue(this.property);
                this._setValue(this.value, this.importance);
                if (isEmpty(initialValue) || initialValue === 'none') {
                    return;
                }
                this._initialValue = initialValue;
            };
            Visible.prototype.setter = function () {
                var _this = this;
                postpone(function () {
                    if (!isNode(_this.element)) {
                        return;
                    }
                    switch (_this.attributes[_this.attribute]) {
                        case 'false':
                        case '0':
                        case 'null':
                        case '':
                            _this._setValue(_this.value, _this.importance);
                            break;
                        default:
                            _this._setValue(_this._initialValue);
                            break;
                    }
                });
            };
            Visible.prototype._setValue = function (value, importance) {
                var property = this.property, style = this.element.style || {
                    setProperty: noop,
                    removeProperty: noop,
                    getPropertyValue: noop,
                    getPropertyPriority: noop
                }, currentVal = style.getPropertyValue(property), currentPriority = style.getPropertyPriority(property);
                if (value === currentVal && importance === currentPriority) {
                    return;
                }
                else if (isEmpty(value)) {
                    style.removeProperty(property);
                    return;
                }
                style.setProperty(property, value, importance);
            };
            return Visible;
        })(SetAttributeControl);
        controls.Visible = Visible;
        var Style = (function (_super) {
            __extends(Style, _super);
            function Style() {
                _super.apply(this, arguments);
            }
            Style.prototype.setter = function () {
                var expression = this.attributes[this.attribute];
                if (isEmpty(expression)) {
                    return;
                }
                var attributes = expression.split(';'), elementStyle = this.element.style || {}, length = attributes.length, splitStyles, styleType, styleValue;
                for (var i = 0; i < length; ++i) {
                    splitStyles = attributes[i].split(':');
                    if (splitStyles.length < 2) {
                        continue;
                    }
                    else if (splitStyles.length > 2) {
                        splitStyles = [splitStyles.shift(), splitStyles.join(':')];
                    }
                    styleType = camelCase(splitStyles[0].trim());
                    styleValue = splitStyles[1].trim();
                    if (!isUndefined(elementStyle[styleType])) {
                        elementStyle[styleType] = styleValue;
                    }
                }
            };
            return Style;
        })(SetAttributeControl);
        controls.Style = Style;
        register.control(__Checked, Checked);
        register.control(__Disabled, Disabled);
        register.control(__Selected, Selected);
        register.control(__ReadOnly, ReadOnly);
        register.control(__Visible, Visible);
        register.control(__Style, Style);
        var ElementPropertyControl = (function (_super) {
            __extends(ElementPropertyControl, _super);
            function ElementPropertyControl() {
                _super.apply(this, arguments);
            }
            ElementPropertyControl.prototype.setter = function () {
                var element = this.element, elementProperty = this.property, expression = this.attributes[this.attribute];
                if (isEmpty(expression) || isNull(element)) {
                    return;
                }
                if (!isUndefined(element[elementProperty])) {
                    element[elementProperty] = expression;
                }
            };
            return ElementPropertyControl;
        })(SetAttributeControl);
        controls.ElementPropertyControl = ElementPropertyControl;
        var Href = (function (_super) {
            __extends(Href, _super);
            function Href() {
                _super.apply(this, arguments);
                this.property = 'href';
            }
            Href.prototype.setter = function () {
                _super.prototype.setter.call(this);
                var templateControl = this.templateControl;
                if (isObject(templateControl) && isFunction(templateControl.setHref)) {
                    templateControl.setHref();
                }
            };
            return Href;
        })(ElementPropertyControl);
        controls.Href = Href;
        var Src = (function (_super) {
            __extends(Src, _super);
            function Src() {
                _super.apply(this, arguments);
                this.property = 'src';
                this.$Browser = acquire(__Browser);
            }
            Src.prototype.setter = function () {
                var element = this.element, elementProperty = this.property, expression = this.attributes[this.attribute];
                if (isEmpty(expression) || isNull(element)) {
                    return;
                }
                if (!isUndefined(element[elementProperty])) {
                    element[elementProperty] = this.$Browser.urlUtils(expression);
                }
            };
            return Src;
        })(ElementPropertyControl);
        controls.Src = Src;
        register.control(__Href, Href);
        register.control(__Src, Src);
        var Bind = (function (_super) {
            __extends(Bind, _super);
            function Bind() {
                _super.apply(this, arguments);
                this.$Parser = acquire(__Parser);
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                this.$Compat = acquire(__Compat);
                this.$document = acquire(__Document);
                this.priority = 100;
                this.__fileSupported = acquire(__Compat).fileSupported;
                this.__fileNameRegex = acquire(__Regex).fileNameRegex;
                this.__isSelf = false;
            }
            Bind.prototype.initialize = function () {
                this._determineType();
            };
            Bind.prototype.loaded = function () {
                var parent = this.parent;
                if (isNull(parent) || isNull(this.element)) {
                    return;
                }
                var attr = camelCase(this.type), $parser = this.$Parser, expression = this._expression = $parser.parse(this.attributes[attr]);
                var identifiers = expression.identifiers;
                if (identifiers.length !== 1) {
                    var $exception = acquire(__ExceptionStatic);
                    $exception.warn('Only 1 identifier allowed in a plat-bind expression', $exception.BIND);
                    this._contextExpression = null;
                    return;
                }
                var split = identifiers[0].split('.');
                this._property = split.pop();
                if (split.length > 0) {
                    this._contextExpression = $parser.parse(split.join('.'));
                }
                else if (expression.aliases.length > 0) {
                    var alias = expression.aliases[0], resourceObj = parent.findResource(alias);
                    if (isNull(resourceObj) || resourceObj.resource.type !== __OBSERVABLE_RESOURCE) {
                        return;
                    }
                    this._property = 'value';
                    this._contextExpression = {
                        evaluate: function () {
                            return resourceObj.resource;
                        },
                        aliases: [],
                        identifiers: [],
                        expression: ''
                    };
                }
                else {
                    this._contextExpression = {
                        evaluate: function () {
                            return parent.context;
                        },
                        aliases: [],
                        identifiers: [],
                        expression: ''
                    };
                }
                this._watchExpression();
                if (isNull(this._addEventType)) {
                    return;
                }
                this._addEventType();
            };
            Bind.prototype.contextChanged = function () {
                this._watchExpression();
            };
            Bind.prototype.dispose = function () {
                this._addEventType = null;
            };
            Bind.prototype._addTextEventListener = function () {
                var _this = this;
                var element = this.element, $compat = this.$Compat, composing = false, input = 'input', timeout, eventListener = function () {
                    if (composing) {
                        return;
                    }
                    _this._propertyChanged();
                }, postponedEventListener = function () {
                    if (isFunction(timeout)) {
                        return;
                    }
                    timeout = postpone(function () {
                        eventListener();
                        timeout = null;
                    });
                };
                if (isUndefined($compat.ANDROID)) {
                    this.addEventListener(element, 'compositionstart', function () { return (composing = true); }, false);
                    this.addEventListener(element, 'compositionend', function () {
                        composing = false;
                        eventListener();
                    }, false);
                }
                if ($compat.hasEvent(input)) {
                    this.addEventListener(element, input, eventListener, false);
                }
                else {
                    this.addEventListener(element, 'keydown', function (ev) {
                        var key = ev.keyCode, codes = controls.KeyCodes;
                        if (key === codes.lwk || key === codes.rwk || (key >= codes.shift && key <= codes.escape) || (key > codes.space && key <= codes.down)) {
                            return;
                        }
                        postponedEventListener();
                    }, false);
                    this.addEventListener(element, 'cut', postponedEventListener, false);
                    this.addEventListener(element, 'paste', postponedEventListener, false);
                }
                this.addEventListener(element, 'change', eventListener, false);
            };
            Bind.prototype._addChangeEventListener = function () {
                this.addEventListener(this.element, 'change', this._propertyChanged, false);
            };
            Bind.prototype._addButtonEventListener = function () {
                this.addEventListener(this.element, __tap, this._propertyChanged, false);
            };
            Bind.prototype._getChecked = function () {
                return this.element.checked;
            };
            Bind.prototype._getValue = function () {
                return this.element.value;
            };
            Bind.prototype._getTextContent = function () {
                return this.element.textContent;
            };
            Bind.prototype._getFile = function () {
                var element = this.element, value = element.value;
                if (this.__fileSupported && element.files.length > 0) {
                    return element.files[0];
                }
                return {
                    name: value.replace(this.__fileNameRegex, ''),
                    path: value,
                    lastModifiedDate: undefined,
                    type: undefined,
                    size: undefined,
                    msDetachStream: noop,
                    msClose: noop,
                    slice: function () { return {}; }
                };
            };
            Bind.prototype._getFiles = function () {
                var element = this.element;
                if (this.__fileSupported) {
                    return Array.prototype.slice.call(element.files);
                }
                var filelist = element.value.split(/,|;/g), length = filelist.length, files = [], fileValue;
                for (var i = 0; i < length; ++i) {
                    fileValue = filelist[i];
                    files.push({
                        name: fileValue.replace(this.__fileNameRegex, ''),
                        path: fileValue,
                        lastModifiedDate: undefined,
                        type: undefined,
                        size: undefined,
                        msDetachStream: noop,
                        msClose: noop,
                        slice: function () { return {}; }
                    });
                }
                return files;
            };
            Bind.prototype._getSelectedValues = function () {
                var options = this.element.options, length = options.length, option, selectedValues = [];
                for (var i = 0; i < length; ++i) {
                    option = options[i];
                    if (option.selected) {
                        selectedValues.push(option.value);
                    }
                }
                return selectedValues;
            };
            Bind.prototype._setText = function (newValue, oldValue, firstTime) {
                if (this.__isSelf) {
                    return;
                }
                if (isNull(newValue)) {
                    newValue = '';
                    if (firstTime === true) {
                        if (isNull(this.element.value)) {
                            this._setValue(newValue);
                        }
                        this._propertyChanged();
                        return;
                    }
                }
                this._setValue(newValue);
            };
            Bind.prototype._setRange = function (newValue, oldValue, firstTime) {
                if (this.__isSelf) {
                    return;
                }
                if (isEmpty(newValue)) {
                    newValue = 0;
                    if (firstTime === true) {
                        if (isEmpty(this.element.value)) {
                            this._setValue(newValue);
                        }
                        this._propertyChanged();
                        return;
                    }
                }
                this._setValue(newValue);
            };
            Bind.prototype._setChecked = function (newValue, oldValue, firstTime) {
                if (this.__isSelf) {
                    return;
                }
                else if (!isBoolean(newValue)) {
                    if (firstTime === true) {
                        this._propertyChanged();
                        return;
                    }
                    newValue = !!newValue;
                }
                this.element.checked = newValue;
            };
            Bind.prototype._setRadio = function (newValue) {
                var element = this.element;
                if (this.__isSelf) {
                    return;
                }
                else if (isNull(newValue) && element.checked) {
                    this._propertyChanged();
                    return;
                }
                element.checked = (element.value === newValue);
            };
            Bind.prototype._setSelectedIndex = function (newValue, oldValue, firstTime) {
                if (this.__isSelf) {
                    return;
                }
                else if (firstTime === true && this._checkAsynchronousSelect()) {
                    if (isNull(newValue)) {
                        this._propertyChanged();
                    }
                    return;
                }
                var element = this.element, value = element.value;
                if (isNull(newValue)) {
                    if (firstTime === true || !this.$document.body.contains(element)) {
                        this._propertyChanged();
                        return;
                    }
                    element.selectedIndex = -1;
                    return;
                }
                else if (!isString(newValue)) {
                    var Exception = acquire(__ExceptionStatic), message;
                    if (isNumber(newValue)) {
                        newValue = newValue.toString();
                        message = 'Trying to bind a value of type number to a select element. ' + 'The value will implicitly be converted to type string.';
                    }
                    else {
                        message = 'Trying to bind a value that is not a string to a select element. ' + 'The element\'s selected index will be set to -1.';
                    }
                    Exception.warn(message, Exception.BIND);
                }
                else if (value === newValue) {
                    return;
                }
                else if (!this.$document.body.contains(element)) {
                    element.value = newValue;
                    if (element.value !== newValue) {
                        element.value = value;
                        this._propertyChanged();
                    }
                    return;
                }
                element.value = newValue;
                if (element.value !== newValue || element.selectedIndex === -1) {
                    element.selectedIndex = -1;
                }
            };
            Bind.prototype._setSelectedIndices = function (newValue, oldValue, firstTime) {
                if (this.__isSelf) {
                    return;
                }
                else if (firstTime === true && this._checkAsynchronousSelect()) {
                    return;
                }
                var options = this.element.options, length = isNull(options) ? 0 : options.length, option, nullValue = isNull(newValue);
                if (nullValue || !isArray(newValue)) {
                    if (firstTime === true) {
                        this._propertyChanged();
                    }
                    while (length-- > 0) {
                        option = options[length];
                        if (!nullValue && option.value === '' + newValue) {
                            option.selected = true;
                            return;
                        }
                        option.selected = false;
                    }
                    return;
                }
                var value, numberValue;
                while (length-- > 0) {
                    option = options[length];
                    value = option.value;
                    numberValue = Number(value);
                    if (newValue.indexOf(value) !== -1 || (isNumber(numberValue) && newValue.indexOf(numberValue) !== -1)) {
                        option.selected = true;
                        continue;
                    }
                    option.selected = false;
                }
            };
            Bind.prototype._determineType = function () {
                if (!isNull(this.templateControl) && this._observingBindableProperty()) {
                    return;
                }
                var element = this.element;
                if (isNull(element)) {
                    return;
                }
                switch (element.nodeName.toLowerCase()) {
                    case 'textarea':
                        this._addEventType = this._addTextEventListener;
                        this._getter = this._getValue;
                        this._setter = this._setText;
                        break;
                    case 'input':
                        switch (element.type) {
                            case 'button':
                            case 'submit':
                            case 'reset':
                                this._addEventType = this._addButtonEventListener;
                                this._getter = this._getValue;
                                break;
                            case 'checkbox':
                                this._addEventType = this._addChangeEventListener;
                                this._getter = this._getChecked;
                                this._setter = this._setChecked;
                                break;
                            case 'radio':
                                this._initializeRadio();
                                break;
                            case 'range':
                                this._addEventType = this._addChangeEventListener;
                                this._getter = this._getValue;
                                this._setter = this._setRange;
                                break;
                            case 'file':
                                var multi = element.multiple;
                                this._addEventType = this._addChangeEventListener;
                                this._getter = multi ? this._getFiles : this._getFile;
                                break;
                            default:
                                this._addEventType = this._addTextEventListener;
                                this._getter = this._getValue;
                                this._setter = this._setText;
                                break;
                        }
                        break;
                    case 'select':
                        this._initializeSelect();
                        break;
                    case 'button':
                        this._addEventType = this._addButtonEventListener;
                        this._getter = this._getTextContent;
                        break;
                }
            };
            Bind.prototype._watchExpression = function () {
                var _this = this;
                var contextExpression = this._contextExpression, context = this.evaluateExpression(contextExpression);
                if (!isObject(context)) {
                    if (isNull(context) && contextExpression.identifiers.length > 0) {
                        context = this.$ContextManagerStatic.createContext(this.parent, contextExpression.identifiers[0]);
                    }
                    else {
                        var Exception = acquire(__ExceptionStatic);
                        Exception.warn('plat-bind is trying to index into a primitive type. ' + this._contextExpression.expression + ' is already defined and not ' + 'an object when trying to evaluate plat-bind="' + this._expression.expression + '"', Exception.BIND);
                    }
                }
                var property;
                if (!isFunction(this._setter)) {
                    return;
                }
                else if (this._setter === this._setSelectedIndices) {
                    property = this._property;
                    if (isNull(context[property])) {
                        context[property] = [];
                    }
                    this.observeArray(context, property, null, function (arrayInfo) {
                        _this._setter(arrayInfo.newArray, arrayInfo.oldArray, true);
                    });
                }
                var expression = this._expression;
                this.observeExpression(expression, this._setter);
                this._setter(this.evaluateExpression(expression), undefined, true);
            };
            Bind.prototype._propertyChanged = function () {
                if (isNull(this._contextExpression)) {
                    return;
                }
                var context = this.evaluateExpression(this._contextExpression), property = this._property;
                var newValue = this._getter();
                if (isNull(context) || context[property] === newValue) {
                    return;
                }
                this.__isSelf = true;
                context[property] = newValue;
                this.__isSelf = false;
            };
            Bind.prototype._initializeRadio = function () {
                var element = this.element;
                this._addEventType = this._addChangeEventListener;
                this._getter = this._getValue;
                this._setter = this._setRadio;
                if (!element.hasAttribute('name')) {
                    var attr = camelCase(this.type), expression = this.attributes[attr];
                    element.setAttribute('name', expression);
                }
                if (element.hasAttribute('value')) {
                    return;
                }
                element.setAttribute('value', '');
            };
            Bind.prototype._initializeSelect = function () {
                var element = this.element, multiple = element.multiple, options = element.options, length = options.length, option;
                this._addEventType = this._addChangeEventListener;
                if (multiple) {
                    this._getter = this._getSelectedValues;
                    this._setter = this._setSelectedIndices;
                }
                else {
                    this._getter = this._getValue;
                    this._setter = this._setSelectedIndex;
                }
                for (var i = 0; i < length; ++i) {
                    option = options[i];
                    if (!option.hasAttribute('value')) {
                        option.setAttribute('value', option.textContent);
                    }
                }
            };
            Bind.prototype._checkAsynchronousSelect = function () {
                var _this = this;
                var select = this.templateControl;
                if (!isNull(select) && (select.type === __Select || select.type === __ForEach) && isPromise(select.itemsLoaded)) {
                    var split = select.absoluteContextPath.split('.'), key = split.pop();
                    this.observeArray(this.$ContextManagerStatic.getContext(this.parent, split), key, null, function (ev) {
                        select.itemsLoaded.then(function () {
                            _this._setter(_this.evaluateExpression(_this._expression));
                        });
                    });
                    select.itemsLoaded.then(function () {
                        _this._setter(_this.evaluateExpression(_this._expression));
                    });
                    return true;
                }
                return false;
            };
            Bind.prototype._observingBindableProperty = function () {
                var _this = this;
                var templateControl = this.templateControl;
                if (isFunction(templateControl.observeProperty) && isFunction(templateControl.setProperty)) {
                    templateControl.observeProperty(function (newValue) {
                        _this._getter = function () { return newValue; };
                        _this._propertyChanged();
                    });
                    this._setter = this._setBindableProperty;
                    return true;
                }
                return false;
            };
            Bind.prototype._setBindableProperty = function (newValue, oldValue, firstTime) {
                if (this.__isSelf || newValue === oldValue) {
                    return;
                }
                this.templateControl.setProperty(newValue, oldValue, firstTime);
            };
            Bind.prototype._setValue = function (newValue) {
                var element = this.element;
                if (element.value === newValue) {
                    return;
                }
                element.value = newValue;
            };
            return Bind;
        })(AttributeControl);
        controls.Bind = Bind;
        register.control(__Bind, Bind);
        var ObservableAttributeControl = (function (_super) {
            __extends(ObservableAttributeControl, _super);
            function ObservableAttributeControl() {
                _super.apply(this, arguments);
                this.$ContextManagerStatic = acquire(__ContextManagerStatic);
                this.property = '';
                this.priority = 200;
                this._listeners = [];
                this._boundAddListener = this._addListener.bind(this);
            }
            ObservableAttributeControl.prototype.initialize = function () {
                this.attribute = camelCase(this.type);
                this._setProperty(this._getValue());
            };
            ObservableAttributeControl.prototype.loaded = function () {
                this._observeProperty();
                this._setProperty(this._getValue());
            };
            ObservableAttributeControl.prototype.dispose = function () {
                if (isFunction(this._removeListener)) {
                    this._removeListener();
                }
                this._listeners = [];
            };
            ObservableAttributeControl.prototype._setProperty = function (value, oldValue) {
                var templateControl = this.templateControl;
                if (isNull(templateControl)) {
                    return;
                }
                this.$ContextManagerStatic.defineGetter(templateControl, this.property, {
                    value: value,
                    observe: this._boundAddListener
                }, true, true);
                this._callListeners(value, oldValue);
            };
            ObservableAttributeControl.prototype._callListeners = function (newValue, oldValue) {
                var listeners = this._listeners, length = listeners.length;
                for (var i = 0; i < length; ++i) {
                    listeners[i](newValue, oldValue);
                }
            };
            ObservableAttributeControl.prototype._addListener = function (listener) {
                var listeners = this._listeners;
                listener = listener.bind(this.templateControl);
                listeners.push(listener);
                return function () {
                    var index = listeners.indexOf(listener);
                    if (index === -1) {
                        return;
                    }
                    listeners.splice(index, 1);
                };
            };
            ObservableAttributeControl.prototype._getValue = function () {
                if (isNull(this.templateControl)) {
                    return;
                }
                return this.evaluateExpression(this.attributes[this.attribute]);
            };
            ObservableAttributeControl.prototype._observeProperty = function () {
                if (isNull(this.templateControl)) {
                    return;
                }
                this._removeListener = this.observeExpression(this.attributes[this.attribute], this._setProperty);
            };
            return ObservableAttributeControl;
        })(AttributeControl);
        controls.ObservableAttributeControl = ObservableAttributeControl;
        var Options = (function (_super) {
            __extends(Options, _super);
            function Options() {
                _super.apply(this, arguments);
                this.property = 'options';
            }
            return Options;
        })(ObservableAttributeControl);
        controls.Options = Options;
        register.control(__Options, Options);
    })(controls = _plat.controls || (_plat.controls = {}));
    var App = (function () {
        function App() {
            var ContextManager = acquire(__ContextManagerStatic);
            ContextManager.defineGetter(this, 'uid', uniqueId(__Plat));
        }
        App.start = function () {
            if (!App.$Compat.isCompatible) {
                var $exception = acquire(__ExceptionStatic);
                $exception.fatal('PlatypusTS only supports modern browsers where ' + 'Object.defineProperty is defined', $exception.COMPAT);
                return;
            }
            App.__addPlatCss();
            var $EventManagerStatic = App.$EventManagerStatic;
            $EventManagerStatic.dispose(__APP);
            $EventManagerStatic.on(__APP, __ready, App.__ready);
            $EventManagerStatic.on(__APP, __shutdown, App.__shutdown);
            $EventManagerStatic.initialize();
        };
        App.registerApp = function (appInjector) {
            if (!isNull(App.app) && isString(App.app.uid)) {
                App.$EventManagerStatic.dispose(App.app.uid);
            }
            App.__injector = appInjector;
            if (App.$Compat.amd) {
                var $LifecycleEventStatic = App.$LifecycleEventStatic, dispatch = $LifecycleEventStatic.dispatch;
                postpone(function () {
                    dispatch(__ready, $LifecycleEventStatic);
                });
            }
        };
        App.load = function (node) {
            var $LifecycleEventStatic = App.$LifecycleEventStatic, $compiler = App.$Compiler, body = App.$Document.body, head = App.$Document.head;
            $LifecycleEventStatic.dispatch(__beforeLoad, App);
            if (isNull(node)) {
                body.setAttribute(__Hide, '');
                postpone(function () {
                    $compiler.compile(head);
                    $compiler.compile(body);
                    body.removeAttribute(__Hide);
                });
                return;
            }
            if (isFunction(node.setAttribute)) {
                node.setAttribute(__Hide, '');
                postpone(function () {
                    $compiler.compile(node);
                    node.removeAttribute(__Hide);
                });
                return;
            }
            $compiler.compile(node);
        };
        App.__ready = function (ev) {
            dependency.Injector.initialize();
            App.__registerAppEvents(ev);
            if (!ev.defaultPrevented) {
                App.load();
            }
        };
        App.__shutdown = function () {
            var app = navigator.app;
            if (!isNull(app) && isFunction(app.exitApp)) {
                app.exitApp();
            }
        };
        App.__registerAppEvents = function (ev) {
            var appInjector = App.__injector;
            if (isNull(appInjector) || !isFunction(appInjector.inject)) {
                return;
            }
            var app = App.app = appInjector.inject();
            app.on(__suspend, app.suspend);
            app.on(__resume, app.resume);
            app.on(__online, app.online);
            app.on(__offline, app.offline);
            app.on(__error, app.error);
            if (isFunction(app.ready)) {
                app.ready(ev);
            }
        };
        App.__addPlatCss = function () {
            var $document = App.$Document;
            if (App.$Compat.platCss) {
                return;
            }
            else if (!isNull($document.styleSheets) && $document.styleSheets.length > 0) {
                $document.styleSheets[0].insertRule('[plat-hide] { display: none !important; }', 0);
                return;
            }
            var style = document.createElement('style');
            style.textContent = '[plat-hide] { display: none !important; }';
            document.head.appendChild(style);
        };
        App.prototype.suspend = function (ev) {
        };
        App.prototype.resume = function (ev) {
        };
        App.prototype.error = function (ev) {
        };
        App.prototype.ready = function (ev) {
        };
        App.prototype.online = function (ev) {
        };
        App.prototype.offline = function (ev) {
        };
        App.prototype.dispatchEvent = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var $EventManagerStatic = App.$EventManagerStatic || acquire(__EventManagerStatic);
            $EventManagerStatic.dispatch(name, this, $EventManagerStatic.DIRECT, args);
        };
        App.prototype.on = function (name, listener) {
            var $EventManagerStatic = App.$EventManagerStatic || acquire(__EventManagerStatic);
            return $EventManagerStatic.on(this.uid, name, listener, this);
        };
        App.prototype.load = function (node) {
            App.load(node);
        };
        App.app = null;
        return App;
    })();
    _plat.App = App;
    function IAppStatic($Compat, $EventManagerStatic, $Document, $Compiler, $LifecycleEventStatic) {
        App.$Compat = $Compat;
        App.$EventManagerStatic = $EventManagerStatic;
        App.$Document = $Document;
        App.$Compiler = $Compiler;
        App.$LifecycleEventStatic = $LifecycleEventStatic;
        return App;
    }
    _plat.IAppStatic = IAppStatic;
    register.injectable(__AppStatic, IAppStatic, [
        __Compat,
        __EventManagerStatic,
        __Document,
        __Compiler,
        __LifecycleEventStatic
    ], __STATIC);
    function IApp($AppStatic) {
        return $AppStatic.app;
    }
    _plat.IApp = IApp;
    register.injectable(__App, IApp, [__AppStatic], __INSTANCE);
})(plat || (plat = {}));
//# sourceMappingURL=platypus.js.map