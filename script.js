 
  var im = {num:0};
  var ib = {num:0};
  var ia = {num:0};
  var it = {num:0};
  var icap = {num:0};
  var iuc = {num:0};
  let resultISB;
  let resultISBreal;
  let resultICAP;
  let resultICAPreal;
  let resultGI;
  
  function stringToNumber(){
    im.num =  parseInt(im.num);
    ib.num =   parseInt(ib.num);
    ia.num =   parseInt(ia.num);
    it.num =   parseInt(it.num);
    icap.num =  parseInt(icap.num);
    iuc.num =  parseFloat(iuc.num);
  }
    
 function storeVar (){
   displayRadioValue('MAG',im);
   displayRadioValue('BIO',ib);
   displayRadioValue('ABR',ia);
   displayRadioValue('TEM',it);
   displayRadioValue('ICAP',icap);
   
 }   
    
 function getIUC () {
    iuc.num = 0
    var result
    var ele = document.getElementsByName("IUC"); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked){ 
                  result = ele[i].value
                  result =  parseFloat(result)
                  iuc.num = iuc.num + result
                }
 }
 iuc.num = iuc.num.toFixed(2);
 console.log("valor iuc "+ iuc.num)
                if (iuc.num > 0.15){
                  iuc.num = 0.15;
                }
 }
function displayRadioValue(name,result) { 
            var ele = document.getElementsByName(name); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked){ 
                result.num = ele[i].value;
                //console.log(result.num);
            } 
        } 
}

function displayRadioOn(name, message) { 
  
            var ele = document.getElementsByName(name); 
          
                if(ele[0].checked == false && ele[1].checked == false && ele[2].checked == false && ele[3].checked == false ) { 
               alert("Preencha o " + message);
            }
}
function alertRadio(){
  /*displayRadioOn('MAG','Índice de Magnitude');
  displayRadioOn('BIO', "Índice de Biodiversidade");
  displayRadioOn('ABR', 'Índice de abrangência');
  displayRadioOn('TEM', 'Índice detemporalidade');
  displayRadioOn('ICAP','Índice Comprometimento de Área Prioritária (ICAP');
  //displayRadioOn('IUC', 'Influência em Unidade de Conservação (IUC)');*/
}

function calcISB (){
  stringToNumber();
  //IM x IB (IA IT)/140
  var result = (im.num * ib.num*(ia.num + it.num)/140);
    resultISBreal = result;
    resultISBreal = resultISBreal.toFixed(2);
  console.log('resultado sem correção ISB: ' + result)
    if (result > 0.25){
      resultISB = 0.25;
      
    }else{
      resultISB = result;
    }
    console.log ('resultado com correção: ' + resultISB );
}

function calcCAP(){
  var result = (im.num*icap.num*it.num)/70
  resultICAPreal = result;
  resultICAPreal =  resultICAPreal.toFixed(2);
  console.log('resultado sem correção ICAP: ' + result);
  if (result > 0.25){
      
      resultICAP = 0.25;
}else{
  resultICAP = result
}
 console.log ('resultado com correção: ' + resultICAP);
}

function calcGI(){
  var result = (resultISB + resultICAP + iuc.num);
  console.log('resultado sem correção GI: ' + result);
  if (result > 0.5){
    resultGI = 0.5;
  }else{
    resultGI = result
  }
   console.log ('resultado com correção GI: ' + resultGI);
}
  
function displayGI (){
   document.getElementById("GI").innerHTML = resultGI.toFixed(2)

}

function calcVr () {
  var valorVR = document.getElementById ("vrInput");
  var result = resultGI * valorVR.value;
   console.log("vr" + valorVR.value)
  console.log("vr" + resultGI)
   console.log("vr" + result)
    console.log("vr" + valorVR)
    console.log("sem formatar: "+result)
  
  result = result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');
  console.log("format " + result)

  document.getElementById("vr").innerHTML = result;
  
  //get money start
  
        var tmp = result+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}).([0-9]{2}$)/g, ".$1,$2");
console.log("getmoney" + tmp)
  

  
  //get money end
}
function  myReport (){
 document.getElementsByName("reportIm")[0].innerHTML =im.num;
 document.getElementsByName("reportIm")[1].innerHTML =im.num;
 document.getElementsByName("reportIm")[2].innerHTML =im.num;
 document.getElementsByName("reportIb")[0].innerHTML =ib.num;
 document.getElementsByName("reportIb")[1].innerHTML =ib.num;
 document.getElementsByName("reportIa")[0].innerHTML =ia.num;
 document.getElementsByName("reportIa")[1].innerHTML =ia.num;
 document.getElementsByName("reportIt")[0].innerHTML =it.num;
 document.getElementsByName("reportIt")[1].innerHTML =it.num;
 document.getElementsByName("reportIt")[2].innerHTML =it.num;
 document.getElementsByName("reportIcap")[0].innerHTML =icap.num;
 document.getElementsByName("reportIcap")[1].innerHTML =icap.num;
 document.getElementsByName("reportIsb")[0].innerHTML = resultISBreal;
 document.getElementsByName("reportIsb")[1].innerHTML = resultISBreal;
 document.getElementsByName("reportCap")[0].innerHTML = resultICAPreal;
 document.getElementsByName("reportCap")[1].innerHTML = resultICAPreal;
 document.getElementsByName("reportIuc")[0].innerHTML = iuc.num;
 document.getElementsByName("reportIuc")[1].innerHTML = iuc.num;
 document.getElementsByName("reportGI")[0].innerHTML = resultGI.toFixed(2);
 
console.log(iuc)
 

 console.log("report test " + im.num)
}

