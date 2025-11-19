// js/map.js – FUNCIONA 100% con el SVG de SimpleMaps que ya tienes

document.addEventListener("DOMContentLoaded", () => {
  const mapObject = document.getElementById("world-map");

  mapObject.addEventListener("load", () => {
    const svgDoc = mapObject.contentDocument || mapObject.getSVGDocument();
    if (!svgDoc) return;

    // Traducción código ISO → español
    const nombres = {
      "AF":"Afganistán","AX":"Åland","AL":"Albania","DZ":"Argelia","AS":"Samoa Americana",
      "AD":"Andorra","AO":"Angola","AI":"Anguila","AQ":"Antártida","AG":"Antigua y Barbuda",
      "AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria",
      "AZ":"Azerbaiyán","BS":"Bahamas","BH":"Baréin","BD":"Bangladés","BB":"Barbados",
      "BY":"Bielorrusia","BE":"Bélgica","BZ":"Belice","BJ":"Benín","BM":"Bermudas",
      "BT":"Bután","BO":"Bolivia","BA":"Bosnia y Herzegovina","BW":"Botsuana","BR":"Brasil",
      "IO":"Territorio Británico del Océano Índico","VG":"Islas Vírgenes Británicas","BN":"Brunéi",
      "BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Camboya","CM":"Camerún",
      "CA":"Canadá","CV":"Cabo Verde","KY":"Islas Caimán","CF":"República Centroafricana",
      "TD":"Chad","CL":"Chile","CN":"China","CX":"Isla Christmas","CC":"Islas Cocos",
      "CO":"Colombia","KM":"Comoras","CD":"Rep. Dem. del Congo","CG":"Congo","CK":"Islas Cook",
      "CR":"Costa Rica","HR":"Croacia","CU":"Cuba","CW":"Curazao","CY":"Chipre","CZ":"República Checa",
      "DK":"Dinamarca","DJ":"Yibuti","DM":"Dominica","DO":"República Dominicana","EC":"Ecuador",
      "EG":"Egipto","SV":"El Salvador","GQ":"Guinea Ecuatorial","ER":"Eritrea","EE":"Estonia",
      "SZ":"Esuatini","ET":"Etiopía","FK":"Islas Malvinas","FO":"Islas Feroe","FJ":"Fiyi",
      "FI":"Finlandia","FR":"Francia","GF":"Guayana Francesa","PF":"Polinesia Francesa",
      "TF":"Tierras Australes Francesas","GA":"Gabón","GM":"Gambia","GE":"Georgia","DE":"Alemania",
      "GH":"Ghana","GI":"Gibraltar","GR":"Grecia","GL":"Groenlandia","GD":"Granada","GP":"Guadalupe",
      "GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bisáu","GY":"Guyana",
      "HT":"Haití","HM":"Islas Heard y McDonald","HN":"Honduras","HK":"Hong Kong","HU":"Hungría",
      "IS":"Islandia","IN":"India","ID":"Indonesia","IR":"Irán","IQ":"Irak","IE":"Irlanda",
      "IM":"Isla de Man","IL":"Israel","IT":"Italia","CI":"Costa de Marfil","JM":"Jamaica",
      "JP":"Japón","JE":"Jersey","JO":"Jordania","KZ":"Kazajistán","KE":"Kenia","KI":"Kiribati",
      "KP":"Corea del Norte","KR":"Corea del Sur","KW":"Kuwait","KG":"Kirguistán","LA":"Laos",
      "LV":"Letonia","LB":"Líbano","LS":"Lesoto","LR":"Liberia","LY":"Libia","LI":"Liechtenstein",
      "LT":"Lituania","LU":"Luxemburgo","MO":"Macao","MG":"Madagascar","MW":"Malaui","MY":"Malasia",
      "MV":"Maldivas","ML":"Malí","MT":"Malta","MH":"Islas Marshall","MQ":"Martinica","MR":"Mauritania",
      "MU":"Mauricio","YT":"Mayotte","MX":"México","FM":"Micronesia","MD":"Moldavia","MC":"Mónaco",
      "MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Marruecos","MZ":"Mozambique",
      "MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Países Bajos","NC":"Nueva Caledonia",
      "NZ":"Nueva Zelanda","NI":"Nicaragua","NE":"Níger","NG":"Nigeria","NU":"Niue","NF":"Isla Norfolk",
      "MP":"Islas Marianas del Norte","NO":"Noruega","OM":"Omán","PK":"Pakistán","PW":"Palaos",
      "PS":"Palestina","PA":"Panamá","PG":"Papúa Nueva Guinea","PY":"Paraguay","PE":"Perú",
      "PH":"Filipinas","PN":"Pitcairn","PL":"Polonia","PT":"Portugal","PR":"Puerto Rico",
      "QA":"Catar","MK":"Macedonia del Norte","RO":"Rumanía","RU":"Rusia","RW":"Ruanda",
      "RE":"Reunión","BL":"San Bartolomé","SH":"Santa Elena","KN":"San Cristóbal y Nieves",
      "LC":"Santa Lucía","MF":"San Martín","PM":"San Pedro y Miquelón","VC":"San Vicente y las Granadinas",
      "WS":"Samoa","SM":"San Marino","ST":"Santo Tomé y Príncipe","SA":"Arabia Saudita",
      "SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leona","SG":"Singapur",
      "SX":"Sint Maarten","SK":"Eslovaquia","SI":"Eslovenia","SB":"Islas Salomón","SO":"Somalia",
      "ZA":"Sudáfrica","GS":"Georgia del Sur","SS":"Sudán del Sur","ES":"España","LK":"Sri Lanka",
      "SD":"Sudán","SR":"Surinam","SJ":"Svalbard y Jan Mayen","SE":"Suecia","CH":"Suiza",
      "SY":"Siria","TW":"Taiwán","TJ":"Tayikistán","TZ":"Tanzania","TH":"Tailandia","TL":"Timor Oriental",
      "TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad y Tobago","TN":"Túnez","TR":"Turquía",
      "TM":"Turkmenistán","TC":"Islas Turcas y Caicos","TV":"Tuvalu","UG":"Uganda","UA":"Ucrania",
      "AE":"Emiratos Árabes Unidos","GB":"Reino Unido","US":"Estados Unidos","UY":"Uruguay",
      "UZ":"Uzbekistán","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","WF":"Wallis y Futuna",
      "EH":"Sáhara Occidental","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabue"
    };

    // CLIC EN PAÍS
    svgDoc.addEventListener("click", e => {
      const path = e.target.closest("path");
      if (path && path.id) {
        const nombre = nombres[path.id] || path.id;
        document.getElementById("country-name").textContent = nombre;
        document.getElementById("popup").classList.remove("hidden");
      }
    });

    // HOVER
    svgDoc.querySelectorAll("path").forEach(p => {
      p.style.transition = "fill 0.3s";
      p.addEventListener("mouseenter", () => p.style.fill = "#60a5fa");
      p.addEventListener("mouseleave", () => p.style.fill = "#1e293b");
    });
  });
});
