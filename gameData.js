const idToChampNameMap = {266: 'Aatrox', 103: 'Ahri', 84: 'Akali', 12: 'Alistar', 32: 'Amumu', 34: 'Anivia', 1: 'Annie', 523: 'Aphelios', 22: 'Ashe', 136: 'Aurelion Sol', 268: 'Azir', 432: 'Bard', 53: 'Blitzcrank', 63: 'Brand', 201: 'Braum', 51: 'Caitlyn', 164: 'Camille', 69: 'Cassiopeia', 31: "Cho'Gath", 42: 'Corki', 122: 'Darius', 131: 'Diana', 119: 'Draven', 36: 'Dr. Mundo', 245: 'Ekko', 60: 'Elise', 28: 'Evelynn', 81: 'Ezreal', 9: 'Fiddlesticks', 114: 'Fiora', 105: 'Fizz', 3: 'Galio', 41: 'Gangplank', 86: 'Garen', 150: 'Gnar', 79: 'Gragas', 104: 'Graves', 120: 'Hecarim', 74: 'Heimerdinger', 420: 'Illaoi', 39: 'Irelia', 427: 'Ivern', 40: 'Janna', 59: 'Jarvan IV', 24: 'Jax', 126: 'Jayce', 202: 'Jhin', 222: 'Jinx', 145: "Kai'Sa", 429: 'Kalista', 43: 'Karma', 30: 'Karthus', 38: 'Kassadin', 55: 'Katarina', 10: 'Kayle', 141: 'Kayn', 85: 'Kennen', 121: "Kha'Zix", 203: 'Kindred', 240: 'Kled', 96: "Kog'Maw", 7: 'LeBlanc', 64: 'Lee Sin', 89: 'Leona', 876: 'Lillia', 127: 'Lissandra', 236: 'Lucian', 117: 'Lulu', 99: 'Lux', 54: 'Malphite', 90: 'Malzahar', 57: 'Maokai', 11: 'Master Yi', 21: 'Miss Fortune', 62: 'Wukong', 82: 'Mordekaiser', 25: 'Morgana', 267: 'Nami', 75: 'Nasus', 111: 'Nautilus', 518: 'Neeko', 76: 'Nidalee', 56: 'Nocturne', 20: 'Nunu & Willump', 2: 'Olaf', 61: 'Orianna', 516: 'Ornn', 80: 'Pantheon', 78: 'Poppy', 555: 'Pyke', 246: 'Qiyana', 133: 'Quinn', 497: 'Rakan', 33: 'Rammus', 421: "Rek'Sai", 58: 'Renekton', 107: 'Rengar', 92: 'Riven', 68: 'Rumble', 13: 'Ryze', 113: 'Sejuani', 235: 'Senna', 875: 'Sett', 35: 'Shaco', 98: 'Shen', 102: 'Shyvana', 27: 'Singed', 14: 'Sion', 15: 'Sivir', 72: 'Skarner', 37: 'Sona', 16: 'Soraka', 50: 'Swain', 517: 'Sylas', 134: 'Syndra', 223: 'Tahm Kench', 163: 'Taliyah', 91: 'Talon', 44: 'Taric', 17: 'Teemo', 412: 'Thresh', 18: 'Tristana', 48: 'Trundle', 23: 'Tryndamere', 4: 'Twisted Fate', 29: 'Twitch', 77: 'Udyr', 6: 'Urgot', 110: 'Varus', 67: 'Vayne', 45: 'Veigar', 161: "Vel'Koz", 254: 'Vi', 112: 'Viktor', 8: 'Vladimir', 106: 'Volibear', 19: 'Warwick', 498: 'Xayah', 101: 'Xerath', 5: 'Xin Zhao', 157: 'Yasuo', 777: 'Yone', 83: 'Yorick', 350: 'Yuumi', 154: 'Zac', 238: 'Zed', 115: 'Ziggs', 26: 'Zilean', 142: 'Zoe', 143: 'Zyra'};

