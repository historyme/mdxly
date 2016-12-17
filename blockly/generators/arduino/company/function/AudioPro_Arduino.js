'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


Blockly.Arduino.audioProPrepare = function() {

	var getType = this.getTitleValue('getType');

	var audioProDefine='';
	audioProDefine+='#include <AudioPro.h>\n';
	audioProDefine+='SdFat sd;\n';
	audioProDefine+='AudioPro midiPlayer;\n';
	Blockly.Arduino.definitions_['define_AudioPro'] = audioProDefine;

	var audioProSetup='';

	audioProSetup+='pinMode(MP3_XCS,OUTPUT);\n';
	audioProSetup+='digitalWrite(MP3_XCS, HIGH);\n';
	audioProSetup+='sd.begin(SD_SEL, SPI_FULL_SPEED);\n';
	audioProSetup+='if ( midiPlayer.begin()) {\n';
	audioProSetup+='	while (1);\n';
	audioProSetup+='}\n';
	audioProSetup+='midiPlayer.applyPatch(MIDIPatch, sizeof(MIDIPatch) / sizeof(uint16_t));\n';
	audioProSetup+='midiPlayer.setVolume(0, 0);\n';
	audioProSetup+='midiPlayer.midiSetBank(0, VS1053_BANK_DEFAULT);\n';
	audioProSetup+='midiPlayer.midiSetInstrument(0, VS1053_GM1_ELECTRIC_GRAND_PIANO);\n';

	Blockly.Arduino.setups_['setup_AudioPro'] = audioProSetup;

	var code='';
	return code;
};

Blockly.Arduino.audioProInstrument = function() {
  var getType = this.getTitleValue('getType');
  var code='midiPlayer.midiSetInstrument(0, '+getType+');\n';
  return code;
};

Blockly.Arduino.audioProControl = function() {

	var getType = this.getTitleValue('getType');

	var audioProMelody = Blockly.Arduino.valueToCode(this, 'audioProMelody', Blockly.Arduino.ORDER_ATOMIC);
	var audioProVolume = Blockly.Arduino.valueToCode(this, 'audioProVolume', Blockly.Arduino.ORDER_ATOMIC);
	var audioProDuration = Blockly.Arduino.valueToCode(this, 'audioProDuration', Blockly.Arduino.ORDER_ATOMIC);
	var code='';
	code+=getType+'(0, '+audioProMelody+', '+audioProVolume+');\n';
	code+='delay('+audioProDuration+');\n';
	return code;
};



Blockly.Arduino.audioProSDPrepare = function() {

	var MAXSongNum = Blockly.Arduino.valueToCode(this, 'MAXSongNum', Blockly.Arduino.ORDER_ATOMIC);

	var audioProSDDefine='';
	audioProSDDefine+='#include <AudioPro.h>\n';
	audioProSDDefine+='#include <AudioProMixly.h>\n';
	Blockly.Arduino.definitions_['define_AudioProSD'] = audioProSDDefine;

	var audioProSDSetup='';

	audioProSDSetup+='uint8_t result;\n';
	audioProSDSetup+='pinMode(MP3_XCS, OUTPUT);\n';
	audioProSDSetup+='digitalWrite(MP3_XCS, HIGH);\n';
	audioProSDSetup+='if (!sd.begin(SD_SEL, SPI_FULL_SPEED)) {\n';
	audioProSDSetup+='	sd.initErrorHalt();\n';
	audioProSDSetup+='}\n';
	audioProSDSetup+='if (!sd.chdir("/")) {\n';
	audioProSDSetup+='	sd.errorHalt("sd.chdir");\n';
	audioProSDSetup+='}\n';
	audioProSDSetup+='MAXSongNum='+MAXSongNum+';\n';
	audioProSDSetup+='result = MP3player.begin();\n';
	audioProSDSetup+='readSongListFromSD();\n';
	//audioProSDSetup+='showSongList();\n';

	Blockly.Arduino.setups_['setup_AudioProSD'] = audioProSDSetup;

	var code='';
	code+='\n';
	return code;
};


Blockly.Arduino.audioProSDControl = function() {
	var getType = this.getTitleValue('getType');

	var code='';
	if(getType=="showSongList()") {
		var showListSDSetup='';
		showListSDSetup+='showSongList();\n';
		Blockly.Arduino.setups_['setup_showListSD'] = showListSDSetup;

	} else {
		code+=getType+';\n';
	}

	return code;
};


Blockly.Arduino.audioProSDPlayByName = function() {
 var songName = Blockly.Arduino.valueToCode(this, 'songName', Blockly.Arduino.ORDER_ATOMIC);

	var code='';
	code+='playSongByName('+songName+');\n';
	return code;
};


Blockly.Arduino.audioProSDGetState = function() {

  var getType = this.getTitleValue('getType');
  var code=getType;
  return [code, Blockly.Arduino.ORDER_ATOMIC]|| '0';
};