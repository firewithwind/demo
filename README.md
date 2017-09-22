# demo

small demos of javascript

**clock**

a small clock apply of Date

**contextmenu**

a demo of self contextmenu

lead into the css "contentmenu.css" and the javascript "contentmenu.js"

when you use it to make yourself contentmenu, you should define a "MouseMenu" with an argument of Object like

				var demo = new MouseMenu({
					menus: [
						{
							text: 'li1',
							fn: function() {
								console.log(1)
							}
						},
						{
							text: 'li2',
							fn: function() {
								console.log(2)
							}
						},
						{
							text: 'li3',
							fn: function() {
								console.log(3)
							}
						}
					]
				})