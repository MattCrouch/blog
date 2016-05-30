var CookieAllow = (function() {
	var cookieName = "eu-cookie-allow";
	var banner;

	var hasOptedIn = function() {
		if(hasCookie()) {
			var result = getCookieValue();

			if(result === true) {
				return true;
			}

			return false;
		}

		return true;
	};

	var hasCookie = function() {
		if (document.cookie.indexOf(cookieName) >= 0) {
			return true;
		} else {
			return false;
		}
	};

	var getCookieValue = function() {
		var cookies = document.cookie.split('; ');
		
		for(var i = 0; i < cookies.length; i++) {
			var values = cookies[i].split('=');
			if(values[0] == cookieName) {
				if(values[1] == "1") {
					return true;
				}

				return false;
			}
		}

		return undefined;
	};

	var setCookie = function(result) {
		document.cookie = cookieName + "=" + (result ? 1 : 0) + "; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
	};

	var registerGoogleAnalytics = function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-3312321-6', 'auto');
		ga('send', 'pageview');
	};

	var showConfirmation = function() {
		banner = document.createElement("div");
		banner.id = "eu-cookie-allow";
		banner.innerHTML = "This website uses cookies to be sure you're getting the best experience.";

		var optOut = document.createElement("button");
		optOut.id = "eu-cookie-opt-out";
		optOut.innerHTML = "Opt Out";

		var dismiss = document.createElement("button");
		dismiss.id = "eu-cookie-dismiss";
		dismiss.innerHTML = "Dismiss";

		banner.appendChild(optOut);
		banner.appendChild(dismiss);

		document.body.insertBefore(banner, document.body.firstChild);

		optOut.addEventListener("click", function() {
			setCookie(false);
			hideConfirmation();
		});

		dismiss.addEventListener("click", function() {
			hideConfirmation();
		});
	};

	var hideConfirmation = function() {
		document.body.removeChild(banner);
	};

	if(!hasCookie()) {
		showConfirmation();
		setCookie(true);
	}

	if(hasOptedIn()) {
		registerGoogleAnalytics();
	}

	return {
		hasOptedIn: hasOptedIn
	};
})();