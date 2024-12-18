import {
  resourceImg1,
  resourceImg2,
  resourceImg3,
  resourceImg4,
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
} from "../assets/images";

export const navLinks = [
  { id: 1, to: "about", label: "About Us" },
  { id: 2, to: "initiatives", label: "Initiatives" },
  { id: 3, to: "events", label: "Events" },
  { id: 4, to: "workshops", label: "Workshops" },
  { id: 5, to: "contact", label: "Contact Us" },
  { id: 6, to: "donate", label: "Donate" },
];

export const resources = [
  {
    id: 1,
    title: "Meditation Practices",
    description: "Techniques to calm the mind and cultivate inner peace.",
    url: "",
    image: resourceImg1,
  },
  {
    id: 2,
    title: "Spiritual Teachings",
    description: "Wisdom to inspire and guide your soul's journey.",
    url: "",
    image: resourceImg2,
  },
  {
    id: 3,
    title: "Guided Yoga",
    description: "Mindful movement and breathwork for body and spirit.",
    url: "",
    image: resourceImg3,
  },
  {
    id: 4,
    title: "Audio & Video Sermons",
    description:
      "Enlightening messages to nurture your faith and understanding.",
    url: "",
    image: resourceImg4,
  },
];

export const events = [
  {
    id: 1,
    title: "Full Moon Meditation",
    datetime: "15th Dec 2024, 7PM EST",
    location: "Online / Community Hall",
    url: "",
    image: "",
  },
  {
    id: 2,
    title: "Chandi Homam",
    datetime: "26th Dec 2024, 8AM IST",
    location: "Online / Community Hall",
    url: "",
    image: "",
  },
  {
    id: 3,
    title: "Full Moon Meditation",
    datetime: "31st Dec 2024, 7PM EST",
    location: "Online / Community Hall",
    url: "",
    image: "",
  },
  {
    id: 4,
    title: "Full Moon Meditation",
    datetime: "13th Jan 2025, 7PM EST",
    location: "Online / Community Hall",
    url: "",
    image: "",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sankar",
    place: "Chennai",
    description:
      "“The techniques provided helped me calm my mind and find inner peace. Truly transformative!”",
    image: testimonialImg1,
  },
  {
    id: 2,
    name: "Padma",
    place: "Madurai",
    description:
      "“The wisdom shared has been a guiding light for my spiritual journey. Highly inspiring!”",
    image: testimonialImg2,
  },
  {
    id: 3,
    name: "Krishna",
    place: "Coimbatore",
    description:
      "“The mindful movement and breathwork sessions have brought balance to my body and spirit. Amazing experience!”",
    image: testimonialImg3,
  },
  {
    id: 4,
    name: "Yamuna",
    place: "Bangalore",
    description:
      "“The sermons are enlightening and deeply nurture my faith and understanding. Highly recommended!”",
    image: testimonialImg4,
  },
];

export const addresses = [
  {
    id: 1,
    title: "Visit Our Office",
    place: "JAI KOSHA FOUNDATION",
    line1: "No. 3/360, Kagithapuram,",
    line2: "4th Street, Kovilambakkam,",
    district: "Chennai - 600117",
    state: "Tamil Nadu, India",
    isAddress: true,
  },
  {
    id: 2,
    title: "Visit Our Ashram - Erode",
    place: "AGAM ASHRAMAM",
    line1: "69a, Solipalayam,",
    line2: "Avalpoondurai",
    district: "Erode - 638115,",
    state: "Tamil Nadu, India",
    isAddress: true,
  },
  {
    id: 3,
    title: "24/7 Quick Contact",
    email: { label: "Email", value: "enquiries@jaikosha.com" },
    mobile: { label: "Mobile", value: "9489889848" },
    description: [
      { label: "Working Hours", value: "Mon-Sat" },
      { label: "Morning", value: "10.00 AM - 1.00 PM" },
      { label: "Evening", value: "5.00 PM - 8.00 PM" },
    ],
    isAddress: false,
  },
];


// {
//   id: 1,
//   title: "Visit Our Office",
//   place: "JAI KOSHA FOUNDATION",
//   line1: "747, 4th street, Judges Colony,",
//   line2: "S. Kolathur, Kovilambakkam,",
//   district: "Chennai - 600117",
//   state: "Tamil Nadu, India",
//   isAddress: true,
// },
