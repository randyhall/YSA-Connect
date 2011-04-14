(function () {
	
	ysa.ui = {};
	
	var events = [
		['Cherry Creek Service Project','April 16,2011 7:00 pm','Cherry Creek Retirement Home','18 other people are going','retire.png'],
		['Ward "Grill and Chill" BBQ','April 27, 2011 5:00 pm','River Park','38 other people are going','bbq.png'],
		['YSA Regional Dance','May 11, 2011 8:00 pm','Oak Ridge Stake Center','You and 109 others are going','dance.png'],
		['CES Broadcast with Elder Scott','June 6, 2011 7:00 pm','Oak Ridge Stake Center','You and 37 others are going','church.png'],
		['Enchantment Under the Sea Dance','June 17, 2011 8:00 pm','Park Place Stake Center','138 other people are going','dance.png']
	];
	
	ysa.ui.createSettingsWindow = function () {
		var win = Ti.UI.createWindow({
			layout:'vertical',
			navBarHidden:true,
			tabBarHidden:true,
			height:424,
			top:0
		});
		
		var scroll = Ti.UI.createScrollView({
			layout:'vertical',
			height:424
		});
		
		scroll.add(Ti.UI.createImageView({
			image:'table-header.png',
			height:45
		}));
		
		var con = Ti.UI.createView({
			backgroundImage:'table-shadow.png',
			layout:'vertical',
			height:'auto'
		});
		
		/*
win.setLeftNavButton(Ti.UI.createButton({
			title:L('cancel')
		}));
		
		win.setRightNavButton(Ti.UI.createButton({
			title:L('done')
		}));
*/
		
		con.add(Ti.UI.createLabel({
			text:L('profile'),
			height:'auto',
			width:280,
			top:15
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('display_name'),
			height:'auto',
			width:280,
			font:{fontSize:13},
			top:5
		}));
		
		con.add(Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('area_interest'),
			height:'auto',
			width:280,
			top:15
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('church_areas'),
			height:'auto',
			width:280,
			font:{fontSize:13},
			top:5
		}));
		
		con.add(Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('include_location'),
			height:'auto',
			width:280,
			font:{fontSize:13},
			top:25
		}));
		
		con.add(Ti.UI.createSwitch({
			value:true,
			right:20,
			top:-20
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('options'),
			height:'auto',
			width:280,
			top:45
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('display_location'),
			height:'auto',
			width:280,
			font:{fontSize:13},
			top:15
		}));
		
		con.add(Ti.UI.createSwitch({
			value:true,
			right:20,
			top:-20
		}));
		
		con.add(Ti.UI.createLabel({
			text:L('display_profile'),
			height:'auto',
			width:280,
			font:{fontSize:13},
			top:45
		}));
		
		con.add(Ti.UI.createSwitch({
			value:true,
			right:20,
			top:-20
		}));
		
		scroll.add(con);
		
		scroll.add(Ti.UI.createImageView({
			image:'table-footer.png',
			height:12
		}));
		
		win.add(scroll);
		
		return win;
	};
	
	ysa.ui.createAddWindow = function () {
		var win = Ti.UI.createWindow({
			layout:'vertical',
			navBarHidden:true,
			tabBarHidden:true,
			height:424,
			top:0
		});
		
		var scroll = Ti.UI.createScrollView({
			layout:'vertical',
			height:424
		});
		
		scroll.add(Ti.UI.createImageView({
			image:'table-header.png',
			height:45
		}));
		
		var con = Ti.UI.createView({
			backgroundImage:'table-shadow.png',
			layout:'vertical',
			height:'auto'
		});
		
		con.add(Ti.UI.createLabel({
			text:L('event_name_label'),
			height:24,
			width:280,
			top:15
		}));
		
		var evName = Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		});
		con.add(evName);
		
		con.add(Ti.UI.createLabel({
			text:L('event_date_label'),
			height:24,
			width:280,
			top:15
		}));
		
		var evDate = Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		});
		evDate.addEventListener('click',function() {
			evDate.blur();
			var datePick = Ti.UI.createPicker({
				type:Titanium.UI.PICKER_TYPE_DATE_AND_TIME
			});
			scroll.add(datePick);
		});
		con.add(evDate);
		
		con.add(Ti.UI.createLabel({
			text:L('event_location_label'),
			height:24,
			width:280,
			top:15
		}));
		
		var evLocation = Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		});
		con.add(evLocation);
		
		con.add(Ti.UI.createLabel({
			text:L('event_img_label'),
			height:24,
			width:280,
			top:15
		}));
		
		var evImg = Ti.UI.createTextField({
			height:30,
			width:280,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			top:5
		});
		con.add(evImg);
		
		var cancelBtn = Ti.UI.createButton({
			title:L('never_mind'),
			height:30,
			width:135,
			top:20,
			left:20,
			font:{fontSize:13,fontWeight:'bold'}
		});
		cancelBtn.addEventListener('click',function () {
			win.tabGroup.setActiveTab(0);
		});
		con.add(cancelBtn);
		
		var submitBtn = Ti.UI.createButton({
			title:L('make_it_happen'),
			height:30,
			width:135,
			top:-30,
			bottom:15,
			right:20,
			font:{fontSize:13,fontWeight:'bold'}
		});
		submitBtn.addEventListener('click',function() {
			// show alert that the event will be sent to the Bishop for approval. Ask if they want to proceed
			var approvalAlert = Ti.UI.createAlertDialog({
				message:L('submit_ok'),
				buttonNames:[L('cancel'),L('go_ahead')],
				cancel:1
			});
			approvalAlert.addEventListener('click',function(e) {
				if(e.index == 1) {
					// get the data and submit
					
					// show submitted alert
					Ti.UI.createAlertDialog({
						message:'Congratulations!\nYour event was created and is awaiting approval from your Bishop'
					}).show();
					
					// clear the fields and get ready for another round
					evName.value = '';
					evDate.value = '';
					evLocation.value = '';
					evImg.value = '';
				}
			});
			approvalAlert.show();
			
		});
		con.add(submitBtn);
		
		scroll.add(con);
		
		scroll.add(Ti.UI.createImageView({
			image:'table-footer.png',
			height:12
		}));
		
		win.add(scroll);
		
		return win;
	};
	
	ysa.ui.createDetailWindow = function (_event) {
		var win = Ti.UI.createWindow({
			layout:'vertical',
			navBarHidden:true,
			tabBarHidden:true,
			height:424,
			top:0
		});
		
		var container = Ti.UI.createView({
			layout:'vertical',
			height:424,
			top:0
		});
		
		var header = Ti.UI.createView({
			backgroundImage:'table-header.png',
			height:45
		});
		
		var backBtn = Ti.UI.createButton({
			title:L('back'),
			textAlign:'center',
			height:32,
			width:60,
			top:7,
			left:10,
			font:{fontSize:13,fontWeight:'bold'},
			backgroundImage:'back-button.png',
			backgroundLeftCap:14
		});
		backBtn.addEventListener('click',function() {
			// Go back to Events Table
			win.close();
		})
		
		header.add(backBtn);
		container.add(header);
		
		var con = Ti.UI.createView({
			backgroundImage:'table-shadow.png',
			layout:'vertical',
			height:'auto'
		});
		
		con.add(Ti.UI.createLabel({
			text:_event.name,
			height:15,
			width:280,
			font:{fontFamily:'American Typewriter',fontSize:16,fontWeight:'normal'},
			color:'#569dda',
			top:15,
			left:20,
			ellipsize:true
		}));
		
		con.add(Ti.UI.createLabel({
			text:_event.date,
			height:14,
			width:280,
			font:{fontSize:12, fontFamily:'TrebuchetMS'},	
			top:5,
			left:20
		}));
		
		con.add(Ti.UI.createLabel({
			text:_event.location,
			height:14,
			width:280,
			font:{fontSize:12, fontFamily:'TrebuchetMS'},
			left:20
		}));
		
		// create MapView centered on the event location and wide enough to show all attendees
		var map = Ti.Map.createView({
			width:280,
			height:200,
			top:10,
			userLocation:false,
			regionFit:true
		});
		// for demo purposes only, sets map position to current location
		Titanium.Geolocation.distanceFilter = 10;
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
		Ti.Geolocation.preferredProvider = "gps";
		Ti.Geolocation.purpose = "GPS demo";
		Titanium.Geolocation.getCurrentPosition(function(e) {
			if (!e.success || e.error) {
				currentLocation.text = 'error: ' + JSON.stringify(e.error);
				Ti.API.info("Code translation: "+translateErrorCode(e.code));
				alert('error ' + JSON.stringify(e.error));
				return;
			}
			map.setLocation({latitude:(e.coords.latitude+0.005),longitude:(e.coords.longitude-0.005),latitudeDelta:0.015,longitudeDelta:0.015});
			map.addAnnotations([
				{latitude:(e.coords.latitude-0.005),longitude:(e.coords.longitude-0.005)},
				{latitude:(e.coords.latitude+0.007),longitude:(e.coords.longitude+0.007)},
				{latitude:(e.coords.latitude-0.007),longitude:(e.coords.longitude-0.006)},
				{latitude:(e.coords.latitude+0.005),longitude:(e.coords.longitude-0.007)}
			]);
		});
		con.add(map);
		
		var attending = Ti.UI.createLabel({
			text:_event.attendees,
			height:14,
			width:280,
			font:{fontSize:12, fontFamily:'TrebuchetMS'},
			top:15,
			left:20
		});
		con.add(attending);
		
		var acceptBtn = Ti.UI.createButton({
			title:L('accept'),
			height:30,
			width:135,
			top:15,
			left:20,
			font:{fontSize:13,fontWeight:'bold'}
		});
		acceptBtn.addEventListener('click',function () {
			// set status to Accepted
			
			// get GPS coordinates
			Titanium.Geolocation.distanceFilter = 10;
			Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
			Ti.Geolocation.preferredProvider = "gps";
			Ti.Geolocation.purpose = "GPS demo";
			Titanium.Geolocation.getCurrentPosition(function(e) {
				if (!e.success || e.error) {
					currentLocation.text = 'error: ' + JSON.stringify(e.error);
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
					alert('error ' + JSON.stringify(e.error));
					return;
				}
				
				Ti.API.info(e.coords.latitude + ' ' + e.coords.longitude);
				// add pin to map
				map.addAnnotation(Ti.Map.createAnnotation({latitude:e.coords.latitude,longitude:e.coords.longitude,animate:true}));
			});
			attending.text="You and "+_event.attendees;
		});
		con.add(acceptBtn);
		
		var maybeBtn = Ti.UI.createButton({
			title:L('maybe'),
			height:30,
			width:135,
			top:-30,
			bottom:15,
			right:20,
			font:{fontSize:13,fontWeight:'bold'}
		});
		maybeBtn.addEventListener('click',function () {
			// set status to maybe
			
			// if they changed to maybe, remove the pin form the map
		});
		con.add(maybeBtn);
		
		container.add(con);
		
		container.add(Ti.UI.createImageView({
			image:'table-footer.png',
			height:12
		}));
		
		win.add(container);
		
		return win;
	};
	
	ysa.ui.createEventsTableView = function (_data) {
		var evTable = Ti.UI.createTableView({
			backgroundColor:'transparent',
			separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			minRowHeight:95,
			headerView:Ti.UI.createImageView({
				height:45,
				image:'table-header.png'
			}),
			footerView:Ti.UI.createImageView({
				height:12,
				image:'table-footer.png',
				top:0
			}),
			height:422,
			top:0
		});
		
		function populateData(_evData) {
			var rows = [];
			
			// create 1 row, insert data into the label, add row to table, and then increment and repeat
			for(var x=0; x<_data.length; x++) {
				rows[x] = Ti.UI.createTableViewRow({
					name:_evData[x][0],
					date:_evData[x][1],
					location:_evData[x][2],
					attendees:_evData[x][3],
					backgroundImage:'table-shadow.png',
					selectedBackgroundImage:'table-selected-bg.png',
					height:'auto',
					layout:'absolute'
				});
				
				var evView = Ti.UI.createView({
					layout:'vertical',
					width:300,
					height:'auto'
				});
				
				evView.add(Ti.UI.createImageView({
					image:'image-bg.png',
					height:75,
					width:74,
					left:12,
					top:11
				}));
				
				evView.add(Ti.UI.createImageView({
					image:_evData[x][4],
					height:60,
					width:60,
					left:19,
					top:-68
				}));
				
				evView.add(Ti.UI.createLabel({
					text:_evData[x][0],
					height:'auto',
					width:195,
					font:{fontFamily:'American Typewriter',fontSize:16,fontWeight:'normal'},
					color:'#569dda',
					top:-68,
					left:95,
					ellipsize:true
				}));
				
				evView.add(Ti.UI.createLabel({
					text:_evData[x][1],
					height:'auto',
					width:195,
					font:{fontSize:13, fontFamily:'TrebuchetMS'},
					top:2,
					left:95,
					color:'#858687'
				}));
				
				evView.add(Ti.UI.createLabel({
					text:_evData[x][2],
					height:'auto',
					width:195,
					font:{fontSize:13, fontFamily:'TrebuchetMS'},
					top:2,
					left:95,
					color:'#858687'
				}));
				
				evView.add(Ti.UI.createLabel({
					text:_evData[x][3],
					height:'auto',
					width:195,
					font:{fontSize:13, fontFamily:'TrebuchetMS'},
					top:2,
					left:95,
					color:'#858687'
				}));
				
				if(x < (_data.length-1)) {
					evView.add(Ti.UI.createView({
						backgroundColor:'#d9d9d9',
						height:1,
						width:274,
						top:12
					}));
				} else {
					evView.add(Ti.UI.createView({
						backgroundColor:'#fff',
						height:1,
						width:300,
						top:12
					}));
				}
				
				rows[x].add(evView);
				
				evTable.appendRow(rows[x]);
			};
			
			evTable.setData(rows);
				
			evTable.addEventListener('click', function (_e) {
				Ti.API.info(_e.rowData.name);
				ysa.homeTab.open(ysa.ui.createDetailWindow(_e.rowData));
			});
		}
		
		populateData(_data);
		
		return evTable;
	};
	
	ysa.ui.createEventsWindow = function () {
		var win = Ti.UI.createWindow({
			navBarHidden:true,
			tabBarHidden:true,
			height:424,
			top:0
		});
		
		win.add(ysa.ui.createEventsTableView(events));
		
		return win;
	};
	
	ysa.ui.createApplicationWindow = function() {
		var tabGroup = Ti.UI.createTabGroup();
		var home = ysa.ui.createEventsWindow();
		var add = ysa.ui.createAddWindow();
		var settings = ysa.ui.createSettingsWindow();
		
		ysa.homeTab = Ti.UI.createTab({
			title: L('home'),
			window: home
		});
		
		ysa.addTab = Ti.UI.createTab({
			title:L('add'),
			window: add
		});
		
		ysa.settingsTab = Ti.UI.createTab({
			title:L('settings'),
			window: settings
		});
		
		tabGroup.addTab(ysa.homeTab);
		tabGroup.addTab(ysa.addTab);
		tabGroup.addTab(ysa.settingsTab);
		
		// open tab group
		tabGroup.open();
		
		// Here is the magic
		Ti.include("customTabBar.js");
		
		var ctb = new CustomTabBar({
			tabBar: tabGroup,
			width: 107,
			height: 63,
			items: [
				{ label:L('events') },
				{ label:L('add') },
				{ label:L('settings') }
			]
		});
		
		return tabGroup;
	};
	
})();