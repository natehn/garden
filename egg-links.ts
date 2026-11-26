// Special days: "MM-DD" -> URL (checked first)
export const specialDays: Record<string, string> = {
  "02-01": "https://www.youtube.com/watch?v=SCItkITK3MU",
  "04-14": "/Hidden/Avril-14th",
  "09-17": "https://georgewbush-whitehouse.archives.gov/news/releases/2002/09/20020917-7.html",
  "10-03": "https://www.youtube.com/watch?v=ILpCKQlDmhc",
  "11-10": "/Hidden/Circulatory-System-Day",
}

// Every other day, one of these is picked at random, formal of "link",
export const randomLinks: string[] = []

export const arenaEndpoint = "https://api.are.na/v3/channels/eggs-xo6kglwnkzq/contents?per=100"