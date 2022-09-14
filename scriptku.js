$(document).ready(() => {
    $("td").click(function (event) {
      alert("yakin nih " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("yakin nih " + $(this).html() + "!");
    });
  });