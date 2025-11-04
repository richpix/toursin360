const escenasPortafolio = {
  


  "esce1": {
    "title": "Comedor con terraza", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/cayley_interior_4k.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 250,  
          "pitch": -5,
          "hfov": 110, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
  
     
    ]
        },
  "esce2": {
    "title": "Photo studio loft", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",
    "preload": true,
           "yaw": 280,  
          "pitch": -5,
          "hfov": 110, //zoom--- max 120
    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/photo_studio_loft_hall_4k.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 120,  
          "pitch": -5,
          "hfov": 100, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
      
        
     
    ]
        },
        "esce3": {
    "title": "Casa vacia", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/small_empty_house_8k.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": -120,  
          "pitch": -5,
          "hfov": 100, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
      
        
     
    ]
        },
        "esce4": {
    "title": "Photo studio", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/christmas_photo_studio_07_4k-1.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 120,  
          "pitch": -5,
          "hfov": 100, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
      
        
     
    ]
        },
        "esce5": {
    "title": "Loft", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/brown_photostudio_02_8k.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 320,  
          "pitch": -5,
          "hfov": 100, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
      
        
     
    ]
        },
        "esce6": {
    "title": "Photo studio", //titulo de escena que aparecera en elñ menu escenas
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/11/brown_photostudio_01_4k.webp",
   "preload": true, // 🔹 Esto activa preload para esta escena
   // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 220,  
          "pitch": -5,
          "hfov": 100, //zoom--- max 120
          //-------------------------------
    "hotSpots": [
       
      
        
     
    ]
        }
 
  // ... todas las demás escenas
};




// 🔹 Inicializar el visor
// 🔹 Ya tienes `let viewer;` declarado globalmente
 viewer= crearVisor('tour', escenasPortafolio, 'esce1');
// 🔹 Inicializar botones glass
 inicializarBotonesGlass(viewer);
// 🔹 Usar después de crear el visor
aplicarZoomMovil(viewer, 70); // Ajusta 70 al zoom que quieras