function createTabGallery(){
	//Div for all gallery pictures
	var div = document.getElementById('tabGalleryPlaceholder');
	
	for (var i in imageGal){
		//Initialize tags
		var link = document.createElement('a');
		var galImg = document.createElement('img');
		var captionDiv = document.createElement('div');
		
		//Image tags
		var imageDiv = document.createElement('div');
		var close = document.createElement('span');
		var galleryImage = document.createElement('img');
		
		//Add data to images
		imageDiv.id = "myModal"+i;
		imageDiv.className = "modal";
		
		//Close button
		close.className = "close";
		close.innerHTML = "&times;";	
		close.onclick = ( function(i) { return function(){
			//Closes the modal image
			var modal = document.getElementById('myModal'+i);
			modal.style.display = "none";	
		} } )(i);
		
		//Add data to gallery image
		galleryImage.className = "modal-content";
		galleryImage.id = "img"+i;
		
		//Add data to caption
		captionDiv.id = "caption"+i;
		captionDiv.className = "allcaptions";
		
		//Add data to link
		link.id = "myImg"+i;
		link.className = "highslide";
		link.onclick = ( function(i) { return function(){showImage(i) } } )(i);
		
		
		//Add data to thumb
		galImg.src = imageGal[i].gallerythumb;
		
		//Add to HTML file
		div.appendChild(link);
		link.appendChild(galImg);
		div.appendChild(imageDiv);
		imageDiv.appendChild(close);
		imageDiv.appendChild(galleryImage);
		imageDiv.appendChild(captionDiv);
	}
	
}//end of createTabGallery

function showImage(x){
	// Get the modal
	var modal = document.getElementById('myModal'+x);
	var img = document.getElementById('myImg'+x);
	var modalImg = document.getElementById("img"+x);
	var captionText = document.getElementById("caption"+x);
	//Display the image
	modal.style.display = "block";
	modalImg.src = imageGal[x].galleryimage;
    captionText.innerHTML = imageGal[x].gallerycaption;
}//end of showImage
