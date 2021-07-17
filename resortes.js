var DECIMALS = 4;

$("#btn_nuevo").click(function () {
  window.location = "";
});

$("#btn_calcular").click(function () {
  DECIMALS = $("#txt-decimales").val();
  var fuerza_min = $("#fuerza-min").val();
  var d = $("#diametro").val();
  var y = $("#deflexion").val();
  var porcentaje_choque = $("#porcentaje-choque").val();
  var c = $("#c").val();
  var b = $("#b").val();
  var a = $("#a").val();

  var diametro_medio_D = c * d;
  $("#txt-diametro-medio").val(diametro_medio_D.toFixed(DECIMALS));
  console.log(diametro_medio_D);

  var ks = 1 + 0.5 / c;
  $("#txt-ks").val(ks.toFixed(DECIMALS));
  console.log(ks);

  var sut = a * Math.pow(d, b);
  $("#txt-sut").val(sut.toFixed(DECIMALS));
  console.log(sut);

  var sys = 0.6 * sut;
  $("#txt-sys").val(sys.toFixed(DECIMALS));
  console.log(sys);

  var k = fuerza_min / y;
  $("#txt-k").val(k.toFixed(DECIMALS));
  console.log(k);

  var na =
    (Math.pow(d, 4) * 11500000) / (8 * k * Math.pow(diametro_medio_D, 3));
  $("#txt-na").val(na.toFixed(DECIMALS));
  console.log(na);

  var nt = na + 2;
  $("#txt-nt").val(nt.toFixed(DECIMALS));
  console.log(nt);

  var ls = d * nt;
  $("#txt-ls").val(ls.toFixed(DECIMALS));
  console.log(ls);

  var y_trabajo = fuerza_min / k;
  $("#txt-y-trabajo").val(y_trabajo.toFixed(DECIMALS));
  console.log(y_trabajo);

  var y_choque = porcentaje_choque * y_trabajo;
  $("#txt-y-choque").val(y_choque.toFixed(DECIMALS));
  console.log(y_choque);

  var fuerza_precarga = 5;
  var y_inicial = fuerza_precarga / k;
  $("#txt-y-inicial").val(y_inicial.toFixed(DECIMALS));
  console.log(y_inicial);

  var lf = ls + y_choque + y_trabajo + y_inicial;
  $("#txt-lf").val(lf.toFixed(DECIMALS));
  console.log(lf);

  var y_cierre = lf - ls;
  $("#txt-y-cierre").val(y_cierre.toFixed(DECIMALS));
  console.log(y_cierre);

  var f_cierre = k * y_cierre;
  $("#txt-f-cierre").val(f_cierre.toFixed(DECIMALS));
  console.log(f_cierre);

  var t_max =
    ks * ((8 * diametro_medio_D * f_cierre) / (Math.PI * Math.pow(d, 3)));
  $("#txt-tmax").val(t_max.toFixed(DECIMALS));
  console.log(t_max);

  var ns = sys / t_max;
  $("#txt-ns").val(ns.toFixed(DECIMALS));
  console.log(ns);
});

$("#btn_calcular_fatiga").click(function () {
  DECIMALS = $("#txt-decimales").val();
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
  $("#txt-kw").val(kw.toFixed(DECIMALS));
  console.log(kw);

  let fm = (fmax + fmin) / 2;
  $("#txt-fm").val(fm.toFixed(DECIMALS));
  console.log(fm);
  var fa = (fmax - fmin) / 2;
  $("#txt-fa").val(fa.toFixed(DECIMALS));
  console.log(fa);

  let ks = 1 + 0.5 / c; //arriba
  let D = c * d; // arriba
  var ti = ks * ((8 * fi * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-ti").val(ti.toFixed(DECIMALS));
  console.log(ti);

  var tm = ks * ((8 * fm * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-tm").val(tm.toFixed(DECIMALS));
  console.log(tm);

  var ta = ks * ((8 * fa * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-ta").val(ta.toFixed(DECIMALS));
  console.log(ta);

  // Sew constantes 45000 sin granallar  o 67500 granallado

  var sew = 67500;

  if (!$("#chk-granallado").is(":checked")) {
    sew = 45000;
  }

  let sut = a * Math.pow(d, b); //arriba
  var sus = 0.67 * sut;
  $("#txt-sus").val(sus.toFixed(DECIMALS));
  console.log(sus);

  var ses = 0.5 * ((sew * sus) / (sus - 0.5 * sew));
  $("#txt-ses").val(ses.toFixed(DECIMALS));
  console.log(ses);

  var nf = (ses * (sus - ti)) / (ses * (tm - ti) + sus * ta);
  $("#txt-nf").val(nf.toFixed(DECIMALS));
  console.log(nf);
});
