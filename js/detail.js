let getCard = {
  name: "Laptop Pro X",
  price: "$1200",
  description: "16GB RAM, 512GB SSD",
  image: ["https://images.pexels.com/photos/18105/pexels-photo.jpg","https://images.pexels.com/photos/18105/pexels-photo.jpg","https://images.pexels.com/photos/18105/pexels-photo.jpg"],
};

function displayProduct(){
    document.getElementById("product-title").textContent = getCard.name;
    document.getElementById("product-price").textContent = getCard.price;
    document.getElementById("product-description").textContent = getCard.description;
    document.getElementById("mainImage").src = getCard.image[0];

    for (let i = 1; i < getCard.image.length; i++) {
        document.getElementById("img1").src = getCard.image[i];
        document.getElementById("img2").src = getCard.image[i];
        document.getElementById("img3").src = getCard.image[i];
    }
}

window.onload = displayProduct;

// slide
let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage(index) {
  thumbnails.forEach((thumb) => thumb.classList.remove("thumbnail-active"));
  thumbnails[index].classList.add("thumbnail-active");

  mainImage.classList.add("fade-out");
  setTimeout(() => {
    mainImage.src = thumbnails[index].src;
    mainImage.classList.remove("fade-out");
  }, 300);

  currentIndex = index;
}

prevBtn.onclick = () => {
  const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage(newIndex);
};

nextBtn.onclick = () => {
  const newIndex = (currentIndex + 1) % thumbnails.length;
  updateImage(newIndex);
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = () => updateImage(index);
});

thumbnails[0].classList.add("thumbnail-active");
