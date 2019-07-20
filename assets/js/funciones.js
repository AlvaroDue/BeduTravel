$('#login').css({"transform": "translate(0,0)", "opacity": "1"});


$(window).scroll( function(event) {
    
        topPosition = $(window).scrollTop();
         console.log(topPosition);
            if (topPosition >= "550") {
                $("nav").css("background-color", "rgba(0,14,43,.8)")
            } else {
                $("nav").css("background-color", "rgba(0,14,43,0)")
            }
        });

$('.fa-refresh').click(function() {
    
             $('.img1').css("background-image", "url('https://source.unsplash.com/FQ96bh4O1tY')");
             $('.img2').css("background-image", "url('https://source.unsplash.com/6Mxb_mZ_Q8E')");
             $('.img3').css("background-image", "url('https://source.unsplash.com/KMn4VEeEPR8')");
        }
    )