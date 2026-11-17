import { i as string, n as number, r as object, t as _enum } from "./schemas-D7ISJfF9.js";
import { i as projectTypes, n as budgets, r as deliveryTimes, t as booking } from "./booking-CDuk7ZBX.js";
//#region src/content/timezones.ts
/** IANA time zone (including old names browsers may report) to ISO 3166 country code. */
var zoneCountry = {
	"Africa/Abidjan": "CI",
	"Africa/Accra": "GH",
	"Africa/Addis_Ababa": "ET",
	"Africa/Algiers": "DZ",
	"Africa/Asmara": "ER",
	"Africa/Asmera": "KE",
	"Africa/Bamako": "ML",
	"Africa/Bangui": "CF",
	"Africa/Banjul": "GM",
	"Africa/Bissau": "GW",
	"Africa/Blantyre": "MW",
	"Africa/Brazzaville": "CG",
	"Africa/Bujumbura": "BI",
	"Africa/Cairo": "EG",
	"Africa/Casablanca": "MA",
	"Africa/Ceuta": "ES",
	"Africa/Conakry": "GN",
	"Africa/Dakar": "SN",
	"Africa/Dar_es_Salaam": "TZ",
	"Africa/Djibouti": "DJ",
	"Africa/Douala": "CM",
	"Africa/El_Aaiun": "EH",
	"Africa/Freetown": "SL",
	"Africa/Gaborone": "BW",
	"Africa/Harare": "ZW",
	"Africa/Johannesburg": "ZA",
	"Africa/Juba": "SS",
	"Africa/Kampala": "UG",
	"Africa/Khartoum": "SD",
	"Africa/Kigali": "RW",
	"Africa/Kinshasa": "CD",
	"Africa/Lagos": "NG",
	"Africa/Libreville": "GA",
	"Africa/Lome": "TG",
	"Africa/Luanda": "AO",
	"Africa/Lubumbashi": "CD",
	"Africa/Lusaka": "ZM",
	"Africa/Malabo": "GQ",
	"Africa/Maputo": "MZ",
	"Africa/Maseru": "LS",
	"Africa/Mbabane": "SZ",
	"Africa/Mogadishu": "SO",
	"Africa/Monrovia": "LR",
	"Africa/Nairobi": "KE",
	"Africa/Ndjamena": "TD",
	"Africa/Niamey": "NE",
	"Africa/Nouakchott": "MR",
	"Africa/Ouagadougou": "BF",
	"Africa/Porto-Novo": "BJ",
	"Africa/Sao_Tome": "ST",
	"Africa/Timbuktu": "CI",
	"Africa/Tripoli": "LY",
	"Africa/Tunis": "TN",
	"Africa/Windhoek": "NA",
	"America/Adak": "US",
	"America/Anchorage": "US",
	"America/Anguilla": "AI",
	"America/Antigua": "AG",
	"America/Araguaina": "BR",
	"America/Argentina/Buenos_Aires": "AR",
	"America/Argentina/Catamarca": "AR",
	"America/Argentina/ComodRivadavia": "AR",
	"America/Argentina/Cordoba": "AR",
	"America/Argentina/Jujuy": "AR",
	"America/Argentina/La_Rioja": "AR",
	"America/Argentina/Mendoza": "AR",
	"America/Argentina/Rio_Gallegos": "AR",
	"America/Argentina/Salta": "AR",
	"America/Argentina/San_Juan": "AR",
	"America/Argentina/San_Luis": "AR",
	"America/Argentina/Tucuman": "AR",
	"America/Argentina/Ushuaia": "AR",
	"America/Aruba": "AW",
	"America/Asuncion": "PY",
	"America/Atikokan": "CA",
	"America/Atka": "US",
	"America/Bahia": "BR",
	"America/Bahia_Banderas": "MX",
	"America/Barbados": "BB",
	"America/Belem": "BR",
	"America/Belize": "BZ",
	"America/Blanc-Sablon": "CA",
	"America/Boa_Vista": "BR",
	"America/Bogota": "CO",
	"America/Boise": "US",
	"America/Buenos_Aires": "AR",
	"America/Cambridge_Bay": "CA",
	"America/Campo_Grande": "BR",
	"America/Cancun": "MX",
	"America/Caracas": "VE",
	"America/Catamarca": "AR",
	"America/Cayenne": "GF",
	"America/Cayman": "KY",
	"America/Chicago": "US",
	"America/Chihuahua": "MX",
	"America/Ciudad_Juarez": "MX",
	"America/Coral_Harbour": "PA",
	"America/Cordoba": "AR",
	"America/Costa_Rica": "CR",
	"America/Coyhaique": "CL",
	"America/Creston": "CA",
	"America/Cuiaba": "BR",
	"America/Curacao": "CW",
	"America/Danmarkshavn": "GL",
	"America/Dawson": "CA",
	"America/Dawson_Creek": "CA",
	"America/Denver": "US",
	"America/Detroit": "US",
	"America/Dominica": "DM",
	"America/Edmonton": "CA",
	"America/Eirunepe": "BR",
	"America/El_Salvador": "SV",
	"America/Ensenada": "MX",
	"America/Fort_Nelson": "CA",
	"America/Fort_Wayne": "US",
	"America/Fortaleza": "BR",
	"America/Glace_Bay": "CA",
	"America/Godthab": "GL",
	"America/Goose_Bay": "CA",
	"America/Grand_Turk": "TC",
	"America/Grenada": "GD",
	"America/Guadeloupe": "GP",
	"America/Guatemala": "GT",
	"America/Guayaquil": "EC",
	"America/Guyana": "GY",
	"America/Halifax": "CA",
	"America/Havana": "CU",
	"America/Hermosillo": "MX",
	"America/Indiana/Indianapolis": "US",
	"America/Indiana/Knox": "US",
	"America/Indiana/Marengo": "US",
	"America/Indiana/Petersburg": "US",
	"America/Indiana/Tell_City": "US",
	"America/Indiana/Vevay": "US",
	"America/Indiana/Vincennes": "US",
	"America/Indiana/Winamac": "US",
	"America/Indianapolis": "US",
	"America/Inuvik": "CA",
	"America/Iqaluit": "CA",
	"America/Jamaica": "JM",
	"America/Jujuy": "AR",
	"America/Juneau": "US",
	"America/Kentucky/Louisville": "US",
	"America/Kentucky/Monticello": "US",
	"America/Knox_IN": "US",
	"America/Kralendijk": "BQ",
	"America/La_Paz": "BO",
	"America/Lima": "PE",
	"America/Los_Angeles": "US",
	"America/Louisville": "US",
	"America/Lower_Princes": "SX",
	"America/Maceio": "BR",
	"America/Managua": "NI",
	"America/Manaus": "BR",
	"America/Marigot": "MF",
	"America/Martinique": "MQ",
	"America/Matamoros": "MX",
	"America/Mazatlan": "MX",
	"America/Mendoza": "AR",
	"America/Menominee": "US",
	"America/Merida": "MX",
	"America/Metlakatla": "US",
	"America/Mexico_City": "MX",
	"America/Miquelon": "PM",
	"America/Moncton": "CA",
	"America/Monterrey": "MX",
	"America/Montevideo": "UY",
	"America/Montreal": "CA",
	"America/Montserrat": "MS",
	"America/Nassau": "BS",
	"America/New_York": "US",
	"America/Nipigon": "CA",
	"America/Nome": "US",
	"America/Noronha": "BR",
	"America/North_Dakota/Beulah": "US",
	"America/North_Dakota/Center": "US",
	"America/North_Dakota/New_Salem": "US",
	"America/Nuuk": "GL",
	"America/Ojinaga": "MX",
	"America/Panama": "PA",
	"America/Pangnirtung": "CA",
	"America/Paramaribo": "SR",
	"America/Phoenix": "US",
	"America/Port-au-Prince": "HT",
	"America/Port_of_Spain": "TT",
	"America/Porto_Acre": "BR",
	"America/Porto_Velho": "BR",
	"America/Puerto_Rico": "PR",
	"America/Punta_Arenas": "CL",
	"America/Rainy_River": "CA",
	"America/Rankin_Inlet": "CA",
	"America/Recife": "BR",
	"America/Regina": "CA",
	"America/Resolute": "CA",
	"America/Rio_Branco": "BR",
	"America/Rosario": "AR",
	"America/Santa_Isabel": "MX",
	"America/Santarem": "BR",
	"America/Santiago": "CL",
	"America/Santo_Domingo": "DO",
	"America/Sao_Paulo": "BR",
	"America/Scoresbysund": "GL",
	"America/Shiprock": "US",
	"America/Sitka": "US",
	"America/St_Barthelemy": "BL",
	"America/St_Johns": "CA",
	"America/St_Kitts": "KN",
	"America/St_Lucia": "LC",
	"America/St_Thomas": "VI",
	"America/St_Vincent": "VC",
	"America/Swift_Current": "CA",
	"America/Tegucigalpa": "HN",
	"America/Thule": "GL",
	"America/Thunder_Bay": "CA",
	"America/Tijuana": "MX",
	"America/Toronto": "CA",
	"America/Tortola": "VG",
	"America/Vancouver": "CA",
	"America/Virgin": "PR",
	"America/Whitehorse": "CA",
	"America/Winnipeg": "CA",
	"America/Yakutat": "US",
	"America/Yellowknife": "CA",
	"Antarctica/Casey": "AQ",
	"Antarctica/Davis": "AQ",
	"Antarctica/DumontDUrville": "AQ",
	"Antarctica/Macquarie": "AU",
	"Antarctica/Mawson": "AQ",
	"Antarctica/McMurdo": "AQ",
	"Antarctica/Palmer": "AQ",
	"Antarctica/Rothera": "AQ",
	"Antarctica/South_Pole": "NZ",
	"Antarctica/Syowa": "AQ",
	"Antarctica/Troll": "AQ",
	"Antarctica/Vostok": "AQ",
	"Arctic/Longyearbyen": "SJ",
	"Asia/Aden": "YE",
	"Asia/Almaty": "KZ",
	"Asia/Amman": "JO",
	"Asia/Anadyr": "RU",
	"Asia/Aqtau": "KZ",
	"Asia/Aqtobe": "KZ",
	"Asia/Ashgabat": "TM",
	"Asia/Ashkhabad": "TM",
	"Asia/Atyrau": "KZ",
	"Asia/Baghdad": "IQ",
	"Asia/Bahrain": "BH",
	"Asia/Baku": "AZ",
	"Asia/Bangkok": "TH",
	"Asia/Barnaul": "RU",
	"Asia/Beirut": "LB",
	"Asia/Bishkek": "KG",
	"Asia/Brunei": "BN",
	"Asia/Calcutta": "IN",
	"Asia/Chita": "RU",
	"Asia/Choibalsan": "MN",
	"Asia/Chongqing": "CN",
	"Asia/Chungking": "CN",
	"Asia/Colombo": "LK",
	"Asia/Dacca": "BD",
	"Asia/Damascus": "SY",
	"Asia/Dhaka": "BD",
	"Asia/Dili": "TL",
	"Asia/Dubai": "AE",
	"Asia/Dushanbe": "TJ",
	"Asia/Famagusta": "CY",
	"Asia/Gaza": "PS",
	"Asia/Harbin": "CN",
	"Asia/Hebron": "PS",
	"Asia/Ho_Chi_Minh": "VN",
	"Asia/Hong_Kong": "HK",
	"Asia/Hovd": "MN",
	"Asia/Irkutsk": "RU",
	"Asia/Istanbul": "TR",
	"Asia/Jakarta": "ID",
	"Asia/Jayapura": "ID",
	"Asia/Jerusalem": "IL",
	"Asia/Kabul": "AF",
	"Asia/Kamchatka": "RU",
	"Asia/Karachi": "PK",
	"Asia/Kashgar": "CN",
	"Asia/Kathmandu": "NP",
	"Asia/Katmandu": "NP",
	"Asia/Khandyga": "RU",
	"Asia/Kolkata": "IN",
	"Asia/Krasnoyarsk": "RU",
	"Asia/Kuala_Lumpur": "MY",
	"Asia/Kuching": "MY",
	"Asia/Kuwait": "KW",
	"Asia/Macao": "MO",
	"Asia/Macau": "MO",
	"Asia/Magadan": "RU",
	"Asia/Makassar": "ID",
	"Asia/Manila": "PH",
	"Asia/Muscat": "OM",
	"Asia/Nicosia": "CY",
	"Asia/Novokuznetsk": "RU",
	"Asia/Novosibirsk": "RU",
	"Asia/Omsk": "RU",
	"Asia/Oral": "KZ",
	"Asia/Phnom_Penh": "KH",
	"Asia/Pontianak": "ID",
	"Asia/Pyongyang": "KP",
	"Asia/Qatar": "QA",
	"Asia/Qostanay": "KZ",
	"Asia/Qyzylorda": "KZ",
	"Asia/Rangoon": "MM",
	"Asia/Riyadh": "SA",
	"Asia/Saigon": "VN",
	"Asia/Sakhalin": "RU",
	"Asia/Samarkand": "UZ",
	"Asia/Seoul": "KR",
	"Asia/Shanghai": "CN",
	"Asia/Singapore": "SG",
	"Asia/Srednekolymsk": "RU",
	"Asia/Taipei": "TW",
	"Asia/Tashkent": "UZ",
	"Asia/Tbilisi": "GE",
	"Asia/Tehran": "IR",
	"Asia/Tel_Aviv": "IL",
	"Asia/Thimbu": "BT",
	"Asia/Thimphu": "BT",
	"Asia/Tokyo": "JP",
	"Asia/Tomsk": "RU",
	"Asia/Ujung_Pandang": "ID",
	"Asia/Ulaanbaatar": "MN",
	"Asia/Ulan_Bator": "MN",
	"Asia/Urumqi": "CN",
	"Asia/Ust-Nera": "RU",
	"Asia/Vientiane": "LA",
	"Asia/Vladivostok": "RU",
	"Asia/Yakutsk": "RU",
	"Asia/Yangon": "MM",
	"Asia/Yekaterinburg": "RU",
	"Asia/Yerevan": "AM",
	"Atlantic/Azores": "PT",
	"Atlantic/Bermuda": "BM",
	"Atlantic/Canary": "ES",
	"Atlantic/Cape_Verde": "CV",
	"Atlantic/Faeroe": "FO",
	"Atlantic/Faroe": "FO",
	"Atlantic/Jan_Mayen": "DE",
	"Atlantic/Madeira": "PT",
	"Atlantic/Reykjavik": "IS",
	"Atlantic/South_Georgia": "GS",
	"Atlantic/St_Helena": "SH",
	"Atlantic/Stanley": "FK",
	"Australia/ACT": "AU",
	"Australia/Adelaide": "AU",
	"Australia/Brisbane": "AU",
	"Australia/Broken_Hill": "AU",
	"Australia/Canberra": "AU",
	"Australia/Currie": "AU",
	"Australia/Darwin": "AU",
	"Australia/Eucla": "AU",
	"Australia/Hobart": "AU",
	"Australia/LHI": "AU",
	"Australia/Lindeman": "AU",
	"Australia/Lord_Howe": "AU",
	"Australia/Melbourne": "AU",
	"Australia/NSW": "AU",
	"Australia/North": "AU",
	"Australia/Perth": "AU",
	"Australia/Queensland": "AU",
	"Australia/South": "AU",
	"Australia/Sydney": "AU",
	"Australia/Tasmania": "AU",
	"Australia/Victoria": "AU",
	"Australia/West": "AU",
	"Australia/Yancowinna": "AU",
	"Brazil/Acre": "BR",
	"Brazil/DeNoronha": "BR",
	"Brazil/East": "BR",
	"Brazil/West": "BR",
	"Canada/Atlantic": "CA",
	"Canada/Central": "CA",
	"Canada/Eastern": "CA",
	"Canada/Mountain": "CA",
	"Canada/Newfoundland": "CA",
	"Canada/Pacific": "CA",
	"Canada/Saskatchewan": "CA",
	"Canada/Yukon": "CA",
	"Chile/Continental": "CL",
	"Chile/EasterIsland": "CL",
	"Europe/Amsterdam": "NL",
	"Europe/Andorra": "AD",
	"Europe/Astrakhan": "RU",
	"Europe/Athens": "GR",
	"Europe/Belfast": "GB",
	"Europe/Belgrade": "RS",
	"Europe/Berlin": "DE",
	"Europe/Bratislava": "SK",
	"Europe/Brussels": "BE",
	"Europe/Bucharest": "RO",
	"Europe/Budapest": "HU",
	"Europe/Busingen": "DE",
	"Europe/Chisinau": "MD",
	"Europe/Copenhagen": "DK",
	"Europe/Dublin": "IE",
	"Europe/Gibraltar": "GI",
	"Europe/Guernsey": "GG",
	"Europe/Helsinki": "FI",
	"Europe/Isle_of_Man": "IM",
	"Europe/Istanbul": "TR",
	"Europe/Jersey": "JE",
	"Europe/Kaliningrad": "RU",
	"Europe/Kiev": "UA",
	"Europe/Kirov": "RU",
	"Europe/Kyiv": "UA",
	"Europe/Lisbon": "PT",
	"Europe/Ljubljana": "SI",
	"Europe/London": "GB",
	"Europe/Luxembourg": "LU",
	"Europe/Madrid": "ES",
	"Europe/Malta": "MT",
	"Europe/Mariehamn": "AX",
	"Europe/Minsk": "BY",
	"Europe/Monaco": "MC",
	"Europe/Moscow": "RU",
	"Europe/Nicosia": "CY",
	"Europe/Oslo": "NO",
	"Europe/Paris": "FR",
	"Europe/Podgorica": "ME",
	"Europe/Prague": "CZ",
	"Europe/Riga": "LV",
	"Europe/Rome": "IT",
	"Europe/Samara": "RU",
	"Europe/San_Marino": "SM",
	"Europe/Sarajevo": "BA",
	"Europe/Saratov": "RU",
	"Europe/Simferopol": "UA",
	"Europe/Skopje": "MK",
	"Europe/Sofia": "BG",
	"Europe/Stockholm": "SE",
	"Europe/Tallinn": "EE",
	"Europe/Tirane": "AL",
	"Europe/Tiraspol": "MD",
	"Europe/Ulyanovsk": "RU",
	"Europe/Uzhgorod": "UA",
	"Europe/Vaduz": "LI",
	"Europe/Vatican": "VA",
	"Europe/Vienna": "AT",
	"Europe/Vilnius": "LT",
	"Europe/Volgograd": "RU",
	"Europe/Warsaw": "PL",
	"Europe/Zagreb": "HR",
	"Europe/Zaporozhye": "UA",
	"Europe/Zurich": "CH",
	"Indian/Antananarivo": "MG",
	"Indian/Chagos": "IO",
	"Indian/Christmas": "CX",
	"Indian/Cocos": "CC",
	"Indian/Comoro": "KM",
	"Indian/Kerguelen": "TF",
	"Indian/Mahe": "SC",
	"Indian/Maldives": "MV",
	"Indian/Mauritius": "MU",
	"Indian/Mayotte": "YT",
	"Indian/Reunion": "RE",
	"Mexico/BajaNorte": "MX",
	"Mexico/BajaSur": "MX",
	"Mexico/General": "MX",
	"Pacific/Apia": "WS",
	"Pacific/Auckland": "NZ",
	"Pacific/Bougainville": "PG",
	"Pacific/Chatham": "NZ",
	"Pacific/Chuuk": "FM",
	"Pacific/Easter": "CL",
	"Pacific/Efate": "VU",
	"Pacific/Enderbury": "KI",
	"Pacific/Fakaofo": "TK",
	"Pacific/Fiji": "FJ",
	"Pacific/Funafuti": "TV",
	"Pacific/Galapagos": "EC",
	"Pacific/Gambier": "PF",
	"Pacific/Guadalcanal": "SB",
	"Pacific/Guam": "GU",
	"Pacific/Honolulu": "US",
	"Pacific/Johnston": "US",
	"Pacific/Kanton": "KI",
	"Pacific/Kiritimati": "KI",
	"Pacific/Kosrae": "FM",
	"Pacific/Kwajalein": "MH",
	"Pacific/Majuro": "MH",
	"Pacific/Marquesas": "PF",
	"Pacific/Midway": "UM",
	"Pacific/Nauru": "NR",
	"Pacific/Niue": "NU",
	"Pacific/Norfolk": "NF",
	"Pacific/Noumea": "NC",
	"Pacific/Pago_Pago": "AS",
	"Pacific/Palau": "PW",
	"Pacific/Pitcairn": "PN",
	"Pacific/Pohnpei": "FM",
	"Pacific/Ponape": "SB",
	"Pacific/Port_Moresby": "PG",
	"Pacific/Rarotonga": "CK",
	"Pacific/Saipan": "MP",
	"Pacific/Samoa": "AS",
	"Pacific/Tahiti": "PF",
	"Pacific/Tarawa": "KI",
	"Pacific/Tongatapu": "TO",
	"Pacific/Truk": "PG",
	"Pacific/Wake": "UM",
	"Pacific/Wallis": "WF",
	"Pacific/Yap": "PG",
	"US/Alaska": "US",
	"US/Aleutian": "US",
	"US/Arizona": "US",
	"US/Central": "US",
	"US/East-Indiana": "US",
	"US/Eastern": "US",
	"US/Hawaii": "US",
	"US/Indiana-Starke": "US",
	"US/Michigan": "US",
	"US/Mountain": "US",
	"US/Pacific": "US",
	"US/Samoa": "AS"
};
/** Old zone names (still reported by some browsers) to their current tz database name. */
var zoneCurrent = {
	"Africa/Asmera": "Africa/Nairobi",
	"Africa/Timbuktu": "Africa/Abidjan",
	"America/Argentina/ComodRivadavia": "America/Argentina/Catamarca",
	"America/Atka": "America/Adak",
	"America/Buenos_Aires": "America/Argentina/Buenos_Aires",
	"America/Catamarca": "America/Argentina/Catamarca",
	"America/Coral_Harbour": "America/Panama",
	"America/Cordoba": "America/Argentina/Cordoba",
	"America/Ensenada": "America/Tijuana",
	"America/Fort_Wayne": "America/Indiana/Indianapolis",
	"America/Godthab": "America/Nuuk",
	"America/Indianapolis": "America/Indiana/Indianapolis",
	"America/Jujuy": "America/Argentina/Jujuy",
	"America/Knox_IN": "America/Indiana/Knox",
	"America/Louisville": "America/Kentucky/Louisville",
	"America/Mendoza": "America/Argentina/Mendoza",
	"America/Montreal": "America/Toronto",
	"America/Nipigon": "America/Toronto",
	"America/Pangnirtung": "America/Iqaluit",
	"America/Porto_Acre": "America/Rio_Branco",
	"America/Rainy_River": "America/Winnipeg",
	"America/Rosario": "America/Argentina/Cordoba",
	"America/Santa_Isabel": "America/Tijuana",
	"America/Shiprock": "America/Denver",
	"America/Thunder_Bay": "America/Toronto",
	"America/Virgin": "America/Puerto_Rico",
	"America/Yellowknife": "America/Edmonton",
	"Antarctica/South_Pole": "Pacific/Auckland",
	"Asia/Ashkhabad": "Asia/Ashgabat",
	"Asia/Calcutta": "Asia/Kolkata",
	"Asia/Choibalsan": "Asia/Ulaanbaatar",
	"Asia/Chongqing": "Asia/Shanghai",
	"Asia/Chungking": "Asia/Shanghai",
	"Asia/Dacca": "Asia/Dhaka",
	"Asia/Harbin": "Asia/Shanghai",
	"Asia/Istanbul": "Europe/Istanbul",
	"Asia/Kashgar": "Asia/Urumqi",
	"Asia/Katmandu": "Asia/Kathmandu",
	"Asia/Macao": "Asia/Macau",
	"Asia/Rangoon": "Asia/Yangon",
	"Asia/Saigon": "Asia/Ho_Chi_Minh",
	"Asia/Tel_Aviv": "Asia/Jerusalem",
	"Asia/Thimbu": "Asia/Thimphu",
	"Asia/Ujung_Pandang": "Asia/Makassar",
	"Asia/Ulan_Bator": "Asia/Ulaanbaatar",
	"Atlantic/Faeroe": "Atlantic/Faroe",
	"Atlantic/Jan_Mayen": "Europe/Berlin",
	"Australia/ACT": "Australia/Sydney",
	"Australia/Canberra": "Australia/Sydney",
	"Australia/Currie": "Australia/Hobart",
	"Australia/LHI": "Australia/Lord_Howe",
	"Australia/NSW": "Australia/Sydney",
	"Australia/North": "Australia/Darwin",
	"Australia/Queensland": "Australia/Brisbane",
	"Australia/South": "Australia/Adelaide",
	"Australia/Tasmania": "Australia/Hobart",
	"Australia/Victoria": "Australia/Melbourne",
	"Australia/West": "Australia/Perth",
	"Australia/Yancowinna": "Australia/Broken_Hill",
	"Brazil/Acre": "America/Rio_Branco",
	"Brazil/DeNoronha": "America/Noronha",
	"Brazil/East": "America/Sao_Paulo",
	"Brazil/West": "America/Manaus",
	"Canada/Atlantic": "America/Halifax",
	"Canada/Central": "America/Winnipeg",
	"Canada/Eastern": "America/Toronto",
	"Canada/Mountain": "America/Edmonton",
	"Canada/Newfoundland": "America/St_Johns",
	"Canada/Pacific": "America/Vancouver",
	"Canada/Saskatchewan": "America/Regina",
	"Canada/Yukon": "America/Whitehorse",
	"Chile/Continental": "America/Santiago",
	"Chile/EasterIsland": "Pacific/Easter",
	"Europe/Belfast": "Europe/London",
	"Europe/Kiev": "Europe/Kyiv",
	"Europe/Nicosia": "Asia/Nicosia",
	"Europe/Tiraspol": "Europe/Chisinau",
	"Europe/Uzhgorod": "Europe/Kyiv",
	"Europe/Zaporozhye": "Europe/Kyiv",
	"Mexico/BajaNorte": "America/Tijuana",
	"Mexico/BajaSur": "America/Mazatlan",
	"Mexico/General": "America/Mexico_City",
	"Pacific/Enderbury": "Pacific/Kanton",
	"Pacific/Johnston": "Pacific/Honolulu",
	"Pacific/Ponape": "Pacific/Guadalcanal",
	"Pacific/Samoa": "Pacific/Pago_Pago",
	"Pacific/Truk": "Pacific/Port_Moresby",
	"Pacific/Yap": "Pacific/Port_Moresby",
	"US/Alaska": "America/Anchorage",
	"US/Aleutian": "America/Adak",
	"US/Arizona": "America/Phoenix",
	"US/Central": "America/Chicago",
	"US/East-Indiana": "America/Indiana/Indianapolis",
	"US/Eastern": "America/New_York",
	"US/Hawaii": "Pacific/Honolulu",
	"US/Indiana-Starke": "America/Indiana/Knox",
	"US/Michigan": "America/Detroit",
	"US/Mountain": "America/Denver",
	"US/Pacific": "America/Los_Angeles",
	"US/Samoa": "Pacific/Pago_Pago"
};
//#endregion
//#region src/lib/timezones.ts
/** Current tz name for any zone a browser may report (e.g. "Asia/Calcutta" becomes "Asia/Kolkata"). */
function currentZone(zone) {
	return zoneCurrent[zone] ?? zone;
}
var southAmerica = new Set("AR BO BR CL CO EC FK GF GY PE PY SR UY VE GS".split(" "));
var atlanticContinent = {
	IS: "Europe",
	PT: "Europe",
	ES: "Europe",
	FO: "Europe",
	BM: "North America",
	CV: "Africa",
	SH: "Africa",
	FK: "South America",
	GS: "South America"
};
/** Continent label from the zone's first part, refined by country where the tz region is ambiguous. */
function continentOf(zone, cc) {
	const region = zone.split("/")[0] ?? "";
	if (region === "America") return southAmerica.has(cc) ? "South America" : "North America";
	if (region === "Atlantic") return atlanticContinent[cc] ?? "Atlantic";
	if (region === "Australia" || region === "Pacific") return "Oceania";
	if (region === "Indian") return "Indian Ocean";
	if (region === "Arctic") return "Europe";
	if ([
		"Africa",
		"Asia",
		"Europe",
		"Antarctica"
	].includes(region)) return region;
	return "Other";
}
/** "America/Argentina/Buenos_Aires" becomes "Buenos Aires". */
function cityOf(zone) {
	return (zone.split("/").pop() ?? zone).replace(/_/g, " ");
}
var normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9+ ]/g, " ").replace(/\s+/g, " ").trim();
/** Extra words people search by, per country code. */
var countryAliases = {
	GB: [
		"uk",
		"england",
		"britain",
		"great britain",
		"scotland",
		"wales",
		"northern ireland"
	],
	US: [
		"usa",
		"us",
		"america",
		"united states",
		"states"
	],
	AE: ["uae", "emirates"],
	IN: ["india", "bharat"],
	BD: ["bangladesh"],
	AU: ["australia", "aus"],
	NZ: ["new zealand", "nz"],
	KR: ["korea", "south korea"],
	NL: ["holland", "netherlands"]
};
/** Main zones of countries that have many, ranked first (in this order) among equal matches. */
var majorList = [
	"America/New_York",
	"America/Chicago",
	"America/Denver",
	"America/Los_Angeles",
	"America/Phoenix",
	"America/Anchorage",
	"Pacific/Honolulu",
	"America/Toronto",
	"America/Vancouver",
	"America/Edmonton",
	"America/Winnipeg",
	"America/Halifax",
	"America/St_Johns",
	"Australia/Sydney",
	"Australia/Melbourne",
	"Australia/Brisbane",
	"Australia/Perth",
	"Australia/Adelaide",
	"Australia/Darwin",
	"Australia/Hobart",
	"America/Sao_Paulo",
	"America/Mexico_City",
	"Europe/Moscow",
	"Asia/Jakarta",
	"Europe/Lisbon",
	"Europe/Madrid",
	"Pacific/Auckland"
];
var majorRank = new Map(majorList.map((z, i) => [z, majorList.length - i]));
var regionNames = null;
function countryName(cc) {
	try {
		regionNames ??= new Intl.DisplayNames(["en"], { type: "region" });
		return regionNames.of(cc) ?? cc;
	} catch {
		return cc;
	}
}
var cache = null;
/** Every IANA zone the browser supports, by current name, with country and continent. */
function allZones() {
	if (cache) return cache;
	let ids;
	try {
		ids = Intl.supportedValuesOf("timeZone");
	} catch {
		ids = Object.keys(zoneCountry);
	}
	const seen = /* @__PURE__ */ new Set();
	const list = [];
	for (const raw of [...ids, "UTC"]) {
		const id = currentZone(raw);
		if (seen.has(id)) continue;
		seen.add(id);
		list.push(zoneInfo(id));
	}
	list.sort((a, b) => a.continent === b.continent ? a.country === b.country ? a.city.localeCompare(b.city) : a.country.localeCompare(b.country) : a.continent.localeCompare(b.continent));
	cache = list;
	return list;
}
function zoneInfo(zone) {
	const id = currentZone(zone);
	const cc = zoneCountry[id] ?? zoneCountry[zone] ?? "";
	const city = id === "UTC" ? "UTC" : cityOf(id);
	const country = cc ? countryName(cc) : "Coordinated Universal Time";
	return {
		id,
		city,
		countryCode: cc,
		country,
		continent: cc ? continentOf(id, cc) : "Other",
		haystack: normalize([
			city,
			country,
			cc,
			id.replace(/[/_]/g, " "),
			...countryAliases[cc] ?? []
		].join(" "))
	};
}
/**
* Ranked search over city, country name, country code, zone name and common aliases
* (UK, USA, UAE, India, ...). Every word in the query must match somewhere.
*/
function searchZones(query, zones = allZones()) {
	const q = normalize(query);
	if (!q) return zones;
	const words = q.split(" ");
	const scored = [];
	for (const z of zones) {
		if (!words.every((w) => z.haystack.includes(w))) continue;
		const city = normalize(z.city);
		const country = normalize(z.country);
		const code = z.countryCode.toLowerCase();
		const aliases = countryAliases[z.countryCode] ?? [];
		let score = 1;
		if (city === q) score = 100;
		else if (code === q || aliases.includes(q) || country === q) score = 90;
		else if (city.startsWith(q)) score = 80;
		else if (country.startsWith(q) || aliases.some((a) => a.startsWith(q))) score = 60;
		else if (city.includes(q)) score = 40;
		const rank = majorRank.get(z.id);
		if (rank) score += 5 + rank / 100;
		scored.push({
			z,
			score
		});
	}
	return scored.sort((a, b) => b.score - a.score || a.z.city.localeCompare(b.z.city)).map((s) => s.z);
}
/** Display path, e.g. "Europe > Finland > Helsinki". */
var zonePath = (z) => z.countryCode ? `${z.continent} > ${z.country} > ${z.city}` : z.city;
//#endregion
//#region src/lib/booking.ts
function validTimezone(zone) {
	try {
		new Intl.DateTimeFormat("en", { timeZone: zone }).format();
		return true;
	} catch {
		return false;
	}
}
var bookingFields = object({
	full_name: string().trim().min(2, "Please enter your full name.").max(100),
	company_name: string().trim().min(2, "Please enter your company name.").max(120),
	company_email: string().trim().email("Please enter a valid company email.").max(255),
	phone: string().trim().max(40).default(""),
	project_type: _enum(projectTypes),
	budget: _enum(budgets),
	delivery_time: _enum(deliveryTimes),
	message: string().trim().min(10, "Please write at least 10 characters.").max(3e3)
});
bookingFields.extend({
	slot_start: string().datetime(),
	visitor_timezone: string().max(100).refine(validTimezone),
	website: string().max(500).default(""),
	rendered_at: number().finite()
});
function horizon(now) {
	return now + booking.maxDaysAhead * 864e5;
}
function validSlot(start, now) {
	if (!Number.isFinite(start) || start < now + booking.minNoticeHours * 36e5 || start > horizon(now)) return false;
	const business = new Date(start + 288e5);
	return booking.workingDays.some((d) => d === business.getUTCDay()) && start % (booking.slotMinutes * 6e4) === 0;
}
function generateSlots(now, taken = []) {
	const blocked = new Set(taken.map((s) => new Date(s).getTime()));
	const step = booking.slotMinutes * 6e4;
	const slots = [];
	for (let time = Math.ceil((now + booking.minNoticeHours * 36e5) / step) * step; time <= horizon(now); time += step) if (validSlot(time, now) && !blocked.has(time)) slots.push(new Date(time).toISOString());
	return slots;
}
function dateKey(date, zone) {
	const parts = new Intl.DateTimeFormat("en", {
		timeZone: zone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).formatToParts(date);
	return [
		"year",
		"month",
		"day"
	].map((k) => parts.find((p) => p.type === k)?.value).join("-");
}
/** Older zone names some browsers still report, mapped to the names in the booking list. */
var zoneAliases = {
	"Asia/Calcutta": "Asia/Kolkata",
	"Asia/Dacca": "Asia/Dhaka",
	Singapore: "Asia/Singapore",
	Japan: "Asia/Tokyo",
	GB: "Europe/London",
	"Europe/Belfast": "Europe/London",
	Eire: "Europe/Dublin",
	"Australia/West": "Australia/Perth",
	"Australia/ACT": "Australia/Sydney",
	"Australia/Canberra": "Australia/Sydney",
	"Australia/NSW": "Australia/Sydney",
	"Australia/Victoria": "Australia/Melbourne",
	"Australia/Queensland": "Australia/Brisbane",
	NZ: "Pacific/Auckland",
	"Canada/Eastern": "America/Toronto",
	"Canada/Pacific": "America/Vancouver",
	"US/Eastern": "America/New_York",
	"US/Central": "America/Chicago",
	"US/Mountain": "America/Denver",
	"US/Pacific": "America/Los_Angeles"
};
/** The detected zone, renamed to its current name when the browser reports an old alias. */
function canonicalZone(zone) {
	return zoneAliases[zone] ?? currentZone(zone);
}
/** City part of an IANA zone, e.g. "America/Los_Angeles" becomes "Los Angeles". */
function zoneCity(zone) {
	return (zone.split("/").pop() ?? zone).replace(/_/g, " ");
}
/** Current UTC offset of a zone at a given moment, e.g. "GMT+5:30" or "GMT+0". */
function zoneOffset(zone, at) {
	const name = new Intl.DateTimeFormat("en-US", {
		timeZone: zone,
		timeZoneName: "shortOffset"
	}).formatToParts(at).find((p) => p.type === "timeZoneName")?.value ?? "GMT";
	return name === "GMT" ? "GMT+0" : name;
}
/** Dropdown label, e.g. "London (GMT+0)". */
function zoneLabel(zone, at) {
	return `${zoneCity(zone)} (${zoneOffset(zone, at)})`;
}
var timeGroups = [
	"Morning",
	"Afternoon",
	"Evening",
	"Night"
];
function timeGroup(start, zone) {
	const hour = Number(new Intl.DateTimeFormat("en", {
		timeZone: zone,
		hour: "numeric",
		hourCycle: "h23"
	}).format(new Date(start)));
	return hour >= 6 && hour < 12 ? "Morning" : hour >= 12 && hour < 18 ? "Afternoon" : hour >= 18 ? "Evening" : "Night";
}
function bookingPreselection(plan = "", service = "") {
	return {
		project_type: {
			"web-development": "Booking website",
			"ai-chatbot": "AI website chatbot",
			"ai-calling-agent": "24/7 AI calling agent",
			"app-development": "Mobile app",
			"ui-ux-product-design": "UI/UX design",
			software: "Custom software or SaaS",
			"custom-software": "Custom software or SaaS",
			"business-automation": "Business automation",
			"social-media-growth": "Social media growth"
		}[service] ?? (plan === "starter" ? "Booking website" : plan === "growth" ? "Website + AI agent" : plan === "scale" ? "Custom software or SaaS" : "Not sure yet"),
		budget: plan === "starter" ? "$500 to $1,000" : plan === "growth" ? "$1,000 to $3,500" : plan === "scale" ? "$3,500 to $10,000" : "Under $500"
	};
}
function calendarDate(iso) {
	return new Date(iso).toISOString().replace(/[-:]/g, "").replace(".000", "");
}
function googleCalendarLink(start) {
	const end = new Date(new Date(start).getTime() + booking.slotMinutes * 6e4).toISOString();
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: `Incodet ${booking.meetingLabel}`,
		dates: `${calendarDate(start)}/${calendarDate(end)}`,
		details: "We will email you a meeting link before the call."
	})}`;
}
function bookingIcs(start, id, now) {
	const end = new Date(new Date(start).getTime() + booking.slotMinutes * 6e4).toISOString();
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Incodet//Bookings//EN",
		"CALSCALE:GREGORIAN",
		"BEGIN:VEVENT",
		`UID:${id}@incodet.com`,
		`DTSTAMP:${calendarDate(new Date(now).toISOString())}`,
		`DTSTART:${calendarDate(start)}`,
		`DTEND:${calendarDate(end)}`,
		`SUMMARY:Incodet ${booking.meetingLabel}`,
		"DESCRIPTION:We will email you a meeting link before the call.",
		"END:VEVENT",
		"END:VCALENDAR",
		""
	].join("\r\n");
}
//#endregion
export { zonePath as _, dateKey as a, horizon as c, zoneCity as d, zoneLabel as f, zoneInfo as g, searchZones as h, canonicalZone as i, timeGroup as l, allZones as m, bookingIcs as n, generateSlots as o, zoneOffset as p, bookingPreselection as r, googleCalendarLink as s, bookingFields as t, timeGroups as u };
