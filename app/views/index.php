<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../common/common.css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>

        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- This will house the login/logout content -->

        <div class="wrapper-header">
            <div class="container-header">
                <div class="left">
                    <div class="logo">
                        <img src="assets/logo-large-09.png" alt="Smartcomm">
                    </div>
                </div>
                <div class="right">
                    <table class="table-contain-header" width="100%">
                        <tr>
                            <td class="left">SCHEDULING TOOL</td>
                            <td class="right">
                                <?php include('../../views/header.php'); ?>
                            </td>
                        </tr>
                    </table>
                </div>
        
            </div>  <!-- END wrapper-container-header -->
        </div> <!-- END wrapper-header-->


        <!-- this will house the main view of the content -->
        <div class="wrapper-view-content">
            <div class="container-view-content" id="app">

            </div>
           <?php

                include("documentation.php");
            ?>
        </div>




        <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
        <script>
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
        </script>

        <script src="assets/bundle.js" type="text/javascript"></script>
        <script src="../../common/common.js" type="text/javascript"></script>
        <script src="js/app.js" type="text/javascript"></script>



    </body>
</html>