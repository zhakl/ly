/**
 * Created by zql on 2016/2/18.
 */
/*lunbo*/
$(document).ready(function(){

    var timer = null;
    var li = 0;
    var k = 0 ;
    var kl = 0 ;
    var l = $(".move img").length;
    $(".left").click(function(){

        if( k == l-1){
            $(".move img").css("display","none");
            $(".move img").eq(0).fadeIn(600);
            k=0 ;
        }else{
            k++;
            $(".move img").css("display","none");
            $(".move img").eq(k).fadeIn(600);
        }
    });
    $(".smt i").click(function()
    {
        $(".smt i").css("background-position","0 0");
        $(this).css("background-position","-18px 0");
        $(".move img").hide();
        $(".move img").eq($(this).index()).fadeIn(600);

    });
    $(".head,.carousel").mouseover(function(){
        clearInterval(timer);
        $(".left,.right").show();
    });
    $(".head,.carousel").mouseleave(function(){
        $(".left,.right").hide();
        timer = setInterval(function(){
            k++;
            $(".move img").css("display","none");
            $(".move img").eq(k-1).css("display","block");
            if(k==l){
                k=0;
            }
        },3000);
    });
    $(".right").click(function(){
        if(k==0){
            $(".move img").css("display","none");
            $(".move img").eq(l-1).fadeIn(600);
            k=l-1;
        }else{
            k--;
            $(".move img").css("display","none");
            $(".move img").eq(k).fadeIn(600);
        }
    });
    timer = setInterval(function(){
        k++;
        $(".move img").css("display","none");
        $(".move img").eq(k-1).css("display","block");
        if(k==l){
            k=0;
        }
    },3000);



    /*lunbo*/
    /*顶部线条*/
    $(".head_l li").hover(function(){

            $(this).find(".i").animate({left:"0"},500)

    },function(){
        $(this).find(".i").animate({left:"-100%"},100)
    });
    $(".sear i").mouseover(function(){
        $(".sear input").show();
        $(".sear input").animate({width:"120px"},300)
    });
    $(".sear input").mouseleave(function(){


       if($(".sear input").val()==''){
           $(".sear input").animate({width:"0px"},300,function(){
               $(".sear input").hide();

           })
       }else{
           $(".sear input").animate({width:"120px"},300);
       }

    });
   /*03*/
    $(".bigs a").click(function(){
        $(".bigs i").removeClass("dianon");
        $(this).prev("i").addClass("dianon");
        var bigs = $(this).parent("p").index();

        if(bigs == 0){
            $(".sousea").fadeIn();
            $(".sttu").hide();
            $(".poni").hide();
        }else{
            $(".sousea").hide();
            $(".sttu").fadeIn();
            $(".poni").css("display","block");
        }
    });
    $(".sousea input").focus(function(){
        $(".sdrop").show();

    });
    $(".docip").focus(function(){
        $(".cdorp").show()
    });

    $(".xzzs_sp input").focus(function(){
        $(".sdrop1").show();
    });
    $(document).click(function(){
        $(".sdrop").hide();
        $(".cdorp").hide();
    });

    $(".sousea input,.xzzs_sp input").click(function(){
        return false;
    });
    $(".part li:nth-child(3n)").css("margin-right","0");
    $(".part1 li:nth-child(4n)").css("margin-right","0");
    $(".part2 li:nth-child(3n)").css("margin-right","0");
    $(".part5 li:nth-child(8n)").css("margin-right","0");
    $(".part6 li:nth-child(7n)").css("margin-right","0");
    $(".part li").mouseover(function(){

        $(this).find(".line_top,.line_bottom,.line_right,.line_left,.perfor p,.perfor i").stop(true,true);
        $(this).find(".perfor").stop(true);
        $(this).find(".perfor").animate({"margin-top":"10px"},180);
        $(this).find(".line_top,.line_bottom,.line_right,.line_left,.perfor p").show();
        $(this).find(".perfor i").css("display","block");
        $(this).find(".zhez").css("display","block");

    });
    $(".part li").mouseleave(function(){

        $(this).find(".perfor").animate({"margin-top":"80px"},10);
        $(this).find(".line_top,.line_bottom,.line_right,.line_left,.perfor p").hide();
        $(this).find(".perfor i").css("display","none");
        $(this).find(".zhez").css("display","none");

    });
    /*$(".feature li").mouseover(function(){
        $(".feature li").stop().animate();
        $(this).siblings().animate({ width: "160px" }, 200);
        $(this).animate({ width: "400px" }, 200);
        $(".hw_text").show();
        $(this).find(".hw_text").hide();
        $(".opac").show();
        $(this).find(".opac").hide()
    });*/
    $(".feature").mouseleave(function(){
        $(".opac").show();
        $(".feature li").stop().animate();
        $(".feature li").animate({width:"200px"},200);
        $(".hw_text").show();
    });
    $(".mrn li").mouseover(function(){
        $(this).find(".part_div").css("opacity","0.6");
        $(this).find(".part_div").css("filter","alpha(opacity=60)");
        $(this).find(".part_div h1").hide();
        $(this).find(".bott").fadeIn();
    });
    $(".mrn li").mouseleave(function(){
        $(this).find(".part_div").css("opacity","1");
        $(this).find(".part_div").css("filter","alpha(opacity=100)");
        $(this).find(".bott").hide();
        $(this).find(".part_div h1").fadeIn();
    });
    $(".more").mouseover(function(){
        $(".more i").addClass("animation")
    });
    $(".more").mouseleave(function(){
        $(".more i").removeClass("animation")
    });
    $(".part3 i").mouseover(function(){
        $(this).addClass("animation1")
    });
    $(".part3 li").mouseleave(function(){
        $(this).find("i").removeClass("animation1")
    });
    $(".dibai_i").mouseover(function(){
        $(this).find("b").show();
    });
    $(".dibai_i").mouseout(function(){
        $(this).find("b").hide();
    });
    $(".haoma").mouseover(function(){
        $(".head1_b_r ul").stop(true,true);
        $(".head1_b_r ul").slideDown()
    });
    $(".head1_b_r ").mouseleave(function(){

        $(".head1_b_r ul").slideUp()
    });

    $(".play_div dd").click(function()
    {
        $(".play_div2").show();
        var html1 = $(this).html();
        $(".appen dd").remove(".c1");
        $(".appen").append("<dd class='c1 '>"+html1+"<a class='x'></a></dd>")
    });
    $(".appen1 dd").click(function()
    {
        $(".play_div2").show();
        var html = $(this).html();
        $(".appen dd").remove(".c2");
        $(".appen").append("<dd class='c2 '>"+html+"<a class='x'></a></dd>")
    });
    $(".appen2 dd").click(function()
    {
        $(".play_div2").show();
        var html = $(this).html();
        $(".appen dd").remove(".c3");
        $(".appen").append("<dd class='c3 '>"+html+"<a class='x'></a></dd>")
    });
    $(".zbg_dl").delegate("a","click",function(){
        $(this).parent().remove();
        if($(".appen dd").html() == null){
            $(".vis").hide();
        }
    });
    $(".wmcn li").hover(function(){
        $(this).find("i").addClass("animation2")
    },function(){
        $(this).find("i").removeClass("animation2")
    });
    $(".fixi2").hover(function(){
        $(".weixin").stop(true,true);
        $(".weixin").fadeIn();
    },function(){
        $(".weixin").stop(true,true);
        $(".weixin").fadeOut();
    });
    $(".part2_div a").hover(function(){
        $(this).find("img").addClass("part2ani");
    },function(){
        $(this).find("img").removeClass("part2ani");
    });
    var  tall =10;
    $(".trun a:eq(6)").nextAll("a").addClass("hide");
    if($(".trun a").length>7){
        $(".trun a").click(function(){
            $(".trun b").remove();
            var d =$(this).index();
            if($(this).index()<5){
                $(".trun a").removeClass("hide");
                $(".trun a").css("display","none");
                $(this).css("display","block");
                $(".trun a").first().css("display","block");
                $(".trun a").last().css("display","block");
                $(".trun a").eq(d+1).css("display","block").after("<b class='tb'>...</b>");
                $(".trun a").eq(d).css("display","block");
                $(".trun a").eq(d-2).css("display","block");
                $(".trun a").eq(d-3).css("display","block");

            }else if($(this).index()>tall-3){


                $(".trun a").removeClass("hide");
                $(".trun a").css("display","none");
                $(this).css("display","block");
                $(".trun a").first().css("display","block");
                $(".trun a").last().css("display","block");
                $(".trun a").eq(d+1).css("display","block");
                $(".trun a").eq(d).css("display","block");
                $(".trun a").eq(d-2).css("display","block");
                $(".trun a").eq(d-3).css("display","block");
                $(".trun a").eq(d-4).css("display","none").after("<b class='tb'>...</b>");

            }
            else {
                $(".trun a").removeClass("hide");
                $(".trun a").css("display","none");
                $(this).css("display","block");
                $(".trun a").first().css("display","block");
                $(".trun a").last().css("display","block");
                $(".trun a").eq(d+1).css("display","block").after("<b class='tb'>...</b>");
                $(".trun a").eq(d).css("display","block");
                $(".trun a").eq(d-2).css("display","block");
                $(".trun a").eq(d-3).css("display","block");
                $(".trun a").eq(d-4).css("display","none").after("<b class='tb'>...</b>");

            }

        });

    }
    setInterval(function(){
        var  l = $(document).height()-$(document).scrollTop()-$(window).height();
        var scrollt=$(document).scrollTop()
        $(window).scroll(function(){
            if(l < 2500){
                $(".fixi5").css("display","block")
            }else{
                $(".fixi5").css("display","none")
            };


            if($(document).scrollTop() >590){
                $(".xcxq_r").css({"position":"absolute","top":$(document).scrollTop()-590,"right":"0"});
            }
            else
            {
                $(".xcxq_r").css({"position":"relative"});
            }
        })
    },30);
    $(".fixi5").click(function(){
        $("body,html").animate({"scrollTop":0},500);
    });


    $(".cla").click(function () {
       $(".qihide").slideToggle();
       $(".kohide").toggle();
       $(".koazz_r").toggle();
    });
    $(".inc li:nth-child(2n)").css("margin-right","0");
    $(".success li:nth-child(4n)").css("margin-right","0");
    $(".coop li:nth-child(5n)").css({"margin-right":"0","background-image":"url()","width":"182px"});
    $(".our li").hover(function(){
        $(this).find("img").addClass("animation1")
    },function(){
        $(this).find("img").removeClass("animation1")
    });
    $(".inc_div").hover(function(){
        $(this).find(".inc_md").stop(true,true);
        $(this).find(".inc_md").animate({left:"0","top":"0"},300)
    },function(){
        $(this).find(".inc_md").animate({left:"100%","top":"100%"},300)
    });
    $(".problemxq_l p").click(function(){
        var g = $(this).index();
        $(".problemxq_r div").removeClass("problemxq_r1");
        $(".problemxq_r div").eq(g-1).addClass("problemxq_r1");
    });


    var len = (parseInt($(".anlxq_ul li").length))*425;
    $(".anlxq_ul").css("width",len);
    $(".l_left").click(function(){
        $(".anlxq_ul li").stop(true,true);
        $(".anlxq_ul li:last").before($(".anlxq_ul li:first"));
        $(".anlxq_ul li").eq(1).siblings().animate({"width":"350px","height":"260px","margin-top":"0px"},558);
        $(".anlxq_ul li").eq(1).animate({"width":"500px","height":"360px","margin-top":"-40px"},558);
    });
    $(".l_right").click(function(){
        $(".anlxq_ul li").stop(true,true);
        $(".anlxq_ul li:first").after($(".anlxq_ul li:last"));
        $(".anlxq_ul li").eq(1).siblings().animate({"width":"350px","height":"260px","margin-top":"0px"},558);
        $(".anlxq_ul li").eq(1).animate({"width":"500px","height":"360px","margin-top":"-40px"},558)
    });

    $(".smleft").click(function(){
        $(".sming_u ul li:first").before($(".sming_u ul li:last"))
    });
    $(".smright").click(function(){
        $(".sming_u ul li:last").after($(".sming_u ul li:first"))
    });
    $(".flyleft").click(function(){
        $(".fly_l_d img:first").before($(".fly_l_d img:last"))
    });
    $(".flyright").click(function(){
        $(".fly_l_d img:last").after($(".fly_l_d img:first"))
    });
    $(".sming_u ul li").click(function(){
        $(".bigimg").html($(this).html())
    });
    $(".fly_l").mouseover(function(){
        $(".flyright").fadeIn();
        $(".flyleft").fadeIn();
    });
    $(".fly_l").mouseleave(function(){
        $(".flyright").fadeOut();
        $(".flyleft").fadeOut();
    })
    $("li .day_r_p1").click(function(){
        if($(this).siblings(".day_r_p").height()==90){
            $(this).siblings(".day_r_p").css("height","auto");
            $(this).html("收起<i></i>");
            $(this).find("i").css("background-position","-62px -39px")
        }else{
            $(this).siblings(".day_r_p").css("height","90px");
            $(this).html("展开<i></i>");
        }
    });
    $(".fol_ul1 li").eq(2).nextAll().hide();
    var ii = 0;
    $(".fol_a").click(function(){

        if(ii == 0){
            ii++;
            $(".fol_ul1 li").eq(2).nextAll().show();
            $(this).html("<a>收起更多<i></i></a>");
            $(this).find("i").css("background-position","-52px -28px");
            return ii;
        }else{
            $(".fol_ul1 li").eq(2).nextAll().hide();
            $(this).html("<a>查看更多<i></i></a>");
            return ii=0;
        }
    });
    var len = parseInt($(".drop dl dd").length)*82;
    var times =null;
    $(".drop dl dd p:first").css("font-size","14px");
    $(".drop dl dd:last").css("border-right","none");
    $(".drop dl").css("width",len);
    $(".hnav li").mouseover(function(){
        $(this).find(".drop").show();
        clearTimeout(times)
    });
    $(".hnav li").mouseleave(function(){
        times=setTimeout(function(){
            $(".drop").hide();
        },300)
    });
    $(".indexnav li").mouseover(function(){
        $(this).find(".drop").show();
        clearTimeout(times)
    });
    $(".indexnav li").mouseleave(function(){
        times=setTimeout(function(){
            $(".drop").hide();
        },300)
    });
    $(".yearmai li:nth-child(2n)").css("margin-right","0");
    $(".smimg ul").css("width",parseInt($(".smimg ul li").length)*123);
    var index = 0 ;

    $(".public_ul1 li").click(function(){
        index = $(this).index();
        $(this).css("background-position","0 0").siblings().css("background-position","-13px 0");
        $(".public_ul li").eq(index).fadeIn().siblings().hide();
    });
    setInterval(function(){
        if(index==3){
            index = -1;
        }

        $(".public_ul1 li").eq(index).css("background-position","0 0").siblings().css("background-position","-13px 0");
        $(".public_ul li").eq(index++).fadeIn().siblings().hide();
    },4000);
    $(".sheme_1 li:nth-child(3n)").css("margin-right","0");
    $(".hottel_imgs ul li").click(function(){
        $(".hottel_imgb").html($(this).html())

    });
    $(".zjc_ul li:nth-child(3n)").css("margin-right","0")
    $(".zucg_ul li:nth-child(3n)").css("border-right","none");
    $(".zjc_ul li").hover(function(){
        $(this).find("img").addClass("ami");
    },function(){
        $(this).find("img").removeClass("ami");
    });
    $(".ooc").click(function(){
        $(".sttu").addClass("souse");
        $(".poni").addClass("souse");
    });
    $(".oo").click(function(){
        $(".sousea").addClass("souse");
    });
});

























