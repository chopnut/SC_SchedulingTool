<?php
 
DEFINED("DBDRIVER")or DEFINE("DBDRIVER","mysql");
DEFINED("DBHOST")or DEFINE("DBHOST","localhost");
DEFINED("DBNAME")or DEFINE("DBNAME","sc-webapps");
DEFINED("DBUSER")or DEFINE("DBUSER","sc-user");
DEFINED("DBPASS")or DEFINE("DBPASS","password");

DEFINED("SQLSRV_DBDRIVER")or DEFINE("SQLSRV_DBDRIVER","sqlsrv");
DEFINED("SQLSRV_DBHOST")or DEFINE("SQLSRV_DBHOST","192.168.70.8");
DEFINED("SQLSRV_DBNAME")or DEFINE("SQLSRV_DBNAME","PWIN171");
DEFINED("SQLSRV_DBUSER")or DEFINE("SQLSRV_DBUSER","prism_user");
DEFINED("SQLSRV_DBPASS")or DEFINE("SQLSRV_DBPASS","CAT34FROG");

// needs to change to production server 
DEFINED("ROOT_ADDRESS")or DEFINE("ROOT_ADDRESS", "http://192.168.70.83/webapps/"); // localhost / localhost / 192.168.70.83
DEFINED("RETURN_MAIL_URL")or DEFINE("RETURN_MAIL_URL","http://192.168.70.83/returnmail/");

// All about reconciliation report
DEFINED("INTERNAL_REPORT_URL")or DEFINE("INTERNAL_REPORT_URL",ROOT_ADDRESS."internalreports/public");
DEFINED("RECON_REPORT_RECENT_COUNT_DAYS") or DEFINE("RECON_REPORT_RECENT_COUNT_DAYS",25);
DEFINED("INTERNAL_REPORT_UPLOAD_FOLDER") or DEFINE("INTERNAL_REPORT_UPLOAD_FOLDER","uploads");
DEFINED("INTERNAL_REPORT_UPLOAD_MANIFEST_FOLDER")or DEFINE("INTERNAL_REPORT_UPLOAD_MANIFEST_FOLDER","uploads/manifests");
DEFINED("INTERNAL_REPORT_UPLOAD_REPORTS_FOLDER")or DEFINE("INTERNAL_REPORT_UPLOAD_REPORTS_FOLDER","uploads/reports");
DEFINED("INTERNAL_REPORT_UPLOAD_REPORTS_FOLDER_MANUAL")or DEFINE("INTERNAL_REPORT_UPLOAD_REPORTS_FOLDER_MANUAL","uploads/reports/manual_");
DEFINED("INTERNAL_REPORT_UPLOAD_MANIFEST_TYPES_ALLOWED")or DEFINE("INTERNAL_REPORT_UPLOAD_MANIFEST_TYPES_ALLOWED","json,pdf,doc,txt");
DEFINED("INTERNAL_REPORT_SEARCH_MIN_CHAR")or DEFINE("INTERNAL_REPORT_SEARCH_MIN_CHAR", 5);
DEFINED("INTERNAL_REPORT_ZERO_COUNT_PADDING")or DEFINE("INTERNAL_REPORT_ZERO_COUNT_PADDING",6);

// All about scheduling tool below
DEFINED("SCHEDULING_URL")or DEFINE("SCHEDULING_URL",ROOT_ADDRESS."schedulingtool/public");
DEFINED("EMPLOYEE_WEBSITE_URL")or DEFINE("EMPLOYEE_WEBSITE_URL",ROOT_ADDRESS."employeesite/public");
DEFINED("NUMBER_PERPAGE_REPORTS")or DEFINE("NUMBER_PERPAGE_REPORTS","25");



$tableAdmin  = ["ir_clients"=>array(),"ir_reports"=>array()];
// Admin section is for administering CLIENTS , EMPLOYEE and LOGIN DETAILS
$tableAdmin["ir_clients"]["label"] = "Manage Clients";
$tableAdmin["ir_clients"]["desc"] = "Manage clients records vital for Reconciliation Report and Scheduling tool.";


$tableAdmin["login"]["label"] = "Manage user logins";
$tableAdmin["login"]["desc"] = "You can manage user logins for everyone";

// Admin label corresponds to the user type, if you add more user level edit this to have same user number
// USER TYPE LEVEL 

// 0 - super admin can do anything
// 1 - normal admin
// 2 - normal user
$lblType = array();
$lblType[0] = "Administration";
$lblType[1] = "Administration";
$lblType[2] = "Edit your details";

$manageHeaders = array();
$manageHeaders['login'] = array();
$manageHeaders['login']['list'] = 'User list';
$manageHeaders['login']['edit'] = 'Editing <span>%s</span>';
$manageHeaders['login']['new'] = 'Create new login';


$manageHeaders['ir_clients'] = array();
$manageHeaders['ir_clients']['list'] = 'Client list';
$manageHeaders['ir_clients']['edit'] = 'Editing <span>%s</span>';
$manageHeaders['ir_clients']['new'] = 'Create new Client';

$usertype[0] = 'Super Admin';
$usertype[1] = 'Admin';
$usertype[2] = 'User';



?>