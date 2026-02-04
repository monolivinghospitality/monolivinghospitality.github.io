// Ambil parameter ?villa=villa1
const params = new URLSearchParams(window.location.search);
const slug = params.get("villa");

// Default fallback
const villaSlug = slug || "villa1";

// Set logo & banner dari GitHub assets
document.getElementById("logo").src =
  `../assets/logos/${villaSlug}.png`;

document.getElementById("banner").style.backgroundImage =
  `url('../assets/banners/${villaSlug}.jpg')`;

// Dummy content (sementara)
document.getElementById("villa-name").innerText = "Villa Preview";
document.getElementById("subtitle").innerText =
  "Luxury minimalist stay by Mono Living";
