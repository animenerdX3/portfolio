//Default index of the array
var index = 0;

//Image and Caption Variables
var the_image = document.getElementById("main-image");//Image
var the_caption = document.getElementById("description");//Caption

//Set the image and caption to the first ones by default
the_image.src = imageGal[0].galleryimage;//Image
description.innerHTML = imageGal[0].gallerycaption;//Caption

function show_image(direction)
{
  //If the left button is hit, go to the previous element in the array
  if (direction == "left")
  {
    index--;//Decrement by 1
  }
  //If the right button is hit, go to the next element in the array
  else
  {
    index++;//Increment by 1
    index %= imageGal.length;//Divide the index by the image length and set it to the remainder (helps exception for hitting next on last image)
  }
  
  //If going previous from the first image, go to the last image
  if (index < 0)
  {
    index = imageGal.length - 1;//Set to array length - 1 aka the last element
  }
		
  the_image.src = imageGal[index].galleryimage;//Set the image to the current element
  description.innerHTML = imageGal[index].gallerycaption;//Set the caption to the current element

}