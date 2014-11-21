/*
 * 字母转换数字 
*/
function mathFormat(word){
    switch(word){
        case "a":
        case "A":
            return "1";
        case "b":
        case "B":
            return "2";
        case "c":
        case "C":
            return "3";
        case "d":
        case "D":
            return "4";
        case "e":
        case "E":
            return "5";
        case "f":
        case "F":
            return "6";
        case "g":
        case "G":
            return "7";
        case "h":
        case "H":
            return "8";
        case "i":
        case "I":
            return "9";
        case "j":
        case "J":
            return "10";
        case "k":
        case "k":
            return "11";
        case "l":
        case "L":
            return "12";
        case "m":
        case "M":
            return "13";
        case "n":
        case "N":
            return "14";
        case "o":
        case "O":
            return "15";
        case "p":
        case "P":
            return "16";
    }
};

/*
 * 字母转换数字 
*/
function mathFormat_2(word){
    switch(word){
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        case 5:
            return "E";
        case 6:
            return "F";
        case 7:
            return "G";
        case 8:
            return "H";
        case 9:
            return "I";
        case 10:
            return "J";
        case 11:
            return "K";
        case 12:
            return "L";
        case 13:
            return "M";
        case 14:
            return "N";
        case 15:
            return "O";
        case 16:
            return "P";
    }
};

/*
 * 精度范围的获取 
 * 比如：J50C，其中的C经过上面的数字转换，转换成数字
 * C对应的是1:250000比例尺，方格为4*4，所有返回4
*/
function getNetNum(o){
    switch(o){
        case "1":
            return "1";
        case "2":
            return "2";
        case "3":
            return "4";
        case "4":
            return "12";
        case "5":
            return "24";
        case "6":
            return "48";
        case "7":
            return "96";
        case "8":
            return "192"
    }
};

/*
 *度数与小数的转化
*/
function changeNum(o){
    a = parseInt(o/60);  // 7110/60 = 118  度数
    b = (o%60)*60;       // 7110%60 = 0.5  0.5*60 = 30 分
    c = parseInt(b/60); 
    d = (b%60)*60;
    e = parseInt(d/60);
    return (a+"°"+c+"′"+e+"″");
};

/*
 * 获取比例尺
*/
function getStyle(o){
    switch(o){
        case 1:
            return "1:1000000";
        case 2:
            return "1:500000";
        case 3:
            return "1:250000";
        case 4:
            return "1:100000";
        case 5:
            return "1:50000";
        case 6:
            return "1:25000";
        case 7:
            return "1:10000";
        case 8:
            return "1:5000";
    }
};