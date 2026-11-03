---
title: "Electronics basics"
tags:
  - fetus
---
using gobeshona academy's free course as a general guide for this and googling everything that interests me. ill keep a note with chapters and then make a final comprehensive note after im done with the course probably idk
# Chapters: 
## Circuit basics
### the general idea:
- controlling the flow electrons to do work, such as powering a light bulb or using small currents and voltages to send/receive various signals to make components do stuff
![[Electronics basics-current, voltage & resistence.png|728]]
### basic electronics components, what they look like and what they do:
#### resistors
limits current. resistor types: linear and non-linear resistors.

linear resistors strictly obey ohm's V=IR law and have a constant resistance value. used for current limiting, voltage division etc.

non linear resistors dont strictly obey ohm's law. The resistance value doesnt stay constant and changes with voltagem temperature or light. used for circuit protection, sensing, signal regulation etc.

gonna list out some linear resistor categories and then move onto non-linear ones below. heres an image to sum everything up for future me:
![[Electronics basics-resistors.png|1227]]
##### fixed resistors
has a fixed resistance value, hence the category name. has codes on it to indicate the resistence and tends to look like this:
![[resistor_codes.png|639]]
tolerance ratings specify how much the resistance value deviates. _Example:_ A 1,000 Ω resistor with a **±5%** tolerance can measure anywhere from **950 Ω to 1,050 Ω**

lots of different types of fixed resistors. common ones ill probably end up using:
- carbon composition
	- basically just some carbon dust (graphite) and some clay/ceramic binder\
- carbon film
	- a ceramic rod is coated with carbon and then spiraling grooves are added to adjust the length electrons have to travel through the carbon, which increases/decreases resistence based on path length. ranges from 1 ohm to 10M ohms. tolerance usually around 5%
- metal film 
	- similar to the carbon film resistor. uses metal film instead of carbon. tolerance is around 0.5 to 1%. very low electrical noise compared to carbon film resistors. has 5 bands instead of 4 like the carbon film resistors and is usually blue/light blue instead of brownish
- SMD
	- has contact pads on both sides and are soldered onto PCBs directly. has 3 or 4 digit values printed on top to designate ohms. 
	- how to read SMDs
		- 3 digit codes: first 2 digits are normal numbers. 3rd digit is the 10 multiplier. example: 824: 82 x $10^4$ = 820k ohms
		- 4 digit codes: first 3 digits are normal numbers and the fourth digit is the 10 multiplier. 
	- codes sometimes uses letters as well. see images below to see how to read 
![[Electronics basics-SMD_code_reading.png|589]]

##### variable resistors / potentiometers
self explanatory. resistance can be adjusted if needed. what it looks like how it works:
![[Electronics basics-variable_resistor.png|376]]
![[variable_resistor_2d.png|376]]
the slider pin is what we read from. we get different readings depending on where the control shaft is on the track. higher voltages need variable resistors with higher ohm ratings. lots of different types of pots. here's some for example:
![[Electronics basics-potentiometer_examples.png|703]]
##### non-linear resistors 