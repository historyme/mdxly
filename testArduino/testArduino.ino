#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire_6(6);
DallasTemperature sensors_6(&oneWire_6);
DeviceAddress insideThermometer;
float ds18b20_6_getTemp(int w) {
  sensors_6.requestTemperatures();
  if(w==0) {return sensors_6.getTempC(insideThermometer);}
  else {return sensors_6.getTempF(insideThermometer);}
}

void setup()
{
  sensors_6.getAddress(insideThermometer, 0);
  sensors_6.setResolution(insideThermometer, 9);
}

void loop()
{
  ds18b20_6_getTemp(0);

}