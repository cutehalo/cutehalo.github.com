if (location.href.indexOf("site.douban.com")>-1) {
	$("div[id^=playlist]").each(function(){
	var o = $(this);
	var id = o.attr("id").split("-")[1];
	var songArr = PlaylistWidget.findOrCreate(id).songs;
	o.find("tr[class^=tr]").each(function(i){
		if (songArr.length==o.find("tr[class^=tr]").length) {
			var html = '<a href="'+songArr[i].rawUrl+'">Save</a>';
			$(this).find("td.title").prepend(html);
		};
	})
})
}
else{
	alert("You should click this bookmark when you are browsing a site of Douban.");
}