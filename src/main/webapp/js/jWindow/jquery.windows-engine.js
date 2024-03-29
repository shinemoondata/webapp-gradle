/**
 *  jQuery Windows Engine Plugin
 *  @requires jQuery v1.2.6 or greater
 *  http://hernan.amiune.com/labs
 *
 *  Copyright(c)  Hernan Amiune (hernan.amiune.com)
 *  Licensed under MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 * 
 *  Version: 1.7
 */
 

var jqWindowsEngineZIndex = 20000;

jQuery.extend({

    newWindow: function(options) {

        var lastMouseX = 0;
        var lastMouseY = 0;

        var defaults = {
            id: "",
            title: "",
            titleBar: false,
            width: 300,
            height: 200,
            posx: 50,
            posy: 50,
            content: "",
            onDragBegin: null,
            onDragEnd: null,
            onResizeBegin: null,
            onResizeEnd: null,
            onAjaxContentLoaded: null,
            onWindowClose: null,
            statusBar: false,
            minimizeButton: true,
            maximizeButton: true,
            closeButton: true,
            draggable: true,
            resizeable: true,
            type: "normal",
            modal: false
        };

        var options = $.extend(defaults, options);

        var idAttrP = "";
        var idAttr = "";
        if (options.id != "") idAttrP = 'id="' + options.id + '_Background"';
        if (options.id != "") idAttr = 'id="' + options.id + '"';
        $modalBackground = $('<div ' + idAttrP + ' class="modal-background"></div>');
        $modalBackground.css("z-index","20000");
        $windowContainer = $('<div ' + idAttr + ' class="window-container"></div>');
        $titleBar = $('<div class="window-titleBar" '+(options.draggable?'':'style="display:none;"')+'></div>');
        $titleBar.append('<div class="window-titleBar-leftCorner" '+(options.draggable?'':'style="display:none;"')+'></div>');
        $titleBarContent = $('<div class="window-titleBar-content" style="font-weight: bold;" '+(options.draggable?'':'style="display:none;"')+'>' + (options.titleBar?options.title:'') + '</div>');
        $titleBar.append($titleBarContent);
        $titleBar.append('<div class="window-titleBar-rightCorner"></div>');

        $windowMinimizeButton = $('<div class="window-minimizeButton" '+(options.minimizeButton?'':'style="display:none;"')+' title="최소화"></div>');
        $windowMaximizeButton = $('<div class="window-maximizeButton" '+(options.maximizeButton?'':'style="display:none;"')+' title="최대화"></div>');
        $windowCloseButton = $('<div class="window-closeButton" '+(options.closeButton?'':'style="display:none;"')+' title="닫기"></div>');

        $windowContent = $('<div class="window-content"></div>');
        $windowStatusBar = $('<div class="window-statusBar"></div>');
        $windowResizeIcon = $('<div class="window-resizeIcon"></div>');

    	$titleBar.append($windowMinimizeButton);
    	$titleBar.append($windowMaximizeButton);
    	$titleBar.append($windowCloseButton);

        if (options.resizeable) $windowStatusBar.append($windowResizeIcon);
        $windowContainer.append($titleBar);
        $windowContent.append(options.content);
        $windowContainer.append($windowContent);
        if (options.statusBar) $windowContainer.append($windowStatusBar);
        
        if(options.type === "iframe"){
            $windowContent.css("overflow","hidden");
        }
        
        var disableSelection = function() {
            document.onselectstart = function() {
                return false;
            };
        };
        
        var enableSelection = function() {
            document.onselectstart = null;
        };
        
        var setFocus = function($obj) {
            if(options.modal){
                $obj.css("z-index", 20001);
            }
            else{
                $obj.css("z-index", jqWindowsEngineZIndex++);
            }
        };

        var rv = -1; // Return value assumes failure.

        var resize = function($obj, width, height) {
            width = parseInt(width);
            height = parseInt(height);
            $obj.data("lastWidth", width+10).data("lastHeight", height);
            $obj.css("width", (width+10) + "px").css("height", height + "px");
            if (options.type === "iframe") {
                var dw = 3, dh = 2;
                try{
                    if(navigator.appName == 'Microsoft Internet Explorer' ) {
                        var rv = -1;
                        var ua = navigator.userAgent;
                        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
                        if (rv < 9.0) {
                            dw = dh = 0;
                        }
                    }
                }catch(e){
                    dw = dh = 0;
                }
                $obj.find("iframe").css("width", (width-dw) + "px").css("height", (height-dh) + "px");
                
                $obj.find("iframe").each(function(){
                    $("#jquery-window-engine-iframe-cover").css({top:$(this).offset().top, left:$(this).offset().left,
                    width:this.offsetWidth,height:this.offsetHeight,
                    position: "absolute", opacity: "0.0001", zIndex: 20000,
                    background:"#444"});
                });
            }
        };
        
        var move = function($obj, x, y) {
            x = Math.max(0,parseInt(x));
            y = Math.max(0,parseInt(y));
            $obj.data("lastX", x).data("lastY", y).data("lastScrollTop", $(document).scrollTop());
            x = x + "px";
            y = y + "px";
            $obj.css("left", x).css("top", y);
            
            if (options.type === "iframe") {
                $obj.find("iframe").each(function(){
                    $("#jquery-window-engine-iframe-cover").css({top:$(this).offset().top, left:$(this).offset().left,
                    width:this.offsetWidth,height:this.offsetHeight,
                    position: "absolute", opacity: "0.0001", zIndex: 20000,
                    background:"#444"});
                });
            }
        };
        
        var dragging = function(e, $obj) {
            if (options.draggable) {
                e = e ? e : window.event;
                var newx = parseInt($obj.css("left")) + (e.clientX - lastMouseX);
                var newy = parseInt($obj.css("top")) + (e.clientY - lastMouseY);
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;

                $obj.data("lastX", newx).data("lastY", newy).data("lastScrollTop", $(document).scrollTop());

                move($obj, newx, newy);
            }
        };
        
        var resizing = function(e, $obj) {
            e = e ? e : window.event;
            var w = parseInt($obj.css("width"));
            var h = parseInt($obj.css("height"));
            w = w < 100 ? 100 : w;
            h = h < 50 ? 50 : h;
            var neww = w + (e.clientX - lastMouseX);
            var newh = h + (e.clientY - lastMouseY);
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;

            $obj.data("lastX", newx).data("lastY", newy).data("lastScrollTop", $(document).scrollTop());

            resize($obj, neww, newh);
        };
        
        //Attach a mousedown event to the window's title bar to allow dragging
        $titleBarContent.bind('mousedown.jquerywindow', function(e) {
            $obj = $(e.target).parent().parent();
            setFocus($obj);
            disableSelection();
            
            if ($obj.data("state") != "maximized") {
                
                if (options.type === "iframe") {
                    var $tmpDiv = $('<div id="jquery-window-engine-iframe-cover" ></div>');
                    $obj.find("iframe").each(function(){
                        $tmpDiv.css({top:$(this).offset().top, left:$(this).offset().left,
                        width:this.offsetWidth,height:this.offsetHeight,
                        position: "absolute", opacity: "0.0001", zIndex: 20000,
                        background:"#444"});
                        $('body').append($tmpDiv);
                    });
                }
            
                e = e ? e : window.event;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;

                $(document).bind('mousemove.jquerywindow', function(e) {
                    dragging(e, $obj);
                });

                $(document).bind('mouseup.jquerywindow', function(e) {
                    if (options.type === "iframe") $("#jquery-window-engine-iframe-cover").remove();
                    if (options.onDragEnd != null) options.onDragEnd();
                    $(document).unbind('mousemove.jquerywindow');
                    $(document).unbind('mouseup.jquerywindow');
                    enableSelection();
                });

                if (options.onDragBegin != null) options.onDragBegin();
            }else if (options.type === "iframe"){
                $("#jquery-window-engine-iframe-cover").remove();
            }
            
            return false;
        });
        
        //Attach a double click event to the window's title bar to allow maximization
        $titleBarContent.dblclick(function(e) {
            $obj = $(e.target).parent().parent();
            $obj.find(".window-maximizeButton").click();
        });
        
        //Attach a mousedown event to the window's resize icon to allow resizing
        $windowResizeIcon.bind('mousedown.jquerywindow', function(e) {
            $obj = $(e.target).parent().parent();
            setFocus($obj);
            disableSelection();
            
            if ($obj.data("state") === "normal") {
            
                if (options.type === "iframe") {
                    var $tmpDiv = $('<div id="jquery-window-engine-iframe-cover" ></div>');
                    $obj.find("iframe").each(function(){
                        $tmpDiv.css({top:$(this).offset().top, left:$(this).offset().left,
                        width:this.offsetWidth,height:this.offsetHeight,
                        position: "absolute", opacity: "0.0001", zIndex: 20000,
                        background:"#444"});
                        $('body').append($tmpDiv);
                    });
                }
            
                e = e ? e : window.event;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;

                $(document).bind('mousemove.jquerywindow', function(e) {
                    resizing(e, $obj);
                });

                $(document).bind('mouseup.jquerywindow', function(e) {
                    if (options.type === "iframe") $("#jquery-window-engine-iframe-cover").remove();
                    if (options.onResizeEnd != null) options.onResizeEnd();
                    $(document).unbind('mousemove.jquerywindow');
                    $(document).unbind('mouseup.jquerywindow');
                    enableSelection();
                });

                if (options.onResizeBegin != null) options.onResizeBegin();
            }
            return false
        });
        
        //Attach a click event to the window's minimize button to allow window minimization
        $windowMinimizeButton.bind('click.jquerywindow', function(e) {
            $obj = $(e.target).parent().parent();
            setFocus($obj);
            if ($obj.data("state") === "minimized") {
                $obj.data("state", "normal");
                $obj.css("height", $obj.data("lastHeight"));
                $obj.find(".window-content").slideToggle("slow");
            }
            else if ($obj.data("state") === "normal") {
                $obj.data("state", "minimized");
                $obj.find(".window-content").slideToggle("slow", function() { $obj.css("height", 0); });
            }
            else {
                $obj.find(".window-maximizeButton").click();
            }
        });

        $windowMaximizeButton.bind('click.jquerywindow', function(e) {
            $obj = $(e.target).parent().parent();
            setFocus($obj);
            
            ////for iframe browser compatibility
            var dw = 3, dh = 2;
            try{
                if(navigator.appName == 'Microsoft Internet Explorer' ) {
                    var rv = -1;
                    var ua = navigator.userAgent;
                    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
                    if (rv < 9.0) {
                        dw = dh = 0;
                    }
                }
            }catch(e){
                dw = dh = 0;
            }
            //////////////////////////////////////////////////////////
            
            if ($obj.data("state") === "minimized") {
                $obj.find(".window-minimizeButton").click();
            }
            else if ($obj.data("state") === "normal") {
                $obj.animate({
                    top: "5px",
                    left: "5px",
                    width: $(window).width() - 15,
                    height: $(window).height() - 45
                }, "slow");
                if (options.type === "iframe") {
                    $obj.find("iframe").animate({
                        top: "5px",
                        left: "5px",
                        width: $(window).width() - 15 - dw,
                        height: $(window).height() - 45 - dh
                    }, "slow");
                }
                $obj.data("state", "maximized")
            }
            else if ($obj.data("state") === "maximized") {
                $obj.animate({
                    top: $obj.data("lastY"),
                    left: $obj.data("lastX"),
                    width: $obj.data("lastWidth"),
                    height: $obj.data("lastHeight")
                }, "slow");
                if (options.type === "iframe") {
                    $obj.find("iframe").animate({
                        top: $obj.data("lastY"),
                        left: $obj.data("lastX"),
                        width: parseInt($obj.data("lastWidth") - dw),
                        height: parseInt($obj.data("lastHeight") - dh)
                    }, "slow");
                }
                $obj.data("state", "normal")
            }

        });
        
        //Attach a click event to the popup's close button to allow closing
        $windowCloseButton.bind('click.jquerywindow', function(e) {
            //var $window = $(e.target).parent().parent();
            //$window.remove();//fadeOut(function() { $window.remove(); });
            //if (options.onWindowClose != null) options.onWindowClose();

        	var iid;
        	for(var prop in jWindowFrameIds) {
            	iid = jWindowFrameIds[prop];
        	}

        	if($('#'+iid+'_Background').length > 0)
            {
            	$('#'+iid+'_Background').remove();
            }

            delete jWindowFrames['jWindowName_'+iid];
        	delete jWindowFrameIds['jWindowName_'+iid];

        	$('#'+iid).hide();

        	for(var prop in jWindowFrameIds) {
            	iid = jWindowFrameIds[prop];
        	}
    		
            if($('#jWindowName_'+iid).contents().find('.modal-background').length > 0)
            {
            	$('#jWindowName_'+iid).contents().find('.modal-background').remove();

            	$('#'+jWindowFrameIds[iid]+' .window-minimizeButton').attr('disabled', false);
            	$('#'+jWindowFrameIds[iid]+' .window-maximizeButton').attr('disabled', false);
            	$('#'+jWindowFrameIds[iid]+' .window-closeButton').attr('disabled', false);
            }

        });
        
        //Attach a click event to the popup's background to allow closing
        //$modalBackground.bind('click.jquerywindow', function(e) {
            //$windowCloseButton.click();
        //});
        /*$windowContainer.bind('mouseout.jquerywindow', function(e) {
            $('.window-content').css("filter", "alpha(opacity=5)");
        });
        $windowContainer.bind('mouseover.jquerywindow', function(e) {
        	$('.window-content').css("filter", "alpha(opacity=100)");
        });
        $modalBackground.bind('mouseout.jquerywindow', function(e) {
        	$('.window-content').css("filter", "alpha(opacity=100)");
        });*/

        $windowContent.click(function(e) {
            setFocus($(e.target).parent());
        });
        $windowStatusBar.click(function(e) {
            setFocus($(e.target).parent());
        });

        $windowContainer.data("state", "normal");
        //hide the popup to show it later using a visual effect
        $windowContainer.css("display", "none");

        $('body').append($windowContainer);
        if(options.modal){
            $('body').append($modalBackground);
        }

        $window = $windowContainer;
        if (!options.draggable) $window.children(".window-titleBar").css("cursor", "default");
        setFocus($window);
        
        //move the popup to the initial position
        move($windowContainer, options.posx, options.posy);
        //resize the popup to the initial size
        resize($windowContainer, options.width, options.height);
        //show the popup using the jquery fadeIn visual effect
        $window.show();//fadeIn('fast');

        var scrollMove = function() {
        	var last;
        	for(var prop in jWindowFrameIds) {
        		last = $('#'+jWindowFrameIds[prop]);

        		if(last.data("state") == "maximized")
        		{
                    move(last, 5, 5+$(document).scrollTop());
        		}
        		else
        		{
                	posxLast = ($(document).innerWidth() - last.data('lastWidth'))/2 + 5;
                	if($(document).innerHeight() > last.data('lastHeight'))
                	{
                		posyLast = parseInt(last.data("lastY")) + $(document).scrollTop() - parseInt(last.data("lastScrollTop"));//$(document).scrollTop();//($(window).height() - last.data('lastHeight'))/2 + $(document).scrollTop();
                	}
                	else
                	{
                		posyLast = $(document).scrollTop();
                	}
                	
                    move(last, last.data("lastX"), posyLast);
                    //move(last, posxLast, posyLast);
        		}
        	}
        };

        $(window).scroll(function () {
        	scrollMove();
        });
    },

    updateWindowContent: function(id, newContent) {
        $("#" + id + " .window-content").html(newContent);
    },

    updateWindowContentWithAjax: function(id, url, cache) {
        cache = cache === undefined ? true : false;
        $.ajax({
            url: url,
            cache: cache,
            dataType: "html",
            success: function(data) {
                $("#" + id + " .window-content").html(data);
            }
        });
    },

    moveWindow: function(id, x, y) {
        $obj = $("#" + id);
        x = parseInt(x);
        y = parseInt(y);
        $obj.data("lastX", x).data("lastY", y);
        x = x + "px";
        y = y + "px";
        $obj.css("left", x).css("top", y);
    },

    resizeWindow: function(id, width, height) {
        $obj = $("#" + id);
        width = parseInt(width);
        height = parseInt(height);
        $obj.data("lastWidth", width).data("lastHeight", height);
        width = width + "px";
        height = height + "px";
        $obj.css("width", width).css("height", height);
    },

    minimizeWindow: function(id) {
        $("#" + id + " .window-minimizeButton").click();
    },

    maximizeWindow: function(id) {
        $("#" + id + " .window-maximizeButton").click();
    },

    showWindow: function(id) {
        $("#" + id + " .window-closeButton").show();//.fadeIn('fast');
    },

    hideWindow: function(id) {
        $("#" + id + " .window-closeButton").hide();//.fadeOut('fast');
    },

    closeWindow: function(id) {
        $("#" + id + " .window-closeButton").click();
    },

    closeAllWindows: function() {
        $(".window-container .window-closeButton").click();
    }

});

