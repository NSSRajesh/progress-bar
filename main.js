let bar=document.getElementById("bar");
let loading=document.getElementById("loading");
let barwidth=0;
const download=()=>{
	barwidth++;
	bar.style.width=`${barwidth}%`;
	setTimeout(()=>{
	loading.innerHTML=(barwidth==100)?`${barwidth}%completed`:`${barwidth}%progress)`},100);
}

setTimeout(()=>{
	let interval=setInterval(()=>{
		if(barwidth===100){
			clearInterval(interval)
		}
		else{
			download()
		}
	},100)
},2000);	