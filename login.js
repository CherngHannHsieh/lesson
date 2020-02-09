$("#selecter").change(function() {
    var option = $(this).find('option:selected');
    window.location.href = option.data("url");
  });