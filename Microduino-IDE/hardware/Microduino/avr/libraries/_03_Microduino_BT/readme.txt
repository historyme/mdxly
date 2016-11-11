ʹ������4��5��Ҫ��BLE.h�е�
//#define ESP8266_USE_SOFTWARE_SERIAL
��Ϊ
#define ESP8266_USE_SOFTWARE_SERIAL


/*
 * BLE.h
 *
 *  Created on: 2016��10��10��
 *      Author: ray
 */

#ifndef BLE_H_
#define BLE_H_

#include <Arduino.h>

//#define ESP8266_USE_SOFTWARE_SERIAL

#ifdef ESP8266_USE_SOFTWARE_SERIAL
#include <SoftwareSerial.h>
#endif

#define  VERSION_18   		0X18
#define  VERSION_22   		0X22
#define  DEFAULT_PATTERN	3

/**
 * You can modify the macro to choose a different version
 */

#define  USER_SEL_VERSION         VERSION_22

class BLE {

//protected:
private:
#ifdef ESP8266_USE_SOFTWARE_SERIAL
	SoftwareSerial *m_puart;
#else
	HardwareSerial *m_puart;
#endif
	/*
	 * Empty the buffer or UART RX.
	 */
	void rx_empty(void);

public:

#ifdef ESP8266_USE_SOFTWARE_SERIAL

#if (USER_SEL_VERSION == VERSION_22)
	BLE(SoftwareSerial &uart, uint32_t baud = 9600);
#elif (USER_SEL_VERSION == VERSION_18)
	ESP8266(SoftwareSerial &uart, uint32_t baud = 9600);
#endif  /* #if(USER_SEL_VERSION==VERSION_22) */

#else /* HardwareSerial */

#if (USER_SEL_VERSION == VERSION_22)
	BLE(HardwareSerial &uart, uint32_t baud = 9600);
#elif (USER_SEL_VERSION == VERSION_18)
	ESP8266(HardwareSerial &uart, uint32_t baud = 9600);
#endif /* #if(USER_SEL_VERSION == VERSION_22) */

#endif /* #ifdef BLE_USE_SOFTWARE_SERIAL */

	bool ATCommand(String command, uint16_t timeOut);

	/***
	 * AT�������
	 * ���أ�OK
	 */
	bool ATTest();

	/***���ò�����
	 * AT+BAUD[0~4]
	 0---------9600
	 1---------19200
	 2---------38400
	 3---------57600
	 4---------115200
	 Default��0��9600��
	 */
	bool setBaud(uint8_t para);

	/***���ô���У��
	 * AT+PARI[0~2]
	 0: ��У��
	 1: EVEN
	 2: ODD
	 Default: 0
	 */
	bool setPARI(uint8_t para);

	/***���ô���ֹͣλ
	 * AT+STOP[0~1]
	 0: 1 ֹͣλ
	 1: 2 ֹͣλ
	 Default: 0
	 */
	bool setSTOP(uint8_t para);

	/***����ģ�鹤��ģʽ
	 * AT+MODE[0~1]
	 0: ��������͸��ģʽ
	 1: �رմ���͸��ģʽ
	 Default: 0
	 */
	bool setMODE(uint8_t para);

	/***�����豸����
	 * AT+NAME[Microduino]
	 para���豸����
	 �11 λ���ֻ���ĸ��
	 ���л��ߺ��»��ߣ��������������ַ���
	 Default��Microduino
	 */
	bool setNAME(String para);

	/***
	 * �ָ�Ĭ������
	 * AT+RENEW
	 */
	bool renew();
	/***
	 * ģ�鸴λ������
	 * AT+RESET
	 */
	bool reset();

	/***��������ģʽ
	 * AT+ROLE[0~1]
	 1: ���豸
	 0: ���豸
	 Default: 0
	 */
	bool setROLE(uint8_t para);

	/***�����������
	 * AT+PASS[12345]
	 para: 000000~999999
	 Default��000000
	 */
	bool setPASS(unsigned long para);

	/***����ģ���Ȩ��������
	 * AT+TYPE[0~1]
	 0: ���Ӳ���Ҫ����
	 1: ������Ҫ����
	 Default: 0
	 */
	bool setTYPE(uint8_t para);

	/***
	 * ������豸�����Ϣ
	 * AT+CLEAR
	 */
	bool CLEAR();

