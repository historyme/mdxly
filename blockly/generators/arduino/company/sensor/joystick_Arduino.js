'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');



Blockly.Arduino.xyJoystick = function() {
  var analogPin = this.getFieldValue('analogPin');
  var direction = this.getTitleValue('direction');

  Blockly.Arduino.definitions_['var_Anolg'+analogPin+direction] = '#define Pin_'+analogPin+direction+' '+analogPin;
  Blockly.Arduino.setups_['setup_'+analogPin+direction] = 'pinMode(Pin_'+analogPin+direction+',INPUT);';

  var code='analogRead(Pin_'+analogPin+direction+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
