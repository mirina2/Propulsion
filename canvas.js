function CoordinatePlane(){
    var rectangle_display = document.getElementById("rectangle");

    var rctx = rectangle_display.getContext("2d");//렌더링 컨텍스트 가져오기(색연필 가져오기(??))


    rctx.beginPath();
    rctx.moveTo(200,0);
    rctx.lineTo(200,400);//y축 그리기

    rctx.moveTo(0,200);
    rctx.lineTo(400,200);//x축 그리기

    rctx.moveTo(200,0);//y축 화살표
    rctx.lineTo(195,5);
    rctx.lineTo(205,5);
    rctx.fill();

    rctx.moveTo(400,200);//x축 화살표
    rctx.lineTo(395,195);
    rctx.lineTo(395,205);
    rctx.fill();
    rctx.closePath();
    
   rctx.font="20px Arial";
   rctx.fillText("x",390,220);//x 표시
   rctx.fillText("y",210,15)//y 표시
   
   rctx.stroke();//원점 그리기
     
    }

    function drawCircle(xyrInfo) {
        var rectangle_display = document.getElementById("rectangle");
        var ctx = rectangle_display.getContext("2d");//렌더링 컨텍스트 가져오기(색연필 가져오기(??))

         var xyrInfo = xyrInfo.value;
         var xyr = xyrInfo.split(",");
         var zeroExist = xyrInfo.indexOf(".");

         var xPosit = JSON.parse(xyr[0])+200;
         var yPosit = JSON.parse(xyr[1])+200;
         var input_radius = JSON.parse(xyr[2]);
         var equation_radius = Math.pow(input_radius,2);

         ctx.beginPath();
         var radians_ing = Math.PI/180;
         ctx.arc(xPosit,-yPosit,input_radius,0 * radians_ing, 360 * radians_ing,false);
        ctx.stroke();

        var CircleEquationP = document.getElementById("last_CircleEquation");
        CircleEquationP.classList.add = ("result_p");
        
        if(xPosit == 200, yPosit == 200) {
            CircleEquationP.innerHTML = (`x^2 + y^2 = ${equation_radius}`)
        } else {
            CircleEquationP.innerHTML = (`(x- ${xPosit-200})^2 + (y- ${yPosit-200})^2 = ${equation_radius}`);//원방 표시
        
    }  if(xPosit == 200, yPosit == 200, input_radius == 0){
        CircleEquationP.innerHTML = ("생성될수 없는 원의 방정식입니다!");
    } 
}
