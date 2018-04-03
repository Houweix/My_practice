
function Box(w, h, c) {
			this.width = w;
			this.height = h;
			this.bgColor = c;
		}
		Box.prototype.addTo = function(selector){
			this.holder = [];
			var s = selector.charAt(0);
			switch(s){
				case '#':
					this.holder.push[document.getElementById(selector.substr(1))];
					break;
				case '.':
					this.holder = document.getElementsByClassName(selector.substr(1));
					break;
				default:
					this.holder = document.getElementsByTagName(selector);
			}
			this.box = document.createElement('div');
			this.box.style.width = this.width + 'px';
			this.box.style.height = this.height + 'px';
			this.box.style.backgroundColor = this.bgColor;
			this.holder[0].appendChild(this.box);
			return this;
		};
		Box.prototype.delay = function(time){
			this.delay = time;
			return this;
		};
		Box.prototype.remove = function(){
			var that = this;
			if(this.delay){
				setTimeout(function(){
					that.holder[0].removeChild(that.box);
				}, this.delay);
			}else{
				this.holder[0].removeChild(this.box);
			}
		};

		new Box(100,100,'red').addTo('body').addTo('body').delay(30).remove();
