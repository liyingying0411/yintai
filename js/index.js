//顶部导航效果
	$(".navtop-one-3s").fadeOut(0)
	$(".nav-topdh2s").fadeOut(0)
	$(".topsous-3-s").fadeOut(0)
	$(".nav-topdh").hover(function(){
		var index=$(this).index(".nav-topdh")
		$(".navtop-one-3s").fadeOut(0).css("color","#666666").eq(index).fadeIn(0).css("color","#E5004F")
		$(".navtop-one-3s .navjiantou1-s").css({"transform":"rotate(0deg)"}).eq(index).css({"transform":"rotate(360deg)","transition":"all 0.3s linear"})
	},function(){
		$(".navtop-one-3s").fadeOut(0)
		$(".navtop-one-3s .navjiantou1-s").css({"transform":"rotate(0deg)"})
	})

	$(".nav-topdh2").hover(function(){
		$(".nav-topdh2s").fadeIn(0)
		$(".navjiantou2s").css({"transform":"rotate(360deg)","transition":"all 0.3s linear"})		
	},function(){
		$(".nav-topdh2s").fadeOut(0)
		$(".navjiantou2s").css({"transform":"rotate(0deg)"})		
	})

	$(".nav-topdh3").hover(function(){
		$(".nav-topdh3").css("color","#E5004F")
		$(".navtop-log-1").css("backgroundPosition","-225px -27px")
	},function(){
		$(".nav-topdh3").css("color","#666666")
		$(".navtop-log-1").css("backgroundPosition","-225px 0")
	})


//购物车隐藏效果
	$(".topsous-3").hover(function(){
		$(".topsous-3-s").fadeIn(0)
	},function(){
		$(".topsous-3-s").fadeOut(0)
	})


//banner部分选择页效果
	$(".bannerleft").hover(function(){
		var index=$(this).index(".bannerleft")
		$(".bannerleft-2").css("display","none").eq(index).css("display","block")
		$(".bnleft-log").css("backgroundImage","url(images/navlogs.png)").eq(index).css("backgroundImage","url(images/navlogss.png)")
	},function(){
		$(".bannerleft-2").css("display","none")
		$(".bnleft-log").css("backgroundImage","url(images/navlogs.png)")
	})
	
//banner轮播效果
	var num=0;
	function move(){
		num++;
		if(num>=$(".bannerimg-1").length){
			num=0
		}
		$(".bannerimg-1").css({"opacity":"0"}).eq(num).animate({"opacity":"1"})
		$(".btn").css("background","#211616").eq(num).css("background","#E5004F")
	}
	var t=setInterval(move,3000);
	
//消除时间函数
	$(".bannerbox").hover(function(){
		clearInterval(t)
		$(".btn-left").css("opacity","0.7")
		$(".btn-right").css("opacity","0.7")
	},function(){
		t=setInterval(move,3000)
		$(".btn-left").css("opacity","0")
		$(".btn-right").css("opacity","0")
	})

//banner小圆点
	$(".btn").mouseover(function(){
		var indexs=$(this).index(".btn")
		if(indexs==num){
			return;
		}
		$(".bannerimg-1").css({"opacity":"0"}).eq(indexs).animate({"opacity":"1"})
		$(".btn").css("background","#211616").eq(indexs).css("background","#E5004F")
		num=indexs
	})

// banner左右点击效果
	$(".btn-right").click(function(){
		move()
	})
	$(".btn-left").click(function(){
		num--;
		if(num<=-1){
			num=$(".bannerimg-1").length-1
		}
		$(".bannerimg-1").css({"opacity":"0"}).eq(num).css({"opacity":"1"})
		$(".btn").css("background","#211616").eq(num).css("background","#E5004F")
	})

//推荐部分选择页
	$(".tj-left-1-1").mouseover(function(){
		var index=$(this).index(".tj-left-1-1")
		$(".tj-left-1-1").css("borderBottom","5px solid #333333").eq(index).css("borderBottom","5px solid #E5004F")
		$(".tj-left-1-2").css("display","none").eq(index).css("display","block")
		$(".tj-left-2").css("display","none").eq(index).css("display","block")
	})


//专柜同款部分选择页
	$(".zg-content-tops").mouseover(function(){
		var index=$(this).index(".zg-content-tops")
		$(".zg-content-tops").css("borderBottom","none").eq(index).css("borderBottom","3px solid #E70050")
		$(".zg-left-1-2").css("display","none").eq(index).css("display","block")
		$(".zg-content-bom").css("display","none").eq(index).css("display","block")
	})

