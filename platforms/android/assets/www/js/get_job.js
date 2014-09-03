$(document).ready(function(){
		var web=localStorage.getItem("web");
<<<<<<< HEAD
		if(web="weclome")
		{
			
			var a=localStorage.getItem("getdata");
=======
		if(web=="weclome")
		{
			
			var a=localStorage.getItem("getdata");
			console.log(a);
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
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
<<<<<<< HEAD
							"class": "work",
							"text": "追蹤"
=======
							"class": "work_btn",
							"text": "追蹤",
							"onlick":"reply_click(this.id)"
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
						}).appendTo("#tdc_"+i);
				}
			}
		}

			
<<<<<<< HEAD
		else if(web="advance")
		{
			var d=localStorage.getItem("data");
=======
		else if(web=="advance")
		{
			var d=localStorage.getItem("data");
			console.log(d);
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
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
<<<<<<< HEAD
						"text": b[i]['j_complete']
=======
						"text": e[i]['j_complete']
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
					}).appendTo("#tda_"+i);
					

					$("<tr/>", {
						"class": "work",
<<<<<<< HEAD
						"text": b[i]['j_date']
					}).appendTo("#tdb_"+i);

					$("<a/>", {
						"href": b[i]['j_url'],
						"text": b[i]['j_name']
=======
						"text": e[i]['j_date']
					}).appendTo("#tdb_"+i);

					$("<a/>", {
						"href": e[i]['j_url'],
						"text": e[i]['j_name']
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
					}).appendTo("#tdb_"+i);
					
					$("<tr/>", {
						"class": "work",
<<<<<<< HEAD
						"text": b[i]['j_cname']
					}).appendTo("#tdb_"+i);
					$("<tr/>", {
						"class": "work",
						"text": b[i]['j_address']
=======
						"text": e[i]['j_cname']
					}).appendTo("#tdb_"+i);
					$("<tr/>", {
						"class": "work",
						"text": e[i]['j_address']
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
					}).appendTo("#tdb_"+i);
					
					$("<button/>", {
						"id":"btn."+i,
						"class": "work",
						"text": "追蹤"
							}).appendTo("#tdc_"+i);
				}
			}
		}
<<<<<<< HEAD
});
=======
		
		$('.work_btn').click(function(){
			var id=this.id;
			var splits=new Array();
			split=id.split(".");
			
			$.ajax({
				type:"post",
				url:"http://163.15.192.185/career/index.php/my_track/track",
				datatype:"html",
				cache:false,
				success:success,
				error:error,
				data:{
					s_id:localStorage.getItem("name"),
					j_name:b[split[1]]['j_name'],
					j_url:b[split[1]]['j_url'],
					j_cname:b[split[1]]['j_cname'],
					j_address:b[split[1]]['j_address'],
					j_date:b[split[1]]['j_date']
				}
			});
				

			//alert(b[split[1]]['j_date']+","+b[split[1]]['j_name']+","+b[split[1]]['j_cname']+","+b[split[1]]['j_url']+","+b[split[1]]['j_address']);
		});
		
});

function success(data)
{
	alert(data);
	console.log(data);
}

function error(data)
{
	alert(data);
}
>>>>>>> 0d1f5f0b900a9bbf4c3f38d8d8a59a6dd4204324
