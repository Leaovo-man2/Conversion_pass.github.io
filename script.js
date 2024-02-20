function convert() {
    var inches = parseFloat(document.getElementById("inputInches").value);
    if (!isNaN(inches)) {
        var centimeters = inches * 2.54;
        document.getElementById("result").innerText = inches + " 英寸 = " + centimeters.toFixed(2) + " 厘米";
    } else {
        document.getElementById("result").innerText = "请输入有效的数字！";
    }
}
