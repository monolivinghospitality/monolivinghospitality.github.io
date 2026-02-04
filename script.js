const params = new URLSearchParams(window.location.search);
const slug = params.get("villa");

if (!slug) {
  document.body.innerHTML = "Villa not found";
  throw new Error("No villa slug provided");
}

const SHEET_ID = "1ozZaZQxbpKNZVHXvYOOmptmGNEg0Fqbe0nxLqjP7YqY";
const SHEET_NAME = "Sheet1";

const DATA_URL = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`;

fetch(DATA_URL)
  .then(res => res.json())
  .then(data => {
    const villa = data.find(item => item.slug === slug);

    if (!villa) {
      document.body.innerHTML = "Villa not found";
      return;
    }

    // Assets
    document.getElementById("logo").src =
      `../assets/logos/${slug}.png`;

    document.getElementById("banner").style.backgroundImage =
      `url('../assets/banners/${slug}.jpg')`;

    // Text
    document.getElementById("villa-name").innerText = villa.villa_name;
    document.getElementById("subtitle").innerText = villa.subtitle;

    // Buttons
    const buttons = document.getElementById("buttons");
    buttons.innerHTML = "";

    createButton("Instagram", villa.instagram, "instagram");
    createButton("WhatsApp Booking", villa.whatsapp, "message-circle");
    createButton("Google Maps", villa.maps, "map-pin");
    createButton("Booklet", villa.booklet, "book-open");


    function createButton(label, link, icon) {
      if (!link) return;
    
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.className = "button";
    
      a.innerHTML = `
        <span class="icon" data-lucide="${icon}"></span>
        <span class="label">${label}</span>
      `;
    
      buttons.appendChild(a);
      lucide.createIcons();
    }

  });

document.getElementById("year").innerText = new Date().getFullYear();

