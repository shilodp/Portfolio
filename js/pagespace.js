var distance;
distance = $("div.footer").offset().top;
console.log(distance);
if (distance<480) {
$("div.footer").offset({top:480});};
