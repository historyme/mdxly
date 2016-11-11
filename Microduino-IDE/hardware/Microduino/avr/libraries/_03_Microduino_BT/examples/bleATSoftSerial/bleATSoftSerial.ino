#include <BLE.h>

SoftwareSerial bleSerial(4, 5); // RX, TX

BLE bleAT(bleSerial);

void setup() {
	Serial.begin(9600);

	bleAT.queryROLE();
	bleAT.queryVersion();
	bleAT.querySuccessedADDR();

	if (bleAT.searchRSSI()) {
		Serial.println("successfull rssi");
	} else {
		Serial.println("error rssi");
	}

	if (bleAT.searchAvalibleSlavers(3000)) {
		Serial.println("successfull av slavers");
	} else {
		Serial.println("error av slavers");
	}

	uint8_t length = bleAT.returnAT.length();
	for (uint8_t i = 0; i < length; i++) {
		Serial.print(bleAT.returnAT[i]);
	}

}

void loop() {

}

