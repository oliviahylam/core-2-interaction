// Initialize the map centered on NYC
var map = L.map('matchaMap').setView([40.7128, -74.0060], 12);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add sample matcha cafe pins
L.marker([40.7295, -73.9965]).addTo(map).bindPopup("<b>Cha Cha Matcha</b><br>SoHo");
L.marker([40.7229, -73.9872]).addTo(map).bindPopup("Matchaful, Nolita");
L.marker([40.7346, -73.9934]).addTo(map).bindPopup("Think Coffee – Matcha Available");

window.addEventListener('load', () => {
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const track = document.querySelector('.carousel-track');

  if (!prevBtn || !nextBtn || !track) {
    console.error('Carousel elements not found.');
    return;
  }

  // Calculate the scroll amount (one box width plus the gap)
  const boxWidth = document.querySelector('.carousel-box').offsetWidth;
  const gap = 20; // as defined in your CSS
  const scrollAmount = boxWidth + gap;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
