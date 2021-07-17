$("#btnCalcular").click(function () {
  alert("HOla");
  var fuerza_inicial = $("#fuerza-inicial").val();
  var fuerza_final = $("#fuerza-final").val();
  var diametro = $("#diametro").val();
  var y = $("#deflexion").val();
  var c = $("#c").val();
  var b = $("#c").val();
  var a = $("#c").val();

  var diametro_medio_D = c * diametro;
  console.log(diametro_medio_D);

  var ks = 1 + 0.5 / c;
  console.log(ks);

  var sut = a * Math.pow(d, b);
  console.log(sut);

  var sys = 0.6 * sut;
  console.log(sys);

  var k = fuerza_inicial / y;
  console.log(k);

  var na =
    (Math.pow(d, 4) * 11500000) / (8 * k * Math.pow(diametro_medio_D, 3));
  console.log(na);

  var nt = na + 2;
  console.log(nt);

  var ls = diametro * nt;
  console.log(ls);

  var y_trabajo = fuerza_inicial / k;
  console.log(y_trabajo);

  var y_choque = 0.1 * y_trabajo;
  console.log(y_choque);

  var fuerza_precarga = 5;
  var y_inicial = fuerza_precarga / k;
  console.log(y_inicial);

  var lf = ls + y_choque + y_trabajo + y_inicial;
  console.log(lf);


});
