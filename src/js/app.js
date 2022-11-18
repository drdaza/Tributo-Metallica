/* function app() {
    eventKirk();
    eventLars();
    eventJames();
    eventRobert();
}
app();
function eventKirk(){
    let ImageClick = document.getElementById("firts-image-galery");
    ImageClick.addEventListener("click", printBioKirk)
}

function eventLars(){
    let ImageClick = document.getElementById("second-image-galery");
    ImageClick.addEventListener("click", printBioLars)
}

function eventJames(){
    let ImageClick = document.getElementById("third-image-galery");
    ImageClick.addEventListener("click", printBioJames)
}

function eventRobert(){
    let ImageClick = document.getElementById("fourth-image-galery");
    ImageClick.addEventListener("click", printBioRobert)
}

function printBioKirk(){
    let BiographyGroup = document.getElementById("biography-group");
        BiographyGroup.innerHTML = `
        <h1>Kirk Lee Hammett</h1>
        <p>Kirk Lee Hammett (born November 18, 1962) is an American musician who has been the lead guitarist and a contributing songwriter for heavy metal band Metallica since 1983. Before joining Metallica, he formed and named the band Exodus. In 2003, Hammett was ranked 11th on Rolling Stone's list of The 100 Greatest Guitarists of All Time. In 2009, Hammett was ranked number 15 in Joel McIver's book The 100 Greatest Metal Guitarists.</p>`;
}
function printBioLars(){
    let BiographyGroup = document.getElementById("biography-group");
        BiographyGroup.innerHTML = `
        <h1>Lars Ulrich</h1>
        <p>Lars Ulrich born 26 December 1963) is a Danish musician best known as the drummer and co-founder of American heavy metal band Metallica. The son and grandson respectively of tennis players Torben and Einer Ulrich, he played tennis in his youth and moved to Los Angeles at age 16 to train professionally. However, rather than playing tennis, Ulrich began playing drums. After publishing an advertisement in The Recycler, Ulrich met James Hetfield and formed Metallica. Along with Hetfield, Ulrich has songwriting credits on almost all of the band's songs, and the two of them are the only remaining original members of the band.</p>`;
}
function printBioJames(){
    let BiographyGroup = document.getElementById("biography-group");
        BiographyGroup.innerHTML = `
        <h1>James Hetfield</h1>
        <p>James Alan Hetfield (born August 3, 1963) is an American musician. He is the lead vocalist, rhythm guitarist, co-founder and a main songwriter of heavy metal band Metallica. He is mainly known for his intricate rhythm playing, but occasionally performs lead guitar duties and solos, both live and in the studio. Hetfield co-founded Metallica in October 1981 after answering an advertisement by drummer Lars Ulrich in the Los Angeles newspaper The Recycler. Metallica has won nine Grammy Awards and released ten studio albums, three live albums, four extended plays and 24 singles.</p>`;
}
function printBioRobert(){
    let BiographyGroup = document.getElementById("biography-group");
        BiographyGroup.innerHTML = `
        <h1>Robert Trujillo</h1>
        <p>Roberto Agustín Miguel Santiago Samuel Trujillo Veracruz (born October 23, 1964) is an American musician, best known as the bassist for heavy metal band Metallica since 2003. He first rose to prominence as the bassist of crossover thrash band Suicidal Tendencies from 1989 to 1995, while also collaborating with Suicidal Tendencies frontman Mike Muir for funk metal supergroup Infectious Grooves.</p>`;
} */
/* How print text in a div when clicked an object
* i create an array with the sentences that the 
program will print.
* i accessed at the container of objects (for id)
* i accessed at the childs of the container
* (when i click any of childs i targeted it its id )
* i create and assing an array of the sentences
* i check the id of the child
* i accessed at the space from i will print the info
* print the info  
*/
function testEvents(){
    let list = document.getElementById("galery-members");
    list.addEventListener("click", (e)=> {
        let idElement=e.target.id;
        console.log(idElement);
        if(e.target.classList!="wrapper"){
            let sentences = createSentences();
            console.log(sentences);
            checkId(idElement,sentences);
    }
    })
   
    
}
function checkId(param, array){
    console.log(param);
    console.log(array);
    let view= array[param-1];
    printResult(view);
    
}
function printResult(param2){
    let acces= document.getElementById("biography-group");
    acces.innerHTML = param2;
}
function createSentences(){
    const sentences = [ 
        `
        <h1>Kirk Lee Hammett</h1>
        <p>Kirk Lee Hammett (born November 18, 1962) is an American musician who has been the lead guitarist and a contributing songwriter for heavy metal band Metallica since 1983. Before joining Metallica, he formed and named the band Exodus. In 2003, Hammett was ranked 11th on Rolling Stone's list of The 100 Greatest Guitarists of All Time. In 2009, Hammett was ranked number 15 in Joel McIver's book The 100 Greatest Metal Guitarists.</p>`, 
        ` 
        <h1>Lars Ulrich</h1>
        <p>Lars Ulrich born 26 December 1963) is a Danish musician best known as the drummer and co-founder of American heavy metal band Metallica. The son and grandson respectively of tennis players Torben and Einer Ulrich, he played tennis in his youth and moved to Los Angeles at age 16 to train professionally. However, rather than playing tennis, Ulrich began playing drums. After publishing an advertisement in The Recycler, Ulrich met James Hetfield and formed Metallica. Along with Hetfield, Ulrich has songwriting credits on almost all of the band's songs, and the two of them are the only remaining original members of the band.</p>`, 
        `
        <h1>James Hetfield</h1>
        <p>James Alan Hetfield (born August 3, 1963) is an American musician. He is the lead vocalist, rhythm guitarist, co-founder and a main songwriter of heavy metal band Metallica. He is mainly known for his intricate rhythm playing, but occasionally performs lead guitar duties and solos, both live and in the studio. Hetfield co-founded Metallica in October 1981 after answering an advertisement by drummer Lars Ulrich in the Los Angeles newspaper The Recycler. Metallica has won nine Grammy Awards and released ten studio albums, three live albums, four extended plays and 24 singles.</p>`, 
        `
        <h1>Robert Trujillo</h1>
        <p>Roberto Agustín Miguel Santiago Samuel Trujillo Veracruz (born October 23, 1964) is an American musician, best known as the bassist for heavy metal band Metallica since 2003. He first rose to prominence as the bassist of crossover thrash band Suicidal Tendencies from 1989 to 1995, while also collaborating with Suicidal Tendencies frontman Mike Muir for funk metal supergroup Infectious Grooves.</p>`];
    return sentences;
}
testEvents();