---
sidebar_position: 1
title: Algoritmy
---

## Selection sort (Třídění s výběrem)

### Úvaha

Pozice nejmenšího prvku bude na prvním indexu, největší prvek bude na posledním indexu

### Princip

1. Vybereme nejmenší prvek a zaměníme jej s prvním prvkem pole <br />
2. Tohle se opakuje n-1 krát, vybere se další nejmenší prvek a zamění se na další pozici od začátku, která nebyla setřízená(druhá, třetí, čtvrtá..)

### Průměrná složitost

$n^2$


## Bubblesort (Bublinové třídění)

### Úvaha

Porovnání případně výměna mezi sousedy

### Princip

Postupně porovnání sousedů a případně záměna jejich pozic. <br />
Při každém průchodu se jeden prvek setřídí a prochází se průchodem o jeden prvek miň <br />
Největší prvek je pak zetřízen na konci pole

### Průměrná složitost

$n^2$


## Shakersort (Třídění s přetřásáním)

### Úvaha

Vylepšená verze bubblesortu

### Princip

Obdobný jak u bubblesortu, jediná změna, je že se pole prochází z obou směrů, jak zprava tak doleva.

### Průměrná složitost

$n^2$


## Insertion Sort(třídění s vkládáním)

### Úvaha

Rozdělení pole na dvě části, jíž setřízené a nesetřízené, každý prvek postupně vkládán pro setřízení do setřízeného pole.

### Princip:

1. První prvek bude setřízené pole <br />
2. Vezme se druhý prvek a v setřízeném poli se najde větší prvek, za tu pozici se zapíše druhý prvek a větší prvek a ostatní za ním se posunou o pozici 1 doprava. <br />
Takhle se to děje stále dokud není nesetřízené pole prázdné.

### Průměrná složitost

 $n^2$


## Shellsort


## Mergesort

### Úvaha

Třídí pole pomocí dělení do dvou polovin a třídí každou z nich rekurzivně. Poté  spojuje tyto setřízené pole do jednoho.

### Princip:

Pole se rozdělí na dvě poloviny, tohle se děje rekurzivně dokud není pole jedno prvkové. <br />
Poté se dvě pole vždy spojí jednoho seřazeného, porovnávájí se hodnoty prvků a menší je zapsáno, pokud už v jednom poli prvky nejsou, přesunou se  všechny ostatní zbývajícího pole

### Průměrná složitost

$n*log(n)$


## Quicksort

### Úvaha

Dělí pole rekurzivně na dvě skupiny, podle porovnání podle pivota

### Princip

Rozdělí rekurzivně pole na dvě pole, jedno s menšími čísly a jedny s většími čísly než pivot <br />
Až budou pole jednoprvkové, tak se spojí. Oproti quicksortu, setřízení už je při dělení.

### Průměrná složitost

$n*log(n)$


## Topological sort


## Johnson-Trotterův algoritmus

### Úvaha

Jeden z nejefektivnějších algoritmů na generaci permutací

### Princip

Todo…

### Průměrná složitost

$n!$


## Euklidův algoritmus

### Úvaha

Je založen na opakovaném aplikování vztahu gcd(m, n) = gcd(n, m % n), používá se pro hledání největšího dělitele

### Princip

Dokud zbytek $m \% n$ není roven 0 <br />
Takže při $gcd(m,0)$ je m největší dělitel


## Eratosthenovo síto

### Úvaha

Používá se pro rozklad čísla na násobky prvočísel

### Princip

Bereme čísla 2 do daného čísla <br />
Pokud je dané číslo dělitelné tímto číslem, tak vydělíme dané číslo nálezeným prvočíslem a zařádime prvočíslo do násobků


## Problém obchodního cestujícího (Traveling Salesman problém)

### Problém

Nalezení nejkratší cestu daný městy, návštěvou každého města pouze jednou než se vrátí na počáteční město, kde začál.

### Postup

Vytvoří všechny možné permutace a vypočítá vzdálenost každé cesty a najde nejmenší.

### Brute force složitost

$O(n!)$


## Problém barvení grafu


## Problém batohu (knapsack problém)

### Problém

Hledání maximální cenové hodnoty v batohu o dané kapacitě. Každý předmět má svoji váhu a cenu.

### Postup

Vytvoří se kombinace každých předmětů a spočítá se maximální možná cena pro nejlepší kombinaci.

### Brute force složitost

$O(2^n)$


## Assignment problém

### Problém

Je daný počet n lidí a n zaměstnání. Jeden člověk má jedno zaměstnání. Hledají se nejmenší náklady. Člověk má různé náklady na různé zaměstnání.

### Princip

