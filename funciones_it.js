//Visibility control functions for IT page
//by Jose Luis Campaña Perez
var nElements=6;

	function hideElement(id){
		document.getElementById(id).style.display='none';
	}
	function showElement(id){
		document.getElementById(id).style.display='block';
	}
	function showSubject(id){
		for (i=1;i<=nElements;i++){
			hideElement('section'+i);
		}
		showElement('section'+id);
	}
	
