$(document).ready(function(){
		var web=localStorage.getItem("web");
		if(web="weclome")
		{
			
			var a=localStorage.getItem("getdata");
			var b=JSON.parse(a);
			console.log(b);
			
			//var refurl=document.referrer;
			//alert(refurl);
			
			if (b!=null)
			{
				for (var i=0;i<b.length;i++)
				{	
					//在table裡面新增tr(橫排)
					$("<tr/>", {
						"id":"tr_"+i
					}).appendTo("#movie-table-custom");
					
					$("<td/>",{
						"id":"tda_"+i
					}).appendTo("#tr_"+i);
					$("<td/>",{
						"id":"tdb_"+i
					}).appendTo("#tr_"+i);				
					$("<td/>",{
						"id":"tdc_"+i
					}).appendTo("#tr_"+i);
					
					
					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_complete']
					}).appendTo("#tda_"+i);
						

						$("<tr/>", {
							"class": "work",
							"text": b[i]['j_date']
						}).appendTo("#tdb_"+i);

						$("<a/>", {
							"href": b[i]['j_url'],
							"text": b[i]['j_name']
						}).appendTo("#tdb_"+i);
						
						$("<tr/>", {
							"class": "work",
							"text": b[i]['j_cname']
						}).appendTo("#tdb_"+i);
						$("<tr/>", {
							"class": "work",
							"text": b[i]['j_address']
						}).appendTo("#tdb_"+i);
						
						$("<button/>", {
							"id":"btn."+i,
							"class": "work",
							"text": "追蹤"
						}).appendTo("#tdc_"+i);
				}
			}
		}

			
		else if(web="advance")
		{
			var d=localStorage.getItem("data");
			var e=JSON.parse(d);
			if (e!=null)
			{
				for (var i=0;i<e.length;i++)
				{	
					//在table裡面新增tr(橫排)
					$("<tr/>", {
						"id":"tr_"+i
					}).appendTo("#movie-table-custom");
					
					$("<td/>",{
						"id":"tda_"+i
					}).appendTo("#tr_"+i);
					$("<td/>",{
						"id":"tdb_"+i
					}).appendTo("#tr_"+i);				
					$("<td/>",{
						"id":"tdc_"+i
					}).appendTo("#tr_"+i);
					
					
					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_complete']
					}).appendTo("#tda_"+i);
					

					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_date']
					}).appendTo("#tdb_"+i);

					$("<a/>", {
						"href": b[i]['j_url'],
						"text": b[i]['j_name']
					}).appendTo("#tdb_"+i);
					
					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_cname']
					}).appendTo("#tdb_"+i);
					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_address']
					}).appendTo("#tdb_"+i);
					
					$("<button/>", {
						"id":"btn."+i,
						"class": "work",
						"text": "追蹤"
							}).appendTo("#tdc_"+i);
				}
			}
		}
});