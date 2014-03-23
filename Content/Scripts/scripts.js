/*
	polling
*/
function pollForImportedOrders() {
    setTimeout(function() {
        $.ajax({
            url: "",
            data : { },
            type: "POST",
            success: function(data) {
            },
            complete: function() {
            },
            timeout: 10000
        })
    }, 1000);
}

/* Utils */

/* 
	usage: $(selector).hasExtension(['.yolo']); 
*/
$.fn.hasExtension = function(exts) {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test($(this).val());
}

/* 
	usage: $(selector).resetFormElement(); 
*/
$.fn.resetFormElement = function(element) {
    return element.replaceWith(element.val("").clone(true));
}

/* 
	usage: var json = toJSON(data); 
*/
function toJSON(obj) {
    var json = JSON.stringify(obj);
	json = JSON.parse(json);
    return json;
}


/*
	usage: var value = getQueryVariable(urlIdentifier);
*/
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

/* 
	if IE  (appliable to other browsers) 
	this is a :last-child selector hack (appliable to other selectors/features)
	God bless javascript;
*/
if($.browser.msie){
	if($.browser.version == 7.0 || $.browser.version == 8.0) {
		$('body *').each(function() {
			if($(this).is(':last-child')) {
				$(this).addClass('last-child');
			}	
		});
	}
}
