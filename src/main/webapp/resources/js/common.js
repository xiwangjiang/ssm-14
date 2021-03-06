/**
*功能描述：公共方法
**/
//全局变量
var isMock = false
//ajax调用
 function callAjax(url,parmas,mockData,callBack){
	if(isMock){
		callBack(mockData);
		return;
	}
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url :url,
		data : parmas,
		cache : false,
		async : false,
		success : function(resp){
			if (resp.map.success == false) {
                layer.alert(resp.map.message,{icon: 2});
			} else {
				callBack(resp.map);
			}
		},
		error : function(x,e,s){
			return false;
		}
	});
}
//toastr提示框 msg:消息  title：标题  toastr   shortCutFunction：success成功、info信息、warning警告、error错误
function callToastr(title,msg,toastr,shortCutFunction){


    var i = -1;
    var toastCount = 0;
    var $toastlast;
    var getMessage = function () {
        var msg = 'Hi, welcome to Inspinia. This is example of Toastr notification box.';
        return msg;
    };
        var toastIndex = toastCount++;
        if (!msg) {
            msg = getMessage();
        }
        $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));
        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        $toastlast = $toast;
        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }

    function getLastToast() {
        return $toastlast;
    }
}