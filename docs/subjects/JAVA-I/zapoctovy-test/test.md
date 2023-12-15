---
title: Zápočtový test
sidebar_position: 1
---

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

### Vyberte pravdivé tvrzeni o metode hashCode (nutné pro správnou funkci hashovaci tabulky).

- **a) Metoda hashCode je volána, pokud je potreba pro daný objekt ziskat hash-kod - паї. u ukládáni do hashovaci tabulky.**
- b) Pro dva objekty (stejného typu), pro které equals vraci true musi metoda hashCode vracet ruznou hodnotu a pro ostatní by mēla(aby hashováni probíhalo korektne) vracet stejnou hodnotu.
- c) Metoda hashCode je nekorektné definována ve tride Object a je ji nutno vẽdy prekrýt.
- d) Metoda hashCode je korektnē definována ve tridē Object a proto ji nikdy nemusime prekrývat.
- e) Pro dva objekty (stejného typu), pro které equals vraci true by mèla metoda hashCode vracet stejnou hodnotu a pro ostatni musi vracet různou hodnotu.

### Vyberte pravdivé tvrzeni (uvedené tridy by mēly být v baliku java.io.):

- a) Potomci tridy `InputCharStream` jsou urceny pro cteni ze streamu na úrovni znaku.
- b) Pro ctenia zápis slouzi do souborù slouzi trida `File`. Má metody `fread`, `fwrite`, `fseek` a dalsi.
- c) Potomci tridy `OutputBinaryStream` jsou urreny pro teni ze stream na irovni byti.
- d) Potomci tridy `Ouputstream` jsou urẽeny pro etenize streami na úrovni byti.
- e) Potomci tridy `Writer` jsou ureny pro zápis do streamu na úrovni znakủ.

### Vyberte pravdivou signaturu metody main, která slouzi jako spoustēci:

- a) `public static int main(String []args) {...`
- b) `public final void main(String []Jargs) {...`
- c) `public intmain(String []args) {...`
- **d) `public static void main(String []args) {...`**
- e) `public static void main(String []argv, int argn) {...`

### Vyberte tvrzeni, které **není** pravdivé.

- a) Rozsah numerických promenných(napr. int), nezávisi na verzi virtuálniho stroje Java.
- b) Pro beh java aplikace je vyzadován virtuálni stro) instalovany v systému.
- c) Jazyk Java je staticky typovaný jazyk a program se musi zkompilovat.
- d) Java podporuje primo vlákna a poskytuje synchronizacni mechanismy mezi vlákny.
- **e) Program v Jave pri prenosu na jinou platformu vyzaduje rekompilaci.**

### Vyberte pravdivé tvrzeni:

- a) Pretizené metody jsou jiné implementace zdedenych metod v potomkovi. Realizuji polymorfismus.
- b) Petizené metody isou oznateny pomoci anotace @overload.
- c) Pretizené metody se lisi poctem nebo typem vstupnich argument a nebo návratowým typem.
- d) Petizené metody se lisi puze poctem vstupnich argument.
- **e) Pietizené metody se lisi poctem nebo typem vstupnich argumentu.**

### Vyberte pravdivé turzeni o konstrukci `for (<Type> <els: <var>) <statement>;` :

- a) Tato konstrukce je spravna vady, kdyzje promenna sel> typu lterable nebo podtypu.
- **b) Tato konstrukce umoznuje, aby promenná ‹var> byla typu Collection nebo pole.**
- c) Tato konstrukce vyzaduje, aby jako «Type> byl pouzit typ Comparable.
- d) Tato konstrukce vyzaduje, aby promenná ‹var> byla typu Iterator nebo pole.
- e) Tato konstrukce vyzaduje, aby promenná <el› byla vedy primitivniho typu, protoze pracuje s poli.

### Necht Osoba je trida. Vyberte pravdivé tvrzeni:

- **a) Správné voláni instanăni(nestatické) metody této tridy müze být `joe.skoc()`.**
- b) Správné voláni instaneni(nestatické) metody této tridy müze být `skoc(10)->joe`.
- c) Správné voláni instanăni(nestatické) metody této trídy müze být `joe-›skoc(10)`.
- d) Správné voláni instancni(nestatické) metody této tridy müze být `Osoba.skoc(10)`.
- e) Správné voláni instancni(nestatické) metody této tridy muze být `joe.skoc(int length)`.

### Vyberte pravdivé tvrzeni:

