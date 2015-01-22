/// <reference path="./references.d.ts" />
declare var require: any;

require('./lib/colpick/js/colpick');
require('./lib/markdown/lib/markdown');
require('./lib/platypusui/platypusui');

// injectables
require('./common/injectables/jquery.injectable');
require('./common/injectables/marked.injectable');

// template controls
require('./common/templatecontrols/markeddisplay/markeddisplay.templatecontrol');
require('./common/templatecontrols/navigation/navigation.templatecontrol');
require('./common/templatecontrols/socialauth/socialauth.templatecontrol');

// view controls
require('./viewcontrols/about/about.viewcontrol');
require('./viewcontrols/auth/login/login.viewcontrol');
require('./viewcontrols/auth/register/register.viewcontrol');
require('./viewcontrols/blog/list/list.viewcontrol');
require('./viewcontrols/blog/manage/manage.viewcontrol');
require('./viewcontrols/blog/single/single.viewcontrol');
require('./viewcontrols/tools/boxshadow/boxshadow.viewcontrol');
require('./viewcontrols/tools/home/home.viewcontrol');

// app
require('./app/app');
