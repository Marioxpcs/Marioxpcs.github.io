var pinInfobox;

/***** map(bing api) *******/
        function GetMap()
        {
            var pushpinInfos = [];
        pushpinInfos[0] = { 'lat': 53.383022, 'lng': -117.1828699, 'title': 'Alpine Ascents International', 'description': '109 W. Mercer St. - Seattle, WA 98119', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[1] = { 'lat': 45.92375, 'lng': 6.86933, 'title': 'Mountain Madness', 'description': 'Chamonix, France', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[2] = { 'lat': -43.5009313296, 'lng': 168.1, 'title': 'Adventure Consultants', 'description': 'Lake Hāwea , New Zealand', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[3] = { 'lat': 53.1, 'lng': -1.4, 'title': 'Jagged Globe', 'description': '45 Mowbray St, Neepsend, Sheffield S3 8EN, UK', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[4] = { 'lat': 45.9189046, 'lng': -120.1343786, 'title': 'International Mountain Guides', 'description': '31111 WA-706, Ashford, WA 98304, USA', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[5] = { 'lat': 55.00125, 'lng': -125.00244, 'title': 'Peak Freaks', 'description': '622 Front St, Nelson, British Columbia, V1L 4B7, Canada', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[6] = { 'lat': 46.75894, 'lng': -122.03162, 'title': 'RMI Expeditions', 'description': '30027 WA-706, Ashford, WA 98304, United States', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        pushpinInfos[7] = { 'lat': 61.21439, 'lng': -149.88505, 'title': 'Seven Summits Club', 'description': '911 W 8th Avenue, Suite 101, Anchorage, AK 99501', 'icon' :'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Azure-icon.png' };
        
        var infoboxLayer = new Microsoft.Maps.EntityCollection();
        var pinLayer = new Microsoft.Maps.EntityCollection();
        var apiKey = "AuCdZdUAe8ca0RMXqS6-pz1cpCojRebQFV7eu-MjVNFmb9_Zhws5K7S3ZP7AksLs";
        var map = new Microsoft.Maps.Map(document.getElementById("map"), { credentials: apiKey });

        // Create the info box for the pushpin
        pinInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
        infoboxLayer.push(pinInfobox);
        var locs = [];
        for (var i = 0 ; i < pushpinInfos.length; i++) {
            locs[i] = new Microsoft.Maps.Location(pushpinInfos[i].lat, pushpinInfos[i].lng);
            var pin = new Microsoft.Maps.Pushpin(locs[i], {icon: pushpinInfos[i].icon, width:'20px', height:'20px'});
            pin.Title = pushpinInfos[i].title;
            pin.Description = pushpinInfos[i].description;
            pinLayer.push(pin); 
            Microsoft.Maps.Events.addHandler(pin, 'mouseover', displayInfobox);
        }
        map.entities.push(pinLayer);
        map.entities.push(infoboxLayer);
        var bestview = Microsoft.Maps.LocationRect.fromLocations(locs);
        map.setView({ center: bestview.center, zoom: 2 });
    }
    function displayInfobox(e) {
        pinInfobox.setOptions({ title: e.target.Title, description: e.target.Description, visible: true, offset: new Microsoft.Maps.Point(0, 25) });
        pinInfobox.setLocation(e.target.getLocation());
    }
    function hideInfobox(e) {
        pinInfobox.setOptions({ visible: false });
        }
 /***** map(bing api) *******/

 