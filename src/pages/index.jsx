// Podcasty
// Vytvořte komponentu pro zobrazení seznamu podcastových epizod.
// 1. Vytvořte si repository ze šablony cviceni-podcasty a naklonujte si repository z vašeho GitHub účtu na počítač.
// 2. Otevřete si repository ve VS Code a v terminálu spusťte příkaz npm install pro instalaci závislostí. 
//    Pokračujte spuštěním vývojového serveru klasickým npm run dev.

// 3. Podívejte se na HTML/JSX kód v src/pages/index.jsx. Seznam epizod je v kódu napevno zadrátovaný – my z něj budeme chtít udělat slušně 
//    vychované JSX komponenty, které umí zobrazit jakýkoli seznam epizod, který dostanou na vstupu v poli.

// 4. Vytvořte komponentu Episode, která bude zobrazovat jednu podcastovou epizodu. Její props budou num, title a guest. 
//    Pomocí této komponenty zobrazte stejné dvě epizody, jaké byly v původním kódu napevno zadrátované.

// 5. Nezapomeňte pro vaši komponentu vytvořit separátní složku s vlastním JavaScriptem/JSX a CSS.

// 6. Místo natvrdo zadrátovaných epizod přímo v kódu použijte následujicí data a na stránce zobrazte všechny uvedené epizody.
// 7. Rozmyslete si, která vlastnost se nejlépe hodí jako klíč, a použijte ji, aby JSX přestal v konzoli prudit, že mu chybí key prop.

import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode } from "../components/Episode";

const podcast1 = {
  num: "126",
  title: "Robot, který snědl koblihu",
  guest: "Radovan Siwek",
};

const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

document.querySelector("#root").innerHTML = render(
  <>
    <div className="episodes-list">
      <h2>Výpis pomocí komponenty</h2>
      <Episode
        num={podcast1.num}
        title={podcast1.title}
        guest={podcast1.guest}
      />

      <h2>Výpis pomocí map</h2>
     
      {episodes.map((episod) => ( 
        <Episode
          key={episod.num} 
          num={episod.num}
          title={episod.title}
          guest={episod.guest}
        />           
      ))}
      
    {/* Puvodni zadani */}
      {/* <div className="episode">
        <div className="episode__num">127</div>
        <div className="episode__body">
          <div className="episode__title">Hledání plyšového Yettiho</div>
          <div className="episode__guest">host: Vojtěch Ryba</div>
        </div>
      </div>

      <div className="episode">
        <div className="episode__num">128</div>
        <div className="episode__body">
          <div className="episode__title">Moderní hrachová kaše</div>
          <div className="episode__guest">host: Kamila Štancová</div>
        </div>
      </div> */}
    </div>
  </>
);
