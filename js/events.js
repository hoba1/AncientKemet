
let events = {
  1: {
    title: "The Art of Ancient Egypt",
    subtitle: "A Premium Lecture & Tour Series",
    badge: "LECTURE",
    date: "May 20, 2026",
    location: "Cairo & Luxor",
    image: "./images/The Art of Ancient Egypt.jpg",
    countdownDate: "May 20, 2026 09:00:00",
    description: `A premium series of expert-led lectures and guided tours exploring the masterpieces of the pharaohs. Go beyond the surface to understand the symbolism, architecture, and techniques that defined 3,000 years of civilization.

This exclusive series brings together world-renowned Egyptologists and art historians for an immersive experience unlike any other. Each session is carefully curated to take participants on a deep journey through the aesthetic legacy of ancient Egypt — from the colossal statues of Luxor to the delicate gold jewelry of the royal tombs.

Participants will gain firsthand access to restricted museum collections and archaeological sites that are not open to the general public. Expert guides will illuminate the stories behind iconic works, explaining how religious beliefs, political power, and artistic tradition combined to produce some of humanity's greatest cultural achievements.`,
    itinerary: [
      { time: "09:00 AM - Opening Lecture", desc: "Introduction to Egyptian artistic traditions by Dr. Ahmed Farouk, Head of Antiquities at Cairo University." },
      { time: "11:00 AM - The Cairo Museum", desc: "A guided tour of the Egyptian Museum's finest collection, including the Royal Mummies Hall." },
      { time: "02:00 PM - Karnak Temple", desc: "An expert-led walkthrough of the Karnak complex, focusing on its painted reliefs and colossal architecture." },
      { time: "05:00 PM - Closing Discussion", desc: "A roundtable discussion on the modern legacy of ancient Egyptian art and its influence on the world." }
    ]
  },

  2: {
    title: "Sound and Light Show",
    subtitle: "An Audio-Visual Journey Through Time",
    badge: "Night Tour",
    date: "Multiple Shows Per Evening",
    location: "Giza, Luxor & Aswan",
    image: "./images/Sound and Light Show.jpg",
    countdownDate: "May 10, 2026 21:00:00",
    description: `Experience the magic of Ancient Egypt as iconic monuments are brought to life through a spectacular audio-visual performance. History is narrated through dramatic lighting and music under the stars.

The Sound and Light Show is one of Egypt's most beloved cultural experiences, drawing visitors from around the world to witness the Pyramids, Sphinx, Karnak Temple, and Philae Temple illuminated in a breathtaking display of color and light.

As darkness falls, the ancient stones come alive with projected light, while a powerful narration tells the story of the pharaohs, gods, and great events that shaped one of history's greatest civilizations. The experience is offered in multiple languages and is suitable for all ages.`,
    itinerary: [
      { time: "07:30 PM - Arrival & Seating", desc: "Guests are escorted to specially designed outdoor amphitheatres with perfect views of the illuminated monuments." },
      { time: "08:00 PM - The Show Begins", desc: "A 60-minute audio-visual spectacle narrating Egypt's history from the Age of the Gods to the fall of the pharaohs." },
      { time: "09:00 PM - Photography Session", desc: "An exclusive 30-minute window for guests to photograph the lit monuments up close." },
      { time: "09:30 PM - Farewell Reception", desc: "A light refreshments reception with Egyptian tea and traditional sweets under the stars." }
    ]
  },

  3: {
    title: "The Grand Egyptian Museum",
    subtitle: "An Exclusive Curator's Tour",
    badge: "Museum Exhibition",
    date: "Daily",
    location: "Giza Plateau, Cairo",
    image: "./images/The Grand Egyptian Museum.jpg",
    countdownDate: "May 15, 2026 09:00:00",
    description: `Get an exclusive look at the world's largest archaeological museum. This event features a curated tour of the Grand Staircase and the commercial gardens, showcasing colossal statues that haven't been seen by the public for decades.

The Grand Egyptian Museum (GEM) is the crown jewel of modern Egyptology — a state-of-the-art facility spanning over 480,000 square meters at the foot of the Giza Pyramids. It houses more than 100,000 artifacts, including the complete treasures of Tutankhamun, displayed together for the very first time.

Our exclusive curator's tour grants access to areas not open to regular visitors, including conservation laboratories where you can watch specialists restore 3,000-year-old artifacts in real time.`,
    itinerary: [
      { time: "09:00 AM - The Grand Staircase", desc: "Witness 87 colossal royal statues lining the central staircase — a procession of kings stretching across 3,000 years." },
      { time: "11:00 AM - Conservation Labs", desc: "An exclusive behind-the-scenes look at where GEM's specialists restore and preserve ancient artifacts." },
      { time: "01:00 PM - Tutankhamun's Gallery", desc: "A guided walk through the complete Tutankhamun collection — all 5,398 artifacts in their permanent home." },
      { time: "03:00 PM - The Outdoor Gardens", desc: "Explore the museum's open-air gardens featuring monumental statues, including a 3,400-year-old colossus of Ramses II." }
    ]
  },

  4: {
    title: "Tutankhamun's Treasures",
    subtitle: "The Complete Collection",
    badge: "Special Exhibition",
    date: "Starting May 2026",
    location: "Grand Egyptian Museum (GEM)",
    image: "./images/Tutankhamun’s Treasures.jpg",
    countdownDate: "May 20, 2026 09:00:00",
    description: `For the first time since its discovery in 1922, the full funerary suite of King Tutankhamun is united under one roof. This exhibition is the crowning jewel of the Grand Egyptian Museum, offering an unprecedented look at the life, death, and afterlife of the Boy King.

It is not just a display of gold; it is a 100-year-old promise fulfilled, bringing together all 5,398 artifacts in a narrative-driven sequence. Artifacts are housed in German-engineered, ultra-clear glass cases that are seismic-proof and climate-controlled, allowing for an incredibly close look at details like the King's fingerprints on ancient pottery.

The chronological narrative follows the King's journey from his childhood in the royal palace to his transition into a god in the afterlife — a deeply moving and historic experience.`,
    itinerary: [
      { time: "09:00 AM - The Hall of Chariots", desc: "Exploration of the six royal chariots, witnessing the military engineering of the 18th Dynasty." },
      { time: "11:00 AM - The Golden Shrines", desc: "A walkthrough of the four massive gilded shrines that once nested together to guard the King." },
      { time: "01:30 PM - The Inner Sanctum", desc: "Exclusive access to the centerpiece: The 11kg Solid Gold Mask and the innermost gold coffin." },
      { time: "03:30 PM - The King's Wardrobe", desc: "A close-up look at the King's personal jewelry, sandals, and the world's oldest linen garments." }
    ]
  },

  5: {
    title: "Secrets of the Saqqara Tombs",
    subtitle: "A Live Archaeological Lecture",
    badge: "Academic Lecture",
    date: "June 10, 2026",
    location: "ARCE Center, Cairo",
    image: "./images/Secrets of the Saqqara Tombs.jpg",
    countdownDate: "June 10, 2026 10:00:00",
    description: `An exclusive lecture by leading archaeologists on the latest discoveries in the Saqqara necropolis. Learn the stories behind the recently unearthed mummies and the "Lost Sun Temples."

Saqqara, Egypt's oldest and most complex necropolis, continues to yield extraordinary discoveries. In recent excavation seasons, teams have uncovered hundreds of sealed coffins dating back 3,000 years, complete with mummies, papyri, and a vast array of funerary objects in near-perfect condition.

This lecture brings together the archaeologists who made these discoveries to share their findings directly with the public for the first time. You will see photographs, video footage, and actual artifacts from the excavation, and have the opportunity to ask questions during an extended Q&A session.`,
    itinerary: [
      { time: "10:00 AM - Opening Remarks", desc: "Welcome address by the Secretary-General of the Supreme Council of Antiquities." },
      { time: "10:30 AM - The New Discoveries", desc: "Lead archaeologist Dr. Zahi Hawass presents the newly unearthed mummies and sealed sarcophagi." },
      { time: "12:00 PM - The Lost Sun Temples", desc: "A detailed presentation on the search for the missing Sun Temples of the Fifth Dynasty kings." },
      { time: "01:30 PM - Q&A Session", desc: "An open forum where attendees can ask the excavation team about their findings and methodology." }
    ]
  },

  6: {
    title: "Felucca Heritage Sail",
    subtitle: "A Sunset Voyage on the Ancient Nile",
    badge: "Cultural Tour",
    date: "Daily at Sunset",
    location: "Nile River — Luxor & Aswan",
    image: "./images/Felucca Heritage Sail.jpg",
    countdownDate: "May 12, 2026 17:30:00",
    description: `A peaceful sunset tour on a traditional wooden sailboat along the Nile. Experience the river as the ancients did, with storytelling sessions about how the Nile shaped Egyptian civilization.

The felucca — a traditional wooden sailing boat — has been used on the Nile for thousands of years and remains one of the most authentic ways to experience Egypt's greatest natural treasure. As the sun sets over the West Bank and the ancient temples glow gold, guides share stories of life along the river from the time of the pharaohs to the present day.

Each tour is limited to small groups to ensure an intimate and personal experience. Light refreshments, traditional Egyptian music, and a professional photographer are included.`,
    itinerary: [
      { time: "05:30 PM - Embarkation", desc: "Board your traditional felucca at the corniche dock, where your captain and guide will welcome you aboard." },
      { time: "06:00 PM - The Nile Crossing", desc: "Sail past the East Bank temples as the storytelling session begins, tracing the Nile's role in ancient civilization." },
      { time: "07:00 PM - Sunset at West Bank", desc: "Drift before the ancient West Bank as the sun sets over the Valley of the Kings in a breathtaking display of color." },
      { time: "07:45 PM - Return & Farewell", desc: "Return to the dock with refreshments and a chance to purchase photographs taken during the sail." }
    ]
  },

  7: {
    title: "Art Cairo",
    subtitle: "Contemporary Art Meets Ancient Symbolism",
    badge: "Art Exhibition",
    date: "June 15, 2026",
    location: "Palace of Arts, Cairo Opera House",
    image: "./images/Egyptian Contemporary Art Exhibition.jpg",
    countdownDate: "June 15, 2026 10:00:00",
    description: `A unique exhibition showcasing the bridge between ancient symbolism and modern Egyptian art. This gallery features paintings and sculptures from Egypt's top contemporary artists inspired by pharaonic heritage.

Art Cairo is the region's premier contemporary art fair, bringing together galleries and artists from across Egypt and the Arab world. This year's theme — "Eternal Forms" — challenges artists to reinterpret the iconography, colors, and spiritual symbolism of ancient Egypt through a modern lens.

The exhibition spans three floors of the Palace of Arts, featuring over 200 works including large-scale paintings, immersive installations, and monumental sculpture. Guided tours are available throughout the day, and a series of artist talks will give visitors direct insight into the creative process.`,
    itinerary: [
      { time: "10:00 AM - Opening Ceremony", desc: "The Minister of Culture officially opens Art Cairo with a keynote address on the importance of artistic heritage." },
      { time: "11:00 AM - Guided Gallery Tour", desc: "A curated walk through the exhibition's three floors with an expert art critic as your guide." },
      { time: "02:00 PM - Artist Talks", desc: "Five of the exhibition's featured artists discuss their inspirations and their relationship with ancient Egyptian iconography." },
      { time: "04:00 PM - Collector's Preview", desc: "An exclusive preview session for collectors, with the opportunity to purchase works directly from the artists." }
    ]
  },

  8: {
    title: "Pyramid Astronomy",
    subtitle: "The Stars That Built a Civilization",
    badge: "Scientific Lecture",
    date: "November 5, 2026",
    location: "Mena House, Giza",
    image: "./images/Astronomy & The Pyramids Lecture.jpg",
    countdownDate: "November 5, 2026 19:00:00",
    description: `A fascinating lecture by world-renowned astronomers and Egyptologists. Explore how the Great Pyramids were perfectly aligned with the stars and the "Orion Correlation Theory."

The ancient Egyptians were master astronomers. Their ability to track the movements of stars, planets, and the sun allowed them to create one of the most accurate calendars in the ancient world, plan the construction of perfectly oriented monuments, and develop a rich cosmological mythology connecting the earthly and divine realms.

This special evening lecture at Mena House — with the Pyramids of Giza visible from the venue — brings together the world's leading experts on archaeoastronomy to present the latest research on the stellar alignments of the pyramids and temples, the significance of the Orion constellation in Egyptian religion, and the mysteries that still await explanation.`,
    itinerary: [
      { time: "07:00 PM - Welcome Reception", desc: "Guests arrive at Mena House for a reception dinner with a direct view of the illuminated Pyramids of Giza." },
      { time: "08:00 PM - The Orion Correlation", desc: "Prof. Robert Bauval presents the Orion Correlation Theory and its implications for our understanding of the pyramid complex." },
      { time: "09:15 PM - Stellar Navigation", desc: "An interactive presentation on how Egyptian priests used the night sky as a calendar, clock, and religious roadmap." },
      { time: "10:00 PM - Stargazing Session", desc: "A guided stargazing experience on the Mena House grounds, identifying the same stars the ancient Egyptians revered." }
    ]
  }
};

function openEvent(id) {
  localStorage.setItem("eventId", id);
}


function applyFilter() {
  const selectedMonth = document.getElementById('monthFilter').value;
  const selectedType = document.getElementById('typeFilter').value;

  const cards = document.querySelectorAll('.event-card');

  cards.forEach(card => {
    const cardMonth = card.getAttribute('data-month');
    const cardType = card.getAttribute('data-type');

    const monthMatch = (selectedMonth === 'all' || cardMonth === selectedMonth );
    const typeMatch = (selectedType === 'all' || cardType === selectedType);

    if (monthMatch && typeMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
