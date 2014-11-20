avalon.define("box1", function(vm) {
    /* 初始化表单 */
    vm.string = "";
    vm.lat = {
        pre : "",
        next : ""
    };
    vm.leng = {
        pre : "",
        next : ""
    };
    vm.daihao = "";
    vm.differLat = "";
    vm.differLeng = "";
    vm.style = "";

    vm.click = function() {
        /* 截取字符串，获得各个位的数字 */
        first = vm.string.substring (0,1);
        second = vm.string.substring (1,3);
        three = vm.string.substring (3,4);
        four = parseInt(vm.string.substring(4,7));
        five = parseInt(vm.string.substring(7,10));

        /* 对字母进行格式化 */
        first = mathFormat(first);
        three = mathFormat(three);

        /* 计算经纬度范围 */
        vm.lat.pre = (first-1)*4;
        vm.lat.next = first*4;
        vm.differLat = vm.lat.next - vm.lat.pre;
        vm.leng.pre = (second-31)*6;
        vm.leng.next = (second-30)*6;
        vm.differLeng = vm.leng.next - vm.leng.pre;
        vm.daihao = vm.leng.next/6;

        /* 精度范围的获取 */
        accuracyLat = getNetNum(three);

        /* 比例尺获取 */
        vm.style = getStyle(three);

        /* 将度数转化成分 */
        differLatFen = vm.differLat*60;
        differLengFen = vm.differLeng*60;

        eachLat = differLatFen/accuracyLat;
        eachLeng = differLengFen/accuracyLat;

        x1 = vm.lat.next*60-(four-1)*eachLat;
        x2 = vm.lat.next*60-four*eachLat;

        y1 = vm.leng.pre*60+(five-1)*eachLeng;
        y2 = vm.leng.pre*60+five*eachLeng;

        /* 格式化页面输出 */
        vm.lat.pre = changeNum(x2);
        vm.lat.next = changeNum(x1);
        vm.differLat = changeNum(eachLat);
        vm.differLeng = changeNum(eachLeng);
        vm.leng.pre = changeNum(y1);
        vm.leng.next = changeNum(y2);
    }
});
avalon.define("box2",function(vm){
	vm.string2 = "";
	vm.daihao = "";
	vm.click2 = function(){
		vm.daihao = parseInt(vm.string2/6)+1;
	}
});
avalon.define("box3",function(vm){
	vm.string3 = "";
	vm.dushu = "";
	vm.click3 = function(){
		vm.dushu = changeNum(vm.string3*60);
	}
});

avalon.define("box4",function(vm){
    vm.jingdu = "";
    vm.weidu = "";
    vm.result = "";
    vm.click = function(){
        var keywordsLong = vm.jingdu.split(' ');
        var keywordsLat = vm.weidu.split(' ');
        second_4 = parseInt(keywordsLong[0]/6)+1+30;
        first_4 = mathFormat_2(parseInt(keywordsLat[0]/4)+1);
        vm.result = first_4+second_4+"额、、后面的数字还在计算中。。。";
    }
});