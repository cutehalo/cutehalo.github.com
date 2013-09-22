var arr = [];
if (location.href.indexOf("site.douban.com")>-1) {
	$("div.playlist").each(function(){
		var text = $(this).next().next().next().next().next().text();
		var reg = /song_records = (.*);/g
		var t = text.match(reg);
		var b =t[0].replace("song_records = ","");
		var b = strToJson(b);
		for (var i = 0; i < b.length; i++) {
			arr.push(b[i].rawUrl);
		};
	})

	function strToJson(str){ 
		var json = (new Function("return " + str))(); 
		return json; 
	};
	$("tr[class^=tr]").each(function(i){
		if (arr.length==$("tr[class^=tr]").length) {
			var html = '<a href="'+arr[i]+'">Save</a>';
			$(this).find("td.title").append(html);
		};
	})
}
else{
	alert("You should click this bookmark when you are browsing a site of Douban.");
}