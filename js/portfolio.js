/*
Categories:
Branding
Fine Art
Print
Web

Tags:
CSS
HTML
Illustrator
InDesign
JavaScript
Photoshop
PHP
WordPress

Object
title: '',
date: ,
type: '',
description: '',
thumbImg: '',
fullImg: '',
link: '',
tags: []


https://codepen.io/kriggity/full/YzPMLpb
https://kriggity.github.io/api-challenge/
Https://kriggity.github.io/static-layout/
*/

$('#scrollTop').click(e => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "fast");
});

$('header .nav-link').each(function () {
    $(this).click(e => {
        let thisTarget = `#${$(this).attr('rel')}`;
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(thisTarget).offset().top
        }, "fast");
    });
});

const overlayWrapperImg = $('#workOverlay .wrapperImg');
const overlayTitle = $("#workOverlay .title");
const overlayDescription = $("#workOverlay .description");
const overlayLinkOut = $("#workOverlay .linkOut");
const heightRatio = .628;
const breakPoint = 575;

$('#portfolio .works .wrapperInner').each(function () {

    $(this).click(e => {

        let winWidth = $(window).width();
        if (winWidth > breakPoint) {
            e.preventDefault();

            $('body').css('overflow', 'hidden');

            let thisImg = $(this).find('img').attr('src');
            let thisTitle = ($(this).find('.title')).clone();
            let thisDescription = ($(this).find('.description')).clone();
            let thisLinkOut = ($(this).find('.linkOut')).clone();

            // console.log(`${$(this).find('img').width()}x${$(this).find('img').height()}`);

            // console.log(`${thisImg} ${thisTitle.html()} ${thisDescription.html()} ${thisLinkOut.attr('href')}`);
            
            // $("#workOverlay .wrapperImg").css('background-image', `url:('${thisImg}')`);
            $("#workOverlay .wrapperImg").css('background-image', `url("${thisImg}")`);
            overlayTitle.text(thisTitle.text());
            overlayDescription.text(thisDescription.text()).attr('class', 'description');
            overlayLinkOut.text(thisLinkOut.text()).attr({ 'class': 'linkOut', 'href': thisLinkOut.attr('href') });

            $("#workOverlay").show();
        }
    })
});
$("#workOverlay .btnClose").click(e => {
    e.preventDefault();
    $("#workOverlay").hide();
    $('body').css('overflow', 'auto');
});
$(window).resize(function () {
    let wrapperImg = $(".works .wrapperImg");
    let tempWidth = wrapperImg.width();
    let winWidth = $(window).width();
    if (winWidth > breakPoint) {
        wrapperImg.css('height', tempWidth * heightRatio);
    }
})
$(document).ready(function () {
    $(".works .wrapperImg img").each(function () {
        let tempSrc = $(this).attr('src');
        let tempParent = $(this).parent();
        let winWidth = $(window).width();
        if (winWidth > breakPoint) {
            tempParent.css('background-image', `url('${tempSrc}')`);
            tempParent.css('height', tempParent.width() * heightRatio);
        }
    });
});


