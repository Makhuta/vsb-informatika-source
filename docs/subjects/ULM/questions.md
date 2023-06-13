---
sidebar_position: 1
title: Otázky
---

## OTÁZKY!! (vysvětlení k individuálním odpovědím v závorce, špatné odpovědi mohou chybět, ale nejdůležitější jsou stejně odpovědi správné) <br />
- formule nejsou přepsané do Latexu protože není moc čas
[Link / skok úplně nahoru](./predmluva) <br />

### 1) Pro formuli $p \supset (q \lor \neg q)$
💚 Je splnitelná (v pravdivostní tabulce má aspoň jeden řádek na konci jedničku, tato formule je dokonce tautologie) <br />
💚 Je ekvivalentní s formulí $(p \land q) \supset q$ (obě formule mají stejné výsledky pravdivostní tabulky – jsou tautologiemi) <br />
💚 Je ekvivalentní s formulí $q \supset (\neg p \lor p)$ (obě formule mají stejné výsledky pravdivostní tabulky – jsou tautologiemi) <br />
💚 Je logicky pravdivá, neboť konsekvent implikace je v každé valuaci výrokové proměnné q pravdivý. <br />
💥 Její negace je splnitelná formule (její negace je kontradikce, přotože původní je tautologie)

### 2) Pomocí rezoluční metody v PL1
💚 Lze syntaticky ověřovat platnost Aris. sylogismů. ((jsou to pozůstatky / fragment PL) <br />
💚 Lze ověřit platnost libovol. Aris. sylogismu. ((jsou to pozůstatky / fragment PL) <br />
💚 Lze nepřímo dokazovat platnost daného úsudku. (rezolučka umí dokazovat přímo i nepřímo) <br />
💚 Lze parciálně ověřit tautologičnost formule. <br />
💚 Lze nepřímo dokázat tautologičnost formule. <br />
💚 Lze parciálně rozhodnout tautologičnost formule. <br />
💥 Ověřujeme, zda závěr vyplývá z nespočetné množiny předpokladů (toto je case diagramů nebo VL, ale určitě ne PL)

### 3) Sémantická metoda ve VL
💚 Aplikovaná na daný úsudek ověřuje, zda závěr pravdivý ve všech modelech předpokladů (ano, sémantika je přece jenom o pravdivostních hodnotách výroků) <br />
💚 Není metoda sémantických tabel (sémantické tabla, také tree proof, je grafická metoda) <br />
💚 Je tabulková metoda a metoda sémantickým sporem (rozumíme pravdivostní tabulku nebo důkaz sporem) <br />
💚 Ověřuje platnost pomocí valuací výrokových proměnných.

### 4) Mějme množiny A = {1,2,3}, B = {b} a relaci R. Která z následujících tvrzení jsou platná?
💚 Pokud relace R je definována jako podmnožina A x B: {[1,b], [2,b], [3, b]}, pak se jedná o surjektivní zobrazení <br />
💚 Pokud relace R je def jako podmnožina BxA: {[b,1],[b,2],[b,3]},nejedná o zobrazení. (pozor! místo A x B je tu B x A) <br />
💚 Pokud relace R je definována jako podmnožina B x A $\cup$ A x B a jedná se o symetrickou relaci. Pokud je v relaci R dvojice [1,b], pak se v relaci R nachází rovněž dvojice [b,1] <br />
💚 Pokud relace R je definována jako podmnožina A x B: {[1,b], [2,b], [3, b]}, pak se nejedná o injektivní zobrazení <br />
💚 Pokud relace R je def jako podmnožina BxA sjednoceno s AxB a jedná se o symetrickou relaci, potom je v relaci R dvojice [1,b], pak se v relaci R nachází rovněž dvojice [b,1].

### 5) Které z tvrzení platí pro formuli $\forall x \forall y$ [P(x,y) $\supset$ Q(f(x),y)]
💚 V jejím modelu je binární relace P podmnožinou relace Q (binární relace má dva argumenty - zde "y", které je u obou stejné a "x", které se v Q aplikuje do funkce) <br />
(TO DÁLE ZNAMENÁ:) <br />
💚 Je splnitelná, neboť existuje její model. <br />
💚 Má jako svůj model například tuto interpretační strukturu: <br />
U = N (množina přir. čísel), <br />
P={[x,y]|x=y}, Q={[x,y]|x>=y}, <br />
f' ... druhá mocnina. <br />
💚 Relace Q funkční symbol se interpretuje jako totální funkce. <br />
💚 Funkční symbol se interpretuje jako totální funkce.

### 6) Metoda Vennových diagramů
💚 Je sémantická metoda, která ověřuje, zda závěr je platný ve všech modelech předpokladů <br />
💚 Je sémantická metoda, kterou lze ověřit platnost Aristotelových sylogismů (sémantické metody pro PL a Aristetolovu logiku obsahují Venn. Diagramy) <br />
💚 Používá se pro ověření platnosti úsudků v PL1 s maximálně třemi jednomístnými predikáty (ve cvičeních min. 2 množiny a max 3) <br />
💚 Je založena na naivní teorii množin (predikáty jsou podobné množinám)

### 7) Která z následujících tvrzení platí pro tuto situaci: množina A je podmnožinou množiny B.
💚 Rozdíl množiny A a B je prázdná množina (V množině A by nic nezbylo - dle definice podmnožiny) <br />
💚 Doplněk množiny B leží v doplňku množiny A (doplněk je odečítání druhý od prvního) <br />
💚 Všechny prvky množiny A leží v množině B i v případě, že A je prázdná množina. <br />
💚 Prvek leží v množině A pouze když leží v množině B. <br />
💚 Množina A je identická množině B, právě když mají stejné prvky, to jest, když všechny prvky náležící množině A náleží také množině B a naopak.

### 8) Následující úsudek:
Číslo 2 je nezáporné. <br />
Číslo 2 je prvočíslo. <br />
◻️◻️◻️ <br />
Číslo 2 je dělitelné samo sebou beze zbytku. <br />
💚 Je neplatný, protože závěr z premis nevyplývá (logika je jako AI, nechápe souvislost mezi tím, že 2 je „členem prvočísel“ a tím, že prvočísla, tedy i 2, jsou dělitelné samo sebou beze zbytku) <br />
(TO ZNAMENÁ ŽE:) <br />
💚 Je neplatný, protože formalizujeme-li jej, pak závěr není platný v libovolném modelu předpokladů. <br />
💚 Má v určité interpretační struktuře premisy pravdivé i závěr pravdivý, ale není platný.

### 9) Které z tvrzení platí pro formuli ∀x[P(x) ⊃ Q(a,b)]
💚 Formule [∃xP(x) ⊃ Q(a,b)] z ní vyplývá. <br />
💚 Je ekvivalentní formuli [∃xP(x) ⊃ Q(a,b)] <br />
💚 Je ekvivalentní s formulí [¬∃xP(x) ⋁ Q(a,b)] (mají stejné modely) <br />
💚 Má stejné modely jako formule [¬∃xP(x) ⋁ Q(a,b)] <br />
💥 Je ekvivalentní s formulí [∀xP(x) ⊃ Q(a,b)] <br />
💥 Je ekvivalentní s formulí [¬∃xP(x) ⊃ Q(a,b)] <br />
💥 Její negací je formule ∀x[P(x) ⋀ ¬Q(a,b)] (není ani změněný kvantifikátor)

### 10) Pomocí rezoluční metody ve VL
💚 Lze ověřit, zda negovaná formule je kontradikce. <br />
💚 Lze nepřímo dokázat tautologičnost formule. <br />
💚 Lze ověřit tautologičnost formule a platnost úsudku VL. <br />
💚 Lze nepřímo dokázat platnost úsudku. <br />
💥 Lze ověřit, že tento úsudek je platný: <br />
Všechny opice jsou krásné, <br />
Judy je opice <br />
◻️◻️◻️ <br />
Judy je krásná. (platí pro PL a ne VL)

### 11)	Která z následujících tvrzení jsou pravdivá?
💚 Relace je podmnožina kartézského součinu <br />
💚 Následující relace nad celými čísly jsou totální funkce: sčítání, násobení, rozdíl (dělení je parciální) <br />
💚 Všechny podmnožiny relace A = {<1, 2>, <2, 4>, <3, 6>} jsou relacemi <br />
💚 Funkce dělení na celých číslech je parciální <br />
💚 Pokud v metodě přirozené dedukce zavedeme hypotézu H a odvodíme z ní formuli A, pak jako řádný krok důkazu musíme zavést formuli H ⊃ A <br />
💚 Princip unifikace v obecné (…), kdy je |- ∀x Px⊃P(X/term) <br />
💚 Metodou sémantických tabel využívá disjunktivních zákonu <br />
💚 Správnost úsudku ověřujeme bez empirického zkoumání stavu světa <br />
💚 Pro automatizované ověření platnosti úsudku je důležitá jeho správná formalizace <br />
💚 Hilbertův kalkul je úplný kalkul stejně jako metoda přirozené dedukce. <br />
💥 Funkce sčítání reálných čísel je pouze parciální <br />
💥 Zobrazení není relace (relace je zobrazení)

### 12)	Které z následujících systémů spojek ve VL jsou úplné:
💚 negace, konjunkce <br />
💚 negace, disjunkce <br />
💚 negace, implikace <br />
? neg, konjunkce, disjunkce (spíše 💚) <br />
💥 disjunkce, implikace <br />
💥 konjunkce, disjunkce <br />
💥 konjunkce, implikace <br />
💥 konjunkce, disjunkce, implikace, ekvivalence <br />
(víme, že {¬, ∧, ∨, ⇒} tvoří úplný systém logických spojek.. nyní si stačí uvědomit, že platí: (a ⇒ b) |=| (¬a ∨ b) a (a ∧ b) |=| ¬(¬a ∨ ¬b).. 3. množina ∆ = {¬, ∧} tvoří úplný systém logických spojek - jediné správné kombinace jsou: {¬,→}, {¬,∧}, {¬,∨}, SOURCE: MUNI)

### 13) Označte, které z následujících formulí jsou logicky pravdivé.
💚 [∀xP(x) ∨ ∀xQ(x)] ⊃ ∀x[P(x) ∨ Q(x)] (přesouvání kvantifikátoru jako krok 6 skolemizace - zákon distribuce kvantifikátorů!!) <br />
💚 ∀x P(x) ⊃ (Q(y)⊃∀x P(x))
💚 ∀x [Px ⋀ Q(x)]≡[∀x Px ⋀ ∀xQ(x)]
💚 ¬∃x[A ⊃ B(x)] ≡ ∀x[¬A ∨ B(x)] (modely) <br />
💚 ∃x[P(x) ∧ Q(x)] ⊃ [∃xP(x) ∧ ∃xQ(x)] <br /> (přesouvání kvantifikátoru jako krok 6 skolemizace - zákon distribuce kvantifikátorů!!) <br />
💚 ¬∃x[P(x) ∧ Q(x)] ⊃ [∀xP(x) ∨ ∀xQ(x)] (negace, přesouvání kvantifikátoru jako krok 6 skolemizace - zákon distribuce kvantifikátorů!!) <br />
💚 A(x/y) ⊃ ∃xA(x) (term t je substituovatelný za proměnnou x) <br />
💥 ¬∀x[P(x) ∧ Q(x)] ≡ [∃xP(x) ∧ ∃xQ(x)] <br />
💥 ¬[∀xP(x) ⊃ (Q(y) ⊃ ∀xP(x))] ≡ [∃x¬P(x) ∨ (Q(y) ∧ ∃xP(x))] <br />
💥 ∀xA(x) ≡ ∃xA(x) (není to samé) <br />
💥 ∀x∀yA(x,y) ⊃ ∀x∀y¬A(x,y) <br />
💥 ∃x∀yA(x,y) ≡ ∃y∀xA(x,y) (nemůžeme vyměnit proměnné v kvantifikátorech) <br />
(logicky proveditelné / platné: <br />
💚 ∀xPx ⊃ Qy ⊃ ∀xPx <br />
💚 [∀xPx ∨ ∀xQx] ⊃ ∀xPx ∨ Qx <br />
💚 ∀x[Px ⋀ Q(x)] ≡ [∀xPx ⋀ ∀xQ(x)] <br />
💚 [¬∃x∀yPx,y ⊃ ∀y∃xPxy] ≡ [∃x∀y Px,y ⋀ ∃y∀x¬P(x,y)] <br />
)

### 14) Určete, které z následujících úsudků jsou logicky platné:
💚 Venku prší. Karel je veselý. Venku prší. (pokud je závěr v předpokladu, tak vyplývá) <br />
💥 Každý filozof je líný. Petr není filozof. Petr není líny. (Petr může být líný, není nijak dáno, že jenom filozofové jsou líní) <br />
💥 Každý pes je zelený. Alík není pes. Alík není zelený. (stejné vysvětlení jako u filozofů) <br />
💥 Venku sněží. Svítí slunce. Venku nesněží. (spor)

### 15) Složené výroky ve VL jsou:
💚 Dnes sněží a mrzne. <br />
💚 Jestliže bude sněžit, tak si postavíme sněhuláka.
💥 Sněhová královna vládne v říši sněhu a ledu. (neexistuje sněhová královna, nemá smysl se nad tímto vůbec zamýšlet) <br />
💥 Mrzne až praští. (subjektivní) <br />
💥 Z čerstvě napadaného sněhu se velmi dobře budují velké hromady. (nemá ani spojku) <br />
💥 Lední hokej je velmi zajímavý sport pro všechny věkové kategorie. (subjektivní a není tam ani spojka) <br />

### 16) 🔴 Nechť PU a QU jsou obory pravdivosti predikátů P, Q. Pak:
💚 Je-li formule ∀xPx ⊃ Qx v dané interpretaci pravdivá, pak platí, že PU ⊆ QU <br />
💚 Je-li formule ∀x[P(x) ∧ Q(x)] v dané interpretaci pravdivá, pak platí, že PU = QU. <br />
💚 Je-li formule ∃x[P(x) ∧ Q(x)] v dané interpretaci pravdivá, pak platí, že (PU ∩ QU) je neprázdný. <br />
💚 Je-li formule ∃x[P(x ⊃ Q(x)] logicky pravdivá, pak PU není identické s universem U nebo QU = U. <br />
💚 Formule ∀x[P(x) ⊃ Q(x)] ⊃ [∃xP(x) ⊃ ∃xQ(x)] je logicky pravdivá, neboť jeli PU ⊂ QU, pak je-li P U Q neprázdné, je také QU neprázdné. <br />
💚 Formule ∀x[P(x) ⊃ Q(x)] ⊃ [∀xP(x) ⊃ ∀xQ(x)] je logicky pravdivá, neboť je-li PU ⊆ QU, pak je-li PU = U, je také QU. <br />
💚 Formule ∀x[P(x) ⊃ Q(x)] ≡ [∃xP(x) ⊃ ∀xQ(x)] je logicky pravdivá, neboť je-li PU ⊆ QU, pak je-li PU neprázdné, tak QU = U. <br /> <br />
💚 Formule [∃xP(x) ∧ ∃xQ(x)] ⊃ ∃x[P(x) ∧ Q(x)] je logicky pravdivá, neboť je-li (PU ∩ QU) neprázdný, pak musí být jak PU, tak QU neprázdné. <br />
💚 Formule [∀xP(x) ∨ ∀xQ(x)] ≡ ∀x[P(x) ∨ Q(x)] je logicky pravdivá, neboť je-li PU = U nebo QU = U, pak je také sjednocení (PU ∪ QU) = U. <br />
💚 Formule ∃x[P(x) ∧ Q(x)] ⊃ [∃xP(x) ∧ ∃xQ(x)] je logicky pravdivá, neboť je-li (PU ∩ QU) neprázdné, pak musí být jak PU, tak QU neprázdné. <br />
💚 Formule ∃x[P(x) ∨ Q(x)] ≡ [∃xP(x) ∨ ∃xQ(x)] je logicky pravdivá, protože je-li (PU ∪ QU) neprázdné, pak musí být PU nebo QU neprázdné množiny a naopak.

### 17) Určete, které z následujících tvrzení jsou pravdivé:
💚 Relace použité pro interpretaci v PL1 musí být homogenní. <br />
💚 Princip unifikace v obecné (…), kdy je |- ∀x Px⊃P(X/term). <br />
💚 Metodou sémantických tabel využívá disjunktivních zákonu. <br />
💚 Libovolnou n-argumentovou funkci lze vyjádřit pomocí n+1 argumentové relace. <br />
💚 Správnost úsudku je dána pouze logickou strukturou premis a závěru. <br />
💚 Správnost úsudku ověřujeme bez empirického zkoumání stavu světa. <br />
💚 PL1 pracuje pouze s totálními funkcemi, tj. takovými, kdy každý vzor má právě jeden obraz. <br />
💚 Metodou přirozené dedukce v PL 1 lze dokazovat jak přímo, tak i nepřímo. <br />
💚 Pokud je množina A vlastní podmnožinou B, pak B má alespoň jeden prvek, který neleží v A. <br />
💚 Při použití obecné rezoluční metody obecně vedeme důkaz nepřímo. <br />
💚 Sound argument je takový, jehož premisy jsou pravdivé, tedy i závěr je pravdivý. <br />
💚 Pokud je množina A vlastní podmnožina množiny B, pak B má aspoň jeden prvek, který neleží v A. <br />
💚 Všechny podmnožiny relace A = {<1,2>,<2,4>,<3,6>} jsou relacemi. <br />
💚 Operaci rozdíl libovolných dvou množin lze vyjádřit pomocí operace doplňku na těchto dvou množinách. <br />
💚 Potenční množina množiny M je množina všech podmnožin množiny M, tedy mezi její prvky patří i množina M. <br />
💚 Pokud v metodě přirozené dedukce zavedeme hypotézu H a odvodíme z ní formuli A, pak jako řádný krok důkazu musíme zavést formuli H ⊃ A <br />
💚 Funkce dělení na celých číslech je parciální. <br />
💚 Relace je podmnožina kartézského součinu. <br />
💚 Následující relace nad celými čísly jsou totální funkce: sčítání, násobení, rozdíl. <br />
💚 Pro automatizované ověření platnosti úsudku je důležitá jeho správná formalizace. <br />
💚 Hilbertův kalkul je úplný kalkul stejně jako metoda přirozené dedukce. <br />
💥 Jestliže jsou premisy i závěr pravdivé, pak je úsudek platný. (neplatí, potvrzeno Menšíkem) <br />
💥 Predikátová logika druhého řádu je méně expresivní než PL1. (druhý řád je víc expresivní - logicky) <br />
💥 Každý platný úsudek, který jsem schopni adekvátně formalizovat v PL1, jsme schopni adekvátně formalizovat i ve VL tak, že zůstane platným. <br />
💥 Ze sporné množiny předpokladů nemůže vyplývat pravdivý závěr. <br />
💥 Funkce je libovolná podmnožina kartézského součinu. <br />
💥 Relace je pouze zprava jednoznačné zobrazení. <br />
💥 Funkce použité pro interpretaci v PL1 mohou být parciální, tj. takové, kdy každý vzor má minimálně jeden obraz. (parciální = nemá žádný obraz)
💥 Množiny jsou identické, právě když mají stejný počet prvků. <br />
💥 Pokud existuje nějaký prvek, který je v množině A a není v množině B, potom je B nutně podmnožinou množiny A. <br />
💥 Pokud mají dvě množiny stejnou mohutnost, pak jsou identické. <br />
💥 Průnik dvou libovolných množin je vždycky neprázdný.

### 18) Nechť F je formule VL obsahující literály a, b, c, pak F:
💚 Má celkem 8 ohodnocení. (2 na počet literálů) <br />
💚 Je splnitelná, pokud je tautologií. <br />
💚 Je nesplnitelná, pokud nemá model. <br />
💚 Může být převedena do úplné konjunktivní normální formy, pokud není tautologíí.
💥 Je tautologií, pokud existuje alespoň jeden model. (musí být všechny model) <br />
💥 Je sporná, pokud aspoň jedno ohodnocení není modelem. <br />
💥 Je kontradikcí, pokud nemá alespoň jeden literál pravdivé ohodnocení. (neřešíme literály, ale modely a nesmí být žádný model)

### 19) Pomocí Vennových diagramů provádíme v PL1:
💚 Ověřování platnosti úsudků, které jsou složeny ze tří subjekt-predikátových (S-P) výroků (kde S i P jsou nějaké vlastnosti). <br />
💚 Ověřování platnosti libovolných úsudků v PL1. <br />
💚 Kontrolu správnosti kategorických sylogismů. (Aristetol. sylogismy) <br />
💚 Ověřování platnosti úsudků v PL1, pokud obsažené predikáty jsou unární. (P(x) řešíme s těmito predikáty) <br />
💥 Ověřování platnosti úsudků v logikách vyšších řádů než PL1. <br />
💥 Kontrolu správnosti úsudků, které jsou složeny z elementárních výroků VL. <br />
💥 Ověřování platnosti úsudků v PL1, pokud obsažené predikáty jsou aspoň binární.

### 20) Nechť A, B ⊨ C a A, C ⊨ D, pak:
💚 Formule A je pravdivá ve všech modelech množiny formulí {B, C}. <br />
💚 Formule D je pravdivá v každém modelu množiny formulí {A, C}. <br />
💚 A,C ⊨ C <br />
💥 Pokud jsou formule A, B nepravdivé, pak je i C nepravdivé. <br />
💥 Když není pravdivá formule D, tak není pravdivá ani A ani B.

### 21) Nechť platí: A, B, C ⊨ D, pak:
💚 D je formule pravdivá v každém modelu množiny formulí {A, B, C}. <br />
💚 A, B ⊨ D <br />
💚 A, B, C, E ⊨ D <br />
💚 Nemůže nastat případ, kdy formule A, B, C jsou v určené interpretaci pravdivé a formule D není <br />
💚 Pokud je D nepravdivá formule, pak je alespoň jedna formule z A, B, C nepravdivá <br />
💥 Formule D nemusí být pravdivá v každém modelu množiny formulí {A, B, C}, avšak musí být pravdivá v aspoň jednom. <br />
💥 Množina formulí {A, B, C, ¬D} má model. <br />
💥 A, B, C, D jsou nutně pravdivé

### 22) Která z následujících tvrzení jsou správné?
💚 Žádná valuace kde q=0 a r=0, není modelem formule (p⊃q) ⋀ (q ∨ r) <br />
💚 Jedním z modelů formule (p⊃q) ⋀(q ∨ r) je valuace p=0, q=0, r=1 <br />
💚 Každá valuace, pro kterou je q=1, je modelem formule (p ⊃ q) ∧ (q ∨ r) <br />
💚 Formule ∀x[P(x) ⊃ Q(x)] definuje v dané interpretaci vztah „být podmnožinou“ mezi obory pravdivosti P a Q. (pokud je členem P tak je členem Q) <br />
💚 Formule ∃x[P(x) ⊃ Q(x)] definuje v dané interpretaci vztah „být podmnožinou“ mezi obory pravdivosti P a Q. (pokud je členem P tak je členem Q) <br />
💚 Formule ∀xPx⊃¬Qx definuje v dané interpretaci vazbu „být disjunktem“ … P a Q <br />
💚 Každá formule tvaru ∃xP(x) definuje v dané interpretaci určitou podmnožinu universa. <br />
💚 Každá formule tvaru P(x) s volnou proměnnou x definuje v dané interpretaci určitou podmnožinu universa. <br />
💚 když chceme rezoluční metodu použit v PL tak je nutno formuli dát to Skolemovy klauzulární formy. <br />
💥 Formule ∀x[P(x) ⊃ ¬Q(x)] definuje v dané interpretaci vztah „být podmnožinou“ mezi obory pravdivosti P a Q.

### 23) Určete, co platí pro klausuli:
💚 Je to konečná disjunkce literálů. <br />
💚 Je to elementární disjunkce. <br />
💚 Neobsahuje konjunkci. <br />
💚 Neobsahuje implikaci. <br />
💥 Je to elementární konjunkce. <br />
💥 Obsahuje pouze konjunkci literálů. <br />
💥 Je to konečná konjunkce výrokových symbolů. <br />
💥 Obsahuje pouze výrokové proměnné.

### 24) Která z následujících tvrzení jsou platná pro vztahy mezi množinami:
💚 Množina A je identická množině B, právě když mají stejné prvky, to jest, když všechny prvky náležící množině A náleží také množině B a naopak. <br />
💚 Množina A je vlastní podmnožinou množiny B, značíme A ⊂ B, právě tehdy, když každý prvek z A je také prvkem B a ne naopak. <br />
💚 Prázdná množina je podmnožinou každé množiny. <br />
💚 Pokud je množina A vlastní podmnožinou množiny B, pak B má aspoň jeden, který neleží v A. <br />
💥 Z definice podmnožiny plyne, že ne každá množina je svou podmnožinou. <br />
💥 Množina A se rovná množině B, právě když každý prvek A je také prvkem B a ne naopak. <br />
💥 Prázdná množina není podmnožinou žádné množiny. <br />
💥 Množina A je podmnožinou množiny B, značíme A ⊆ B, právě tehdy a jen tehdy, když mají identické prvky. <br />
💥 Množina A je vlastní podmnožinou množiny B, značíme A ⊂ B, právě když každý prvek A je také prvkem B. <br />
💥 Množina A se rovná množině B, právě když každý prvek A je také prvkem B a ne naopak.

### 25) Která z následujících tvrzení platí pro rezoluční metodu ve VL?
💚 Rezoluční metoda umožňuje prokázat platnost úsudku jak sporem, tak přímou metodou. <br />
💚 Platnost úsudku nezávisí na interpretaci. <br />
💚 V případě nepřímého důkazu tautologičnosti pomocí rezoluční metody formule ((a ⊃ b) ∧ (b ⊃ c) ⊃ (a ⊃ c) dojde k odvození prázdné klausule. <br />
💚 Pro důkaz pomocí rezoluční metody je nutné převést formuli do KNF. <br />
💥 Pro důkaz pomocí rezoluční metody je nutné převést formuli do UKNF. <br />
💥 Pro důkaz pomocí rezoluční metody je nutné převést formuli do UDNF. <br />
💥 Pro důkaz pomocí rezoluční metody je nutné převést formuli do DNF. <br />
💥 V případě nepřímého důkazu tautologičnosti formule ((a ⊃ b) ∧ (b ⊃ c) ⊃ (a ⊃ c) pomocí rezoluční metody nedojde k odvození prázdné klausule. (DOJDE!)

### 26) Která tvrzení platí:
💚 Pokud mě zajímá podoba výsledné pravdivostní funkce dané formule, použiji tabulkovou metodu nikoli rezoluční. <br />
💚 Formule VL má 2 na "n" možných valuací, kde "n" je počet výrokových proměnných v dané formuli. <br />
💚 Pokud výrokově logický úsudek zapíšeme ve tvaru formule (P1 ∧ P2 ∧ … ∧ Pn) ⊃ Z, kde P1 až Pn jsou premisy a Z je závěr, pak je úsudek platný tehdy a jen tehdy, když je tato formule pravdivá v každé valuaci. <br />
💚 Metoda sémantických tabel je grafická metoda aplikace distributivního zákona. <br />
💚 Metoda ověřování tautologičnosti formule sémantickým sporem ověřuje, zda existuje valuace, která splňuje negovanou formuli. <br />
💥 Důkaz pomocí rezoluční metody lze vést ve VL pouze přímo. <br />
💥 Rezoluční pravidlo lze na formuli F uplatňovat, pouze když je formule převedena do úplné normální konjunktivní formy. <br />
💥 Rezoluční pravidlo ve VL zachovává splnitelnost, ale nikoliv pravdivost. <br />
💥 Každá tautologie tvoří úplnou konjunktivní i disjunktivní normální formu.

### 27) Mějme množiny A, B, C. Pak množina (A ∩ (B ∪ C):
💚 Je prázdná, pokud A neobsahuje alespoň jeden prvek z B nebo z C. <br />
💚 Je prázdná vždy, když (B ∪ C) je prázdná. <br />
💚 Je prázdná vždy když A je prázdná. <br />
💚 Obsahuje maximálně |A| prvků. <br />
💥 Obsahuje minimálně |B|+|C| prvků. <br />
💥 Je prázdná, pokud alespoň jedna z množin A, B, C je prázdná. <br />
💥 Je vždy prázdná. <br />
💥 Je neprázdná, pokud každá z množin A, B, C je neprázdná.

### 28) Co následujícího platí? (je fajn si tu udělat pravdivostní tabulku)
💚 Jedním z modelů formule (p ⊃ q) ∧ (q ∨ r) je valuace p=0, q=0, r=1. <br />
💚 Každá valuace, pro kterou je q=1, je modelem formule (p ⊃ q) ∧ (q ∨ r). <br />
💥 Žádná valuace, pro kterou p=0 a q=0, není modelem formule (p ⊃ q) ∧ (q ∨ r). <br />
💥 Valuace p=1, q=0, r=1 je modelem formule (p ⊃ q) ∧ (q ∨ r). <br />
💥 Formule (p ⊃ q) ∧ (q ∨ r) má právě 2 modely. 
💥 Žádná valuace, pro kterou q=0, není modelem formule (p ⊃ q) ∧ (q ∨ r). <br />

### 29) Která z následujících formulí patří mezi zákony komutace kvantifikátorů?
💚 ∀x∀y A(x,y) ≡ ∀y∀x A(x,y) <br />
💚 ∃x∀y A(x,y) ⊃ ∀y∃x A(x,y) <br />
💚 ∃x∃y A(x,y) ⊃ ∃y∃x A(x,y)

### 30) Formule F je splnitelná v interpretaci
💚 Právě tehdy když existuje ohodnocení e proměnných takové, že platí |= F[e] v interpretaci I <br />
💚 Právě když existuje ohodnocení e proměnných takových, že F[e] je pravdivá v dané interpretační struktuře <br />
💚 Právě když existuje ohodnocení e promenných takový, že formule F je v tomto ohodnocení v dané interpretaci pravdivá

### 31) Algebraickou strukturu (R \ {0}, *) s operací násobení Nad množinou reálných čísel.
💚 Operace * je uzavřená na nosiči <br />
💚 Struktura (Z\{0}, *) je podgrupou této struktury <br />
💚 Operace * je komutativní

### 32) Která z následujících tvrzení o formálních teoriích jsou správné:
💚 Axiomy konzistentní teorie musí být vzájemně bezesporné <br />
💚 Axiomy teorie jsou nezávislé, když žádný axiom není dokazatelný z jiných axiomu

### 33) Mezi syntaktické metody v PL 1:
💚 Formální systém Hilbertova typu. <br />
💚 Obecná rez. metoda, Robinson. <br />
(sémantické metody: vénovy diagramy)

### 34) Mezi syntaktické metody ve VL:
💚 Rezoluční metoda P,N, sémanticka tabla. <br />
💚 Ekv. upravy, přirozena. <br />
(sémantické metody: vénovy diagramy) <br />
(sémantické metody: spor, tabulka?) <br />

### 35) Která z následujících formulí patří mezi logické zákony?
💚 ∀x∀y A(x,y) ≡ ∀y∀x A(x,y) <br />
💚 ∃x∀y A(x,y) se nerovná ∃y ∀x A(x,y) <br />
💚 ∀xA(x) ⊃ A(x/t) (term t je substituovatelný za proměnnou x) <br />
💚 A(x/t) ⊃ ∃xA(x) <br />
💚 |= ∀xA(x) ⊃ A(y) dictum de omni specielně <br />
💚 |= ∀xA(x) ⊃ A(x/t) pravidlo konkretizace <br />
💚 |= A(y) ⊃ ∃xA(x) <br />
💚 |= ¬∀xA(x) ≡ ∃x¬A(x) <br />
💚 |= ¬∃xA(x) ≡ ∀x¬A(x)

### 36) Zákony distribuce kvantifikátorů:
💚 |= ∀x [A(x) ⊃ B(x)] ⊃ [∀xA(x) ⊃∀xB(x)] <br /> 
💚 |= ∀x [A(x) ⊃ B(x)] ⊃ [∃xA(x) ⊃∃xB(x)] <br />
💚 |= ∀x [A(x) ∧ B(x)] ≡ [∀xA(x) ∧∀xB(x)] <br />
💚 |= ∃x [A(x) ∧ B(x)] ⊃ [∃xA(x) ∧∃xB(x)] <br />
💚 |= [∀xA(x) ∨∀xB(x)] ⊃∀x [A(x) ∨ B(x)] <br />
💚 |= ∃x [A(x) ∨ B(x)] ≡ [∃xA(x) ∨∃xB(x)]

### 37) Zákony prenexních operací ● |= ∀x [A ⊃ B(x)] ≡ [A ⊃∀xB(x)]
💚 |= ∃x [A ⊃ B(x)] ≡ [A ⊃∃xB(x)] <br />
💚 |= ∀x [B(x) ⊃ A] ≡ [∃xB(x) ⊃ A] <br />
💚 |= ∃x [B(x) ⊃ A] ≡ [∀xB(x) ⊃ A] <br />
💚 |= ∀x [A ∧ B(x)] ≡ [A ∧∀xB(x)] <br />
💚 |= ∃x [A ∧ B(x)] ≡ [A ∧∃xB(x)] <br />
💚 |= ∀x [A ∨ B(x)] ≡ [A ∨∀xB(x)] <br />
💚 |= ∃x [A ∨ B(x)] ≡ [A ∨∃xB(x)]

### 38) Zákony komutace kvantifikátorů:
💚 |= ∀x∀yA(x,y) ≡∀y∀xA(x,y) <br />
💚 |= ∃x∃yA(x,y) ≡∃y∃xA(x,y) <br />
💚 |= ∃x∀yA(x,y) ⊃∀y∃xA(x,y)

### 39) Mezi vlastnosti binární relace R na množině A patří:
💚 Reflexivita: ∀x R(x,x) <br />
💚 Symetrie: ∀x∀y R(x,y) ⊃ R(y,x) <br />
💚 Reflexivita: ∀x ¬R(x,x) <br />
💚 Asymetrie ∀x∀y R(x,y)⊃¬R(y,x)

### 40) Mezi vlastnosti binární relace R na množině A patří:
💚 ⊨ ∀x[B(x) ⊃ A] ≡ [∃xB(x) ⊃ A] <br />
💚 ⊨ ∀xA(x) ⊃ A(y) <br />
💚 ⊨ ∃x[A(x) ∨ B(x)] ≡ [∃xA(x) ∨ ∃xB(x)]

[Link / skok úplně nahoru](#)
<br />
[Link / skok rovnou k otázkám](#otázky-vysvětlení-k-individuálním-odpovědím-v-závorce-špatné-odpovědi-mohou-chybět-ale-nejdůležitější-jsou-stejně-odpovědi-správné-)