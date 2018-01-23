<?php
//    var_dump($_SERVER);
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../common/common.css">
        <link rel="stylesheet" href="assets/css/commonsched.css">
        <!--  Using font-awesome -->
        <script src="https://use.fontawesome.com/7f86d44e53.js"></script>

    </head>
    <body>

        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- This will house the login/logout content -->
        <?php

        ?>
        <div class="wrapper-header">
            <div class="container-header">
                <div class="left">
                    <div class="logo">
                        <a href="<?php echo ROOT_ADDRESS; ?>"><img src="assets/logo-large-09.png" alt="Smartcomm"></a>
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
                <div class="loader">
                <span style="font-size: 18px;">Smartcomm Scheduler v1.0.0</span><br/><br/>
                <img src="assets/img/loading.svg" height="70" width="70" /><br/><br/>
                <span style="font-size: 12px;">Please wait...</span>
                </div>
            </div>

        </div>

         <?php
                include("documentation.php");
            ?>
        <script type="text/javascript">
            <?php
                include_once("react_api/initial_state.php");
            ?>
        </script>
        <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
        <script src="assets/js/bundle.js" type="text/javascript"></script>
        <script src="../../common/common.js" type="text/javascript"></script>
    </body>
</html>
