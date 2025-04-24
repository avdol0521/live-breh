---
title: "Mayhem"
tags:
  - fetus
---
- https://tryhackme.com/room/mayhemroom
- mainly a wireshark room
- gave me a file called `fraffic.pcapng`
- yk what ill just give a screenshot instead of explaining the room <br>
![[MayhemTHMSS.png]]
- lets open that shit and check out the streams first
	- `stream 0`: literally nothing in it
	- `stream 1`: nothing as well
	- `stream 2`:  [[MayhemStream2]] 
	- `stream 3`: [[MayhemStream3]] 
		- seems the attacker server is `10.0.2.37` and the victim is `10.0.2.38`
		- the attacker is using a python http server to upload `notepad.exe`. suspicious ngl
	- `stream 4`: same as stream3. just with the user-agent header removed 
	- `stream 5`: [[MayhemStream5]] 
- im gonna try and see if i can get the `notepad.exe`. seems interesting since theres nothing else i could find. the ipv6 or SUID didnt show up anywhere else. the `traffic.pcapng` file only has `ipv4` traffic
- `file > export objects > http`: <br>
![[MayhemExportObjectsSS.png]]
- saved em all. tried a shitton of ways. couldnt find anything embedded. ran it with `wine` and didnt get anything. 