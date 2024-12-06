$(function() {

    // console.log('test');

    /* スクロール遷移 */
    $('.curryBs-categoryMenu ul li .curryBs_btn').on('click', function(){
        let index = $(this).parent().index();
        switch(index){
            case 0:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-recommend").offset().top - 100 }, 300);
                break;
            case 1:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-famousStore").offset().top - 100 }, 400);
                break;
            case 2:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-hot").offset().top - 100 }, 500);
                break;
            case 3:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-easy").offset().top - 100 }, 600);
                break;
            case 4:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-brandedBeef").offset().top - 100 }, 700);
                break;
            case 5:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-hearty").offset().top - 100 }, 800);
                break;
            case 6:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-local").offset().top - 100 }, 900);
                break;
            case 7:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-originality").offset().top - 100 }, 1000);
                break;
            default:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-recommend").offset().top - 100 }, 1100);
        }
    });
});
