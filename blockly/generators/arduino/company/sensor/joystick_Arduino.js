'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');



Blockly.Arduino.xyJoystick = function() {
  var analogPin = this.getFieldValue('analogPin');
  var direction = this.getTitleValue('direction');

  Blockly.Arduino.definitions_['var_Anolg'+analogPin+direction] = '#define Pin_'+analogPin+direction+' '+analogPin;
  //Blockly.Arduino.setups_['setup_'+analogPin+direction] = 'pinMode(Pin_'+analogPin+direction+',INPUT);';

  var code='analogRead(Pin_'+analogPin+direction+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.microduinoJoystick = function() {
  var analogPin = this.getFieldValue('analogPin');
  var type = this.getTitleValue('type');

  var microduinoJoysitcFun='';
  microduinoJoysitcFun+='boolean joy_stick(int pin, int mode) {\n';
  microduinoJoysitcFun+='	if (mode == 0) {\n';
  microduinoJoysitcFun+='		if (analogRead(pin) < 50) {\n';
  microduinoJoysitcFun+='			return true;\n';
  microduinoJoysitcFun+='		}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='		return false;\n';
  microduinoJoysitcFun+='		}\n';
  microduinoJoysitcFun+='	}\n';



  microduinoJoysitcFun+='	else if (mode == 1) {\n';
  microduinoJoysitcFun+='	if (analogRead(pin) < 374 && analogRead(pin) > 274) {\n';
  microduinoJoysitcFun+='	  return true;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='	  return false;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else if (mode == 2) {\n';
  microduinoJoysitcFun+='	if (analogRead(pin) < 559 && analogRead(pin) > 459) {\n';
  microduinoJoysitcFun+='	  return true;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='	  return false;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else if (mode == 3) {\n';
  microduinoJoysitcFun+='	if (analogRead(pin) < 751 && analogRead(pin) > 651) {\n';
  microduinoJoysitcFun+='	  return true;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='	  return false;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else if (mode == 4) {\n';
  microduinoJoysitcFun+='	if (analogRead(pin) < 906 && analogRead(pin) > 806) {\n';
  microduinoJoysitcFun+='	  return true;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='	  return false;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else if (mode == 5) {\n';
  microduinoJoysitcFun+='	if (analogRead(pin) > 973) {\n';
  microduinoJoysitcFun+='	  return true;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	else {\n';
  microduinoJoysitcFun+='	  return false;\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';
  microduinoJoysitcFun+='	}\n';

  Blockly.Arduino.definitions_['microduinoJoysitcFun'] = microduinoJoysitcFun;

  var code='joy_stick('+analogPin+','+type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};