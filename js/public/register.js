/**
 * Created by wdq on 17/2/22.
 */
/*
 * 获取验证码倒计时
 * */
var wait = 60;
var t;
function times() {
    if (wait == 0) {
        $("#send").removeClass("disabled");
        $("#send").html("获取验证码");
        wait = 60;
        clearTimeout(t);
    } else {
        //$('#send').unbind("click");
        $("#send").addClass("disabled");
        $("#send").html(wait+"秒后重发");
        wait--;
        t = setTimeout(function() {
            times()
        }, 1000)
    }
}

/*
* 注册表单验证
* */
$(function(){
    $('.register-box').Validform({
        tiptype:2,
        showAllError:true,
        callback:function(curform){
            console.log(1);
        }
    })
})
