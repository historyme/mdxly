'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=518;


Blockly.Blocks.microduinoCrash = {
  init: function() {
    this.setColour(colorSet);


    // this.appendDummyInput()
    // .appendField(Blockly.Keyget_Pin)
    // .appendField(new Blockly.FieldTextInput("6"), "digitalPin")
    // .appendTitle(Blockly.crashButton)
    // .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');

    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);


    this.appendDummyInput()
    .appendTitle(Blockly.crashButton)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');


    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};



Blockly.Blocks.microduinoTuch = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);


    this.appendDummyInput()
    .appendTitle(Blockly.touchButton)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};


Blockly.Blocks.microduinoPIR = {
  init: function() {
    this.setColour(colorSet);


    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.PIRSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.personAction, "high"], [Blockly.personNoAction, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};


Blockly.Blocks.microduinoMic = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.MicSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.sonudHigh, "high"], [Blockly.noSound, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};

Blockly.Blocks.microduinoLight = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.LightSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.lightHigh, "high"], [Blockly.lightLow, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};