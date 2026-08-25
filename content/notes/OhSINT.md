---
title: "OhSINT"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/ohsint
# start 
- downloaded the task file: <br>
![[taskfile.jpg]]
- :0 classic windows wallpaper <3
## THM Q1: `What is this user's avatar of?`
- hmmmm user and an avatar
- ran exiftool on the image:
```sh
ExifTool Version Number         : 13.25
File Name                       : taskfile.jpg
Directory                       : .
File Size                       : 234 kB
File Modification Date/Time     : 2019:03:04 12:03:37-05:00
File Access Date/Time           : 2025:07:10 18:09:41-04:00
File Inode Change Date/Time     : 2025:07:10 18:09:40-04:00
File Permissions                : -rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
XMP Toolkit                     : Image::ExifTool 11.27
GPS Latitude                    : 54 deg 17' 41.27" N
GPS Longitude                   : 2 deg 15' 1.33" W
Copyright                       : OWoodflint
Image Width                     : 1920
Image Height                    : 1080
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 1920x1080
Megapixels                      : 2.1
GPS Latitude Ref                : North
GPS Longitude Ref               : West
GPS Position                    : 54 deg 17' 41.27" N, 2 deg 15' 1.33" W
```
- the copyright holder is `OWoodflint`. lets dork it with `intext:"OWoodflint"`: <br> ![[OhSINTDorkResultOWoodFlint.png]]
- 3 sites:
	- https://github.com/OWoodfl1nt/people_finder
	- https://x.com/owoodflint?lang=en
	- https://oliverwoodflint.wordpress.com/author/owoodflint/
- twitter avatar is a `cat`:<br>
![[OhSINTTwitterSS.png]]
- extra info to keep in my pocket:
```sh
Bssid: B4:5D:50:AA:86:41
```
## THM Q2: `What city is this person in?`
- well I'll start with the GPS location i got from [[exiftool]]: `54 deg 17' 41.27" N, 2 deg 15' 1.33" W`
- pasted it in here and got a location: https://www.stolaf.edu/people/hansonr/longlat.htm: <br>
![[OhSINTgpsLocationEnumSS.png]]
<br>
```
N54 17 41.27
W2 15 1.33
```
- was a wild goose. no point in pursuing this further. the hint says `BSSID + Wigle.net`. :D WIGLE MY LOVE yayy lets go to wigle. its been so long since my last wardrive xD
- wigle result: <br>
![[OhSINTWigleAdvancedResult.png]]
- you know what im feeling lazy ill just do a normal wigle search instead of pasting in the positions again ¯\\\_(ツ)\_/¯ <br>
![[OhSINTWigleNormalSearchResultSS.png]]
- dude's located in `london`
## THM Q3: `What is the SSID of the WAP he connected to?`
- ssid found from the wigle advanced search i did at first: `UnileverWiFi`
## THM Q4: `What is his personal email address?`
- well. lets check the other sites:
- github: <br>
![[OhSINTGithubRepoSS.png]]
- user only has one repo. email is `[OWoodflint@gmail.com](mailto:OWoodflint@gmail.com)`
- _sighs_ could've just checked the github repo for the location (￣_￣|||)
## THM Q5: `What site did you find his email address on?`
- `github` ¯\\\_(ツ)\_/¯
## THM Q6: `Where has he gone on holiday?`
- lets check the wordpress site: <br>
![[OhSINTWPSiteSS.png]]
- he's at `New York` on holiday it seems
## THM Q7: `What is the person's password?`
- checked everywhere else other than the source code of the WP site. the hint says to check the source as well sooo here goes nothing
- found the pass at line `229`:<br>
![[OhSINTSourcePassFoundSS.png]]
- pass is `pennYDr0pper.!` :D
# end
welp that was easy :/ i need more difficulty smh. the [[Cicada-3301_Vol-1]] room was way more fun -,- at least i got the badge ig