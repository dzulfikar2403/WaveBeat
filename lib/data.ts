export type MusicDataType = {
  id: number
  song: string
  duration: string
  artist: string
  image_url: string
} 

export const getMusicData:MusicDataType[] = [
  {
    id: 1,
    song: "I Love you",
    duration: "3.00",
    artist: "Treasure",
    image_url: "/images/treasure.jpg"
  },
  {
    id: 2,
    song: "Whistle",
    duration: "3.00",
    artist: "Blackpink",
    image_url: "/images/whistle.jpg"
  },
  {
    id: 3,
    song: "Olivia licence",
    duration: "3.00",
    artist: "Olivia Rodrigo",
    image_url: "/images/drivers-licence.jpg"
  },
  {
    id: 4,
    song: "How You Like That",
    duration: "3.00",
    artist: "Blackpink",
    image_url: "/images/Rose.png"
  },
] 