var jWindowFrames = {};
var jWindowFrameIds = {};
var jWindowFrameIdSeq = 1000;
function _jWindowPopup(id, title, w, h, url, maximize, winObject)
{
	id = 'jW_' + (jWindowFrameIdSeq++);

	try{
		for(var prop in jWindowFrameIds) {
	        if($('#jWindowName_'+jWindowFrameIds[prop]).contents().find('.modal-background').length == 0)
	        {
	        	$modalBackground = $('<div class="modal-background"></div>');
	        	$modalBackground.css("z-index","20000");
	        	$('#jWindowName_'+jWindowFrameIds[prop]).contents().find('body').append($modalBackground);
	
	        	$('#'+jWindowFrameIds[prop]+' .window-minimizeButton').attr('disabled', true);
	        	$('#'+jWindowFrameIds[prop]+' .window-maximizeButton').attr('disabled', true);
	        	$('#'+jWindowFrameIds[prop]+' .window-closeButton').attr('disabled', true);
	        }
		}
	}catch(e)
	{}

	var key = 'jWindowName_'+id;

	jWindowFrames[key] = winObject;
	jWindowFrameIds[key] = id;

	posx = ($(document).innerWidth() - w)/2;
	if($(document).innerHeight() > h)
	{
		posy = ($(window).height() - h)/2 + $(document).scrollTop();
	}
	else
	{
		posy = $(document).scrollTop();
	}

	$.newWindow({id:id,posx:posx,posy:posy,width:w,height:h,title:title, type:"iframe", modal:true, resizeable:false, minimizeButton: false, maximizeButton: false, closeButton: false, draggable:false});
    $.updateWindowContent(id,'<iframe id="'+key+'" name="'+key+'" src="'+url+'" width="'+w+'" height="'+h+'" frameborder="0"/>');

    if(maximize)
    {
    	$.maximizeWindow(jWindowFrameId);
    }
}
function jWindowFrame(name)
{
	return topFrame().jWindowFrames[name];
}
function jWindowFrameClose(name)
{
	topFrame().$.closeWindow(topFrame().jWindowFrameIds[name]);
}
function jWindowPopup(url, w, h, id, title, maximize)
{
	topFrame()._jWindowPopup(title.replaceAll(" ", ""), title, w, h, url, maximize, this);
}
/**
 * Ritis 최상위 프레임 가져오기
 * @return window
 */
function topFrame()
{
	var _thisW = this;
	var _parentW = parent;
	while(true)
	{
		if(_thisW == _parentW)
		{
			return _thisW;
		}
		else
		{
			var a = _parentW.jWindowFrames;
			if(a)
			{
				_thisW = _parentW;
				_parentW = _parentW.parent;
			}
			else
			{
				return _thisW;
			}
		}
	}
}
