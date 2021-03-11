function toggleChevron(e) {
  $(e.target)
      .prev('.btn-block')
      .find("i.indicator")
      .toggleClass('fa-rotate-180');
};

$('#collapse2020').on('hidden.bs.collapse', toggleChevron);
$('#collapse2020').on('shown.bs.collapse', toggleChevron);

// $('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something...
// })

// $('#heading2020').click(toggleChevron);
// $('#heading2019').click(toggleChevron);

// $(".rotate").click(function(){
//   $(this).toggleClass("down"); 
// });
