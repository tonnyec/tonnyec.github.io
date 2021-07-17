$("#btn_calcular").click(function () {
  var fuerza_min = $("#fuerza-min").val();

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

  var k = fuerza_min / y;
  console.log(k);

  var na =
    (Math.pow(d, 4) * 11500000) / (8 * k * Math.pow(diametro_medio_D, 3));
  console.log(na);

  var nt = na + 2;
  console.log(nt);

  var ls = d * nt;
  console.log(ls);

  var y_trabajo = fuerza_min / k;
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

$("#btn_calcular_fatiga").click(function () {
  var fmin = parseFloat($("#fuerza-min").val()); // Fi
  var fmax = parseFloat($("#fuerza-max").val()); // Fm
  let fi = fmin;

  var d = $("#diametro").val();
  var y = $("#deflexion").val();
  var porcentaje_choque = $("#porcentaje-choque").val();
  var c = $("#c").val();
  var b = $("#b").val();
  var a = $("#a").val();

  var kw = (4 * c - 1) / (4 * c - 4) + 0.615 / c;
  console.log(kw);

  let fm = (fmax + fmin) / 2;
  console.log(fm);
  var fa = (fmax - fmin) / 2;
  console.log(fa);

  let ks = 1 + 0.5 / c; //arriba
  let D = c * d; // arriba
  var ti = ks * ((8 * fi * D) / (Math.PI * Math.pow(d, 3)));
  console.log(ti);

  var tm = ks * ((8 * fm * D) / (Math.PI * Math.pow(d, 3)));
  console.log(tm);

  var ta = ks * ((8 * fa * D) / (Math.PI * Math.pow(d, 3)));
  console.log(ta);

  // Sew constantes 45000 sin granallar  o 67500 granallado

  var sew = 67500;

  let sut = a * Math.pow(d, b); //arriba
  var sus = 0.67 * sut;
  console.log(sus);

  var ses = 0.5 * ((sew * sus) / (sus - 0.5 * sew));
  console.log(ses);

  var nf = (ses * (sus - ti)) / (ses * (tm - ti) + sus * ta);
  console.log(nf);
});
