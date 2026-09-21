
// Central site configuration
// Sri Jithendra Nursery

export const site = {
  name: "Sri Jithendra Nursery",

  tagline: "Growing Nature, Growing Life",

  address:
    "To, Veeravaram Rd, Kadiam, Veeravaram, Andhra Pradesh 533126",

  // Add actual details when available
  phone: "9381608126",

  email: "chinnakamireddy6@gmail.com",

  hours: "Monday - Sunday, 8:00 AM - 8:00 PM",

  // Add actual WhatsApp number
  // Example: "919876543210"
  whatsapp: "",

  // Google Maps Embed URL
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.810989402921!2d81.8235984751536!3d16.885241983918885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bd38c9b16f93%3A0x3fd83dec4844e660!2sSri%20Jithendra%20Nursery!5e0!3m2!1sen!2sin!4v1789626858245!5m2!1sen!2sin",

  // Google Maps directions
  mapsDirectionsUrl:
    "https://maps.app.goo.gl/m9ZB9trYhWa3SwuX9",

  social: {
    whatsapp: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

// Create WhatsApp message link
export const whatsappLink = (message) => {
  if (!site.whatsapp) {
    return "#";
  }

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

