# Alkalmazások fejlesztése 2. beadandó

## 0. Leírás

Az alkalmazás egy család pénzügyeit tudja kezelni. A bevételek és kiadások összességét lehet kezelni az alkalmazásban kategóriák szerint minden családtag számára.

## 1. Követelményanalízis

### 1.1 Követelmények

- funkcionális:
  - lehet regisztrálni és bejelentkezni, különböző szerepkörönként
  - lehet tagokat hozzáadni/törölni/szerkeszteni a családhoz
  - lehet termékenként/családtagonként listázni
  - lehet a kiadásokat/keresetet hozzáadni/törölni/szerkeszteni
  - bevételeket es kiadásokat lehet kategorizalni pl. Bevétel: fizetés, zsebpénz. Kiadás: rezsi, élelmiszer
- nem funkcionális:
  - legyen felhasználóbarát, egyszerűen kezelhető
  - jelszóval védett felhasználói felület

### 1.2 Szerepkörök

- családfő/admin:
  - látja az összes felhasználó bevételeit és kiadásait
  - tudja módosítani az összes felhasználó bevételeit és kiadásait
  - adhat hozzá új tpusokat, üzeneteket
- családtag/felhasználó:
  - látja a saját bevételeit és kiadásait
  - módosíthatja a saját bevételeit és kiadásait
  - a többi felhasználó bevételeit és kiadásait nem láthatja és nem módosíthatja
  - adhat hozzá új típusokat, üzeneteket

### 1.3 Szakfogalmak

- fizetés: rendszeres munkahelyen megkeresett pénzösszeg
- zsebpénz: rendszeres családon belül cserélt pénzösszeg
- ajándék: családon belülről vagy családon kívülről származó nem rendszeres bevétel vagy kiadás
- kiadás/kereset: negatív vagy pozitív pénzmozgás egy adott felhasználónál
- családfő: a család azon tagja, aki a pénzügyeket kezeli és hozzáférése van minden felhasználó tanzakcióihoz
- családtagok: a család azon tagjai, akik nem családfő szerepkörben vannak, tehát nem férnek hozzá más felhasználók tanzakcióihoz

## 2. Fejlesztői környezet és használt technológiák

- NetBeans használata
- h2 adat-báziskezelő rendszer
- Java Spring Boot technológia használata
- MVC modell
- REST API
- authorizált végpontokkal

## 3. Adatbázis-terv

### 3.1 Adatbázis-táblák

- Transaction
- User
- Type
- Message

### 3.2 UML-diagram

![UML Diagram](https://github.com/abnagy/alkfejl/blob/master/uml.png)

## 4. Tervezés

### 4.1 Oldaltérkép

1. Bejelentkezés
2. Bejelentkezett adminisztrátor funkciói
  - Összes tranzakció megtekintése
  - Tranzakciók módosítása
  - Tranzakciók törlése
  - Tranzakció felvétele
3. Bejelentkezett felhasználó funkciói
  - Saját tranzakciók megtekintése
  - Saját tranzakciók módosítása
  - Saját tranzakciók törlése
  - Saját tranzakciók felvétele
(Minden felhasználó és adminisztrátor az új tranzakciók felvételekor fel tud venni új típusokat, üzeneteket.)

### 4.2 Végpontok

- **GET/** _Főoldal_
- **POST/register** _Regisztráció_
- **POST/login** _Bejelentkezés_
- **_TRANZAKCIÓK_**
- **GET/transactions** _Tranzakciók listája_
- **GET/transactions/id** _Tranzakciók ID alapján történő listázása_
- **POST/transactions** _Új tranzakció felvétele_
- **PUT/transactions/id** _Meglévő tranzakció ID alapján történő szerkesztése_
  - Megkeresi az adott ID-t a tranzakciók listájában és ha megtalálta akkor elmenti a rá vonatkozó változtatásokat, ha pedig nem talál olyan ID-t, akkor visszatér NotFound-dal.
- **DELETE/transactions/id** _Meglévő tranzakció ID alapján történő törlése_
- **GET/transactions/id/messages** _Tranzakciókhoz tartozó üzenetek listája ID alapján_
- **POST/transactions/id/messages** _Tranzakciókhoz tartozó üzenet hozzáadása ID alapján_
- **GET/transactions/id/types** _Tranzakciókhoz tartozó típusok listája ID alapján_
- **POST/transactions/id/types** _Tranzakciókhoz tartozó típus hozzáadása ID alapján_
- **PUT/transactions/id/types** _Tranzakciókhoz tartozó típusszerkesztése ID alapján_
- **_TÍPUSOK_**
- **GET/types** _Típusok listája_
- **GET/types/id** _Típusok listája ID alapján_
- **POST/types** _Típusok hozzáadása_
- **PUT/types/id** _Típusok szerkesztése ID alapján_
- **DELETE/types/id** _Típusok törlése ID alapján_
- **_ÜZENETEK_**
- **GET/messages** _Üzenetek listája_
- **GET/messages/id** _Üzenetek listája ID alapján_
- **POST/messages** _Üzenetek hozzáadása_
- **PUT/messages/id** _Üzenetek szerkesztése ID alapján_
- **DELETE/messages/id** _Üzenetek törlése ID alapján_

### 4.3 Felhasználói modell

- Adminisztrátor
![admin](https://github.com/abnagy/alkfejl/blob/master/admin.png)
- Felhasználó
![user](https://github.com/abnagy/alkfejl/blob/master/user.png)

### 4.4 Egy funkció leírása

- Admin módosítás:
  - A módosítás gombra kattintva a front enden megjelennek a módosítható mezők, azokat kitöltve a feltételeknek megfelelően, majd a mentés gombra kattintva az adatokat elküldi a rest API felé, aki elmenti a változásokat.
  
### 4.5 Szolgáltatások

1. Bejelentkezés
2. Bejelentkezett adminisztrátor funkciói
  - Összes tranzakció megtekintése: A tranzakciók listájának megtekintése
  - Tranzakciók módosítása: A tranzakciók listájából egy elem módosítása a jobb oldali kis módosítás ikon használatával
  - Tranzakciók törlése: A tranzakciók listájából egy elem törlése a jobb oldali kis törlés ikon használatával
  - Tranzakció felvétele: Új tranzakció hozzáadása a listához új elem felvételével
3. Bejelentkezett felhasználó funkciói
  - Saját tranzakciók megtekintése: Saját tranzakciók listájának megtekintése
  - Saját tranzakciók módosítása: Saját tranzakciók listájából egy elem módosítása a jobb oldali kis módosítás ikon használatával
  - Saját tranzakciók törlése: A saját tranzakciók listájából egy elem törlése a jobb oldali kis törlés ikon használatával
  - Saját tranzakciók felvétele: Új tranzakció hozzáadása a listához új elem felvételével
(Minden felhasználó és adminisztrátor az új tranzakciók felvételekor fel tud venni új típusokat, üzeneteket.)
