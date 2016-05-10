'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#3bc647';


Blockly.Blocks.xyJoystick = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendField(Blockly.KeygetJoystic)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.Horizontal, "x"], [Blockly.Vertical, "y"]]),'direction')
    .appendField(Blockly.coordinate);


    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);

    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, Number);

  }
};