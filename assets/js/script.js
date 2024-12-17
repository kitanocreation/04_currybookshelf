$(function() {

    // console.log('test');

    /* セッションカウント */
    const key = 'KEY';
    const value = 'VALUE';
    // セッションが存在するか確認
    if(window.sessionStorage.getItem(key) === null) {
        // セッションが切れている場合、新しい値を格納
        window.sessionStorage.setItem(key, value);
        console.log('新しいセッションが作成されました: ' + value);
    } else {
        // セッションが切れていない場合、既存の値を取得
        const existingValue = window.sessionStorage.getItem(key);
        console.log('既存のセッション値: ' + existingValue);
        $('.curryBs_body-notSession').removeClass('curryBs_body-notSession');
        $('.curryBs-loading-notSession').removeClass('curryBs-loading-notSession');
        $('.curryBs-fv-notSession').removeClass('curryBs-fv-notSession');
        $('.curryBs-fv-session').css('display', 'block');
    }

    /* スクロール遷移 */
    $('.curryBs-categoryMenu ul li .curryBs_btn').on('click', function(){

        let index = $(this).parent().index();
        switch(index){
            case 0:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-recommend").offset().top - 200 }, 300);
                break;
            case 1:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-famousStore").offset().top - 200 }, 400);
                break;
            case 2:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-hot").offset().top - 200 }, 500);
                break;
            case 3:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-easy").offset().top - 200 }, 600);
                break;
            case 4:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-brandedBeef").offset().top - 200 }, 700);
                break;
            case 5:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-hearty").offset().top - 200 }, 800);
                break;
            case 6:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-local").offset().top - 200 }, 900);
                break;
            case 7:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-originality").offset().top - 200 }, 1000);
                break;
            default:
                $("html, body").animate({ scrollTop: $(".curryBs-bs-recommend").offset().top - 200 }, 1100);
        }
    });

    /* スライド */
    $('.curryBs-bs-next_btn').on('click', function() {

        $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-slide').addClass('curryBs-bs-slide-right');

        if($(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-arrow_btn').hasClass('curryBs-bs_btn-off')) {
            $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-arrow_btn').removeClass('curryBs-bs_btn-off');
            $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-next_btn').addClass('curryBs-bs_btn-off');
        }
    });

    $('.curryBs-bs-arrow_btn').on('click', function() {

        $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-slide').removeClass('curryBs-bs-slide-right');
        
        if($(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-next_btn').hasClass('curryBs-bs_btn-off')) {
            $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-next_btn').removeClass('curryBs-bs_btn-off');
            $(this).parent('.curryBs-bs-translateX').find('.curryBs-bs-arrow_btn').addClass('curryBs-bs_btn-off');
        }
    });
});

// 表示の更新を行う関数
function updateDisplay(sessionCount) {
    if (sessionCount > 1) {
        $('.curryBs_body-notSession').removeClass('curryBs_body-notSession');
        $('.curryBs-loading-notSession').removeClass('curryBs-loading-notSession');
        $('.curryBs-fv-notSession').removeClass('curryBs-fv-notSession');
        $('.curryBs-fv-session').css('display', 'block');
    } else {
        // 初回セッションの表示設定（必要に応じて）
        $('.curryBs-body-notSession').addClass('curryBs_body-notSession');
        $('.curryBs-loading-notSession').addClass('curryBs-loading-notSession');
        $('.curryBs-fv-notSession').addClass('curryBs-fv-notSession');
        $('.curryBs-fv-session').css('display', 'none');
    }
}
