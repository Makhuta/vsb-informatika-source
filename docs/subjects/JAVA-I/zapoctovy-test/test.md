---
title: Zápočtový test
---

- a)
- b)
- c)
- d)
- e)

### Vyberte pravdivé tvrzení:

- a) Rozhraní byla v Javě definována, aby bylo možno obejít absenci násobné dědičnosti.
- b) Třída, která se přihlásí k implementaci rozhraní nemusí implementovat všechny metody v tomto rozhraní. Tyto metody
  mají automaticky prázdné tělo a jsou označeny jako @override.
- c) Třída může implementovat více než jedno rozhraní, tato rozhraní nesmí ovšem obsahovat metody ze stejnou signaturou.
- d) Metody deklarované v rozhraní jsou buď veřejné (public) nebo chráněné (protected).
- **e) Rozhraní definuje signatury metod, jejich návratové hodnoty a vyhazované výjimky, nikoliv jejich implementaci.(v
  Javě 1.7)**

### Vyberte pravdivé tvrzení:

- a) Třída streamu, která se používá pro serializaci, musí implementovat rozhraní `Serializable`.
- **b) Třída `Reader` (a její potomci) slouží pro načítání dat na úrovni znaků.**
- c) Třída(a její potomci) `InputStream` slouží pro práci s bytovými výstupními streamy.
- d) Instanční proměnné, u kterých nechceme serializovat jejich hodnoty, označíme override.
- e) Třídy pro práci se streamy se skládají pomocí návrhového vzoru Kompozit.

### Vyberte pravdivé tvrzení o ternárním operátoru (?:):

- a) Ternární operátor musí mít jako druhý parametr výraz typu `boolean`.
- b) Všechny parametry ternárního operátoru musí být numerického typu.
- c) Výsledkem ternárního operátoru jsou dvě hodnoty.
- **d) Ternární operátor je možno přepsat pomocí konstrukce `if else`, ale není to zcela ta stejná konstrukce.**
- e) Ternární operátor se používá k bitovým manipulacím s pamětí.

### Vyberte pravdivé tvrzení:

- a) Blok `final` se používá před bloky `catch`.
- b) Z konstruktoru můžeme volat jiný konstruktor třídy, ze které dědí, pomocí `this(<hodnoty parametrů>)`. Toto volání
  se nesmí vyskytovat za jinými příkazy v konstruktoru.
- **c) Pro porovnání dvou řetězců se nepoužívá `==`, protože to nejsou hodnoty primitivního typu.**
- d) Pokud neuvedeme modifikátor viditelnosti (např. `public`) tak je vše `private`.
- e) Datový typ `char` má délku 8 bitů.

### Vyberte variantu, kde jednotlivá slova jsou používaná a funkční klíčová slova jazyka Java:

- **a) final, finally, import, void, int, throw**
- b) abstract, const, private, while, float, int
- c) break, class, new, delete, switch, boolean
- d) interface, char, boolean, else, String, for
- e) class, extends, final, print, int, throws

### Vyberte pravdivé tvrzení o konstrukci `for(<Type> i: <var>) <statement>;` :

- a) Toto konstrukce vyžaduje, aby proměnná `<var>` byla typu `Iterator` nebo pole.
- b) Toto konstrukce je správná vždy, když je proměnná `<var>` typu `Iterable` nebo podtypu.
- c) Tato konstrukce vyžaduje, aby proměnná i byla vždy primitivního typu, protože pracuje s poli.
- d) Toto konstrukce vyžaduje, aby jako `<Type>` byl použit typ `Comparable`.
- e) Toto konstrukce vyžaduje, aby jako `<Type>` byl použit typ `Collection` nebo pole.

### Nechť Osoba je třída. Vyberte pravdivé tvrzení:

- a) Správné volání instanční(nestatické) metody této třídy může být `skoc(10)->joe`.
- **b) Správné volání instanční(nestatické) metody této třídy může být  `joe.skoc()`.**
- c) Správné volání instanční(nestatické) metody této třídy může být  `joe.skoc(int length)`.
- d) Správné volání instanční(nestatické) metody této třídy může být  `joe->skoc(10)`.
- e) Správné volání instanční(nestatické) metody této třídy může být `Osoba.skoc(10)`.

### Proměnná kterých typů v Javě zabírá 16 bitů?

- a) char, short
- b) short
- c) žádná odpověď není správná - velikost pamětí, kterou proměnná daného typu zabírá, závisí operačním systému (32 nebo
  64 bitový)
- d) char, string
- e) int, float

### Vyberte správnou signaturu metody Object.equals:

- a) `public int equals(Object val1, Object val2)`
- b) `public boolean equals(Object val1, Object val2)`
- **c) `public boolean equals(Object val)`**
- d) `public Boolean equals(Object val)`
- e) `static int equals(Object val)`

### Vyberte pravdivé tvrzení:

- a) Volání metody interrupt vždy ukončí vlákno, ve kterém je volána.
- b) Pro ukončení vláken se většinou používá volání metody stop.
- c) Ukončené vlákno je opět možno znovu spustit.
- d) Volání metody interrupt vždy ukončí vlákno, na jehož vlastněný monitor je aplikováno.
- **e) Volání metody interrupt nezpůsobí bezprostřední ukončení vlákna na nějž je voláno. Vlákno se ukončí po opuštění
  metody run.**

### Vyberte pravdivé tvrzení:

- a) Všechny výjimky, vyjma `Error`, lze ošetřit pomocí konstrukce try catch
- b) V sekci `finally` se ošetřují všechny výjimky.
- c) Kontrolované výjimky jsou vyhazovány v kódu pomocí throws a dědí přímo ze třídy Exception.
- d) Sekce `finally` se provede právě tehdy, když se opouští blok `try` a nebyla vyhozena výjimka.
- **e) Nekontrolované výjimky se nemusí ošetřit a dědí ze třídy `RuntimeException`.**