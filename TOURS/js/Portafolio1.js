const escenasPortafolio = {
  
   "esce1": {
    "title": "Jardin del arte", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172055_00_007.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 250,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
      //yaw, pitch, destino, texto
      //Yaw horizontal, pitch vertical 
            crearHotspot(-160, 0, "esce2", ),
            crearHotspot(-90, -10, "esce3", )
     
    ]
        },
        
   "esce2": {
    "title": "Jardin del arte 2", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172120_00_008.jpg",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 250,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
        crearHotspot(132, 0, "esce1", ),
            crearHotspot(44, -5, "esce3", )
     
    ]
        },
        
   "esce3": {
    "title": "Jardin del arte 3", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172325_00_009.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -160,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
            crearHotspot(22, -5, "esce1", ),
            crearHotspot(125,-5,"esce4"),
            crearHotspot(-155,-5,"esce5")
    ]
        },
        
   "esce4": {
    "title": "Jardin del arte 4", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172455_00_010.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -19,  
          "pitch": -5,
          "hfov": 110, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       crearHotspot(174,-5,"esce3")
  
    
    ]
        },
        
   "esce5": {
    "title": "Jardin del arte 5", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172705_00_011.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -83,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(98, -5, "esce3", ),
            crearHotspot(-80,-5,"esce6"),
           
     
    ]
        },
        "esce6": {
    "title": "Jardin del arte 6", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172816_00_012.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 7,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(190, -5, "esce5", ),
            crearHotspot(10,-5,"esce7"),
           
     
    ]
        },
        "esce7": {
    "title": "Jardin del arte 7", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_172918_00_013.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 0,  
          "pitch": -5,
        
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(180, -5, "esce6", ),
            crearHotspot(0,-5,"esce8"),
           
     
    ]
        },
        
        "esce8": {
    "title": "Jardin del arte 8", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_173013_00_014.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 1,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(180, -5, "esce7", ),
            crearHotspot(10,-5,"esce9"),
           
     
    ]
        },
        
        "esce9": {
    "title": "Jardin del arte 9", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_173051_00_015.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -44,  
          "pitch": -5,
         
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(160, -3, "esce8", ),
            crearHotspot(-140,-5,"esce10"),
           
     
    ]
        },

        "esce10": {
    "title": "Jardin del arte 10", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "../imagenes/portafolio1/IMG_20251101_173114_00_016.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -62,  
          "pitch": -5,
          
          //-------------------------------
    "hotSpots": [
       
           crearHotspot(-195, -5, "esce9", ),
            
            crearHotspot(-110, -2, "esce8", ),
     
    ]
        }
      
        
  
  // ... todas las demás escenas
};



// 🔹 Inicializar el visor
crearVisor('tour', escenasPortafolio, 'esce1');
// 🔹 Inicializar botones glass
 inicializarBotonesGlass(viewer);
// 🔹 Usar después de crear el visor
aplicarZoomMovil(viewer, 80); // Ajusta 70 al zoom que quieras
