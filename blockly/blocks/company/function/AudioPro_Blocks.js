'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=65;
var colorSet='#e5b748';


Blockly.Blocks.audioProPrepare={
init:function(){

    var getType =[[Blockly.ACOUSTIC_GRAND_PIANO, "VS1053_GM1_ACOUSTIC_GRAND_PIANO"], 
                  [Blockly.PIANO, "VS1053_GM1_PIANO"], 
                  [Blockly.ELECTRIC_GRAND_PIANO, "VS1053_GM1_ELECTRIC_GRAND_PIANO"], 
                  [Blockly.HONKY_TONK_PIANO, "VS1053_GM1_HONKY_TONK_PIANO"],
                  [Blockly.RHODES_PIANO, "VS1053_GM1_RHODES_PIANO"],
                  [Blockly.CHORUSED_PIANO, "VS1053_GM1_CHORUSED_PIANO"],
                  [Blockly.OCARINA, "VS1053_GM1_OCARINA"],
                  [Blockly.OCARINB, "VS1053_GM1_OCARINB"],
                  [Blockly.OCARINC, "VS1053_GM1_OCARINC"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProPrepare)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};



Blockly.Blocks.audioProInstrument={
init:function(){

    var getType =[[Blockly.ACOUSTIC_GRAND_PIANO, "VS1053_GM1_ACOUSTIC_GRAND_PIANO"], 
                  [Blockly.PIANO, "VS1053_GM1_PIANO"], 
                  [Blockly.ELECTRIC_GRAND_PIANO, "VS1053_GM1_ELECTRIC_GRAND_PIANO"], 
                  [Blockly.HONKY_TONK_PIANO, "VS1053_GM1_HONKY_TONK_PIANO"],
                  [Blockly.RHODES_PIANO, "VS1053_GM1_RHODES_PIANO"],
                  [Blockly.CHORUSED_PIANO, "VS1053_GM1_CHORUSED_PIANO"],
                  [Blockly.OCARINA, "VS1053_GM1_OCARINA"],
                  [Blockly.OCARINB, "VS1053_GM1_OCARINB"],
                  [Blockly.OCARINC, "VS1053_GM1_OCARINC"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProInstrument)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};

Blockly.Blocks.audioProControl = {
  init: function() {
    this.setColour(colorSet);

    var getType =[[Blockly.AudioProPlay, "midiPlayer.noteOn"],
                  [Blockly.AudioProPause, "midiPlayer.noteOff"]
                ];

    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProControl)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");


    this.appendDummyInput("")
        .appendTitle(Blockly.audioProMelody)
    this.appendValueInput("audioProMelody", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput("")
        .appendTitle(Blockly.audioProVolume)
    this.appendValueInput("audioProVolume", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput("")
        .appendTitle(Blockly.audioProDuration)
    this.appendValueInput("audioProDuration", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.setInputsInline(true);
    var tip="音调/音量范围(0~127)\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};



Blockly.Blocks.audioProSDPrepare = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
         .appendTitle(Blockly.MD_audioProSDPrepare);

    this.appendDummyInput("")
        .appendTitle(Blockly.MD_MAXSongNum)
    this.appendValueInput("MAXSongNum", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput("")
        .appendTitle(Blockly.MD_MAXSongUnit);

    this.setInputsInline(true);
    var tip="读取歌曲数量太多会导致运行不正常\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};




Blockly.Blocks.audioProSDControl = {
  init: function() {
    this.setColour(colorSet);

    var getType =[[Blockly.MD_audioProSDPowerOnOff, "powerOnOff()"],
                  [Blockly.MD_audioProSDNext, "songChange(\')\')"],
                  [Blockly.MD_audioProSDPre, "songChange(\'(\')"],
                  [Blockly.MD_audioProSDVolumAdd, "volumeChage(\'+\')"],
                  [Blockly.MD_audioProSDVolumSub, "volumeChage(\'-\')"],
                  [Blockly.MD_audioProSDFast, "speedChange(\'>\')"],
                  [Blockly.MD_audioProSDSlow, "speedChange(\'<\')"],
                  [Blockly.MD_audioProSDRepeat, "songChange(\'~\')"],
                  [Blockly.MD_AudioProSDShowList, "showSongList()"],
                ];

    this.appendDummyInput("")
         .appendTitle(Blockly.MD_AudioProSDControl)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");

    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



Blockly.Blocks.audioProSDPlayByName = {
  init: function() {
    this.setColour(colorSet);


    this.appendDummyInput("")
    .appendTitle(Blockly.MD_AudioProSDPlayByName)
    this.appendValueInput('songName')
    .setCheck(String)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendTitle(Blockly.File_Name);

    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.audioProSDGetState={
init:function(){

  var getType =[
                [Blockly.MD_AudioProSDIsPlay, "MP3player.isPlaying()"],
                [Blockly.MD_AudioProSDPlayNum, "curSongNum"],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.RTCFormatGetInfo)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};