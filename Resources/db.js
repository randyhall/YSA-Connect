(function() {
	ysa.db = {}; // create database namespace
	
	var db = Ti.Database.open('ysa');
	// create a table to store events
	db.execute('CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY, name TEXT, date ???, time ???, locName TEXT, locLat REAL, locLong REAL, img TEXT, status INTEGER)');
	// create a table to store users
	db.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT)');
	// create a table to track attendees to events (which user is attending which event)
	db.execute('CREATE TABLE IF NOT EXISTS attendees(id INTEGER PRIMARY KEY, evID INTEGER, userID INTEGER)');
	db.close();
	
	ysa.db.evList = function(_ev) {
		var rows = [];
		var db = Ti.Database.open('ysa');
		var result = db.execute('SELECT * FROM events WHERE status = ? ORDER BY date ASC', 1);
		while (result.isValidRow()) {
			rows.push({
				name:fieldByName('name'),
				date:fieldByName('date'),
				time:fieldByName('time'),
				locName:fieldByName('locName'),
				locLat:fieldByName('locLat'),
				locLong:fieldByName('locLong'),
				img:fieldByName('img'),
				// need to add attendees to the event row
				height:95
			});
			result.next();
		};
		result.close();
		db.close();
		
		return rows;
		
		// old stuff here
		// create 1 row, insert data into the label, add row to table, and then increment and repeat
		/*
for(var x=0; x<_data.length; x++) {
			rows[x] = Ti.UI.createTableViewRow({
				name:_evData[x][0],
				date:_evData[x][1],
				location:_evData[x][2],
				attendees:_evData[x][3],
				height:95
			});
			
			var evView = Ti.UI.createView({layout:'absolute'});
			
			evView.add(Ti.UI.createLabel({
				text:_evData[x][0],
				height:15,
				width:220,
				font:{fontSize:13,fontWeight:'bold'},
				top:5,
				left:5,
				ellipsize:true
			}));
			
			evView.add(Ti.UI.createLabel({
				text:_evData[x][1],
				height:14,
				width:220,
				font:{fontSize:12},
				top:20,
				left:5
			}));
			
			evView.add(Ti.UI.createLabel({
				text:_evData[x][2],
				height:14,
				width:220,
				font:{fontSize:12},
				top:36,
				left:5
			}));
			
			evView.add(Ti.UI.createLabel({
				text:_evData[x][3],
				height:'auto',
				width:220,
				font:{fontSize:12},
				bottom:5,
				left:5
			}));
			
			evView.add(Ti.UI.createImageView({
				image:_evData[x][4],
				height:85,
				width:85,
				top:5,
				right:5
			}));
			
			rows[x].add(evView);
			
			evTable.appendRow(rows[x]);
		};
		
		evTable.setData(rows);
			
		evTable.addEventListener('click', function (_e) {
			Ti.API.info(_e.rowData.name);
			ysa.homeTab.open(ysa.ui.createDetailWindow(_e.rowData));
		});
*/
	};
})();