let lightMode = true;
        let formula = "";
    function switchMode() {
        if (lightMode) {
        document.getElementById("text").innerHTML = "Light";
        document.getElementById("text").style.color = "#f0ede5";
        document.getElementById("jd").style.color= "#f0ede5";
        document.getElementById("p1").style.color= "#f0ede5";
        document.getElementById("h2").style.color= "#f0ede5";
        document.getElementById("buttonDark").style.color= "#f0ede5";
        document.getElementById("contact").style.color= "#f0ede5";
        document.getElementById("dropbtn").style.color= "#f0ede5";
        document.getElementById("dropbtn").style.background= "#222021";
        document.getElementById("dropd1").style.color= "#f0ede5";
        document.getElementById("dropd2").style.color= "#f0ede5";
        document.getElementById("dropd3").style.color= "#f0ede5";
        document.getElementById("dropd4").style.color= "#f0ede5";
        document.getElementById("pjs").style.color= "#f0ede5";
        document.getElementById("pjsInfo").style.color= "#f0ede5";
        document.getElementById("pjsInfoX").style.color= "#f0ede5";
        document.getElementById("pjsLink").style.color= "#f0ede5";
        document.getElementById("bF").style.color= "#f0ede5";
        document.getElementById("bFInfo").style.color= "#f0ede5";
        document.getElementById("bokeotitle").style.color= "#f0ede5";
        document.getElementById("bokeoInfo").style.color= "#f0ede5";
        document.getElementById("bokeoInfoX").style.color= "#f0ede5";
        document.getElementById("lD").style.color= "#f0ede5";
        document.getElementById("lDInfo").style.color= "#f0ede5";
        document.getElementById("bC").style.color= "#f0ede5";
        document.getElementById("bCInfo").style.color= "#f0ede5";
        document.getElementById("bCInfoX").style.color= "#f0ede5";
        document.getElementById("invite").style.color= "#f0ede5";
        document.getElementById("inviteInfo").style.color= "#f0ede5";
        document.getElementById("lashes").style.color= "#f0ede5";
        document.getElementById("lashesInfo").style.color= "#f0ede5";
        document.getElementById("lashesInfoX").style.color= "#f0ede5";
        document.getElementById("anime").style.color= "#f0ede5";
        document.getElementById("animeInfo").style.color= "#f0ede5";
        document.getElementById("yourDoodles").style.color= "#f0ede5";
        document.getElementById("contact1").style.color= "#f0ede5";
        document.getElementById("emailAdd").style.color= "#f0ede5";
        document.getElementById("footer").style.color= "#f0ede5";
        document.body.style.background = "#222021";
        lightMode = false;
        } else {
            document.getElementById("text").innerHTML = "Dark";
            document.getElementById("text").style.color = "#333333";
            document.getElementById("jd").style.color= "#333333";
            document.getElementById("p1").style.color= "#333333";
            document.getElementById("h2").style.color= "#333333";
            document.getElementById("buttonDark").style.color= "#333333";
            document.getElementById("contact").style.color= "#333333";
            document.getElementById("dropbtn").style.color= "#333333";
            document.getElementById("dropbtn").style.background= "#f0ede5";
            document.getElementById("dropd1").style.color= "#333333";
            document.getElementById("dropd2").style.color= "#333333";
            document.getElementById("dropd3").style.color= "#333333";
            document.getElementById("dropd4").style.color= "#333333";
            document.getElementById("pjs").style.color= "#333333";
            document.getElementById("pjsInfo").style.color= "#333333";
            document.getElementById("pjsInfoX").style.color= "#333333";
            document.getElementById("pjsLink").style.color= "#333333";
            document.getElementById("bF").style.color= "#333333";
            document.getElementById("bFInfo").style.color= "#333333";
            document.getElementById("bokeotitle").style.color= "#333333";
            document.getElementById("bokeoInfo").style.color= "#333333";
            document.getElementById("bokeoInfoX").style.color= "#333333";
            document.getElementById("lD").style.color= "#333333";
            document.getElementById("lDInfo").style.color= "#333333";
            document.getElementById("bC").style.color= "#333333";
            document.getElementById("bCInfo").style.color= "#333333";
            document.getElementById("bCInfoX").style.color= "#333333";
            document.getElementById("invite").style.color= "#333333";
            document.getElementById("inviteInfo").style.color= "#333333";
            document.getElementById("lashes").style.color= "#333333";
            document.getElementById("lashesInfo").style.color= "#333333";
            document.getElementById("lashesInfoX").style.color= "#333333";
            document.getElementById("anime").style.color= "#333333";
            document.getElementById("animeInfo").style.color= "#333333";
            document.getElementById("yourDoodles").style.color= "#333333";
            document.getElementById("contact1").style.color= "#333333";
            document.getElementById("emailAdd").style.color= "#333333";
            document.getElementById("footer").style.color= "#333333";
            document.body.style.background = "#f0ede5";
            lightMode = true;
        }
    }

    function ValidateEmail(input) {

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.value.match(validRegex)) {
          alert("Valid email address!");
          document.form1.text1.focus();
          return true;
        } else {
          alert("Invalid email address!");
          document.form1.text1.focus();
          return false;
        }
      }