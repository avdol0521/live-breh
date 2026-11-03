---
title: "Arduino Basics"
tags:
  - fetus
---
- using an Arduino Uno R4 Wifi for this 
- downloaded and installed Arduino IDE and installed the R4 board. theres alot of example sketches under File>Examples, the LED Matrix ones are pretty fun
### cheatsheet
- keeping everything here at the top. the list will grow as i learn more ig we'll see 

| function         | parameters                                       |
| ---------------- | ------------------------------------------------ |
| `pinMode()`      | `pinNumber`: `13`<br>`pinMode`: `INPUT`/`OUTPUT` |
| `digitalWrite()` | `pinNumber`: `13`<br>`value`: `HIGH`/`LOW`       |
| `delay()`        | `value`: `1000` (milliseconds)                   |

### pin basics
- uses c++ or embedded c for the code 
- code has 2 main parts, `void setup() {}` and `void loop() {}`. pretty self explanatory
- pins on the arduino can be used as inputs and outputs. can set the mode with the `pinMode()` function. 
	- `pinmode()` takes 2 parameters, `pinNumber` and `pinMode`
		- `pinMode` can be set to `OUTPUT`, `INPUT` or `INPUT_PULLUP`
		- `INPUT_PULLUP` basically keeps the pin on a positive `HIGH` voltage via an internal resistor when idle. `INPUT` does not and relies on external voltage applied so its prone to picking up stray electrical noise and causing random `HIGH` & `LOW` readings if nothing is connected
	- pin 13 is already hooked into the led beside it. setting it to output mode by doing `pinMode(13, OUTPUT);` (inside `void setup() {}`)
- 2 types of pins, digital and analog
	- digital pins handle a binary value of either `HIGH (5V)` or `LOW (0V)`
	- analog pins can read and write a range of voltages
		- analog pins can be used as digital pins but not the other way around
- `digitalWrite()` also takes 2 parameters and sets a `HIGH` or `LOW` value to a digital pin
	- setting pin 13 to a perpetual `HIGH` value for a constant LED: `digitalWrite(13, HIGH);` (inside `void loop() {}`)
- pin13 is now keeping the LED on :D (the green one is the power led)
![[pin13LED.jpg|677]]
- `delay()` takes in an integer of milliseconds and waits. made the led blink
```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```
- `18ms` seems to be the lowest perceivable blink delay. any lower isn't feasable
### breadboard circuit building
- each gpio pin can supply upto `8mA` of current safely. 
### screen setup and functionality:
- https://newbiely.com/tutorials/arduino-uno-r4/arduino-uno-r4-tft-lcd-display
#### moving circle:
```cpp
#include <DIYables_TFT_Shield.h>

#define BLACK     DIYables_TFT::colorRGB(0, 0, 0)
#define BLUE      DIYables_TFT::colorRGB(0, 0, 255)
#define RED       DIYables_TFT::colorRGB(255, 0, 0)
#define GREEN     DIYables_TFT::colorRGB(0, 255, 0)
#define ORANGE    DIYables_TFT::colorRGB(255, 165, 0)
#define PINK      DIYables_TFT::colorRGB(255, 192, 203)
#define VIOLET    DIYables_TFT::colorRGB(148, 0, 211)
#define TURQUOISE DIYables_TFT::colorRGB(64, 224, 208)
#define WHITE     DIYables_TFT::colorRGB(255, 255, 255)

DIYables_TFT_ILI9486_Shield TFT_display;

void setup() {
  TFT_display.begin();
  TFT_display.setRotation(1);  // Landscape: 480x320
} 

void loop() {
  TFT_display.fillScreen(BLACK);
  for (int i = -40; i < 520; i++) {
    TFT_display.drawCircle(i, 60, 40, RED);
    delay(10);
    TFT_display.drawCircle(i, 60, 40, BLACK);
  }
}
```
#### text:
```cpp
#include <DIYables_TFT_Shield.h>

#define MAGENTA   DIYables_TFT::colorRGB(255, 0, 255)
#define WHITE     DIYables_TFT::colorRGB(255, 255, 255)
#define BLACK     DIYables_TFT::colorRGB(0, 0, 0) 

DIYables_TFT_ILI9486_Shield TFT_display;

void setup() {
  Serial.println(F("Arduino TFT LCD Display - show text and float number"));
  TFT_display.begin();
  TFT_display.setRotation(3);
  TFT_display.fillScreen(BLACK);

  TFT_display.setTextColor(MAGENTA);
  TFT_display.setTextSize(3);

  float ctemperature = 55.5;
  float gtemperature = 20.7;

  TFT_display.setCursor(20, 20);    // Set cursor position (x, y)
  TFT_display.print("CPU Temperature: ");
  TFT_display.print(ctemperature, 1);  // Print cpu temp with 1 decimal place
  TFT_display.print(char(247));
  TFT_display.println("C");

  TFT_display.setCursor(20, 60);
  TFT_display.print("GPU Temperature: ");
  TFT_display.print(gtemperature, 1);
  TFT_display.print(char(247));
  TFT_display.println("C");
} 

void loop(void) {
}
```