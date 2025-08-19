function volume_sphere(event) {
    //Write your code here
	 event.preventDefault()
	const radius=document.getElementById("radius")
	const volume=document.getElementById("volume")
	const r=Number(radius.value)

	if (isNaN(r) || r < 0) {
    volume.value = "NaN";
    return;
  }
	
		volume.value=((4/3)*Math.PI*(r ** 3)).toFixed(4)
} 

const button=document.getElementById("button")
button.addEventListener("click",volume_sphere)
