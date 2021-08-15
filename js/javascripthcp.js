/*  Implementar  WMS */


      var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	       maxZoom: 19,
	       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      var Esri_NatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	       attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	        maxZoom: 16
      });
      var OpenMapSurfer_Roads = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
    	maxZoom: 20,
    	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      var Esri_DeLorme = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
    	attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
    	minZoom: 1,
    	maxZoom: 11
      });
	  
 var capasBase = {
    "Calles Mapnik": OpenStreetMap_Mapnik,
    "Nat Geo": Esri_NatGeoWorldMap,
    "Carreteras": OpenMapSurfer_Roads,
    "Topo": Esri_DeLorme
  };

 var url = 'https://www.gits.igg.unam.mx/wmsproxy/wms';
  var capaWMS = L.tileLayer.betterWms(url, {
    //layers: 'cambio_climatico:cap_adap',
	layers: 'red_carretera_basica_2019',
    transparent: true,
    format: 'image/png'
  });

  var overlayMaps = {
    "WMS": capaWMS
  };


/*Termina Implementar  WMS*/




var layer1 = new L.LayerGroup();
 var layer2 = new L.LayerGroup();
 var layer3 = new L.LayerGroup();
 var layer4 = new L.LayerGroup();
 var layer5 = new L.LayerGroup();
 //var layer6 = new L.LayerGroup();


