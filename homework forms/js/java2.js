let name1=1;
let name2=0;
let name3="1"
let name4="0"
let name5="ten"
let name6=true
let name7=false
let name8=null
let name9=undefined
let name10=""
let name11=''

name1=String(name1);
name2=String(name2);
name3=Number(name3);
name4=Number(name4);
name5=Number(name5);
name6=String(name6);
name7=String(name7);
name8=String(name8);
name9=String(name9);
name10=Boolean(name10);
name11=Boolean(name11);

let myday=5;
let myfullname=14;
let myyear=79;
let myyear1=1+9+9+8;
let myhigher=myday>myfullname;
let mydivide=myyear % myyear1;
let iam="i am the";
if (myhigher === true && mydivide < 3) {
    console.log(iam + "light");
  } else {
    console.log(iam + " darkness ");
  }