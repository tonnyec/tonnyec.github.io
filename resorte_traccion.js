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
  var c = parseFloat($("#c").val());
  var b = parseFloat($("#b").val());
  var a = parseFloat($("#a").val());

  var diametro_medio_D = c * d;
  $("#txt-diametro-medio").val(diametro_medio_D.toFixed(DECIMALS));
  console.log(diametro_medio_D);

  var ks = 1 + 0.5 / c;
  $("#txt-ks").val(ks.toFixed(DECIMALS));
  console.log(ks);

  // -3.609C3 + 160.6C2 - 3.407C + 33.522
  let ti = -3.609 * Math.pow(c, 3) + 160.6 * Math.pow(c, 2) - 3407 * c + 33522;
  $("#txt-ti-1").val(ti.toFixed(DECIMALS));
  console.log(ti);

  let fi = (ti * Math.PI * Math.pow(d, 3)) / (8 * ks * diametro_medio_D);
  $("#txt-fi-1").val(fi.toFixed(DECIMALS));
  console.log(ti);

  var sut = a * Math.pow(d, b);
  $("#txt-sut").val(sut.toFixed(DECIMALS));
  console.log(sut);

  var sys = 0.45 * sut;
  $("#txt-sys").val(sys.toFixed(DECIMALS));
  console.log(sys);

  var k = (fuerza_min - fi) / y;
  $("#txt-k").val(k.toFixed(DECIMALS));
  console.log(k);

  var na =
    (Math.pow(d, 4) * 11500000) / (8 * k * Math.pow(diametro_medio_D, 3));
  $("#txt-na").val(na.toFixed(DECIMALS));
  console.log(na);

  let tmax =
    (ks * (8 * diametro_medio_D * fuerza_min)) / (Math.PI * Math.pow(d, 3));
  $("#txt-tmax-1").val(tmax.toFixed(DECIMALS));
  console.log(na);

  let ns = sys / tmax;
  $("#txt-ns-1").val(ns.toFixed(DECIMALS));
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
  let ti = ks * ((8 * fi * D) / (Math.PI * Math.pow(d, 3)));
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
