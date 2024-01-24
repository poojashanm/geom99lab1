function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 13,
      center: { lat: 13.0983056825, lng: 80.27560200 },
      mapTypeId: "terrain",
    });
    const lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: "#393",
      };
      // Create the polyline and add the symbol to it via the 'icons' property.
      const line = new google.maps.Polyline({
        path: [
          { lat: 12.892845677230484, lng: 80.25356591855626 },
          { lat: 12.975107053852348, lng: 80.26651412745153 },
          { lat: 13.050370949901755, lng: 80.28237134709286 },
          { lat: 13.131316772725338, lng: 80.30329257745409 },
          { lat: 13.171142451293592, lng: 80.31161815439889 },
        ],
        icons: [
          {
            icon: lineSymbol,
            offset: "100%",
          },
        ],
        map: map,
      });
    
      animateCircle(line);
    }
    
    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    function animateCircle(line) {
      let count = 0;
    
      window.setInterval(() => {
        count = (count + 1) % 200;
    
        const icons = line.get("icons");
    
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
      }, 20);
    }
window.initMap = initMap;
