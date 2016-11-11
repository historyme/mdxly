#include <U8glib.h>
#include <BLE.h>

#define bleSerial Serial

U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_NONE);
#define setFont_L u8g.setFont(u8g_font_fur20)
#define setFont_S u8g.setFont(u8g_font_fixed_v0r)
#define setFont_M u8g.setFont(u8g_font_9x18)

BLE bleAT(bleSerial);

void setup() {
	Serial.begin(9600);
	//u8g.setRot90();
	u8g.undoRotation();
	setFont_S;

	bleAT.queryROLE();
	bleAT.queryVersion();
	//bleAT.connectSlaver("F4B85EDB983E");
	bleAT.querySuccessedADDR();
	bleAT.searchAvalibleSlavers(3000);

}

void loop() {

	uint8_t length=bleAT.returnAT.length();

	u8g.firstPage();
	do {
		
		uint8_t lastIndex = 0;
		uint8_t y = 0;
		for (uint8_t i = 0; i < length; i++) {
			if (bleAT.returnAT[i] == '\n') {

				if(y==70) {
					y=10;
				} else {
					y += 10;
				}
				u8g.setPrintPos(0, y);
				u8g.print(bleAT.returnAT.substring(lastIndex, i));
				lastIndex = i;
			}
		}

	} while (u8g.nextPage());
}




