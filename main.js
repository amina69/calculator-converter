//BASIC CALCULATOR

function calc() {
    var a = parseFloat(document.querySelector("#value1").value);
    var b = parseFloat(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var equals;


    if (op == "add") {
        equals = a+b;
    } else if (op == "sub") {
        equals = a-b;
    } else if (op == "mul") {
        equals = a*b;
    } else if (op == "div") {
        equals = a/b;
    } else if (op == "per") {
        equals = (a/100);
    } else if (op == "perof") {
        equals = a/100*b;
    }

    document.querySelector("#result").innerHTML = equals;
}

//AREA CONVERTER

function con() {
    var c = parseFloat(document.querySelector("#value3").value);
    var op1 = document.querySelector("#operator1").value;
    var op2 = document.querySelector("#operator2").value;
    var convert;

    //SQUARE METRE 1
    if (op1 == "sqm" && op2 == "hec") {
        convert = c/10000;
    } else if (op1 == "sqm" && op2 == "acr") {
        convert = c/4047;
    } else if (op1 == "sqm" && op2 == "sqi") {
        convert = c*1550;
    } else if (op1 == "sqm" && op2 == "sqf") {
        convert = c*10.764;
    } else if (op1 == "sqm" && op2 == "sqy") {
        convert = c*1.196;
    } else if (op1 == "sqm" && op2 == "sqmi") {
        convert = c/2.59000000;
    } else if (op1 == "sqm" && op2 == "sqk") {
        convert = c/1000000;
    } else if (op1 == "sqm" && op2 == "sqm") {
        convert = "Cant Covert To Same Area!";
    }
     
    //HECTARE 2
    else if (op1 == "hec" && op2 == "sqm") {
        convert = c*10000
    } else if (op1 == "hec" && op2 == "acr") {
        convert = c*2.471;
    } else if (op1 == "hec" && op2 == "sqi") {
        convert = c*1.550000000;
    } else if (op1 == "hec" && op2 == "sqf") {
        convert = c*107639;
    } else if (op1 == "hec" && op2 == "sqy") {
        convert = c*11960;
    } else if (op1 == "hec" && op2 == "sqmi") {
        convert = c/259;
    } else if (op1 == "hec" && op2 == "sqk") {
        convert = c/100;
    } else if (op1 == "hec" && op2 == "hec") {
        convert = "Cant Covert To Same Area!";
    }
    
    //ACRES 3
    else if (op1 == "acr" && op2 == "sqm") {
        convert = c*4047;
    } else if (op1 == "acr" && op2 == "hec") {
        convert = c/2.471;
    } else if (op1 == "acr" && op2 == "sqi") {
        convert = c*6.273000000;
    } else if (op1 == "acr" && op2 == "sqf") {
        convert = c*43560;
    } else if (op1 == "acr" && op2 == "sqy") {
        convert = c*4840;
    } else if (op1 == "acr" && op2 == "sqmi") {
        convert = c/640;
    } else if (op1 == "acr" && op2 == "sqk") {
        convert = c/247;
    } else if (op1 == "acr" && op2 == "acr") {
        convert = "Cant Covert To Same Area!";
    }
    
    //SQUARE INCH 4
    else if (op1 == "sqi" && op2 == "sqm") {
        convert = c/1550;
    } else if (op1 == "sqi" && op2 == "hec") {
        convert = c/1.550000000;
    } else if (op1 == "sqi" && op2 == "acr") {
        convert = c/6.273000000;
    } else if (op1 == "sqi" && op2 == "sqf") {
        convert = c/144;
    } else if (op1 == "sqi" && op2 == "sqy") {
        convert = c/1296;
    } else if (op1 == "sqi" && op2 == "sqmi") {
        convert = c/4.014000000000;
    } else if (op1 == "sqi" && op2 == "sqk") {
        convert = c/1.55000000000;
    } else if (op1 == "sqi" && op2 == "sqi") {
        convert = "Cant Covert To Same Area!";
    }
    
    //SQUARE FOOT 5
    else if (op1 == "sqf" && op2 == "sqm") {
        convert = c/10.764;
    } else if (op1 == "sqf" && op2 == "hec") {
        convert = c/107639;
    } else if (op1 == "sqf" && op2 == "acr") {
        convert = c/43560;
    } else if (op1 == "sqf" && op2 == "sqi") {
        convert = c*144;
    } else if (op1 == "sqf" && op2 == "sqy") {
        convert = c/9;
    } else if (op1 == "sqf" && op2 == "sqmi") {
        convert = c/2.7880000000;
    } else if (op1 == "sqf" && op2 == "sqk") {
        convert = c/1.0760000000;
    } else if (op1 == "sqf" && op2 == "sqf") {
        convert = "Cant Covert To Same Area!";
    }
    
    //SQUARE YARD 6
    else if (op1 == "sqy" && op2 == "sqm") {
        convert = c/1.196;
    } else if (op1 == "sqy" && op2 == "hec") {
        convert = c/11960;
    } else if (op1 == "sqy" && op2 == "acr") {
        convert = c/4840;
    } else if (op1 == "sqy" && op2 == "sqi") {
        convert = c*1296;
    } else if (op1 == "sqy" && op2 == "sqf") {
        convert = c*9;
    } else if (op1 == "sqy" && op2 == "sqmi") {
        convert = c/3.098000000;
    } else if (op1 == "sqy" && op2 == "sqk") {
        convert = c/1.196000000;
    } else if (op1 == "sqy" && op2 == "sqy") {
        convert = "Cant Covert To Same Area!";
    }
    
    //SQUARE MILE 7
    else if (op1 == "sqmi" && op2 == "sqm") {
        convert = c*2.59000000;
    } else if (op1 == "sqmi" && op2 == "hec") {
        convert = c*259;
    } else if (op1 == "sqmi" && op2 == "acr") {
        convert = c*640;
    } else if (op1 == "sqmi" && op2 == "sqi") {
        convert = c*4.014000000000;
    } else if (op1 == "sqmi" && op2 == "sqf") {
        convert = c*2.7880000000;
    } else if (op1 == "sqmi" && op2 == "sqy") {
        convert = c*3.098000000;
    } else if (op1 == "sqmi" && op2 == "sqk") {
        convert = c*2.59;
    } else if (op1 == "sqmi" && op2 == "sqmi") {
        convert = "Cant Covert To Same Area!";
    }
    
    //SQUARE KILOMETER 8
    else if (op1 == "sqk" && op2 == "sqm") {
        convert = c*1000000;
    } else if (op1 == "sqk" && op2 == "hec") {
        convert = c*100;
    } else if (op1 == "sqk" && op2 == "acr") {
        convert = c*247;
    } else if (op1 == "sqk" && op2 == "sqi") {
        convert = c*1.55000000000;
    } else if (op1 == "sqk" && op2 == "sqf") {
        convert = c*1.0760000000;
    } else if (op1 == "sqk" && op2 == "sqy") {
        convert = c*1.196000000;
    } else if (op1 == "sqk" && op2 == "sqmi") {
        convert = c/2.59;
    } else if (op1 == "sqk" && op2 == "sqk") {
        convert = "Cant Covert To Same Area!";
    }

    document.querySelector("#result2").innerHTML = convert;
}

//LENGTH CONVERTER

function conv() {
    var d = parseFloat(document.querySelector("#value4").value);
    var op3 = document.querySelector("#operator3").value;
    var op4 = document.querySelector("#operator4").value;
    var convert2;

    //KILOMETER 1
    if (op3 == "kil" && op4 == "met") {
        convert2 = d*1000;
    } else if (op3 == "kil" && op4 == "cen") {
        convert2 = d*100000;
    } else if (op3 == "kil" && op4 == "mil") {
        convert2 = d*1000000;
    } else if (op3 == "kil" && op4 == "mic") {
        convert2 = d*1000000000;
    } else if (op3 == "kil" && op4 == "nan") {
        convert2 = d*1000000000000;
    } else if (op3 == "kil" && op4 == "mile") {
        convert2 = d/1.609;
    } else if (op3 == "kil" && op4 == "yar") {
        convert2 = d*1094;
    } else if (op3 == "kil" && op4 == "foot") {
        convert2 = d*3281;
    } else if (op3 == "kil" && op4 == "inc") {
        convert2 = d*39370;
    } else if (op3 == "kil" && op4 == "naum") {
        convert2 = d/1.852;
    } else if (op3 == "kil" && op4 == "kil") {
        convert2 = "Cant Convert To Same Length!";
    }

    //METER 2
      else if (op3 == "met" && op4 == "kil") {
        convert2 = d/1000;
    } else if (op3 == "met" && op4 == "cen") {
        convert2 = d*100;
    } else if (op3 == "met" && op4 == "mil") {
        convert2 = d*1000;
    } else if (op3 == "met" && op4 == "mic") {
        convert2 = d*1000000;
    } else if (op3 == "met" && op4 == "nan") {
        convert2 = d*1000000000;
    } else if (op3 == "met" && op4 == "mile") {
        convert2 = d/1609;
    } else if (op3 == "met" && op4 == "yar") {
        convert2 = d*1.094;
    } else if (op3 == "met" && op4 == "foot") {
        convert2 = d*3.281;
    } else if (op3 == "met" && op4 == "inc") {
        convert2 = d*39.37;
    } else if (op3 == "met" && op4 == "naum") {
        convert2 = d/1852;
    } else if (op3 == "met" && op4 == "met") {
        convert2 = "Cant Convert To Same Length!";
    }

    //CENTIMETER 3
      else if (op3 == "cen" && op4 == "kil") {
        convert2 = d/100000;
    } else if (op3 == "cen" && op4 == "met") {
        convert2 = d/100;
    } else if (op3 == "cen" && op4 == "mil") {
        convert2 = d*10;
    } else if (op3 == "cen" && op4 == "mic") {
        convert2 = d*10000;
    } else if (op3 == "cen" && op4 == "nan") {
        convert2 = d*10000000;
    } else if (op3 == "cen" && op4 == "mile") {
        convert2 = d/160934;
    } else if (op3 == "cen" && op4 == "yar") {
        convert2 = d/91.44;
    } else if (op3 == "cen" && op4 == "foot") {
        convert2 = d/30.48;
    } else if (op3 == "cen" && op4 == "inc") {
        convert2 = d/2.54;
    } else if (op3 == "cen" && op4 == "naum") {
        convert2 = d/185200;
    } else if (op3 == "cen" && op4 == "cen") {
        convert2 = "Cant Convert To Same Length!";
    }

    //MILLIMETER 4
      else if (op3 == "mil" && op4 == "kil") {
        convert2 = d/1000000;
    } else if (op3 == "mil" && op4 == "met") {
        convert2 = d/1000;
    } else if (op3 == "mil" && op4 == "cen") {
        convert2 = d/10;
    } else if (op3 == "mil" && op4 == "mic") {
        convert2 = d*1000;
    } else if (op3 == "mil" && op4 == "nan") {
        convert2 = d*1000000;
    } else if (op3 == "mil" && op4 == "mile") {
        convert2 = d/1.609000000;
    } else if (op3 == "mil" && op4 == "yar") {
        convert2 = d/914;
    } else if (op3 == "mil" && op4 == "foot") {
        convert2 = d/305;
    } else if (op3 == "mil" && op4 == "inch") {
        convert2 = d/25.4;
    } else if (op3 == "mil" && op4 == "naum") {
        convert2 = d/1.852000000;
    } else if (op3 == "mil" && op4 == "mil") {
        convert2 = "Cant Convert To Same Length!";
    }

    //MICROMETER 5
      else if (op3 == "mic" && op4 == "kil") {
        convert2 = d/1000000000;
    } else if (op3 == "mic" && op4 == "met") {
        convert2 = d/1000000;
    } else if (op3 == "mic" && op4 == "cen") {
        convert2 = d/10000;
    } else if (op3 == "mic" && op4 == "mil") {
        convert2 = d/1000;
    } else if (op3 == "mic" && op4 == "nan") {
        convert2 = d*1000;
    } else if (op3 == "mic" && op4 == "mile") {
        convert2 = d/1.609000000000;
    } else if (op3 == "mic" && op4 == "yar") {
        convert2 = d/914400;
    } else if (op3 == "mic" && op4 == "foot") {
        convert2 = d/304800;
    } else if (op3 == "mic" && op4 == "inc") {
        convert2 = d/25400;
    } else if (op3 == "mic" && op4 == "naum") {
        convert2 = d/1.852000000000;
    } else if (op3 == "mic" && op4 == "mic") {
        convert2 = "Cant Convert To Same Length!";
    }

    //NANOMETER 6
      else if (op3 == "nan" && op4 == "kil") {
        convert2 = d/1000000000000;
    } else if (op3 == "nan" && op4 == "met") {
        convert2 = d/1000000000;
    } else if (op3 == "nan" && op4 == "cen") {
        convert2 = d/10000000;
    } else if (op3 == "nan" && op4 == "mil") {
        convert2 = d/1000000;
    } else if (op3 == "nan" && op4 == "mic") {
        convert2 = d/1000;
    } else if (op3 == "nan" && op4 == "mile") {
        convert2 = d/1.609000000000000;
    } else if (op3 == "nan" && op4 == "yar") {
        convert2 = d/9.14400000000;
    } else if (op3 == "nan" && op4 == "foot") {
        convert2 = d/3.04800000000;
    } else if (op3 == "nan" && op4 == "inc") {
        convert2 = d/2.540000000;
    } else if (op3 == "nan" && op4 == "naum") {
        convert2 = d/1.852000000000000;
    } else if (op3 == "nan" && op4 == "nan") {
        convert2 = "Cant Convert To Same Length!";
    }

    //MILE 7
      else if (op3 == "mile" && op4 == "kil") {
        convert2 = d*1.609;
    } else if (op3 == "mile" && op4 == "met") {
        convert2 = d*1609;
    } else if (op3 == "mile" && op4 == "cen") {
        convert2 = d*160934;
    } else if (op3 == "mile" && op4 == "mil") {
        convert2 = d*1.609000000;
    } else if (op3 == "mile" && op4 == "mic") {
        convert2 = d*1.609000000000;
    } else if (op3 == "mile" && op4 == "nan") {
        convert2 = d*1.609000000000000;
    } else if (op3 == "mile" && op4 == "yar") {
        convert2 = d*1760;
    } else if (op3 == "mile" && op4 == "foot") {
        convert2 = d*5280;
    } else if (op3 == "mile" && op4 == "inc") {
        convert2 = d*63360;
    } else if (op3 == "mile" && op4 == "naum") {
        convert2 = d/1.151;
    } else if (op3 == "mile" && op4 == "mile") {
        convert2 = "Cant Convert To Same Length!";
    }

    //YARD 8
      else if (op3 == "yar" && op4 == "kil") {
        convert2 = d/1094;
    } else if (op3 == "yar" && op4 == "met") {
        convert2 = d/1.094;
    } else if (op3 == "yar" && op4 == "cen") {
        convert2 = d*91.44;
    } else if (op3 == "yar" && op4 == "mil") {
        convert2 = d*914;
    } else if (op3 == "yar" && op4 == "mic") {
        convert2 = d*914400;
    } else if (op3 == "yar" && op4 == "nan") {
        convert2 = d*9.14400000000;
    } else if (op3 == "yar" && op4 == "mile") {
        convert2 = d/1760;
    } else if (op3 == "yar" && op4 == "foot") {
        convert2 = d*3;
    } else if (op3 == "yar" && op4 == "inc") {
        convert2 = d*36;
    } else if (op3 == "yar" && op4 == "naum") {
        convert2 = d/2025;
    } else if (op3 == "yar" && op4 == "yar") {
        convert2 = "Cant Convert To Same Length!";
    }

    //FOOT 9
      else if (op3 == "foot" && op4 == "kil") {
        convert2 = d/3281;
    } else if (op3 == "foot" && op4 == "met") {
        convert2 = d/3.281;
    } else if (op3 == "foot" && op4 == "cen") {
        convert2 = d*30.48;
    } else if (op3 == "foot" && op4 == "mil") {
        convert2 = d*305;
    } else if (op3 == "foot" && op4 == "mic") {
        convert2 = d*304800;
    } else if (op3 == "foot" && op4 == "nan") {
        convert2 = d*3.04800000000;
    } else if (op3 == "foot" && op4 == "mile") {
        convert2 = d/5280;
    } else if (op3 == "foot" && op4 == "yar") {
        convert2 = d/3;
    } else if (op3 == "foot" && op4 == "inc") {
        convert2 = d*12;
    } else if (op3 == "foot" && op4 == "naum") {
        convert2 = d/6076;
    } else if (op3 == "foot" && op4 == "foot") {
        convert2 = "Cant Convert To Same Length!";
    }


    //INCH 10
      else if (op3 == "inc" && op4 == "kil") {
        convert2 = d/39370;
    } else if (op3 == "inc" && op4 == "met") {
        convert2 = d/39.37;
    } else if (op3 == "inc" && op4 == "cen") {
        convert2 = d*2.54;
    } else if (op3 == "inc" && op4 == "mil") {
        convert2 = d*25.4;
    } else if (op3 == "inc" && op4 == "mic") {
        convert2 = d*25400;
    } else if (op3 == "inc" && op4 == "nan") {
        convert2 = d*2.540000000;
    } else if (op3 == "inc" && op4 == "mile") {
        convert2 = d/63360;
    } else if (op3 == "inc" && op4 == "yar") {
        convert2 = d/36;
    } else if (op3 == "inc" && op4 == "foot") {
        convert2 = d/12;
    } else if (op3 == "inc" && op4 == "naum") {
        convert2 = d/72913;
    } else if (op3 == "inc" && op4 == "inc") {
        convert2 = "Cant Convert To Same Length!";
    }

    //NAUTICAL MILE 11
      else if (op3 == "naum" && op4 == "kil") {
        convert2 = d*1.852;
    } else if (op3 == "naum" && op4 == "met") {
        convert2 = d*1852;
    } else if (op3 == "naum" && op4 == "cen") {
        convert2 = d*185200;
    } else if (op3 == "naum" && op4 == "mil") {
        convert2 = d*1.852000000;
    } else if (op3 == "naum" && op4 == "mic") {
        convert2 = d*1.852000000000;
    } else if (op3 == "naum" && op4 == "nan") {
        convert2 = d*1.852000000000000;
    } else if (op3 == "naum" && op4 == "mile") {
        convert2 = d*1.151;
    } else if (op3 == "naum" && op4 == "yar") {
        convert2 = d*2025;
    } else if (op3 == "naum" && op4 == "foot") {
        convert2 = d*6076;
    } else if (op3 == "naum" && op4 == "inch") {
        convert2 = d*72913;
    } else if (op3 == "naum" && op4 == "naum") {
        convert2 = "Cant Convert To Same Length!";
    }


    document.querySelector("#result3").innerHTML = convert2;
}
