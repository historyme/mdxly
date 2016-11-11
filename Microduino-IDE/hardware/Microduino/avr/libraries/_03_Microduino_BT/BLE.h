/*
 * BLE.h
 *
 *  Created on: 2016年10月10日
 *      Author: ray
 */

#ifndef BLE_H_
#define BLE_H_

#if defined(ARDUINO) && ARDUINO >= 100
#include <Arduino.h>
#else
#include <WProgram.h>
#include <pins_arduino.h>
#endif

#include <SoftwareSerial.h>

class BLE {

//protected:
private:

	SoftwareSerial *SwSerial = NULL;
	HardwareSerial *HwSerial = NULL;

	/*
	 * Empty the buffer or UART RX.
	 */
	void rx_empty(void);

public:

	BLE(SoftwareSerial &uart, uint32_t baud = 9600);
	BLE(HardwareSerial &uart, uint32_t baud = 9600);

	bool ATCommand(String command, uint16_t timeOut);

	/***
	 * AT命令测试
	 * 返回：OK
	 */
	bool ATTest();

	/***设置波特率
	 * AT+BAUD[0~4]
	 0---------9600
	 1---------19200
	 2---------38400
	 3---------57600
	 4---------115200
	 Default：0（9600）
	 */
	bool setBaud(uint8_t para);

	/***设置串口校验
	 * AT+PARI[0~2]
	 0: 无校验
	 1: EVEN
	 2: ODD
	 Default: 0
	 */
	bool setPARI(uint8_t para);

	/***设置串口停止位
	 * AT+STOP[0~1]
	 0: 1 停止位
	 1: 2 停止位
	 Default: 0
	 */
	bool setSTOP(uint8_t para);

	/***设置模块工作模式
	 * AT+MODE[0~1]
	 0: 开启串口透传模式
	 1: 关闭串口透传模式
	 Default: 0
	 */
	bool setMODE(uint8_t para);

	/***设置设备名称
	 * AT+NAME[Microduino]
	 para：设备名称
	 最长11 位数字或字母，
	 含中划线和下划线，不建议用其它字符。
	 Default：Microduino
	 */
	bool setNAME(String para);

	/***
	 * 恢复默认设置
	 * AT+RENEW
	 */
	bool renew();
	/***
	 * 模块复位，重启
	 * AT+RESET
	 */
	bool reset();

	/***设置主从模式
	 * AT+ROLE[0~1]
	 1: 主设备
	 0: 从设备
	 Default: 0
	 */
	bool setROLE(uint8_t para);

	/***设置配对密码
	 * AT+PASS[12345]
	 para: 000000~999999
	 Default：000000
	 */
	bool setPASS(unsigned long para);

	/***设置模块鉴权工作类型
	 * AT+TYPE[0~1]
	 0: 连接不需要密码
	 1: 连接需要密码
	 Default: 0
	 */
	bool setTYPE(uint8_t para);

	/***
	 * 清除主设备配对信息
	 * AT+CLEAR
	 */
	bool CLEAR();

	/***设置主模式下尝试连接时间
	 * AT+TCON001000
	 para: 000000~999999
	 000000 代表持续连接，其余代表尝试的毫秒数
	 Default:001000
	 */
	bool setTimeCON(unsigned long para);

	/***改变模块发射信号强度
	 * AT+TXPW[0~3]
	 para: 0 ~ 3
	 0: 4dbm
	 1: 0dbm
	 2: -6dbm
	 3: -23dbm
	 Default: 0
	 */
	bool setEmissionSignalStrength(uint8_t para);

	/***改变模块作为ibeacon 基站广播时间间隔
	 * AT+TIBE000500
	 para: 000000～009999
	 000000 代表持续广播，其 余代表尝试的毫秒数
	 Default:000500
	 */
	bool setTIBE(unsigned long para);

	/***设置工作类型
	 * AT+IMME[0~1]
	 para:0～1
	 1: 立即工作，
	 0: 等待AT+CON或AT+CONNL 命令
	 Default:0
	 */
	bool setWorkStyle(uint8_t para);

	/***设置连接指定编号的从机
	 * AT+CONN[0~9]
	 para:可用从机序号
	 */
	bool setConnectNum(uint8_t para);

	/***
	 * 查询设备名称
	 * AT+NAME?
	 */
	bool queryNAME();

	/***
	 * 查询波特率
	 * AT+BAUD?
	 */
	bool queryBaud();

	/***
	 * 查询串口校验
	 * AT+PARI?
	 */
	bool queryPARI();

	/***
	 * 查询串口停止位
	 * AT+STOP?
	 */
	bool querySTOP();

	/***
	 * 查询模块工作模式
	 * AT+MODE?
	 */
	bool queryMODE();

	/***
	 * 查询主从模式
	 * AT+ROLE?
	 */
	bool queryROLE();

	/***
	 * 查询配对密码
	 * AT+PASS?
	 */
	bool queryPASS();

	/***
	 * 查询模块鉴权工作类型
	 * AT+TYPE?
	 */
	bool queryTYPE();

	/***
	 * 查询本机MAC地址
	 * AT+ADDR?
	 */
	bool queryADDR();

	/***连接最后一次连接成功的从设备
	 * AT+CONNL
	 返回值: L, N, E, F
	 L:连接中
	 N:空地址
	 E:连接错误
	 F:连接失败
	 */
	bool queryCONNLast();

	/***查询成功连接过的从机地址
	 * AT+RADD?
	 返回：OK+RADD:蓝牙设备MAC地址
	 最多返回10个设备地址
	 */
	bool querySuccessedADDR();

	/***查询软件版本
	 * AT+VERS?
	 返回：版本信息
	 */
	bool queryVersion();

	/***
	 * 查询尝试连接时间
	 * AT+TCON?
	 */
	bool queryTimeCON();

	/***
	 * 查询工作类型
	 * AT+IMME?
	 */
	bool queryWorkStyle();

	/***读取RSSI信号值
	 * AT+RSSI?
	 返回：OK+RSSI:[para]
	 Para:信号强度，单位为db
	 Para 是一个负数，绝对值越小说明信号强度越大
	 */
	//TODO:好像不可用
	bool searchRSSI();

	/***
	 * 查询模块作为ibeacon基站广播时间间隔
	 * AT+TIBE?
	 */
	bool queryTIBE();

	/***
	 * 查询模块发射信号强度
	 * AT+RSSI?
	 */
	bool queryEmissionSignalStrength();

	/***连接指定蓝牙地址的从设备
	 * AT+CON0017EA0923AE
	 para: MAC 地址、如: 0017EA0923AE
	 返回值: A, E, F
	 A: 连接中
	 E: 连接错误
	 F: 连接失败
	 */
	bool connectSlaver(String para);

	/***查询周围的可用蓝牙从机
	 * AT+DISC?
	 * timeOut 定时器时间
	 返回：OK+DISC:蓝牙设备MAC地址
	 最多返回10个设备地址
	 */
	bool searchAvalibleSlavers(uint16_t timeOut);

	String returnAT;

	~BLE();

};

#endif /* BLE_H_ */
