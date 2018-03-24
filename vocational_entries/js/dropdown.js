var link = 0;
function dropDown(i) {
	link = i;
    document.getElementById("myDropdown"+link).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown"+link);
      if (myDropdown.classList.contains('show')) {
        	myDropdown.classList.remove('show');
      }
  }
}

function showMenu(i){
	
	var mobileDropdown = document.getElementById("mobileDrop"+i);
	
	if(mobileDropdown.hasAttribute("style")){
		mobileDropdown.removeAttribute("style");
	}else{
		mobileDropdown.style.display='none';
	}
	
}