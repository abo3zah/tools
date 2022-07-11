export let unitData = {
    "الوقت": {
		"ثانية": {
			"name": "ثانية",
			"symbol": "ث",
			"multiplier": 1,
            "offset":0
		},
        "دقيقة": {
			"name": "دقيقة",
			"symbol": "د",
			"multiplier": 60,
			"offset":0
		},
        "ساعة": {
			"name": "ساعة",
			"plural": "hours",
            "symbol": "س",
            "multiplier": 3600,
            "offset":0
        },
        "يوم": {
            "name": "يوم",
			"symbol": "يوم",
            "multiplier": 86400,
            "offset":0
		},
        "أسبوع": {
            "name": "أسبوع",
			"symbol": "أسبوع",
            "multiplier": 604800,
            "offset":0
        },
        "شهر": {
				"name": "شهر",
				"symbol":"شهر",
                "multiplier": 2629800,
                "offset":0
        },
        "سنة": {
				"name": "سنة",
				"symbol": "سنة",
				"multiplier": 31557600,
                "offset":0
        },
        "عقد": {
				"name": "عقد",
                "symbol":"عقد",
                "multiplier": 315576000,
                "offset":0
        },
        "قرن": {
				"name": "قرن",
                "symbol": "قرن",
				"multiplier": 3155760000,
				"offset":0
        },
    },
    "length": {
		"meter": {
				"name": "meter",
				"symbol": "m",
                "multiplier": 1,
				"offset":0
		},
        "centimetre": {
				"name": "centimetre",
                "symbol": "cm",
                "multiplier": 0.01,
                "offset":0
		},
        "mile": {
			"name": "mile",
			"symbol": "mi",
			"multiplier": 1609.344,
            "offset":0
        },
		"yard": {
				"name": "yard",
				"symbol": "yd",
				"multiplier": 0.9144,
		},
        "foot": {
				"name": "foot",
				"symbol": "ft",
				"multiplier": 0.3048
		},
        "inch": {
				"name": "inch",
				"symbol": "in",
				"multiplier": 0.0254
		},
    },
    "mass": {
        "gram": {
		    "name": "gram",
			"symbol": "g",
			"multiplier": 1
		},
		"kilogram": {
		    "name": "kilogram",
			"symbol": "kg",
			"multiplier": 1000
		},
        "ounce": {
			"name": "ounce",
			"symbol": "oz",
			"multiplier": 28.35
        },
        "pound": {
			"name": "pound",
			"symbol": "lb",
			"multiplier": 454
        },
    },
    "temperature": {
		"kelvin": {
			"name": "kelvin",
			"symbol": "°K",
            "offset":273.15
		},
        "celsius": {
			"name": "celsius",
			"symbol": "°C",
			"tags": ["cooking"],
		},
		"fahrenheit": {
			"name": "fahrenheit",
			"symbol": "°F",
			"multiplier": 5/9,
			"offset": 32
		}
    },
    "volume": {
        "cubicMetre": {
            "name": "cubic metre",
            "symbol": "m³",
        },
        "cubicFoot": {
            "name": "cubic foot",
            "symbol": "cu ft",
            "multiplier": 0.028316846592
        },
        "cubicInch": {
            "name": "cubic inch",
            "symbol": "cu in",
            "multiplier": 16.387064e-6
        },
        "cubicMile": {
            "name": "cubic mile",
            "symbol": "cu mi",
            "multiplier": 4168181825.440579584
        },
        "cubicYard": {
            "name": "cubic yard",
            "symbol": "cu yd",
            "multiplier": 0.764554857984
        },
        "gallonImperial": {
            "name": "gallon",
            "plural": "gallons",
            "symbol": "gal",
            "otherSymbols": ["gal (imp)"],
            "type": "customary",
            "systems": ["imperial"],
            "tags": ["cooking"],
            "multiplier": 4.54609e-3
        },
        "gallonUSDry": {
            "name": "gallon",
            "plural": "gallons",
            "symbol": "gal",
            "otherSymbols": ["gal (US)"],
            "type": "customary",
            "systems": ["usCustomary"],
            "tags": ["cooking", "dry-only"],
            "multiplier": 4.40488377086e-3
        },
        "gallonUSFluid": {
            "name": "gallon",
            "plural": "gallons",
            "symbol": "gal",
            "otherSymbols": ["gal (US)"],
            "type": "customary",
            "systems": ["usCustomary"],
            "tags": ["cooking", "fluid-only"],
            "multiplier": 3.785411784e-3
        },
        "litre": {
            "name": "litre",
            "plural": "litres",
            "otherNames": ["liter", "liters", "Cadil"],
            "symbol": "L",
            "otherSymbols": ["l"],
            "type": "si",
            "systems": ["siCommon", "legacyMetric"],
            "tags": ["cooking"],
            "multiplier": 0.001,
            "notes": "A litre was originally the metric base unit for volume. Now non-SI metric."
        },
    },
    "area": {
        "squareMetre": {
            "name": "square metre",
            "plural": "square metres",
            "otherNames": ["centiare", "square meter", "square meters", "metre squared", "metres squared", "meter squared", "meters squared"],
            "symbol": "m²",
            "otherSymbols": ["ca"],
            "type": "si",
            "systems": ["metric"]
        },
        "squareInch": {
            "name": "square inch",
            "plural": "square inches",
            "symbol": "in²",
            "otherSymbols": ["square in", "sq inches", "sq inch", "sq in", "sq.in"],
            "type": "customary",
            "systems": ["englishUnits", "imperial", "usCustomary"],
            "multiplier": 0.00064516
        },
        "squareFoot": {
            "name": "square foot",
            "plural": "square feet",
            "symbol": "ft²",
            "otherSymbols": ["sq ft", "sq.ft"],
            "type": "customary",
            "systems": ["englishUnits", "imperial", "usCustomary"],
            "multiplier": 0.09290304
        },
        "squareYard": {
            "name": "square yard",
            "plural": "square yards",
            "symbol": "yd²",
            "otherSymbols": ["yds²", "sq yd", "sq.yd"],
            "type": "customary",
            "systems": ["englishUnits", "imperial", "usCustomary"],
            "multiplier": 0.83612736
        },
        "squareMile": {
            "name": "square mile",
            "plural": "square miles",
            "symbol": "mi²",
            "otherSymbols": ["sq mi", "sq.mi"],
            "type": "customary",
            "systems": ["englishUnits", "imperial", "usCustomary"],
            "multiplier": 2589988.110336
        },
        "hectare": {
            "name": "hectare",
            "plural": "hectares",
            "symbol": "ha",
            "type": "si",
            "systems": ["siCommon", "legacyMetric"],
            "multiplier": 10000,
            "notes": "Technically and are with hect prefix but is only version of are accepted within broader si context."
        },
    },
    "pressure": {
        "pascal": {
            "name": "pascal",
            "plural": "pascals",
            "symbol": "Pa",
            "type": "si",
            "systems": ["si"],
            "notes": "Common prefixes: hecto-, kilo-, mega-, giga-"
        },
        "bar": {
            "name": "bar",
            "plural": "bars",
            "symbol": "bar",
            "type": "si",
            "systems": ["legacyMetric", "siCommon"],
            "multiplier": 1e5,
            "notes": "Accepted prefixes: mega-, kilo-, deci-, centi-, milli-"
        },
        "centimetreOfMercury": {
            "name": "centimetre of mercury",
            "plural": "centimetres of mercury",
            "symbol": "cmHg",
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 1.33322e3
        },
        "centimetreOfWater": {
            "name": "centimetre of water",
            "plural": "centimetres of water",
            "symbol": "cmH₂O",
            "otherSymbols": ["cmH2O"],
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 98.0638,
            "notes": "At 4 °C"
        },
        "inchOfMercury": {
            "name": "inch of mercury",
            "plural": "inches of mercury",
            "symbol": "inHg",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 3.386389e3
        },
        "inchOfWater": {
            "name": "inch of water",
            "plural": "inches of water",
            "symbol": "inH₂O",
            "otherSymbols": ["inH2O"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 249.082,
            "notes": "At 39.2 °F"
        },
        "footOfMercury": {
            "name": "foot of mercury",
            "plural": "feet of mercury",
            "symbol": "ftHg",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 40.63666e3
        },
        "footOfWater": {
            "name": "foot of water",
            "plural": "feet of water",
            "symbol": "ftH₂O",
            "otherSymbols": ["ftH2O"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 2.98898e3,
            "notes": "At 39.2 °F"
        },
        "kilogramForcePerSquareMillimetre": {
            "name": "kilogram force per square millimetre",
            "symbol": "kgf/mm²",
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 9.80665e6
        },
        "kipPerSquareInch": {
            "name": "kip per square inch",
            "plural": "kips per square inch",
            "symbol": "ksi",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 6.894757e6
        },
        "millimetreOfMercury": {
            "name": "millimetre of mercury",
            "plural": "millimetres of mercury",
            "symbol": "mmHg",
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 133.3224
        },
        "millimetreOfWater": {
            "name": "millimetre of water",
            "plural": "millimetres of water",
            "symbol": "mmH₂O",
            "otherSymbols": ["mmH2O"],
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 9.80638,
            "notes": "At 3.98 °C"
        },
        "poundPerSquareFoot": {
            "name": "pound per square foot",
            "plural": "pounds per square foot",
            "symbol": "psf",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 47.88026
        },
        "poundPerSquareInch": {
            "name": "pound per square inch",
            "plural": "pounds per square inch",
            "otherNames": ["pound-force per square inch"],
            "symbol": "psi",
            "otherSymbols": ["lbf/in²", "lbf/sq in"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 6.894757e3
        },
        "kilopoundPerSquareInch": {
            "name": "kilopound per square inch",
            "plural": "kilopounds per square inch",
            "symbol": "ksi",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 6.894757e6
        },
        "poundalPerSquareFoot": {
            "name": "poundal per square foot",
            "plural": "poundals per square foot",
            "symbol": "pdl/sq ft",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 1.488164
        },
    },
    "frequency": {
        "hertz": {
            "name": "hertz",
            "otherNames": ["cycle per second", "cycles per second", "revolution per second", "revolutions per second"],
            "symbol": "Hz",
            "type": "si",
            "systems": ["metric", "imperial", "usCustomary"]
        },
        "revolutionPerMinute": {
            "name": "revolution per minute",
            "plural": "revolutions per minute",
            "otherNames": ["cycle per minute", "cycles per minute"],
            "symbol": "rpm",
            "otherSymbols": ["RPM", "rev/min", "r/min", "r·min⁻¹"],
            "type": "customary",
            "systems": ["legacyMetric", "imperial", "usCustomary"],
            "multiplier": 0.01666666666666667
        },
        "planckAngularFrequency": {
            "name": "Planck angular frequency",
            "symbol": "ω\u209A",
            "type": "customary",
            "systems": ["planck"],
            "estimation": true,
            "multiplier": 1.85487e43,
            "notes": "Derived from fundamental planck units. Not exact."
        }
    },
    "force": {
        "newton": {
            "name": "newton",
            "plural": "newtons",
            "symbol": "N",
            "type": "si",
            "systems": ["si"]
        },
        "kilogramForce": {
            "name": "kilogram force",
            "otherNames": ["kilopond", "grave-force"],
            "symbol": "kgf",
            "otherSymbols": ["kp", "Gf"],
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 9.80665
        },
        "ounceForce": {
            "name": "ounce force",
            "symbol": "ozf",
            "type": "customary",
            "systems": ["englishEngineering", "britishGravitational"],
            "multiplier": 0.27801385095378125
        },
    },
    "speed": {
        "metrePerSecond": {
            "name": "metre per second",
            "plural": "metres per second",
            "otherNames": ["meter per second", "meters per second"],
            "symbol": "m/s",
            "type": "customary",
            "systems": ["metric"],
            "notes": "This is of type customary NOT si because you can't actually apply prefixes to it"
        },
        "footPerHour": {
            "name": "foot per hour",
            "plural": "feet per hour",
            "symbol": "fph",
            "otherSymbols": ["ft/h"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 8.466667e-5
        },
        "footPerMinute": {
            "name": "foot per minute",
            "plural": "feet per minute",
            "symbol": "fpm",
            "otherSymbols": ["ft/min"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 5.08e-3
        },
        "footPerSecond": {
            "name": "foot per second",
            "plural": "feet per second",
            "symbol": "fps",
            "otherSymbols": ["ft/s"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 3.048e-1
        },
        "inchPerHour": {
            "name": "inch per hour",
            "plural": "inches per hour",
            "symbol": "iph",
            "otherSymbols": ["in/hr"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 7.05556e-6
        },
        "inchPerMinute": {
            "name": "inch per minute",
            "plural": "inches per minute",
            "symbol": "ipm",
            "otherSymbols": ["in/min"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 4.23333e-4
        },
        "inchPerSecond": {
            "name": "inch per second",
            "plural": "inches per second",
            "symbol": "ips",
            "otherSymbols": ["in/s"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 2.54e-2
        },
        "kilometrePerHour": {
            "name": "kilometre per hour",
            "plural": "kilometres per hour",
            "otherNames": ["kilometer per hour", "kilometers per hour"],
            "symbol": "km/h",
            "otherSymbols": ["kph"],
            "type": "customary",
            "systems": ["siCommon"],
            "multiplier": 2.777778e-1
        },
        "knot": {
            "name": "knot",
            "plural": "knots",
            "symbol": "kn",
            "otherSymbols": ["nmi/h", "kt", "NMPH"],
            "type": "customary",
            "systems": ["metric", "internationalNautical", "imperial", "usCustomary"],
            "multiplier": 0.514444
        },
        "milePerHour": {
            "name": "mile per hour",
            "plural": "miles per hour",
            "symbol": "mph",
            "otherSymbols": ["mi/h"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 0.44704
        },
        "milePerMinute": {
            "name": "mile per minute",
            "plural": "miles per minute",
            "symbol": "mpm",
            "otherSymbols": ["mi/min"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 26.8224
        },
        "milePerSecond": {
            "name": "mile per second",
            "plural": "miles per second",
            "symbol": "mps",
            "otherSymbols": ["mi/s"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 1609.344
        },
        "speedOfLight": {
            "name": "speed of light",
            "symbol": "c",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 299792458,
            "notes": "Constant. In a vacuum"
        },
        "speedOfSound": {
            "name": "speed of sound",
            "symbol": "s",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 340.3,
            "notes": "Constant. Based on standard sea level conditions and at 15 °C."
        }
    },
    "velocity": {
		"meterpersecond":{
            "name":"meter per second",
            "symbol":"m/s"
        }
	},
    "acceleration": {
        "metrePerSquareSecond": {
            "name": "metre per square second",
            "plural": "metres per square second",
            "otherNames": ["meter per square second", "meters per square second", "metre per second squared", "metres per second squared", "meter per second squared", "meters per second squared"],
            "symbol": "m/s²",
            "type": "customary",
            "systems": ["metric"]
        },
        "footPerHourPerSecond": {
            "name": "foot per hour per second",
            "plural": "feet per hour per second",
            "symbol": "fph/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 8.466667e-5
        },
        "footPerMinutePerSecond": {
            "name": "foot per minute per second",
            "plural": "feet per minute per second",
            "symbol": "fpm/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 5.08e-5
        },
        "footPerSquareSecond": {
            "name": "foot per square second",
            "plural": "feet per square second",
            "otherNames": ["foot per second squared", "feet per second squared"],
            "symbol": "fps²",
            "otherSymbols": ["ft/s²"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 0.304800
        },
        "inchPerMinutePerSecond": {
            "name": "inch per minute per second",
            "plural": "inches per minute per second",
            "symbol": "ipm/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 4.233333e-4
        },
        "inchPerSquareSecond": {
            "name": "inch per square second",
            "plural": "inches per square second",
            "otherNames": ["inch per second squared", "inches per second squared"],
            "symbol": "ips²",
            "otherSymbols": ["in/s²"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 2.54e-2
        },
        "knotPerSecond": {
            "name": "knot per second",
            "plural": "knots per second",
            "symbol": "kn/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 5.144444e-1
        },
        "milePerHourPerSecond": {
            "name": "mile per hour per second",
            "plural": "miles per hour per second",
            "symbol": "mph/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 4.4704e-1
        },
        "milePerMinutePerSecond": {
            "name": "mile per minute per second",
            "plural": "miles per minute per second",
            "symbol": "mpm/s",
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 26.8224
        },
        "milePerSquareSecond": {
            "name": "mile per square second",
            "plural": "miles per square second",
            "otherNames": ["mile per second squared", "miles per second squared"],
            "symbol": "mps²",
            "otherSymbols": ["mi/s²"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 1.609344e3
        },
        "gravity": {
            "name": "gravity",
            "otherNames": ["standard gravity", "standard acceleration due to gravity"],
            "symbol": "g",
            "otherSymbols": ["g₀", "gn"],
            "type": "customary",
            "systems": ["metric"],
            "multiplier": 9.80665
        }
    },
    "energy": {
        "joule": {
            "name": "joule",
            "plural": "joules",
            "symbol": "J",
            "type": "si",
            "systems": ["si", "mks"]
        },
        "barrelOfOilEquivalent": {
            "name": "barrel of oil equivalent",
            "symbol": "BOE",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 6.12e9
        },
        "calorie": {
            "name": "calorie",
            "plural": "calories",
            "symbol": "cal",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "excludedSystems": ["usFoodNutrition"],
            "multiplier": 4.1868
        },
        "electronvolt": {
            "name": "electronvolt",
            "plural": "electronvolts",
            "otherNames": ["electron volt", "electron volts"],
            "symbol": "eV",
            "type": "si",
            "systems": ["si"],
            "multiplier": 1.60217733e-19,
            "notes": "Uncertainty: ± 4.9×10^−26 J"
        },
        "erg": {
            "name": "erg",
            "symbol": "erg",
            "type": "si",
            "systems": ["cgs"],
            "multiplier": 1e-7
        },
        "footPoundForce": {
            "name": "foot-pound force",
            "otherNames": ["foot-pound"],
            "symbol": "ft lbf",
            "otherSymbols": ["ft lb", "ft·lb", "ft·lbf"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 1.3558179483314004
        },
        "footPoundal": {
            "name": "Foot-poundal",
            "symbol": "ft pdl",
            "otherSymbols": ["ft-pdl"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 4.21401100938048e-2
        },
        "gallonAtmosphereImperial": {
            "name": "gallon atmosphere",
            "symbol": "imp gal atm",
            "type": "customary",
            "systems": ["imperial"],
            "multiplier": 460.63256925
        },
        "gallonAtmosphereUS": {
            "name": "gallon atmosphere",
            "symbol": "US gal atm",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 383.5568490138
        },
        "horsepowerHour": {
            "name": "horsepower hour",
            "symbol": "hp h",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 2.684519537696172792e6
        },
        "inchPoundForce": {
            "name": "inch-pound force",
            "otherNames": ["inch-pound"],
            "symbol": "in lbf",
            "otherSymbols": ["in lb", "in·lb", "in·lbf"],
            "type": "customary",
            "systems": ["usCustomary", "imperial"],
            "multiplier": 0.1129848290276167
        },
        "kilocalorie": {
            "name": "kilocalorie",
            "plural": "kilocalories",
            "otherNames": ["large calorie"],
            "symbol": "kcal",
            "otherSymbols": ["kCal", "Cal"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "excludedSystems": ["usFoodNutrition"],
            "multiplier": 4.1868e3
        },
        "kilowattHour": {
            "name": "kilowatt hour",
            "otherNames": ["kilowatt-hour", "Board of Trade Unit"],
            "symbol": "kWh",
            "otherSymbols": ["kw·h", "B.O.T.U.", "KWH", "kW h", "kW·h"],
            "type": "customary",
            "systems": ["imperial", "usCustomary", "legacyMetric"],
            "multiplier": 3.6e6,
            "notes": "This is a non-SI unit"
        },
        "quad": {
            "name": "quad",
            "plural": "quads",
            "type": "customary",
            "systems": ["imperial", "usCustomary", "canada"],
            "multiplier": 1.05505585262e18,
            "notes": "10^15 BTU"
        },
        "thermEC": {
            "name": "therm",
            "symbol": "thm",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 105.506000e6
        },
        "tonOfCoalEquivalent": {
            "name": "ton of coal equivalent",
            "otherNames": ["tonne of coal equivalent"],
            "symbol": "TCE",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 29.288e9
        },
        "tonOfOilEquivalent": {
            "name": "ton of oil equivalent",
            "otherNames": ["tonne of oil equivalent"],
            "symbol": "TOE",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 41.84e9
        },
        "tonOfTNT": {
            "name": "ton of TNT",
            "otherNames": ["tonne of TNT"],
            "symbol": "tTNT",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 4.184e9
        },
        "planckEnergy": {
            "name": "Planck energy",
            "symbol": "E\u209A",
            "type": "customary",
            "systems": ["planck"],
            "estimation": true,
            "multiplier": 1.9561e9,
            "notes": "Derived from fundamental planck units. Not exact."
        },
        "naturalEnergy": {
            "name": "electron volt of energy",
            "plural": "electron volts of energy",
            "symbol": "E",
            "otherSymbols": ["E", "eV", "eV of energy"],
            "type": "customary",
            "systems": ["natural"],
            "multiplier": 1.6e-10,
            "uncertainty": 0.1e-10
        }
    },
    "momentum": {
        "kilogramMetrePerSecond": {
            "name": "kilogram metre per second",
            "plural": "kilogram metres per second",
            "otherNames": ["kilogram meter per second", "kilogram meters per second"],
            "symbol": "kg·m/s",
            "otherSymbols": ["kg m/s"],
            "type": "customary",
            "systems": ["si"]
        },
        "planckMomentum": {
            "name": "Planck momentum",
            "symbol": "m\u209Ac",
            "type": "customary",
            "systems": ["planck"],
            "estimation": true,
            "multiplier": 6.52485,
            "notes": "Derived from fundamental planck units. Not exact."
        },
        "naturalMomentum": {
            "name": "electron volt of momentum",
            "plural": "electron volts of momentum",
            "symbol": "E",
            "otherSymbols": ["E", "eV", "eV of momentum"],
            "type": "customary",
            "systems": ["natural"],
            "multiplier": 5.39e-19,
            "uncertainty": 0.01e-19
        }
    },
    "power": {
        "watt": {
            "name": "watt",
            "plural": "watts",
            "symbol": "W",
            "type": "si",
            "systems": ["si", "mks"]
        },
        "atmosphereCubicCentimetrePerMinute": {
            "name": "atmosphere cubic centimetre per minute",
            "plural": "atmosphere cubic centimetres per minute",
            "symbol": "atm ccm",
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 1.68875e-3
        },
        "atmosphereCubicCentimetrePerSecond": {
            "name": "atmosphere cubic centimetre per second",
            "plural": "atmosphere cubic centimetres per second",
            "symbol": "atm ccs",
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 0.101325
        },
        "atmosphereCubicFootPerHour": {
            "name": "atmosphere cubic foot per hour",
            "plural": "atmosphere cubic feet per hour",
            "symbol": "atm cfh",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 0.797001244704
        },
        "atmosphereCubicFootPerMinute": {
            "name": "atmosphere cubic foot per minute",
            "plural": "atmosphere cubic feet per minute",
            "symbol": "atm cfm",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 47.82007468224
        },
        "atmosphereCubicFootPerSecond": {
            "name": "atmosphere cubic foot per second",
            "plural": "atmosphere cubic feet per second",
            "symbol": "atm cfs",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 2.8692044809344e3
        },
        "btuPerHour": {
            "name": "BTU per hour",
            "plural": "BTUs per hour",
            "symbol": "BTU/h",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 0.293071
        },
        "btuPerMinute": {
            "name": "BTU per minute",
            "plural": "BTUs per minute",
            "symbol": "BTU/min",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 17.584264
        },
        "btuPerSecond": {
            "name": "BTU per second",
            "plural": "BTUs per second",
            "symbol": "BTU/s",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 1.05505585262e3
        },
        "caloriePerSecond": {
            "name": "calorie per second",
            "plural": "calories per second",
            "symbol": "cal/s",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 4.1868
        },
        "ergPerSecond": {
            "name": "erg per second",
            "symbol": "erg/s",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 1e-7
        },
        "footPoundForcePerHour": {
            "name": "foot-pound force per hour",
            "symbol": "ft lbf/h",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 3.766161e-4
        },
        "footPoundForcePerMinute": {
            "name": "foot-pound force per minute",
            "symbol": "ft lbf/min",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 2.259696580552334e-2
        },
        "footPoundForcePerSecond": {
            "name": "foot-pound force per second",
            "symbol": "ft lbf/s",
            "type": "customary",
            "systems": ["imperial", "englishUnits"],
            "multiplier": 1.3558179483314004
        },
        "horsepowerBoiler": {
            "name": "horsepower (boiler)",
            "otherNames": ["horsepower", "boiler horsepower"],
            "symbol": "bhp",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 9.810657e3
        },
        "horsepower": {
            "name": "horsepower",
            "symbol": "hp",
            "type": "customary",
            "systems": ["nonStandard"],
            "multiplier": 735.49875
        },
        
    },
    "intensity": {
        "wattPerSquareMetre": {
            "name": "watt per square metre",
            "plural": "watts per square metre",
            "otherNames": ["watt per metre squared", "watts per metre squared", "watt per square meter", "watts per square meter", "watt per meter squared", "watts per meter squared", "kilogram per cubic second", "kilograms per cubic second", "kilogram per second cubed", "kilograms per second cubed"],
            "symbol": "W/m²",
            "otherSymbols": ["kg/s³"],
            "type": "customary",
            "systems": ["si"]
        },
        "planckIntensity": {
            "name": "Planck intensity",
            "symbol": "I\u209A",
            "type": "customary",
            "systems": ["planck"],
            "estimation": true,
            "multiplier": 1.38893e122,
            "notes": "Derived from fundamental planck units. Not exact."
        }
    },
    "electricResistance": {
        "ohm": {
            "name": "ohm",
            "plural": "ohms",
            "otherNames": ["legal ohm", "volt/ampere"],
            "symbol": "Ω",
            "otherSymbols": ["R"],
            "type": "si",
            "systems": ["si", "mks", "englishUnits"],
            "excludedPrefixes": ["mega", "micro", "giga"],
            "notes": "Naming quantities may be done in the form 5.6 Ω => 5R6 to avoid 'rubbing off' decimal place"
        },
        "megohm": {
            "name": "megohm",
            "plural": "megohms",
            "symbol": "MΩ",
            "otherNames": ["megaohm", "megaohms", "mega ohm", "mega ohms"],
            "type": "customary",
            "systems": ["si", "mks", "englishUnits"],
            "multiplier": 1e6,
            "notes": "Replaces the standard SI prefix mega- for ohms"
        },
        "microhm": {
            "name": "microhm",
            "plural": "microhms",
            "symbol": "μΩ",
            "otherNames": ["microohm", "microohms", "micro ohm", "micro ohms"],
            "type": "customary",
            "systems": ["si", "mks", "englishUnits"],
            "multiplier": 1e-6,
            "notes": "Replaces the standard SI prefix micro- for ohms"
        },
        "gigohm": {
            "name": "gigohm",
            "plural": "gigohms",
            "symbol": "GΩ",
            "otherNames": ["gigaohm", "gigaohms", "giga ohm", "giga ohms"],
            "type": "customary",
            "systems": ["si", "mks", "englishUnits"],
            "multiplier": 1e9,
            "notes": "Replaces the standard SI prefix giga- for ohms"
        }
    },
    "density": {
        "kilogramPerCubicMetre": {
            "name": "kilogram per cubic metre",
            "plural": "kilograms per cubic metre",
            "otherNames": ["kilogram per cubic meter", "kilograms per cubic meter", "kilogram per metre cubed", "kilograms per metre cubed", "kilogram per meter cubed", "kilograms per meter cubed"],
            "symbol": "kg/m³",
            "type": "customary",
            "systems": ["si"]
        },
        "gramPerMillilitre": {
            "name": "gram per millilitre",
            "plural": "grams per millilitre",
            "symbol": "g/mL",
            "type": "customary",
            "systems": ["siCommon"],
            "multiplier": 1000
        },
        "kilogramPerLitre": {
            "name": "kilogram per litre",
            "plural": "kilograms per litre",
            "symbol": "kg/L",
            "type": "customary",
            "systems": ["siCommon"],
            "multiplier": 1000
        },
        "ouncePerCubicFoot": {
            "name": "ounce per cubic foot",
            "plural": "ounces per cubic foot",
            "otherNames": ["ounce per foot cubed", "ounces per foot cubed"],
            "symbol": "oz/ft³",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 1.001153961
        },
        "ouncePerCubicInch": {
            "name": "ounce per cubic inch",
            "plural": "ounces per cubic inch",
            "otherNames": ["ounce per inch cubed", "ounces per inch cubed"],
            "symbol": "oz/in³",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 1.729994044e3
        },
        "ouncePerGallonImperial": {
            "name": "ounce per gallon",
            "plural": "ounces per gallon",
            "symbol": "oz/gal",
            "type": "customary",
            "systems": ["imperial"],
            "multiplier": 6.236023291
        },
        "ouncePerGallonUS": {
            "name": "ounce per gallon",
            "plural": "ounces per gallon",
            "symbol": "oz/gal",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 7.489151707
        },
        "poundPerCubicFoot": {
            "name": "pound per cubic foot",
            "plural": "pounds per cubic foot",
            "otherNames": ["pound per foot cubed", "pounds per foot cubed"],
            "symbol": "lb/ft³",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 16.01846337
        },
        "poundPerCubicInch": {
            "name": "pound per cubic inch",
            "plural": "pounds per cubic inch",
            "otherNames": ["pound per inch cubed", "pounds per inch cubed"],
            "symbol": "lb/in³",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 2.767990471e4
        },
        "poundPerGallonImperial": {
            "name": "pound per gallon",
            "plural": "pounds per gallon",
            "symbol": "lb/gal",
            "type": "customary",
            "systems": ["imperial"],
            "multiplier": 99.77637266
        },
        "poundPerGallonUS": {
            "name": "pound per gallon",
            "plural": "pounds per gallon",
            "symbol": "lb/gal",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 119.8264273
        },
    },
    "flowVolume": {
        "cubicMetrePerSecond": {
            "name": "cubic metre per second",
            "plural": "cubic metres per second",
            "otherNames": ["cubic meter per second", "cubic meters per second", "metre cubed per second", "metres cubed per second", "meter cubed per second", "meters cubed per second"],
            "symbol": "m³/s",
            "systems": ["si"],
            "type": "customary"
        },
        "cubicFootPerMinute": {
            "name": "cubic foot per minute",
            "plural": "cubic feet per minute",
            "otherNames": ["foot cubed per minute", "feet cubed per minute"],
            "symbol": "CFM",
            "otherSymbols": ["ft³/min"],
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 4.719474432e-4
        },
        "cubicFootPerSecond": {
            "name": "cubic foot per second",
            "plural": "cubic feet per second",
            "otherNames": ["foot cubed per second", "feet cubed per second"],
            "symbol": "ft³/s",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 0.028316846592
        },
        "cubicInchPerMinute": {
            "name": "cubic inch per minute",
            "plural": "cubic inches per minute",
            "otherNames": ["inch cubed per minute", "inches cubed per minute"],
            "symbol": "in³/min",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 2.73117733333333e-7
        },
        "cubicInchPerSecond": {
            "name": "cubic inch per second",
            "plural": "cubic inches per second",
            "otherNames": ["inch cubed per second", "inches cubed per second"],
            "symbol": "in³/s",
            "type": "customary",
            "systems": ["imperial", "usCustomary"],
            "multiplier": 1.6387064e-5
        },
        "gallonPerDay": {
            "name": "gallon per day",
            "plural": "gallons per day",
            "symbol": "GPD",
            "otherSymbols": ["gal/day"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 4.3812636388889e-8,
            "notes": "Us Gallon"
        },
        "gallonPerHour": {
            "name": "gallon per hour",
            "plural": "gallons per hour",
            "symbol": "GPH",
            "otherSymbols": ["gal/h"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 1.05150327333333e-6,
            "notes": "Us Gallon"
        },
        "gallonPerMinute": {
            "name": "gallon per minute",
            "plural": "gallons per minute",
            "symbol": "GPM",
            "otherSymbols": ["gal/min"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 6.30901964e-5,
            "notes": "Us Gallon"
        },
        "litrePerMinute": {
            "name": "litre per minute",
            "plural": "litres per minute",
            "otherNames": ["liter per minute", "litres per minute"],
            "symbol": "LPM",
            "otherSymbols": ["L/min"],
            "type": "customary",
            "systems": ["legacyMetric"],
            "multiplier": 1.6666666666667e-5
        }
    },
    "kinematicViscosity": {
        "squareMetrePerSecond": {
            "name": "square metre per second",
            "plural": "square metres per second",
            "otherNames": ["square meter per second", "square meters per second", "metre squared per second", "metres squared per second", "meter squared per second", "meters squared per second"],
            "symbol": "m²/s",
            "type": "customary",
            "systems": ["si"]
        },
        "stokes": {
            "name": "stokes",
            "symbol": "St",
            "type": "customary",
            "systems": ["cgs"],
            "multiplier": 1e-4
        },
        "squareFootPerSecond": {
            "name": "square foot per second",
            "plural": "square feet per second",
            "otherNames": ["foot squared per second", "feet squared per second"],
            "symbol": "ft²/s",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 0.09290304
        }
    },
    "torque": {
        "newtonMetre": {
            "name": "newton metre",
            "plural": "newton metres",
            "otherNames": ["newton-metre", "newton-metres", "newton meter", "newton meters"],
            "symbol": "N·m",
            "otherSymbols": ["N m"],
            "type": "customary",
            "systems": ["si"]
        },
        "footPoundForce": {
            "name": "foot-pound force",
            "otherNames": ["foot-pound"],
            "symbol": "ft lbf",
            "otherSymbols": ["ft·lbf", "ft·lb"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 1.3558179483314004
        },
        "footPoundal": {
            "name": "foot-poundal",
            "symbol": "ft pdl",
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 4.21401100938048e-2
        },
        "inchPoundForce": {
            "name": "inch-pound force",
            "otherNames": ["inch-pound"],
            "symbol": "in lbf",
            "otherSymbols": ["in·lbf", "in·lb"],
            "type": "customary",
            "systems": ["usCustomary"],
            "multiplier": 0.1129848290276167
        },
        "metreKilogram": {
            "name": "metre-kilogram",
            "symbol": "m·kg",
            "otherSymbols": ["m kg", "mkg"],
            "type": "customary",
            "systems": ["mks"],
            "multiplier": 0.101971621
        }
    },
    "information": {
        "bit": {
            "name": "bit",
            "plural": "bits",
            "otherNames": ["shannon"],
            "symbol": "b",
            "otherSymbols": ["Sh"],
            "type": "binary",
            "systems": ["nonStandard"]
        },
        "byte": {
            "name": "byte",
            "plural": "bytes",
            "symbol": "B",
            "type": "binary",
            "systems": ["nonStandard"],
            "multiplier": 8
        }
    }
}