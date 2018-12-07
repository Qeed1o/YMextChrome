let
	trackName, groupName;

function HandleChanges(){
	setTimeout(console.log(),1000); // На всякий случай ждём 

	let 
		NewtrackName = document.getElementsByClassName('player-controls__title')[0]/*.textContent*/,
		NewgroupName = document.getElementsByClassName('player-controls__artists')[0]/*.textContent*/;

	if(trackName != NewtrackName && groupName != NewgroupName){ // Если трек поменялся
		trackName = NewtrackName;
		groupName = NewgroupName;

		WriteToFile(); // Записываем
	}
	//console.log(groupName.textContent + " : " + trackName.textContent); // Просто лог, вдруг что
}

window.onload = function(){ // При прогрузке страницы вешаем слушатель на любые изменения DOM'a
	document.addEventListener('DOMNodeInserted',HandleChanges);
}

function WriteToFile(){ // Кидаем сообщение 
	console.log("Send: " + groupName.textContent + " : " + trackName.textContent)
	chrome.runtime.sendMessage({from : 'main', msg : groupName.textContent + " : " + trackName.textContent});
}