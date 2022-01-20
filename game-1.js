const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Kinyitod a szemed. Csak lassan térsz magadhoz, úgy tűnik elaludtál. Nem is csoda, egész délután a könyvtárban voltál és a papucsállatkáról próbáltál meg minél több információt megszerezni. Arra még emlékszel, hogy kinyitod a Nagy Állatismereti Kézikönyvet és unottan fellapozod az egysejtűekről szóló fejezetet. Fáradt voltál, csak egy kicsit letetted a fejed az asztalra..csak néhány percre..és most? Az ablakon kinézve megállapítod, hogy igencsak hosszúra sikeredett ez a kis pihenő. Már sötétedik és a papucsállatkák életéről sem tudtál meg semmit. Most mi legyen?',
    options: [
      {
        text: 'Erőt veszel magadon, maradsz és befejezed a feladatot. Talán már nincs sok hátra.',
        nextText: 2
      },
      {
        text: 'Úgy döntesz, hogy inkább hazamész, eddig sem haladtál túl jól és hát mégiscsak péntek van.',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Fellapozod a könyvet, ahhh megvan, ..a papucsállatka felépítése..nem, ez továbbra sem tűnik érdekesnek. Még van 2 hét a házidolgozat leadásáig, nem kell ezt most befejezned. Majd ha frissebb, üdébb és kipihentebb leszel.',
    options: [
      {
        text: 'Összepakolsz és elindulsz a kijárat felé.',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'Ahogy pakolod össze a dolgaid, akkor veszed észre, hogy a könyvtár teljesen üres. A lámpákat már lekapcsolták. Megállapítod, hogy jól döntöttél, amikor arra jutottál, inkább hazamész. Így elaludni, de tényleg? A kijárathoz érve azonban baljós előérzeted támad, nagy a csend és nagy a sötétség. Megpróbálod kinyitni az ajtót, de ...ZÁRVA van! Mindenki hazament, de téged itt felejtettek, hogy lehet, hogy senki sem szólt?! Eszedbe jut a mobilod, hogy haza telefonálj, valaki jöjjön érted és juttasson ki innen - nagyon nem szeretnéd az egész hétvégét egy könyvtárban tölteni! Már nyúlsz is a zsebed felé, amikor eszedbe jut, hogy nincs nálad, Jocó bácsi vette el még a nagyszünet végén, amikor becsengettek, mert nem kapcsoltad ki. Kellemetlen. Hogyan tovább?',
    options: [
      {
        text: 'Elindulsz másik kijáratot keresni. Talán van valahol egy véletlenül nyitva felejtett ajtó. Vagy egy pótkulcs. Vagy telefontöltő. Esetleg valami harapnivaló, már kezdesz éhes is lenni. Úgy tűnik, kevés volt a menzás szilvásgombóc. Nah, de koncentráljunk a KIJÁRATRA!',
        nextText: 4
      },
      {
        text: 'Eszedbe jut, hogy Fruzsi néni, a könyvtáros asztalán mintha láttál volna egy asztali telefont. Őskori technika - gondolod magadban - de lehet ez húz majd most ki a pácból. Elindulsz Julcsi néni asztalához.',
        nextText: 5
      },
    ]
  },
  {
    id: 4,
    text: 'Azért lássuk be, nem egyszerű bármit is megtalálni ebben a sötétben. Leginkább másik kijáratot. Egy elemlámpa jól jönne. De abból pont annyi van nálad, mint működő mobiltelefonból. A könyvespolcok között botorkálva halvány fénysugarat veszel észre. Lehet másnak is sikerült a könyvek felett elaludnia? Halló...van itt valaki? - kiabálod a sötétségbe, de nem érkezik válasz.',
    options: [
      {
        text: 'Bizonytalan léptekkel ugyan, de elindulsz a fénysugár irányába.',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Fruzsi néni asztala. Úgy tűnik, elfelejtette lekapcsolni a kis lámpát. Az asztal sarkán néhány könyvtári kölcsönző cédula mellett egy asztali telefon. Ezzzzazzz! Megmenekültél. A telefonhoz közelebb lépve azonban látod, hogy a használathoz szükséged lesz Julcsi néni könyvtárosi azonosítójára. Nah, ne..még ez is. Próbálod felidézni a legutóbbi alkalmat, amikor találkoztatok, hátha eszedbe jut a nyakában lógó belépőkártyán található azonosítószám. De hiába. Reményvesztetten leroskadsz a legközelebbi székre - egyre biztosabbnak látszik, hogy az egész hétvégét itt fogod tölteni. Utálom a papucsállatkákat - gondolod magadban, de ahogy végignézel az asztalon, meglátsz egy jegyzetfüzetet - "telefon azonosító kód vészhelyzet esetére" felirattal. Szeretem a papucsállatkákat és fellélegezve nyitod ki  a jegyzettömböt, ahol egy rejtélyes kódsort találsz. Ez meg vajon mi lehet?',
    options: [
      {
        text: 'Nah, most még ez is..rejtélyes kódsor..úgy döntesz, inkább sajnálod még magad egy kicsit és tovább utálod a papucsállatkákat',
        nextText: 6
      },
      {
        text: 'Rejtélyes kódsor, mi? Már érzed is a szabadság édes ízét - milyen kódsor az, amit te ne tudnál kitalálni?! Előveszel egy tollat és olvasni kezded.',
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text: 'Úgy tűnik, elég volt néhány percet eltölteni az önsajnálat mocsarában, mert egyre erősebben érzed, hogy közel a szabadulás. Mindig is szerettél rejtvényeket megoldani és valószínű, hogy Julcsi néni kódja sem feltörhetetlen. Arról nem is beszélve, hogy még két napig a mai uzsonnád maradékából élni, nem egy vonzó lehetőség.',
    options: [
      {
        text: 'Erőt veszel magadon és tollat ragadsz. Olvasni kezded a jegyzetet.',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: '"Ha IGAZ, akkor 1, ha HAMIS, akkor 0" - nah jó, de mi? - gondolod magadban…kell itt még lennie valaminek..továbblapozol és egy Vizikutya feladványra bukkansz. Az első kérdés: A vízikutya trópusi vidékről származó állat, ezért igen kedveli a meleg környezetet.',
    options: [
      {
        text: 'Igaz',
        nextText: 8
      },
      {
        text: 'Hamis',
        nextText: 9
      },
    ]
  },
  {
    id: 8,
    text: 'Gondold ezt át újra, szólal meg egy hang a fejedben. A faliújságon meglátsz egy ismertetőt a vizikutyákról: "annak ellenére, hogy Mexikóból származik a hideg – 25 C fok alatti hőmérsékletet kedveli,"',
    options: [
      {
        text: 'Aha, akkor a válasz hamis!',
        nextText: 9
      },
      {
        text: 'Aha, akkor a válasz igaz!',
        nextText: 8
      }
    ]
  },
  {
    id: 9,
    text: 'A rejtvény 5 kérdést tartalmaz, te pedig gondosan feljegyzed az első kérdésre adott válaszod. Majd tovább olvasod a feladványt: "A vizikutya fogságban akár 20 évig is élhet".',
    options: [
      {
        text: 'Igaz',
        nextText: 11
      },
      {
        text: 'Hamis',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'Gondold ezt át újra, szólal meg egy hang ismételten a fejedben. A faliújságon lévő ismertető szerint: "életkora – szabadban kb 10 évig él, fogságban az élettartama ennek a dupláját is elérheti"',
    options: [
      {
        text: 'Igaz',
        nextText: 11
      },
      {
        text: 'Hamis',
        nextText: 10
      }
    ]
  },
  {
    id: 11,
    text: 'Érzed, hogy kezdesz belejönni, ezt a választ is leírod és már olvasod is tovább: "A vízikutya zsákmányát éles fogaival aprítja fel"',
    options: [
      {
        text: 'Igaz',
        nextText: 12
      },
      {
        text: 'Hamis',
        nextText: 13
      }
    ]
  },
  {
    id: 12,
    text: 'Háát, ebben azért nem vagy teljesen biztos, lopva ismét a faliújságra nézel: "A zsákmányt vákumerővel szippantja a gyomrába."',
    options: [
      {
        text: 'Aha, akkor a válasz, Hamis',
        nextText: 13
      },
      {
        text: 'Aha, akkor a válasz, Igaz',
        nextText: 12
      }
    ]
  },
  {
    id: 13,
    text: 'Már látod a végét, gyorsan leírod a harmadik kérdésre adott válaszod és ugrasz is a következőre. A negyedik kérdés így szól: "A vízikutya ragadozó, apró viziállatokkal táplálkozik"',
    options: [
      {
        text: 'Igaz',
        nextText: 15
      },
      {
        text: 'Hamis',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: 'Eszedbe jut az előző kérdés és az arra adott válasz, azt olvastad, hogy a zsákmányt vákumerővel szippantja a gyomrába. De hát néhány vizi fűszálat nem nevezhetünk zsákmánynak!',
    options: [
      {
        text: 'Végiggondolva, igaz, a vizikutya minden cukisága ellenére ragadozó.',
        nextText: 15
      },
      {
        text: 'Hamis',
        nextText: 14
      }
    ]
  },
  {
    id: 15,
    text: 'Sikeresen túljutottál a negyedik kérdésen is, ezt a választ is leírod, de már az utolsó kérdésre koncentrálsz: "A vízikutya, ha elveszti a lábát, akkor képes újranöveszteni"',
    options: [
      {
        text: 'Igaz',
        nextText: 17
      },
      {
        text: 'Hamis',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Ismét a faliújságra pillantasz: "Először laborokban, kísérleti állatként tartották, mert hihetetlen a gyógyulási képessége, elvesztett végtagjait képes újranöveszteni.',
    options: [
      {
        text: 'Aha, akkor a válasz Igaz!',
        nextText: 17
      },
      {
        text: 'Aha, akkor a válasz Hamis',
        nextText: 16
      }
    ]
  },
  {
    id: 17,
    text: 'Itt a vége, gyorsan a lejegyzetelt válaszaidra tekintesz és már írod is a kódot. Igaz = 1, hamis = 0. Az asztalon található telefonon az alábbi számgombokat nyomod le:',
    options: [
      {
        text: '01011',
        nextText: 19
      },
      {
        text: '10110',
        nextText: 18
      },
      {
        text: '01001',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: 'Hűha, ez nem lesz jó..hiába próbálkozol újra meg újra, a telefon néma marad. De mit nézhettem be? - kérdezed magadtól. Tudod, hogy ilyen közel a szabadsághoz már nem fogod feladni!',
    options: [
      {
        text: 'Újra olvasni kezded a jegyzetet.',
        nextText: 7
      }
    ]
  },
  {
    id: 19,
    text: 'Győzelem!!!! A telefon búg, van szabad vonal..el sem hiszed, hogy végül ilyen egyszerű volt, hiába no, ügyes vagy! Tárcsázod is az otthoni számotokat, küldjenek érted valakit mielőbb, mert már igencsak szabadulnál a könyvtár fogságából. Miközben várod, hogy valaki felvegye a telefont, magadban elmosolyodsz, mert elképzeled, ahogy egy vizikutya az eleséget egyszerűen a szájába szippantva kajál...ez milyen már, de tényleg?!',
    options: [
      {
        text: 'Küldetés vége, gratulálunk sikeresen befejezted a játékot! ÚJRAJÁTSZÁS',
        nextText: -1
      }
    ]
  }
]

startGame()

