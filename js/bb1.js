let z,n,n1,n2,n3,n4,n5,n6;
let GPA;


let loder = document.getElementById("lod");

window.addEventListener("load",function(){
loder.style.display = "none";
});

//main


function fun(){
  let con = document.getElementById("main").value;
  let con1 = document.getElementById("mname").value;
 
  document.getElementById("name").innerHTML = `NAME:${con1}`;
  document.getElementById("name1").innerHTML = `NAME:${con1}`;
  document.getElementById("name2").innerHTML = `NAME:${con1}`;
  
     if(con1 == ""){
      document.getElementById("pls").innerHTML = "! please enter your name";
      return false;
     }
      
  switch (con) {
    case "elec":
      document.getElementById("one").style.display = "flex";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
      case "comp":
      document.getElementById("two").style.display = "flex";
      document.getElementById("one").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
      case "it":
        document.getElementById("three").style.display = "flex";
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "none";
      break;
    default:
      document.getElementById("err").innerHTML = "errr";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
  }
  

}
function back(){
  document.getElementById("one").style.display = "none";
  
}
function exit(){
  document.getElementById("dis").style.display = "none";
  document.getElementById("dis1").style.display = "none";
  document.getElementById("dis2").style.display = "none";
  document.getElementById("wellcome").style.display = "block";
  document.getElementById("wellcome1").style.display = "block";
  document.getElementById("wellcome2").style.display = "block";
}
function back1(){
  document.getElementById("two").style.display = "none";
}

function back2(){
  document.getElementById("three").style.display = "none";
}

//elec

