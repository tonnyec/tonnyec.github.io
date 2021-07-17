$("#btn_calcular").click(function () {
  var fuerza_inicial = $("#fuerza-inicial").val();
  var fuerza_final = $("#fuerza-final").val();
  var d = $("#diametro").val();
  var y = $("#deflexion").val();
  var porcentaje_choque = $("#porcentaje-choque").val();
  var c = $("#c").val();
  var b = $("#b").val();
  var a = $("#a").val();
  

  var diametro_medio_D = c * d;
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

  var ls = d * nt;
  console.log(ls);

  var y_trabajo = fuerza_inicial / k;
  console.log(y_trabajo);

  var y_choque = porcentaje_choque * y_trabajo;
  console.log(y_choque);

  var fuerza_precarga = 5;
  var y_inicial = fuerza_precarga / k;
  console.log(y_inicial);

  var lf = ls + y_choque + y_trabajo + y_inicial;
  console.log(lf);

  var y_cierre = lf - ls;
  console.log(y_cierre);

  var f_cierre = k * y_cierre;
  console.log(f_cierre);

  var t_max =
    ks * ((8 * diametro_medio_D * f_cierre) / (Math.PI * Math.pow(d, 3)));
  console.log(t_max);

  var ns = sys / t_max;
  console.log(ns);
});
