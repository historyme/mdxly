'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


// var colorSet=230;
var colorSet='#6c91ac';

var mCookie_PORTS =[[Blockly.newMicroduinoBT, "0"],[Blockly.oldmCookie, "1"], [Blockly.oldMicroduino, "2"]];

Blockly.Blocks.bluetoothMicroduinoBegin = {

  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.bluePrepare)
        .appendTitle(Blockly.productType)
        .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);


  }
};


Blockly.Blocks.bluetoothMicroduinoReciver = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.microduinoBlueReciver);
    
    this.appendStatementInput("reciverDataInput");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.btMicroduinoReciverData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BTReciverData);

	this.setOutput(true, String);
  }
};


Blockly.Blocks.btMicroduinoSenderData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BTSenderData);

    this.appendValueInput('senderText')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.BTSende);

    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};

// Blockly.Blocks.bluetoothmtankBegin = {

//   init: function() {

//     var Type_md_mc = [[Blockly.newMicroduinoBT, "0"],
//                  [Blockly.oldmCookie, '1'],
//                  [Blockly.oldMicroduino, '2'],
//               ];

//     this.setColour(colorSet);

//     this.appendDummyInput("")
//         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
//         .appendTitle(Blockly.blueMtank)
//         .appendTitle(Blockly.productType)
//         .appendTitle(new Blockly.FieldDropdown(Type_md_mc), "Type_md_mc");

//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//   }
// };

// Blockly.Blocks.bluetoothmTankReciver = {
//   init: function() {
//     this.setColour(colorSet);
//     this.appendDummyInput("")
//         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
//         .appendTitle(Blockly.mTankBlueReciver);
        
    
//     this.appendStatementInput("reciverDataInput");

//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//   }
// };

// Blockly.Blocks.bluetoothmTankdata= {
//   init: function() {

//   var mTankchooseNumber = [
//               [Blockly.mtankDIR1, '0'],
//               [Blockly.mTankthr1, '1'],
//               [Blockly.mtankDIR2, '2'],
//               [Blockly.mTankthr2, '3'],
//               ['aux1(1000,2000)', '4'],
//               ['aux2(1000,2000)', '5'],
//               ['aux3(1000,2000)', '6'],
//               ['aux4(1000,2000)', '7'],
//               ];


//     this.setColour(colorSet);
//     this.appendDummyInput("")
//         .appendTitle(Blockly.mTankchannel)
//         .appendField(new Blockly.FieldDropdown(mTankchooseNumber), 'mTankchooseNumber');

//     this.setOutput(true, Number);
//   }
// };

// Blockly.Blocks.bluetoothcolorled = {

//   init: function() {
//     this.setColour(colorSet);

//     this.appendDummyInput("")
//         .appendTitle(Blockly.blueled)
//         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
//         .appendTitle(Blockly.ColorLEDControl)
//         .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32));

//     this.setPreviousStatement(true);
//     this.setNextStatement(true);


//   }
// };




