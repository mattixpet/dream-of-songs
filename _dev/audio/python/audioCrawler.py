# Python 3 script to go through the audio files representing my song scraps
# and extract the relevant information to output them as a javascript file
# to be used by the game Dream of Songs (which is written in javascript)

# Here's the format of the javascript file output:
# 
# // Data for audio
#
# (function () {
#
# 'use strict';
#
# var audio_data = [
#     // format
#     // {
#     //      'name' : readable song name, (string)
#     //      'url' : 'relative path of file',
#     //      'year' : closest we have to year of creation, (integer)
#     //      'duration' : duration in minutes:seconds, (string)
#     //      'cover' : boolean
#     //  }, etc.
#     // Where name is a readable name as a string
#     // url is the path to the file usable on a domain (e.g. matthiaspetursson.com/songs/url)
#     // Year is the closest I could find to the actual year I created the song
#     // Cover indicates if the song was written by someone else (true if so)
#     // e.g.
#     {
#       'name' : 'american_psycho',
#       'url' : 'Lelegar_upptokur/amr/2014/american_psycho.mp3',
#       'year' : 2014,
#       'duration': '3:14'
#       'cover' : false
#     },
#     ..
# ];
#
# global.set('audio-data', audio_data);
#
# }());

import os
import re
from datetime import datetime

# local config info
rootPath = '..\\..\\..\\..\\..\\Music_for_dream_of_songs'
outputFile = '..\\..\\..\\js\\data\\audio-data.js'


header = '// Data for audio\
\n\
\n(function () {\
\n\
\n\'use strict\';\
\n\
\nvar audio_data = [\
\n\t// format\
\n\t// {\
\n\t//     \'name\' : readable song name, (string)\
\n\t//     \'url\' : \'relative path of file\',\
\n\t//     \'year\' : closest we have to year of creation, (integer)\
\n\t//     \'duration\' : duration in minutes:seconds, (string)\
\n\t//     \'cover\' : boolean\
\n\t// }, etc.\
\n\t// Where name is a readable name as a string\
\n\t// url is the path to the file usable on a domain (e.g. matthiaspetursson.com/songs/url)\
\n\t// Year is the closest I could find to the actual year I created the song\
\n\t// Duration is the duration of the song in minutes:seconds as a string\
\n\t// Cover indicates if the song was written by someone else (true if so)\
\n\t// e.g.'

footer = '\n];\
\n\
\nglobal.set(\'audio-data\', audio_data);\
\n\
\n}());'

# songList is an array of objects {'songName':name, 'songUrl':url, 'songYear':year, songCover:True/False}
# this outputs it to a javascript file, outputFile as described in the top of this file
def outputToJsFile(songList):
    import codecs
    out = header
    
    for song in songList:
        out += '\n\t{'
        out += '\n\t\t\'name\' : \'' + song['songName'] + '\','
        out += '\n\t\t\'url\' : \'' + song['songUrl'] + '\','
        out += '\n\t\t\'year\' : ' + str(song['songYear']) + ','
        out += '\n\t\t\'duration\' : \'' + song['songDuration'] + '\','
        out += '\n\t\t\'cover\' : ' + str(song['songCover']).lower()
        out += '\n\t},'

    out = out[:-1] # remove last trailing comma

    out += footer
    with codecs.open(outputFile, 'w', 'utf-8') as f:
        f.write(out)

# Uses mutagen to get duration of the song and returns it as
# string minutes:seconds
def getDuration(fullSongPath):
    from mutagen.mp3 import MP3
    durationS = MP3(fullSongPath).info.length
    mins = int(durationS / 60)
    secs = int(durationS % 60)
    return '{}:{}'.format(mins, secs if len(str(secs)) > 1 else '0{}'.format(secs))

# Looks through filename and folders in path for a year
# Also looks at date modified.
# Returns the lowest year it can find (that should be the correct/most impressive one)
def extractYear(fullSongPath):
    # check filename for possible years
    pathYears = [int(year) for year in re.findall(r'20\d\d', fullSongPath)]
    # check date modified
    dateModified = os.path.getmtime(fullSongPath)
    dateYear = int(datetime.utcfromtimestamp(dateModified).strftime('%Y'))

    years = pathYears # must be nicer way to do this lol, doesn't matter
    years.append(dateYear)

    return min(years)

# get's rid of whitespace surrounding name
# and annoying '2017_12_05_..' etc. which some of the more recent songs have
def trimName(song):
    match = re.search(r'^(\d+_)+(\d\d)?', song)
    if match:
        return song[match.end():].strip()
    return song.strip()

def processSong(folders, filename):
    songPath = os.path.join(folders, filename + '.mp3')
    fullSongPath = os.path.join(rootPath, songPath)

    songName = trimName(filename)
    songUrl = songPath.replace('\\','/')
    songYear = extractYear(fullSongPath)
    songDuration = getDuration(fullSongPath)
    songCover = '(cover)' in filename

    return {'songName' : songName, 'songUrl' : songUrl, 'songYear' : songYear, 'songDuration' : songDuration, 'songCover' : songCover}


# dirpath is the path for the filenames (e.g. dirpath/filename)
# filenames is an array of filenames
# Returns an array of objects representing each file, and including all relevant
#   information we need to create our javascript file.
def handleFiles(dirpath, filenames):
    # the path we're interested in and will use for our final output
    relevantPath = dirpath.split(rootPath + os.path.sep)[1]

    songs = []
    for file in filenames:
        filename, extension = os.path.splitext(file)
        if extension == '.mp3':
            songs.append(processSong(relevantPath, filename))
    return songs

def main():
    print('Starting audio crawl of folder: {}'.format(rootPath))

    songList = []
    for (dirpath, dirnames, filenames) in os.walk(rootPath):
        if filenames:
            songList.extend(handleFiles(dirpath, filenames))

    print('Finished crawl of a total of {} songs'.format(len(songList)))

    outputToJsFile(songList)

    print('Successful output to {}'.format(outputFile))


if __name__ == '__main__':
    main()