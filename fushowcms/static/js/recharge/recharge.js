$(function () {
	$(".recharge-Mchoice").eq(0).css("border", "#009CFA 2px solid");
	$("#recharge-btn").focus(function () {
		$(this).css('border', '2px solid #009CFA')
		$('.recharge-Mchoice').css('border', '2px solid white');

	})
	$('body').on('click', '.recharge-Mchoice', function () {
		$(".recharge-Ul li").css("border", "");
		$("#recharge-btn").css("border", "");
		$("#recharge-btn").val("");
		var index = $(".recharge-Mchoice").index($(this));
		var count = $(".recharge-Mchoice").eq(index).text();
		var bill = count * 100;
		$(".recharge-money").text(bill);
		$(this).css("border", "#009CFA 2px solid");

	});


	$('#recharge-btn').bind('input propertychange', function () {
		$('.recharge-money').html(($(this).val()) * 100);
	});
	$('body').on('focusout', '#recharge-btn', function () {
		$(".recharge-Ul li").css("border", "");
		$(this).css("border", "#009CFA 2px solid");
		var count = $("#recharge-btn").val();
		if (count < 1) {
			alert("最少充值一元");
			$("#recharge-btn").val("1");
			$(".recharge-money").text("100");
			return;
		}
		if (isNaN(count)) {
			alert("请填入数字！");
			$("#recharge-btn").val("请填入数字！");
			$(".recharge-money").text("0");
		} else {
			var bill = count * 100;
			$(".recharge-money").text(bill);
		}
	});
	$('body').on('click', '.recharge-Pay li', function () {
		var index = $(".recharge-Pay li").index(this);
		$("#businesspay").val(index);
		$(".recharge-Pay li").css("border", "white 2px solid");
		$(this).css("border", "#009CFA 2px solid");
	});

});