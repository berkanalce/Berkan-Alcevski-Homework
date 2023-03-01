var library =[
    {author: "Bill Gates",title:"The Road Ahead",libraryID:1245},
    {author: "Steve Jobs",title:"Walter Isaacson",libraryID:4264},
    {author: "Suzanne Collins",title:"Mockingjay",libraryID:3245},
    {author: "David Shannon",title:"David Goes to School",libraryID:1245},
    {author: "Allison Varnes ",title:"Property of the Rebel Librarian",libraryID:3245},
]
function titlee(arr){
    return arr.sort((a,b)=>(a.title > b.title)? 1 :-1);
}
console.log(titlee(library));

const pisatel = library.map(library => library.author);
console.log(pisatel);
function id (arr,libraryID){
    return arr.filter(library => library.libraryID ===libraryID);
}
console.log(id(library,3245));
console.log(id(library,1245));

    class Cars{
         constructor(brand,year,horsepower){
            this.brand=brand;
            this.year=year;
            this.horsepower=horsepower;
         }
         age(){
            const years = new Date().getFullYear();
            return years - this.year;
         }
         mozeDaVozi(godini){
            if(godini > 25){
                return true;        
            }else {
                return this.horsepower <=105;
            }
         }
    }
    const users = [
        {imeprezime:"Berkan Alce", age: 25},
        {imeprezime:"Nuredin Elmas", age: 21},
        {imeprezime:"Ivan Petkovski", age: 55},
        {imeprezime: "Nikola Nikolov", age: 35}
      ];
const kola1 = new Cars("bmw", 2015, 150);
const kola2= new Cars("audi", 2010, 80);
const kola3 = new Cars("vw", 2009, 90);
const kola4 = new Cars("skoda", 2020, 180);
console.log(kola3.age());