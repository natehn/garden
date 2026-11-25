// Special days: "MM-DD" -> URL (checked first)
export const specialDays: Record<string, string> = {
  "04-14": "/Hidden/Avril-14th",
  "11-10": "/Hidden/Circulatory-System-Day",
}

// Every other day, one of these is picked at random, formal of "link",
export const randomLinks: string[] = []

export const arenaEndpoint = "https://api.are.na/v3/channels/eggs-xo6kglwnkzq/contents?per=100"