- **a) Klicové slovo final u deklarace instanăni metody zpüsobi, ze ji potomci nemohou prekrýt.**
- b) Tridni promenná je platná pouze pokud existuje objekt dané tridy.
- c) Kazdá trida obsahuje vedy bezparametrický destruktor, takze ho nemusime definovat. Destruktor volá programátor pri mazáni objektu z pamēti.
- d) Aby „garbage collector" zjistil, ze daný objekt neni vyuziván, tak u nēho programátor musi nastavit priznak dispose.
- e) Globálni promenné jsou promenné, které nejsou definovany uvniti zádné tridy nebo bloku a jsou viditelné odkudkoli.

### Vyberte pravdivé tvrzeni:

- a) Tridy se deklaruji pomoci def class, objekty se vytvari pomoci `new<Název tridy›(sparametry>)` a odstrañuji se z pamēti pomoci delete <objekt-id>.
- b) Tridy se deklaruji pomoci def class, objekty se vytvari pomoci `new‹Název trídy>(<parametry>)`.
- c) Tridy se deklaruji pomoci klicového slova class, objekty se vytvári pomoci `new‹Název tridy>(<parametry>)` a odstrañuji se z pamèti pomoci delete sobjekt-id>.
- d) Tridy se deklaruji pomoci konstrukce virtual class, objekty se vytvári pomoci `new<Název tridy›(‹parametry>)`.
- **e) Tridy se deklaruji pomoci klicového slova class, objekty se vytvari pomoci `new<Název tridy>(sparametry>)`.**

### Vyberte pravdivé tvrzeni:

- a) Pro spusteni vlakna prekrime metodu run v potomkovi tridy Thread a pak voláme metodu start.
- b) Pro spusteni vlákna prekrývame metodu run v potomkovi tridy Thread a pak ji voláme.
- c) Kvoláni metody notify na urcity objekt je nutné vlastnit monitor k vláknu, které bylo uspáno pomoci wait.
- d) Pro spusteni vlákna prekryváme metodu start v potomkovi tridy Thread a pak ji voláme.
- e) Vlákno pri vstupováni do sekce synchronized výhradne ziská monitor zde uvedeného objektu nebo vyhodi vyjimky, pokud monitor vlastni jiné vlákno.

### Vyberte pravdivé tvrzeni:

- **a) Překryté metody jsou označeny pomocí anotace @Override.**
- b) Překryté metody se liší pouze počtem vstupních argumentů.
- c) Překryté metody je vhodné označit klíčovým slovem virtual.
- d) Překryté metody se liší počtem nebo typem vstupních argumentů.
- e) Překryté metody se liší počtem nebo typem vstupních argumentů a nebo návratovým typem.

### Vyberte pravdivé tvrzení:

- a) Objekty implementující rozhraní Map realizují zobrazení `Keys x Values -> N`.
- b) Zřetězené seznamy(LinkedList) nedovolují přístup pomocí indexů, protože by zpomalovaly virtuální stroj.
- **c) Rozhraní `Collection` je rozšiřováno rozhraním `Set` a `List`.**
- d) Rozhraní `Collection` umožňuje přistupovat k datům nejen pomocí indexů, ale i pomocí klíčů.
- e) Z rozhraní `Collection` dědí (rozšiřuje ho) rozhraní `LinkedList`.

### Nechť Letadlo je třída. Vyberte pravdivé tvrzení:

- a) Správné konstrukce objetku a přiřazení do proměnné je ... `let := new Letadlo(10)`.
- b) Správné konstrukce objetku a přiřazení do proměnné je ... `let = Letadlo()`.
- c) Správné konstrukce objetku a přiřazení do proměnné je ... `let = new Letadlo`.
- d) Správné konstrukce objetku a přiřazení do proměnné je ... `let = new Letadlo(int rychlost)`.
- **e) Správné konstrukce objetku a přiřazení do proměnné je ... `let = new Letadlo(10)`.**

### Vyberte pravdivé tvrzení:

- a) Pro přímý přístup do paměti alokované pro objekty se používají pointery (ukazatele).
- b) Garbage kolektor uvolní paměť vždy, když se objekt nepoužívá(má nastaven příznak disposable).
- c) Při přiřazení hodnoty mezi objektovými proměnnými dochází ke kopírování objektů.
- d) Operátor new se používá pro dynamickou konstrukci objektu jinak se objekty konstruují bez new.
- **e) Při přiřazení hodnot mezi objektovými proměnnými se předává pouze reference.**

### Vyberte pravdivé tvrzení:

- a) Nekontrolované výjimky nelze ošetřit a dědí ze třídy `RuntimeException`.
- b) Kontrolované výjimky jsou vyhazovány v kódu pomocí throws a dědí přímo ze třídy `Exception`.
- **c) Sekce `finally` se provede vždy, když se opouští blok `try`.**
- d) Všechny výjimky, vyjma `Error`, lze ošetřit pomocí konstrukce `try catch`.
- e) V sekci `finally` se ošetřují všechny výjimky.

