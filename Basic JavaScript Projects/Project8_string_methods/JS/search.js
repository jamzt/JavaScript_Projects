function Search() {
    var Sentence = "Be the change you want to see in the world.";
    var Word = Sentence.search("change");
    document.getElementById("Search").innerHTML = Word;
}