Blockly.Blocks.BTATPrepare = {
  init: function() {
    var ATSerialType = 
        [[Blockly.MD_BTSerail, "serial"],
        [Blockly.MD_BTSerial1, 'serial1'],
        [Blockly.MD_BTSoftSerial45, 'softSerial45'],
              ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTSerialType)
        .appendTitle(new Blockly.FieldDropdown(ATSerialType), "ATSerialType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATOneTime = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATExecuted);
    this.appendStatementInput("ATExecuted");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATCommands = {
  init: function() {
    var ATCommandsType = [
        [Blockly.MD_BTATTest, "ATTest"],
        [Blockly.MD_BTATqueryNAME, 'queryNAME'],
        [Blockly.MD_BTATqueryBaud, 'queryBaud'],
        [Blockly.MD_BTATqueryPARI, "queryPARI"],
        [Blockly.MD_BTATquerySTOP, 'querySTOP'],
        [Blockly.MD_BTATqueryMODE, 'queryMODE'],
        [Blockly.MD_BTATqueryROLE, "queryROLE"],
        [Blockly.MD_BTATqueryPASS, 'queryPASS'],
        [Blockly.MD_BTATqueryTYPE, 'queryTYPE'],
        [Blockly.MD_BTATqueryADDR, "queryADDR"],
        [Blockly.MD_BTATquerySuccessedADDR, 'querySuccessedADDR'],
        [Blockly.MD_BTATqueryVersion, 'queryVersion'],
        [Blockly.MD_BTATqueryTimeCON, "queryTimeCON"],
        [Blockly.MD_BTATqueryWorkStyle, 'queryWorkStyle'],
        [Blockly.MD_BTATsearchRSSI, 'searchRSSI'],
        [Blockly.MD_BTATqueryTIBE, "queryTIBE"],
        [Blockly.MD_BTATqueryEmissionSignalStrength, 'queryEmissionSignalStrength'],
        [Blockly.MD_BTATrenew, 'renew'],
        [Blockly.MD_BTATreset, "reset"],
        [Blockly.MD_BTATCLEAR, 'CLEAR'],
        [Blockly.MD_BTATqueryCONNLast, 'queryCONNLast'],
              ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATCommands)
        .appendTitle(new Blockly.FieldDropdown(ATCommandsType), "ATCommandsType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setOutput(true, Boolean);
  }
};


Blockly.Blocks.BTATOLEDShow = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATOLEDShow);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.BTATClear = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATClear);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATsetBaud = {
  init: function() {
    var ATBandType = [
        ["9600", "0"],
        ["19200", "1"],
        ["38400", "2"],
        ["57600", "3"],
        ["115200", "4"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetBaud)
        .appendTitle(new Blockly.FieldDropdown(ATBandType), "ATBandType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setOutput(true, Boolean);
  }
};

Blockly.Blocks.BTATsetPARI = {
  init: function() {
    var ATPARIType = [
        [Blockly.MD_BTATNoPARI, "0"],
        ["EVEN", "1"],
        ["ODD", "2"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetPARI)
        .appendTitle(new Blockly.FieldDropdown(ATPARIType), "ATPARIType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setOutput(true, Boolean);
  }
};


Blockly.Blocks.BTATsetSTOP = {
  init: function() {
    var ATSTOPType = [
        [Blockly.MD_BTATset1STOP, "0"],
        [Blockly.MD_BTATset2STOP, "1"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetSTOP)
        .appendTitle(new Blockly.FieldDropdown(ATSTOPType), "ATSTOPType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.BTATsetMODE = {
  init: function() {
    var ATMODEType = [
        [Blockly.MD_BTATEnSetMODE, "0"],
        [Blockly.MD_BTATDisSetMODE, "1"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetMODE)
        .appendTitle(new Blockly.FieldDropdown(ATMODEType), "ATMODEType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.BTATsetROLE = {
  init: function() {
    var ATROLEType = [
        [Blockly.MD_BTATMaster, "0"],
        [Blockly.MD_BTATSlaver, "1"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetROLE)
        .appendTitle(new Blockly.FieldDropdown(ATROLEType), "ATROLEType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.BTATsetTYPE = {
  init: function() {
    var ATTypeType = [
        [Blockly.MD_BTATConNoPass, "0"],
        [Blockly.MD_BTATConNeedPass, "1"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetTYPE)
        .appendTitle(new Blockly.FieldDropdown(ATTypeType), "ATTypeType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATsetEmissionSignalStrength = {
  init: function() {
    var ATEmissionSignalStrengthType = [
        ["4dbm", "0"],
        ["0dbm", "1"],
        ["-6dbm", "2"],
        ["-23dbm", "3"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetEmissionSignalStrength)
        .appendTitle(new Blockly.FieldDropdown(ATEmissionSignalStrengthType), "ATEmissionSignalStrengthType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATsetWorkStyle = {
  init: function() {
    var ATsetWorkStyleType = [
        [Blockly.MD_BTATWaitCon, "0"],
        [Blockly.MD_BTATWorkNow, "1"],
        ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MD_BTATsetWorkStyle)
        .appendTitle(new Blockly.FieldDropdown(ATsetWorkStyleType), "ATsetWorkStyleType");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.BTATsetConnectNum = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btNum')
      .setCheck(Number)
      .appendTitle(Blockly.MD_BTATsetConnectNum);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.BTATsetNAME = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btName')
      .setCheck(String)
      .appendTitle(Blockly.MD_BTATsetName);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.BTATconnectSlaver = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btAddress')
      .setCheck(String)
      .appendTitle(Blockly.MD_BTATconnectSlaver);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.BTATsetPASS = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btPass')
      .setCheck(Number)
      .appendTitle(Blockly.MD_BTATsetPASS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.BTATsetTimeCON = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btTime')
      .setCheck(Number)
      .appendTitle(Blockly.MD_BTATsetTimeCON);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.BTATsetTIBE = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btTIBETime')
      .setCheck(Number)
      .appendTitle(Blockly.MD_BTATsetTIBE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.BTATsearchAvalibleSlavers = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('btSearchTime')
      .setCheck(Number)
      .appendTitle(Blockly.MD_BTATsearchAvalibleSlavers);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};