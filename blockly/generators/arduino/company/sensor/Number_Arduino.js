'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

Blockly.Arduino.NumberTube = function() {



var addr1 = this.getFieldValue('addr1');
var addr2 = this.getFieldValue('addr2');
var number = this.getFieldValue('number');
var point = this.getFieldValue('point');

var addr=0x20;
addr|=addr1|(addr2<<1);


  var NumberTubeInclude="";
  NumberTubeInclude+="#include <number.h>\n";
  Blockly.Arduino.definitions_['var_NumberTubeInclude'] = NumberTubeInclude;


  var NumberTubeVar="";
  NumberTubeVar+="NumberTube tube"+addr+";\n";
  Blockly.Arduino.definitions_['var_NumberTubeVar'+addr] = NumberTubeVar;

  var NumberTubeSetup="";
  NumberTubeSetup+="tube"+addr+".setAddr("+addr+");\n";
  NumberTubeSetup+="tube"+addr+".numberWrite(tube"+addr+".CLR);\n";
  NumberTubeSetup+="delay(500);\n";
  Blockly.Arduino.setups_['setup_NumberTubeSetup'+addr] = NumberTubeSetup;


  var code='\n';

  if(number<127) {
    code+="tube"+addr+".numberPrint("+number+","+point+");\n";
  } else {
    code+="tube"+addr+".numberWrite("+number+");\n";
  }


  
  return code;

};

