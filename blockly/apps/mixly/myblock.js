var myblock='null';
var company_block='<sep></sep><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/core/serial_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/core/serial_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/extended/OLED_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/OLED_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/extended/Motor_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/Motor_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/extended/Stepper_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/Stepper_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/extended/DotMatrix_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/DotMatrix_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/Audio_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/Audio_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/RTC_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/RTC_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/SD_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/SD_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/motion_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/motion_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/GPS_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/GPS_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/BT_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/BT_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/Zigbee_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/Zigbee_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/W5500_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/W5500_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/nRF24_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/nRF24_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/smartRF_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/smartRF_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/NFC_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/NFC_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/IRCommunication_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/IRCommunication_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/GSM_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/GSM_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/WIFI_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/WIFI_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/colorLED_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/colorLED_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/BreathingLight_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/BreathingLight_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/Timer_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/Timer_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/Buzzer_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/Buzzer_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/KEY_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/KEY_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/Tem_Hum_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/Tem_Hum_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/joystick_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/joystick_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/LM75_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/LM75_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/TSL2561_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/TSL2561_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/TCS3414_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/TCS3414_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/digitalRead_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/digitalRead_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/analogRead_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/analogRead_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/servo_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/servo_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/VariableExpansion/NewVariable_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/VariableExpansion/NewVariable_Arduino.js"></script><category id="microduino" colour="#000000"><!--鏍稿績--><category id="catMicroduinoCore" colour="#e36a69"><!-- 		<block type="serialBegin"></block><block type="serialPrint"></block><block type="serialPrintln"></block> --><block type="microduinoWatting"></block><block type="microduinoWhile"></block><block type="microduinoFor"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="microduinoAnaloyWrite"><value name="pwmNumber"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="microduinoAnaloyRead"></block></category><!--鎵╁睍--><category id="catMicroduinoExtended" colour="#27b6ac"><block type="MotorBeginchange"></block><block type="Motor_run"><value name="speed"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="MotorBreak"></block><block type="MotorFree"></block><block type="MotorBegin"></block><block type="Car_Motor"><value name="speed"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="angle"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="mCookie_Motor"></block><block type="mdStepperBegin"></block><block type="mdStepperControl"><value name="speed"><shadow type="math_number"><field name="NUM">60</field></shadow></value></block><!--Dot matrix screen--><block type="DotMatrix"><block type="dotMatrixName"></block><value name="row0"><block type="DotMatrixRow"></block></value><value name="row1"><block type="DotMatrixRow"></block></value><value name="row2"><block type="DotMatrixRow"></block></value><value name="row3"><block type="DotMatrixRow"></block></value><value name="row4"><block type="DotMatrixRow"></block></value><value name="row5"><block type="DotMatrixRow"></block></value><value name="row6"><block type="DotMatrixRow"></block></value><value name="row7"><block type="DotMatrixRow"></block></value></block><block type="DotMatrixAddArray"></block><block type="DotMatrixAddNum"></block><block type="getMatrixNum"></block><block type="getMatrixDeviceAddr"><value name="MatrixIndex"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="getMatrixHeight"></block><block type="getMatrixWidth"></block><block type="setMatrixLedColor"><value name="MatrixIndexX"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="MatrixIndexY"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="MatrixIndexRed"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="MatrixIndexGreen"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="MatrixIndexBlue"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="clearMatrixDisplay"></block><block type="setMatrixColor"><value name="MatrixRed"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="MatrixGreen"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="MatrixBlue"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="clearMatrixColor"></block><block type="MatrixWriteString"><value name="startMatrixT"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="startMatrixXY"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="OLED_begin"></block><block type="OLED_print"><value name="x"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="text"><block type="text"><field name="TEXT">hello Microduino</field></block></value></block><block type="MD_OLED_GeometryLine"><value name="x0"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y0"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="x1wh"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y1h"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="x2r"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y2"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="MD_OLED_GeometryCircle"><value name="x"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="rw"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="h"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="MD_OLED_getWidthHigh"></block><block type="OLED_print_roll"><value name="y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="x"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="text"><block type="text"><field name="TEXT">hello mCookie</field></block></value></block><block type="OLED_simplePrint"><value name="text"><block type="text"><field name="TEXT">hello Microduino</field></block></value></block></category><!--鍔熻兘--><category id="catMicroduinoFunction" colour="#edbd53"><block type="mCookie_Audio_Serial"><value name="Vol"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block><block type="mCookie_Audio_Control"></block><block type="mCookie_Audio_Choose"><value name="audioNumber"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="mCookie_RTC_set"><value name="Year"><shadow type="math_number"><field name="NUM">15</field></shadow></value><value name="Mouth"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Day"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="Week"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="Hour"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Minute"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="Second"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="mCookie_RTC_time"></block><block type="mCookie_RTC_Output"></block><block type="GPS"></block><block type="GPSShows"><value name="GPSHour"><block type="GPSHour"></block></value><value name="GPSMinute"><block type="GPSMinute"></block></value><value name="GPSSeconds"><block type="GPSSeconds"></block></value><value name="GPSDay"><block type="GPSDay"></block></value><value name="GPSMonth"><block type="GPSMonth"></block></value><value name="GPSYear"><block type="GPSYear"></block></value><value name="GPSFix"><block type="GPSFix"></block></value><value name="GPSQuality"><block type="GPSQuality"></block></value><value name="GPSLatitude"><block type="GPSLatitude"></block></value><value name="GPSLat"><block type="GPSLat"></block></value><value name="GPSLongitude"><block type="GPSLongitude"></block></value><value name="GPSLon"><block type="GPSLon"></block></value><value name="GPSSpeed"><block type="GPSSpeed"></block></value><value name="GPSAngle"><block type="GPSAngle"></block></value><value name="GPSAltitude"><block type="GPSAltitude"></block></value><value name="GPSSatellites"><block type="GPSSatellites"></block></value></block><block type="motionAccGyro"></block><block type="getMotionValue"></block><block type="motionDMP"></block><block type="motionSoft"></block><block type="getMotionYawPitchRoll"></block><block type="SD_Write"><value name="File_Name"><block type="text"><field name="File_Name">test.txt</field></block></value></block><block type="SD_Read"><value name="File_Name"><block type="text"><field name="File_Name">test.txt</field></block></value></block></category><!--閫氳--><category id="catMicroduinoCommunication" colour="#6c91ac"><!--BT--><block type="bluetoothMicroduinoBegin"></block><block type="bluetoothMicroduinoReciver"></block><block type="btMicroduinoReciverData"></block><block type="btMicroduinoSenderData"></block><block type="bluetoothmtankBegin"></block><block type="bluetoothmTankReciver"></block><block type="bluetoothmTankdata"></block><block type="bluetoothcolorled"></block><block type="IRSenderCode"><value name="data"><shadow type="math_number"><field name="NUM">0x89ABCDEF</field></shadow></value><value name="bits"><shadow type="math_number"><field name="NUM">32</field></shadow></value></block><block type="IRSenderRaw"><value name="length"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="freq"><shadow type="math_number"><field name="NUM">38</field></shadow></value></block><block type="IRReciver"><value name="PIN"><shadow type="pins_digital"></shadow></value><statement name="DO"><block type="serial_print_hex"><value name="CONTENT"><block type="variables_get"><field name="VAR">ir_item</field></block></value></block></statement></block><block type="IRReciverRaw"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="IRReciverEnable"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><!--nRF24--><block type="nRF_Init"></block><block type="nRF_Send"></block><block type="nRF_Read"></block><block type="WiFiBlynk"></block><block type="BLYNK_READ"></block><block type="BLYNK_WRITE"></block><block type="BLYNKParamOne"></block><block type="BLYNKParamArray"><value name="paramNum"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="WiFiBlynkTimer"></block><block type="WiFiBlynkVirtualWrite"></block><!--Zigbee--><!--<block type="Zigbee_AT"></block><block type="Zigbee_Init"><value name="BRate"><block type="math_number"><field name="BRate">9600</field></block></value></block><block type="Zigbee_Send"><value name="text"><block type="text"><field name="TEXT">hello Microduino</field></block></value></block><block type="Zigbee_Read"></block><block type="controls_if"><value name="IF0"><block type="Zigbee_Available"></block></value><statement name="DO0"></statement></block><block type="VariableIs"><value name="VariableIs"><block type="text"><field name="VariableIs">AA</field></block></value></block>--><!--W5500--><!--<block type="controls_if"><value name="IF0"><block type="W5500_Init"></block></value><statement name="DO0"></statement></block>--><!--SmartRF--><!-- 		<block type="smartRF_Init_Send"></block><block type="smartRF_Init_Read"></block><block type="smartRF_Send"></block><block type="smartRF_Read"></block> --><!--NFC--><!-- 		<block type="NFC_Format"></block> --><!--<block type="NFC_Write"></block>--><!-- 		<block type="NFC_Read"></block> --><!--GSM--><!-- 		<block type="GSM_SMS"></block><block type="controls_if"><value name="IF0"><block type="W5500_Init"></block></value><statement name="DO0"></statement></block> --></category><!--鎵ц鍣�--><category id="catMicroduinoExecutor" colour="#70bd94"><!--BreathingLight --><block type="BreathingLightH"><value name="LEDPinNumber"><shadow type="math_number"><field name="NUM">6</field></shadow></value><value name="LEDFrequency"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="BreathingLightX"><value name="LEDPinNumber"><shadow type="math_number"><field name="NUM">6</field></shadow></value><value name="LEDFrequency"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><!--colorLED--><block type="ws2812Begin"><value name="LEDNumber"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="LEDPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="ws2812Doing"><value name="LEDIndex"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="ws2812DoingRGB"><value name="LEDIndex"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="red"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="green"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="blue"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="ws2812BreathRGB"><value name="LEDIndex"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="red"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="green"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="blue"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><!--BUZZER--><block type="BuzzerTone"><value name="BuzzerPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value><value name="Frequency"><shadow type="math_number"><field name="NUM">200</field></shadow></value></block><block type="BuzzerToneMelody"><value name="BuzzerPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="BuzzerToneSong"><value name="BuzzerPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="BuzzerNoTone"><value name="BuzzerPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="MicroduinoTimer"><value name="intervalTime"><shadow type="math_number"><field name="NUM">2000</field></shadow></value></block><block type="MicroduinoTimerBegin"></block><block type="MicroduinoTimerOut"><value name="intervalTime"><shadow type="math_number"><field name="NUM">2000</field></shadow></value></block><block type="MicroduinoTimerDuration"></block><block type="microduinoServoMove"><value name="PIN"><shadow type="pins_digital"></shadow></value><value name="DEGREE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="DELAY_TIME"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block></category><!--浼犳劅鍣�--><category id="catMicroduinoSensor" colour="#efa752"><!--KEY--><!-- 		<block type="oldKEYDigital"></block><block type="oldKEYAnalog"></block> --><block type="Microduino_KEYDigital"></block><block type="Microduino_KEYAnalog"></block><block type="lm75"></block><block type="TSL2561LightReady"></block><block type="TSL2561Light"></block><block type="xyJoystick"></block><block type="microduinoJoystick"></block><block type="microduinoCrash"><value name="digitalPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="microduinoTuch"><value name="digitalPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="microduinoPIR"><value name="digitalPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="microduinoMic"><value name="digitalPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="microduinoLight"><value name="digitalPin"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block><block type="microduinoMicAnal"></block><block type="microduinoLightAnal"></block><block type="microduinoIRRactAnal"></block><!--TEMP HUM--><block type="mCookie_AM2321"></block><block type="mCookie_SHT2"></block><block type="ColorDetPrepare_TCS3414"></block><block type="ColorGet_TCS3414"></block><block type="MD_Potentiometer"></block></category><!--鎵╁睍鍙橀噺--><category id="catVariableExpansion" colour="#e386a1"><block type="Defination"></block><block type="nrfDataStructDefine"></block><block type="nrfDataMemberDefine"></block><block type="nrfDataSender"></block><block type="nrfDataMemberSender"></block><block type="nrfDataMemberReciver"></block><!-- 	      <block type="Structure"><statement name="DO"></statement></block><block type="Var_Definations"></block><block type="Struct_Var_Definations"></block> --><block type="melodyBuzzer"></block><block type="rhythmBuzzer"></block></category></category>';
