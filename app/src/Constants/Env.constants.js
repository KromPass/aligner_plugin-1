const env = {
    languages: [
        {code:"af-ZA", value:"Afrikaans"},
        {code:"sq-AL", value:"Albanian"},
        {code:"am-AM", value:"Amharic"},
        {code:"ar-SA", value:"Arabic"},
        {code:"an-ES", value:"Aragonese"},
        {code:"hy-AM", value:"Armenian"},
        {code:"asm-IN", value:"Assamese"},
        {code:"ast-ES", value:"Asturian"},
        {code:"de-AT", value:"Austrian German"},
        {code:"az-AZ", value:"Azerbaijani"},
        {code:"ba-RU", value:"Bashkir"},
        {code:"eu-ES", value:"Basque"},
        {code:"bn-IN", value:"Bengali"},
        {code:"be-BY", value:"Belarusian"},
        {code:"fr-BE", value:"Belgian French"},
        {code:"bs-BA", value:"Bosnian"},
        {code:"br-FR", value:"Breton"},
        {code:"bg-BG", value:"Bulgarian"},
        {code:"my-MM", value:"Burmese"},
        {code:"ca-ES", value:"Catalan"},
        {code:"cav-ES", value:"Catalan Valencian"},
        {code:"cb-PH", value:"Cebuano"},
        {code:"zh-CN", value:"Chinese Simplified"},
        {code:"zh-TW", value:"Chinese Traditional"},
        {code:"zh-HK", value:"Chinese Trad. (Hong Kong)"},
        {code:"hr-HR", value:"Croatian"},
        {code:"cs-CZ", value:"Czech"},
        {code:"da-DK", value:"Danish"},
        {code:"fa-PRS", value:"Dari"},
        {code:"nl-NL", value:"Dutch"},
        {code:"en-GB", value:"English"},
        {code:"en-US", value:"English US"},
        {code:"en-AU", value:"English Australia"},
        {code:"en-CA", value:"English Canada"},
        {code:"en-IN", value:"English India"},
        {code:"en-IE", value:"English Ireland"},
        {code:"en-NZ", value:"English New Zealand"},
        {code:"en-SG", value:"English Singapore"},
        {code:"eo-XN", value:"Esperanto"},
        {code:"et-EE", value:"Estonian"},
        {code:"fo-FO", value:"Faroese"},
        {code:"ff-FUL", value:"Fula"},
        {code:"fi-FI", value:"Finnish"},
        {code:"nl-BE", value:"Flemish"},
        {code:"fr-FR", value:"French"},
        {code:"fr-CA", value:"French Canada"},
        {code:"fr-CH", value:"French Swiss"},
        {code:"gl-ES", value:"Galician"},
        {code:"grt-IN", value:"Garo"},
        {code:"ka-GE", value:"Georgian"},
        {code:"de-DE", value:"German"},
        {code:"el-GR", value:"Greek"},
        {code:"gu-IN", value:"Gujarati"},
        {code:"ht-HT", value:"Haitian Creole French"},
        {code:"ha-HAU", value:"Hausa"},
        {code:"US-HI", value:"Hawaiian"},
        {code:"he-IL", value:"Hebrew"},
        {code:"mrj-RU", value:"Hill Mari"},
        {code:"hi-IN", value:"Hindi"},
        {code:"hmn-CN", value:"Hmong"},
        {code:"hu-HU", value:"Hungarian"},
        {code:"is-IS", value:"Icelandic"},
        {code:"id-ID", value:"Indonesian"},
        {code:"ga-IE", value:"Irish Gaelic"},
        {code:"it-IT", value:"Italian"},
        {code:"it-CH", value:"Italian Swiss"},
        {code:"ja-JP", value:"Japanese"},
        {code:"jv-ID", value:"Javanese"},
        {code:"kn-IN", value:"Kannada"},
        {code:"kr-KAU", value:"Kanuri"},
        {code:"kar-MM", value:"Karen"},
        {code:"kk-KZ", value:"Kazakh"},
        {code:"kha-IN", value:"Khasi"},
        {code:"km-KH", value:"Khmer"},
        {code:"rw-KIN", value:"Kinyarwanda"},
        {code:"ko-KR", value:"Korean"},
        {code:"ku-KMR", value:"Kurdish Kurmanji"},
        {code:"ku-CKB", value:"Kurdish Sorani"},
        {code:"ky-KG", value:"Kyrgyz"},
        {code:"lo-LA", value:"Lao"},
        {code:"la-XN", value:"Latin"},
        {code:"lv-LV", value:"Latvian"},
        {code:"ln-LIN", value:"Lingala"},
        {code:"lt-LT", value:"Lithuanian"},
        {code:"lb-LU", value:"Luxembourgish"},
        {code:"mk-MK", value:"Macedonian"},
        {code:"mg-MLG", value:"Malagasy"},
        {code:"ms-MY", value:"Malay"},
        {code:"ml-IN", value:"Malayalam"},
        {code:"mt-MT", value:"Maltese"},
        {code:"mni-IN", value:"Manipuri"},
        {code:"mhr-RU", value:"Mari"},
        {code:"mi-NZ", value:"Maori"},
        {code:"mr-IN", value:"Marathi"},
        {code:"lus-IN", value:"Mizo"},
        {code:"mn-MN", value:"Mongolian"},
        {code:"sr-ME", value:"Montenegrin"},
        {code:"nr-ZA", value:"Ndebele"},
        {code:"ne-NP", value:"Nepali"},
        {code:"nb-NO", value:"Norwegian Bokmål"},
        {code:"nn-NO", value:"Norwegian Nynorsk"},
        {code:"ny-NYA", value:"Nyanja"},
        {code:"oc-FR", value:"Occitan"},
        {code:"oc-ES", value:"Occitan Aran"},
        {code:"ory-IN", value:"Odia"},
        {code:"pa-IN", value:"Punjabi"},
        {code:"pap-CW", value:"Papiamentu"},
        {code:"ps-PK", value:"Pashto"},
        {code:"fa-IR", value:"Persian"},
        {code:"pl-PL", value:"Polish"},
        {code:"pt-PT", value:"Portuguese"},
        {code:"pt-BR", value:"Portuguese Brazil"},
        {code:"qu-XN", value:"Quechua"},
        {code:"rhg-MM", value:"Rohingya"},
        {code:"rhl-MM", value:"Rohingyalish"},
        {code:"ro-RO", value:"Romanian"},
        {code:"run-BI", value:"Rundi"},
        {code:"ru-RU", value:"Russian"},
        {code:"gd-GB", value:"Scots Gaelic"},
        {code:"sr-Latn-RS", value:"Serbian Latin"},
        {code:"sr-Cyrl-RS", value:"Serbian Cyrillic"},
        {code:"nso-ZA", value:"Sesotho"},
        {code:"tn-ZA", value:"Setswana (South Africa)"},
        {code:"si-LK", value:"Sinhala"},
        {code:"sk-SK", value:"Slovak"},
        {code:"sl-SI", value:"Slovenian"},
        {code:"so-SO", value:"Somali"},
        {code:"es-ES", value:"Spanish"},
        {code:"es-MX", value:"Spanish Latin America"},
        {code:"es-CO", value:"Spanish Colombia"},
        {code:"su-ID", value:"Sundanese"},
        {code:"sw-SZ", value:"Swahili"},
        {code:"sv-SE", value:"Swedish"},
        {code:"de-CH", value:"Swiss German"},
        {code:"syc-TR", value:"Syriac (Aramaic)"},
        {code:"tl-PH", value:"Tagalog"},
        {code:"tg-TJ", value:"Tajik"},
        {code:"tmh-DZ", value:"Tamashek (Tuareg)"},
        {code:"ta-IN", value:"Tamil"},
        {code:"te-IN", value:"Telugu"},
        {code:"tt-RU", value:"Tatar"},
        {code:"th-TH", value:"Thai"},
        {code:"ti-TIR", value:"Tigrinya"},
        {code:"ts-ZA", value:"Tsonga"},
        {code:"tr-TR", value:"Turkish"},
        {code:"tk-TM", value:"Turkmen"},
        {code:"udm-RU", value:"Udmurt"},
        {code:"uk-UA", value:"Ukrainian"},
        {code:"ur-PK", value:"Urdu"},
        {code:"uz-UZ", value:"Uzbek"},
        {code:"vi-VN", value:"Vietnamese"},
        {code:"cy-GB", value:"Welsh"},
        {code:"xh-ZA", value:"Xhosa"},
        {code:"yi-YD", value:"Yiddish"},
        {code:"yo-NG", value:"Yoruba"},
        {code:"zu-ZA", value:"Zulu"}
    ],
    segmentModel: {
        content_clean: null,
        content_raw: null,
        type: null,
        order: null,
        next: null
    },
    orderElevation: 1000000000
};

export default env;