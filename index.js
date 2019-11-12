function slider(){
	let dots = document.querySelectorAll('.dot');
	let slides = document.querySelectorAll('.slide');
	let posts = document.querySelectorAll('.post');

	for(let i = 0;i < dots.length;i++){

		if(dots[i].classList.contains('active')){

			if(i == dots.length - 1){

				dots[i].classList.remove('active');				
				slides[i].classList.remove('visible');
				posts[i].classList.remove('visible');
				
				dots[0].classList.add('active');
				slides[0].classList.add('visible');
				posts[0].classList.add('visible');
				return;
			} 

			dots[i].classList.remove('active');
			slides[i].classList.remove('visible');
			posts[i].classList.remove('visible');

			dots[i + 1].classList.add('active');
			slides[i + 1].classList.add('visible');
			posts[i + 1].classList.add('visible');
			return;
		}
	}
}

setInterval(slider, 2500);

















































