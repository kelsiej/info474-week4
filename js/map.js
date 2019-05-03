

(function() {

    var context = "";

    window.onload = function () {
        let canvas = document.getElementById('myCanvas');
        context = canvas.getContext("2d");
        base_img = new Image();

        base_img.src = 'USMap.jpg';
        base_img.onload = function () {
            context.drawImage(base_img, 0, 0);
        }
    }
    


  

  

  })();
  