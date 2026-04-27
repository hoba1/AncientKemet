
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
    image: "./images/ancient people.jpg",
    content: `Ancient Egypt was home to some of the most influential and fascinating figures in all of human history. These individuals were not merely rulers — they were considered living gods, high priests, military commanders, and the pillars of an entire civilization.

Queen Nefertiti, whose name means "the beautiful one has come," was one of the most powerful women to ever reign in Egypt. As the Great Royal Wife of Pharaoh Akhenaten, she played a pivotal role in the religious revolution that attempted to shift Egypt's worship toward a single deity — the sun disk Aten. Her iconic bust, discovered in 1912, remains one of the most reproduced artworks in the world.

Tutankhamun, often called the Boy King, ascended to the throne at just nine years old and died mysteriously at around nineteen. Despite his short reign, he became the most famous of all pharaohs after archaeologist Howard Carter discovered his nearly intact tomb in the Valley of the Kings in 1922, revealing an astonishing treasure trove that stunned the world.

Ramses II, known as Ramses the Great, ruled Egypt for over sixty years — one of the longest reigns in history. He was a master builder, constructing monumental temples like Abu Simbel, and a fierce warrior who fought the Hittites at the Battle of Kadesh. He is believed to have fathered over a hundred children and lived to around ninety years old, an extraordinary age for the ancient world.

Cleopatra VII, the last active ruler of the Ptolemaic Kingdom of Egypt, was a brilliant strategist, linguist, and diplomat. Fluent in nine languages, she allied herself with both Julius Caesar and Mark Antony to protect Egypt's independence from Rome. Her legacy endures as a symbol of intellect, power, and resilience.

These remarkable figures shaped politics, religion, art, and culture across millennia, leaving legacies that continue to captivate historians, archaeologists, and dreamers around the globe.`
  },

  2: {
    title: "Ancient Egyptian Sites",
    image: "./images/Pyramids.avif",
    content: `Egypt is home to some of the world's most breathtaking, awe-inspiring, and historically significant ancient sites. These monuments were built not just as physical structures, but as statements of divine power, religious devotion, and human ambition on an unimaginable scale.

The Pyramids of Giza stand as the only surviving wonder of the original Seven Wonders of the Ancient World. Built over four thousand years ago, the Great Pyramid of Khufu was the tallest man-made structure on Earth for nearly four millennia. Constructed using an estimated 2.3 million stone blocks, some weighing up to 80 tons, archaeologists and engineers still marvel at how ancient Egyptians achieved such precision without modern technology.

The Karnak Temple Complex in Luxor is one of the largest religious structures ever built by human hands. Covering over 200 acres, it was constructed and expanded by dozens of pharaohs over a period of nearly 2,000 years. Its hypostyle hall contains 134 massive columns, each decorated with intricate hieroglyphs and reliefs depicting scenes of divine worship and royal conquest.

The Valley of the Kings, located on the west bank of the Nile near Luxor, served as the royal necropolis for much of the New Kingdom period. More than sixty tombs have been discovered here, including those of Tutankhamun, Ramses II, and Seti I. The walls of these tombs are covered with elaborate paintings depicting the journey of the soul through the afterlife.

Abu Simbel, carved directly into a cliff face by Ramses II, features four colossal statues of the pharaoh standing over twenty meters tall. In one of history's greatest engineering feats, the entire temple was relocated in the 1960s to save it from the rising waters of Lake Nasser created by the Aswan High Dam.

These sites are more than tourist attractions — they are windows into the soul of an ancient civilization that believed in eternity, the power of the gods, and the immortality of the human spirit.`
  },

  3: {
    title: "Egyptian Heritage",
    image: "./images/Heritage.jpeg",
    content: `The heritage of ancient Egypt is among the most extraordinary and enduring in the entire history of human civilization. It encompasses art, religion, science, language, and social customs that shaped not only their own society but influenced cultures around the Mediterranean and beyond.

Hieroglyphic writing was developed around 3200 BCE and remained in use for over three thousand years. This complex system combined logographic and alphabetic elements, using over 700 distinct symbols. The decipherment of hieroglyphs was only made possible in 1822 when Jean-François Champollion unlocked the secrets of the Rosetta Stone, a decree inscribed in three scripts that allowed scholars to finally read the ancient texts.

Egyptian art followed strict conventions that remained remarkably consistent for centuries. Figures were depicted in a distinctive composite view — the head shown in profile while the eye and shoulders faced forward — not because Egyptians lacked artistic skill, but because this format conveyed the most complete and spiritually accurate representation of the human form. Paintings and carvings covered tomb walls with vivid scenes of daily life, hunting, farming, music, and feasting.

Religion was the foundation of Egyptian society. They worshipped a vast pantheon of gods, each associated with natural forces, emotions, or aspects of life and death. The belief in the afterlife was central — Egyptians saw death not as an ending but as a transformation into eternal life. This belief drove the extraordinary practice of mummification, preserving the physical body so the soul could return to it in the next world.

Medicine in ancient Egypt was remarkably advanced. The Edwin Smith Papyrus, dating to around 1600 BCE, describes surgical techniques and observations that demonstrate a sophisticated understanding of anatomy and treatment. Egyptian physicians were famous throughout the ancient world, and many Greek medical traditions were directly influenced by Egyptian knowledge.

This magnificent heritage continues to inspire art, architecture, film, literature, and spiritual thought — a testament to the timeless power of one of humanity's greatest civilizations.`
  },

  4: {
    title: "Gods of Ancient Egypt",
    image: "./images/gods-abdo-blog.jpg",
    content: `The ancient Egyptians inhabited a universe alive with divine presence. With over 2,000 deities in their pantheon, the gods of Egypt were not distant or abstract — they were woven into every aspect of daily life, from the rising of the sun to the flooding of the Nile, from birth to death and beyond.

Ra, the sun god, was among the most powerful and widely worshipped of all Egyptian deities. Each day, he was believed to sail his solar barque across the sky, bringing light and warmth to the world. At night, he journeyed through the dangerous underworld, battling the chaos serpent Apophis, only to be reborn at dawn. His cult center was at Heliopolis, and many pharaohs adopted titles linking themselves to his divine power.

Osiris, god of the afterlife and resurrection, embodied the promise of eternal life. According to myth, he was murdered by his jealous brother Set, only to be resurrected by his devoted wife Isis. This story of death and rebirth made Osiris the supreme judge of souls, weighing each heart against the feather of Ma'at — the goddess of truth and cosmic order — to determine who deserved entry into paradise.

Anubis, the jackal-headed god of embalming and the dead, guided souls through the treacherous journey of the underworld. As the divine embalmer, he was believed to have prepared the body of Osiris for burial, establishing the sacred rituals of mummification that Egyptians followed for thousands of years.

Isis, goddess of magic and motherhood, was perhaps the most beloved deity in the entire Egyptian world. Her worship eventually spread far beyond Egypt's borders, reaching Rome, Greece, and across the ancient Mediterranean. She was the ultimate symbol of devotion, power, and protection.

Horus, the falcon-headed sky god, represented kingship and divine authority. Every pharaoh was considered to be a living Horus on earth, the earthly embodiment of divine order and royal power.

These gods were not merely stories — they were living forces that Egyptians communicated with through prayer, ritual, sacrifice, and elaborate temple ceremonies that sustained the cosmic order of the universe.`
  },

  5: {
    title: "Mysteries of the Sphinx",
    image: "./images/sphinx-abdo-blog.jpg",
    content: `Rising from the sands of Giza, the Great Sphinx is one of the most recognizable and enigmatic monuments ever created. With the body of a lion and the face of a human, this colossal statue stretches over 73 meters in length and stands 20 meters tall — carved directly from the bedrock of the Giza plateau. Yet despite centuries of study, the Sphinx continues to keep its deepest secrets.

The most fundamental mystery is who built it and when. The mainstream scholarly consensus attributes the Sphinx to Pharaoh Khafre, who ruled around 2500 BCE, based on its proximity to his pyramid and a nearby temple bearing his name. However, this attribution has been questioned. Some researchers, most notably geologist Robert Schoch, have argued that the erosion patterns on the Sphinx's body suggest exposure to heavy rainfall — a climate that last existed in Egypt around 7000-10000 BCE, potentially making the Sphinx thousands of years older than previously thought.

The face of the Sphinx also raises fascinating questions. The facial features do not strongly resemble other known portraits of Khafre. Some Egyptologists and forensic specialists have suggested the face may have been recarved or modified at some point in its long history, further complicating the question of its original creator.

Perhaps the most tantalizing mystery is the legend of hidden chambers beneath the Sphinx. Ancient texts and modern seismic surveys have both suggested the existence of cavities and tunnels beneath the monument. Some researchers believe these may contain a lost library of ancient knowledge — the legendary Hall of Records mentioned by 20th-century mystic Edgar Cayce. Egyptian authorities have so far declined to permit extensive excavations beneath the Sphinx, leaving the question open.

The missing nose of the Sphinx — often attributed to Napoleon's soldiers, though this is historically inaccurate — was actually documented as missing long before the French expedition to Egypt. Medieval Arab historian al-Maqrizi wrote that a Sufi religious leader named Muhammad Sa'im al-Dahr destroyed it in 1378 CE as an act of religious iconoclasm.

The Sphinx gazes eternally eastward, toward the rising sun, a silent guardian of secrets that have endured for thousands of years. Whether those secrets will ever be fully uncovered remains one of archaeology's greatest open questions.`
  },

  6: {
    title: "The Language of Hieroglyphs",
    image: "./images/hieroglyphs-abdo-blog.jpg",
    content: `Among the greatest intellectual achievements of the ancient world, the Egyptian hieroglyphic writing system stands as a monument to human creativity, complexity, and ingenuity. Developed around 3200 BCE, it remained in active use for over three millennia, only falling silent with the closing of the last pagan temple in 396 CE — after which the knowledge to read it was completely lost for nearly 1,400 years.

Hieroglyphs — from the Greek meaning "sacred carvings" — were far more sophisticated than a simple picture alphabet. The system combined three different types of signs: logograms, which represented whole words or concepts; phonograms, which represented sounds; and determinatives, silent signs placed at the end of words to clarify their meaning. A single word might require all three types, making the system one of the most complex writing systems ever devised.

The ancient Egyptians used hieroglyphs primarily for monumental and religious texts — inscribed on temple walls, tombs, obelisks, and royal decrees. For everyday writing, scribes used a simplified cursive form called hieratic, and later an even more abbreviated script called demotic. These scripts were faster to write but only trained scribes, who spent years in specialized schools called Houses of Life, could master them.

The rediscovery of hieroglyphs is one of the great stories of intellectual history. When Napoleon invaded Egypt in 1798, his expedition included 167 scholars, scientists, and artists — the Commission des Sciences et des Arts — who systematically documented Egypt's ancient monuments and artifacts. In 1799, French soldiers digging fortifications near the town of Rashid discovered a black granite stele bearing the same text inscribed in three scripts: hieroglyphic, demotic, and ancient Greek. This became known as the Rosetta Stone.

For over two decades, Europe's greatest minds struggled to decode the hieroglyphic text using the Greek translation as a key. It was the French scholar Jean-François Champollion who finally cracked the code in 1822, demonstrating that hieroglyphs were not purely symbolic but also represented sounds — a breakthrough that opened an entirely lost world of ancient Egyptian thought, history, literature, and science.

Today, Egyptologists can read hieroglyphic texts with remarkable accuracy, giving us direct access to the words of pharaohs, priests, lovers, and common people who lived over three thousand years ago — a profound connection across the vast gulf of time.`
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