var piramide = new L.Icon({
    iconUrl: 'https://cancuntoursavatays.com/img/iconchichen.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

//***********************************************************zona Arqueologicas



 L.marker([ 17.517, -97.333],{icon: piramide})
 .bindPopup('<h1 style="color:#EABE3F;"> Santo Domingo Yanhuitlán</h1><p style="text-align: justify; color:brown;"> Es una construcción colonial del siglo XVI, con características propias de la orden dominica. De estilo Gótico y plateresco, se edificó sobre una plataforma prehispánica. Posee dos plantas: la primera cuenta con portería, claustro, sala capitular, calabozo, refectorio, profundis; al exterior se observan el huerto y la hospedería; en la planta alta se aprecian las celdas, terrazas, letrinas, biblioteca, y el acceso al coro de la iglesia. El inmueble se construyó con cantera extraída de la región, con motivos dominicos como flor de lis y perros distribuidos en fachadas, arcos y bóvedas del ex convento  <strong>Más Información  ver :  </strong> <a href=" https://www.inah.gob.mx/red-de-museos/314-museo-regional-del-ex-convento-de-santo-domingo-yanhuitlan "  target="_blank">Sitio web</a></p>   <img src="santodomingo.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/fotof53e5792f9c817aa24cd53fe44bcda8f.png"> ')
 .addTo(layer1);
 L.marker([16.6316,-96.4126],{icon: piramide})
  .bindPopup('<h1 style="color:#EABE3F;"> Zona Arqueológica de Lambityeco</h1><p style="text-align: justify; color:brown;"> Algunos investigadores consideran que Lambityeco significa “cerros de alambique” (compuesto por la palabra española alambique y de la zapoteca pytec ´cerros´); otros proponen que se trata de un vocablo zapoteco, ya transformado, equivalente a “loma hueca”. La zona arqueológica de Lambityeco forma parte de un asentamiento mucho mayor, conocido como Yeguih (“cerrito” en zapoteco).  <strong>Más Información  ver :  </strong> <a href="https://www.inah.gob.mx/zonas/88-zona-arqueologica-de-lambityeco " target="_blank">Sitio web</a></p>  <img src="lambityeco.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/foto8b8e82c5190c0d99a5b66e20268dc1b2.png">')
 .addTo(layer1);
 L.marker([16.3860,-95.324],{icon: piramide})
  .bindPopup('<h1 style="color:#EABE3F;"> Guiengola</h1><p style="text-align: justify; color:Olive;"> El toponímico de Guiengola tiene dos significados, el primero derivado de la lengua zapoteca del istmo, compuesto de las palabras guie: piedra y gola: grande o viejo “Roca Grande” y el segundo “cerro grande o antiguo” según Danyroó. <strong>Más Información  ver :  </strong><a href="https://www.inah.gob.mx/zonas/85-zona-arqueologica-de-guiengola">Sitio web</a></p>  <img src="Guiengola.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/foto3ea19a3466a7e8972484b639781c8757.png">')
 .addTo(layer1);
L.marker([15.7909,-96.0565],{icon: piramide})
  .bindPopup('<h1 style="color:#EABE3F;"> Zona Arqueológica Bocana del Rio Copalita</h1><p style="text-align: justify; color:Teal;"> Este sitio se localiza en el margen occidental del Río Copalita, muy cerca del desarrollo turístico Bahías de Huatulco. La primera ocupación de este asentamiento precolonial se remonta al período preclásico medio (600 ane) en ésta época ya se manifestaba la construcción de plataformas ceremoniales y terrazas habitacionales en las lomas colindantes con acantilados al mar. El período clásico es el auge de esta ciudad donde ya se cuenta con un centro ceremonial que contiene un juego de pelota y un edificio principal de más de 20 metros de altura y que a su vez contiene, hasta el momento dos tumbas asociadas a la élite gobernante. <strong>Más Información  ver :  </strong><a href="https://www.inah.gob.mx/zonas/92-zona-arqueologica-bocana-del-rio-copalita "  target="_blank">Sitio web</a></p>  <img src="bocana.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/fotob762f32b95fe7f6bf066264f6dcce395.png">')
.addTo(layer1);
 L.marker([17.0788,-96.7848],{icon: piramide})
  .bindPopup('<h1 style="color:#EABE3F;"> Zona Arqueológica de Atzompa</h1> <p style="text-align: justify; color:Fuchsia;"> Atzompa, del náhuatl, significa ‘En la cumbre del agua’ (atl ‘agua’; tzontle ‘cabellera’, ‘altura’ y cumbre"; y pan ‘en’ o ‘sobre’) Fue uno de los conjuntos monumentales de Monte Albán. Su ocupación va del 650 al 900 d.C. Una peculiaridad de esta zona arqueológica es la existencia de tres canchas para el Juego de Pelota muy próximas entre sí, una de ellas de 45 metros de longitud, lo que la hace ser la más grande de la zona, incluyendo Monte Albán. La cancha cuenta con un nicho en cada una de las esquinas, mismos que pudieron usarse como repositorio de las ofrendas. <strong>Más Información  ver :  </strong><a href="https://www.inah.gob.mx/zonas/141-zona-arqueologica-de-atzompa" target="_blank" >Sitio web</a></p>  <img src="atzompa.jpg" width="100%" height="200"> <img src="https://www.theweather.com/wimages/foto753cb9fc5223efc2e0227ad4abd7b72b.png">')
 .addTo(layer1);
 L.marker([17.27365,-96.8887],{icon: piramide})
   .bindPopup('<h1 style="color:#EABE3F;"> Zona Arqueológicas la Campana</h1><p style="text-align: justify; color:navy;"> En tiempo de la colonial el lugar era conocido como “El potrero de la Campana”, refiriéndose a la forma trapezoidal del montículo principal del antiguo asentamiento antes de que fuera excavado, cuyo diseño era similar a la silueta de una campana. Existen datos que permiten sustentar que el nombre original del lugar fue  “Almoloya”, lugar señalado en las fuentes históricas del siglo XVI como un asentamiento importante cercano al Templo de San Francisco de Almo Almoloyán, que se fundó a principios del mismo siglo con indígenas de la región. <strong> Más információn: </strong><a href="https://www.inah.gob.mx/zonas/53-zona-arqueologica-cerro-de-la-campana " target="_blank">Sitio web</a></p>  <img src="campana.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/fotod3f7bcbb7969b502f4ae0549c8ff4fa5.png">')
 .addTo(layer1);
 L.marker([16.9458,  -96.6875],{icon: piramide})
  .bindPopup('<h1 style="color:#EABE3F;"> Monte Alban</h1><p style="text-align: justify; color:Olive;"> No se conoce el nombre original, algunas propuestas son Danibaan o “Montaña Sagrada”, “Colina del Jaguar”, Danibéeje o “Cerro del Tigre”. Otros dicen que se refiere a las flores blancas de los árboles de cazahuate que cubren el cerro. <strong>Más Información ver:  </strong><a href=" " target="_blank">Sitio web</a></p>  <img src="montealban.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/fotod3f7bcbb7969b502f4ae0549c8ff4fa5.png">')
 .addTo(layer1);

 L.marker([17.5094, -97.2678],{icon: piramide})
 .bindPopup('<h1 style="color:#EABE3F;"> yucuita</h1><p style="text-align: justify; color:Fuchsia;"> La secuencia y acontecimientos prehispánicos sitúan la presencia del hombre en estos valles desde aproximadamente 1400 a.C. es conocida también como horizonte rojo sobre bayo, por la presencia de cerámica decorada como rojo sobre cerámica color bayo. Los implementos comunes eran las manos y metates de piedra para moler maíz, agujas de hueso, navajas y raspadores de pedernal. <strong>Más Información ver </strong><a href="https://www.inah.gob.mx/zonas/93-zona-arqueologica-de-san-juan-yucuita " target="_blank">Sitio web</a></p>  <img src="yucuita.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/foto94b907950435aa88b83f9ce78ac1aa9b.png">')
 .addTo(layer1);
 L.marker([16.9485, -96.7519],{icon: piramide})
 .bindPopup('<h1 style="color:#EABE3F;"> Zaachila</h1><p style="text-align: justify; color:Olive;" > En la Relación Geográfica de Oaxaca se dice que Teozapotlán, que en zapoteco se llama Zaachila, significa “Dios de la Zapoteca”. Fray Juan de Córdova afirma que en la composición intervienen las palabras Zaa, que designa a la primera de las hijas, y chila, nombre del primer día del año ritual (piyé) zapoteco. Wilfrido C. Cruz, hace un análisis de este hecho y concluye que el significado puede ser “lagarto” o “cocodrilo”.  Entre los zapotecos el lagarto era el símbolo de la tierra, por lo que Zaachila significaría “Primera hija de la tierra”. <strong>Más Información</strong><a href="https://www.inah.gob.mx/zonas/91-zona-arqueologica-de-zaachila " target="_blank">Sitio web</a></p>  <img src="zaachila.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/fotobe754f43bc23a369806b4a6d59f93491.png">')
 .addTo(layer1);
 L.marker([17.517, -97.483 ],{icon: piramide})
 .bindPopup('<h1 style="color:#EABE3F;"> Casa de la Cacica</h1><p style="text-align: justify; color:brown;"> Es un palacio que data del año 1560 y sirvió de residencia a la última reina mixteca del señorío de Teposcolula. El inmueble destaca en el panorama histórico de América por ser uno de los pocos edificios en el hemisferio en los que se aprecia una transición clara de las tradiciones indígenas de construcción hacia las técnicas traídas por los europeos. El patio oriente de esta antigua construcción fue rescatado y remodelado. Verás arcos de medio punto y balcones, de evidente ascendencia española, conviviendo con elementos decorativos mixtecos. El palacio hoy alberga una bien equipada biblioteca y centro cultural con un acervo de libros de historia, arte, ciencia y literatura para niños y jóvenes. También se desarrollan talleres en los que podrás ser testigo de cómo los antiguos edificios, incluso los de origen prehispánico; pueden adquirir nueva vida y valor <strong>Más Información  ver :  </strong><a href="https://pueblosmagicos.mexicodesconocido.com.mx/oaxaca/san-pedro-y-san-pablo-teposcolula/atractivo/casa-de-la-cacica " target="_blank">Sitio web</a></p>  <img src="cacica.jpg"  width="100%" height="200"> <img src="https://www.theweather.com/wimages/foto82c6ce600374d40c6a45d26ad4a21b93.png">')

 .addTo(layer1);

var maguey = new L.Icon({
    iconUrl: 'https://www.mlevinco.com/wp-content/uploads/maguey.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});



L.marker([16.8636, -96.3828 ],{icon: maguey})
 .bindPopup('<h1 style="color:Olive;">Santiago Matatlán</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/RQZOQ4g0yXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href="https://www.oaxaca-mio.com/mezcalesdeoaxaca/matatlan/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([16.9537, -96.4758  ], {icon: maguey})
 .bindPopup('<h1 style="color:Olive;">Tlacolula</h1><iframe width="300" height="300" src="https://www.youtube.com/embed/ki_8TgXXURU?start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href=" https://www.oaxaca-mio.com/mezcalesdeoaxaca/tlacolula/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([16.4966, -96.1065   ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">San Carlos Yautepec</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/Uyy35zLpOiM?start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href=" https://www.mezcalreviews.com/filter-by/town/yautepec/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([ 15.90444, -96.89972   ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">Sola de Vega</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/85m1G578cWU?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href=" https://www.mezcalreviews.com/filter-by/town/sola-de-vega/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([ 16.5651, -96.7311  ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">Ejutla de Crespo</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/cR3vNk3pU_A?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href="https://www.oaxaca-mio.com/mezcalesdeoaxaca/ejutladecrespo/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([ 16.7914, -96.675   ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">Ocotlán de Morelos</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/afqueMB-9Ko?start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href="https://www.gob.mx/semarnat/articulos/mezcales-de-ocotlan-tradicion-milenaria-y-exito-de-conservacion-166071 " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([ 16.3288, -96.596  ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">Miahuatlán de Porfirio Díaz</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/t34R5OvUxPY?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href=" http://www.viejoindecente.com/home " target="_blank">Sitio web</a></p>  ')

.addTo(layer2);
L.marker([ 16.1863, -95.1924  ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;">Salina Cruz</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/ALSGaRZZHHk?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p><a href="https://www.oaxacamezcaltours.com/mezcalarticles/archives/07-2018" target="_blank">Sitio web</a></p>  ')
.addTo(layer2);
L.marker([ 16.8667, -96.7833  ],{icon: maguey})
.bindPopup('<h1 style="color:Olive;"> Zimatlán de Alvarez</h1><iframe width="300" height="300" src="https://www.youtube.com/embed/46-s-7REMBw?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p><a href=" https://www.mezcalreviews.com/filter-by/town/zimatlan/ " target="_blank">Sitio web</a></p>  ')
.addTo(layer2);


//https://www.ecoturismoenoaxaca.com/
var dominicos = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/EscOrdendePredicadores2Wikipedia.png/640px-EscOrdendePredicadores2Wikipedia.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

var pueblom = new L.Icon({
    iconUrl: 'https://laextra.mx/wp-content/uploads/2016/07/Pueblos-Ma%CC%81gicos.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});


var ecoturismo = new L.Icon({
    iconUrl: 'https://cdn.pixabay.com/photo/2013/07/12/18/32/shack-153462_960_720.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

//***********************************************************Ruta Dominicana

 L.marker([17.517, -97.333],{icon: dominicos})
 .bindPopup('<h1 style="color:	#56070C;"> Santo Domingo Yanhuitlán</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/XHoqaeTS8eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  ')
 .addTo(layer3);
  
 L.marker([17.510556, -97.488333],{icon: dominicos})
  .bindPopup('<h1 style="color:	#56070C;" > San Pedro y San Pablo Teposcolula</h1>  <iframe width="300" height="300" src="https://www.youtube.com/embed/riBUtxwcjUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ')
 .addTo(layer3);
 
 L.marker([17.7224, -97.3214 ],{icon: dominicos})
  .bindPopup('<h1 style="color:	#56070C;">San Juan Bautista Coixtlahuaca</h1> <iframe width="300" height="300" src="https://www.youtube.com/embed/Ct7o6c6wDGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ')
 .addTo(layer3);
 
 
 
//Pueblos Mágicos

L.marker([17.3, -96.45],{icon: pueblom})
.bindPopup('<h1 style="color:purple;">Capulálpam de Méndez</h1>  <iframe height="450" src="https://pueblosmagicos.mexicodesconocido.com.mx/oaxaca/capulalpam" ></iframe>')
.addTo(layer4);
L.marker([18.1315 , -96.8409 ],{icon: pueblom})
.bindPopup('<h1 style="color:purple;">Huautla de Jiménez</h1>  <iframe height="450" src="https://pueblosmagicos.mexicodesconocido.com.mx/oaxaca/huautla-de-jimenez" ></iframe>')
.addTo(layer4);
L.marker([15.667500, -96.553611],{icon: pueblom})
.bindPopup('<h1 style="color:purple;">Mazunte</h1> <iframe height="450" src="https://pueblosmagicos.mexicodesconocido.com.mx/oaxaca/mazunte" ></iframe>')
.addTo(layer4);
L.marker([16.9208, -96.3617],{icon: pueblom})
.bindPopup('<h1 style="color:purple;">San Pablo Villa de Mitla</h1>  <iframe height="450" src="https://www.mexicodesconocido.com.mx/san-pablo-villa-de-mitla-oaxaca-el-pueblo-magico-de-los-muertos.html" ></iframe>')
.addTo(layer4);
L.marker([17.510556, -97.488333],{icon: pueblom})
.bindPopup('<h1 style="color:purple;">San Pedro y San Pablo Teposcolula</h1>  <iframe height="450" src="https://www.mexicodesconocido.com.mx/san-pablo-villa-de-mitla-oaxaca-el-pueblo-magico-de-los-muertos.html" ></iframe>') 
.addTo(layer4);

L.marker([16.8765,-97.2381],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">San Mateo Yucutindó</h1><p style="text-align: justify; color:green;"> Benito Juárez es una comunidad acunada en uno de los puntos más altos de la geografía estatal. Poseedora de enormes extensiones de bosque, principalmente de pino encino, en su territorio hallarás sitios de gran belleza, flora y fauna diversa, y sobre todo, diversión y aventura, en un entorno natural incomparable complementado con la cálida hospitalidad de los habitantes </p> <p><a href=" https://www.ecoturismoenoaxaca.com/benitojuarez.html " target="_blank">Sitio web</a></p>  <img src="benitoj.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.0710184,-96.7578508],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Campamento del Monte</h1><p style="text-align: justify; color:green;">	Caminata en senderos del campamento (tiempo aprox. 1 hora)</p> <p><a href=" https://www.ecoturismoenoaxaca.com/campamentodelmonte.html" target="_blank">Sitio web</a></p>  <img src="monte.jpg"  width="200" height="200">')
.addTo(layer5);
L.marker([17.1188888,-96.4525 ],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Cuajimoloya</h1><p style="text-align: justify; color:green;"> San Antonio Cuajimoloyas es una localidad de origen zapoteco ubicada a 1:20 horas (56 Km.) de la ciudad de Oaxaca. Perteneciente a la Organización de Pueblos Mancomunados de la Sierra Juárez de Oaxaca, cuenta en su territorio con bellísimos parajes y majestuosos escenarios y sitios naturales, que hacen de éste un sitio ideal para realizar recorridos a pie o en bicicleta de montaña, disfrutando espectaculares paisajes y observando una numerosa variedad de flora y fauna. </p> <p><a href="https://www.ecoturismoenoaxaca.com/cuajimoloyas.html " target="_blank">Sitio web</a></p>  <img src="cuajimiloya.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.3304,-96.4883],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Ecoturixtlan</h1><p style="text-align: justify; color:green;"> En el servicio de hospedaje recomendamos se realice previa reservación proporcionado su datos correspondientes al teléfono 01 (951) 55 360 75, quedando después de la reservación de 12 a 24 horas hábiles para realizar un deposito del 50% y hacer válido el servicio. </p> <p><a href=" https://www.ecoturismoenoaxaca.com/ecoturixtlan.html" target="_blank">Sitio web</a></p>  <img src="ecotu.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.2679,-96.4721],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Santa Catarina Lachatao</h1><p style="text-align: justify; color:green;"> Santa Catarina Lachatao es una comunidad situada aproximadamente a 2,100 metros sobre el nivel del mar, que conserva hasta nuestros días una agradable fisonomía provinciana, con calles empedradas y casas con muros de adobe y techo de teja, que mantienen los rasgos de la arquitectura tradicional de la región, en un entorno de tranquilidad y bucólica belleza </p> <p><a href="https://www.ecoturismoenoaxaca.com/lachatao.html " target="_blank">Sitio web</a></p>  <img src="lachatao.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([16.2077,-96.3382],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">La Nevería</h1><p style="text-align: justify; color:green;"> Debe su nombre a los primeros pobladores que se asentaron en el lugar donde hoy se encuentra la comunidad, cuya principal actividad económica era la elaboración y comercialización de hielo, lo cual era posible debido a las bajas temperaturas que se presentaban en la zona a principios del siglo XX, principalmente en los meses de noviembre a febrero; pero que actualmente debido a los incrementos de temperatura esto ya no es posible. </p> <p><a href="https://www.ecoturismoenoaxaca.com/laneveria.html " target="_blank">Sitio web</a></p>  <img src="neveria.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.1874,-96.5143],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Latuvi</h1> <p><a href="https://www.ecoturismoenoaxaca.com/latuvi.html " target="_blank">Sitio web</a></p>  <img src="latuvi.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.7392,-96.5586 ],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Santa Cruz Tepetotutla</h1><p style="text-align: justify; color:green;"> Cómodos dormitorio y baños. Una gastronómia diseñada para sorprender el paladar con recetas tradicionales e ingredietes de la región. </p> <p><a href="https://www.ecoturismoenoaxaca.com/santacruztepetotutla.html" target="_blank">Sitio web</a></p>  <img src="tepe.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.4478,-96.5041],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Llano de las Flores</h1><p style="text-align: justify; color:green;"> Turismo Comunitario "Llano de las Flores San Juan Bautista Atepec, Ixtlán, Oaxaca </p> <p><a href="https://www.ecoturismoenoaxaca.com/llanodelasflores.html " target="_blank">Sitio web</a></p>  <img src="llano.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.3061,-96.4461],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Capulálpam de Méndez</h1><p style="text-align: justify; color:green;"> Somos una comunidad que conserva su calidez provinciana; contamos con una gran belleza arquitectónica tradicional y una enorme riqueza natural. Somos orgullosos guardianes de nuestras raíces y costumbres, y nos caracteriza nuestra hospitalidad. Actualmente somos una empresa de ecoturismo comunitario, el cual presenta avances significativos, como un criadero de truchas y el centro recreativo "Los Molinos", que ofrece restaurante, juegos infantiles, renta de bicicletas, caballos, tirolesa, cabañas y salón de usos múltiples. Te invitamos a ser parte de nosotros. </p> <p><a href="https://www.ecoturismoenoaxaca.com/capulalpamdemendez.html " target="_blank">Sitio web</a></p>  <img src="capu.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.2633,-96.5878],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">San Pedro Nexicho</h1> <p><a href="https://www.ecoturismoenoaxaca.com/sanpedronexicho.html " target="_blank">Sitio web</a></p>  <img src="ne.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.2439,-96.7114],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Arroyo Guacamaya</h1><p style="text-align: justify; color:green;">  Esta comunidad serrana, ubicada a 2,720 msmn, ofrece a sus visitantes la oportunidad de visitar sitios naturales de espectacular belleza, y realizar recorridos guiados de caminata o cilcismo de montaña, a través de bosques de pino, encino y oyamel. </p> <p><a href="https://www.ecoturismoenoaxaca.com/arroyoguacamaya.html " target="_blank">Sitio web</a></p>  <img src="guacamaya.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);

L.marker([17.5291,-96.5397],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> San Pablo Macuiltianguis</h1><p style="text-align: justify; color:green;">  Tours de caminata (La Playa, Pinturas rupestres y Bosque de montaña), Renta de bicicletas,Mini Biblioteca,Clases de zapoteco,Hora de juegos de mesa grupales,Juegos de mesa disponibles para jugar al aire libre,Cine al aire libre los fines de semana por las noches Cancha deportiva Balones de fútbol, básquetbol, voléibol disponibles Fogatas  </p> <p><a href="https://www.ecoturismoenoaxaca.com/sanpablomacuiltianguis.html " target="_blank">Sitio web</a></p>  <img src="sanpablo.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.3956,-96.3266],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> Santo Domingo Cacalotepec</h1> <img src="domingo.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.6472,-97.1361],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> Santiago Apoala</h1><p style="text-align: justify; color:green;"> Santiago Apoala (“Donde reparten el agua” en misteco) debe su nombre a la abundancia que en su territorio hay del vital líquido. Apoala ofrece al visitante bellezas naturales sin igual: peñas, cañones, cascadas y valles, cuevas con amplias galerías y miradores naturales. Debido a la singular orografía de la región de la Mixteca , el ciclismo de montaña representa una verdadera aventura, recorriendo caminos y veredas en medio de hermosos valles. </p> <p><a href="https://www.oaxaca-mio.com/ecoturismo/santiagoapoala.htm " target="_blank">Sitio web</a></p>  <img src="apoala.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.1014,-97.5431],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">San Pedro Molinos</h1><p style="text-align: justify; color:green;"> La cabecera municipal es San Pedro Molinos, la localidad de mayor importancia es la agencia municipal de Buena Vista Molinos, su actividad preponderante es la agricultura. El número de habitantes aproximado es de 722 </p> <p><a href="https://www.los-municipios.mx/municipio-san-pedro-molinos.html " target="_blank">Sitio web</a></p>  <img src="molinos.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.6848,-98.006],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> Santo Domingo Tonalá</h1><p style="text-align: justify; color:green;"> El boquerón de Santo Domingo Tonalá es un cañón natural formado por una afluente del río Salado, una agradable sorpresa que la Mixteca nos ofrece. </p> <p><a href="https://www.viveoaxaca.org/2018/03/Boqueron.html" target="_blank">Sitio web</a></p>  <img src="tonala.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([17.7321,-97.8149 ],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> Presa de Yosocuta</h1><p style="text-align: justify; color:green;"> Se encuentra ubicado en carretera a Juxtlahuaca "km 11" a 20 min aprox. de la ciudad, fue construida durante el mandato de Lázaro Cardenas.En 1976 se creo aquí la unidad de producción de crías de las especies: lobina negra, tilapia, mojarra y carpa de Israel. Anualmente realizan torneos de pesca, en los meses de Septiembre y Octubre, organizados por la Sociedad Cooperativa de Producción Pesquera y Prestación de Servicios Turísticos. Esta cooperativa posee lanchas que se encuentran a disposición del visitante que desee realizar recorridos por el tranquilo embalse de la presa. </p> <p><a href="https://www.oaxaca-mio.com/huajuapan/ecoturismo.htm " target="_blank">Sitio web</a></p>  <img src="yosocuta.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([16.169,-96.503],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;"> San José del Pacífico</h1> <p>San Jose del Pacifico Mexico Oaxaca Cabañas con vista Temazcales, Artesanía Tirolesa y mucho más... Carretera Federal km 131 San José del Pacífico </p>  <img src="sanjose.jpg" width="300" height="300"  style="border-radius: 50%;"> <p><a href="https://sanjosepacifico.com/ " target="_blank">Sitio web</a>')
.addTo(layer5);
L.marker([15.9689,-96.1828],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Cuevas de Yuviaga</h1> <p><a href=" https://mag21.mx/mexicodesconocido/camino-copalita-en-oaxaca/" target="_blank">Sitio web</a></p>  <img src="cuevas.jpg"  width="300" height="300"  style="   border-radius: 50%;">')
.addTo(layer5);
L.marker([16.7431,-95.4758],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Chayotepec</h1><p style="text-align: justify; color:green;"> En la región del Istmo de Tehuantepec, organizados hoy a través del Grupo de ecoturismo comunitario LLAGERDA S.S.S. (Tronco de Ocote), ofrecemos el servicio de hospedaje en cómodas cabañas. El visitante puede apreciar un paisaje de bosque de pino, de ciprés, selva lluviosa de montaña, bosque mesófilo; y disfrutar de un clima maravilloso. </p> <p><a href="https://ecoturistmo.wixsite.com/chayotepec/quienes-somos " target="_blank">Sitio web</a></p>  <img src="chayotepec.jpg" width="300" height="300"  style="border-radius: 50%;">  ')
.addTo(layer5);
L.marker([15.6719,-96.5719],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Ventanilla</h1><p style="text-align: justify; color:green;"> A unos 15 minutos de Mazunte, tomando un camino de terracería en el que constantemente se atraviesan gallinas, cerdos, perros y patos, se llega a La Ventanilla, una comunidad integrada por unas 25 familias totalmente adoctrinadas en su misión ecológica. No es en vano, pues varias veces han intentado arrebatarles territorios para hacer complejos turísticos. A pesar de que la playa es sorprendentemente virgen, de que la arena es casi negra por la abundancia de hierro y de que es factible rentar cabañas para pasar la noche, el atractivo del lugar radica más bien en las lagunas de manglares en las que se pueden observar iguanas, tortugas, garzas reales, garzas tigre, cormoranes, martines pescadores, patos cuello de culebra y otras muchas especies. </p> <p><a href="https://travesiasdigital.com/destinos/la-ventanilla-en-oaxaca " target="_blank" >Sitio web</a></p>  <img src="ventanilla.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([15.8222,-97.0217],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Barra de Navidad</h1><p style="text-align: justify; color:green;"> La pequeña comunidad de La Barra de Navidad es parte del Municipio de Colotepec en el estado mexicano de Oaxaca. A nivel local la comunidad es conocida como La Barra. Cuando sientas la necesidad de disminuir la velocidad y oler las rosas, este es un lugar para visitar. Puedes nadar en el río, visitar el santuario de animales y practicar senderismo en las carreteras rurales que bordean el río, las lagunas y el Océano Pacífico. </p> <p><a href="https://www.mexicodestinos.com/blog/ecoturismo-barra-de-navidad-oaxaca/ " target="_blank">Sitio web</a></p>  <img src="barra.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([15.9411,-97.1855],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Laguna Manialtepe</h1><p style="text-align: justify; color:green;"> La Laguna de Manialtepec se encuentra a 16 kilómetros de Puerto Escondido; es un sitio de excepcional belleza, rodeado de exuberante vegetación de manglar. Su nombre se deriva de los vocablos náhuatl manine (animal que se arrastra) y tepetl (lugar); lo cual se interpreta como "lugar de lagartos".Esta laguna, de aproximadamente 6 kilómetros de longitud, cuenta con pequeñas áreas de playa donde se pueden pescar especies de mojarra, robalo o bagre. </p> <p><a href="https://www.oaxaca-mio.com/puertoescondido/lagunademanialtepec.htm " target="_blank">Sitio web</a></p>  <img src="laguna.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([15.8339,-96.3223],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Bahías de Huatulco</h1><p style="text-align: justify; color:green;"> Huatulco es un municipio ubicado en la costa oaxaqueña del Océano Pacífico y que, en las últimas décadas, se ha consolidado como un gran destino de playa, preferido de turistas nacionales y extranjeros. Está conformado por nueve bahías, con 36 playas en total. Cada una de ellas tiene su magia y sus atractivos, especialmente para los amantes del mar, las aventuras y los deportes acuáticos. Aquí te cuento lo que tienes que saber para planear tu viaje a esta hermosa parte del país, las Bahías de Huatulco. </p> <p><a href="https://bahiasdehuatulco.org/ " target="_blank" >Sitio web</a></p>  <img src="bahias.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([16.8655,-96.276],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">Hierve el Agua</h1><p style="text-align: justify; color:green;"> Hierve el Agua es considerado uno de los destinos turísticos más emblemáticos de Oaxaca, ofreciendo un sistema de cascadas petrificadas y pozas de aguas termales. Sin embargo, se acaba de dar a conocer que esta área natural protegida, no permitirá más la entrada de visitantes que vayan de paseo. </p> <p><a href="https://www.forbes.com.mx/forbes-life/viaje-hierve-el-agua-cierra-definitivamente-oaxaca/" target="_blank">Sitio web</a></p>  <img src="hierve.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);
L.marker([16.512778,-97.202500],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">El carrizal</h1><p style="text-align: justify; color:green;"> El Carrizal, una pequeña y tranquila comunidad ubicada en los Valles Centrales de Oaxaca, cuyas bellezas naturales la hacen un rincón ideal para el ecoturismo, te ofrece rutas de caminata o bicicleta de montaña, recorriendo parajes en medio de milenarios bosques de pino y encino. Si te gusta la pesca y tienes equipo, puedes pescar una trucha arcoiris en los Parajes La Nevería o La Ciénega , así como en La Granja. Conoce la elaboración del pan integral de trigo, o simplemente descansa, disfrutando la apacible atmosfera de lugar. </p> <p><a href="https://www.oaxaca-mio.com/ecoturismo/elcarrizal.htm" target="_blank">Sitio web</a></p>  <img src="carrizal.jpg"  width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);

L.marker([17.1926, -96.7637],{icon: ecoturismo})
.bindPopup('<h1 style="color:green;">San Agustín Etla</h1><p style="text-align: justify; color:green;"> Localizado en el estado de Oaxaca, San Agustín Etla es un municipio cuya superficie, población, altitud y otra información importante se proporciona a continuación. Para todos sus procedimientos administrativos, puede dirigirse al ayuntamiento de San Agustín Etla en la dirección y horarios indicados en esta página, o contactar a la recepción del ayuntamiento por teléfono o por correo electrónico según su preferencia y datos disponibles. Actualizar los datos </p> <p><a href="https://www.los-municipios.mx/municipio-san-agustin-etla.html" target="_blank">Sitio web</a></p>  <img src="etla.jpg" width="300" height="300"  style="border-radius: 50%;">')
.addTo(layer5);


 var cdbAttr = 'Map data ';
 var cdbUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
 var capabase = L.tileLayer(cdbUrl, {
   attribution: cdbAttr
 });

 var map = L.map('map', {
   center: [17.06542, -96.72365],
   zoom: 9,
   layers: [capabase, layer1]
 });

 var baseLayer = {
   "Mapa base": capabase
 };

 var overlays = {
   "Zonas Arqueológicas": layer1,
   "Ruta de Mezcal": layer2,
   "Ruta Dominicana": layer3,
   "Pueblos Mágicos": layer4,
   "Ecoturismo": layer5

 };
/// Agregar WMS
 L.control.layers(capasBase, overlayMaps).addTo(map);
  var legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div','info legend');
        div.innerHTML += '<img alt="leyenda" src="https://www.gits.igg.unam.mx/geoservergits/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ISTAR%3Ared_carretera_basica_2019" width="300" height="120" />';
        return div;
    };
    legend.addTo(map); 
 
 
 lcontrol = L.control.layers(baseLayer, overlays, {
   collapsed: false,
 }).addTo(map);