	/***������ģʽ�³�������ʱ��
	 * AT+TCON001000
	 para: 000000~999999
	 000000 ����������ӣ���������Եĺ�����
	 Default:001000
	 */
	bool setTimeCON(unsigned long para);

	/***�ı�ģ�鷢���ź�ǿ��
	 * AT+TXPW[0~3]
	 para: 0 ~ 3
	 0: 4dbm
	 1: 0dbm
	 2: -6dbm
	 3: -23dbm
	 Default: 0
	 */
	bool setEmissionSignalStrength(uint8_t para);

	/***�ı�ģ����Ϊibeacon ��վ�㲥ʱ����
	 * AT+TIBE000500
	 para: 000000��009999
	 000000 ��������㲥���� ������Եĺ�����
	 Default:000500
	 */
	bool setTIBE(unsigned long para);

	/***���ù�������
	 * AT+IMME[0~1]
	 para:0��1
	 1: ����������
	 0: �ȴ�AT+CON��AT+CONNL ����
	 Default:0
	 */
	bool setWorkStyle(uint8_t para);

	/***��������ָ����ŵĴӻ�
	 * AT+CONN[0~9]
	 para:���ôӻ����
	 */
	bool setConnectNum(uint8_t para);


	/***
	 * ��ѯ�豸����
	 * AT+NAME?
	 */
	bool queryNAME();

	/***
	 * ��ѯ������
	 * AT+BAUD?
	 */
	bool queryBaud();

	/***
	 * ��ѯ����У��
	 * AT+PARI?
	 */
	bool queryPARI();

	/***
	 * ��ѯ����ֹͣλ
	 * AT+STOP?
	 */
	bool querySTOP();

	/***
	 * ��ѯģ�鹤��ģʽ
	 * AT+MODE?
	 */
	bool queryMODE();

	/***
	 * ��ѯ����ģʽ
	 * AT+ROLE?
	 */
	bool queryROLE();

	/***
	 * ��ѯ�������
	 * AT+PASS?
	 */
	bool queryPASS();

	/***
	 * ��ѯģ���Ȩ��������
	 * AT+TYPE?
	 */
	bool queryTYPE();

	/***
	 * ��ѯ����MAC��ַ
	 * AT+ADDR?
	 */
	bool queryADDR();

	/***�������һ�����ӳɹ��Ĵ��豸
	 * AT+CONNL
	 ����ֵ: L, N, E, F
	 L:������
	 N:�յ�ַ
	 E:���Ӵ���
	 F:����ʧ��
	 */
	bool queryCONNLast();

	/***��ѯ�ɹ����ӹ��Ĵӻ���ַ
	 * AT+RADD?
	 ���أ�OK+RADD:�����豸MAC��ַ
	 ��෵��10���豸��ַ
	 */
	bool querySuccessedADDR();

	/***��ѯ����汾
	 * AT+VERS?
	 ���أ��汾��Ϣ
	 */
	bool queryVersion();

	/***
	 * ��ѯ��������ʱ��
	 * AT+TCON?
	 */
	bool queryTimeCON();

	/***
	 * ��ѯ��������
	 * AT+IMME?
	 */
	bool queryWorkStyle();

	/***��ȡRSSI�ź�ֵ
	 * AT+RSSI?
	 ���أ�OK+RSSI:[para]
	 Para:�ź�ǿ�ȣ���λΪdb
	 Para ��һ������������ֵԽС˵���ź�ǿ��Խ��
	 */
	//TODO:���񲻿���
	bool searchRSSI();

	/***
	 * ��ѯģ����Ϊibeacon��վ�㲥ʱ����
	 * AT+TIBE?
	 */
	bool queryTIBE();

	/***
	 * ��ѯģ�鷢���ź�ǿ��
	 * AT+RSSI?
	 */
	bool queryEmissionSignalStrength();

	/***����ָ��������ַ�Ĵ��豸
	 * AT+CON0017EA0923AE
	 para: MAC ��ַ����: 0017EA0923AE
	 ����ֵ: A, E, F
	 A: ������
	 E: ���Ӵ���
	 F: ����ʧ��
	 */
	bool connectSlaver(String para);


	/***��ѯ��Χ�Ŀ��������ӻ�
	 * AT+DISC?
	 * timeOut ��ʱ��ʱ��
	 ���أ�OK+DISC:�����豸MAC��ַ
	 ��෵��10���豸��ַ
	 */
	bool searchAvalibleSlavers(uint16_t timeOut);

	String returnAT;

	~BLE();

};

#endif /* BLE_H_ */
