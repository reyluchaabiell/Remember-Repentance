function calculateLife() {
    var age = document.getElementById("ageInput").value;
    if (age === "" || age < 0 || age > 120) {
        alert("Tolong masukkan umur yang valid!");
        return;
    }
    var yearsLeft = 72 - age;
    var daysLeft = yearsLeft * 365;
    var weeksLeft = yearsLeft * 52;
    var monthsLeft = yearsLeft * 12;

    var message = "Kamu punya " + daysLeft + " hari, " + weeksLeft + " minggu, dan " + monthsLeft + " bulan tersisa. <br><br>Gunakan waktumu dengan baik dan ingat untuk bertaubat sebelum menyesal!";
    document.getElementById("result").innerHTML = message;
}
