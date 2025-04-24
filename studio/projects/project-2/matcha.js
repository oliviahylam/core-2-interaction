// ---------- Preference Submit Logic ----------
document.getElementById('prefSubmit').addEventListener('click', () => {
    // Parse slider and select inputs (assumed values on scale 1–5)
    const umami = parseInt(document.querySelector('#umami').value, 10);
    const sweetness = parseInt(document.querySelector('#sweetness').value, 10);
    const astringency = parseInt(document.querySelector('#astringency').value, 10);
    const vegetal = parseInt(document.querySelector('#vegetal').value, 10);
    const aromatic = parseInt(document.querySelector('#aromatic').value, 10);
    const grade = document.querySelector('#grade').value;
    const price = document.querySelector('input[name="price"]:checked')?.value;
    
    // Check for matching preferences and display the corresponding popup:
    if (
      umami === 5 &&
      sweetness === 3 &&
      astringency === 2 &&
      vegetal === 3 &&
      aromatic === 3 &&
      grade === 'ceremonial' &&
      price === 'worth'
    ) {
      // Ippodo NYC (ideal branch)
      showResultPopup("Ippodo", "https://ippodotea.com", "Ippodo's highest-ranking matcha, celebrated for its fresh umami and silky character. Initially exclusive to Ippodo New York, this blend is elegant with a lively, crisp character and a long, splendid finish.");
    }
    else if (
      umami === 4 &&
      sweetness === 3 &&
      astringency === 1 &&
      vegetal === 4 &&
      aromatic === 4 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // Kettl
      showResultPopup("Kettl", "https://kettl.co", "Known for high-quality Japanese teas, particularly matcha sourced from Fukuoka Prefecture. Offers a smooth texture with rich umami and delicate aroma.");
    }
    else if (
      umami === 3 &&
      sweetness === 3 &&
      astringency === 3 &&
      vegetal === 3 &&
      aromatic === 5 &&
      grade === 'ceremonial' &&
      price === 'splurge'
    ) {
      // Sorate
      showResultPopup("Sorate", "https://sorate.co", "Located in Soho, offers a serene environment reminiscent of Japan. Provides a variety of matcha options, emphasizing quality and authenticity.");
    }
    else if (
      umami === 3 &&
      sweetness === 5 &&
      astringency === 1 &&
      vegetal === 3 &&
      aromatic === 5 &&
      grade === 'ceremonial' &&
      price === 'splurge'
    ) {
      // Nippon Cha
      showResultPopup("Nippon Cha", "https://nipponcha.com", "Situated in Williamsburg, praised for its matcha beverages and an array of matcha-flavored treats like ice cream and tiramisu.");
    }
    else if (
      umami === 3 &&
      sweetness === 3 &&
      astringency === 3 &&
      vegetal === 3 &&
      aromatic === 3 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // Kijitora
      window.location.href = "kijitora.html";
}
    else if (
      umami === 3 &&
      sweetness === 4 &&
      astringency === 3 &&
      vegetal === 3 &&
      aromatic === 3 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // Isshiki
      showResultPopup("Isshiki", "#", "Known for premium Japanese matcha, offering frothy lattes and matcha-infused desserts. Some reviews mention variability in matcha latte quality.");
    }
    else if (
      // Duplicate condition (adjust as needed or remove duplicate)
      umami === 3 &&
      sweetness === 3 &&
      astringency === 3 &&
      vegetal === 3 &&
      aromatic === 3 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // PPL
      showResultPopup("PPL", "#", "Located in Williamsburg, recognized for its excellent matcha offerings.");
    }
    else if (
      umami === 5 &&
      sweetness === 5 &&
      astringency === 1 &&
      vegetal === 5 &&
      aromatic === 5 &&
      grade === 'ceremonial' &&
      price === 'worth'
    ) {
      // 12 Matcha
      showResultPopup("12 Matcha", "#", "A new two-story café offering a wide array of matcha variations, including drinks, pastries, and soft serve. Sources tea from renowned farms.");
    }
    else if (
      umami === 5 &&
      sweetness === 3 &&
      astringency === 1 &&
      vegetal === 5 &&
      aromatic === 5 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // Setsugekka
      showResultPopup("Setsugekka", "#", "Offers traditional Japanese tea ceremonies and high-quality matcha. Known for its strong, full-bodied matcha without bitterness.");
    }
    else if (
      umami === 3 &&
      sweetness === 3 &&
      astringency === 3 &&
      vegetal === 3 &&
      aromatic === 5 &&
      grade === 'ceremonial' &&
      price === 'medium'
    ) {
      // La Cabra
      showResultPopup("La Cabra", "#", "Known for its coffee, but also offers matcha with limited flavor details.");
    }
    else {
      alert("No matching matcha found. Try adjusting your preferences!");
    }
  });
  
  // Function to display the result popup with café information
  function showResultPopup(name, link, notes) {
    const cupText = document.getElementById('cupText');
    cupText.innerHTML = `
      <h2>${name}</h2>
      <p><strong>About:</strong> ${notes}</p>
      <p><a href="${link}" target="_blank">Visit Site →</a></p>
    `;
    document.getElementById('resultPopup').style.display = 'flex';
  }
  
  // Function to close the result popup when its close button is clicked
  document.getElementById('closeResultPopup').addEventListener('click', () => {
    document.getElementById('resultPopup').style.display = 'none';
  });