const idToChampKeyMap = {266: 'Aatrox', 103: 'Ahri', 84: 'Akali', 12: 'Alistar', 32: 'Amumu', 34: 'Anivia', 1: 'Annie', 523: 'Aphelios', 22: 'Ashe', 136: 'AurelionSol', 268: 'Azir', 432: 'Bard', 53: 'Blitzcrank', 63: 'Brand', 201: 'Braum', 51: 'Caitlyn', 164: 'Camille', 69: 'Cassiopeia', 31: 'Chogath', 42: 'Corki', 122: 'Darius', 131: 'Diana', 119: 'Draven', 36: 'DrMundo', 245: 'Ekko', 60: 'Elise', 28: 'Evelynn', 81: 'Ezreal', 9: 'Fiddlesticks', 114: 'Fiora', 105: 'Fizz', 3: 'Galio', 41: 'Gangplank', 86: 'Garen', 150: 'Gnar', 79: 'Gragas', 104: 'Graves', 120: 'Hecarim', 74: 'Heimerdinger', 420: 'Illaoi', 39: 'Irelia', 427: 'Ivern', 40: 'Janna', 59: 'JarvanIV', 24: 'Jax', 126: 'Jayce', 202: 'Jhin', 222: 'Jinx', 145: 'Kaisa', 429: 'Kalista', 43: 'Karma', 30: 'Karthus', 38: 'Kassadin', 55: 'Katarina', 10: 'Kayle', 141: 'Kayn', 85: 'Kennen', 121: 'Khazix', 203: 'Kindred', 240: 'Kled', 96: 'KogMaw', 7: 'Leblanc', 64: 'LeeSin', 89: 'Leona', 876: 'Lillia', 127: 'Lissandra', 236: 'Lucian', 117: 'Lulu', 99: 'Lux', 54: 'Malphite', 90: 'Malzahar', 57: 'Maokai', 11: 'MasterYi', 21: 'MissFortune', 62: 'MonkeyKing', 82: 'Mordekaiser', 25: 'Morgana', 267: 'Nami', 75: 'Nasus', 111: 'Nautilus', 518: 'Neeko', 76: 'Nidalee', 56: 'Nocturne', 20: 'Nunu', 2: 'Olaf', 61: 'Orianna', 516: 'Ornn', 80: 'Pantheon', 78: 'Poppy', 555: 'Pyke', 246: 'Qiyana', 133: 'Quinn', 497: 'Rakan', 33: 'Rammus', 421: 'RekSai', 58: 'Renekton', 107: 'Rengar', 92: 'Riven', 68: 'Rumble', 13: 'Ryze', 113: 'Sejuani', 235: 'Senna', 875: 'Sett', 35: 'Shaco', 98: 'Shen', 102: 'Shyvana', 27: 'Singed', 14: 'Sion', 15: 'Sivir', 72: 'Skarner', 37: 'Sona', 16: 'Soraka', 50: 'Swain', 517: 'Sylas', 134: 'Syndra', 223: 'TahmKench', 163: 'Taliyah', 91: 'Talon', 44: 'Taric', 17: 'Teemo', 412: 'Thresh', 18: 'Tristana', 48: 'Trundle', 23: 'Tryndamere', 4: 'TwistedFate', 29: 'Twitch', 77: 'Udyr', 6: 'Urgot', 110: 'Varus', 67: 'Vayne', 45: 'Veigar', 161: 'Velkoz', 254: 'Vi', 112: 'Viktor', 8: 'Vladimir', 106: 'Volibear', 19: 'Warwick', 498: 'Xayah', 101: 'Xerath', 5: 'XinZhao', 157: 'Yasuo', 777: 'Yone', 83: 'Yorick', 350: 'Yuumi', 154: 'Zac', 238: 'Zed', 115: 'Ziggs', 26: 'Zilean', 142: 'Zoe', 143: 'Zyra'};

const idToSpellImageUrlMap = {21: 'SummonerBarrier.png', 1: 'SummonerBoost.png', 14: 'SummonerDot.png', 3: 'SummonerExhaust.png', 4: 'SummonerFlash.png', 6: 'SummonerHaste.png', 7: 'SummonerHeal.png', 13: 'SummonerMana.png', 30: 'SummonerPoroRecall.png', 31: 'SummonerPoroThrow.png', 11: 'SummonerSmite.png', 39: 'SummonerSnowURFSnowball_Mark.png', 32: 'SummonerSnowball.png', 12: 'SummonerTeleport.png'};

const idToRunePathNameMap = {8100: 'Domination', 8300: 'Inspiration', 8000: 'Precision', 8400: 'Resolve', 8200: 'Sorcery'};

