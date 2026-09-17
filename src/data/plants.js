// Sample plant catalog — replace images and details with real inventory
export const plantCategories = [
  "Indoor Plants",
  "Outdoor Plants",
  "Flowering Plants",
  "Fruit Plants",
  "Ornamental Plants",
  "Medicinal Plants",
  "Palm Plants",
  "Garden Plants",
];

export const plants = [
  {
    id: "rose-plant",
    name: "Rose Plant",
    category: "Flowering Plants",
    image:
      "https://images.pexels.com/photos/37792694/pexels-photo-37792694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Classic blooming rose with vibrant red flowers and a delightful fragrance.",
    description:
      "The Rose Plant is a timeless favourite for every garden. Known for its stunning blooms and enchanting fragrance, it adds elegance and colour to any space. Roses thrive with regular care and reward you with months of beautiful flowers.",
    benefits: [
      "Beautiful fragrant blooms",
      "Attracts pollinators",
      "Perfect for gardens and pots",
      "Long flowering season",
    ],
    sunlight: "Full sunlight (6+ hours daily)",
    water: "Moderate — water when topsoil feels dry",
    soil: "Well-draining loamy soil",
    care: "Prune regularly, feed with rose fertiliser, and ensure good air circulation.",
    // price: "₹150",
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    category: "Flowering Plants",
    image:
      "https://images.pexels.com/photos/39466670/pexels-photo-39466670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Vibrant tropical hibiscus with large pink blooms and glossy green leaves.",
    description:
      "Hibiscus is a stunning flowering plant that produces large, vibrant blooms throughout the warm months. It is easy to grow and brings a tropical feel to gardens, balconies and patios.",
    benefits: [
      "Large showy flowers",
      "Long blooming season",
      "Attracts butterflies",
      "Low maintenance",
    ],
    sunlight: "Full sunlight to partial shade",
    water: "Regular watering — keep soil moist",
    soil: "Well-draining fertile soil",
    care: "Deadhead spent blooms and feed monthly during the growing season.",
    // price: "₹120",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    category: "Flowering Plants",
    image:
      "https://images.pexels.com/photos/9148253/pexels-photo-9148253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Fragrant white jasmine flowers perfect for gardens and aromatic spaces.",
    description:
      "Jasmine is cherished for its delicate white blossoms and sweet, intoxicating fragrance. It is ideal for trellises, fences and containers, filling the evening air with a beautiful scent.",
    benefits: [
      "Sweet fragrant flowers",
      "Blooms in the evening",
      "Great for trellises and fences",
      "Attracts pollinators",
    ],
    sunlight: "Full sunlight to partial shade",
    water: "Moderate — water when soil surface is dry",
    soil: "Moist, well-draining soil",
    care: "Prune after flowering to maintain shape and encourage new growth.",
    // price: "₹100",
  },
  {
    id: "money-plant",
    name: "Money Plant",
    category: "Indoor Plants",
    image:
      "https://images.pexels.com/photos/4641442/pexels-photo-4641442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Trailing money plant — easy-care indoor favourite for homes and offices.",
    description:
      "The Money Plant is one of the most popular indoor plants, known for its trailing heart-shaped leaves. It is incredibly easy to grow, tolerates low light and is believed to bring good fortune.",
    benefits: [
      "Purifies indoor air",
      "Low maintenance",
      "Grows in soil or water",
      "Believed to bring prosperity",
    ],
    sunlight: "Indirect bright light",
    water: "Moderate — allow soil to dry between waterings",
    soil: "Any well-draining potting mix",
    care: "Trim regularly to encourage bushy growth and change water weekly if grown in water.",
    // price: "₹80",
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "Palm Plants",
    image:
      "https://images.pexels.com/photos/12366649/pexels-photo-12366649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Elegant areca palm with feathery fronds — a natural air purifier for indoors.",
    description:
      "The Areca Palm is a graceful, feathery palm that brings a touch of the tropics indoors. It is an excellent air-purifying plant and grows well in bright, indirect light.",
    benefits: [
      "Natural air purifier",
      "Beautiful feathery foliage",
      "Pet-friendly",
      "Adds humidity to the room",
    ],
    sunlight: "Bright indirect light",
    water: "Moderate — keep soil lightly moist",
    soil: "Well-draining potting mix",
    care: "Mist leaves occasionally and avoid direct harsh sunlight.",
    // price: "₹350",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    category: "Medicinal Plants",
    image:
      "https://images.pexels.com/photos/7408838/pexels-photo-7408838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Soothing aloe vera succulent with healing gel — easy to grow and low maintenance.",
    description:
      "Aloe Vera is a versatile succulent prized for its medicinal gel. It is drought-tolerant, easy to care for and makes a wonderful addition to homes, balconies and kitchen gardens.",
    benefits: [
      "Healing gel for skin",
      "Air purifying",
      "Drought tolerant",
      "Very low maintenance",
    ],
    sunlight: "Bright indirect to direct sunlight",
    water: "Minimal — water every 2–3 weeks",
    soil: "Cactus or succulent mix",
    care: "Allow soil to dry completely between waterings. Avoid overwatering.",
    // price: "₹90",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    category: "Outdoor Plants",
    image:
      "https://images.pexels.com/photos/12401782/pexels-photo-12401782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Colourful bougainvillea with masses of vibrant pink papery bracts.",
    description:
      "Bougainvillea is a vigorous climber known for its dazzling display of colourful papery bracts. It is perfect for walls, fences and arches and thrives in warm, sunny positions.",
    benefits: [
      "Spectacular colour display",
      "Drought tolerant once established",
      "Fast growing climber",
      "Attracts pollinators",
    ],
    sunlight: "Full sunlight (6+ hours)",
    water: "Moderate — do not overwater",
    soil: "Well-draining slightly acidic soil",
    care: "Prune hard after each flowering cycle to promote new blooms.",
    // price: "₹140",
  },
  {
    id: "mango-tree",
    name: "Mango Tree",
    category: "Fruit Plants",
    image:
      "https://images.pexels.com/photos/11760088/pexels-photo-11760088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Fruit-bearing mango tree — grow your own sweet mangoes at home.",
    description:
      "The Mango Tree is a beloved fruit tree that produces delicious sweet mangoes. With proper care it grows into a beautiful shade tree and rewards you with seasonal fruit for years.",
    benefits: [
      "Home-grown sweet mangoes",
      "Provides shade",
      "Long-lived tree",
      "Fragrant flowers in spring",
    ],
    sunlight: "Full sunlight",
    water: "Regular when young — drought tolerant once established",
    soil: "Deep well-draining soil",
    care: "Feed with organic fertiliser and prune to maintain shape.",
    // price: "₹300",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "Indoor Plants",
    image:
      "https://images.pexels.com/photos/29218657/pexels-photo-29218657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Architectural snake plant — one of the toughest indoor air purifiers.",
    description:
      "The Snake Plant, also known as Sansevieria, is a hardy indoor plant with upright, sword-shaped leaves. It is nearly indestructible and one of the best plants for cleaning indoor air.",
    benefits: [
      "Excellent air purifier",
      "Survives low light",
      "Very low water needs",
      "Ideal for beginners",
    ],
    sunlight: "Low to bright indirect light",
    water: "Minimal — water every 2–3 weeks",
    soil: "Cactus or succulent mix",
    care: "Do not overwater. Wipe leaves occasionally to keep them dust-free.",
    // price: "₹200",
  },
  {
    id: "lavender",
    name: "Lavender",
    category: "Garden Plants",
    image:
      "https://images.pexels.com/photos/13106042/pexels-photo-13106042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Fragrant lavender with purple flower spikes — soothing and beautiful.",
    description:
      "Lavender is a fragrant herb known for its calming scent and beautiful purple flower spikes. It is perfect for garden borders, containers and aromatic gardens.",
    benefits: [
      "Soothing fragrance",
      "Attracts bees and butterflies",
      "Used in aromatherapy",
      "Drought tolerant",
    ],
    sunlight: "Full sunlight",
    water: "Minimal — prefers drier conditions",
    soil: "Sandy well-draining soil",
    care: "Prune after flowering to maintain a compact shape.",
    // price: "₹180",
  },
  {
    id: "bonsai",
    name: "Bonsai Plant",
    category: "Ornamental Plants",
    image:
      "https://images.pexels.com/photos/17146325/pexels-photo-17146325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Miniature bonsai tree — a living art piece for your home or office.",
    description:
      "Bonsai is the art of growing miniature trees in containers. These ornamental plants are living sculptures that bring a sense of calm and beauty to any space.",
    benefits: [
      "Beautiful ornamental value",
      "Promotes mindfulness and calm",
      "Compact for small spaces",
      "Long-lived with care",
    ],
    sunlight: "Bright indirect light",
    water: "Regular — keep soil consistently moist",
    soil: "Bonsai-specific well-draining mix",
    care: "Prune roots and branches regularly. Water carefully and protect from extreme weather.",
    // price: "₹500",
  },
  {
    id: "marigold",
    name: "Marigold",
    category: "Flowering Plants",
    image:
      "https://images.pexels.com/photos/17006728/pexels-photo-17006728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    shortDesc:
      "Bright orange marigold — cheerful blooms for gardens and festivals.",
    description:
      "Marigolds are cheerful, easy-to-grow flowering plants with vibrant orange and yellow blooms. They are widely used in gardens, festivals and as natural pest repellents.",
    benefits: [
      "Bright cheerful flowers",
      "Repels garden pests",
      "Long blooming season",
      "Easy to grow from seed",
    ],
    sunlight: "Full sunlight",
    water: "Moderate — water when soil is dry",
    soil: "Any well-draining garden soil",
    care: "Deadhead old flowers to encourage continuous blooming.",
    // price: "₹50",
  },
];

export const getPlantById = (id) => plants.find((p) => p.id === id);
