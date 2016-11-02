#include <Rtc_Pcf8563.h>
Rtc_Pcf8563 rtc;

DateTime dateTime = {15, 10, 5, 1, 10, 5, 0};

void setup()
{
  rtc.begin();

  rtc.clearAll();
rtc.setDateTime(dateTime);

  Serial.begin(9600);
}

void loop()
{
  rtc.formatTime();
  rtc.formatDate();
  DateTime dateTime = rtc.getDateTime();
  Serial.println(dateTime.year);
  Serial.println(dateTime.month);
  Serial.println(dateTime.day);
  Serial.println(dateTime.hour);
  Serial.println(dateTime.minute);
  Serial.println(dateTime.second);
  delay(1000);

}