var index = 0;
document.getElementById("baiNian").addEventListener("click", validata);

function validata() {
    index++;
    if(index==1){
        let number = 10;
        let text = document.querySelector('p');
        document.getElementById("baiNian").addEventListener("click", xinChun);
        function xinChun() {
            if (number != 0) {
                number --;
                text.textContent = number;
            }else if (number == 0) {
                text.textContent = '拜年了！点击领红包！';
            }
            setTimeout(xinChun, 1000);
        }
        xinChun();
    }else if (index==2){
        document.querySelector(".HB").addEventListener("click", baiNian);
        function baiNian() {
            if (document.querySelector(".hongBao").style.display == "none") {
                document.querySelector(".HB").style.display = "none";
                document.querySelector(".hongBao").style.display = "inline";
                document.querySelector(".up").style.display = "inline";
            }
        }
        baiNian();
    }
}

document.querySelector(".hongBao").addEventListener("click", daKai);
    function daKai(){
        document.querySelector(".hongBao").style.display = "none";
        document.querySelector(".up").style.display = "none";
        document.querySelector(".khb").style.display = "inline";
    }