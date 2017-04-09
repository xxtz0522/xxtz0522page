$(window).scroll(function () {
    // 导航栏跟随页面内容而切换
            //随着浏览器往下滚动，根据距离顶部的距离，判断当前选中的menu
            var top1 = parseInt($("#one").offset().top);
            var top2 = parseInt($("#two").offset().top);
            var top3 = parseInt($("#three").offset().top);
            var top4 = parseInt($("#four").offset().top);
            var height=$(document).scrollTop();
            if (height >= 0 && height < top2) {
                //SetMenu(1);
                $("#one-link").addClass("active"); //该导航项目追加active样式
                $("#two-link").removeClass("active"); //删除其他导航项目active样式
                $("#three-link").removeClass("active");
                $("#four-link").removeClass("active");
            }
            else if (height >= top2 && height < top3) {
                $("#two-link").addClass("active"); 
                $("#one-link").removeClass("active"); //删除其他导航项目active样式
                $("#three-link").removeClass("active");
                $("#four-link").removeClass("active");
            }
            else if (height >= top3 && height < top4) {
                $("#three-link").addClass("active"); 
                $("#one-link").removeClass("active"); //删除其他导航项目active样式
                $("#two-link").removeClass("active");
                $("#four-link").removeClass("active");
            }
            else if (height >= top4) {
                $("#four-link").addClass("active"); 
                $("#two-link").removeClass("active"); //删除其他导航项目active样式
                $("#three-link").removeClass("active");
                $("#one-link").removeClass("active");
            }
        });
