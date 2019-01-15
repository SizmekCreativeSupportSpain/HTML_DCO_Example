var localPreview = false;
try {
	localPreview = document.location === top.location;
}
catch (e) {}

function initializeLocalPreview() {
	var ua = navigator.userAgent;
	EB = {
		_adConfig: {
			adId: 0,
			rnd: 0,
			uid: 0
		},
		API: {
			os: {
				ios: ua.match(/ipod|iphone|ipad/i) !== null
			},
			Adaptor: {
				getCustomVar: function() {return true;},
				setStyle: function(){return true;}
			}
		},
		getSDKData: function() {
			return null;
		},
		clickthrough: function(data) {
			if (data) {
				console.log('Click:',data);	
			}else{
				console.log('Click');
			}
			
			return true;
		},
		automaticEventCounter: function(data) {
			console.log('AutomaticEventCounter',data);
			return true;
		},
		userActionCounter: function(data) {
			console.log('UserActionCounter',data);
			return true;
		},
		_sendMessage: function() {
			return true;
		},
		expand: function(data) {
			console.log('Expand',data);
			return true;
		},
		collapse: function(data) {
			console.log('Collapse');
			return true;
		}
	};
	EBG = {
		VideoModule: function(video) {
			return {
				_videoElement: video,
				playVideo: function() {
					this._videoElement.play();
				}
			};
		}
	};
	var visibilityStyle = document.createElement("style");
	visibilityStyle.innerHTML = "html, body, div, video {visibility: visible !important;}";
	document.getElementsByTagName("head")[0].appendChild(visibilityStyle);
}