### Vyberte pravdivé tvrzení:

- a) Třída(a její potomci) InputStream slouží pro práci s bytovými výstupními streamy.
- **b) Třída, jejíž objekty umožňují serializaci, musí implementovat rozhraní Serializable.**
- c) Třídy pro práci se streamy se skládají pomocí návrhového vzoru Kompozit.
- d) Instanční proměnné, u kterých nechceme serializovat jejich hodnoty, označíme override.
- e) Třída Reader (a její potomci) slouží pro načítání dat na úrovni bytů.

### Vyberte pravdivé tvrzení o ternárním operátoru (?:):

- **a) Ternární operátor musí mít jako první parametr výraz typu boolean.**
- b) Výsledkem ternárního operátoru jsou dvě hodnoty.
- c) Ternární operátor se používá k bitovým manipulacím s pamětí.
- d) Ternární operátor je možno přepsat pomocí konstrukce if else, protože to je semanticky zcela stejná konstrukce.
- e) Všechny parametry ternárního operátoru musí být numerického typu.

### Vyberte pravdivé tvrzení:

- **a) Z konstruktoru můžeme volat jiný konstruktor třídy, ze které dědí, pomocí super(<hodnoty parametrů>). Toto volání se nesmí
  vyskytovat za jinými příkazy v konstruktoru.**
- b) Datový typ char má délku 8 bitů.
- c) Blok final se používá před bloky catch.
- d) Pokud neuvedeme modifikátor viditelnosti (např. public) tak je vše private.
- e) Pro porovnání dvou řetězců se používá `==`, protože se chovají jako hodnoty primitivního typu.

### Vyberte variantu, kde jednotlivá slova jsou používaná a funkční klíčová slova jazyka Java:

- a) abstract, virtual, private, while, float, int
- b) break, class, new, unsigned, switch, boolean
- c) final, instanceof, super, void, interface, throwable
- **d) class, extends, final, synchronized, int, throws**
- e) interface, char, boolean, else, Integer, for

### Vyberte pravdivé tvrzení:

- a) Nejsou kladeny žádná omezení na počet veřejných nevnořených tříd ve zdrojových souborech, pouze nesmí mít stejný název.
- b) V jednom zdrojovém Java souboru může být definována právě jedna třída a vždy se jmenuje stejně jako tento soubor (bez koncovky).
- c) V jednom souboru může být definována nejvýše jedna veřejná, vnořená třída.
- **d) Zdrojové kódy třídy jsou v souboru s koncovkou .java. Přeložený java bytecode je v souborech s koncovkou .class.**
- e) V jednom souboru může být definována nejvýše jedna neveřejná, nevnořená třída.

### Nechť Letadlo je třída. Vyberte pravdivé tvrzení:

- a) Správné konstrukce objetku a přiřazení do proměnné je ... let = Letadlo().
- b) Správné konstrukce objetku a přiřazení do proměnné je ... let := new Letadlo(10).
- c) Správné konstrukce objetku a přiřazení do proměnné je ... let = new Letadlo(int rychlost).
- **d) Správné konstrukce objetku a přiřazení do proměnné je ... let = new Letadlo().**
- e) Správné konstrukce objetku a přiřazení do proměnné je ... let = new Letadlo.

### Vyberte pravdivé tvrzení o tom, kdy fakticky skončí spuštěné vlákno?

- a) Když se naň zavolá metoda interrupt.
- b) Když se naň zavolá metoda stop.
- **c) Když se ukončí metoda run vlákna.**
- d) Když se naň zavolá metoda join.
- e) Když se ukončí metoda main.

### Vyberte pravdivé tvrzení(ošetření výjimky je myšleno, že se zavolá specifický kód, při vyvolání výjimky. Vyhozená výjimka je v tomto kódu dostupná):

- a) Sekce catch může ošetřit výjimky pouze stejného typu jako je typ uveden v této sekci.
- b) Sekce catch nmůže ošetřit výjimky stejného typu a nadttypu jako je typ uveden v této sekci.
- **c) Sekce catch může ošetřit výjimky stejného typu a podtypu jako je typ uveden v této sekci.**
- d) Sekce catch může ošetřit výjimky stejného typu a nadtypu jako je typ uveden v této sekci. Ostatní výjimky jsou ignorovány a
  program běží korektně dál.
- e) Sekce catch může ošetřit výjimky stejného typu jako je typ uveden v této sekci a ostatní výjimky jsou ošetřeny v sekci finally.