Vytvoří se permutace všech zaměstnání <br />
Pozice čísel je pořadí lidí, čísla jsou zaměstnání <br />
Najde se s nejmenšími náklady

### Průměrná složitost

$n!$


## Problém nejbližší dvojice bodů (Closest pair)

### Problém

Nalezení dvou nejbližších bodů z množiny, problém výpočetní geometrie

### Postup

Spočítá se vzdálenost mezi každým bodem

### Průměrná složitost

$n^2$


## Konvexní obal množiny bodů (Convex hull)

### Problém

Úkol je najít konvexní obal množiny bodů v prostoru, problém výpočetní geometrie

### Postup

1. Setřídíme body podle x-ové souřadnice, označme body b1, . . . , bn.
2. Vložíme do horní a dolní obálky bod b1: H = D = (b1).
3. Pro každý další bod b = b2, . . . , bn:
4. Přepočítáme horní obálku:
5. Dokud |H| ≥ 2, H = (. . . , hk−1, hk) a úhel hk−1hkb je orientovaný doleva:
6. Odebereme poslední bod hk z obálky H.
7. Přidáme bod b do obálky H.
8. Symetricky přepočteme dolní obálku (s orientací doprava).
9. Výsledný obal je tvořen body v obálkách H a D.

### Průměrná složitost

$O(n*log(n))$

### Brute force složitost

$O(n^3)$

## Průchod grafem do hloubky 

### Úvaha

Procházení do nejhlubší úrovně stromu

### Postup

Procházení pomoci stack


## Průchod grafem do šířky

### Úvaha

Procházení nodů ve stromu postupně po úrovních stromu

### Postup

Procházení pomoci queue


## Lineární (sekvenční) vyhledávání

### Úvaha

Postupné procházení prvků

### Postup

Procházení postupně pomocí jedné smyčky


## Vyhledávání podřetezce(String matching)


## Binární vyhledávání 

### Úvaha

Pomocí setřízeného pole, hledání pomocí půlení pole

### Princip

Hledáme-li číslo 5, tak v poli pokusíme vzít prostřední hodnotu zda-li je 5, pokud ne, tak jestli postřední číslo je menší, tak hledáme ve středu v polovině za ním atd. nebo naopak když je větší tak v polovině za ním.


## Interpolační vyhledávání

### Úvaha

Vylepšená verze binárního vyhledávání

### Princip

Místo půlení, hledá místo, kde by číslo mohlo být, když je na pozici větší číslo než hledané, tak se hledá vlevo, pokud větší tak vpravo na pozicích.

### Průměrná časová složitost

$log2(log2(n))$


## Fake coin problém

### Problém

Mezi několika mincemi je jedna falešná. Pomocí váhy můžeme porovnávat dvě kupy mincí. Lze přehazovat mince. Váha ukáže, která kupa je těžší, ale ne o kolik. Falešná mince je lehčí než pravá.

### Princip

Rekurzivně používání vztahů <br />
$W(n) = W\dfrac{n}{2}) + 1; n > 1$ <br />
$W(1) = 0$ <br />
Pokud máme lichý počet mincí, uděláme dvě kupy a jednu necháme bokem, pokud se kupy rovnají váhou, tak odložená mince je falešná, pokud nějaká váha je lehčí, tak postupuje na tuhle kupu stejným postupem


## Russian peasant

### Úvaha

Součin dvou kladných čísel pomocí rozkladu

### Princip

Rekurzivně nebo iterativně se používají vztahy <br />
Používá se $n*m = \dfrac{n}{2} * 2m$ pro sudé čísla <br />
Používá se $n*m = \dfrac{n-1}{2} * 2m + m$ pro liché čísla <br />
Dokud není $n = 1$ <br />
Název po ruských dělnicích, kteří toto používali <br />
Rychlé kvůli bitovým operacím


## Josephus problém

### Problém

$n$ počet mužů se postaví do kruhu, každý druhý umře (soused ho zabije) až do posledního, který přežije.

### Princip

Hledá se pozice, kde přežiješ <br />
Dá se spočítat pomocí opakování dvou vzorců <br />
K je počet mužů, J je jozefův algoritmus <br />
$J(2k) = 2J(k) - 1$ pouze pro sudé <br />
$J(2k+1) = 2J(k) + 1$ pouze pro liché <br />
$J(1) = 1$

### Druhý princip:

Acyklický 1bitový posun doleva binárního čísla vstupu n


## Strassovo maticové násobení

### Úvaha

O jedno násobení méně, na úkor více sčítání

### Princip

Počet násobení je dán rekurzivním vztahem: <br />
$M(n) = 7M(\dfrac{n}{2}) pro n>1$ <br />
$M(1) = 1$

### Průměrná složitost:

$n^{log2(7)}$ lepší než hrubá síla