console.clear();
//Kintamuju inicijavimas

/*
    1.
    Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis
    a. Po kiekvieno ju inicijavimo, isvesti i console
*/
const sk1 = 1;
console.log(sk1);

const sk2 = 2;
console.log(sk2);

const sk3 = 3;
console.log(sk2);

/*
    2.
    Sukurti 3 kintamuosius su teksto tipo reiksmemis
    a. Po kiekvieno ju inicijavimo, isvesti i console
*/

const metuLaikas = 'ziema';
console.log(metuLaikas);

const darzove = 'bulve';
console.log(darzove);

const spalva = 'zalia';
console.log(spalva);

/*
    3.
    Sukurti 3 saraso tipo kintamuosius su penkiomis
    skaiciu tipo reiksmemis
    a. Po kiekvieno ju inicijuavim isvesti i console 
*/

const a = [10, 8, 6, 4, 2];
console.log(a);
const b = [1, 3, 5, 7, 9];
console.log(b);
const c = [11, 13, 15, 17, 19];
console.log(c);

/*
    4.
    Sukurti 3 saraso tipo kintamuosius su penkiomis
    teksto tipo reiksmemis
    a. Po kiekvieno ju inicijuavimo, isvesti i console
*/

const tekstas1 = ['desimt', 'astuoni', 'sesi', 'keturi', 'du'];
console.log(tekstas1);
const tekstas2 = ['vienas', 'trys', 'penki', 'septyni', 'devyni'];
console.log(tekstas2);
const tekstas3 = ['vienuolika', 'trylika', 'penkiolika', 'septyniolika', 'deviniolika'];
console.log(tekstas3);

//Veiksmai su kintamaisiais
/*
    1.
    Susumuoti visus skaiciaus tipo kintamuosius
    a. Rezultata isvesti i console
*/ 

const skSuma = sk1 + sk2 + sk3;
console.log(skSuma);

/*
    2.
    Sujungti visus teksto tipo kintamuosius taip,
    jog tarp ju butu sudarytas tarpas
    a. Rezultata isvesti i konsole
*/

const tekstasSuma = metuLaikas + ' ' + darzove + ' ' + spalva;
console.log(tekstasSuma);

/*
    3.
    Apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai,
    pagal pateikta logika
    a. 1-2+3-4+5
    b. rezultata isvesti i console
*/


/*
    4. 
    Sujungti sarasu vertes, kuriu tipas yra tekstasi,
    nuo saraso galo iki pradzios taip, jog tarp ju butu
    kablelis ir tarpas
*/

//Kintamuju palyginimas

/*
    Lyginant, jei rezultatas tenkina palyginimo salyga, tai i console
    isvesti zodi "Pomidoras", o jei salyga nera tenkinama, isvesti sakini
    "Bandykite kita karta".
    1.
    Tarpusavyje palyginti skaiciaus tipo kintamuosius
*/

// a. kuris didesnis
if(sk1 > sk2){
    console.log('Pomidoras');
}else{
    console.log('Bandykite kita karta');
}

// b. kuris mazesnis
if(sk1 < sk2){
    console.log('Pomidoras');
}else{
    console.log('Bandykite kita karta');
}

// c. ar jie lygus
if(sk1 === sk2){
    console.log('Pomidoras');
}else{
    console.log('Bandykite kita karta');
}

// d. ar jie nelygus
if(sk1 != sk2){
console.log('Pomidoras');
}else{
    console.log('Bandykite kita karta');
}

// e. kuris didesnis arba lygus
if(sk1 >= sk2){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }

// f. kuris mazesnis arba lygus
if(sk1 <= sk2){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }
/*
    2.
    Isvesti teksto tipo kintamuju ilgius
*/
console.log(metuLaikas.length);
console.log(darzove.length);
console.log(spalva.length);

/*
    3.
    Tarpusavyje palyginti teksto tipo kntamuju ilgius:
    a. kuris didesnis
*/
if(darzove.length > spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }
// b. kuris mazesnis
if(darzove.length < spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }
// c. ar jie lygus
if(darzove.length === spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }    
// d. ar jie nelygus
if(darzove.length != spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }
// e. kuris didesnis arba lygus
if(darzove.length >= spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }
// f. kuris mazesnis arba lygus
if(darzove.length <= spalva.length){
    console.log('Pomidoras');
    }else{
        console.log('Bandykite kita karta');
    }