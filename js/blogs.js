function openBlog(id) {
  localStorage.setItem("blogId", id);
  window.location.href = "blog.html";
}

function goBack() {
  window.location.href = "blogs.html";
}

let blogs = {
  1: {
    title: "Famous Figures of Ancient Egypt",
    image: "C:/big project/project/images/ancient people.jpg",
    content: `Ancient Egypt was home to some of the most influential figures in history. 
Among them was Queen Nefertiti, known for her beauty and her role alongside Pharaoh Akhenaten in religious reform. 
Tutankhamun, often called the Boy King, became famous after the discovery of his nearly intact tomb in 1922. 
Ramses II, one of the most powerful pharaohs, ruled for over 60 years and led military campaigns that expanded Egypt’s influence.

These figures played central roles in shaping politics, religion, and culture, leaving a legacy that continues to be studied today.`
  },

  2: {
    title: "Ancient Egyptian Sites",
    image: "C:/big project/project/images/Pyramids.avif",
    content: `Egypt is home to some of the world's most remarkable ancient sites. 
The Pyramids of Giza, built as royal tombs, remain one of the Seven Wonders of the Ancient World. 
The Karnak Temple complex in Luxor is one of the largest religious structures ever constructed, dedicated primarily to the god Amun.

Another important site is the Valley of the Kings, where many pharaohs, including Tutankhamun, were buried. 
These locations provide valuable insight into the engineering skills and religious beliefs of ancient Egyptians.`
  },

  3: {
    title: "Egyptian Heritage",
    image: "C:/big project/project/images/Heritage.jpeg",
    content: `Ancient Egyptian heritage is rich in art, religion, and daily traditions. 
Hieroglyphic writing was used to record important events and religious texts. 
Art often depicted gods, pharaohs, and scenes of daily life, reflecting both spiritual and social values.

Religion played a central role, with beliefs in the afterlife leading to practices such as mummification. 
Objects placed in tombs were intended to assist the deceased in the next world.

This heritage continues to influence modern understanding of civilization and human development.`
  }
};

// Load blog
if (document.getElementById("title")) {
  let id = localStorage.getItem("blogId");
  let blog = blogs[id];

  document.getElementById("title").innerText = blog.title;
  document.getElementById("content").innerText = blog.content;
  document.getElementById("image").src = blog.image;
}

// Filter
let currentFilter = "all";

function setFilter(category, btn) {
  currentFilter = category;

  document.querySelectorAll(".buttons button")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");

  filterBlogs();
}

function filterBlogs() {
  let search = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    let category = card.getAttribute("data-category");

    let show = (currentFilter === "all" || category === currentFilter) && text.includes(search);

    card.style.display = show ? "block" : "none";
  });
}