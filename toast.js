function toast(msg, duration) {
	duration = isNaN(duration) ? 1500 : duration;
	let toastWarp = document.createElement('div');
	let toastMsg = document.createElement('div');
	let spanMsg = document.createElement('span');
	toastWarp.style.cssText = "width: 100%;display: flex;-webkit-box-flex: 1;-webkit-flex: 1;flex-direction: row;align-items: center;position: fixed;top: 80%;z-index: 999999;justify-content: center;";
	toastMsg.style.cssText = "min-width: 100px; max-width:300px; opacity: 0.9;height: 30px;color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;background: rgb(0, 0, 0);font-size: 14px;";
	spanMsg.style.cssText = "margin: 0 5px;";
	spanMsg.innerHTML = msg;
	toastMsg.appendChild(spanMsg);
	toastWarp.appendChild(toastMsg);
	document.body.appendChild(toastWarp);
	setTimeout(function () {
		let d = 0.5;
		toastMsg.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		toastMsg.style.opacity = '0';
		setTimeout(function () {
			document.body.removeChild(toastWarp)
		}, d * 1000);
	}, duration);
}
