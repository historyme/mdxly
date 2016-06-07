'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');



Blockly.Arduino.ColorDetPrepare_TCS3414 = function() {

  var TCS3414Include="#include <TCS3414Lib.h>\n";
  TCS3414Include+="#include <Wire.h>\n";

  Blockly.Arduino.definitions_['var_TCS3414Include'] = TCS3414Include;

  var TCS3414Var='';
  TCS3414Var+='uint16_t rawRed,rawGreen,rawBlue,clr;\n';
  TCS3414Var+='uint8_t redColor,greenColor,blueColor;\n';
  TCS3414Var+='uint16_t minFun;\n';
  TCS3414Var+='TCS3414 tcs;\n';

  TCS3414Var+='uint16_t minFunColorValue(uint16_t r, uint16_t g, uint16_t b) {\n';
  TCS3414Var+='  if (r < minFun)\n';
  TCS3414Var+='    minFun=r;\n';
  TCS3414Var+='  if (g < minFun)\n';
  TCS3414Var+='    minFun=g;\n';
  TCS3414Var+='  if(b < minFun)\n';
  TCS3414Var+='    minFun=b;\n';
  TCS3414Var+='  return minFun;\n';
  TCS3414Var+='}\n';
  Blockly.Arduino.definitions_['var_TCS3414defineVar'] = TCS3414Var;


  var TCS3414Init='';
  TCS3414Init+='Wire.begin();\n';
  TCS3414Init+='tcs.init(TCS3414_FREEMODE);\n';
  TCS3414Init+='tcs.setIntegrationTime(INTEG_PARAM_INTTIME_12MS);\n';
  TCS3414Init+='tcs.setGain(GAIN_1, PRESCALER_1);\n';
  TCS3414Init+='tcs.start();\n';
  Blockly.Arduino.setups_['setup_TCS3414Init'] = TCS3414Init;

  var code='\n';
  code+='minFun=65535;\n';
  code+='rawGreen-=8;\n';
  code+='minFun=minFunColorValue(rawRed,rawGreen,rawBlue);\n';
  code+='if(rawRed>minFun) {\n';
  code+='  redColor=map((rawRed-minFun),0,rawRed,0,255);\n';
  code+='} else {\n';
  code+='  redColor=0;\n';
  code+='}\n';
  code+='if(rawGreen>minFun) {\n';
  code+='  greenColor=map((rawGreen-minFun),0,rawGreen,0,255);\n';
  code+='} else {\n';
  code+='  greenColor=0;\n';
  code+='}\n';
  code+='if(rawBlue>minFun) {\n';
  code+='  blueColor=map((rawBlue-minFun),0,rawBlue,0,255);\n';
  code+='} else {\n';
  code+='  blueColor=0;\n';
  code+='}\n';

  return code;
};


Blockly.Arduino.ColorGet_TCS3414 = function() {
  var getType = this.getTitleValue('getType');
  var code=getType;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};