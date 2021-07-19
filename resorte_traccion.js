var DECIMALS = 4;

$("#btn_nuevo").click(function () {
  window.location = "";
});

$("#btn_calcular").click(function () {
  DECIMALS = $("#txt-decimales").val();
  let F = parseFloat($("#fuerza-min").val());
  let d = parseFloat($("#diametro").val());
  let r2 = parseFloat($("#r2").val());
  let y = parseFloat($("#deflexion").val());
  let porcentaje_choque = $("#porcentaje-choque").val();
  let c = parseFloat($("#c").val());
  let b = parseFloat($("#b").val());
  let a = parseFloat($("#a").val());

  let D = c * d;
  $("#txt-diametro-medio").val(D.toFixed(DECIMALS));
  console.log(D);

  let ks = 1 + 0.5 / c;
  $("#txt-ks").val(ks.toFixed(DECIMALS));
  console.log(ks);

  // -3.609C3 + 160.6C2 - 3.407C + 33.522
  let ti = -3.609 * Math.pow(c, 3) + 160.6 * Math.pow(c, 2) - 3407 * c + 33522;
  $("#txt-ti-1").val(ti.toFixed(DECIMALS));
  console.log(ti);

  let fi = (ti * Math.PI * Math.pow(d, 3)) / (8 * ks * D);
  $("#txt-fi-1").val(fi.toFixed(DECIMALS));
  console.log(ti);

  let sut = a * Math.pow(d, b);
  $("#txt-sut").val(sut.toFixed(DECIMALS));
  console.log(sut);

  let sys = 0.45 * sut;
  $("#txt-sys").val(sys.toFixed(DECIMALS));
  console.log(sys);

  let k = (F - fi) / y;
  $("#txt-k").val(k.toFixed(DECIMALS));
  console.log(k);

  let na = (Math.pow(d, 4) * 11500000) / (8 * k * Math.pow(D, 3));
  $("#txt-na").val(na.toFixed(DECIMALS));
  console.log(na);

  let tmax = (ks * (8 * D * F)) / (Math.PI * Math.pow(d, 3));
  $("#txt-tmax-1").val(tmax.toFixed(DECIMALS));
  console.log(na);

  let ns = sys / tmax;
  $("#txt-ns-1").val(ns.toFixed(DECIMALS));
  console.log(ns);

  let kb = (4 * Math.pow(c, 2) - c - 1) / (4 * c * (c - 1));
  $("#txt-kb").val(kb.toFixed(DECIMALS));
  console.log(kb);

  let ta =
    kb * ((16 * F * D) / (Math.PI * Math.pow(d, 3))) +
    (4 * F) / (Math.PI * Math.pow(d, 2));
  $("#txt-ta").val(ta.toFixed(DECIMALS));
  console.log(ta);

  let nA = (0.75 * sut) / ta;
  $("#txt-na-1").val(nA.toFixed(DECIMALS));
  console.log(nA);

  let c2 = (2 * r2) / d;
  console.log(c2);
  let kw2 = (4 * c2 - 1) / (4 * c2 - 4);
  console.log(kw2);

  let tb = kw2 * ((8 * F * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-tb").val(tb.toFixed(DECIMALS));
  console.log(tb);

  let nB = (0.75 * sut) / ta;
  $("#txt-nb-1").val(nB.toFixed(DECIMALS));
  // console.log(nB);
});

$("#btn_calcular_fatiga").click(function () {
  DECIMALS = $("#txt-decimales").val();
  let fmin = parseFloat($("#fuerza-min").val()); // Fi
  let fmax = parseFloat($("#fuerza-max").val()); // Fm
  let fi = fmin;

  let d = $("#diametro").val();
  let y = $("#deflexion").val();
  let porcentaje_choque = $("#porcentaje-choque").val();
  let c = $("#c").val();
  let b = $("#b").val();
  let a = $("#a").val();

  let kw = (4 * c - 1) / (4 * c - 4) + 0.615 / c;
  $("#txt-kw").val(kw.toFixed(DECIMALS));
  console.log(kw);

  let fm = (fmax + fmin) / 2;
  $("#txt-fm").val(fm.toFixed(DECIMALS));
  console.log(fm);
  let fa = (fmax - fmin) / 2;
  $("#txt-fa").val(fa.toFixed(DECIMALS));
  console.log(fa);

  let ks = 1 + 0.5 / c; //arriba
  let D = c * d; // arriba
  let ti = ks * ((8 * fi * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-ti").val(ti.toFixed(DECIMALS));
  console.log(ti);

  let tm = ks * ((8 * fm * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-tm").val(tm.toFixed(DECIMALS));
  console.log(tm);

  let ta = ks * ((8 * fa * D) / (Math.PI * Math.pow(d, 3)));
  $("#txt-ta").val(ta.toFixed(DECIMALS));
  console.log(ta);

  // Sew constantes 45000 sin granallar  o 67500 granallado

  let sew = 67500;

  if (!$("#chk-granallado").is(":checked")) {
    sew = 45000;
  }

  let sut = a * Math.pow(d, b); //arriba
  let sus = 0.67 * sut;
  $("#txt-sus").val(sus.toFixed(DECIMALS));
  console.log(sus);

  let ses = 0.5 * ((sew * sus) / (sus - 0.5 * sew));
  $("#txt-ses").val(ses.toFixed(DECIMALS));
  console.log(ses);

  let nf = (ses * (sus - ti)) / (ses * (tm - ti) + sus * ta);
  $("#txt-nf").val(nf.toFixed(DECIMALS));
  console.log(nf);
});
