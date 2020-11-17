
export function resolveAuthError(code) {
    switch(code){
        case 'auth/wrong-password':
            return 'Ungültiges Passwort'
        case 'auth/user-not-found':
            return 'Benutzer nicht gefunden'

        default:
            break
    }
            
}

//hem login hemde sign kismi icin hatalarin tamamini burada belirtelim
// sign sayfasinda 2 tane gorev var
// topic select te modal kismina bir buton ekleyelim, yeni topic eklemek ve silmek icin
// ayrica yine topic modal a bir search bar ekleyelim.
// bi search te konusma bolumune eklenebilir.
// en alta navigation ekleyelim, loginden sonra o sekilde
// bos mesajlari gondermesin-- bunu ekledim
// gruplari sifreli yapabilir miyiz ?
// mesajlari baska kullanicidan geldiginde saga sola atma?
// keyboard avoid eklenecek
// style verilecek
// input silme ve focus eklenecek
// kanallar touchable olacak
// android icin de kurulumlar yapilacak.