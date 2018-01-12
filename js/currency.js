function openCurrency (event) {
    $(".currency-information-page").fadeIn(100);
    $(".currency-information").slideDown(400);
};
function closeCurrency (event) {
    $(".currency-information-page").fadeOut(800);
    $(".currency-information").slideUp(400);
};
function getUrl (num) {
	return 'https://www.nbrb.by/API/ExRates/Rates/'+num;
};

function sendRequest (num, func) {
	$.ajax({
		url: getUrl(num),
		method: "GET",
		success:func
	});
};

function addSelect (data) {
	let objSel1= document.getElementById('firstСurrencySelect');
	let objSel2= document.getElementById('secondСurrencySelect');
	objSel1.options[objSel1.options.length] = new Option(data.Cur_Abbreviation, data.Cur_OfficialRate/data.Cur_Scale);
	objSel2.options[objSel2.options.length] = new Option(data.Cur_Abbreviation, data.Cur_OfficialRate/data.Cur_Scale);		
};

function addDate (date) {
	let html = document.getElementById('calcHead').innerHTML;
	html += date.substring(8,10)+'.'+date.substring(5,7)+'.'+date.substring(0,4);
	document.getElementById('calcHead').innerHTML=html;
};

function getCurrency () {
	sendRequest( 145, function( data ){addSelect (data)});
	sendRequest( 292, function( data ){addSelect (data)});
	sendRequest( 298, function( data ){addSelect (data); addDate(data.Date)});
};

function calcCurrency ( first, second ) {
		let firstValue=document.getElementById(first+'СurrencyInput').value;
		let firstRate=document.getElementById(first+'СurrencySelect').selectedOptions[0].value;
		let secondRate=document.getElementById(second+'СurrencySelect').selectedOptions[0].value;
		let rate=firstRate/secondRate;
		let secondValue=parseFloat((firstValue*rate).toFixed(3));
		document.getElementById(second+'СurrencyInput').value=secondValue;	
};

$(document).ready(function(){
	getCurrency();
	$('#firstСurrencyInput').keyup(function(){calcCurrency('first', 'second')});
	$('#secondСurrencyInput').keyup(function(){calcCurrency('second', 'first')});
});