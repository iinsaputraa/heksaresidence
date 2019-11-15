// event saat link di klik

$('.page-scroll').on('click', function(e){
	//ambil isi href

	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('body').animate({
		scrollTop: elemenTujuan.offset().top -50
	},1250, 'swing');

	e.preventDefault();
	

});