$(document).ready(function() {
 $("#btnOk").click(function() {
  var city=$("#city").val();
  var code=$("#code").val();
  if(city.length>1){
  	var urllink='';
  	urllink=urllink + city;
  	if(code.lenght==2){
  		urllink=urllink+','+code;
  	}
  	urllink=urllink+'';


  	 $.ajax({
  	 	url: urllink,
  	 	data: { format: 'json'},
  	 	error: function(){
  	 		$("#main").html("Error. No resposne from server! Please check the input! ")
  	 	
  	 	dataType: 'json',
  	 	success: function(data){
  	 		console.log("temp:"+data.main.temp);
  	 		console.log("decs:"+data.weather[0].desription);
  	 		$('main').empty();
  	 		var table=$("<table/>");

  	 		var tr=getLine('City,city');
  	 		table.append(tr);

  	 		tr=getLine("Country", data.sys.country);
  	 		table.append(tr);

  	 		tr=getLine("Temperature", data.main.temp-273.15);
  	 		table.append(tr);
  	 		
  	 		tr=getLine("Humidity", data.main.humidity+'%');
  	 		table.append(tr);

  	 		tr=getLine("Pressure", data.main.pressure+'hPa');
  	 		table.append(tr);

  	 		tr=getLine("Desription", data.weather[0].desription);
  	 		table.append(tr);


  	 		$('#mainTable').append(table);
  	 		 if($("#details").is(":Checked")){
  	 		 	
  	 		tr=getLine("Min temperature", data.main.temp_min-273.15);
  	 		table.append(tr);

  	 		tr=getLine("Min temperature", data.main.temp_max-273.15);
  	 		table.append(tr);

  	 		tr=getLine("Wind", data.wind.speed);
  	 		table.append(tr);




  	 	},
  	 	type:'GET'
  });



 }

});
 function getLine(data1,data2){
 	var tr=$("tr/>");
  	var td1=$("td/>");
  	$(td1).append("Temperature:");
  	var td2=$("td/>");
  	$(td2).append("data.main.temp-273.15,1"));
  	tr.append(td1);
  	tr.append(td2);
  	table.append(tr);
 }

});