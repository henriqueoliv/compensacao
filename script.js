 
  var im = {num:0};
  var ib = {num:0};
  var ia = {num:0};
  var it = {num:0};
  var icap = {num:0};
  var iuc = {num:0};
  let resultISB;
  let resultICAP;
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
   displayRadioValue('IUC',iuc);
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

function calcISB (){
  stringToNumber();
  //IM x IB (IA IT)/140
  var result = (im.num * ib.num*(ia.num + it.num)/140);
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
  
/*function blza () { 
   console.log(im,ib,ia,it,icap,iuc); 
    console.log(resultISB);
    console.log(resultICAP);
}*/
function displayGI (){
   document.getElementById("GI").innerHTML = resultGI.toFixed(2)
}