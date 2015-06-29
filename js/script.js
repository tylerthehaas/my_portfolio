$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

console.log($('#resume').scrollTop().top);
$('#nav-container').followTo($('#resume').offset().top);
$('a[href^="#"]').on('click', function(event){
	var id = $(this).attr('href');
	var target = $(id);

	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 750);
	}
});
//# sourceMappingURL=script.js.map