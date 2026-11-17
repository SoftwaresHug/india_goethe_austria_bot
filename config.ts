// Auto-generated configuration for Goethe Austria India Portal

export const config = {
  botName: "Goethe Austria India",
  country: "India",
  provider: "Goethe-Institut",
  destination: "Austria",
  loginUrl: "https://www.goethe.de/ins/in/ar/spr/prf.html",
  centers: [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Chandigarh",
  "Coimbatore",
  "Hyderabad",
  "Trivandrum",
  "Kochi"
],
  visaCategories: [
  "German Exam A1",
  "German Exam A2",
  "German Exam B1",
  "German Exam B2",
  "German Exam C1",
  "German Exam C2"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
