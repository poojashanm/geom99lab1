      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), 
          {
            zoom: 12,
            center: { lat: 13.050370949901755, lng: 80.28237134709286 },
            mapTypeId: "satellite",
          });
        const mark = [
            [{ lat: 12.892845677230484, lng: 80.25356591855626 }, "ECR Beach"],
            [{ lat: 12.975107053852348, lng: 80.26651412745153 }, "Thiruvalluvar Nagar Beach"],
            [{ lat: 13.050370949901755, lng: 80.28237134709286 }, "Marina Beach"],
            [{ lat: 13.131316772725338, lng: 80.30329257745409 }, "N4 Beach"],
            [{ lat: 13.171142451293592, lng: 80.31161815439889 }, "Thiruvottiyur Beach"],
        ];
        // Create an info window to share between markers.
        const infoWindow = new google.maps.InfoWindow();

        // Create the markers.
        mark.forEach(([position, title], i) => {
            const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
            });

            // Add a click listener for each marker, and set up the info window.
            marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
            });
        });
        const coordinates = [
              { lat: 12.892845677230484, lng: 80.25356591855626 },
              { lat: 12.975107053852348, lng: 80.26651412745153 },
              { lat: 13.050370949901755, lng: 80.28237134709286 },
              { lat: 13.131316772725338, lng: 80.30329257745409 },
              { lat: 13.171142451293592, lng: 80.31161815439889 },
            ];
          const lineSymbol = {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 5,
              strokeColor: "#d6fe83",
            };

            // Create the polyline and add the symbol to it via the 'icons' property.
            const line = new google.maps.Polyline({
              path: coordinates,
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
              count = (count + 0.4) % 200;
          
              const icons = line.get("icons");
          
              icons[0].offset = count / 2 + "%";
              line.set("icons", icons);
            }, 25);
          }


      window.initMap = initMap;
