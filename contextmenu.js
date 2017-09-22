function MouseMenu(obj) {
	this.obj = obj;
	this.elem = document.querySelector("div.rmouse");
	this.init(obj);
}
MouseMenu.prototype.init = function(obj) {
		var menus = obj.menus || [],
		elem = this.elem,
		ul = document.createElement('ul');
		ul.setAttribute("class", "menu-nav");
		ul.addEventListener('click', function() {
			elem.style.display = 'none';
		})
		for (var i in menus) {
			(function(item) {
				var text = item.text || "unamed",
				fn = item.fn;
				var li = document.createElement('li');
				li.innerText = text;
				if (li.addEventListener) {
					li.addEventListener('click', fn);
				} else if (li.attachEvent){
					li.attachEvent('click', fn);
				} else {
					li.onclick = fn;
				}
				ul.appendChild(li);
			})(menus[i])
		}
		elem.appendChild(ul);
		document.oncontextmenu = function(e) {
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			var x = e.clientX,
			y = e.clientY;
			elem.style.top = y + "px";
			elem.style.left = x + "px";
			elem.style.display = "block";
		}
}