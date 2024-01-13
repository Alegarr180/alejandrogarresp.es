document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
          case 13 : window.location.href = 'results.html';
              break;
    }
  }