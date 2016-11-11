/*
 * BLE.cpp
 *
 *  Created on: 2016年10月10日
 *      Author: ray
 */

#include "BLE.h"

BLE::BLE(SoftwareSerial &uart, uint32_t baud) :
		SwSerial(&uart) {
	SwSerial->begin(baud);
	rx_empty();
}

BLE::BLE(HardwareSerial &uart, uint32_t baud) :
		HwSerial(&uart) {
	HwSerial->begin(baud);
	rx_empty();
}

void BLE::rx_empty(void) {

	if (SwSerial) {
		while (SwSerial->available() > 0) {
			SwSerial->read();
		}
	} else {
		while (HwSerial->available() > 0) {
			HwSerial->read();
		}
	}

}

bool BLE::ATCommand(String command, uint16_t timeOut) {

	if (SwSerial) {
		SwSerial->print(command);
		SwSerial->print("\r\n");
	} else {
		HwSerial->print(command);
		HwSerial->print("\r\n");
	}

	delay(500);

	String returnState;

	long time_out = millis();
	while (1) {

		if (SwSerial) {
			if (SwSerial->available() > 0) {
				char c = SwSerial->read();
				returnAT += c;
				returnState += c;
				//Serial.print(c);
				if (c == '\n') {
					returnState.trim();
					if (returnState == "ERROR") {
						return false;
					}
				}
			}
		} else {
			if (HwSerial->available() > 0) {
				char c = HwSerial->read();
				returnAT += c;
				returnState += c;
				//Serial.print(c);
				if (c == '\n') {
					returnState.trim();
					if (returnState == "ERROR") {
						return false;
					}
				}
			}
		}

		if (millis() - time_out >= timeOut) //超时
				{
			break;
		}
	}
	return true;
}

bool BLE::ATTest() {
	return ATCommand("AT", 20);
}

bool BLE::queryBaud() {
	return ATCommand("AT+BAUD?", 20);
}

bool BLE::setBaud(uint8_t para) {
	String AT = "AT+BAUD";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryPARI() {
	return ATCommand("AT+PARI?", 20);
}

bool BLE::setPARI(uint8_t para) {
	String AT = "AT+PARI";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::querySTOP() {
	return ATCommand("AT+STOP?", 20);
}

bool BLE::setSTOP(uint8_t para) {
	String AT = "AT+STOP";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryMODE() {
	return ATCommand("AT+MODE?", 20);
}

bool BLE::setMODE(uint8_t para) {
	String AT = "AT+MODE";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryNAME() {
	return ATCommand("AT+NAME?", 20);
}

bool BLE::setNAME(String para) {
	String AT = "AT+NAME";
	if (para.length() > 11) {
		para = para.substring(0, 11);
	}
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::renew() {
	return ATCommand("AT+RENEW", 20);
}
bool BLE::reset() {
	return ATCommand("AT+RESET", 20);
}

bool BLE::queryROLE() {
	return ATCommand("AT+ROLE?", 20);
}

bool BLE::setROLE(uint8_t para) {
	String AT = "AT+ROLE";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryPASS() {
	return ATCommand("AT+PASS?", 20);
}

bool BLE::setPASS(unsigned long para) {
	String AT = "AT+PASS";
	if (para <= 999999) {
		AT += para;
		return ATCommand(AT, 20);
	} else {
		return false;
	}
}

bool BLE::queryTYPE() {
	return ATCommand("AT+TYPE?", 20);
}

bool BLE::setTYPE(uint8_t para) {
	String AT = "AT+TYPE";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryADDR() {
	return ATCommand("AT+ADDR?", 20);
}

bool BLE::queryCONNLast() {
	return ATCommand("AT+CONNL", 5000);
}

bool BLE::connectSlaver(String para) {
	String AT = "AT+CON";
	AT += para;
	return ATCommand(AT, 5000);
}

bool BLE::CLEAR() {
	return ATCommand("AT+CLEAR", 20);
}

//TODO:Test
bool BLE::querySuccessedADDR() {
	return ATCommand("AT+RADD?", 20);
}

bool BLE::queryVersion() {
	return ATCommand("AT+VERS?", 20);
}

bool BLE::queryTimeCON() {
	return ATCommand("AT+TCON?", 20);
}

bool BLE::setTimeCON(unsigned long para) {
	String AT = "AT+TCON";
	if (para <= 999999) {
		AT += para;
		return ATCommand(AT, 20);
	} else {
		return false;
	}
}

bool BLE::searchRSSI() {
	return ATCommand("AT+RSSI?", 20);
}

bool BLE::queryEmissionSignalStrength() {
	return ATCommand("AT+TXPW?", 20);
}

bool BLE::setEmissionSignalStrength(uint8_t para) {
	String AT = "AT+TXPW";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::queryTIBE() {
	return ATCommand("AT+TIBE?", 20);
}

bool BLE::setTIBE(unsigned long para) {
	String AT = "AT+TIBE";
	if (para <= 999999) {
		AT += para;
		return ATCommand(AT, 20);
	} else {
		return false;
	}
}

bool BLE::queryWorkStyle() {
	return ATCommand("AT+IMME?", 20);
}

bool BLE::setWorkStyle(uint8_t para) {
	String AT = "AT+IMME";
	AT += para;
	return ATCommand(AT, 20);
}

bool BLE::searchAvalibleSlavers(uint16_t timeOut) {
	return ATCommand("AT+DISC?", timeOut);
}

bool BLE::setConnectNum(uint8_t para) {
	String AT = "AT+CONN";
	AT += para;
	return ATCommand(AT, 20);
}

BLE::~BLE() {
}

