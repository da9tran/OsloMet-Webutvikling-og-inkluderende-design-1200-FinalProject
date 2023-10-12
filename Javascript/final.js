        //due to issues and complications we had to turn off the pathing between final.js and solution.html because several elements did not appear, so this javascript code is just here to show you what we began with 
        
        var teller1 = 0;
        var teller2 = 0;

        var imageTag = document.getElementsByClassName("imageTag");
        var imageTekst = document.getElementsByClassName("imageTekst");
        var SlideShowBox = document.getElementsByClassName("SlideShowBox");


        function NewAppPictures() {

            var images = [{
                Image: "appHome.PNG",
                info: "tekst som skal forklare bildet",
                altTekst: "les navnet",
                Title: "hover teksten",
            }, {

                Image: "appCoupons.PNG",
                info: "tekst som skal forklare bildet",
                altTekst: "les navnet",
                Title: "hover teksten",
            }]; //app pictures

            if (teller1 >= images.length) { //makes the slideshow continuous
                teller1 = 0;
            }
            if (teller1 < 0) {
                teller1 = images.length - 1;
            }

            imageTag[0].src = images[teller1].Image;
            imageTag[0].tabIndex = "0";
            imageTag[0].alt = images[teller1].altTekst;
            imageTag[0].title = images[teller1].Title;
            imageTekst[0].innerHTML = images[teller1].info;


            teller1 += 1;
        }

        function NewMachinePictures() {

            var images = [{
                Image: "appCoupons.PNG",
                info: "tekst som skal forklare bildet",
                altTekst: "les navnet",
                Title: "hover teksten"
            }, {

                Image: "appHome.PNG",
                info: "tekst som skal forklare bildet",
                altTekst: "les navnet",
                Title: "hover teksten"
            }]; //machine pictures

            if (teller2 >= images.length) { //makes the slideshow continuous
                teller2 = 0;
            }
            if (teller2 < 0) {
                teller2 = images.length - 1;
            }


            imageTag[1].src = (images[teller2].Image);
            imageTag[1].tabIndex = "0";
            imageTag[1].alt = images[teller2].altTekst;
            imageTag[1].title = images[teller2].Title;
            imageTekst[1].innerHTML = images[teller2].info;

            teller2 += 1;
        }


        //when the page opens, the slideshow starts, if javascript is on, it should start

        // SlideShowBox[0].style.display = "block";        
        SlideShowBox[1].style.display = "block";

        var interval1;
        var interval2;

        NewAppPictures();
        interval1 = setInterval(NewAppPictures, 10000); // runs the app slideshow every 10 seconds
        NewMachinePictures();
        interval2 = setInterval(NewMachinePictures, 10000); // runs the machine slideshow every 10 seconds


        function back(boolean) {
            if (boolean) {
                teller1 -= 2;
                clearInterval(interval1);
                NewAppPictures();
                interval1 = setInterval(NewAppPictures, 10000); // runs the app slideshow every 10 seconds
            } else {
                teller2 -= 2;
                clearInterval(interval2);
                NewMachinePictures();
                interval2 = setInterval(NewMachinePictures, 10000); // runs the machine slideshow every 10 seconds

            }
        }

        function next(boolean) {
            if (boolean) {
                clearInterval(interval1);
                NewAppPictures();
                interval1 = setInterval(NewAppPictures, 10000); // runs the app slideshow every 10 seconds
            } else {
                clearInterval(interval2);
                NewMachinePictures();
                interval2 = setInterval(NewMachinePictures, 10000); // runs the machine slideshow every 10 seconds
            }
        }