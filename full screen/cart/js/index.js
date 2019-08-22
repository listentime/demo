$(function(){
    $('.container').fullpage({
        // 显示指示器
        navigation:true,
        // 居中对齐
        verticalCentered:false,
        //设置背景颜色
        sectionsColor:['#408080','#408070','#e9f1f6','#e3f9fd','#c9dd22','#e0eee8','#bbcdc5','e0f0e9'],
        //滚动动画的执行时间
        scrollingSpeed:500,
        /*初始化html结构的回调函数*/
        afterRender:function(){
            var _this = this;
            /*当插件初始化html结构完毕绑定点击事件*/
            $('.more').on('click',function(){
                /*切换到下一屏*/
                /*需要去调用 moveSectionDown 方法*/
                //1. 这个方法没有挂载在jquery对象上面
                //2. 基于jquery的插件是什么封装的？
                //3. 扩展了一个新的方法给jquery 这个方法就是一个插件方法
                //4. $('img').src(); $.fn.src = function(){};
                //5. jQuery.fn.extend({src:function(){}})
                //6. $.fn.fullpage = function(){}
                //7. $.fn.fullpage.moveSectionDown = function(){}
                $.fn.fullpage.moveSectionDown();
            });

            /*测试*/
            $('.section').eq(4).find('.text').on('animationend',function(){
                alert('动画结束');
            });
        },
        /*监听离开某一个屏幕 (离开的屏幕序号,进入的下一屏幕序号,移动的方向up|down)*/
        onLeave:function(index,nextIndex,direction){
            /*淡出的隐藏*/
            $('.more').fadeOut('fast');
            /*第二屏切到第三屏的过程当中同时沙发下落的动画*/
            if(index ===2 && nextIndex ===3){
                $('.section').eq(1).find('.sofa').addClass('animated');
            }
            /*第三屏切到第四屏的过程当中同时沙发下落的动画*/
            if(index === 3 && nextIndex === 4){
                $('.section').eq(2).find('.sofa').addClass('animated');
            }
        },
        /*页面切换完毕回调函数*/
        afterLoad:function(){
            $('.more').fadeIn('fast');
            //追加now去执行对应的动画
            $(this).addClass('now');
        },
    });
});
// 1进入购物车按钮
// 2继续向下按钮
// 3需要每一个页面指示器
// 4点击继续向下进入下一屏