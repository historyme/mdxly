/*
 * number.h
 *
 *  Created on: 2017年3月11日
 *      Author: ray
 *  / /A/ /
 *  F     B
 *  / /G/ /
 *  E     C
 *  / /D/ /  /P
 */

#ifndef NUMBER_H_
#define NUMBER_H_


#include <Wire.h>    // Required for I2C communication
#include <PCF8574.h> // Required for PCF8574

class NumberTube {
private:

  PCF8574 expander;

  uint8_t n_Data[10] = {
    B01011111, B01010000, B00111011, B01111010, B01110100, B01101110, B01101111, B01011000, B01111111, B01111110
  };

public:
  NumberTube() {
  }
  enum n_Num {
    n_E,
    n_D,
    n_F,
    n_A,
    n_B,
    n_G,
    n_C,
    n_P,
    CLR = 127,
    FULL
  };

  void setAddr(uint8_t _addr) {
    expander.begin(_addr);
    for (int a = 0; a < 8; a++) {
      expander.pinMode(a, OUTPUT);
    }
  }

  void numberWrite(uint8_t _num, boolean _sta = true) {
    if (_num == FULL) {
      expander.write(0x00);
      return;
    }
    if (_num == CLR) {
      expander.write(0xFF);
      return;
    }
    expander.digitalWrite(_num, !_sta);
  }

  void numberPrint(uint8_t _num, boolean staPoint) {
    uint8_t _data = n_Data[_num];
    staPoint ?  _data |= B10000000 :  _data |= B00000000;
    expander.write(~_data);
  }

  ~NumberTube() {
  }

};

#endif /* NUMBER_H_ */











/*


#include <Wire.h>    // Required for I2C communication
#include <PCF8574.h> // Required for PCF8574
PCF8574 expander;



enum n_Num {
  n_E,
  n_D,
  n_F,
  n_A,
  n_B,
  n_G,
  n_C,
  n_P,
  CLR = 127,
  FULL
};

uint8_t n_Data[10] = {
  B01011111, B01010000, B00111011, B01111010, B01110100, B01101110, B01101111, B01011000, B01111111, B01111110
};

void numberBegin(uint8_t _addr) {
  expander.begin(_addr);
  for (int a = 0; a < 8; a++) {
    expander.pinMode(a, OUTPUT);
  }
}

void numberWrite(uint8_t _num, boolean _sta = true) {
  if (_num == FULL) {
    expander.write(0x00);
    return;
  }
  if (_num == CLR) {
    expander.write(0xFF);
    return;
  }

  expander.digitalWrite(_num, !_sta);
}

void numberPrint(uint8_t _num, boolean staPoint) {
  uint8_t _data = n_Data[_num];
  staPoint ?  _data |= B10000000 :  _data |= B00000000;
  expander.write(~_data);
}

*/