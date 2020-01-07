// ==UserScript==
// @name        Clickable Tickets
// @namespace   Violentmonkey Scripts
// @match       https://myday-website-iad.amazon.com/
// @description Makes the rigth side links clickable
// @author      gkkenda@
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 12/31/2019, 9:38:20 AM
// ==/UserScript==


window.setInterval(function(){
	
    if(document.getElementsByClassName("awsui-util-font-size-1")[1].innerHTML.length == 21){
      var ttNumber = document.getElementsByClassName("awsui-util-font-size-1")[1].innerHTML.substring(11,21);
      var ttOutput = 'Ticket ID: <a href="https://myday-website-iad.amazon.com/ticket/' + ttNumber + '"> ' + ttNumber + '</a>';
  
      document.getElementsByClassName("awsui-util-font-size-1")[1].innerHTML = ttOutput;
    }
	
}, 5000);