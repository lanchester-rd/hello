# Quiet Place (QuietFinder)

QuietFinder is a personalized map application designed to help you discover the perfect "vibe" for your day. Whether you need a silent corner to study or a bustling, famous landmark to visit, this app recalculates the city map to match your specific personality.

## 1. What is it?
It is a specialized search tool built on top of Google Maps. Unlike a standard search that just shows you everything, QuietFinder acts as a smart filter that prioritizes locations based on how peaceful or popular they are.

## 2. What does it do?
- **Finds "Peace"**: It hides the massive, tourist-heavy spots and shows you "Hidden Gems" (local cafes, quiet parks, or libraries) that usually get buried in search results.
- **Custom Ranking**: It doesn't just list spots alphabetically; it uses a custom scoring system to put the "best spots for you" at the very top of the list.
- **Checks the Atmosphere**: It looks at more than just the location—it checks if it’s raining, if the air quality is bad, or if there is high pollen, and tells you if you should maybe pick an indoor spot instead.

## 3. How does it do it? (The Tech)
The app uses a combination of data sources and a custom "Ranking Brain":

- **The Busyness Proxy**: Since Google doesn't share "Live Busyness" data with apps yet, we use Total Review Count as a proxy.
  - **Logic**: A spot with 50,000 reviews is almost certainly loud and crowded. A spot with 40 reviews is likely a quiet, local secret.
- **Parallel Exploration**: When you click "Search," the app runs multiple "batches" of searches at once (one for cafes/work, one for parks/museums). This bypasses Google's usual limits so we can analyze up to 60+ spots in your area before showing you the best ones.
- **The "Scoring Brain"**: Every location gets a score from 1 to 100 based on your settings:
  - **Stars (Quality)**: We look at the Google Rating (e.g., 4.5 Stars).
  - **Peace (Popularity)**: We subtract points if a place is too crowded based on your "Avoid Busy Crowds" setting.
  - **Environment**: We apply "penalties." (For example: If it's raining and you want a "Quiet" vibe, we lower the score of outdoor parks so you find a cozy library instead).
- **Visual 5-Person Scale**: Instead of showing you scary numbers, the app converts everything into a row of 5 person icons. 1 icon = Hidden Gem. 5 icons = Very Busy.

In short: QuietFinder takes the "noise" of a big city and filters it down into a list of places that actually fit how you’re feeling.
