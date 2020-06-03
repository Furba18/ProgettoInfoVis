var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = 1100 - margin.left - margin.right;
var height = 1000 - margin.top - margin.bottom;
var tempBody = "width";
var tempWings = "wings";
var tempTail = "tail";
var temp="val";

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom) ;

//costruzione dell'aeroplanino

function draw(data) {

	//costruzione delle ali
	svg.selectAll("wings")
		.data(data)
		.enter()
		.append("polyline")
		.attr("class","airplanewings")
		.attr("points", function (d) {
			let path = "";
			let x1 = (d.x+d.width/2);
			let y1 = (d.y+d.height/2) + d.wings/2;
			let x2 = d.x+d.width*3/2;
			let y2 = (d.y+d.height/2);
			let y3 = (d.y+d.height/2) - d.wings/2;
			path += x1 + ',' + y1 + ',' + x2 + ',' + y2 + ',' + x1 + ',' + y3;
			return path;
		})
		.attr("fill", "#FF0000");

	//costruzione della coda
	svg.selectAll("tail")
		.data(data)
		.enter()
		.append("polyline")
		.attr("class","airplanetail")
		.attr("points", function (d) {
			let path = "";
			let x1 = (d.x-d.width/2);
			let y1 = (d.y+d.height/2) + d.tail/2;
			let x2 = d.x+d.width*1/14;
			let y2 = (d.y+d.height/2);
			let y3 = (d.y+d.height/2) - d.tail/2;
			path += x1 + ',' + y1 + ',' + x2 + ',' + y2 + ',' + x1 + ',' + y3;
			return path;
		})
		.attr("fill", "#4AA02C");

	//costruzione del corpo
	svg.selectAll("body")
		.data(data)
		.enter()
		.append("rect")
		.attr("x", function (d) {
			return d.x
		})
		.attr("y", function (d) {
			return d.y
		})
		.attr("width", function (d) {
			return d.width
		})
		.attr("height", function (d) {
			return d.height
		})
		.attr("fill", "#FFFFFF");

}

//funzione per ridimensionare il corpo
var resizeRect = function(){
	let tmp;
	d3.selectAll("rect")
		.transition()
		.duration(2000)
		.attr("width", function(d){
		tmp = temp;
		return d[tmp];
	});
	temp = tempBody;
	tempBody = tmp;

}

//funzione per ridimensionare la coda
var resizeTail = function(){
	let tmp;
	d3.selectAll("polyline.airplanetail")
		.transition()
		.duration(2000)
		.attr("points", function(d){
		let path="";
		tmp = temp;
		let x1 = (d.x-d.width/2);
		let y1 = (d.y+d.height/2) + d[tmp]/2;
		let x2 = d.x+d.width*1/14;
		let y2 = (d.y+d.height/2);
		let y3 = (d.y+d.height/2) - d[tmp]/2;
		path += x1 + ',' + y1 + ',' + x2 + ',' + y2 + ',' + x1 + ',' + y3;
		return path;
	});
	temp = tempTail;
	tempTail = tmp;

}

//funzione per ridemesionare le ali
var resizeWings = function(){
	let tmp;
	d3.selectAll("polyline.airplanewings")
		.transition()
		.duration(2000)
		.attr("points", function(d){
		let path = "";
		tmp = temp;
		let x1 = (d.x+d.width/2);
		let y1 = (d.y+d.height/2) + d[tmp]/2;
		let x2 = d.x+d.width*3/2;
		let y2 = (d.y+d.height/2);
		let y3 = (d.y+d.height/2) - d[tmp]/2;
		path += x1 + ',' + y1 + ',' + x2 + ',' + y2 + ',' + x1 + ',' + y3;
		return path;
	});
	temp = tempWings;
	tempWings = tmp;

}

//caricamento del file json, richiamo delle funzioni resize
//funzione mouseover/mouseout per scurire/schiarire al passaggio del mouse
//serve per rendere più visibile il luogo dell'animazione

d3.json("data/dataPoint.json")
	.then((data) => {
		draw(data);
		d3.selectAll("rect")
			.on("click", resizeRect)
			.on("mouseover", function(){
				d3.selectAll("rect").style("fill", "#FDEEF4")})
			.on("mouseout", function(){
				d3.selectAll("rect").style("fill", "#FFFFFF")});
		d3.selectAll("polyline.airplanetail")
			.on("click", resizeTail)
			.on("mouseover", function(){
				d3.selectAll("polyline.airplanetail").style("fill", "#347C2C")})
			.on("mouseout", function(){
				d3.selectAll("polyline.airplanetail").style("fill", "#4AA02C")});
		d3.selectAll("polyline.airplanewings")
			.on("click", resizeWings)
			.on("mouseover", function(){
			d3.selectAll("polyline.airplanewings").style("fill", "#E42217")})
			.on("mouseout", function(){
				d3.selectAll("polyline.airplanewings").style("fill", "#FF0000")});

	});

