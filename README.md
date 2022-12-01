# restaurant

This project marked a turning point for my learning as I found myself bogged down by indecision regarding aesthetics, even after overcoming the largest JavaScript hurdles. After getting some advice from my learning fellows on Discord, I decided to not put so much energy into creating a realistic site considering the more important element was learning how to utilise Webpack and modules.

There are a few design choices I'd like to call out: 
- Due to ambiguous instructions on this assignment, I decided to keep the index.js file free of functions, and kept script for drawing the page's general layout in homeScreen.js. I realise I could have included the layout script in index.js instead, but the cost/benefit seemed insignificant at the time. 

- I revisited the Object constructor / Classes from the library assignment for building my menu. As shown in my commented-out code, I started with a constructor for Pizza objects, which then populated a Menu array, which was iterated to add the pizza name and descriptions to the the DOM. I pared it down by just manually filling the Menu array, but my first run could be useful in the future to allow menu edits without the need to open the JS file.