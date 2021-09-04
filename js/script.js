const btn = document.getElementById('button');
const commList = document.getElementById('comm-list');

let commentText = [];

loadComm();


let but = btn.onclick=()=>{
	event.preventDefault();

	let comm = document.getElementById('comment');

	let comment = {
		comm: comm.value,
	}

	commentText.push(comment)

	comm.value = '';

	saveComm();
	showComm();
}


function showComm(){
	let field = document.getElementById('comm-cont');
	let out = '';
	let name = 'Name Name';
	let date = new Date().toLocaleString("ru", {
		year: 'numeric',
        month: 'long',
        day: 'numeric'
	})

	commentText.forEach((item)=>{
		out += `<div class='comment-list'><p class='name-comm'>${name} <span class='name-comm-date'>${date}</span></p><div class='comment-item'>${item.comm}</div>
		</div>`
	})


	

	
	field.innerHTML = out;

}




//------------------------------------SAVE LOCAL--------------------------//
function saveComm(){
	localStorage.setItem('commentText', JSON.stringify(commentText));

}
function loadComm(){
	if(localStorage.getItem('commentText')) commentText = JSON.parse(localStorage.getItem('commentText'));
	showComm();
}
//-------------------------------------//-------------------------------//




let flag = false; 



document.onkeyup=function(e){


	if(e.code == 'ControlLeft' || e.code == 'ControlRight'){
		flag = true;
	}
	if(e.code == 'Enter' && flag){
		but();
	}
}

//ctrl 17
//enter 13