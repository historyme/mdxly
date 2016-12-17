/*
 * AudioFile.h
 *
 *  Created on: 2016年12月14日
 *      Author: ray
 */

#ifndef AUDIOPROMIXLY_H_
#define AUDIOPROMIXLY_H_

SdFat sd;
AudioPro MP3player;

#define MIDI_HDR_CHUNK_ID       0x4D, 0x54, 0x68, 0x64  // const for MIDI
#define MIDI_CHUNKSIZE          0x00, 0x00, 0x00, 0x06
#define MIDI_FORMAT             0x00, 0x00              // VSdsp only support Format 0!
#define MIDI_NUMBER_OF_TRACKS   0x00, 0x01              // ergo must be 1 track
#define MIDI_TIME_DIVISION      0x00, 0x60
#define MIDI_END_OF_TRACK       0x00, 0xFF, 0x2F, 0x00

// Track Chunk
#define MIDI_TRACK_CHUNK_ID     0x4D, 0x54, 0x72, 0x6B  // const for MIDI
#define MIDI_CHUNK_SIZE         0x00, 0x00, 0x00, sizeof(MIDI_EVENT_NOTE_ON) + sizeof(MIDI_EVENT_NOTE_OFF) + sizeof(MIDI_END_OF_TRACK) // hard coded with zero padded

#define MIDI_EVENT_NOTE_ON      0x00, MIDI_NOTE_ON + MIDI_CHANNEL, MIDI_NOTE_NUMBER, MIDI_INTENSITY
#define MIDI_EVENT_NOTE_OFF   MIDI_NOTE_DURATION, MIDI_NOTE_OFF + MIDI_CHANNEL, MIDI_NOTE_NUMBER, MIDI_INTENSITY

PROGMEM const uint8_t SingleMIDInoteFile[] = {
MIDI_HDR_CHUNK_ID, MIDI_CHUNKSIZE,
MIDI_FORMAT,
MIDI_NUMBER_OF_TRACKS,
MIDI_TIME_DIVISION,
MIDI_TRACK_CHUNK_ID,
MIDI_CHUNK_SIZE,
MIDI_EVENT_NOTE_ON,
MIDI_EVENT_NOTE_OFF,
MIDI_END_OF_TRACK };

uint8_t MAXSongNum = 10;
bool playState = false;
String songArray = "";
String curSongName = "none";
uint16_t curSongNum = 0;

String getSongNameByNum(uint16_t songNum) {
	String curName = "";
	String temString = songArray;
	for (uint16_t i = 0; i < songNum; i++) {
		uint16_t index = temString.indexOf(',');
		if (i == (curSongNum - 1)) {
			curName = temString.substring(0, index);
			curSongName = curName;
		} else {
			temString = temString.substring(index + 1, temString.length());
		}
	}
	return curName;
}

void readSongListFromSD() {
	if (!MP3player.isPlaying()) {
		songArray = "";
		SdFile file;
		char filename[13];
		sd.chdir("/", true);
		uint16_t count = 1;
		while (file.openNext(sd.vwd(), O_READ)) {
			file.getFilename(filename);
			if (isFnMusic(filename)) {
				String curFileName = filename;
				if (curFileName.endsWith(".mp3")) {
					if (count <= MAXSongNum) {
						songArray += filename;
						songArray += ",";
						count++;
					}
				}
			}
			file.close();
		}
	} else {
		songArray = "busy";
	}
}


void showSongList() {
	uint8_t length = songArray.length();
	uint8_t lastIndex = 0;
	Serial.println("song list:");
	for (uint8_t i = 0; i < length; i++) {
		if (songArray[i] == ',') {
			Serial.println(songArray.substring(lastIndex, i));
			lastIndex = i+1;
		}
	}
}

void switchMusicPrepare() {
	if (MP3player.isPlaying()) {
		MP3player.stopTrack();
	}
}

void powerOnOff() {
	playState = !playState;
	switchMusicPrepare();
	if (playState) {
		curSongNum = 1;
		char trackName[13] = "";
		getSongNameByNum(curSongNum).toCharArray(trackName, 13);
		MP3player.playMP3(trackName, 0);
	}
}

void songChange(char nextOrPre) {
	switchMusicPrepare();
	if (playState) {
		if (nextOrPre == ')') {
			if (curSongNum == 10) {
				curSongNum = 1;
			} else {
				curSongNum++;
			}
		} else if (nextOrPre == '(') {
			if (curSongNum == 1) {
				curSongNum = MAXSongNum;
			} else {
				curSongNum--;
			}
		}
		char trackName[13] = "";
		getSongNameByNum(curSongNum).toCharArray(trackName, 13);
		MP3player.playMP3(trackName, 0);
	}
}

void playSongByName(String songname) {
	char trackName[13] = "";
	songname.toCharArray(trackName, 13);
	MP3player.playMP3(trackName, 0);
}

void volumeChage(char upOrDown) {
	union twobyte mp3_vol;
	mp3_vol.word = MP3player.getVolume();
	if (upOrDown == '-') {
		if (mp3_vol.byte[1] >= 254) {
			mp3_vol.byte[1] = 254;
		} else {
			mp3_vol.byte[1] += 2;
		}
	} else if (upOrDown == '+') {
		if (mp3_vol.byte[1] <= 2) {
			mp3_vol.byte[1] = 2;
		} else {
			mp3_vol.byte[1] -= 2;
		}
	}
	MP3player.setVolume(mp3_vol.byte[1], mp3_vol.byte[1]);
}

void speedChange(char fastOrSlow) {
	uint16_t playspeed = MP3player.getPlaySpeed();
	if (fastOrSlow == '>') {
		if (playspeed >= 254) {
			playspeed = 5;
		} else {
			playspeed += 1;
		}
	} else if (fastOrSlow == '<') {
		if (playspeed == 0) {
			playspeed = 0;
		} else {
			playspeed -= 1;
		}
	}
	MP3player.setPlaySpeed(playspeed);
}

#endif /* AUDIOPROMIXLY_H_ */
