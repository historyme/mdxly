#include <Adafruit_NeoPixel.h>

Adafruit_NeoPixel strip = Adafruit_NeoPixel(1, 6, NEO_GRB + NEO_KHZ800);

void setup()
{
  strip.begin();
}

void loop()
{
  strip.setPixelColor(1-1, 255,0,0);
  strip.show();

}