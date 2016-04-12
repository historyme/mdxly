'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=518;



Blockly.Blocks.microduinoMicAnal = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.MicSensor)
    .appendTitle(Blockly.MicSensorValue);

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};

Blockly.Blocks.microduinoLightAnal = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.LightSensor)
    .appendTitle(Blockly.LightSensorValue);

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};