//四周边框划上变化效果
	function bordered(obj){
		$(obj).hover(function(){
			var shindex=$(this).index(obj)
			var w=$(obj).outerWidth();
			var h=$(obj).outerHeight();
			// alert(w+"=="+h)
			$(obj+">.bian-border1").stop(true,true)
			$(obj+">.bian-border2").stop(true,true)
			$(obj+">.bian-border3").stop(true,true)
			$(obj+">.bian-border4").stop(true,true)
			$(obj+">.bian-border1").eq(shindex).animate({"height":h})
			$(obj+">.bian-border2").eq(shindex).animate({"width":w})
			$(obj+">.bian-border3").eq(shindex).animate({"height":h})
			$(obj+">.bian-border4").eq(shindex).animate({"width":w})
		},function(){
			$(obj+">.bian-border1").stop(true,true)
			$(obj+">.bian-border2").stop(true,true)
			$(obj+">.bian-border3").stop(true,true)
			$(obj+">.bian-border4").stop(true,true)
			$(obj+">.bian-border1").animate({"height":"0"})
			$(obj+">.bian-border2").animate({"width":"0"})
			$(obj+">.bian-border3").animate({"height":"0"})
			$(obj+">.bian-border4").animate({"width":"0"})
		})
	}
	bordered(".zg-xzy-2");

	bordered(".tj-left-2-1");

//时尚名品部分效果
	$(".sh-left-a").hover(function(){
		var shaa=$(this).index(".sh-left-a")
		$(".sh-left-a>a").css("color","#666666").eq(shaa).css("color","#fff")
	},function(){
		$(".sh-left-a>a").css("color","#666666")
	})

	bordered(".sh-rightimg");


	//时尚名品大图部分
	$(".shlb").each(function(i){
		$(".shlb:eq("+i+")").hover(function(){
			$(".shlb:eq("+i+") .sh-center-left").show()
			$(".shlb:eq("+i+") .sh-center-right").show()
		},function(){
			$(".sh-center-left").hide()
			$(".sh-center-right").hide()
		})
	})
	


	//图片轮播效果
	var shnum=0;
	$(".shlb").each(function(i){
	$(".shlb:eq("+i+") .shbtn").click(function(){
		var shnn=$(this).index(".shlb:eq("+i+") .shbtn")
		$(".shlb:eq("+i+") img").css("display","none").eq(shnn).css("display","block")
		$(".shlb:eq("+i+") .shbtn").css("background","#6E6E6E").eq(shnn).css("background","#D5054C")
	})
	})

	$(".shlb").each(function(i){
		$(".shlb:eq("+i+") .shzy").click(function(){
		shnum++;
		if(shnum>=2){
			shnum=0;
		}
		$(".shlb:eq("+i+") img").css("display","none").eq(shnum).css("display","block")
		$(".shlb:eq("+i+") .shbtn").css("background","#6E6E6E").eq(shnum).css("background","#D5054C")
	})
	})
	


	//左下角品牌log部分轮播
	$(".sh-jiantou2").each(function(i){
		$(".sh-jiantou2:eq("+i+")").click(function(){
			$(".sh-left-sss:eq("+i+")").stop(true,true)
			$(".sh-left-sss:eq("+i+")").animate({"left":"-340px"},function(){
				$(".sh-left-sss:eq("+i+") .sh-left-ssss:eq(1)").after($(".sh-left-sss:eq("+i+") .sh-left-ssss:eq(0)"))
			$(".sh-left-sss:eq("+i+")").css({"left":"-170px"})
			})
		})
	})
	

	$(".sh-jiantou1").each(function(i){
		$(".sh-jiantou1:eq("+i+")").click(function(){
			$(".sh-left-sss:eq("+i+")").stop(true,true)
			$(".sh-left-sss:eq("+i+")").animate({"left":"0"},function(){
				$(".sh-left-sss:eq("+i+") .sh-left-ssss:eq(1)").before($(".sh-left-sss:eq("+i+") .sh-left-ssss:eq(2)"))
			$(".sh-left-sss:eq("+i+")").css({"left":"-170px"})
			})
		})
	})

//监测滚动位置效果事件
    var fixbb;
	$(window).scroll(function(){
		var tops=$(window).scrollTop()
		topss=tops
		if($(window).scrollTop()>=600){
			$(".fixed-right").show()
		}else{
			$(".fixed-right").hide()
		}
	

		$(".sh-box").each(function(index,shobj){
			if($(".sh-box").eq(index).offset().top<=tops+200){
				$(".fixeds").hide().eq(index).show()
				fixbb=index
			}			
		})

		//鼠标点击楼层跳转效果
		$(".fixeds").click(function(){
			var fixcc=$(this).index(".fixeds")
			if(fixcc<=8){
				var fixtop={st:tops}
				$(fixtop).animate({st:$(".sh-box").eq(fixcc).offset().top-100},{
					speed:1000,
					step:function(){
						$(window).scrollTop(fixtop.st)
					}
				})
			}
			
		})

		//返回顶部
		$(".fixedss").click(function(){
			var navtop={st:tops}
			// alert(5)
			$(navtop).animate({st:1},{
				speed:1000,
				step:function(){
					$(window).scrollTop(navtop.st)
				}
			})
		})
	})


	//右侧固定栏鼠标移入移除背景变化
	$(".fixed-right li").hover(function(){
		var fixaa=$(this).index(".fixed-right li")
		$(".fixeds").hide().eq(fixbb).show()
		$(".fixeds").eq(fixaa).show()
	},function(){
		$(".fixeds").hide().eq(fixbb).show()
	})

		