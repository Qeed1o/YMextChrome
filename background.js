var 
	TrackArray = [];

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	if (response.from == 'main'){ TrackArray.push(response.msg); }
	
	if (response.from == 'popup' && response.msg == 'array'){
		chrome.runtime.sendMessage({from : 'background',
									msg : TrackArray,
									array : true});
	}
})