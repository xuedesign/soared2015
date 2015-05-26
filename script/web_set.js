// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
  $("#page_container img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//側邊產品選單
var listMenu = new FSMenu('listMenu', true, 'display', 'block', 'none');
showDelay = 0;
listMenu.animations[listMenu.animations.length] = FSMenu.animFade;
listMenu.animations[listMenu.animations.length] = FSMenu.animSwipeDown;
var arrow = null;
if (document.createElement && document.documentElement)
{
 arrow = document.createElement('span');
 arrow.appendChild(document.createTextNode('>'));
 arrow.className = 'subind';
}
addReadyEvent(new Function('listMenu.activateMenu("listMenuRoot", arrow)'));

//Lightbox
$(document).ready(function(){$(".fancybox").fancybox(),$(".fancybox-effects-a").fancybox({helpers:{title:{type:"outside"},overlay:{speedOut:0}}}),$(".fancybox-effects-b").fancybox({openEffect:"none",closeEffect:"none",helpers:{title:{type:"over"}}}),$(".fancybox-effects-c").fancybox({wrapCSS:"fancybox-custom",closeClick:!0,openEffect:"none",helpers:{title:{type:"inside"},overlay:{css:{background:"rgba(238,238,238,0.85)"}}}}),$(".fancybox-effects-d").fancybox({padding:0,openEffect:"elastic",openSpeed:150,closeEffect:"elastic",closeSpeed:150,closeClick:!0,helpers:{overlay:null}}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title="Image "+(this.index+1)+" of "+this.group.length+(this.title?" - "+this.title:"")}}),$(".fancybox-thumbs").fancybox({prevEffect:"none",nextEffect:"none",closeBtn:!1,arrows:!1,nextClick:!0,helpers:{thumbs:{width:50,height:50}}}),$(".fancybox-media").attr("rel","media-gallery").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",arrows:!1,helpers:{media:{},buttons:{}}}),$("#fancybox-manual-a").click(function(){$.fancybox.open("1_b.jpg")}),$("#fancybox-manual-b").click(function(){$.fancybox.open({href:"iframe.html",type:"iframe",padding:5})}),$("#fancybox-manual-c").click(function(){$.fancybox.open([{href:"1_b.jpg",title:"My title"},{href:"2_b.jpg",title:"2nd title"},{href:"3_b.jpg"}],{helpers:{thumbs:{width:75,height:50}}})})});	   	  