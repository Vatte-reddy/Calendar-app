const players = {
  0: {
    name: "Sachin Tendulkar",
    image: "/assets/sachin.png"
  },
  1: {
    name: "MS Dhoni",
    image: "/assets/dhoni.png"
  },
  2: {
    name: "Virat Kohli",
    image: "/assets/virat.png"
  },
  3: {
    name: "Rohit Sharma",
    image: "/assets/rohit.png"
  },
  4: {
    name: "Shubman Gill",
    image: "/assets/shubman.png"
  },
  5: {
    name: "Kapil Dev",
    image: "/assets/kapil.png"
  },
  6: {
    name: "Sourav Ganguly",
    image: "/assets/sourav.png"
  },
  7: {
    name: "Yuvraj Singh",
    image: "/assets/yuvraj.png"
  },
  8: {
    name: "Virender Sehwag",
    image: "/assets/sehwag.png"
  },
  9: {
    name: "Anil Kumble",
    image: "/assets/kumble.png"
  },
  10: {
    name: "Gautam Gambhir",
    image: "/assets/gambhir.png"
  },
  11: {
    name: "Hardik Pandya",
    image: "/assets/hardik.png"
  }
};

export default function usePlayers(month) {
  return players[month];
}