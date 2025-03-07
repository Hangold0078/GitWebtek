/*Jeg opretter objekter med de værdier jeg gerne vil have i min albums-tabel fra Json-filen(vi skulle vælge 4)*/
function Album(artistName, albumName, productionYear, rating) {
    this.artist = artistName;
    this.album = albumName;
    this.year = productionYear;
    this.rating = rating;
  }
  
  /*Her finder jeg HTML-elementet med ID'et "parentId" og opretter et div element med albummets oplysninger*/
  function addDivWithAlbum(album, parentid) {
    let parentElement = document.getElementById(parentid);
    let elementToAdd =
      "<div>" +
      album.artist +
      ": " +
      album.album +
      " | From " +
      album.year +
      " with " +
      album.rating +
      " in rating "
      "</div>";
    parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
  }
  /*Jeg henter albums-data fra json-filen "albums.json", hvorefter "then" venter til dataen er hentet og derefter logger jeg de oprindelige json-data og derefter logger jeg albums, så jeg kan se selve indholdet af objektet og være sikker på at jeg har hentet det rigtige data fra filen*/
  fetchContent("albums.json").then((albums) => {
    console.log("Original Data: ");
    console.log(albums);
  
    /*Her opretter jeg en tom liste som vi kalder albumObjects, hvor vi gemmer vores album-objekter i. Jeg logger den derefter i konsollen, for at vise den tomme liste*/
    let albumObjects = [];
  
    console.log("AlbumObjects will be placed here: ");
    console.log(albumObjects);

  /*Her laves der et for-loop, som looper igennem alle albums fra json-arrayet. Vi starter her med albummet på indeks 0, altså det første og stopper loopet ved albums.length, altså når vi har kørt alle de antal albums igennem som der er. i++ betyder at vi for hver gang øger i med 1, altså at vi går videre til det næste album. Efter dette oprettes der et nyt albums-object med const, hvor vi definere hvilke egenskaber vi gerne vil have med i objektet f.eks. artistName. Til sidst pusher vi det nye albums-objekt ind i vores array, som blev kaldt albumObjects. Og dette vil kører indtil vi har indsat alle albums i arrayet.*/

    for (let i = 0; i < albums.length; i++) {
      const album = new Album(
        albums[i].artistName,
        albums[i].albumName,
        albums[i].productionYear,
        albums[i].rating,
      );
      albumObjects.push(album);
    }
  /*Nu logger vi de nye album-objekter, og sikrer os i konsollen at de er oprettet korrekt. Nu kan vi se at vi har fået konverteret vores data fra json-filen til javascript-objekter yay*/
    console.log("Object Data: ");
    console.log(albumObjects);
  
    /*Til sidst kører vi et forEach-loop, hvor vi for hvert album-objekt får tilføjet en div med album-data til vores HTML-side under det HTML-element der har ID'et "content". Her kalder vi parametren for album, og dette gør at vi får adgang til at trække oplysningerne ud fra alle elementerne i arrayet*/
    albumObjects.forEach(function (album) {
      addDivWithAlbum(album, "content");
    });
  });