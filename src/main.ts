import Bar from '@widgets/bar';
import BarMenu from '@widgets/barmenu';
import ClickOff from '@widgets/clickoff';

Utils.exec(`sass ${App.configDir}/styles/index.scss /tmp/ags/index.css`);
App.resetCss();
App.applyCss('/tmp/ags/index.css');

App.config({
	windows: [Bar, BarMenu, ClickOff],
});