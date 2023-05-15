# Dream of songs

## Summary:
* A javascript platformer where you collect song scraps from my life !

* Big thanks to [MainLoop.js](https://github.com/IceCreamYou/MainLoop.js), [Online Audio Converter](https://online-audio-converter.com/), [mutagen](https://mutagen.readthedocs.io), [JSZip](https://stuk.github.io/jszip/), [FileSaver](https://github.com/eligrey/FileSaver.js), [ipinfo](https://ipinfo.io), [MediaHuman Audio Converter](https://www.mediahuman.com/audio-converter/), [Random Compat](https://github.com/paragonie/random_compat) library and of course [Stackoverflow](https://stackoverflow.com)

## Development

- Change urls in config.js
- Uncomment js import code in index.php and comment dreamofsongs.min.js line
- Open index.php file with browser

If you add a new js file, and the order of the file read matters, you can add it manually in Gruntfile.js for the minification (default just reads all new files at the end).

### Developing and needing music download capability

- Run `grunt connect` to start a server
- Change path in Gruntfile.js if needed to encompass the audio files
- Change SONGURL in config.js to match, e.g. '../../Music_for_dream_of_songs/'
- Change index.php to index.html so it is served
- Go to localhost:9001 and browse to folder with index.html to get the game

### Developing needing php

- php -S localhost:8000
