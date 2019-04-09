$('.trigger').click(function () {
   $('ul.dropdown_list').toggleClass("show");
   $(this).parent().toggleClass("show");
   $('.fal').toggleClass('fa-chevron-circle-up')
});