function my(){
    let kab = document.getElementById("demo21").value;
    let kab1= document.getElementById("demo22").value;
    let kab2 = document.getElementById("demo23").value;
    let kab3 = document.getElementById("demo24").value;
    let kab4 = document.getElementById("demo25").value;
    let kab5 = document.getElementById("demo26").value;
    let kab6 = document.getElementById("demo27").value;
    
            document.getElementById("dis").style.display = "block";
            document.getElementById("wellcome").style.display = "none";
            // document.getElementById("dis1").style.display = "block";

         
  
    const j = 4,k = 3,l=2;


  //Applied Mathematics-II

let c = kab ;
switch (true) {
       case kab>= 90 :
        document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  A+ `;
        document.getElementById("crid").innerHTML = z=j*4;
   
       
        break;
        case kab >= 85  :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  A `;
        document.getElementById("crid").innerHTML =z= j*4;
        
        
        break;
        case kab >= 80  :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `   A-`;
        document.getElementById("crid").innerHTML = z = j*3.75;
        break;
        case c >= 75  :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
            document.getElementById("demo19").innerHTML = `   B+`;
            document.getElementById("crid").innerHTML = z=j*3.5;
        break;
        case kab >= 70 :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `   B`;
        document.getElementById("crid").innerHTML =z= j*3.0;
        break;
        case kab >= 65 :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  B-`;
        document.getElementById("crid").innerHTML = z=j*2.75;
        break;
        case kab >= 60  :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  C+`;
        document.getElementById("crid").innerHTML = z=j*2.5;
        break;
        case kab >= 50 :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
         document.getElementById("demo19").innerHTML = `  C`;
         document.getElementById("crid").innerHTML = z=j*2.0;
        break;
        case kab >= 45 :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  C-`;
        document.getElementById("crid").innerHTML = z=j*1.75;
        break;
        case c >= 40  :
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `   D`;///////////
        document.getElementById("crid").innerHTML = z=j*1.0;
        break;
        case c >=  1:
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
        document.getElementById("demo19").innerHTML = `  F`;
        document.getElementById("crid").innerHTML = j*0.0;
        break;
        case c =="":
        
        document.getElementById("demo19").innerHTML = "Enter value";
        break;
    
        default:
          document.getElementById("demo1").innerHTML = ` ${kab}  `;
            document.getElementById("demo19").innerHTML = `   NO GRADE`;
          document.getElementById("crid").innerHTML = "no";
            break;

 
}

//Engineering Mechanics(Statics)

switch (true) {
  case kab1 >=90:
    document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   A+`;
    document.getElementById("cridd").innerHTML = n=k*4;
    break;
    case kab1 >=85:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
      document.getElementById("demo20").innerHTML = `   A`;
      document.getElementById("cridd").innerHTML = n=k*4;
      break;
      case kab1 >=80:
        document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   A-`;
    document.getElementById("cridd").innerHTML = n=k*3.75;
    break;
    case kab1 >=75:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   B+`;
    document.getElementById("cridd").innerHTML = n=k*3.5;
    break;
    case kab1 >=70:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   B`;
    document.getElementById("cridd").innerHTML = n=k*3;
    break;
    case kab1 >=65:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `  B-`;
    document.getElementById("cridd").innerHTML =n= k*2.75;
    break;
    case kab1 >=60:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   C+`;
    document.getElementById("cridd").innerHTML =n= k*2.5;
    break;
    case kab1 >=50:
      document.getElementById("demo2").innerHTML = ` ${kab1}  `;
      document.getElementById("demo20").innerHTML = `  C`;
      document.getElementById("cridd").innerHTML =n= k*2.0;
      break;
      case kab1 >=45:
        document.getElementById("demo2").innerHTML = ` ${kab1}  `;
        document.getElementById("demo20").innerHTML = `   C-`;
        document.getElementById("cridd").innerHTML = n=k*1.75;
        break;
        case kab1 >=40:
          document.getElementById("demo2").innerHTML = ` ${kab1}  `;
          document.getElementById("demo20").innerHTML = `  D`;
          document.getElementById("cridd").innerHTML = n=k*1.0;
          break;
          case kab1 >=1:
            document.getElementById("demo2").innerHTML = ` ${kab1}  `;
            document.getElementById("demo20").innerHTML = `   F`;
            document.getElementById("cridd").innerHTML =n= k*0.0;
            break;
    case kab1 == "":
        
        document.getElementById("demo20").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo2").innerHTML = ` ${kab1}  `;
    document.getElementById("demo20").innerHTML = `   NO GRADE`;
    document.getElementById("cridd").innerHTML = "no";
    break;
}

//Introduction to Economics

switch (true) {
  case kab2 >=90:
    document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   A+`;
    document.getElementById("crid1").innerHTML = n1=k*4;
    break;
    case kab2 >=85:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
      document.getElementById("demo30").innerHTML = `   A`;
      document.getElementById("crid1").innerHTML = n1=k*4;
      break;
      case kab2 >=80:
        document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   A-`;
    document.getElementById("crid1").innerHTML = n1=k*3.75;
    break;
    case kab2 >=75:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   B+`;
    document.getElementById("crid1").innerHTML = n1=k*3.5;
    break;
    case kab2 >=70:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   B`;
    document.getElementById("crid1").innerHTML = n1=k*3;
    break;
    case kab2 >=65:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `  B-`;
    document.getElementById("crid1").innerHTML =n1= k*2.75;
    break;
    case kab2 >=60:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   C+`;
    document.getElementById("crid1").innerHTML =n1= k*2.5;
    break;
    case kab2 >=50:
      document.getElementById("demo3").innerHTML = ` ${kab2}  `;
      document.getElementById("demo30").innerHTML = `  C`;
      document.getElementById("crid1").innerHTML =n1= k*2.0;
      break;
      case kab2 >=45:
        document.getElementById("demo3").innerHTML = ` ${kab2}  `;
        document.getElementById("demo30").innerHTML = `   C-`;
        document.getElementById("crid1").innerHTML = n1=k*1.75;
        break;
        case kab2 >=40:
          document.getElementById("demo3").innerHTML = ` ${kab2}  `;
          document.getElementById("demo30").innerHTML = `  D`;
          document.getElementById("crid1").innerHTML = n1=k*1.0;
          break;
          case kab2 >=1:
            document.getElementById("demo3").innerHTML = ` ${kab2}  `;
            document.getElementById("demo30").innerHTML = `   F`;
            document.getElementById("crid1").innerHTML =n1= k*0.0;
            break;
    case kab2 == "":
        
        document.getElementById("demo30").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo3").innerHTML = ` ${kab2}  `;
    document.getElementById("demo30").innerHTML = `   NO GRADE`;
    document.getElementById("crid1").innerHTML = "no";
    break;
}

//Introduction to Engineering Profession

switch (true) {
  case kab3 >=90:
    document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   A+`;
    document.getElementById("crid2").innerHTML = n2=k*4;
    break;
    case kab3 >=85:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
      document.getElementById("demo40").innerHTML = `   A`;
      document.getElementById("crid2").innerHTML = n2=k*4;
      break;
      case kab3 >=80:
        document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   A-`;
    document.getElementById("crid2").innerHTML = n2=k*3.75;
    break;
    case kab3 >=75:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   B+`;
    document.getElementById("crid2").innerHTML = n2=k*3.5;
    break;
    case kab3 >=70:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   B`;
    document.getElementById("crid2").innerHTML = n2=k*3;
    break;
    case kab3 >=65:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `  B-`;
    document.getElementById("crid2").innerHTML =n2= k*2.75;
    break;
    case kab3 >=60:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   C+`;
    document.getElementById("crid2").innerHTML =n2= k*2.5;
    break;
    case kab3 >=50:
      document.getElementById("demo4").innerHTML = ` ${kab3}  `;
      document.getElementById("demo40").innerHTML = `  C`;
      document.getElementById("crid2").innerHTML =n2= k*2.0;
      break;
      case kab3 >=45:
        document.getElementById("demo4").innerHTML = ` ${kab3}  `;
        document.getElementById("demo40").innerHTML = `   C-`;
        document.getElementById("crid2").innerHTML = n2=k*1.75;
        break;
        case kab3 >=40:
          document.getElementById("demo4").innerHTML = ` ${kab3}  `;
          document.getElementById("demo40").innerHTML = `  D`;
          document.getElementById("crid2").innerHTML = n2=k*1.0;
          break;
          case kab3 >=1:
            document.getElementById("demo4").innerHTML = ` ${kab3}  `;
            document.getElementById("demo40").innerHTML = `   F`;
            document.getElementById("crid2").innerHTML =n2= k*0.0;
            break;
    case kab3 == "":
        
        document.getElementById("demo40").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo4").innerHTML = ` ${kab3}  `;
    document.getElementById("demo40").innerHTML = `   NO GRADE`;
    document.getElementById("crid2").innerHTML = "no";
    break;
}


//Engineering Drawing

switch (true) {
  case kab4 >=90:
    document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   A+`;
    document.getElementById("crid3").innerHTML = n3=k*4;
    break;
    case kab4 >=85:
      document.getElementById("demo5").innerHTML = ` ${kab4}  `;
      document.getElementById("demo50").innerHTML = `   A`;
      document.getElementById("crid3").innerHTML = n3=k*4;
      break;
      case kab4 >=80:
        document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   A-`;
    document.getElementById("crid3").innerHTML = n3=k*3.75;
    break;
    case kab4 >=75:
      document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   B+`;
    document.getElementById("crid3").innerHTML = n3=k*3.5;
    break;
    case kab4 >=70:
      document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   B`;
    document.getElementById("crid3").innerHTML = n3=k*3;
    break;
    case kab4 >=65:
      document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `  B-`;
    document.getElementById("crid3").innerHTML =n3= k*2.75;
    break;
    case kab4 >=60:
      document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   C+`;
    document.getElementById("crid3").innerHTML =n3= k*2.5;
    break;
    case kab4 >=50:
      document.getElementById("demo5").innerHTML = ` ${kab3}  `;
      document.getElementById("demo50").innerHTML = `  C`;
      document.getElementById("crid3").innerHTML =n3= k*2.0;
      break;
      case kab4 >=45:
        document.getElementById("demo5").innerHTML = ` ${kab4}  `;
        document.getElementById("demo50").innerHTML = `   C-`;
        document.getElementById("crid3").innerHTML = n3=k*1.75;
        break;
        case kab4 >=40:
          document.getElementById("demo5").innerHTML = ` ${kab4}  `;
          document.getElementById("demo50").innerHTML = `  D`;
          document.getElementById("crid3").innerHTML = n3=k*1.0;
          break;
          case kab4 >=1:
            document.getElementById("demo5").innerHTML = ` ${kab4}  `;
            document.getElementById("demo50").innerHTML = `   F`;
            document.getElementById("crid3").innerHTML =n3= k*0.0;
            break;
    case kab4 == "":
        
        document.getElementById("demo50").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo5").innerHTML = ` ${kab4}  `;
    document.getElementById("demo50").innerHTML = `   NO GRADE`;
    document.getElementById("crid3").innerHTML = "no";
    break;
}

// Probability and Random Process

switch (true) {
  case kab5 >=90:
    document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   A+`;
    document.getElementById("crid4").innerHTML = n4=k*4;
    break;
    case kab5 >=85:
      document.getElementById("demo6").innerHTML = ` ${kab4}  `;
      document.getElementById("demo60").innerHTML = `   A`;
      document.getElementById("crid4").innerHTML = n4=k*4;
      break;
      case kab5 >=80:
        document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   A-`;
    document.getElementById("crid4").innerHTML = n4=k*3.75;
    break;
    case kab5 >=75:
      document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   B+`;
    document.getElementById("crid4").innerHTML = n4=k*3.5;
    break;
    case kab5 >=70:
      document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   B`;
    document.getElementById("crid4").innerHTML = n4=k*3;
    break;
    case kab5 >=65:
      document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `  B-`;
    document.getElementById("crid4").innerHTML =n4= k*2.75;
    break;
    case kab5 >=60:
      document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   C+`;
    document.getElementById("crid4").innerHTML =n4= k*2.5;
    break;
    case kab5 >=50:
      document.getElementById("demo6").innerHTML = ` ${kab5}  `;
      document.getElementById("demo60").innerHTML = `  C`;
      document.getElementById("crid4").innerHTML =n4= k*2.0;
      break;
      case kab5 >=45:
        document.getElementById("demo6").innerHTML = ` ${kab5}  `;
        document.getElementById("demo60").innerHTML = `   C-`;
        document.getElementById("crid4").innerHTML = n4=k*1.75;
        break;
        case kab5 >=40:
          document.getElementById("demo6").innerHTML = ` ${kab5}  `;
          document.getElementById("demo60").innerHTML = `  D`;
          document.getElementById("crid4").innerHTML = n4=k*1.0;
          break;
          case kab5 >=1:
            document.getElementById("demo6").innerHTML = ` ${kab5}  `;
            document.getElementById("demo60").innerHTML = `   F`;
            document.getElementById("crid4").innerHTML =n4= k*0.0;
            break;
    case kab5 == "":
        
        document.getElementById("demo60").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo6").innerHTML = ` ${kab5}  `;
    document.getElementById("demo60").innerHTML = `   NO GRADE`;
    document.getElementById("crid4").innerHTML = "no";
    break;
}

//Global Trends


switch (true) {
  case kab6 >=90:
    document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   A+`;
    document.getElementById("crid5").innerHTML = n5=l*4;
    break;
    case kab6 >=85:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
      document.getElementById("demo70").innerHTML = `   A`;
      document.getElementById("crid5").innerHTML = n5=l*4;
      break;
      case kab6 >=80:
        document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   A-`;
    document.getElementById("crid5").innerHTML = n5=l*3.75;
    break;
    case kab6 >=75:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   B+`;
    document.getElementById("crid5").innerHTML = n5=l*3.5;
    break;
    case kab6 >=70:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   B`;
    document.getElementById("crid5").innerHTML = n5=l*3;
    break;
    case kab6 >=65:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `  B-`;
    document.getElementById("crid5").innerHTML =n5= l*2.75;
    break;
    case kab6 >=60:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   C+`;
    document.getElementById("crid5").innerHTML =n5= l*2.5;
    break;
    case kab6 >=50:
      document.getElementById("demo7").innerHTML = ` ${kab6}  `;
      document.getElementById("demo70").innerHTML = `  C`;
      document.getElementById("crid5").innerHTML =n5= l*2.0;
      break;
      case kab6 >=45:
        document.getElementById("demo7").innerHTML = ` ${kab6}  `;
        document.getElementById("demo70").innerHTML = `   C-`;
        document.getElementById("crid5").innerHTML = n5=l*1.75;
        break;
        case kab6 >=40:
          document.getElementById("demo7").innerHTML = ` ${kab6}  `;
          document.getElementById("demo70").innerHTML = `  D`;
          document.getElementById("crid5").innerHTML = n5=l*1.0;
          break;
          case kab6 >=1:
            document.getElementById("demo7").innerHTML = ` ${kab6}  `;
            document.getElementById("demo70").innerHTML = `   F`;
            document.getElementById("crid5").innerHTML =n5= l*0.0;
            break;
    case kab6 == "":
        
        document.getElementById("demo70").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("demo7").innerHTML = ` ${kab6}  `;
    document.getElementById("demo70").innerHTML = `   NO GRADE`;
    document.getElementById("crid5").innerHTML = "no";
    break;
}
//TOTAL GPA
     document.getElementById("sum").innerHTML = z + n+n1+n2+n3+n4+n5;
     GPA = (z + n+n1+n2+n3+n4+n5) / 21;
     document.getElementById("sum1").innerHTML = GPA.toFixed(3);
     if (GPA >= 4 ) {
      document.getElementById("sum1").style.background = "green";
    }
    else if(GPA >= 3.5 ){
      document.getElementById("sum1").style.background = "lightgreen";
    }

    else if(GPA >= 3.0 ){
      document.getElementById("sum1").style.background = "yellow";
    }
    else if(GPA >= 2.5 ){
      document.getElementById("sum1").style.background = "orange";
    }
    else {
      document.getElementById("sum1").style.background = "red";
    }
    const arr=[kab, kab1,kab2,kab3,kab4,kab5,kab6]
    arr.sort(function(a,b){
      return b - a  ;
    });
    hig = arr[0];
    
    document.getElementById("max").innerHTML =hig; 
    arr.sort(function(a,b){
      return a - b  ;
    });
    low = arr[0];
    document.getElementById("max1").innerHTML =low;


}

//soft

function myk(){
  let ka = document.getElementById("demo31").value;//
  let ka1= document.getElementById("demo32").value;
  let ka2 = document.getElementById("demo33").value;
  let ka4 = document.getElementById("demo35").value;
  let ka5 = document.getElementById("demo36").value;
  let ka6 = document.getElementById("demo37").value;
  let ka7 = document.getElementById("demo38").value;
  // let ka3 = document.getElementById("demo34").value;
  
          // document.getElementById("dis").style.display = "block";
          document.getElementById("dis1").style.display = "block";
          document.getElementById("wellcome1").style.display = "none";

       

  const j = 4,k = 3,l=2;


//Funda

// let c = ka ;
switch (true) {
     case ka>= 90 :
      document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  A+ `;
      document.getElementById("cri").innerHTML = z=j*4;
 
     
      break;
      case ka >= 85  :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  A `;
      document.getElementById("cri").innerHTML =z= j*4;
      
      
      break;
      case ka >= 80  :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `   A-`;
      document.getElementById("cri").innerHTML = z = j*3.75;
      break;
      case ka >= 75  :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
          document.getElementById("dem19").innerHTML = `   B+`;
          document.getElementById("cri").innerHTML = z=j*3.5;
      break;
      case ka >= 70 :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `   B`;
      document.getElementById("cri").innerHTML =z= j*3.0;
      break;
      case ka >= 65 :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  B-`;
      document.getElementById("cri").innerHTML = z=j*2.75;
      break;
      case ka >= 60  :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  C+`;
      document.getElementById("cri").innerHTML = z=j*2.5;
      break;
      case ka >= 50 :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
       document.getElementById("dem19").innerHTML = `  C`;
       document.getElementById("cri").innerHTML = z=j*2.0;
      break;
      case ka >= 45 :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  C-`;
      document.getElementById("cri").innerHTML = z=j*1.75;
      break;
      case ka >= 40  :
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `   D`;///////////
      document.getElementById("cri").innerHTML = z=j*1.0;
      break;
      case ka >=  1:
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
      document.getElementById("dem19").innerHTML = `  F`;
      document.getElementById("cri").innerHTML = j*0.0;
      break;
      case ka =="":
      
      document.getElementById("dem19").innerHTML = "Enter value";
      break;
  
      default:
        document.getElementById("dem1").innerHTML = ` ${ka}  `;
          document.getElementById("dem19").innerHTML = `   NO GRADE`;
          document.getElementById("cri").innerHTML = "no";
          break;


}

//Engineeri sss

switch (true) {
case ka1 >=90:
  document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   A+`;
  document.getElementById("crids").innerHTML = n=k*4;
  break;
  case ka1 >=85:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
    document.getElementById("dem20").innerHTML = `   A`;
    document.getElementById("crids").innerHTML = n=k*4;
    break;
    case ka1 >=80:
      document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   A-`;
  document.getElementById("crids").innerHTML = n=k*3.75;
  break;
  case ka1 >=75:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   B+`;
  document.getElementById("crids").innerHTML = n=k*3.5;
  break;
  case ka1 >=70:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   B`;
  document.getElementById("crids").innerHTML = n=k*3;
  break;
  case ka1 >=65:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `  B-`;
  document.getElementById("crids").innerHTML =n= k*2.75;
  break;
  case ka1 >=60:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   C+`;
  document.getElementById("crids").innerHTML =n= k*2.5;
  break;
  case ka1 >=50:
    document.getElementById("dem2").innerHTML = ` ${ka1}  `;
    document.getElementById("dem20").innerHTML = `  C`;
    document.getElementById("crids").innerHTML =n= k*2.0;
    break;
    case ka1 >=45:
      document.getElementById("dem2").innerHTML = ` ${ka1}  `;
      document.getElementById("dem20").innerHTML = `   C-`;
      document.getElementById("crids").innerHTML = n=k*1.75;
      break;
      case ka1 >=40:
        document.getElementById("dem2").innerHTML = ` ${ka1}  `;
        document.getElementById("dem20").innerHTML = `  D`;
        document.getElementById("crids").innerHTML = n=k*1.0;
        break;
        case ka1 >=1:
          document.getElementById("dem2").innerHTML = ` ${ka1}  `;
          document.getElementById("dem20").innerHTML = `   F`;
          document.getElementById("crids").innerHTML =n= k*0.0;
          break;
  case ka1 == "":
      
      document.getElementById("dem20").innerHTML = "Enter value";
      break;
default:
  document.getElementById("dem2").innerHTML = ` ${ka1}  `;
  document.getElementById("dem20").innerHTML = `   NO GRADE`;
  document.getElementById("crids").innerHTML = "no";
  break;
}

//Introduction to Economics

switch (true) {
case ka2 >=90:
  document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   A+`;
  document.getElementById("cri1").innerHTML = n1=k*4;
  break;
  case ka2 >=85:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
    document.getElementById("dem30").innerHTML = `   A`;
    document.getElementById("cri1").innerHTML = n1=k*4;
    break;
    case ka2 >=80:
      document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   A-`;
  document.getElementById("cri1").innerHTML = n1=k*3.75;
  break;
  case ka2 >=75:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   B+`;
  document.getElementById("cri1").innerHTML = n1=k*3.5;
  break;
  case ka2 >=70:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   B`;
  document.getElementById("cri1").innerHTML = n1=k*3;
  break;
  case ka2 >=65:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `  B-`;
  document.getElementById("cri1").innerHTML =n1= k*2.75;
  break;
  case ka2 >=60:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   C+`;
  document.getElementById("cri1").innerHTML =n1= k*2.5;
  break;
  case ka2 >=50:
    document.getElementById("dem3").innerHTML = ` ${ka2}  `;
    document.getElementById("dem30").innerHTML = `  C`;
    document.getElementById("cri1").innerHTML =n1= k*2.0;
    break;
    case ka2 >=45:
      document.getElementById("dem3").innerHTML = ` ${ka2}  `;
      document.getElementById("dem30").innerHTML = `   C-`;
      document.getElementById("cri1").innerHTML = n1=k*1.75;
      break;
      case ka2 >=40:
        document.getElementById("dem3").innerHTML = ` ${ka2}  `;
        document.getElementById("dem30").innerHTML = `  D`;
        document.getElementById("cri1").innerHTML = n1=k*1.0;
        break;
        case ka2 >=1:
          document.getElementById("dem3").innerHTML = ` ${ka2}  `;
          document.getElementById("dem30").innerHTML = `   F`;
          document.getElementById("cri1").innerHTML =n1= k*0.0;
          break;
  case ka2 == "":
      
      document.getElementById("dem30").innerHTML = "Enter value";
      break;
default:
  document.getElementById("dem3").innerHTML = ` ${ka2}  `;
  document.getElementById("dem30").innerHTML = `   NO GRADE`;
  document.getElementById("cri1").innerHTML = "no";
  break;
}





//Engineering ssss

switch (true) {
case ka4 >=90:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   A+`;
  document.getElementById("cri3").innerHTML = n3=k*4;
  break;
  case ka4 >=85:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   A`;
  document.getElementById("cri3").innerHTML = n3=k*4;
  break;
  case ka4 >=80:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   A-`;
  document.getElementById("cri3").innerHTML = n3=k*3.75;
  break;
  case ka4 >=75:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   B+`;
  document.getElementById("cri3").innerHTML = n3=k*3.5;
  break;
  case ka4 >=70:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   B`;
  document.getElementById("cri3").innerHTML = n3=k*3;
  break;
  case ka4 >=65:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `  B-`;
  document.getElementById("cri3").innerHTML =n3= k*2.75;
  break;
  case ka4 >=60:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   C+`;
  document.getElementById("cri3").innerHTML =n3= k*2.5;
  break;
  case ka4 >=50:
    document.getElementById("dem5").innerHTML = ` ${ka4}  `;
    document.getElementById("dem50").innerHTML = `  C`;
    document.getElementById("cri3").innerHTML =n3= k*2.0;
    break;
    case ka4 >=45:
      document.getElementById("dem5").innerHTML = ` ${ka4}  `;
      document.getElementById("dem50").innerHTML = `   C-`;
      document.getElementById("cri3").innerHTML = n3=k*1.75;
      break;
      case ka4 >=40:
        document.getElementById("dem5").innerHTML = ` ${ka4}  `;
        document.getElementById("dem50").innerHTML = `  D`;
        document.getElementById("cri3").innerHTML = n3=k*1.0;
        break;
        case ka4 >=1:
          document.getElementById("dem5").innerHTML = ` ${ka4}  `;
          document.getElementById("dem50").innerHTML = `   F`;
          document.getElementById("cri3").innerHTML =n3= k*0.0;
          break;
  case ka4 == "":
      
      document.getElementById("dem50").innerHTML = "Enter value";
      break;
default:
  document.getElementById("dem5").innerHTML = ` ${ka4}  `;
  document.getElementById("dem50").innerHTML = `   NO GRADE`;
  document.getElementById("cri3").innerHTML = "no";
  break;
}

// Probability ssss

switch (true) {
case ka5 >=90 && ka5 <=100:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   A+`;
  document.getElementById("cri4").innerHTML = n4=k*4;
  break;
  case ka5 >=85:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   A`;
  document.getElementById("cri4").innerHTML = n4=k*4;
    break;
    case ka5 >=80:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   A-`;
  document.getElementById("cri4").innerHTML = n4=k*3.75;
  break;
  case ka5 >=75:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   B+`;
  document.getElementById("cri4").innerHTML = n4=k*3.5;
  break;
  case ka5 >=70:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   B`;
  document.getElementById("cri4").innerHTML = n4=k*3;
  break;
  case ka5 >=65:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `  B-`;
  document.getElementById("cri4").innerHTML =n4= k*2.75;
  break;
  case ka5 >=60:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   C+`;
  document.getElementById("cri4").innerHTML =n4= k*2.5;
  break;
  case ka5 >=50:
    document.getElementById("dem6").innerHTML = ` ${ka5}  `;
    document.getElementById("dem60").innerHTML = `  C`;
    document.getElementById("cri4").innerHTML =n4= k*2.0;
    break;
    case ka5 >=45:
      document.getElementById("dem6").innerHTML = ` ${ka5}  `;
      document.getElementById("dem60").innerHTML = `   C-`;
      document.getElementById("cri4").innerHTML = n4=k*1.75;
      break;
      case ka5 >=40:
        document.getElementById("dem6").innerHTML = ` ${ka5}  `;
        document.getElementById("dem60").innerHTML = `  D`;
        document.getElementById("cri4").innerHTML = n4=k*1.0;
        break;
        case ka5 >=1:
          document.getElementById("dem6").innerHTML = ` ${ka5}  `;
          document.getElementById("dem60").innerHTML = `   F`;
          document.getElementById("cri4").innerHTML =n4= k*0.0;
          break;
  case ka5 == "":
      
      document.getElementById("dem60").innerHTML = "Enter value";
      break;
default:
  document.getElementById("dem6").innerHTML = ` ${ka5}  `;
  document.getElementById("dem60").innerHTML = `   NO GRADE`;
  document.getElementById("cri4").innerHTML = "no";
  break;
}

//Global Trends


switch (true) {
case ka6 >=90 && ka6<=100:
  document.getElementById("dem7").innerHTML = ` ${ka6}  `;
  document.getElementById("dem70").innerHTML = `   A+`;
  document.getElementById("cri5").innerHTML = n5=l*4;
  break;
  case ka6 >=85:
    document.getElementById("dem7").innerHTML = ` ${ka6}  `;
    document.getElementById("dem70").innerHTML = `   A`;
    document.getElementById("cri5").innerHTML = n5=l*4;
    break;
    case ka6 >=80:
      document.getElementById("dem7").innerHTML = ` ${ka6}  `;
      document.getElementById("dem70").innerHTML = `   A-`;
      document.getElementById("cri5").innerHTML = n5=l*3.75;
      break;
  case ka6 >=75:
    document.getElementById("dem7").innerHTML = ` ${ka6}  `;
    document.getElementById("dem70").innerHTML = `   B+`;
    document.getElementById("cri5").innerHTML = n5=l*3.5;
    break;
  case ka6 >=70:
  document.getElementById("dem7").innerHTML = ` ${ka6}  `;
  document.getElementById("dem70").innerHTML = `   B`;
  document.getElementById("cri5").innerHTML = n5=l*3;
  break;
  case ka6 >=65:
  document.getElementById("dem7").innerHTML = ` ${ka6}  `;
  document.getElementById("dem70").innerHTML = `  B-`;
  document.getElementById("cri5").innerHTML =n5= l*2.75;
  break;
  case ka6 >=60:
  document.getElementById("dem7").innerHTML = ` ${ka6}  `;
  document.getElementById("dem70").innerHTML = `   C+`;
  document.getElementById("cri5").innerHTML =n5= l*2.5;
  break;
  case ka6 >=50:
    document.getElementById("dem7").innerHTML = ` ${ka6}  `;
    document.getElementById("dem70").innerHTML = `  C`;
    document.getElementById("cri5").innerHTML =n5= l*2.0;
    break;
    case ka6 >=45:
      document.getElementById("dem7").innerHTML = ` ${ka6}  `;
      document.getElementById("dem70").innerHTML = `   C-`;
      document.getElementById("cri5").innerHTML = n5=l*1.75;
      break;
      case ka6 >=40:
        document.getElementById("dem7").innerHTML = ` ${ka6}  `;
        document.getElementById("dem70").innerHTML = `  D`;
        document.getElementById("cri5").innerHTML = n5=l*1.0;
        break;
        case ka6 >=1:
          document.getElementById("dem7").innerHTML = ` ${ka6}  `;
          document.getElementById("dem70").innerHTML = `   F`;
          document.getElementById("cri5").innerHTML =n5= l*0.0;
          break;
  case ka6 == "":
      
      document.getElementById("dem70").innerHTML = "Enter value";
      break;
default:
  document.getElementById("dem7").innerHTML = ` ${ka6}  `;
  document.getElementById("dem70").innerHTML = `   NO GRADE`;
  document.getElementById("cri5").innerHTML = "no";
  break;
}

//inclusive

switch (true) {
  case ka7 >=90 && ka7<=100:
    document.getElementById("dem8").innerHTML = ` ${ka7}  `;
    document.getElementById("dem80").innerHTML = `   A+`;
    document.getElementById("cri6").innerHTML = n6=l*4.0;
    break;
    case ka7 >=85:
      document.getElementById("dem8").innerHTML = ` ${ka7}  `;
      document.getElementById("dem80").innerHTML = `   A`;
      document.getElementById("cri6").innerHTML = n6=l*4.0;
      break;
      case ka7 >=80:
        document.getElementById("dem8").innerHTML = ` ${ka7}  `;
        document.getElementById("dem80").innerHTML = `   A-`;
        document.getElementById("cri6").innerHTML = n6=l*3.75;
        break;
    case ka7 >=75:
      document.getElementById("dem8").innerHTML = ` ${ka7}  `;
      document.getElementById("dem80").innerHTML = `   B+`;
      document.getElementById("cri6").innerHTML = n6=l*3.5;
      break;
    case ka7 >=70:
    document.getElementById("dem8").innerHTML = ` ${ka7}  `;
    document.getElementById("dem80").innerHTML = `   B`;
    document.getElementById("cri6").innerHTML = n6=l*3.0;
    break;
    case ka7 >=65:
    document.getElementById("dem8").innerHTML = ` ${ka7}  `;
    document.getElementById("dem80").innerHTML = `  B-`;
    document.getElementById("cri6").innerHTML =n6= l*2.75;
    break;
    case ka7 >=60:
    document.getElementById("dem8").innerHTML = ` ${ka7}  `;
    document.getElementById("dem80").innerHTML = `   C+`;
    document.getElementById("cri6").innerHTML =n6= l*2.5;
    break;
    case ka7 >=50:
      document.getElementById("dem8").innerHTML = ` ${ka7}  `;
      document.getElementById("dem80").innerHTML = `  C`;
      document.getElementById("cri6").innerHTML =n6= l*2.0;
      break;
      case ka7 >=45:
        document.getElementById("dem8").innerHTML = ` ${ka7}  `;
        document.getElementById("dem80").innerHTML = `   C-`;
        document.getElementById("cri6").innerHTML = n6=l*1.75;
        break;
        case ka7 >=40:
          document.getElementById("dem8").innerHTML = ` ${ka7}  `;
          document.getElementById("dem80").innerHTML = `  D`;
          document.getElementById("cri6").innerHTML = n6=l*1.0;
          break;
          case ka7 >=1:
            document.getElementById("dem8").innerHTML = ` ${ka7}  `;
            document.getElementById("dem80").innerHTML = `   F`;
            document.getElementById("cri6").innerHTML =n6= l*0.0;
            break;
    case ka7 == "":
        
        document.getElementById("dem80").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("dem8").innerHTML = ` ${ka7}  `;
    document.getElementById("dem80").innerHTML = `   NO GRADE`;
    document.getElementById("cri6").innerHTML = "no";
    break;
  }

//TOTAL GPA
   document.getElementById("ssum").innerHTML = z + n+n1+n3+n4+n5+n6;
   GPA = (z + n+n1+n3+n4+n5+n6) / 20;
   document.getElementById("ssum1").innerHTML = GPA.toFixed(3);
   if (GPA >= 4 ) {
    document.getElementById("ssum1").style.background = "green";
  }
  else if(GPA >= 3.5 ){
    document.getElementById("ssum1").style.background = "lightgreen";
  }

  else if(GPA >= 3.0 ){
    document.getElementById("ssum1").style.background = "yellow";
  }
  else if(GPA >= 2.5 ){
    document.getElementById("ssum1").style.background = "orange";
  }
  else {
    document.getElementById("ssum1").style.background = "red";
  }
  const arr=[ka,ka1,ka2,ka4,ka5,ka6,ka7]
  arr.sort(function(a,b){
    return b - a  ;
  });
  hig = arr[0];
  
  document.getElementById("smax").innerHTML =hig; 
  arr.sort(function(a,b){
    return a - b  ;
  });
  low = arr[0];
  document.getElementById("smax1").innerHTML =low;
}

