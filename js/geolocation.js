if (navigator.geolocation) {
    const desiredLatitude = -23.568854; // Latitude da Rua Rodeio, 277, Vila Aricanduva, São Paulo/SP
    const desiredLongitude = -46.481421; // Longitude da Rua Rodeio, 277, Vila Aricanduva, São Paulo/SP
    showLocation({ coords: { latitude: desiredLatitude, longitude: desiredLongitude } });
  }
  
  function showLocation(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
  
    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
    window.open(url, 'map');
  }
  