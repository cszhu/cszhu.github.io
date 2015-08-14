function scroll2Abt() {
	var divPosition = $('#abtHeader').offset();
	$('html, body').animate({scrollTop: divPosition.top}, "slow");
}

function scroll2Work() {
	var divPosition = $('#workHeader').offset();
	$('html, body').animate({scrollTop: divPosition.top}, "slow");
}

function scroll2Contact() {
	var divPosition = $('#contactHeader').offset();
	$('html, body').animate({scrollTop: divPosition.top}, "slow");
}

function whoAmI() {
	var txt = 'I\'m Christina! I\'m from the Bay Area and I\'m studying Computer Science at UC Davis. I love sleeping, aesthetically pleasing designs, and birbs. You can find me planning my next hackathon and finding more stickers to put on my new Macbook. <br> I\'m also minoring in Managerial Economics, because it turns out I have a passion for business too. Drop me a line and let\'s talk!</p>';
	document.getElementById('aboutText').innerHTML=txt;
}

function involvement() {
	var txt = '<b>Fellow</b> @ PennApps Fellows<br><br><b>Marketing Director</b> @ Davis Computer Science Club <br><br><b>Business and Finance Commissioner</b> @ ASUCD <br><br> <b>Member</b> @ Society of Women Engineers ';
	document.getElementById('aboutText').innerHTML=txt;
}

function languages() {
	var txt = '<b><u>Languages</u></b>: Javascript &hearts;, C++, C, HTML / CSS.<br><br><b><u>Tools</u></b>: Git, Unix, Adobe Creative Suite CS6 (Photoshop, InDesign, Illustrator), Sony Vegas 11<br><br><b><u>Frameworks</u></b>: node.js, Firebase, Bootstrap, Foundation, jQuery<br><br><b><u>Currently Teaching Myself</u></b>: Ruby on Rails, Python';
	document.getElementById('aboutText').innerHTML=txt;

}

$(function() {
    // Get the form.
    var form = $('#contactForm');
    console.log(form);

    // Get the messages div.
    var formMessages = $('#formMessages');

    $("#contactForm").submit(function(event) {
    	console.log('submit!!');
        // Stop the browser from submitting the form.
        event.preventDefault();

        var formData = $("contactForm").serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
        }).done(function(response) {
        		console.log('success');
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
            	console.log('sucking');
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
            return false;
    });
});
