(function($) {

	var saylist = Array(
		"You don't do the job you are supposed to do, nor do you take responsibilities for your actions.",
		"You are distant and disconnected. Frankly, I'm bored with reading all the email platitudes. Get out and mix with the people.",
		"Your decisions frequently don't make sense",
		"You have just put your head in the sand and shirked any responsibility. It is incredibly disheartening to work with someone who doesn't take what you are saying seriously and especially doesn't listen.",
		"I have multiple times marked a candidate as inapt to be a consultant YOU STILL HIRED THEM!! I don't believe this is normal, and I feel disrespected.  Shit people get hired even when we say not to hire them.",
		"We received bad feedback about you from the team, you will be replaced.",
		"If you are working in IAG, you will not be able to attend this session, please leave.",
		"Also, what exactly do you do? We don't hear from you anymore!"
	);

	function sayanother() {
		if (saylist.length > 0) {
			var index = Math.floor(Math.random()*saylist.length)
			var newsay = saylist[index];
			saylist.splice(index, 1);
			$('#saythis').html(newsay);
		} else {
			$('#saythisheader').html("Thank you!");
			$('#saythis').html("You have seen all the quotes.");			
			$('#sayanother_span').html('');
		}

	}	

	$('#sayanother').click(sayanother);
	sayanother();

})(jQuery);