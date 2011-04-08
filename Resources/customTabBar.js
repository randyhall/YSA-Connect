CustomTabBar = function(settings) {
	var tabBarItems = [];
	
	var resetTabs = function() {
		for(var i = 0; i < tabBarItems.length; i++) {
			// Clear all the images to make sure only
			// one is shown as selected
			tabBarItems[i].color = '#4E6865';
		}
	};
	
	var assignClick = function(tabItem) {
		tabItem.addEventListener('click', function(e) {
			// Just fetching the 'i' variable from the loop
			var pos = e.source.pos;
			
			// Switch to the tab associated with the image pressed
			settings.tabBar.tabs[pos].active = true;
			
			// Reset all the tab images
			resetTabs();
			
			// Set the current tab as selected
			animator.left = settings.width*pos;
			selectedImg.animate(animator);
			tabBarItems[pos].color = '#da6b56';
		});
	};
	
	// Create the container for our tab items
	var customTabBar = Ti.UI.createWindow({
		height:settings.height,
		bottom:0,
		backgroundImage:'tab-bar-bg.png'
	});
	
	var selectedImg = Ti.UI.createImageView({
		image:'tab-selected-bg.png',
		top:0,
		left:0,
		width:settings.width,
		height:settings.height
	});
	
	var animator = Ti.UI.createAnimation({
		duration:250
	});
	
	customTabBar.add(selectedImg);
	
	for(var i = 0; i < settings.items.length; i++) {
		// Go through each item and create an imageView
		tabBarItems[i] = Titanium.UI.createLabel({
			text:settings.items[i].label.toUpperCase(),
			textAlign:'center',
			color:'#4E6865',
			shadowColor:'#fff',
			shadowOffset:{x:0,y:1},
			font:{fontSize:12,fontFamily:'TrebuchetMS-Bold'},
			width:settings.width,
			height:settings.height - 8,
			left:settings.width * i,
			bottom:0
		});

		// Pass the item number (used later for changing tabs)
		tabBarItems[i].pos = i;
		assignClick(tabBarItems[i]);

		// Add to the container window
		customTabBar.add(tabBarItems[i]);
	}

	// Display the container and it's items
	customTabBar.open();

	// Set the first item as current :)
	resetTabs();
	tabBarItems[0].color = '#da6c55';
	
	return {
		hide:function() { customTabBar.hide(); },
		show:function() { customTabBar.show(); }
	};
};