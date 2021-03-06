'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


Blockly.Arduino.bluetoothMicroduinoBegin = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_Software'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['define_blueReciveInfo'] = 'String currentInfo="";';

  
  if(dropdown_pin=='2') {
    Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial mySerial(4, 5);';
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial  mySerial'; 
    Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);'; 
  }
  else if(dropdown_pin=='1'){
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial Serial1';
    Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);';
  } else {
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial Serial';

  }
  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.bluetoothMicroduinoReciver = function() {

var branch = Blockly.Arduino.statementToCode(this, 'reciverDataInput');

  var code = 'if (my_Serial.available() > 0) { \n';
  code+=" currentInfo = my_Serial.readStringUntil('\\n');\n";
  code+=branch;
  code+='}\n';
  return code;
};



Blockly.Arduino.btMicroduinoReciverData = function() {

  var code = 'currentInfo';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code;
};


Blockly.Arduino.btMicroduinoSenderData = function() {
var str = Blockly.Arduino.valueToCode(this, 'senderText', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';

  var code = 'my_Serial.println('+str+');\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

// Blockly.Arduino.bluetoothmtankBegin = function() {
//   var Type_md_mc = this.getFieldValue('Type_md_mc');

//   if (Type_md_mc==1) {
//     Blockly.Arduino.definitions_['Protocol_HardSer'] = '#include <Microduino_Protocol_HardSer.h>';
//     Blockly.Arduino.definitions_['define_Protocol'] = 'Protocol ProtocolB(&Serial1, TYPE_NUM);';
//   }
//   else if (Type_md_mc==2){
//     Blockly.Arduino.definitions_['Protocol_SoftSer'] = '#include <Microduino_Protocol_SoftSer.h>';
//     Blockly.Arduino.definitions_['define_Software'] = '#include <SoftwareSerial.h>';
//     Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial mySerial(4, -1);';
//     Blockly.Arduino.definitions_['define_Protocol'] = 'Protocol ProtocolB(&mySerial, TYPE_NUM);';
//   } else {
//     Blockly.Arduino.definitions_['Protocol_HardSer'] = '#include <Microduino_Protocol_HardSer.h>';
//     Blockly.Arduino.definitions_['define_Protocol'] = 'Protocol ProtocolB(&Serial, TYPE_NUM);';
//   }
//   Blockly.Arduino.setups_['setup_mCookie_bleSerial'] = 'ProtocolB.begin(9600);';
//   // Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
//   var code = '\n';
//   return code;
// };

// Blockly.Arduino.bluetoothmTankReciver = function() {
//   var branch = Blockly.Arduino.statementToCode(this, 'reciverDataInput');
//   Blockly.Arduino.definitions_['mCookie_ble_data'] = 'uint16_t Data[8];';

//   var code = 'int sta = ProtocolB.parse(Data, MODE_WHILE);\n';
//   code += '  if (sta == P_FINE) {\n';
//   code += '  for (int a = 0; a < CHANNEL_NUM; a++) {\n';
//   code += '    Serial.print(Data[a]);\n';
//   code += '    Serial.print(" ");\n';
//   code += '  }\n';
//   code += '  Serial.println(" \t DATA OK");\n';
//   code+=branch;
//   code += '}\n';
//   code += 'delay(10);\n';
//   return code;
// };

// Blockly.Arduino.bluetoothmTankdata = function() {
//   var mTankchooseNumber = this.getFieldValue('mTankchooseNumber');
//   var code = 'Data['+mTankchooseNumber+']';

//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// Blockly.Arduino.bluetoothcolorled = function() {

// Blockly.Arduino.definitions_['define_buffer'] = 'char buffer[100];';
// Blockly.Arduino.definitions_['define_buffer_sta'] = 'boolean buffer_sta = false,color_en = false;';
// Blockly.Arduino.definitions_['define_buffer_num'] = 'int buffer_num = 0;';
// Blockly.Arduino.definitions_['define_sta'] = 'int sta[4];';
// Blockly.Arduino.definitions_['define_safeled'] = 'unsigned long safeled_ms = 0;';
// Blockly.Arduino.definitions_['define_pos_num'] = 'int led_pos = 0,led_num = 1;\n';
// Blockly.Arduino.definitions_['define_led_time'] = 'unsigned long led_time = 0;\n';
// Blockly.Arduino.definitions_['define_val_max'] = '#define val_max 255\n';
// Blockly.Arduino.definitions_['define_val_min'] = '#define val_min 0\n';
// Blockly.Arduino.setups_['setup_Serial'] = 'Serial.begin(9600);'; 

// var setColor='void colorSet(uint32_t c) {\n';
//     setColor+='for (uint16_t i = 0; i < strip.numPixels(); i++)\n';
//     setColor+='strip.setPixelColor(i, c);\n';
//     setColor+='strip.show();}\n';
//     setColor+='void colorSet(uint32_t c, int i) {\n';
//     setColor+='strip.setPixelColor(i, c);\n';
//     setColor+='strip.show();}\n';
// Blockly.Arduino.definitions_['define_setColor'] = setColor;

// var breath='void breath(int r, int g, int b, int i){\n';
//   breath+='if (millis() < led_time) led_time = millis();\n';
//   breath+='if (millis() - led_time > 10) {\n';
//   breath+='  led_pos += led_num;\n';
//   breath+='  if (led_pos >= 255 || led_pos <= 0)\n';
//   breath+='    led_num = -led_num;\n';
//   breath+='  led_time = millis();}\n';
//   breath+='colorSet(strip.Color(map(led_pos, val_min, val_max, 0, r), map(led_pos, val_min, val_max, 0, g), map(led_pos, val_min, val_max, 0, b)), i);}\n';
// Blockly.Arduino.definitions_['define_setbreath'] = breath;


// var code = '\n';
//   code += 'if (!color_en)\n';
//   code += '{\n';
//   code += 'for (int j = 0; j < 6; j++)\n';
//   code += '  breath(255, 0, 255, j);\n';
//   code += '}\n';
//   code += 'if (millis() - safeled_ms > 2000)\n';
//   code += '{\n';
//   code += '  safeled_ms = millis();\n';
//   code += '  color_en = false;\n';
//   code += '}\n';
//   code += 'while (my_Serial.available()){\n';
//   code += 'char c = my_Serial.read();\n';
//   code += 'delay(2);\n';
//   code += 'if (c == \'C\')\n';
//   code += '    buffer_sta = true;\n';
//   code += 'if (c == \'\\n\'){\n';
//   code += '    color_en = true;\n';
//   code += '    safeled_ms = millis();}\n';
//   code += '  if (buffer_sta)\n';
//   code += '  {\n';
//   code += '    buffer[buffer_num] = c;\n';
//   code += '    buffer_num++;\n';
//   code += '  }\n';
//   code += '}\n';
//   code += 'if (buffer_sta)\n';
//   code += '{\n';
//   code += '  buffer_sta = false;\n';
//   code += '  sscanf((char *)strstr((char *)buffer, "C:"), "C:%d,%d,%d,%d", &sta[0], &sta[1], &sta[2], &sta[3]);\n';
//   code += '  for (int a = 0; a < buffer_num; a++)\n';
//   code += '    buffer[a] = NULL;\n';
//   code += '  buffer_num = 0;\n';
//   code += '  if (-1 == sta[3]) {\n';
//   code += '    colorSet(strip.Color(sta[0], sta[1], sta[2]));\n';
//   code += ' }\n';
//   code += '  else if ((0 <= sta[3]) && (sta[3] < 6)) {\n';
//   code += '    colorSet(strip.Color(sta[0], sta[1], sta[2]), sta[3]);\n';
//   code += '  }\n';
//   code += '}\n';
//   //return [code, Blockly.Arduino.ORDER_ATOMIC];
//   return code;
// };



Blockly.Arduino.BTATPrepare = function() {

  var ATSerialType = this.getFieldValue('ATSerialType');
  var bleDefine='';
  bleDefine+='#include <BLE.h>\n'
  if(ATSerialType=='serial') {
    bleDefine+='#define bleSerial Serial\n'
  } else if(ATSerialType=='serial1') {
    bleDefine+='#define bleSerial Serial1\n'
  } else {
    bleDefine+='SoftwareSerial bleSerial(4, 5);\n'
  }
  bleDefine+='BLE bleAT(bleSerial);\n'
  Blockly.Arduino.definitions_['MD_ATLib'] = bleDefine;

  var code = '';
  return code;
};


Blockly.Arduino.BTATOneTime = function() {

  var branch = Blockly.Arduino.statementToCode(this, 'ATExecuted');
  var oneTime = '';
  oneTime+='bool ATOneTime=false;\n';
  Blockly.Arduino.definitions_['ATOneTime'] = oneTime; 

  var code = '';
  code+='if(!ATOneTime) {\n';
  code+=branch;
  code+='ATOneTime=true;\n';
  code+='}\n';

  return code;
};


Blockly.Arduino.BTATCommands = function() {
  var ATCommandsType = this.getFieldValue('ATCommandsType');
  var code = '';
  code+='bleAT.'+ATCommandsType+'();\n';
  return code;
};


Blockly.Arduino.BTATOLEDShow = function() {

  var code = '';
  code+='setFont_S;\n';
  code+='uint8_t length=bleAT.returnAT.length();\n';
  code+='uint8_t lastIndex = 0;\n';
  code+='uint8_t y = 0;\n';
  code+='for (uint8_t i = 0; i < length; i++) {\n';
  code+='  if (bleAT.returnAT[i] == '+'\'\\n\''+') {\n';
  code+='    if(y==70) {\n';
  code+='      y=10;\n';
  code+='    } else {\n';
  code+='      y += 10;\n';
  code+='    }\n';
  code+='    u8g.setPrintPos(0, y);\n';
  code+='    u8g.print(bleAT.returnAT.substring(lastIndex, i));\n';
  code+='    lastIndex = i;\n';
  code+='  }\n';
  code+='}\n';

  return code;
};


Blockly.Arduino.BTATClear = function() {
  var code = '';
  code+='bleAT.returnAT=\"\";\n';
  return code;
};


Blockly.Arduino.BTATsetBaud = function() {
  var ATBandType = this.getFieldValue('ATBandType');
  var code = '';
  code+='bleAT.setBaud('+ATBandType+');\n';
  return code;
};

Blockly.Arduino.BTATsetPARI = function() {
  var ATPARIType = this.getFieldValue('ATPARIType');
  var code = '';
  code+='bleAT.setPARI('+ATPARIType+');\n';
  return code;
};

Blockly.Arduino.BTATsetSTOP = function() {
  var ATSTOPType = this.getFieldValue('ATSTOPType');
  var code = '';
  code+='bleAT.setSTOP('+ATSTOPType+');\n';
  return code;
};

Blockly.Arduino.BTATsetMODE = function() {
  var ATMODEType = this.getFieldValue('ATMODEType');
  var code = '';
  code+='bleAT.setMODE('+ATMODEType+');\n';
  return code;
};

Blockly.Arduino.BTATsetROLE = function() {
  var ATROLEType = this.getFieldValue('ATROLEType');
  var code = '';
  code+='bleAT.setROLE('+ATROLEType+');\n';
  return code;
};

Blockly.Arduino.BTATsetTYPE = function() {
  var ATTypeType = this.getFieldValue('ATTypeType');
  var code = '';
  code+='bleAT.setYTPE('+ATTypeType+');\n';
  return code;
};

Blockly.Arduino.BTATsetEmissionSignalStrength = function() {
  var ATEmissionSignalStrengthType = this.getFieldValue('ATEmissionSignalStrengthType');
  var code = '';
  code+='bleAT.setEmissionSignalStrength('+ATEmissionSignalStrengthType+');\n';
  return code;
};

Blockly.Arduino.BTATsetWorkStyle = function() {
  var ATsetWorkStyleType = this.getFieldValue('ATsetWorkStyleType');
  var code = '';
  code+='bleAT.setWorkStyle('+ATsetWorkStyleType+');\n';
  return code;
};

Blockly.Arduino.BTATsetConnectNum = function() {
  var btNum = Blockly.Arduino.valueToCode(this, 'btNum',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.setConnectNum('+btNum+');\n';
  return code;
};

Blockly.Arduino.BTATsetNAME = function() {
  var btName = Blockly.Arduino.valueToCode(this, 'btName',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.setNAME('+btName+');\n';
  return code;
};

Blockly.Arduino.BTATconnectSlaver = function() {
  var btAddress = Blockly.Arduino.valueToCode(this, 'btAddress',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.connectSlaver('+btAddress+');\n';
  return code;
};

Blockly.Arduino.BTATsetPASS = function() {
  var btPass = Blockly.Arduino.valueToCode(this, 'btPass',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.setPASS('+btPass+');\n';
  return code;
};

Blockly.Arduino.BTATsetTimeCON = function() {
  var btTime = Blockly.Arduino.valueToCode(this, 'btTime',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.setTimeCON('+btTime+');\n';
  return code;
};

Blockly.Arduino.BTATsetTIBE = function() {
  var btTIBETime = Blockly.Arduino.valueToCode(this, 'btTIBETime',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.setTIBE('+btTIBETime+');\n';
  return code;
};

Blockly.Arduino.BTATsearchAvalibleSlavers = function() {
  var btSearchTime = Blockly.Arduino.valueToCode(this, 'btSearchTime',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = '';
  code+='bleAT.searchAvalibleSlavers('+btSearchTime+');\n';
  return code;
};