var ysa = {};

Ti.include(
	'ui.js'
);

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#a4cfbe');
Ti.UI.setBackgroundImage('win-bg.png');
// change the status bar to the black version
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;

// Instantiate the UI
ysa.tabs = ysa.ui.createApplicationWindow();
ysa.tabs.open();