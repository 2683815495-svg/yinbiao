export type Phoneme={symbol:string;type:"元音"|"辅音";category:string;ipaName:string;description:string;tip:string;mistakes:string[];examples:{word:string;ipa:string;meaning:string;emoji:string}[];pairs:[string,string][];patterns:string[]};
const vowels:[string,string,string,string][]=[
["iː","长元音","close front","长而紧的“衣”音"],["ɪ","短元音","near-close front","短促放松的 i"],["e","短元音","mid front","嘴角微开"],["æ","短元音","open front","嘴张大、扁而前"],["ɑː","长元音","open back","下巴打开，后部拉长"],["ɒ","短元音","open back","英式短 o"],["ɔː","长元音","open-mid back","圆唇、拉长"],["ʊ","短元音","near-close back","短促圆唇"],["uː","长元音","close back","圆唇长 u"],["ʌ","短元音","open-mid central","短促中央元音"],["ɜː","长元音","mid central","口腔放松并拉长"],["ə","弱元音","mid central","最放松的弱读音"]];
const diph:[string,string,string,string][]=[["eɪ","双元音","front","由 e 滑向 ɪ"],["aɪ","双元音","front","由 a 滑向 ɪ"],["ɔɪ","双元音","back-front","由 ɔ 滑向 ɪ"],["əʊ","双元音","back","由 ə 滑向 ʊ"],["aʊ","双元音","back","由 a 滑向 ʊ"],["ɪə","双元音","centering","由 ɪ 滑向 ə"],["eə","双元音","centering","由 e 滑向 ə"],["ʊə","双元音","centering","由 ʊ 滑向 ə"]];
const cons:string[]="p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ tr dr ts dz m n ŋ l j w r".split(" ");
const examples:Record<string,{word:string;ipa:string;meaning:string;emoji:string}[]>={
"iː":[{word:"sheep",ipa:"/ʃiːp/",meaning:"绵羊",emoji:"🐑"}],"ɪ":[{word:"ship",ipa:"/ʃɪp/",meaning:"船",emoji:"🚢"}],
"e":[{word:"bed",ipa:"/bed/",meaning:"床",emoji:"🛏️"}],"æ":[{word:"cat",ipa:"/kæt/",meaning:"猫",emoji:"🐈"}],
"ɑː":[{word:"car",ipa:"/kɑː/",meaning:"汽车",emoji:"🚗"}],"ɒ":[{word:"hot",ipa:"/hɒt/",meaning:"热的",emoji:"🔥"}],
"ɔː":[{word:"thought",ipa:"/θɔːt/",meaning:"想法",emoji:"💭"}],"ʊ":[{word:"book",ipa:"/bʊk/",meaning:"书",emoji:"📖"}],
"uː":[{word:"food",ipa:"/fuːd/",meaning:"食物",emoji:"🍜"}],"ʌ":[{word:"cup",ipa:"/kʌp/",meaning:"杯子",emoji:"☕"}],
"ɜː":[{word:"bird",ipa:"/bɜːd/",meaning:"鸟",emoji:"🐦"}],"ə":[{word:"about",ipa:"/əˈbaʊt/",meaning:"关于",emoji:"💬"}],
"eɪ":[{word:"day",ipa:"/deɪ/",meaning:"一天",emoji:"☀️"}],"aɪ":[{word:"light",ipa:"/laɪt/",meaning:"光",emoji:"💡"}],
"ɔɪ":[{word:"boy",ipa:"/bɔɪ/",meaning:"男孩",emoji:"🧒"}],"əʊ":[{word:"go",ipa:"/ɡəʊ/",meaning:"去",emoji:"🏃"}],
"aʊ":[{word:"house",ipa:"/haʊs/",meaning:"房子",emoji:"🏠"}],"ɪə":[{word:"near",ipa:"/nɪə/",meaning:"近的",emoji:"📍"}],
"eə":[{word:"hair",ipa:"/heə/",meaning:"头发",emoji:"💇"}],"ʊə":[{word:"tour",ipa:"/tʊə/",meaning:"旅行",emoji:"🧳"}]};
const cExamples:Record<string,string[]>={
p:["pen","/pen/"],b:["bed","/bed/"],t:["tea","/tiː/"],d:["dog","/dɒɡ/"],k:["cat","/kæt/"],g:["go","/ɡəʊ/"],f:["fish","/fɪʃ/"],v:["van","/væn/"],θ:["think","/θɪŋk/"],ð:["this","/ðɪs/"],s:["sun","/sʌn/"],z:["zoo","/zuː/"],ʃ:["ship","/ʃɪp/"],ʒ:["vision","/ˈvɪʒən/"],h:["hat","/hæt/"],tʃ:["chair","/tʃeə/"],dʒ:["jam","/dʒæm/"],tr:["tree","/triː/"],dr:["drink","/drɪŋk/"],ts:["cats","/kæts/"],dz:["beds","/bedz/"],m:["man","/mæn/"],n:["no","/nəʊ/"],ŋ:["sing","/sɪŋ/"],l:["leg","/leɡ/"],j:["yes","/jes/"],w:["we","/wiː/"],r:["red","/red/"]};
export const phonemes:Phoneme[]=[
...vowels.map(([symbol,category,_,description])=>({symbol,type:"元音" as const,category,ipaName:"RP vowel",description,tip:"保持动作稳定，不要用中文音替代；先慢后快。",mistakes:["把长短音混为一谈","嘴形不到位"],examples:examples[symbol]??[{word:"example",ipa:`/${symbol}/`,meaning:"例词",emoji:"🔊"}],pairs:[],patterns:["常见拼写需结合单词记忆"]})),
...diph.map(([symbol,category,_,description])=>({symbol,type:"元音" as const,category,ipaName:"RP diphthong",description,tip:"不要切成两个独立音，保持连续滑动。",mistakes:["只发第一个成分","滑动不够"],examples:examples[symbol]??[],pairs:[],patterns:["常见字母组合"]})),
...cons.map(symbol=>({symbol,type:"辅音" as const,category:"辅音",ipaName:"RP consonant",description:"用气流、声带和舌唇位置建立清晰边界。",tip:"先定位发音部位，再控制送气或摩擦。",mistakes:["清浊混淆","尾音弱化"],examples:[{word:cExamples[symbol]?.[0]??"word",ipa:cExamples[symbol]?.[1]??`/${symbol}/`,meaning:"例词",emoji:"🗣️"}],pairs:[],patterns:["常见字母组合"]}))
];
export const bySymbol=(s:string)=>phonemes.find(p=>p.symbol===s)!;