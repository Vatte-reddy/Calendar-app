const players = {
  0: {
    name: "Kapil Dev",
    image: "https://wallpapercave.com/wp/wp3997796.jpg"
  },
  1: {
    name: "Shubman Gill",
    image: "https://wallpapercave.com/wp/wp12476812.jpg"
  },
  2: {
    name: "Ross Taylor",
    image: "https://wallpapercave.com/wp/wp4982985.jpg"
  },
  3: {
    name: "Sachin Tendulkar",
    image: "https://wallpapercave.com/wp/wp3997779.jpg"
  },
  4: {
    name: "Anil Kumble",
    image: "https://wallpapercave.com/wp/wp3997800.jpg"
  },
  5: {
    name: "MS Dhoni",
    image: "https://wallpapercave.com/wp/wp3997784.jpg"
  },
  6: {
    name: "Sourav Ganguly",
    image: "https://wallpapercave.com/wp/wp3997792.jpg"
  },
  7: {
    name: "Kane Williamson",
    image: "https://wallpapercave.com/wp/wp3997795.jpg"
  },
  8: {
    name: "Rohit Sharma",
    image: "https://wallpapercave.com/wp/wp3997802.jpg"
  },
  9: {
    name: "Virender Sehwag",
    image: "https://wallpapercave.com/wp/wp3997805.jpg"
  },
  10: {
    name: "Virat Kohli",
    image: "https://wallpapercave.com/wp/wp3997788.jpg"
  },
  11: {
    name: "Yuvraj Singh",
    image: "https://wallpapercave.com/wp/wp3997798.jpg"
  }
};

export default function usePlayers(month) {
  return players[month];
}