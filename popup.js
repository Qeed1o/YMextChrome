var
	button, TrackArray = [], flag = true;

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	if (response.from == 'background' && response.array == true){
		TrackArray = response.msg;
	}
})

function refill(){
	chrome.runtime.sendMessage({from : 'popup', msg : 'array'});
	flag == false ? document.body.innerHTML = "" : console.log();
	for (let item = 0; item < TrackArray.length - 1; item += 3){
			if(item == 0){flag = false;}
			let div = document.createElement("div");
			div.className = "item";
			div.innerHTML = TrackArray[item];
			document.body.appendChild(div);
		}
}

document.onload = function(){
	refill();
};