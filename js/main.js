/// <reference types="../@types/jquery" />

// loading screen
$(function () {
    let colorBoxes = $('.color-box');
    let sidebarInnerWidth = $('.sidebarInner').outerWidth();
    $('.sidebarInner').animate({marginLeft:`-${sidebarInnerWidth}`},500);

    // loading screen
    $('.loader').fadeOut(500 , function(){
        $('#loading').slideUp(500 , function(){
            $('body').css('overflow','auto');
            $('#loading').remove();
        });
       
    })



    // change bakground navbar
    $(window).on('scroll' , function(){
        let aboutOffset = $('#about').offset().top
        let windowScroll = $(window).scrollTop();
        if(windowScroll > aboutOffset - 560){
            $('.navbar').css('backgroundColor','#ffff');
            $('.navbar .container ul a').css('color','#595959');
            $('.logo-color').css('display','block');
            $('#keyUp').css('display','block');
        }
        else{
            $('.navbar').css('backgroundColor','transparent');
            $('.navbar .container ul a').css('color','#ffff');
            $('.logo-color').css('display','none');
            $('#keyUp').css('display','none');
        }
    });


    // smooth scroll
    $('a[href^="#"]').on('click',function(){
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('body,html').animate({scrollTop:offset}, 500);
    });


    // sideBar
    $('.gear-icon').on('click' , function(){
        let sidebarInnerLeft = $('.sidebarInner').css('marginLeft');
        if(sidebarInnerLeft == '0px'){
            $('.sidebarInner').animate({marginLeft:`-${sidebarInnerWidth}`},500);
        }
        else{
            $('.sidebarInner').animate({marginLeft:`0`},500);
        }
    });

    
    // change color
    colorBoxes.eq(0).css('backgroundColor','red');
    colorBoxes.eq(1).css('backgroundColor','pink');
    colorBoxes.eq(2).css('backgroundColor','purple');
    colorBoxes.eq(3).css('backgroundColor','orange');
    colorBoxes.eq(4).css('backgroundColor','blue');
    colorBoxes.eq(5).css('backgroundColor','teal');
    colorBoxes.eq(6).css('backgroundColor','yellow');
    colorBoxes.eq(7).css('backgroundColor','green');
    colorBoxes.eq(8).css('backgroundColor','fuchsia');
    colorBoxes.eq(9).css('backgroundColor','greenyellow');

    colorBoxes.on('click',function(e){
        $('h2,h3,h4').css('color',$(e.target).css('backgroundColor'));
        $('.btn1').css('backgroundColor',$(e.target).css('backgroundColor'));
    });


    // change image
    $('.img-box').on('click',function(e){
        let src = $(e.target).attr('src');
        $('#home').css('backgroundImage',`url(${src})`);
    });
});






