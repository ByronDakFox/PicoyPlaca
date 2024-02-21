<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pico y Placa Predictor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- style css -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- fevicon -->
<link rel="icon" href="img/transporte.png" type="image/gif" />
</head>
<body>
    <!--header section start -->
    <div id="index.html" class="header_section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="logo"><a href="index.html"><img src="img/placasearch.png"></a></div>
                </div>
                <div class="col-sm-6 col-lg-9">
                    <div class="menu_text">
                        <ul>
                            <li><a href="#">Home</a></li>                                                    
                            <li><a href="#about">About</a></li>
                            <li><a href="#taxis">Search</a></li>
                            <li><a href="#booking">Booking</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#"><img src="img/search-icon.png"></a></li>
                            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <div class="overlay-content">
                    <a href="index.html">Home</a>
                    <a href="#">About</a>
                    <a href="#">Taxi</a>
                    <a href="#">Booking</a>
                    <a href="#">Contact Us</a>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- header section end -->
    <!-- form start -->
    <div id="booking" class="ride_section layout_padding">
    </div>
    <div id="booking" class="ride_section layout_padding">
        <div class="container">
        <div class="ride_main">
            <h1 class="ride_text"><span style="color: #f4db31;">With Uloax</span></h1>
        </div>
        </div>
    </div>
    <div class="ride_section_2 layout_padding">
        <div class="container">
        <div class="row">
            <div class="col-sm-4">
            <div class="image_3"><img src="img/circulacion.png"></div>
        </div>
        <div class="col-sm-8">
            <h1 class="cabe_text">Pico y Placa Predictor</h1>
            <form id="predictionForm">
                <div class="form-group">
                    <label for="plateNumber">Número de Placa:</label>
                    <input type="text" id="plateNumber" name="plateNumber" required><br><br>
                </div>
                <div class="form-group">
                    <label for="date">Fecha:</label>
                    <input type="date" id="date" name="date" required><br><br>
                </div>
                <div class="form-group">
                    <label for="hour">Hora:</label>
                    <input type="time" id="hour" name="hour" required><br><br>
                </div>
                <button type="submit" type="button" class="btn btn-success">Consultar</button>
            </form>
            <div id="result"></div>
        </div>
        </div>
    </div>
</div>
<!-- form end -->
<!-- section footer start -->
<div class="section_footer">
    <div class="container"> 
        <div class="footer_section_2">
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <h2 class="account_text">Follow Us</h2>
                    <div class="image-icon"><img src="img/fb-icon.png"><span class="fb_text"><a href="#">Facebook</a></span></div>
                    <div class="image-icon"><img src="img/twitter-icon.png"><span class="fb_text"><a href="#">Twitter</a></span></div>
                    <div class="image-icon"><img src="img/youtube-icon.png"><span class="fb_text"><a href="#">Youtube</a></span></div>            
                    <div class="image-icon"><img src="img/instagram-icon.png"><span class="fb_text"><a href="#">Instagram</a></span></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- section footer end -->
<!-- copyright section start -->
<div class="copyright_section">
    <div class="container">
        <p class="copyright">2024 ©All Rights Reserved. <a href="#">Test html Templates</a></p>
    </div>
</div>
    <!-- javascript --> 
    <script src="js/placa.js" defer></script>
</body>
</html>
