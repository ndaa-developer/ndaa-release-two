function clickMe(obj){ 
  if($(obj).data('clicked') == 'true'){
      location.href = $(obj).attr('href');
  }
   else{
  $(obj).data('clicked','true');
  }
}