const idToKeystoneNameMap = {8112: 'Electrocute', 8124: 'Predator', 8128: 'DarkHarvest', 9923: 'HailOfBlades', 8351: 'GlacialAugment', 8360: 'UnsealedSpellbook', 8358: 'MasterKey', 8005: 'PressTheAttack', 8008: 'LethalTempo', 8021: 'FleetFootwork', 8010: 'Conqueror', 8437: 'GraspOfTheUndying', 8439: 'Aftershock', 8465: 'Guardian', 8214: 'SummonAery', 8229: 'ArcaneComet', 8230: 'PhaseRush'};

const idToItemUrlMap = {1001: "require('../images/Items/1001.png')", 1004: "require('../images/Items/1004.png')", 1006: "require('../images/Items/1006.png')", 1011: "require('../images/Items/1011.png')", 1018: "require('../images/Items/1018.png')", 1026: "require('../images/Items/1026.png')", 1027: "require('../images/Items/1027.png')", 1028: "require('../images/Items/1028.png')", 1029: "require('../images/Items/1029.png')", 1031: "require('../images/Items/1031.png')", 1033: "require('../images/Items/1033.png')", 1036: "require('../images/Items/1036.png')", 1037: "require('../images/Items/1037.png')", 1038: "require('../images/Items/1038.png')", 1039: "require('../images/Items/1039.png')", 1041: "require('../images/Items/1041.png')", 1042: "require('../images/Items/1042.png')", 1043: "require('../images/Items/1043.png')", 1052: "require('../images/Items/1052.png')", 1053: "require('../images/Items/1053.png')", 1054: "require('../images/Items/1054.png')", 1055: "require('../images/Items/1055.png')", 1056: "require('../images/Items/1056.png')", 1057: "require('../images/Items/1057.png')", 1058: "require('../images/Items/1058.png')", 1082: "require('../images/Items/1082.png')", 1083: "require('../images/Items/1083.png')", 1400: "require('../images/Items/1400.png')", 1401: "require('../images/Items/1401.png')", 1402: "require('../images/Items/1402.png')", 1412: "require('../images/Items/1412.png')", 1413: "require('../images/Items/1413.png')", 1414: "require('../images/Items/1414.png')", 1416: "require('../images/Items/1416.png')", 1419: "require('../images/Items/1419.png')", 2003: "require('../images/Items/2003.png')", 2006: "require('../images/Items/2006.png')", 2009: "require('../images/Items/2009.png')", 2010: "require('../images/Items/2010.png')", 2015: "require('../images/Items/2015.png')", 2031: "require('../images/Items/2031.png')", 2033: "require('../images/Items/2033.png')", 2047: "require('../images/Items/2047.png')", 2051: "require('../images/Items/2051.png')", 2052: "require('../images/Items/2052.png')", 2054: "require('../images/Items/2054.png')", 2055: "require('../images/Items/2055.png')", 2065: "require('../images/Items/2065.png')", 2138: "require('../images/Items/2138.png')", 2139: "require('../images/Items/2139.png')", 2140: "require('../images/Items/2140.png')", 2403: "require('../images/Items/2403.png')", 2419: "require('../images/Items/2419.png')", 2420: "require('../images/Items/2420.png')", 2421: "require('../images/Items/2421.png')", 2422: "require('../images/Items/2422.png')", 2423: "require('../images/Items/2423.png')", 2424: "require('../images/Items/2424.png')", 3001: "require('../images/Items/3001.png')", 3003: "require('../images/Items/3003.png')", 3004: "require('../images/Items/3004.png')", 3005: "require('../images/Items/3005.png')", 3006: "require('../images/Items/3006.png')", 3007: "require('../images/Items/3007.png')", 3008: "require('../images/Items/3008.png')", 3009: "require('../images/Items/3009.png')", 3010: "require('../images/Items/3010.png')", 3020: "require('../images/Items/3020.png')", 3022: "require('../images/Items/3022.png')", 3024: "require('../images/Items/3024.png')", 3025: "require('../images/Items/3025.png')", 3026: "require('../images/Items/3026.png')", 3027: "require('../images/Items/3027.png')", 3028: "require('../images/Items/3028.png')", 3029: "require('../images/Items/3029.png')", 3030: "require('../images/Items/3030.png')", 3031: "require('../images/Items/3031.png')", 3033: "require('../images/Items/3033.png')", 3035: "require('../images/Items/3035.png')", 3036: "require('../images/Items/3036.png')", 3040: "require('../images/Items/3040.png')", 3041: "require('../images/Items/3041.png')", 3042: "require('../images/Items/3042.png')", 3043: "require('../images/Items/3043.png')", 3044: "require('../images/Items/3044.png')", 3046: "require('../images/Items/3046.png')", 3047: "require('../images/Items/3047.png')", 3048: "require('../images/Items/3048.png')", 3050: "require('../images/Items/3050.png')", 3052: "require('../images/Items/3052.png')", 3053: "require('../images/Items/3053.png')", 3057: "require('../images/Items/3057.png')", 3065: "require('../images/Items/3065.png')", 3067: "require('../images/Items/3067.png')", 3068: "require('../images/Items/3068.png')", 3070: "require('../images/Items/3070.png')", 3071: "require('../images/Items/3071.png')", 3072: "require('../images/Items/3072.png')", 3073: "require('../images/Items/3073.png')", 3074: "require('../images/Items/3074.png')", 3075: "require('../images/Items/3075.png')", 3076: "require('../images/Items/3076.png')", 3077: "require('../images/Items/3077.png')", 3078: "require('../images/Items/3078.png')", 3082: "require('../images/Items/3082.png')", 3083: "require('../images/Items/3083.png')", 3084: "require('../images/Items/3084.png')", 3085: "require('../images/Items/3085.png')", 3086: "require('../images/Items/3086.png')", 3087: "require('../images/Items/3087.png')", 3089: "require('../images/Items/3089.png')", 3091: "require('../images/Items/3091.png')", 3094: "require('../images/Items/3094.png')", 3095: "require('../images/Items/3095.png')", 3100: "require('../images/Items/3100.png')", 3101: "require('../images/Items/3101.png')", 3102: "require('../images/Items/3102.png')", 3105: "require('../images/Items/3105.png')", 3107: "require('../images/Items/3107.png')", 3108: "require('../images/Items/3108.png')", 3109: "require('../images/Items/3109.png')", 3110: "require('../images/Items/3110.png')", 3111: "require('../images/Items/3111.png')", 3112: "require('../images/Items/3112.png')", 3113: "require('../images/Items/3113.png')", 3114: "require('../images/Items/3114.png')", 3115: "require('../images/Items/3115.png')", 3116: "require('../images/Items/3116.png')", 3117: "require('../images/Items/3117.png')", 3123: "require('../images/Items/3123.png')", 3124: "require('../images/Items/3124.png')", 3128: "require('../images/Items/3128.png')", 3131: "require('../images/Items/3131.png')", 3133: "require('../images/Items/3133.png')", 3134: "require('../images/Items/3134.png')", 3135: "require('../images/Items/3135.png')", 3136: "require('../images/Items/3136.png')", 3137: "require('../images/Items/3137.png')", 3139: "require('../images/Items/3139.png')", 3140: "require('../images/Items/3140.png')", 3142: "require('../images/Items/3142.png')", 3143: "require('../images/Items/3143.png')", 3144: "require('../images/Items/3144.png')", 3145: "require('../images/Items/3145.png')", 3146: "require('../images/Items/3146.png')", 3147: "require('../images/Items/3147.png')", 3151: "require('../images/Items/3151.png')", 3152: "require('../images/Items/3152.png')", 3153: "require('../images/Items/3153.png')", 3155: "require('../images/Items/3155.png')", 3156: "require('../images/Items/3156.png')", 3157: "require('../images/Items/3157.png')", 3158: "require('../images/Items/3158.png')", 3161: "require('../images/Items/3161.png')", 3165: "require('../images/Items/3165.png')", 3170: "require('../images/Items/3170.png')", 3172: "require('../images/Items/3172.png')", 3174: "require('../images/Items/3174.png')", 3175: "require('../images/Items/3175.png')", 3179: "require('../images/Items/3179.png')", 3181: "require('../images/Items/3181.png')", 3184: "require('../images/Items/3184.png')", 3190: "require('../images/Items/3190.png')", 3191: "require('../images/Items/3191.png')", 3193: "require('../images/Items/3193.png')", 3194: "require('../images/Items/3194.png')", 3196: "require('../images/Items/3196.png')", 3197: "require('../images/Items/3197.png')", 3198: "require('../images/Items/3198.png')", 3200: "require('../images/Items/3200.png')", 3211: "require('../images/Items/3211.png')", 3222: "require('../images/Items/3222.png')", 3285: "require('../images/Items/3285.png')", 3330: "require('../images/Items/3330.png')", 3340: "require('../images/Items/3340.png')", 3348: "require('../images/Items/3348.png')", 3361: "require('../images/Items/3361.png')", 3362: "require('../images/Items/3362.png')", 3363: "require('../images/Items/3363.png')", 3364: "require('../images/Items/3364.png')", 3371: "require('../images/Items/3371.png')", 3373: "require('../images/Items/3373.png')", 3374: "require('../images/Items/3374.png')", 3379: "require('../images/Items/3379.png')", 3380: "require('../images/Items/3380.png')", 3382: "require('../images/Items/3382.png')", 3383: "require('../images/Items/3383.png')", 3384: "require('../images/Items/3384.png')", 3386: "require('../images/Items/3386.png')", 3387: "require('../images/Items/3387.png')", 3388: "require('../images/Items/3388.png')", 3389: "require('../images/Items/3389.png')", 3390: "require('../images/Items/3390.png')", 3400: "require('../images/Items/3400.png')", 3410: "require('../images/Items/3410.png')", 3416: "require('../images/Items/3416.png')", 3422: "require('../images/Items/3422.png')", 3455: "require('../images/Items/3455.png')", 3504: "require('../images/Items/3504.png')", 3508: "require('../images/Items/3508.png')", 3513: "require('../images/Items/3513.png')", 3514: "require('../images/Items/3514.png')", 3520: "require('../images/Items/3520.png')", 3599: "require('../images/Items/3599.png')", 3600: "require('../images/Items/3600.png')", 3671: "require('../images/Items/3671.png')", 3672: "require('../images/Items/3672.png')", 3673: "require('../images/Items/3673.png')", 3675: "require('../images/Items/3675.png')", 3680: "require('../images/Items/3680.png')", 3681: "require('../images/Items/3681.png')", 3682: "require('../images/Items/3682.png')", 3683: "require('../images/Items/3683.png')", 3684: "require('../images/Items/3684.png')", 3685: "require('../images/Items/3685.png')", 3690: "require('../images/Items/3690.png')", 3691: "require('../images/Items/3691.png')", 3692: "require('../images/Items/3692.png')", 3693: "require('../images/Items/3693.png')", 3694: "require('../images/Items/3694.png')", 3695: "require('../images/Items/3695.png')", 3706: "require('../images/Items/3706.png')", 3715: "require('../images/Items/3715.png')", 3742: "require('../images/Items/3742.png')", 3748: "require('../images/Items/3748.png')", 3751: "require('../images/Items/3751.png')", 3800: "require('../images/Items/3800.png')", 3801: "require('../images/Items/3801.png')", 3802: "require('../images/Items/3802.png')", 3812: "require('../images/Items/3812.png')", 3814: "require('../images/Items/3814.png')", 3850: "require('../images/Items/3850.png')", 3851: "require('../images/Items/3851.png')", 3853: "require('../images/Items/3853.png')", 3854: "require('../images/Items/3854.png')", 3855: "require('../images/Items/3855.png')", 3857: "require('../images/Items/3857.png')", 3858: "require('../images/Items/3858.png')", 3859: "require('../images/Items/3859.png')", 3860: "require('../images/Items/3860.png')", 3862: "require('../images/Items/3862.png')", 3863: "require('../images/Items/3863.png')", 3864: "require('../images/Items/3864.png')", 3901: "require('../images/Items/3901.png')", 3902: "require('../images/Items/3902.png')", 3903: "require('../images/Items/3903.png')", 3905: "require('../images/Items/3905.png')", 3907: "require('../images/Items/3907.png')", 3916: "require('../images/Items/3916.png')", 4001: "require('../images/Items/4001.png')", 4003: "require('../images/Items/4003.png')", 4004: "require('../images/Items/4004.png')", 4101: "require('../images/Items/4101.png')", 4102: "require('../images/Items/4102.png')", 4103: "require('../images/Items/4103.png')", 4104: "require('../images/Items/4104.png')", 4105: "require('../images/Items/4105.png')", 4201: "require('../images/Items/4201.png')", 4202: "require('../images/Items/4202.png')", 4203: "require('../images/Items/4203.png')", 4204: "require('../images/Items/4204.png')", 4401: "require('../images/Items/4401.png')", 4402: "require('../images/Items/4402.png')", 4403: "require('../images/Items/4403.png')"};
