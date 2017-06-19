'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

var colorSet='#70bd94';


Blockly.Blocks.NumberTube = {
  init: function() {
    this.setColour(colorSet);

    var addr1 =[["0", "0"], 
                ["1", "1"]
                ];

    var addr2 =[["0", "0"], 
                ["1", "1"]
                ];

    var number =[["0", "0"], 
                ["1", "1"],
                ["2", "2"], 
                ["3", "3"],
                ["4", "4"], 
                ["5", "5"],
                ["6", "6"], 
                ["7", "7"],
                ["8", "8"], 
                ["9", "9"],
                ["clear", "127"],
                ["full", "128"]
                ];

    var point =[["false", "0"], 
                ["true", "1"]
                ];

    this.appendDummyInput()
    .appendField(Blockly.MD_NixieTube)
    .appendField(Blockly.MD_NixieBit0)
    .appendTitle(new Blockly.FieldDropdown(addr1), "addr1")
    .appendField(Blockly.MD_NixieBit1)
    .appendTitle(new Blockly.FieldDropdown(addr2), "addr2")
    .appendField(Blockly.MD_NixieNumber)
    .appendTitle(new Blockly.FieldDropdown(number), "number")
    .appendField(Blockly.MD_NixiePoint)
    .appendTitle(new Blockly.FieldDropdown(point), "point");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    var tip="地址要匹配\n";
    tip+="否则会不工作\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);


  }
};


