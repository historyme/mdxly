'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=518;


Blockly.Blocks.microduinoCrash = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    .appendTitle(Blockly.crashButton)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');


    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};



Blockly.Blocks.microduinoTuch = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    .appendTitle(Blockly.touchButton)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');


    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};


Blockly.Blocks.microduinoPIR = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    .appendTitle(Blockly.PIRSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.personAction, "high"], [Blockly.personNoAction, "low"]]),'action');

    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};


Blockly.Blocks.microduinoMic = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    .appendTitle(Blockly.MicSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.sonudHigh, "high"], [Blockly.noSound, "low"]]),'action');

    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};

Blockly.Blocks.microduinoLight = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    .appendTitle(Blockly.LightSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.lightHigh, "high"], [Blockly.lightLow, "low"]]),'action');

    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, String);

  }
};