//IT

function myt(){
  let ke = document.getElementById("demo41").value;//
  let ke1= document.getElementById("demo42").value;
  let ke2 = document.getElementById("demo43").value;
  let ke4 = document.getElementById("demo45").value;
  let ke5 = document.getElementById("demo46").value;
  let ke6 = document.getElementById("demo47").value;
  let ke7 = document.getElementById("demo48").value;
  // let ka3 = document.getElementById("demo34").value;
  
          // document.getElementById("dis").style.display = "block";
          document.getElementById("dis2").style.display = "block";
          document.getElementById("wellcome2").style.display = "none";
           
       

  const j = 3,k = 3,l=2;


//Funda

// let c = ka ;
switch (true) {
     case ke>= 90 && ke<=100 :
      document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  A+ `;
      document.getElementById("cr").innerHTML = z=j*4;
 
     
      break;
      case ke >= 85  :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  A `;
      document.getElementById("cr").innerHTML =z= j*4;
      
      
      break;
      case ke >= 80  :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `   A-`;
      document.getElementById("cr").innerHTML = z = j*3.75;
      break;
      case ke >= 75  :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
          document.getElementById("de19").innerHTML = `   B+`;
          document.getElementById("cr").innerHTML = z=j*3.5;
      break;
      case ke >= 70 :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `   B`;
      document.getElementById("cr").innerHTML =z= j*3.0;
      break;
      case ke >= 65 :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  B-`;
      document.getElementById("cr").innerHTML = z=j*2.75;
      break;
      case ke >= 60  :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  C+`;
      document.getElementById("cr").innerHTML = z=j*2.5;
      break;
      case ke >= 50:
        document.getElementById("de1").innerHTML = ` ${ke}  `;
       document.getElementById("de19").innerHTML = `  C`;
       document.getElementById("cr").innerHTML = z=j*2.0;
      break;
      case ke >= 45 :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  C-`;
      document.getElementById("cr").innerHTML = z=j*1.75;
      break;
      case ke >= 40  :
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `   D`;///////////
      document.getElementById("cr").innerHTML = z=j*1.0;
      break;
      case ke >=  1:
        document.getElementById("de1").innerHTML = ` ${ke}  `;
      document.getElementById("de19").innerHTML = `  F`;
      document.getElementById("cr").innerHTML = j*0.0;
      break;
      case ke =="":
      
      document.getElementById("de19").innerHTML = "Enter value";
      break;
  
      default:
        document.getElementById("de1").innerHTML = ` ${ke}  `;
          document.getElementById("de19").innerHTML = `   NO GRADE`;
          document.getElementById("cr").innerHTML = "no";
          break;


}

//Engineeri sss

switch (true) {
case ke1 >=90:
  document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   A+`;
  document.getElementById("cridss").innerHTML = n=k*4;
  break;
  case ke1 >=85:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
    document.getElementById("de20").innerHTML = `   A`;
    document.getElementById("cridss").innerHTML = n=k*4;
    break;
    case ke1 >=80:
      document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   A-`;
  document.getElementById("cridss").innerHTML = n=k*3.75;
  break;
  case ke1 >=75:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   B+`;
  document.getElementById("cridss").innerHTML = n=k*3.5;
  break;
  case ke1 >=70:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   B`;
  document.getElementById("cridss").innerHTML = n=k*3;
  break;
  case ke1 >=65:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `  B-`;
  document.getElementById("cridss").innerHTML =n= k*2.75;
  break;
  case ke1 >=60:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   C+`;
  document.getElementById("cridss").innerHTML =n= k*2.5;
  break;
  case ke1 >=50:
    document.getElementById("de2").innerHTML = ` ${ke1}  `;
    document.getElementById("de20").innerHTML = `  C`;
    document.getElementById("cridss").innerHTML =n= k*2.0;
    break;
    case ke1 >=45:
      document.getElementById("de2").innerHTML = ` ${ke1}  `;
      document.getElementById("de20").innerHTML = `   C-`;
      document.getElementById("cridss").innerHTML = n=k*1.75;
      break;
      case ke1 >=40:
        document.getElementById("de2").innerHTML = ` ${ke1}  `;
        document.getElementById("de20").innerHTML = `  D`;
        document.getElementById("cridss").innerHTML = n=k*1.0;
        break;
        case ke1 >=1:
          document.getElementById("de2").innerHTML = ` ${ke1}  `;
          document.getElementById("de20").innerHTML = `   F`;
          document.getElementById("cridss").innerHTML =n= k*0.0;
          break;
  case ke1 == "":
      
      document.getElementById("de20").innerHTML = "Enter value";
      break;
default:
  document.getElementById("de2").innerHTML = ` ${ke1}  `;
  document.getElementById("de20").innerHTML = `   NO GRADE`;
  document.getElementById("cridss").innerHTML = " - ";
  break;
}

//Introduction to Economics

switch (true) {
case ke2 >=90 && ke2<=100:
  document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   A+`;
  document.getElementById("cr1").innerHTML = n1=k*4;
  break;
  case ke2 >=85:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
    document.getElementById("de30").innerHTML = `   A`;
    document.getElementById("cri1").innerHTML = n1=k*4;
    break;
    case ke2 >=80:
      document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   A-`;
  document.getElementById("cr1").innerHTML = n1=k*3.75;
  break;
  case ke2 >=75:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   B+`;
  document.getElementById("cr1").innerHTML = n1=k*3.5;
  break;
  case ke2 >=70:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   B`;
  document.getElementById("cr1").innerHTML = n1=k*3;
  break;
  case ke2 >=65:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `  B-`;
  document.getElementById("cr1").innerHTML =n1= k*2.75;
  break;
  case ke2 >=60:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   C+`;
  document.getElementById("cr1").innerHTML =n1= k*2.5;
  break;
  case ke2 >=50:
    document.getElementById("de3").innerHTML = ` ${ke2}  `;
    document.getElementById("de30").innerHTML = `  C`;
    document.getElementById("cr1").innerHTML =n1= k*2.0;
    break;
    case ke2 >=45:
      document.getElementById("de3").innerHTML = ` ${ke2}  `;
      document.getElementById("de30").innerHTML = `   C-`;
      document.getElementById("cr1").innerHTML = n1=k*1.75;
      break;
      case ke2 >=40:
        document.getElementById("de3").innerHTML = ` ${ke2}  `;
        document.getElementById("de30").innerHTML = `  D`;
        document.getElementById("cr1").innerHTML = n1=k*1.0;
        break;
        case ke2 >=1:
          document.getElementById("de3").innerHTML = ` ${ke2}  `;
          document.getElementById("de30").innerHTML = `   F`;
          document.getElementById("cr1").innerHTML =n1= k*0.0;
          break;
  case ke2 == "":
      
      document.getElementById("de30").innerHTML = "Enter value";
      break;
default:
  document.getElementById("de3").innerHTML = ` ${ke2}  `;
  document.getElementById("de30").innerHTML = `   NO GRADE`;
  document.getElementById("cr1").innerHTML = "no";
  break;
}





//Engineering ssss

switch (true) {
case ke4 >=90 && ke4<=100:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   A+`;
  document.getElementById("cr3").innerHTML = n3=k*4;
  break;
  case ke4 >=85:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   A`;
  document.getElementById("cr3").innerHTML = n3=k*4;
  break;
  case ke4 >=80:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   A-`;
  document.getElementById("cr3").innerHTML = n3=k*3.75;
  break;
  case ke4 >=75:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   B+`;
  document.getElementById("cr3").innerHTML = n3=k*3.5;
  break;
  case ke4 >=70:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   B`;
  document.getElementById("cr3").innerHTML = n3=k*3;
  break;
  case ke4 >=65:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `  B-`;
  document.getElementById("cr3").innerHTML =n3= k*2.75;
  break;
  case ke4 >=60:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   C+`;
  document.getElementById("cr3").innerHTML =n3= k*2.5;
  break;
  case ke4 >=50:
    document.getElementById("de5").innerHTML = ` ${ke4}  `;
    document.getElementById("de50").innerHTML = `  C`;
    document.getElementById("cr3").innerHTML =n3= k*2.0;
    break;
    case ke4 >=45:
      document.getElementById("de5").innerHTML = ` ${ke4}  `;
      document.getElementById("de50").innerHTML = `   C-`;
      document.getElementById("cr3").innerHTML = n3=k*1.75;
      break;
      case ke4 >=40:
        document.getElementById("de5").innerHTML = ` ${ke4}  `;
        document.getElementById("de50").innerHTML = `  D`;
        document.getElementById("cr3").innerHTML = n3=k*1.0;
        break;
        case ke4 >=1:
          document.getElementById("de5").innerHTML = ` ${ke4}  `;
          document.getElementById("de50").innerHTML = `   F`;
          document.getElementById("cr3").innerHTML =n3= k*0.0;
          break;
  case ke4 == "":
      
      document.getElementById("de50").innerHTML = "Enter value";
      break;
default:
  document.getElementById("de5").innerHTML = ` ${ke4}  `;
  document.getElementById("de50").innerHTML = `   NO GRADE`;
  document.getElementById("cr3").innerHTML = "no";
  break;
}

// Probability ssss

switch (true) {
case ke5 >=90 && ke5 <=100:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   A+`;
  document.getElementById("cr4").innerHTML = n4=k*4;
  break;
  case ke5 >=85:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   A`;
  document.getElementById("cr4").innerHTML = n4=k*4;
    break;
    case ke5 >=80:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   A-`;
  document.getElementById("cr4").innerHTML = n4=k*3.75;
  break;
  case ke5 >=75:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   B+`;
  document.getElementById("cr4").innerHTML = n4=k*3.5;
  break;
  case ke5 >=70:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   B`;
  document.getElementById("cr4").innerHTML = n4=k*3;
  break;
  case ke5 >=65:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `  B-`;
  document.getElementById("cr4").innerHTML =n4= k*2.75;
  break;
  case ke5 >=60:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   C+`;
  document.getElementById("cr4").innerHTML =n4= k*2.5;
  break;
  case ke5 >= 50:
    document.getElementById("de6").innerHTML = ` ${ke5}  `;
    document.getElementById("de60").innerHTML = `  C`;
    document.getElementById("cr4").innerHTML =n4= k*2.0;
    break;
    case ke5 >= 45:
      document.getElementById("de6").innerHTML = ` ${ke5}  `;
      document.getElementById("de60").innerHTML = `   C-`;
      document.getElementById("cr4").innerHTML = n4=k*1.75;
      break;
      case ke5 >=40:
        document.getElementById("de6").innerHTML = ` ${ke5}  `;
        document.getElementById("de60").innerHTML = `  D`;
        document.getElementById("cr4").innerHTML = n4=k*1.0;
        break;
        case ke5 >=1:
          document.getElementById("de6").innerHTML = ` ${ke5}  `;
          document.getElementById("de60").innerHTML = `   F`;
          document.getElementById("cr4").innerHTML =n4= k*0.0;
          break;
  case ke5 == "":
      
      document.getElementById("de60").innerHTML = "Enter value";
      break;
default:
  document.getElementById("de6").innerHTML = ` ${ke5}  `;
  document.getElementById("de60").innerHTML = `   NO GRADE`;
  document.getElementById("cr4").innerHTML = "no";
  break;
}

//Global Trends


switch (true) {
case ke6 >=90 && ke6<=100:
  document.getElementById("de7").innerHTML = ` ${ke6}  `;
  document.getElementById("de70").innerHTML = `   A+`;
  document.getElementById("cr5").innerHTML = n5=l*4.0;
  break;
  case ke6 >=85:
    document.getElementById("de7").innerHTML = ` ${ke6}  `;
    document.getElementById("de70").innerHTML = `   A`;
    document.getElementById("cr5").innerHTML = n5=l*4.0;
    break;
    case ke6 >=80:
      document.getElementById("de7").innerHTML = ` ${ke6}  `;
      document.getElementById("de70").innerHTML = `   A-`;
      document.getElementById("cr5").innerHTML = n5=l*3.75;
      break;
  case ke6 >=75:
    document.getElementById("de7").innerHTML = ` ${ke6}  `;
    document.getElementById("de70").innerHTML = `   B+`;
    document.getElementById("cr5").innerHTML = n5=l*3.5;
    break;
  case ke6 >=70:
  document.getElementById("de7").innerHTML = ` ${ke6}  `;
  document.getElementById("de70").innerHTML = `   B`;
  document.getElementById("cr5").innerHTML = n5=l*3.0;
  break;
  case ke6 >=65:
  document.getElementById("de7").innerHTML = ` ${ke6}  `;
  document.getElementById("de70").innerHTML = `  B-`;
  document.getElementById("cr5").innerHTML =n5= l*2.75;
  break;
  case ke6 >=60:
  document.getElementById("de7").innerHTML = ` ${ke6}  `;
  document.getElementById("de70").innerHTML = `   C+`;
  document.getElementById("cr5").innerHTML =n5= l*2.5;
  break;
  case ke6 >=50:
    document.getElementById("de7").innerHTML = ` ${ke6}  `;
    document.getElementById("de70").innerHTML = `  C`;
    document.getElementById("cr5").innerHTML =n5= l*2.0;
    break;
    case ke6 >=45:
      document.getElementById("de7").innerHTML = ` ${ke6}  `;
      document.getElementById("de70").innerHTML = `   C-`;
      document.getElementById("cr5").innerHTML = n5=l*1.75;
      break;
      case ke6 >=40:
        document.getElementById("de7").innerHTML = ` ${ke6}  `;
        document.getElementById("de70").innerHTML = `  D`;
        document.getElementById("cr5").innerHTML = n5=l*1.0;
        break;
        case ke6 >=1:
          document.getElementById("de7").innerHTML = ` ${ke6}  `;
          document.getElementById("de70").innerHTML = `   F`;
          document.getElementById("cr5").innerHTML =n5= l*0.0;
          break;
  case ke6 == "":
      
      document.getElementById("de70").innerHTML = "Enter value";
      break;
default:
  document.getElementById("de7").innerHTML = ` ${ke6}  `;
  document.getElementById("de70").innerHTML = `   NO GRADE`;
  document.getElementById("cr5").innerHTML = "no";
  break;
}

//inclusive

switch (true) {
  case ke7 >=90 && ke7<=100:
    document.getElementById("de8").innerHTML = ` ${ke7}  `;
    document.getElementById("de80").innerHTML = `   A+`;
    document.getElementById("cr6").innerHTML = n6=l*4.0;
    break;
    case ke7 >=85:
      document.getElementById("de8").innerHTML = ` ${ke7}  `;
      document.getElementById("de80").innerHTML = `   A`;
      document.getElementById("cr6").innerHTML = n6=l*4.0;
      break;
      case ke7 >=80:
        document.getElementById("de8").innerHTML = ` ${ke7}  `;
        document.getElementById("de80").innerHTML = `   A-`;
        document.getElementById("cr6").innerHTML = n6=l*3.75;
        break;
    case ke7 >=75:
      document.getElementById("de8").innerHTML = ` ${ke7}  `;
      document.getElementById("de80").innerHTML = `   B+`;
      document.getElementById("cr6").innerHTML = n6=l*3.5;
      break;
    case ke7 >=70:
    document.getElementById("de8").innerHTML = ` ${ke7}  `;
    document.getElementById("de80").innerHTML = `   B`;
    document.getElementById("cr6").innerHTML = n6=l*3.0;
    break;
    case ke7 >=65:
    document.getElementById("de8").innerHTML = ` ${ke7}  `;
    document.getElementById("de80").innerHTML = `  B-`;
    document.getElementById("cr6").innerHTML =n6= l*2.75;
    break;
    case ke7 >=60:
    document.getElementById("de8").innerHTML = ` ${ke7}  `;
    document.getElementById("de80").innerHTML = `   C+`;
    document.getElementById("cr6").innerHTML =n6= l*2.5;
    break;
    case ke7 >=50:
      document.getElementById("de8").innerHTML = ` ${ke7}  `;
      document.getElementById("de80").innerHTML = `  C`;
      document.getElementById("cr6").innerHTML =n6= l*2.0;
      break;
      case ke7 >=45:
        document.getElementById("de8").innerHTML = ` ${ke7}  `;
        document.getElementById("de80").innerHTML = `   C-`;
        document.getElementById("cr6").innerHTML = n6=l*1.75;
        break;
        case ke7 >=40:
          document.getElementById("de8").innerHTML = ` ${ke7}  `;
          document.getElementById("de80").innerHTML = `  D`;
          document.getElementById("cr6").innerHTML = n6=l*1.0;
          break;
          case ke7 >=1:
            document.getElementById("de8").innerHTML = ` ${ke7}  `;
            document.getElementById("de80").innerHTML = `   F`;
            document.getElementById("cr6").innerHTML =n6= l*0.0;
            break;
    case ke7 == "":
        
        document.getElementById("de80").innerHTML = "Enter value";
        break;
  default:
    document.getElementById("de8").innerHTML = ` ${ke7}  `;
    document.getElementById("de80").innerHTML = `   NO GRADE`;
    document.getElementById("cr6").innerHTML = "no";
    break;
  }

//TOTAL GPA
   document.getElementById("tsum").innerHTML = z + n+n1+n3+n4+n5+n6;
   GPA = (z + n+n1+n3+n4+n5+n6) / 19;
   document.getElementById("tsum1").innerHTML = GPA.toFixed(3);
   if (GPA >= 4 ) {
    document.getElementById("tsum1").style.background = "green";
  }
  else if(GPA >= 3.5 ){
    document.getElementById("tsum1").style.background = "lightgreen";
  }

  else if(GPA >= 3.0 ){
    document.getElementById("tsum1").style.background = "yellow";
  }
  else if(GPA >= 2.5 ){
    document.getElementById("tsum1").style.background = "orange";
  }
  else {
    document.getElementById("tsum1").style.background = "red";
  }
  const arr=[ke,ke1,ke2,ke4,ke5,ke6,ke7]
  arr.sort(function(a,b){
    return b - a  ;
  });
  hig = arr[0];
  
  document.getElementById("tmax").innerHTML =hig; 
  arr.sort(function(a,b){
    return a - b  ;
  });
  low = arr[0];
  document.getElementById("tmax1").innerHTML =low;


}