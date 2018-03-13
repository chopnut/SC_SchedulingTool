-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2018 at 06:11 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sc-webapps`
--

-- --------------------------------------------------------

--
-- Table structure for table `ew_employee_details`
--

CREATE TABLE `ew_employee_details` (
  `employee_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `job_type` char(2) DEFAULT NULL,
  `annual_leave` double DEFAULT NULL,
  `sick_leave` double DEFAULT NULL,
  `pay_slip_emailed` tinyint(1) DEFAULT NULL,
  `answer_to` int(11) DEFAULT NULL,
  `annual_leave_request` char(1) DEFAULT NULL,
  `base_hourly_rate` double DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `employee_code` char(6) DEFAULT NULL,
  `super_percent` double DEFAULT NULL,
  `below_pay_date_number` int(11) DEFAULT NULL,
  `year_to_date` double DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ew_employer_details`
--

CREATE TABLE `ew_employer_details` (
  `id` int(11) NOT NULL,
  `employer_name` varchar(50) DEFAULT NULL,
  `abn` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ew_payslips`
--

CREATE TABLE `ew_payslips` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `hours_worked` double DEFAULT NULL,
  `period_start` datetime DEFAULT NULL,
  `period_end` datetime DEFAULT NULL,
  `tax` double DEFAULT NULL,
  `gross` double DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `super` double DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ir_clients`
--

CREATE TABLE `ir_clients` (
  `client_id` int(11) NOT NULL,
  `client` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `client_link_ftp` varchar(150) CHARACTER SET utf8mb4 DEFAULT NULL,
  `client_link_prism` varchar(150) DEFAULT NULL,
  `criteria_columns` text CHARACTER SET utf8mb4,
  `criteria_each_file` text,
  `filetypes` text CHARACTER SET utf8mb4,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `folder_location` text,
  `upload_all_files` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ir_clients`
--

INSERT INTO `ir_clients` (`client_id`, `client`, `client_link_ftp`, `client_link_prism`, `criteria_columns`, `criteria_each_file`, `filetypes`, `created_at`, `updated_at`, `folder_location`, `upload_all_files`) VALUES
(1, 'DEAF Services', 'deaf', 'DEA002', '{"file": ".*","lookforfiles":"","optimizefoldersearch":".*(job%[0-9]+).*"}', '', 'txt', '2017-08-30 14:45:12', '2017-10-11 05:58:12', '\\\\SCSERVER\\Production\\Deaf Lottery Australia\\', 1),
(2, 'Mater Foundation & Misericordiae Ltd - Reports Only', 'mater', 'MAT003', '{"file": ".*","lookforfiles":"","optimizefoldersearch":".*(job%[0-9]+).*"}', '{"materdaily": { \r\n"mode":"group_by_files",\r\n"file":"\r\nCIP,\r\nCFC,\r\nCFK,\r\nC4K,\r\nC4C_77,\r\nC4C_77.*MATER[^vip],\r\nC4C_77.*MATERVIP,\r\n----------------------------------,\r\nC4C_78,\r\nC4C_78.*MATER[^vip],\r\nC4C_78.*MATERVIP,\r\n----------------------------------,\r\nC4C_79,\r\nC4C_79.*MATER[^vip],\r\nC4C_79.*MATERVIP,\r\n----------------------------------,\r\nPOW[^vip],\r\nSOV[^vip],\r\nPOWVIP,\r\nSOVVIP,\r\n----------------------------------,\r\nMPH.*MATER[^vip],\r\nMPH_273.*MATER[^vip],\r\nMPH_274.*MATER[^vip],\r\nMPH_275.*MATER[^vip],\r\nMPH_276.*MATER[^vip],\r\n----------------------------------,\r\nMPH.*MATERVIP,\r\nMPH_273.*MATERVIP,\r\nMPH_274.*MATERVIP,\r\nMPH_275.*MATERVIP,\r\nMPH_276.*MATERVIP,\r\n----------------------------------,\r\nMPH.*POW[^vip],\r\nMPH.*SOV[^vip],\r\nMPH.*POWVIP,\r\nMPH.*SOVVIP,\r\n----------------------------------,\r\nMPH_273.*LIONS,\r\nMPH_274.*LIONS,\r\n----------------------------------,\r\nMPH_273.*LIONS[^vip],\r\nMPH_274.*LIONS[^vip],\r\n----------------------------------,\r\nMPH_273.*LIONSVIP,\r\nMPH_274.*LIONSVIP\r\n",\r\n"exclude": "",\r\n"exclude_header": 1,\r\n"default_days_ago": "-10"\r\n}}', 'txt', '2017-08-30 14:45:12', '2017-12-06 04:47:00', '\\\\SCSERVER\\Production\\Mater Foundation\\,\\\\SCSERVER\\Production\\Mater Misericordiae Ltd\\', 1),
(7, 'RSL', 'rsl', 'rsl001', '{"file": ".*","exclude":"","lookforfiles":"","optimizefoldersearch":".*(job%[0-9]+).*"}', '{"rsldaily":{\r\n"file":"/^mail/i",\r\n"exclude":"preorder,sample",\r\n"mode":"line_by_line",\r\n"width":"1500px",\r\n"exclude_header":0,\r\n"rowcount":"2",\r\n"delimiter":"|",\r\n"columns": [\r\n\r\n{ "id":"whitepaper","children":[],"columns":[], "text":"White Paper","visible":1,"value":"$canc+$ddsa+$welc"},\r\n\r\n{ "id":"diggers","children":[\r\n\r\n{"id":"au","children":[],"columns":[{"col":"10","value":"AUSTRALIA"}],"text":"AU","visible":1},\r\n{"id":"nz","children":[],"columns":[{"col":"10","value":"NEW ZEALAND"}],"text":"NZ","visible":1},\r\n{"id":"os","children":[],"columns":[{"col":"10","value":"*"}],"text":"OS","visible":1}\r\n\r\n],"columns":[{"col":"50","value":"0|8|9"}], "text":"Diggers","visible":0,"value":""}, \r\n\r\n{"id":"rollovers","children":[\r\n\r\n{"id":"au","children":[],"columns":[{"col":"10","value":"AUSTRALIA"}],"text":"AU","visible":1},\r\n{"id":"nz","children":[],"columns":[{"col":"10","value":"NEW ZEALAND"}],"text":"NZ","visible":1},\r\n{"id":"os","children":[],"columns":[{"col":"10","value":"*"}],"text":"OS","visible":1}\r\n\r\n],"columns":[{"col":"50","value":"3|8|9"}],"text":"Roll Overs","visible":0},\r\n\r\n{"id":"prospect","children":[\r\n\r\n{"id":"au","children":[],"columns":[{"col":"10","value":"AUSTRALIA"}],"text":"AU","visible":1},\r\n{"id":"nz","children":[],"columns":[{"col":"10","value":"NEW ZEALAND"}],"text":"NZ","visible":1},\r\n{"id":"os","children":[],"columns":[{"col":"10","value":"*"}],"text":"OS","visible":1}\r\n\r\n],"columns":[{"col":"50","value":"1|2|4|5"}],"text":"Prospects","visible":0,"value":""},\r\n\r\n{"id":"ro","children":[],"columns":[{"col":"50","value":3}],"text":"Black on Stock -RO","visible":1},\r\n{"id":"welc","children":[],"columns":[{"col":"50","value":"8|9"}],"text":"Colour on White -Welcome","visible":1},\r\n\r\n{"id":"prosp","children":[],"columns":[{"col":"50","value":1}],"text":"Black On Stock -Prospects","visible":1},\r\n{"id":"ddsa","children":[],"columns":[{"col":"50","value":"2|4"}],"text":"Black On White -DDSA","visible":1},\r\n\r\n{"id":"canc","children":[],"columns":[{"col":"50","value":5}],"text":"Cancellation","visible":1},\r\n{"id":"colorcount","children":[],"columns":[],"text":"Colour Count","visible":1,"value":"$welc+$canc"}\r\n]\r\n}}', 'txt', '2017-09-26 01:51:34', '2017-10-11 05:57:21', '\\\\SCSERVER\\Production\\RSL Art Union\\', 1),
(8, 'Allianz', 'allianz', 'allianz', '{"file": ".*","lookforfiles":"","optimizefoldersearch":".*(job%[0-9]+).*"}', '', 'txt', '2017-09-27 23:03:35', '2017-10-11 05:59:33', '\\\\SCSERVER\\Production\\Allianz Global Assistance\\', NULL),
(9, 'Mater Hospital SMS', 'mater_hospital_sms', 'MAT003', '', '', 'txt', '2018-01-15 22:57:35', '2018-01-16 00:49:09', '', 1),
(10, 'BlueCare', 'bluecare', 'bluecare', '', '', 'txt', '2018-01-16 00:48:44', '2018-01-16 00:48:44', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ir_reports`
--

CREATE TABLE `ir_reports` (
  `report_id` int(11) NOT NULL,
  `raw_data` text CHARACTER SET utf8mb4,
  `client_name` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `total_received` int(11) DEFAULT NULL,
  `total_outputted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `job_bag_id` int(11) DEFAULT NULL,
  `criteria_column_data` text,
  `criteria_each_link` varchar(255) DEFAULT NULL,
  `local_path` text,
  `files_uploaded` text,
  `file_manual_upload` varchar(255) DEFAULT NULL,
  `enable_upload` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='meta data for files from ftp server';

--
-- Dumping data for table `ir_reports`
--

INSERT INTO `ir_reports` (`report_id`, `raw_data`, `client_name`, `updated_at`, `client_id`, `total_received`, `total_outputted`, `created_at`, `job_bag_id`, `criteria_column_data`, `criteria_each_link`, `local_path`, `files_uploaded`, `file_manual_upload`, `enable_upload`) VALUES
(1, 'C4C_77__Paper_MATERVIP_SMARTCOMM_22092017024243.txt - 95 lines', 'mater', '2017-10-05 01:49:09', NULL, 95, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'C4C_77__Paper_MATERVIP_SMARTCOMM_22092017024243.txt', NULL, b'1'),
(2, 'C4C_77__Paper_MATER_SMARTCOMM_22092017024243.txt - 28 lines', 'mater', '2017-10-05 01:49:10', NULL, 28, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'C4C_77__Paper_MATER_SMARTCOMM_22092017024243.txt', NULL, b'1'),
(3, 'C4C_77__Paper_MATER_SMARTCOMM_22092017024244.txt - 12 lines', 'mater', '2017-10-05 01:49:11', NULL, 12, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'C4C_77__Paper_MATER_SMARTCOMM_22092017024244.txt', NULL, b'1'),
(4, 'CIP_10024__Paper_MATER_SMARTCOMM_22092017024348.txt - 20 lines', 'mater', '2017-10-05 01:49:13', NULL, 20, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'CIP_10024__Paper_MATER_SMARTCOMM_22092017024348.txt', NULL, b'1'),
(5, 'MPH_273__Paper_MATERVIP_SMARTCOMM_22092017122312.txt - 115 lines', 'mater', '2017-10-05 01:49:15', NULL, 115, NULL, '2017-09-22 15:12:45', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_MATERVIP_SMARTCOMM_22092017122312.txt', NULL, b'1'),
(6, 'MPH_273__Paper_MATER_SMARTCOMM_22092017030039.txt - 1,201 lines', 'mater', '2017-10-05 01:49:16', NULL, 1201, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'MPH_273__Paper_MATER_SMARTCOMM_22092017030039.txt', NULL, b'1'),
(7, 'MPH_273__Paper_POWVIP_SMARTCOMM_22092017122313.txt - 21 lines', 'mater', '2017-10-05 01:49:17', NULL, 21, NULL, '2017-09-22 15:12:45', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_POWVIP_SMARTCOMM_22092017122313.txt', NULL, b'1'),
(8, 'MPH_273__Paper_POW_SMARTCOMM_22092017030039.txt - 140 lines', 'mater', '2017-10-05 01:49:18', NULL, 140, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'MPH_273__Paper_POW_SMARTCOMM_22092017030039.txt', NULL, b'1'),
(9, 'MPH_273__Paper_SOVVIP_SMARTCOMM_22092017122313.txt - 4 lines', 'mater', '2017-10-05 01:49:20', NULL, 4, NULL, '2017-09-22 15:12:45', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_SOVVIP_SMARTCOMM_22092017122313.txt', NULL, b'1'),
(10, 'MPH_273__Paper_SOV_SMARTCOMM_22092017030039.txt - 2 lines', 'mater', '2017-10-05 01:49:21', NULL, 2, NULL, '2017-09-22 15:12:45', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_24', 'MPH_273__Paper_SOV_SMARTCOMM_22092017030039.txt', NULL, b'1'),
(11, 'MHS_250917.txt - 627 lines', 'mater', '2017-10-10 13:11:25', NULL, 627, NULL, '2017-09-25 11:05:54', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\25.09', 'MHS_250917.txt', NULL, b'1'),
(12, 'MHS_3Wk_appfailtoconfirmGP_250917.txt - 10 lines', 'mater', '2017-10-10 13:11:30', NULL, 10, NULL, '2017-09-25 11:05:54', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\25.09', 'MHS_3Wk_appfailtoconfirmGP_250917.txt', NULL, b'1'),
(13, 'MHS_6Wk_ExpRefGP_250917.txt - 16 lines', 'mater', '2017-10-10 13:11:35', NULL, 16, NULL, '2017-09-25 11:05:54', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\25.09', 'MHS_6Wk_ExpRefGP_250917.txt', NULL, b'1'),
(14, 'MHS_6Wk_ExpRef_250917.txt - 26 lines', 'mater', '2017-10-10 13:11:39', NULL, 26, NULL, '2017-09-25 11:05:54', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\25.09', 'MHS_6Wk_ExpRef_250917.txt', NULL, b'1'),
(15, 'C4C_77__Paper_MATERVIP_SMARTCOMM_25092017023403.txt - 12 lines', 'mater', '2017-10-05 01:48:49', NULL, 12, NULL, '2017-09-25 15:09:43', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'C4C_77__Paper_MATERVIP_SMARTCOMM_25092017023403.txt', NULL, b'1'),
(16, 'C4C_77__Paper_MATER_SMARTCOMM_25092017023403.txt - 33 lines', 'mater', '2017-10-05 01:48:50', NULL, 33, NULL, '2017-09-25 15:09:43', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'C4C_77__Paper_MATER_SMARTCOMM_25092017023403.txt', NULL, b'1'),
(17, 'CIP_10024__Paper_MATER_SMARTCOMM_25092017023432.txt - 14 lines', 'mater', '2017-10-05 01:48:51', NULL, 14, NULL, '2017-09-25 15:09:43', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'CIP_10024__Paper_MATER_SMARTCOMM_25092017023432.txt', NULL, b'1'),
(18, 'MPH_273__Paper_MATERVIP_SMARTCOMM_25092017021815.txt - 31 lines', 'mater', '2017-10-05 01:48:53', NULL, 31, NULL, '2017-09-25 15:09:43', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_MATERVIP_SMARTCOMM_25092017021815.txt', NULL, b'1'),
(19, 'MPH_273__Paper_MATER_SMARTCOMM_25092017024016.txt - 687 lines', 'mater', '2017-10-05 01:48:55', NULL, 687, NULL, '2017-09-25 15:09:43', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'MPH_273__Paper_MATER_SMARTCOMM_25092017024016.txt', NULL, b'1'),
(20, 'MPH_273__Paper_POWVIP_SMARTCOMM_25092017020817.txt - 11 lines', 'mater', '2017-10-05 01:48:56', NULL, 11, NULL, '2017-09-25 15:09:43', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_POWVIP_SMARTCOMM_25092017020817.txt', NULL, b'1'),
(21, 'MPH_273__Paper_POW_SMARTCOMM_25092017024016.txt - 56 lines', 'mater', '2017-10-05 01:48:57', NULL, 56, NULL, '2017-09-25 15:09:43', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_25', 'MPH_273__Paper_POW_SMARTCOMM_25092017024016.txt', NULL, b'1'),
(22, 'MPH_273__Paper_SOVVIP_SMARTCOMM_25092017020729.txt - 7 lines', 'mater', '2017-10-05 01:48:59', NULL, 7, NULL, '2017-09-25 15:09:43', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_9', 'MPH_273__Paper_SOVVIP_SMARTCOMM_25092017020729.txt', NULL, b'1'),
(23, 'MHS_260917.txt - 450 lines', 'mater', '2017-10-10 13:11:01', NULL, 450, NULL, '2017-09-26 11:05:50', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\26.09', 'MHS_260917.txt', NULL, b'1'),
(24, 'MHS_3Wk_appfailtoconfirmGP_260917.txt - 9 lines', 'mater', '2017-10-10 13:11:06', NULL, 9, NULL, '2017-09-26 11:05:50', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\26.09', 'MHS_3Wk_appfailtoconfirmGP_260917.txt', NULL, b'1'),
(25, 'MHS_6Wk_ExpRefGP_260917.txt - 19 lines', 'mater', '2017-10-10 13:11:11', NULL, 19, NULL, '2017-09-26 11:05:50', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\26.09', 'MHS_6Wk_ExpRefGP_260917.txt', NULL, b'1'),
(26, 'MHS_6Wk_ExpRef_260917.txt - 40 lines', 'mater', '2017-10-10 13:11:16', NULL, 40, NULL, '2017-09-26 11:05:50', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\26.09', 'MHS_6Wk_ExpRef_260917.txt', NULL, b'1'),
(27, 'WLOPBreachLetter_26092017.txt - 40 lines', 'mater', '2017-10-10 13:11:21', NULL, 40, NULL, '2017-09-26 11:05:50', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\26.09', 'WLOPBreachLetter_26092017.txt', NULL, b'1'),
(28, 'MPH_274__Paper_LION_SMARTCOMM_09022017122915_Test.txt - 5 lines', 'mater', '2017-10-05 01:48:27', NULL, 5, NULL, '2017-09-26 11:47:08', 66996, NULL, '', 'S:\\Mater Foundation\\Job 066996 - 274 Daily Ticket set ups\\CLIENT_FILES', 'MPH_274__Paper_LION_SMARTCOMM_09022017122915_Test.txt', NULL, b'1'),
(29, 'MPH_274__Paper_MATER_SMARTCOMM_09022017122915_Test.txt - 9 lines', 'mater', '2017-10-05 01:48:30', NULL, 9, NULL, '2017-09-26 11:47:08', 66996, NULL, '', 'S:\\Mater Foundation\\Job 066996 - 274 Daily Ticket set ups\\CLIENT_FILES', 'MPH_274__Paper_MATER_SMARTCOMM_09022017122915_Test.txt', NULL, b'1'),
(30, 'MPH_274__Paper_POW_SMARTCOMM_09022017122915_Test.txt - 10 lines', 'mater', '2017-10-05 01:48:33', NULL, 10, NULL, '2017-09-26 11:47:08', 66996, NULL, '', 'S:\\Mater Foundation\\Job 066996 - 274 Daily Ticket set ups\\CLIENT_FILES', 'MPH_274__Paper_POW_SMARTCOMM_09022017122915_Test.txt', NULL, b'1'),
(31, 'MPH_274__Paper_SOV_SMARTCOMM_09022017122915_Test.txt - 9 lines', 'mater', '2017-10-05 01:48:36', NULL, 9, NULL, '2017-09-26 11:47:08', 66996, NULL, '', 'S:\\Mater Foundation\\Job 066996 - 274 Daily Ticket set ups\\CLIENT_FILES', 'MPH_274__Paper_SOV_SMARTCOMM_09022017122915_Test.txt', NULL, b'1'),
(32, 'MPH_273__Paper_LION_SMARTCOMM_29082016070255.txt - 2 lines', 'mater', '2017-10-05 01:48:21', NULL, 2, NULL, '2017-09-26 12:30:57', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\CLIENT_FILES\\MPH', 'MPH_273__Paper_LION_SMARTCOMM_29082016070255.txt', NULL, b'1'),
(33, 'MPH_273__Paper_Mater_SMARTCOMM_29082016070255.txt - 6 lines', 'mater', '2017-10-05 01:48:22', NULL, 6, NULL, '2017-09-26 12:30:57', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\CLIENT_FILES\\MPH', 'MPH_273__Paper_Mater_SMARTCOMM_29082016070255.txt', NULL, b'1'),
(34, 'MPH_273__Paper_POW_SMARTCOMM_29082016070255.txt - 4 lines', 'mater', '2017-10-05 01:48:24', NULL, 4, NULL, '2017-09-26 12:30:57', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\CLIENT_FILES', 'MPH_273__Paper_POW_SMARTCOMM_29082016070255.txt', NULL, b'1'),
(35, 'MPH_273__Paper_SOV_SMARTCOMM_29082016070255.txt - 3 lines', 'mater', '2017-10-05 01:48:25', NULL, 3, NULL, '2017-09-26 12:30:57', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\CLIENT_FILES', 'MPH_273__Paper_SOV_SMARTCOMM_29082016070255.txt', NULL, b'1'),
(36, 'C4C_77__Paper_MATER_SMARTCOMM_26092017012750.txt - 10 lines', 'mater', '2017-10-05 01:48:10', NULL, 10, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'C4C_77__Paper_MATER_SMARTCOMM_26092017012750.txt', NULL, b'1'),
(37, 'C4C_77__Paper_MATER_SMARTCOMM_26092017012751.txt - 10 lines', 'mater', '2017-10-05 01:48:11', NULL, 10, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'C4C_77__Paper_MATER_SMARTCOMM_26092017012751.txt', NULL, b'1'),
(38, 'CFK_2026__Paper_MATERVIP_SMARTCOMM_26092017012829.txt - 2 lines', 'mater', '2017-10-05 01:48:12', NULL, 2, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'CFK_2026__Paper_MATERVIP_SMARTCOMM_26092017012829.txt', NULL, b'1'),
(39, 'CIP_10024__Paper_MATER_SMARTCOMM_26092017012810.txt - 6 lines', 'mater', '2017-10-05 01:48:13', NULL, 6, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'CIP_10024__Paper_MATER_SMARTCOMM_26092017012810.txt', NULL, b'1'),
(40, 'MPH_273__Paper_MATERVIP_SMARTCOMM_26092017012713.txt - 24 lines', 'mater', '2017-10-05 01:48:15', NULL, 24, NULL, '2017-09-26 14:51:10', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_MATERVIP_SMARTCOMM_26092017012713.txt', NULL, b'1'),
(41, 'MPH_273__Paper_MATER_SMARTCOMM_26092017020830.txt - 222 lines', 'mater', '2017-10-05 01:48:16', NULL, 222, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'MPH_273__Paper_MATER_SMARTCOMM_26092017020830.txt', NULL, b'1'),
(42, 'MPH_273__Paper_POWVIP_SMARTCOMM_26092017011919.txt - 8 lines', 'mater', '2017-10-05 01:48:18', NULL, 8, NULL, '2017-09-26 14:51:10', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_POWVIP_SMARTCOMM_26092017011919.txt', NULL, b'1'),
(43, 'MPH_273__Paper_POW_SMARTCOMM_26092017020830.txt - 17 lines', 'mater', '2017-10-05 01:48:19', NULL, 17, NULL, '2017-09-26 14:51:10', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_26', 'MPH_273__Paper_POW_SMARTCOMM_26092017020830.txt', NULL, b'1'),
(44, 'MPH_273__Paper_SOVVIP_SMARTCOMM_26092017011819.txt - 4 lines', 'mater', '2017-10-05 01:48:20', NULL, 4, NULL, '2017-09-26 14:51:10', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_SOVVIP_SMARTCOMM_26092017011819.txt', NULL, b'1'),
(45, 'MHS_270917.txt - 552 lines', 'mater', '2017-10-10 13:10:37', NULL, 552, NULL, '2017-09-27 11:06:08', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\27.09', 'MHS_270917.txt', NULL, b'1'),
(46, 'MHS_3Wk_appfailtoconfirmGP_270917.txt - 13 lines', 'mater', '2017-10-10 13:10:42', NULL, 13, NULL, '2017-09-27 11:06:08', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\27.09', 'MHS_3Wk_appfailtoconfirmGP_270917.txt', NULL, b'1'),
(47, 'MHS_6Wk_ExpRefGP_270917.txt - 16 lines', 'mater', '2017-10-10 13:10:47', NULL, 16, NULL, '2017-09-27 11:06:08', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\27.09', 'MHS_6Wk_ExpRefGP_270917.txt', NULL, b'1'),
(48, 'MHS_6Wk_ExpRef_270917.txt - 29 lines', 'mater', '2017-10-10 13:10:52', NULL, 29, NULL, '2017-09-27 11:06:08', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\27.09', 'MHS_6Wk_ExpRef_270917.txt', NULL, b'1'),
(49, 'WLOPBreachLetter_27092017.txt - 20 lines', 'mater', '2017-10-10 13:10:56', NULL, 20, NULL, '2017-09-27 11:06:08', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\27.09', 'WLOPBreachLetter_27092017.txt', NULL, b'1'),
(50, 'C4C_77__Paper_MATERVIP_SMARTCOMM_27092017023557.txt - 7 lines', 'mater', '2017-10-05 01:47:46', NULL, 7, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'C4C_77__Paper_MATERVIP_SMARTCOMM_27092017023557.txt', NULL, b'1'),
(51, 'C4C_77__Paper_MATER_SMARTCOMM_27092017023557.txt - 12 lines', 'mater', '2017-10-05 01:47:47', NULL, 12, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'C4C_77__Paper_MATER_SMARTCOMM_27092017023557.txt', NULL, b'1'),
(52, 'CFK_2026__Paper_MATERVIP_SMARTCOMM_27092017023640.txt - 2 lines', 'mater', '2017-10-05 01:47:48', NULL, 2, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'CFK_2026__Paper_MATERVIP_SMARTCOMM_27092017023640.txt', NULL, b'1'),
(53, 'CIP_10024__Paper_MATER_SMARTCOMM_27092017023622.txt - 14 lines', 'mater', '2017-10-05 01:47:49', NULL, 14, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'CIP_10024__Paper_MATER_SMARTCOMM_27092017023622.txt', NULL, b'1'),
(54, 'MPH_273__Paper_MATERVIP_SMARTCOMM_27092017023518.txt - 103 lines', 'mater', '2017-10-05 01:47:51', NULL, 103, NULL, '2017-09-27 14:52:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_MATERVIP_SMARTCOMM_27092017023518.txt', NULL, b'1'),
(55, 'MPH_273__Paper_MATER_SMARTCOMM_27092017024114.txt - 653 lines', 'mater', '2017-10-05 01:47:52', NULL, 653, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'MPH_273__Paper_MATER_SMARTCOMM_27092017024114.txt', NULL, b'1'),
(56, 'MPH_273__Paper_MATER_SMARTCOMM_27092017024115.txt - 24 lines', 'mater', '2017-10-05 01:47:53', NULL, 24, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'MPH_273__Paper_MATER_SMARTCOMM_27092017024115.txt', NULL, b'1'),
(57, 'MPH_273__Paper_POWVIP_SMARTCOMM_27092017022910.txt - 46 lines', 'mater', '2017-10-05 01:47:55', NULL, 46, NULL, '2017-09-27 14:52:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_POWVIP_SMARTCOMM_27092017022910.txt', NULL, b'1'),
(58, 'MPH_273__Paper_POW_SMARTCOMM_27092017024115.txt - 12 lines', 'mater', '2017-10-05 01:47:56', NULL, 12, NULL, '2017-09-27 14:52:53', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_27', 'MPH_273__Paper_POW_SMARTCOMM_27092017024115.txt', NULL, b'1'),
(59, 'MPH_273__Paper_SOVVIP_SMARTCOMM_27092017022722.txt - 14 lines', 'mater', '2017-10-05 01:47:57', NULL, 14, NULL, '2017-09-27 14:52:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_10', 'MPH_273__Paper_SOVVIP_SMARTCOMM_27092017022722.txt', NULL, b'1'),
(60, 'MHS_280917.txt - 504 lines', 'mater', '2017-10-10 13:10:12', NULL, 504, NULL, '2017-09-28 11:03:07', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\28.09', 'MHS_280917.txt', NULL, b'1'),
(61, 'MHS_3Wk_appfailtoconfirmGP_280917.txt - 7 lines', 'mater', '2017-10-10 13:10:17', NULL, 7, NULL, '2017-09-28 11:03:07', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\28.09', 'MHS_3Wk_appfailtoconfirmGP_280917.txt', NULL, b'1'),
(62, 'MHS_6Wk_ExpRefGP_280917.txt - 15 lines', 'mater', '2017-10-10 13:10:22', NULL, 15, NULL, '2017-09-28 11:03:07', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\28.09', 'MHS_6Wk_ExpRefGP_280917.txt', NULL, b'1'),
(63, 'MHS_6Wk_ExpRef_280917.txt - 20 lines', 'mater', '2017-10-10 13:10:27', NULL, 20, NULL, '2017-09-28 11:03:07', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\28.09', 'MHS_6Wk_ExpRef_280917.txt', NULL, b'1'),
(64, 'WLOPBreachLetter_28092017.txt - 10 lines', 'mater', '2017-10-10 13:10:32', NULL, 10, NULL, '2017-09-28 11:03:07', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\28.09', 'WLOPBreachLetter_28092017.txt', NULL, b'1'),
(65, 'C4C_77__Paper_MATERVIP_SMARTCOMM_28092017012812.txt - 6 lines', 'mater', '2017-10-05 01:47:23', NULL, 6, NULL, '2017-09-28 15:06:50', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_28', 'C4C_77__Paper_MATERVIP_SMARTCOMM_28092017012812.txt', NULL, b'1'),
(66, 'C4C_77__Paper_MATER_SMARTCOMM_28092017012812.txt - 25 lines', 'mater', '2017-10-05 01:47:24', NULL, 25, NULL, '2017-09-28 15:06:50', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_28', 'C4C_77__Paper_MATER_SMARTCOMM_28092017012812.txt', NULL, b'1'),
(67, 'CIP_10024__Paper_MATER_SMARTCOMM_28092017012833.txt - 10 lines', 'mater', '2017-10-05 01:47:25', NULL, 10, NULL, '2017-09-28 15:06:50', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_28', 'CIP_10024__Paper_MATER_SMARTCOMM_28092017012833.txt', NULL, b'1'),
(68, 'MPH_273__Paper_MATERVIP_SMARTCOMM_28092017012726.txt - 18 lines', 'mater', '2017-10-05 01:47:27', NULL, 18, NULL, '2017-09-28 15:06:50', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_MATERVIP_SMARTCOMM_28092017012726.txt', NULL, b'1'),
(69, 'MPH_273__Paper_MATER_SMARTCOMM_28092017024340.txt - 363 lines', 'mater', '2017-10-05 01:47:28', NULL, 363, NULL, '2017-09-28 15:06:50', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_28', 'MPH_273__Paper_MATER_SMARTCOMM_28092017024340.txt', NULL, b'1'),
(70, 'MPH_273__Paper_POWVIP_SMARTCOMM_28092017012155.txt - 6 lines', 'mater', '2017-10-05 01:47:30', NULL, 6, NULL, '2017-09-28 15:06:50', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_POWVIP_SMARTCOMM_28092017012155.txt', NULL, b'1'),
(71, 'MPH_273__Paper_POW_SMARTCOMM_28092017024340.txt - 66 lines', 'mater', '2017-10-05 01:47:31', NULL, 66, NULL, '2017-09-28 15:06:50', 66523, NULL, '', 'S:\\Mater Foundation\\Job 066523 - Daily Ticketing - SEPTEMBER\\ORIGINAL DATA\\DAY_28', 'MPH_273__Paper_POW_SMARTCOMM_28092017024340.txt', NULL, b'1'),
(72, 'MPH_273__Paper_SOVVIP_SMARTCOMM_28092017012056.txt - 4 lines', 'mater', '2017-10-05 01:47:32', NULL, 4, NULL, '2017-09-28 15:06:50', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_SOVVIP_SMARTCOMM_28092017012056.txt', NULL, b'1'),
(73, 'MHS_290917.txt - 356 lines', 'mater', '2017-10-10 13:09:48', NULL, 356, NULL, '2017-09-29 11:05:53', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\29.09', 'MHS_290917.txt', NULL, b'1'),
(74, 'MHS_3Wk_appfailtoconfirmGP_290917.txt - 8 lines', 'mater', '2017-10-10 13:09:53', NULL, 8, NULL, '2017-09-29 11:05:53', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\29.09', 'MHS_3Wk_appfailtoconfirmGP_290917.txt', NULL, b'1'),
(75, 'MHS_6Wk_ExpRefGP_290917.txt - 7 lines', 'mater', '2017-10-10 13:09:58', NULL, 7, NULL, '2017-09-29 11:05:53', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\29.09', 'MHS_6Wk_ExpRefGP_290917.txt', NULL, b'1'),
(76, 'MHS_6Wk_ExpRef_290917.txt - 10 lines', 'mater', '2017-10-10 13:10:03', NULL, 10, NULL, '2017-09-29 11:05:53', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\29.09', 'MHS_6Wk_ExpRef_290917.txt', NULL, b'1'),
(77, 'WLOPBreachLetter_29092017.txt - 5 lines', 'mater', '2017-10-10 13:10:08', NULL, 5, NULL, '2017-09-29 11:05:53', 66606, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 066606 - Daily Hospital Files - September\\CLIENT_FILES\\29.09', 'WLOPBreachLetter_29092017.txt', NULL, b'1'),
(78, 'C4C_77__Paper_MATERVIP_SMARTCOMM_29092017013726.txt - 4 lines', 'mater', '2017-10-06 17:09:00', NULL, 4, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'C4C_77__Paper_MATERVIP_SMARTCOMM_29092017013726.txt', NULL, b'1'),
(79, 'C4C_77__Paper_MATER_SMARTCOMM_29092017013726.txt - 19 lines', 'mater', '2017-10-06 17:09:03', NULL, 19, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'C4C_77__Paper_MATER_SMARTCOMM_29092017013726.txt', NULL, b'1'),
(80, 'CFK_2026__Paper_MATERVIP_SMARTCOMM_29092017013804.txt - 2 lines', 'mater', '2017-10-06 17:09:07', NULL, 2, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'CFK_2026__Paper_MATERVIP_SMARTCOMM_29092017013804.txt', NULL, b'1'),
(81, 'CIP_10024__Paper_MATER_SMARTCOMM_29092017013743.txt - 6 lines', 'mater', '2017-10-06 17:09:10', NULL, 6, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'CIP_10024__Paper_MATER_SMARTCOMM_29092017013743.txt', NULL, b'1'),
(82, 'MPH_273__Paper_MATERVIP_SMARTCOMM_29092017111340.txt - 528 lines', 'mater', '2017-10-05 01:46:56', NULL, 528, NULL, '2017-09-29 15:01:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_MATERVIP_SMARTCOMM_29092017111340.txt', NULL, b'1'),
(83, 'MPH_273__Paper_MATER_SMARTCOMM_29092017022719.txt - 332 lines', 'mater', '2017-10-06 17:09:14', NULL, 332, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'MPH_273__Paper_MATER_SMARTCOMM_29092017022719.txt', NULL, b'1'),
(84, 'MPH_273__Paper_POWVIP_SMARTCOMM_29092017110520.txt - 42 lines', 'mater', '2017-10-05 01:47:01', NULL, 42, NULL, '2017-09-29 15:01:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_POWVIP_SMARTCOMM_29092017110520.txt', NULL, b'1'),
(85, 'MPH_273__Paper_POW_SMARTCOMM_29092017022719.txt - 24 lines', 'mater', '2017-10-06 17:09:17', NULL, 24, NULL, '2017-09-29 15:01:53', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_1', 'MPH_273__Paper_POW_SMARTCOMM_29092017022719.txt', NULL, b'1'),
(86, 'MPH_273__Paper_SOVVIP_SMARTCOMM_29092017110325.txt - 2 lines', 'mater', '2017-10-05 01:47:05', NULL, 2, NULL, '2017-09-29 15:01:53', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_11', 'MPH_273__Paper_SOVVIP_SMARTCOMM_29092017110325.txt', NULL, b'1'),
(87, 'MPH_274__Paper_MATER_SMARTCOMM_29092017022803.txt - 63 lines', 'mater', '2017-10-06 17:09:21', NULL, 63, NULL, '2017-09-29 15:01:53', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_1', 'MPH_274__Paper_MATER_SMARTCOMM_29092017022803.txt', NULL, b'1'),
(88, 'MPH_274__Paper_POW_SMARTCOMM_29092017022803.txt - 2 lines', 'mater', '2017-10-06 17:09:24', NULL, 2, NULL, '2017-09-29 15:01:53', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_1', 'MPH_274__Paper_POW_SMARTCOMM_29092017022803.txt', NULL, b'1'),
(89, 'MHS_021017.txt - 608 lines', 'mater', NULL, NULL, 608, NULL, '2017-10-02 11:05:41', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(90, 'MHS_3Wk_appfailtoconfirmGP_021017.txt - 12 lines', 'mater', NULL, NULL, 12, NULL, '2017-10-02 11:05:41', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(91, 'MHS_6Wk_ExpRefGP_021017.txt - 29 lines', 'mater', NULL, NULL, 29, NULL, '2017-10-02 11:05:41', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(92, 'MHS_6Wk_ExpRef_021017.txt - 39 lines', 'mater', NULL, NULL, 39, NULL, '2017-10-02 11:05:41', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(93, 'MHS_031017.txt - 433 lines', 'mater', '2017-10-10 13:09:00', NULL, 433, NULL, '2017-10-03 11:05:38', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\03.10', 'MHS_031017.txt', NULL, b'1'),
(94, 'MHS_3Wk_appfailtoconfirmGP_031017.txt - 5 lines', 'mater', '2017-10-10 13:09:06', NULL, 5, NULL, '2017-10-03 11:05:38', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\03.10', 'MHS_3Wk_appfailtoconfirmGP_031017.txt', NULL, b'1'),
(95, 'MHS_6Wk_ExpRefGP_031017.txt - 18 lines', 'mater', '2017-10-10 13:09:12', NULL, 18, NULL, '2017-10-03 11:05:38', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\03.10', 'MHS_6Wk_ExpRefGP_031017.txt', NULL, b'1'),
(96, 'MHS_6Wk_ExpRef_031017.txt - 37 lines', 'mater', '2017-10-10 13:09:17', NULL, 37, NULL, '2017-10-03 11:05:38', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\03.10', 'MHS_6Wk_ExpRef_031017.txt', NULL, b'1'),
(97, 'WLOPBreachLetter_03102017.txt - 43 lines', 'mater', '2017-10-10 13:09:24', NULL, 43, NULL, '2017-10-03 11:05:38', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\03.10', 'WLOPBreachLetter_03102017.txt', NULL, b'1'),
(98, 'C4C_77__Paper_MATER_SMARTCOMM_03102017033652.txt - 29 lines', 'mater', '2017-10-06 17:08:18', NULL, 29, NULL, '2017-10-03 16:00:14', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'C4C_77__Paper_MATER_SMARTCOMM_03102017033652.txt', NULL, b'1'),
(99, 'CIP_10024__Paper_MATER_SMARTCOMM_03102017033713.txt - 8 lines', 'mater', '2017-10-06 17:08:21', NULL, 8, NULL, '2017-10-03 16:00:14', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'CIP_10024__Paper_MATER_SMARTCOMM_03102017033713.txt', NULL, b'1'),
(100, 'MPH_273__Paper_LIONSVIP_SMARTCOMM_03102017091633.txt - 154 lines', 'mater', '2017-10-05 01:46:03', NULL, 154, NULL, '2017-10-03 16:00:14', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_LIONSVIP_SMARTCOMM_03102017091633.txt', NULL, b'1'),
(101, 'MPH_273__Paper_MATERVIP_SMARTCOMM_03102017024728.txt - 27,112 lines', 'mater', '2017-10-05 01:46:04', NULL, 27112, NULL, '2017-10-03 16:00:14', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_MATERVIP_SMARTCOMM_03102017024728.txt', NULL, b'1'),
(102, 'MPH_273__Paper_MATER_SMARTCOMM_03102017035133.txt - 550 lines', 'mater', '2017-10-06 17:08:25', NULL, 550, NULL, '2017-10-03 16:00:14', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'MPH_273__Paper_MATER_SMARTCOMM_03102017035133.txt', NULL, b'1'),
(103, 'MPH_273__Paper_POWVIP_SMARTCOMM_03102017105220.txt - 8,334 lines', 'mater', '2017-10-05 01:46:10', NULL, 8334, NULL, '2017-10-03 16:00:14', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_POWVIP_SMARTCOMM_03102017105220.txt', NULL, b'1'),
(104, 'MPH_273__Paper_POW_SMARTCOMM_03102017035133.txt - 112 lines', 'mater', '2017-10-06 17:08:28', NULL, 112, NULL, '2017-10-03 16:00:14', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'MPH_273__Paper_POW_SMARTCOMM_03102017035133.txt', NULL, b'1'),
(105, 'MPH_273__Paper_SOVVIP_SMARTCOMM_03102017092959.txt - 2,796 lines', 'mater', '2017-10-05 01:46:16', NULL, 2796, NULL, '2017-10-03 16:00:14', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_SOVVIP_SMARTCOMM_03102017092959.txt', NULL, b'1'),
(106, 'MPH_274__Paper_MATER_SMARTCOMM_03102017035212.txt - 25 lines', 'mater', '2017-10-06 17:08:32', NULL, 25, NULL, '2017-10-03 16:00:14', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_1', 'MPH_274__Paper_MATER_SMARTCOMM_03102017035212.txt', NULL, b'1'),
(107, 'MHS_041017.txt - 517 lines', 'mater', '2017-10-10 13:08:31', NULL, 517, NULL, '2017-10-04 11:05:46', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\04.10', 'MHS_041017.txt', NULL, b'1'),
(108, 'MHS_3Wk_appfailtoconfirmGP_041017.txt - 6 lines', 'mater', '2017-10-10 13:08:37', NULL, 6, NULL, '2017-10-04 11:05:46', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\04.10', 'MHS_3Wk_appfailtoconfirmGP_041017.txt', NULL, b'1'),
(109, 'MHS_6Wk_ExpRefGP_041017.txt - 10 lines', 'mater', '2017-10-10 13:08:42', NULL, 10, NULL, '2017-10-04 11:05:46', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\04.10', 'MHS_6Wk_ExpRefGP_041017.txt', NULL, b'1'),
(110, 'MHS_6Wk_ExpRef_041017.txt - 27 lines', 'mater', '2017-10-10 13:08:48', NULL, 27, NULL, '2017-10-04 11:05:46', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\04.10', 'MHS_6Wk_ExpRef_041017.txt', NULL, b'1'),
(111, 'WLOPBreachLetter_04102017.txt - 18 lines', 'mater', '2017-10-10 13:08:54', NULL, 18, NULL, '2017-10-04 11:05:46', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\04.10', 'WLOPBreachLetter_04102017.txt', NULL, b'1'),
(112, 'C4C_77__Paper_MATERVIP_SMARTCOMM_04102017023311.txt - 3 lines', 'mater', '2017-10-06 17:07:43', NULL, 3, NULL, '2017-10-04 14:51:28', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'C4C_77__Paper_MATERVIP_SMARTCOMM_04102017023311.txt', NULL, b'1'),
(113, 'C4C_77__Paper_MATER_SMARTCOMM_04102017023311.txt - 18 lines', 'mater', '2017-10-06 17:07:46', NULL, 18, NULL, '2017-10-04 14:51:28', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'C4C_77__Paper_MATER_SMARTCOMM_04102017023311.txt', NULL, b'1'),
(114, 'CIP_10024__Paper_MATER_SMARTCOMM_04102017023329.txt - 4 lines', 'mater', '2017-10-06 17:07:50', NULL, 4, NULL, '2017-10-04 14:51:28', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'CIP_10024__Paper_MATER_SMARTCOMM_04102017023329.txt', NULL, b'1'),
(115, 'MPH_273__Paper_LIONSVIP_SMARTCOMM_04102017102848.txt - 2 lines', 'mater', '2017-10-05 01:45:28', NULL, 2, NULL, '2017-10-04 14:51:28', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_LIONSVIP_SMARTCOMM_04102017102848.txt', NULL, b'1'),
(116, 'MPH_273__Paper_MATERVIP_SMARTCOMM_04102017012449.txt - 385 lines', 'mater', '2017-10-05 01:45:30', NULL, 385, NULL, '2017-10-04 14:51:28', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_MATERVIP_SMARTCOMM_04102017012449.txt', NULL, b'1'),
(117, 'MPH_273__Paper_MATER_SMARTCOMM_04102017023838.txt - 318 lines', 'mater', '2017-10-06 17:07:53', NULL, 318, NULL, '2017-10-04 14:51:28', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'MPH_273__Paper_MATER_SMARTCOMM_04102017023838.txt', NULL, b'1'),
(118, 'MPH_273__Paper_POWVIP_SMARTCOMM_04102017111055.txt - 120 lines', 'mater', '2017-10-05 01:45:34', NULL, 120, NULL, '2017-10-04 14:51:28', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_POWVIP_SMARTCOMM_04102017111055.txt', NULL, b'1'),
(119, 'MPH_273__Paper_POW_SMARTCOMM_04102017023838.txt - 79 lines', 'mater', '2017-10-06 17:07:57', NULL, 79, NULL, '2017-10-04 14:51:28', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_2', 'MPH_273__Paper_POW_SMARTCOMM_04102017023838.txt', NULL, b'1'),
(120, 'MPH_273__Paper_SOVVIP_SMARTCOMM_04102017103534.txt - 53 lines', 'mater', '2017-10-05 01:45:39', NULL, 53, NULL, '2017-10-04 14:51:28', 66627, NULL, '', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_12', 'MPH_273__Paper_SOVVIP_SMARTCOMM_04102017103534.txt', NULL, b'1'),
(121, 'MPH_274__Paper_MATER_SMARTCOMM_04102017024107.txt - 3 lines', 'mater', '2017-10-06 17:08:01', NULL, 3, NULL, '2017-10-04 14:51:28', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_1', 'MPH_274__Paper_MATER_SMARTCOMM_04102017024107.txt', NULL, b'1'),
(122, 'MHS_051017.txt - 542 lines', 'mater', '2017-10-10 13:08:09', NULL, 542, NULL, '2017-10-05 11:04:42', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\05.10', 'MHS_051017.txt', NULL, b'1'),
(123, 'MHS_3Wk_appfailtoconfirmGP_051017.txt - 9 lines', 'mater', '2017-10-10 13:08:15', NULL, 9, NULL, '2017-10-05 11:04:42', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\05.10', 'MHS_3Wk_appfailtoconfirmGP_051017.txt', NULL, b'1'),
(124, 'MHS_6Wk_ExpRefGP_051017.txt - 12 lines', 'mater', '2017-10-10 13:08:20', NULL, 12, NULL, '2017-10-05 11:04:42', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\05.10', 'MHS_6Wk_ExpRefGP_051017.txt', NULL, b'1'),
(125, 'MHS_6Wk_ExpRef_051017.txt - 21 lines', 'mater', '2017-10-10 13:08:26', NULL, 21, NULL, '2017-10-05 11:04:42', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\05.10', 'MHS_6Wk_ExpRef_051017.txt', NULL, b'1'),
(126, 'MAIL349-21092017.txt - 1,078 lines', 'rsl', '2017-10-05 02:15:14', NULL, 1078, NULL, '2017-09-21 11:38:57', 66468, '{"whitepaper":146,"diggers":1001,"diggers_au":996,"diggers_nz":3,"diggers_os":2,"rollovers":81,"rollovers_au":81,"rollovers_nz":0,"rollovers_os":0,"prospect":77,"prospect_au":77,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":81,"prosp":12,"ddsa":40,"canc":25,"colorcount":106}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\21-09-2017\\Data', 'MAIL349-21092017.txt', NULL, b'1'),
(127, 'MAIL351-PREORDER-21092017.txt - 87 lines', 'rsl', '2017-10-05 02:15:17', NULL, 87, NULL, '2017-09-21 11:38:57', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\21-09-2017\\Data', 'MAIL351-PREORDER-21092017.txt', NULL, b'1'),
(128, 'MAIL349-22092017.txt - 1,141 lines', 'rsl', '2017-10-05 02:15:09', NULL, 1141, NULL, '2017-09-22 11:43:49', 66468, '{"whitepaper":148,"diggers":1068,"diggers_au":1055,"diggers_nz":5,"diggers_os":8,"rollovers":99,"rollovers_au":97,"rollovers_nz":1,"rollovers_os":1,"prospect":72,"prospect_au":72,"prospect_nz":0,"prospect_os":0,"ro":1,"welc":98,"prosp":22,"ddsa":24,"canc":26,"colorcount":124}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\22-09-2017\\Data', 'MAIL349-22092017.txt', NULL, b'1'),
(129, 'MAIL351-PREORDER-22092017.txt - 89 lines', 'rsl', '2017-10-05 02:15:12', NULL, 89, NULL, '2017-09-22 11:43:49', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\22-09-2017\\Data', 'MAIL351-PREORDER-22092017.txt', NULL, b'1'),
(130, 'VIP350-DeclinedCC-VIPDM1350-25092017.txt - 6 lines', 'rsl', '2017-10-05 02:13:45', NULL, 6, NULL, '2017-09-25 07:49:04', 66889, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066889 - AU350 - Declined CC\\CLIENT_FILES', 'VIP350-DeclinedCC-VIPDM1350-25092017.txt', NULL, b'1'),
(131, 'VIP350-DeclinedCC-VIPDM350-25092017.txt - 6 lines', 'rsl', '2017-10-05 02:15:07', NULL, 6, NULL, '2017-09-25 07:49:04', 66889, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066889 - AU350 - Declined CC\\CLIENT_FILES', 'VIP350-DeclinedCC-VIPDM350-25092017.txt', NULL, b'1'),
(132, 'VIP350-Ex-VIP1-25092017.txt - 3 lines', 'rsl', '2017-10-05 02:11:04', NULL, 3, NULL, '2017-09-25 07:54:16', 66888, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066888 - AU350 - Ex VIP\\CLIENT_FILES', 'VIP350-Ex-VIP1-25092017.txt', NULL, b'1'),
(133, 'VIP350-Ex-VIP2-25092017.txt - 3 lines', 'rsl', '2017-10-05 02:12:24', NULL, 3, NULL, '2017-09-25 07:54:16', 66888, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066888 - AU350 - Ex VIP\\CLIENT_FILES', 'VIP350-Ex-VIP2-25092017.txt', NULL, b'1'),
(134, 'VIP350-Major-25092017.txt - 9 lines', 'rsl', '2017-10-05 02:05:37', NULL, 9, NULL, '2017-09-25 08:09:49', 66886, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066886 - AU350 - VIP Major\\CLIENT_FILES', 'VIP350-Major-25092017.txt', NULL, b'1'),
(135, 'VIP350-Major-TopUp-25092017.txt - 4 lines', 'rsl', '2017-10-05 02:06:58', NULL, 4, NULL, '2017-09-25 08:09:49', 66981, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066981 - AU350 - VIP Major Top Up\\CLIENT_FILES', 'VIP350-Major-TopUp-25092017.txt', NULL, b'1'),
(136, 'VIP350-Urgent-25092017.txt - 4 lines', 'rsl', '2017-10-05 02:08:17', NULL, 4, NULL, '2017-09-25 08:09:49', 66887, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066887 - AU350 - Urgent Action\\CLIENT_FILES', 'VIP350-Urgent-25092017.txt', NULL, b'1'),
(137, 'VIP350-Welcome-25092017.txt - 4 lines', 'rsl', '2017-10-05 02:09:41', NULL, 4, NULL, '2017-09-25 08:09:49', 66886, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066886 - AU350 - VIP Major\\CLIENT_FILES', 'VIP350-Welcome-25092017.txt', NULL, b'1'),
(138, 'MAIL350-25092017-SAMPLE.txt - 48 lines', 'rsl', '2017-10-11 15:59:15', NULL, 48, NULL, '2017-09-25 08:52:53', 66890, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\Job 066890 - AU350 - Daily Tickets\\CLIENT_FILES', 'MAIL350-25092017-SAMPLE.txt', NULL, b'1'),
(139, 'MAIL349-25092017.txt - 1,009 lines', 'rsl', '2017-10-05 02:04:06', NULL, 1009, NULL, '2017-09-25 11:47:08', 66468, '{"whitepaper":226,"diggers":897,"diggers_au":887,"diggers_nz":7,"diggers_os":3,"rollovers":133,"rollovers_au":132,"rollovers_nz":0,"rollovers_os":1,"prospect":112,"prospect_au":112,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":133,"prosp":19,"ddsa":56,"canc":37,"colorcount":170}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\25-09-2017\\Data', 'MAIL349-25092017.txt', NULL, b'1'),
(140, 'MAIL351-PREORDER-25092017.txt - 91 lines', 'rsl', '2017-10-05 02:04:10', NULL, 91, NULL, '2017-09-25 11:47:08', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\25-09-2017\\Data', 'MAIL351-PREORDER-25092017.txt', NULL, b'1'),
(141, 'MAIL349-26092017.txt - 953 lines', 'rsl', '2017-10-05 02:04:00', NULL, 953, NULL, '2017-09-26 11:46:36', 66468, '{"whitepaper":223,"diggers":891,"diggers_au":855,"diggers_nz":32,"diggers_os":4,"rollovers":171,"rollovers_au":169,"rollovers_nz":1,"rollovers_os":1,"prospect":62,"prospect_au":62,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":171,"prosp":10,"ddsa":28,"canc":24,"colorcount":195}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\26-09-2017\\Data', 'MAIL349-26092017.txt', NULL, b'1'),
(142, 'MAIL351-PREORDER-26092017.txt - 93 lines', 'rsl', '2017-10-05 02:04:04', NULL, 93, NULL, '2017-09-26 11:46:36', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\26-09-2017\\Data', 'MAIL351-PREORDER-26092017.txt', NULL, b'1'),
(143, 'MAIL349-27092017.txt - 977 lines', 'rsl', '2017-10-05 02:03:52', NULL, 977, NULL, '2017-09-27 12:11:55', 66468, '{"whitepaper":239,"diggers":922,"diggers_au":908,"diggers_nz":13,"diggers_os":1,"rollovers":184,"rollovers_au":184,"rollovers_nz":0,"rollovers_os":0,"prospect":55,"prospect_au":54,"prospect_nz":1,"prospect_os":0,"ro":0,"welc":184,"prosp":0,"ddsa":35,"canc":20,"colorcount":204}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\27-09-2017\\Data', 'MAIL349-27092017.txt', NULL, b'1'),
(144, 'MAIL351-PREORDER-27092017.txt - 82 lines', 'rsl', '2017-10-05 02:03:58', NULL, 82, NULL, '2017-09-27 12:11:55', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\27-09-2017\\Data', 'MAIL351-PREORDER-27092017.txt', NULL, b'1'),
(145, 'MAIL349-28092017.txt - 651 lines', 'rsl', '2017-10-05 02:03:46', NULL, 651, NULL, '2017-09-28 11:48:15', 66468, '{"whitepaper":172,"diggers":651,"diggers_au":636,"diggers_nz":13,"diggers_os":2,"rollovers":172,"rollovers_au":170,"rollovers_nz":1,"rollovers_os":1,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":172,"prosp":0,"ddsa":0,"canc":0,"colorcount":172}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\28-09-2017\\Data', 'MAIL349-28092017.txt', NULL, b'1'),
(146, 'MAIL351-PREORDER-28092017.txt - 149 lines', 'rsl', '2017-10-05 02:03:49', NULL, 149, NULL, '2017-09-28 11:48:15', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\28-09-2017\\Data', 'MAIL351-PREORDER-28092017.txt', NULL, b'1'),
(147, 'MAIL349-02102017.txt - 1,377 lines', 'rsl', '2017-10-09 09:48:42', NULL, 1377, NULL, '2017-10-02 11:33:19', 66468, '{"whitepaper":229,"diggers":1377,"diggers_au":1347,"diggers_nz":26,"diggers_os":4,"rollovers":229,"rollovers_au":229,"rollovers_nz":0,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":229,"prosp":0,"ddsa":0,"canc":0,"colorcount":229}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\02-10-2017\\Data', 'MAIL349-02102017.txt', NULL, b'1'),
(148, 'MAIL351-PREORDER-02102017.txt - 337 lines', 'rsl', '2017-10-09 09:48:42', NULL, 337, NULL, '2017-10-02 11:33:19', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\02-10-2017\\Data', 'MAIL351-PREORDER-02102017.txt', NULL, b'1'),
(149, 'VIP350-Major-03102017.txt - 228,465 lines', 'rsl', NULL, NULL, 228465, NULL, '2017-10-03 07:53:40', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(150, 'VIP350-Major-TopUp-03102017.txt - 1,100 lines', 'rsl', NULL, NULL, 1100, NULL, '2017-10-03 07:53:40', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(151, 'VIP350-Urgent-03102017.txt - 27,259 lines', 'rsl', NULL, NULL, 27259, NULL, '2017-10-03 07:53:40', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(152, 'VIP350-Welcome-03102017.txt - 1,284 lines', 'rsl', NULL, NULL, 1284, NULL, '2017-10-03 07:53:40', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(153, 'VIP350-Ex-VIP1-03102017.txt - 1,799 lines', 'rsl', '2017-10-05 01:56:21', NULL, 1799, NULL, '2017-10-03 08:18:30', 66888, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066888 - AU350 - Ex VIP\\CLIENT_FILES', 'VIP350-Ex-VIP1-03102017.txt', NULL, b'1'),
(154, 'VIP350-Ex-VIP2-03102017.txt - 2,786 lines', 'rsl', '2017-10-05 01:57:49', NULL, 2786, NULL, '2017-10-03 08:18:30', 66888, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066888 - AU350 - Ex VIP\\CLIENT_FILES', 'VIP350-Ex-VIP2-03102017.txt', NULL, b'1'),
(155, 'REM350-Batch1-031017.txt - 4 lines', 'rsl', NULL, NULL, 4, NULL, '2017-10-03 10:47:07', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(156, 'REM350-Batch2-031017.txt - 5 lines', 'rsl', NULL, NULL, 5, NULL, '2017-10-03 10:47:07', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(157, 'MAIL349-03102017.txt - 282 lines', 'rsl', '2017-10-09 10:17:39', NULL, 282, NULL, '2017-10-03 11:34:44', 66468, '{"whitepaper":67,"diggers":282,"diggers_au":264,"diggers_nz":16,"diggers_os":2,"rollovers":67,"rollovers_au":67,"rollovers_nz":0,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":67,"prosp":0,"ddsa":0,"canc":0,"colorcount":67}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\03-10-2017\\Data', 'MAIL349-03102017.txt', NULL, b'1'),
(158, 'MAIL350-03102017.txt - 5,419 lines', 'rsl', '2017-10-09 10:17:39', NULL, 5419, NULL, '2017-10-03 11:34:44', 66890, '{"whitepaper":1431,"diggers":4539,"diggers_au":4479,"diggers_nz":49,"diggers_os":11,"rollovers":1246,"rollovers_au":1237,"rollovers_nz":6,"rollovers_os":3,"prospect":880,"prospect_au":875,"prospect_nz":5,"prospect_os":0,"ro":0,"welc":1246,"prosp":695,"ddsa":98,"canc":87,"colorcount":1333}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\03-10-2017\\Data', 'MAIL350-03102017.txt', NULL, b'1'),
(159, 'MAIL351-PREORDER-03102017.txt - 48 lines', 'rsl', '2017-10-09 10:17:39', NULL, 48, NULL, '2017-10-03 11:34:44', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\03-10-2017\\Data', 'MAIL351-PREORDER-03102017.txt', NULL, b'1'),
(160, 'MAIL349-04102017.txt - 741 lines', 'rsl', '2017-10-09 10:17:39', NULL, 741, NULL, '2017-10-04 13:11:03', 66468, '{"whitepaper":111,"diggers":741,"diggers_au":725,"diggers_nz":9,"diggers_os":7,"rollovers":111,"rollovers_au":110,"rollovers_nz":1,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":111,"prosp":0,"ddsa":0,"canc":0,"colorcount":111}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\04-10-2017\\Data', 'MAIL349-04102017.txt', NULL, b'1'),
(161, 'MAIL349-04102017_Resupplied.txt - 284 lines', 'rsl', '2017-10-09 10:17:39', NULL, 284, NULL, '2017-10-04 13:11:03', NULL, '[]', 'rsldaily', NULL, NULL, NULL, b'1'),
(162, 'MAIL350-04102017.txt - 2,012 lines', 'rsl', '2017-10-09 10:17:39', NULL, 2012, NULL, '2017-10-04 13:11:03', 66890, '{"whitepaper":241,"diggers":1952,"diggers_au":1911,"diggers_nz":30,"diggers_os":11,"rollovers":200,"rollovers_au":196,"rollovers_nz":3,"rollovers_os":1,"prospect":60,"prospect_au":60,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":200,"prosp":19,"ddsa":32,"canc":9,"colorcount":209}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\04-10-2017\\Data', 'MAIL350-04102017.txt', NULL, b'1');
INSERT INTO `ir_reports` (`report_id`, `raw_data`, `client_name`, `updated_at`, `client_id`, `total_received`, `total_outputted`, `created_at`, `job_bag_id`, `criteria_column_data`, `criteria_each_link`, `local_path`, `files_uploaded`, `file_manual_upload`, `enable_upload`) VALUES
(163, 'MAIL351-PREORDER-04102017.txt - 206 lines', 'rsl', '2017-10-09 10:17:39', NULL, 206, NULL, '2017-10-04 13:11:03', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\04-10-2017\\Data', 'MAIL351-PREORDER-04102017.txt', NULL, b'1'),
(164, 'MAIL349-04102017_VerA_460256_460535.txt - 37 lines', 'rsl', '2017-10-09 10:17:39', NULL, 37, NULL, '2017-10-04 16:55:51', 67078, '{"whitepaper":0,"diggers":0,"diggers_au":0,"diggers_nz":0,"diggers_os":0,"rollovers":0,"rollovers_au":0,"rollovers_nz":0,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":0,"prosp":0,"ddsa":0,"canc":0,"colorcount":0}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\Job 067078 - AU349 - Daily Tic. Apology Mailing\\DATA\\ARCHIVE', 'MAIL349-04102017_VerA_460256_460535.txt', NULL, b'1'),
(165, 'MAIL349-04102017_VerB_462689_462004.txt - 247 lines', 'rsl', '2017-10-09 10:17:39', NULL, 247, NULL, '2017-10-04 16:55:51', 67078, '{"whitepaper":0,"diggers":0,"diggers_au":0,"diggers_nz":0,"diggers_os":0,"rollovers":0,"rollovers_au":0,"rollovers_nz":0,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":0,"prosp":0,"ddsa":0,"canc":0,"colorcount":0}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\Job 067078 - AU349 - Daily Tic. Apology Mailing\\DATA\\ARCHIVE', 'MAIL349-04102017_VerB_462689_462004.txt', NULL, b'1'),
(166, 'MAIL349-05102017.txt - 24 lines', 'rsl', '2017-10-09 10:17:39', NULL, 24, NULL, '2017-10-05 10:38:18', 66468, '{"whitepaper":1,"diggers":24,"diggers_au":22,"diggers_nz":2,"diggers_os":0,"rollovers":1,"rollovers_au":1,"rollovers_nz":0,"rollovers_os":0,"prospect":0,"prospect_au":0,"prospect_nz":0,"prospect_os":0,"ro":0,"welc":1,"prosp":0,"ddsa":0,"canc":0,"colorcount":1}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\05-10-2017\\Data', 'MAIL349-05102017.txt', NULL, b'1'),
(167, 'MAIL350-05102017.txt - 2,844 lines', 'rsl', '2017-10-09 10:17:39', NULL, 2844, NULL, '2017-10-05 10:38:18', 66890, '{"whitepaper":286,"diggers":2776,"diggers_au":2761,"diggers_nz":13,"diggers_os":2,"rollovers":225,"rollovers_au":221,"rollovers_nz":2,"rollovers_os":2,"prospect":68,"prospect_au":67,"prospect_nz":1,"prospect_os":0,"ro":0,"welc":225,"prosp":7,"ddsa":44,"canc":17,"colorcount":242}', 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\05-10-2017\\Data', 'MAIL350-05102017.txt', NULL, b'1'),
(168, 'MAIL351-PREORDER-05102017.txt - 390 lines', 'rsl', '2017-10-09 10:17:39', NULL, 390, NULL, '2017-10-05 10:38:18', 66549, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\05-10-2017\\Data', 'MAIL351-PREORDER-05102017.txt', NULL, b'1'),
(169, 'COMPLETED HAR_Urgent_Reminder_2017-09-22-10-21-00.txt - 188 lines', 'allianz', NULL, NULL, 188, NULL, '2017-09-22 05:30:51', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(170, 'COMPLETED MERC_Urgent_Reminder_2017-09-22-09-25-00.txt - 391 lines', 'allianz', NULL, NULL, 391, NULL, '2017-09-22 05:30:51', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(171, 'COMPLETED Mazda_Urgent_Reminder_2017-09-22-10-34-00.txt - 178 lines', 'allianz', NULL, NULL, 178, NULL, '2017-09-22 05:30:51', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(172, 'COMPLETED Skoda_Urgent_Reminder_2017-09-22-08-29-00.txt - 37 lines', 'allianz', NULL, NULL, 37, NULL, '2017-09-22 05:30:51', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(173, 'COMPLETED TOY_Urgent_Reminder_2017-09-22-08-49-00.txt - 465 lines', 'allianz', NULL, NULL, 465, NULL, '2017-09-22 05:30:51', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(174, 'COMPLETED AU_RENEWAL_2017-09-25-11-52-00.txt - 147 lines', 'allianz', NULL, NULL, 147, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(175, 'COMPLETED Allianz_Direct_EHA_Renewal_2017-09-25-07-59-00.txt - 19 lines', 'allianz', NULL, NULL, 19, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(176, 'COMPLETED BMW_MINI_RENEWAL_2017-09-25-08-44-00.txt - 52 lines', 'allianz', NULL, NULL, 52, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(177, 'COMPLETED CHR_RENEWAL_2017-09-25-08-07-00.txt - 16 lines', 'allianz', NULL, NULL, 16, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(178, 'COMPLETED DOD_RENEWAL_2017-09-25-07-49-00.txt - 5 lines', 'allianz', NULL, NULL, 5, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(179, 'COMPLETED DUC_RENEWAL_2017-09-25-08-26-00.txt - 38 lines', 'allianz', NULL, NULL, 38, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(180, 'COMPLETED HAR_RENEWAL_2017-09-25-12-57-00.txt - 269 lines', 'allianz', NULL, NULL, 269, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(181, 'COMPLETED Jeep_Renewal_2017-09-25-12-32-00.txt - 161 lines', 'allianz', NULL, NULL, 161, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(182, 'COMPLETED MAZDA_RENEWAL_2017-09-25-12-45-00.txt - 198 lines', 'allianz', NULL, NULL, 198, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(183, 'COMPLETED MBV_RENEWAL_2017-09-25-14-37-00.txt - 52 lines', 'allianz', NULL, NULL, 52, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(184, 'COMPLETED MERC_RENEWAL_2017-09-25-14-18-00.txt - 636 lines', 'allianz', NULL, NULL, 636, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(185, 'COMPLETED NAB_EHA_Renewals_2017-09-25-13-10-00.txt - 776 lines', 'allianz', NULL, NULL, 776, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(186, 'COMPLETED SMART_RENEWAL_2017-09-25-07-47-00.txt - 2 lines', 'allianz', NULL, NULL, 2, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(187, 'COMPLETED Skoda_Renewal_2017-09-25-08-14-00.txt - 27 lines', 'allianz', NULL, NULL, 27, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(188, 'COMPLETED TATA_Refferral_2017-09-25-07-51-00.txt - 6 lines', 'allianz', NULL, NULL, 6, NULL, '2017-09-25 14:40:42', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(189, 'COMPLETED TOY_EC_RENEWAL_2017-09-25-13-32-00.txt - 635 lines', 'allianz', NULL, NULL, 635, NULL, '2017-09-25 14:45:45', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(190, 'COMPLETED AGA_EHA_Ret_WP_2017-09-26-08-38-00.txt - 29 lines', 'allianz', NULL, NULL, 29, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(191, 'COMPLETED AU_SPECIALREQUEST_2017-09-26-08-23-00.txt - 14 lines', 'allianz', NULL, NULL, 14, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(192, 'COMPLETED AU_SPECIALREQUEST_WHOLESALE_2017-09-26-08-20-00.txt - 4 lines', 'allianz', NULL, NULL, 4, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(193, 'COMPLETED Allianz_Direct_SR_2017-09-26-08-54-00.txt - 14 lines', 'allianz', NULL, NULL, 14, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(194, 'COMPLETED HAR_SpecialRequest_2017-09-26-08-59-00.txt - 20 lines', 'allianz', NULL, NULL, 20, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(195, 'COMPLETED HAR_Welcome_2017-09-26-09-47-00.txt - 246 lines', 'allianz', NULL, NULL, 246, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(196, 'COMPLETED Ken Tame_Welcome_2017-09-26-08-19-00.txt - 281 lines', 'allianz', NULL, NULL, 281, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(197, 'COMPLETED MBV_Welcome_Pack_2017-09-26-09-38-00.txt - 63 lines', 'allianz', NULL, NULL, 63, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(198, 'COMPLETED MERC_RETAIL_SPECIALREQUEST_2017-09-26-09-11-00.txt - 42 lines', 'allianz', NULL, NULL, 42, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(199, 'COMPLETED NAB_EHA_Welcome_Pack_2017-09-26-10-23-00.txt - 2,023 lines', 'allianz', NULL, NULL, 2023, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(200, 'COMPLETED TCUV_Welcome_2017-09-26-14-17-00.txt - 574 lines', 'allianz', NULL, NULL, 574, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(201, 'COMPLETED TOY_SPECIALREQUEST_2017-09-26-09-06-00.txt - 32 lines', 'allianz', NULL, NULL, 32, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(202, 'COMPLETED TOY_Welcome_2017-09-26-08-03-00.txt - 355 lines', 'allianz', NULL, NULL, 355, NULL, '2017-09-26 14:26:33', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(203, 'COMPLETED BMW_MINI_Urgent_Reminder_2017-09-27-09-15-00.txt - 64 lines', 'allianz', NULL, NULL, 64, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(204, 'COMPLETED CHRYSLER_Urgent_Reminder_2017-09-27-08-47-00.txt - 14 lines', 'allianz', NULL, NULL, 14, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(205, 'COMPLETED HAR_Urgent_Reminder_2017-09-27-11-14-00.txt - 277 lines', 'allianz', NULL, NULL, 277, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(206, 'COMPLETED JEEP_Urgent_Reminder_2017-09-27-09-42-00.txt - 204 lines', 'allianz', NULL, NULL, 204, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(207, 'COMPLETED MAZ_RenewalAcknowledgement_2017-09-27-10-19-00.txt - 1,090 lines', 'allianz', NULL, NULL, 1090, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(208, 'COMPLETED MERC_Urgent_Reminder_2017-09-27-09-55-00.txt - 473 lines', 'allianz', NULL, NULL, 473, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(209, 'COMPLETED Mazda_Urgent_Reminder_2017-09-27-09-32-00.txt - 197 lines', 'allianz', NULL, NULL, 197, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(210, 'COMPLETED Skoda_Urgent_Reminder_2017-09-27-08-52-00.txt - 40 lines', 'allianz', NULL, NULL, 40, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(211, 'COMPLETED TOY_RenewalAcknowledgement_2017-09-27-09-26-00.txt - 239 lines', 'allianz', NULL, NULL, 239, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(212, 'COMPLETED TOY_Urgent_Reminder_2017-09-27-10-09-00.txt - 619 lines', 'allianz', NULL, NULL, 619, NULL, '2017-09-27 11:21:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(213, 'COMPLETED AGA_PERFORMAX_Welcome_2017-10-03-14-46-00.txt - 33 lines', 'allianz', NULL, NULL, 33, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(214, 'COMPLETED CHRYSLER_SPECIALREQUEST_2017-10-03-16-46-00.txt - 6 lines', 'allianz', NULL, NULL, 6, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(215, 'COMPLETED DODGE_SPECIALREQUEST_2017-10-03-14-58-00.txt - 2 lines', 'allianz', NULL, NULL, 2, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(216, 'COMPLETED DUC_SPECIALREQUEST_2017-10-03-16-59-00.txt - 7 lines', 'allianz', NULL, NULL, 7, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(217, 'COMPLETED DUC_Welcome_2017-10-01-04-08-30.txt - 155 lines', 'allianz', NULL, NULL, 155, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(218, 'COMPLETED HAR_RENEWAL_2017-10-04-07-00-00.txt - 307 lines', 'allianz', NULL, NULL, 307, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(219, 'COMPLETED JEEP_SPECIALREQUEST_2017-10-03-14-50-00.txt - 24 lines', 'allianz', NULL, NULL, 24, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(220, 'COMPLETED MBV_POV_Welcome_2017-10-03-15-04-00.txt - 3 lines', 'allianz', NULL, NULL, 3, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(221, 'COMPLETED MBV_SpecialRequest_Retail_2017-10-03-14-56-00.txt - 4 lines', 'allianz', NULL, NULL, 4, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(222, 'COMPLETED MCC_Welcome_2017-10-03-14-59-00.txt - 124 lines', 'allianz', NULL, NULL, 124, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(223, 'COMPLETED SMART_RENEWAL_2017-10-04-07-00-00.txt - 4 lines', 'allianz', NULL, NULL, 4, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(224, 'COMPLETED SMART_RENEWAL_ACK_2017-10-03-17-00-00.txt - 11 lines', 'allianz', NULL, NULL, 11, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(225, 'COMPLETED SMART_Special_Request_2017-10-03-16-44-00.txt - 2 lines', 'allianz', NULL, NULL, 2, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(226, 'COMPLETED Skoda_Renewal_2017-10-04-07-00-00.txt - 32 lines', 'allianz', NULL, NULL, 32, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(227, 'COMPLETED TATA_Welcome_Pack_2017-10-03-15-09-00.txt - 2 lines', 'allianz', NULL, NULL, 2, NULL, '2017-10-04 13:45:32', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(228, 'COMPLETED AU_RENEWAL_2017-10-04-07-00-00.txt - 230 lines', 'allianz', NULL, NULL, 230, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(229, 'COMPLETED Allianz_Direct_EHA_Renewal_2017-10-04-07-00-00.txt - 7 lines', 'allianz', NULL, NULL, 7, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(230, 'COMPLETED BMW_MINI_RENEWAL_2017-10-04-07-00-00.txt - 80 lines', 'allianz', NULL, NULL, 80, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(231, 'COMPLETED CHR_RENEWAL_2017-10-04-07-00-00.txt - 25 lines', 'allianz', NULL, NULL, 25, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(232, 'COMPLETED DOD_RENEWAL_2017-10-04-07-00-00.txt - 3 lines', 'allianz', NULL, NULL, 3, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(233, 'COMPLETED DUC_RENEWAL_2017-10-04-07-00-00.txt - 58 lines', 'allianz', NULL, NULL, 58, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(234, 'COMPLETED Jeep_Renewal_2017-10-04-07-00-00.txt - 289 lines', 'allianz', NULL, NULL, 289, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(235, 'COMPLETED MAZDA_RENEWAL_2017-10-04-07-00-00.txt - 233 lines', 'allianz', NULL, NULL, 233, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(236, 'COMPLETED MBV_RENEWAL_2017-10-04-07-00-00.txt - 91 lines', 'allianz', NULL, NULL, 91, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(237, 'COMPLETED MERC_RENEWAL_2017-10-04-07-00-00.txt - 812 lines', 'allianz', NULL, NULL, 812, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(238, 'COMPLETED NAB EHA Renewal_2017-10-04-07-00-00.txt - 874 lines', 'allianz', NULL, NULL, 874, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(239, 'COMPLETED TATA_REFERRAL_2017-10-04-07-00-00.txt - 7 lines', 'allianz', NULL, NULL, 7, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(240, 'COMPLETED TOY_EC_RENEWAL_2017-10-04-07-00-00.txt - 710 lines', 'allianz', NULL, NULL, 710, NULL, '2017-10-04 13:50:54', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(241, 'C4C_77__Paper_MATER_SMARTCOMM_05102017040226.txt - 22 lines', 'mater', '2017-10-06 17:07:15', NULL, 22, NULL, '2017-10-05 16:34:15', 67036, NULL, '', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_3', 'C4C_77__Paper_MATER_SMARTCOMM_05102017040226.txt', NULL, b'1'),
(242, 'CIP_10024__Paper_MATER_SMARTCOMM_05102017040256.txt - 5 lines', 'mater', '2017-10-06 17:07:19', NULL, 5, NULL, '2017-10-05 16:34:15', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_3', 'CIP_10024__Paper_MATER_SMARTCOMM_05102017040256.txt', NULL, b'1'),
(243, 'MPH_273__Paper_LIONSVIP_SMARTCOMM_05102017123724.txt - 3 lines', 'mater', '2017-10-06 15:17:48', NULL, 3, NULL, '2017-10-05 16:34:15', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_LIONSVIP_SMARTCOMM_05102017123724.txt', NULL, b'1'),
(244, 'MPH_273__Paper_MATERVIP_SMARTCOMM_05102017040037.txt - 427 lines', 'mater', '2017-10-06 15:17:48', NULL, 427, NULL, '2017-10-05 16:34:15', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_MATERVIP_SMARTCOMM_05102017040037.txt', NULL, b'1'),
(245, 'MPH_273__Paper_MATER_SMARTCOMM_05102017041744.txt - 619 lines', 'mater', '2017-10-06 17:07:22', NULL, 619, NULL, '2017-10-05 16:34:15', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_3', 'MPH_273__Paper_MATER_SMARTCOMM_05102017041744.txt', NULL, b'1'),
(246, 'MPH_273__Paper_POWVIP_SMARTCOMM_05102017125326.txt - 180 lines', 'mater', '2017-10-06 15:17:48', NULL, 180, NULL, '2017-10-05 16:34:15', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_POWVIP_SMARTCOMM_05102017125326.txt', NULL, b'1'),
(247, 'MPH_273__Paper_POW_SMARTCOMM_05102017041744.txt - 140 lines', 'mater', '2017-10-06 17:07:26', NULL, 140, NULL, '2017-10-05 16:34:15', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_3', 'MPH_273__Paper_POW_SMARTCOMM_05102017041744.txt', NULL, b'1'),
(248, 'MPH_273__Paper_SOVVIP_SMARTCOMM_05102017124712.txt - 95 lines', 'mater', '2017-10-06 15:17:48', NULL, 95, NULL, '2017-10-05 16:34:15', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_SOVVIP_SMARTCOMM_05102017124712.txt', NULL, b'1'),
(249, 'MPH_274__Paper_MATER_SMARTCOMM_05102017042008.txt - 3 lines', 'mater', '2017-10-06 17:07:29', NULL, 3, NULL, '2017-10-05 16:34:15', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_1', 'MPH_274__Paper_MATER_SMARTCOMM_05102017042008.txt', NULL, b'1'),
(250, 'COMPLETED BMW_MINI_Urgent_Reminder_2017-10-06-07-00-00.txt - 59 lines', 'allianz', NULL, NULL, 59, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(251, 'COMPLETED CHRYSLER_Urgent_Reminder_2017-10-06-07-00-00.txt - 26 lines', 'allianz', NULL, NULL, 26, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(252, 'COMPLETED HAR_Urgent_Reminder_2017-10-06-07-00-00.txt - 299 lines', 'allianz', NULL, NULL, 299, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(253, 'COMPLETED JEEP_Urgent_Reminder_2017-10-06-07-00-00.txt - 299 lines', 'allianz', NULL, NULL, 299, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(254, 'COMPLETED MERC_Urgent_Reminder_2017-10-06-07-00-00.txt - 669 lines', 'allianz', NULL, NULL, 669, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(255, 'COMPLETED Mazda_Urgent_Reminder_2017-10-06-07-00-00.txt - 192 lines', 'allianz', NULL, NULL, 192, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(256, 'COMPLETED Skoda_Urgent_Reminder_2017-10-06-07-00-00.txt - 52 lines', 'allianz', NULL, NULL, 52, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(257, 'COMPLETED TOY_Urgent_Reminder_2017-10-06-07-00-00.txt - 641 lines', 'allianz', NULL, NULL, 641, NULL, '2017-10-06 09:41:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(258, 'MHS_061017.txt - 269 lines', 'mater', '2017-10-10 13:07:41', NULL, 269, NULL, '2017-10-06 11:06:01', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\06.10', 'MHS_061017.txt', NULL, b'1'),
(259, 'MHS_3Wk_appfailtoconfirmGP_061017.txt - 9 lines', 'mater', '2017-10-10 13:07:47', NULL, 9, NULL, '2017-10-06 11:06:01', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\06.10', 'MHS_3Wk_appfailtoconfirmGP_061017.txt', NULL, b'1'),
(260, 'MHS_6Wk_ExpRefGP_061017.txt - 8 lines', 'mater', '2017-10-10 13:07:52', NULL, 8, NULL, '2017-10-06 11:06:01', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\06.10', 'MHS_6Wk_ExpRefGP_061017.txt', NULL, b'1'),
(261, 'MHS_6Wk_ExpRef_061017.txt - 10 lines', 'mater', '2017-10-10 13:07:58', NULL, 10, NULL, '2017-10-06 11:06:01', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\06.10', 'MHS_6Wk_ExpRef_061017.txt', NULL, b'1'),
(262, 'WLOPBreachLetter_06102017.txt - 3 lines', 'mater', '2017-10-10 13:08:04', NULL, 3, NULL, '2017-10-06 11:06:01', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\06.10', 'WLOPBreachLetter_06102017.txt', NULL, b'1'),
(263, 'MAIL349-06102017.txt - 45 lines', 'rsl', '2017-10-09 12:06:08', NULL, 45, NULL, '2017-10-06 11:23:47', 66468, '[]', 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\06-10-2017\\Data', 'MAIL349-06102017.txt', NULL, b'1'),
(264, 'MAIL350-06102017.txt - 4,646 lines', 'rsl', '2017-10-09 12:15:56', NULL, 4646, NULL, '2017-10-06 11:23:47', 66890, '[]', 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\06-10-2017\\Data', 'MAIL350-06102017.txt', NULL, b'1'),
(265, 'MAIL351-PREORDER-06102017.txt - 348 lines', 'rsl', '2017-10-06 17:10:42', NULL, 348, NULL, '2017-10-06 11:23:47', 66549, NULL, '', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\06-10-2017\\Data', 'MAIL351-PREORDER-06102017.txt', NULL, b'1'),
(266, 'C4C_77__Paper_MATERVIP_SMARTCOMM_06102017024943.txt - 2 lines', 'mater', '2017-10-11 10:08:15', NULL, 2, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'C4C_77__Paper_MATERVIP_SMARTCOMM_06102017024943.txt', NULL, b'1'),
(267, 'C4C_77__Paper_MATER_SMARTCOMM_06102017024942.txt - 16 lines', 'mater', '2017-10-09 12:01:51', NULL, 16, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'C4C_77__Paper_MATER_SMARTCOMM_06102017024942.txt', NULL, b'1'),
(268, 'C4C_77__Paper_MATER_SMARTCOMM_06102017024943.txt - 3 lines', 'mater', '2017-10-09 12:01:54', NULL, 3, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'C4C_77__Paper_MATER_SMARTCOMM_06102017024943.txt', NULL, b'1'),
(269, 'CIP_10024__Paper_MATER_SMARTCOMM_06102017025019.txt - 5 lines', 'mater', '2017-10-09 12:01:58', NULL, 5, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'CIP_10024__Paper_MATER_SMARTCOMM_06102017025019.txt', NULL, b'1'),
(270, 'MPH_273__Paper_LIONSVIP_SMARTCOMM_06102017094020.txt - 2 lines', 'mater', '2017-10-09 12:02:00', NULL, 2, NULL, '2017-10-06 15:16:02', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_13', 'MPH_273__Paper_LIONSVIP_SMARTCOMM_06102017094020.txt', NULL, b'1'),
(271, 'MPH_273__Paper_MATERVIP_SMARTCOMM_06102017102533.txt - 279 lines', 'mater', '2017-10-09 12:02:01', NULL, 279, NULL, '2017-10-06 15:16:02', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_13', 'MPH_273__Paper_MATERVIP_SMARTCOMM_06102017102533.txt', NULL, b'1'),
(272, 'MPH_273__Paper_MATER_SMARTCOMM_06102017025504.txt - 245 lines', 'mater', '2017-10-09 12:02:04', NULL, 245, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'MPH_273__Paper_MATER_SMARTCOMM_06102017025504.txt', NULL, b'1'),
(273, 'MPH_273__Paper_POWVIP_SMARTCOMM_06102017095248.txt - 141 lines', 'mater', '2017-10-09 12:02:06', NULL, 141, NULL, '2017-10-06 15:16:02', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_13', 'MPH_273__Paper_POWVIP_SMARTCOMM_06102017095248.txt', NULL, b'1'),
(274, 'MPH_273__Paper_POW_SMARTCOMM_06102017025504.txt - 34 lines', 'mater', '2017-10-09 12:02:09', NULL, 34, NULL, '2017-10-06 15:16:02', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_4', 'MPH_273__Paper_POW_SMARTCOMM_06102017025504.txt', NULL, b'1'),
(275, 'MPH_273__Paper_SOVVIP_SMARTCOMM_06102017094120.txt - 50 lines', 'mater', '2017-10-09 12:02:11', NULL, 50, NULL, '2017-10-06 15:16:02', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_13', 'MPH_273__Paper_SOVVIP_SMARTCOMM_06102017094120.txt', NULL, b'1'),
(276, 'MTKTS1672017100615135400.TXT - 438 lines', 'deaf', NULL, NULL, 438, NULL, '2017-10-06 15:22:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(277, 'TMTKT1672017100615144900.TXT - 259 lines', 'deaf', NULL, NULL, 259, NULL, '2017-10-06 15:22:19', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(278, 'VIP350-DeclinedCC-VIPDM1350-09102017.txt - 2,380 lines', 'rsl', '2017-10-11 15:58:17', NULL, 2380, NULL, '2017-10-09 08:42:34', 66889, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066889 - AU350 - Declined CC\\CLIENT_FILES', 'VIP350-DeclinedCC-VIPDM1350-09102017.txt', NULL, b'1'),
(279, 'VIP350-DeclinedCC-VIPDM350-09102017.txt - 8,004 lines', 'rsl', '2017-10-11 15:58:24', NULL, 8004, NULL, '2017-10-09 08:42:34', 66889, NULL, '', 'S:\\RSL Art Union\\Art Union 350\\Job 066889 - AU350 - Declined CC\\CLIENT_FILES', 'VIP350-DeclinedCC-VIPDM350-09102017.txt', NULL, b'1'),
(283, 'MHS_091017.txt - 530 lines', 'mater', '2017-10-10 13:07:17', NULL, 530, NULL, '2017-10-09 11:05:30', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\09.10', 'MHS_091017.txt', NULL, b'1'),
(280, 'REM350-Batch1-091017.txt - 85,000 lines', 'rsl', NULL, NULL, 85000, NULL, '2017-10-09 10:01:05', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(281, 'VIP106-DeclinedCC-09102017.txt - 10 lines', 'rsl', '2017-10-11 15:58:04', NULL, 10, NULL, '2017-10-09 10:36:10', 67159, NULL, '', 'S:\\RSL Art Union\\Art Union VIP06\\Job 067159 - RSL - VIP06 - Declined CC\\CLIENT_FILES', 'VIP106-DeclinedCC-09102017.txt', NULL, b'1'),
(282, 'VIP106-Major-09102017.txt - 16 lines', 'rsl', '2017-10-11 15:57:57', NULL, 16, NULL, '2017-10-09 10:46:38', 67154, NULL, '', 'S:\\RSL Art Union\\Art Union VIP06\\Job 067154 - RSL - VIP06 - VIP Major\\CLIENT_FILES', 'VIP106-Major-09102017.txt', NULL, b'1'),
(284, 'MHS_3Wk_appfailtoconfirmGP_091017.txt - 9 lines', 'mater', '2017-10-10 13:07:23', NULL, 9, NULL, '2017-10-09 11:05:30', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\09.10', 'MHS_3Wk_appfailtoconfirmGP_091017.txt', NULL, b'1'),
(285, 'MHS_6Wk_ExpRefGP_091017.txt - 22 lines', 'mater', '2017-10-10 13:07:29', NULL, 22, NULL, '2017-10-09 11:05:30', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\09.10', 'MHS_6Wk_ExpRefGP_091017.txt', NULL, b'1'),
(286, 'MHS_6Wk_ExpRef_091017.txt - 30 lines', 'mater', '2017-10-10 13:07:35', NULL, 30, NULL, '2017-10-09 11:05:30', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\09.10', 'MHS_6Wk_ExpRef_091017.txt', NULL, b'1'),
(287, 'C4C_78__Paper_MATER_SMARTCOMM_07122016103407.txt - 14 lines', 'mater', '2017-10-10 13:07:04', NULL, 14, NULL, '2017-10-09 11:55:53', 67145, NULL, '', 'S:\\Mater Foundation\\Job 067145 - CFC78 Daily Ticketing Set up\\CLIENT_FILES', 'C4C_78__Paper_MATER_SMARTCOMM_07122016103407.txt', NULL, b'1'),
(288, 'C4C_78__Paper_POW_SMARTCOMM_07122016103407.txt - 13 lines', 'mater', '2017-10-10 13:07:11', NULL, 13, NULL, '2017-10-09 11:55:53', 67145, NULL, '', 'S:\\Mater Foundation\\Job 067145 - CFC78 Daily Ticketing Set up\\CLIENT_FILES', 'C4C_78__Paper_POW_SMARTCOMM_07122016103407.txt', NULL, b'1'),
(289, 'MAIL349-09102017.txt - 9 lines', 'rsl', '2017-10-10 13:11:56', NULL, 9, NULL, '2017-10-09 14:06:49', 66468, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\xALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\archive\\09-10-2017\\Data', 'MAIL349-09102017.txt', NULL, b'1'),
(290, 'MAIL350-09102017.txt - 2,255 lines', 'rsl', '2017-10-10 13:12:02', NULL, 2255, NULL, '2017-10-09 14:06:49', 66890, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\Archive\\09-10-2017\\Data', 'MAIL350-09102017.txt', NULL, b'1'),
(291, 'MAIL351-PREORDER-09102017.txt - 359 lines', 'rsl', '2017-10-10 13:12:07', NULL, 359, NULL, '2017-10-09 14:06:49', 66549, NULL, '', 'S:\\RSL Art Union\\Art Union 349\\xALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\archive\\09-10-2017\\Data', 'MAIL351-PREORDER-09102017.txt', NULL, b'1'),
(292, 'MTKTS1672017100915165200.TXT - 888 lines', 'deaf', NULL, NULL, 888, NULL, '2017-10-09 15:27:25', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(293, 'TMTKT1672017100915182100.TXT - 566 lines', 'deaf', NULL, NULL, 566, NULL, '2017-10-09 15:27:25', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(294, 'C4C_77__Paper_MATERVIP_SMARTCOMM_09102017030109.txt - 9 lines', 'mater', '2017-10-11 10:08:15', NULL, 9, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'C4C_77__Paper_MATERVIP_SMARTCOMM_09102017030109.txt', NULL, b'1'),
(295, 'C4C_77__Paper_MATER_SMARTCOMM_09102017030109.txt - 40 lines', 'mater', '2017-10-10 13:05:48', NULL, 40, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'C4C_77__Paper_MATER_SMARTCOMM_09102017030109.txt', NULL, b'1'),
(296, 'CFK_2026__Paper_MATER_SMARTCOMM_09102017030349.txt - 231 lines', 'mater', '2017-10-10 13:05:55', NULL, 231, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'CFK_2026__Paper_MATER_SMARTCOMM_09102017030349.txt', NULL, b'1'),
(297, 'CIP_10024__Paper_MATER_SMARTCOMM_09102017030131.txt - 7 lines', 'mater', '2017-10-10 13:06:02', NULL, 7, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'CIP_10024__Paper_MATER_SMARTCOMM_09102017030131.txt', NULL, b'1'),
(298, 'MPH_273__Paper_LIONS_SMARTCOMM_09102017031206.txt - 13 lines', 'mater', '2017-10-10 13:06:08', NULL, 13, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_LIONS_SMARTCOMM_09102017031206.txt', NULL, b'1'),
(299, 'MPH_273__Paper_MATERVIP_SMARTCOMM_09102017023944.txt - 3,777 lines', 'mater', '2017-10-10 13:06:15', NULL, 3777, NULL, '2017-10-09 15:42:41', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_MATERVIP_SMARTCOMM_09102017023944.txt', NULL, b'1'),
(300, 'MPH_273__Paper_MATER_SMARTCOMM_09102017031205.txt - 815 lines', 'mater', '2017-10-10 13:06:22', NULL, 815, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_MATER_SMARTCOMM_09102017031205.txt', NULL, b'1'),
(301, 'MPH_273__Paper_MATER_SMARTCOMM_09102017031206.txt - 43 lines', 'mater', '2017-10-10 13:06:30', NULL, 43, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_MATER_SMARTCOMM_09102017031206.txt', NULL, b'1'),
(302, 'MPH_273__Paper_POWVIP_SMARTCOMM_09102017015724.txt - 1,650 lines', 'mater', '2017-10-10 13:06:37', NULL, 1650, NULL, '2017-10-09 15:42:41', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_POWVIP_SMARTCOMM_09102017015724.txt', NULL, b'1'),
(303, 'MPH_273__Paper_POW_SMARTCOMM_09102017031206.txt - 112 lines', 'mater', '2017-10-10 13:06:43', NULL, 112, NULL, '2017-10-09 15:42:41', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_POW_SMARTCOMM_09102017031206.txt', NULL, b'1'),
(304, 'MPH_273__Paper_SOVVIP_SMARTCOMM_09102017014426.txt - 593 lines', 'mater', '2017-10-10 13:06:50', NULL, 593, NULL, '2017-10-09 15:42:41', 66997, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066997 - MPH - VIP Mailout - 273 - S2\\ORIGINAL_DATA', 'MPH_273__Paper_SOVVIP_SMARTCOMM_09102017014426.txt', NULL, b'1'),
(305, 'MPH_274__Paper_MATER_SMARTCOMM_09102017032354.txt - 6 lines', 'mater', '2017-10-10 13:06:57', NULL, 6, NULL, '2017-10-09 15:42:41', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_2', 'MPH_274__Paper_MATER_SMARTCOMM_09102017032354.txt', NULL, b'1'),
(306, 'MAIL349-10102017.txt - 9 lines', 'rsl', '2017-10-10 13:11:42', NULL, 9, NULL, '2017-10-10 10:43:33', 66468, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 349\\xALL DAILY JOBS\\Job 066468 - RSL - AU349 - Daily Digger Tickets\\10-10-2017\\Data', 'MAIL349-10102017.txt', NULL, b'1'),
(307, 'MAIL350-10102017.txt - 2,821 lines', 'rsl', '2017-10-10 13:11:48', NULL, 2821, NULL, '2017-10-10 10:43:33', 66890, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\ALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\10-10-2017\\Data', 'MAIL350-10102017.txt', NULL, b'1'),
(308, 'MAIL351-PREORDER-10102017.txt - 488 lines', 'rsl', '2017-10-10 13:11:53', NULL, 488, NULL, '2017-10-10 10:43:33', 66549, NULL, '', 'S:\\RSL Art Union\\Art Union 349\\xALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\10-10-2017\\Data', 'MAIL351-PREORDER-10102017.txt', NULL, b'1'),
(309, 'MHS_101017.txt - 467 lines', 'mater', '2017-10-10 13:05:17', NULL, 467, NULL, '2017-10-10 11:05:31', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\10.10', 'MHS_101017.txt', NULL, b'1'),
(310, 'MHS_3Wk_appfailtoconfirmGP_101017.txt - 9 lines', 'mater', '2017-10-10 13:05:23', NULL, 9, NULL, '2017-10-10 11:05:31', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\10.10', 'MHS_3Wk_appfailtoconfirmGP_101017.txt', NULL, b'1'),
(311, 'MHS_6Wk_ExpRefGP_101017.txt - 14 lines', 'mater', '2017-10-10 13:05:29', NULL, 14, NULL, '2017-10-10 11:05:31', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\10.10', 'MHS_6Wk_ExpRefGP_101017.txt', NULL, b'1'),
(312, 'MHS_6Wk_ExpRef_101017.txt - 23 lines', 'mater', '2017-10-10 13:05:34', NULL, 23, NULL, '2017-10-10 11:05:31', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\10.10', 'MHS_6Wk_ExpRef_101017.txt', NULL, b'1'),
(313, 'MTKTS1672017101015174400.TXT - 527 lines', 'deaf', NULL, NULL, 527, NULL, '2017-10-10 15:28:08', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(314, 'TMTKT1672017101015192800.TXT - 212 lines', 'deaf', NULL, NULL, 212, NULL, '2017-10-10 15:28:08', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(315, 'C4C_77__Paper_MATERVIP_SMARTCOMM_10102017010924.txt - 2 lines', 'mater', '2017-10-11 15:59:59', NULL, 2, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'C4C_77__Paper_MATERVIP_SMARTCOMM_10102017010924.txt', NULL, b'1'),
(316, 'C4C_77__Paper_MATER_SMARTCOMM_10102017010924.txt - 11 lines', 'mater', '2017-10-11 16:00:06', NULL, 11, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'C4C_77__Paper_MATER_SMARTCOMM_10102017010924.txt', NULL, b'1'),
(317, 'CIP_10024__Paper_MATER_SMARTCOMM_10102017011039.txt - 2 lines', 'mater', '2017-10-11 16:00:13', NULL, 2, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'CIP_10024__Paper_MATER_SMARTCOMM_10102017011039.txt', NULL, b'1'),
(318, 'MPH_273__Paper_LIONS_SMARTCOMM_10102017032055.txt - 2 lines', 'mater', '2017-10-11 16:00:19', NULL, 2, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_LIONS_SMARTCOMM_10102017032055.txt', NULL, b'1'),
(319, 'MPH_273__Paper_MATERVIP_SMARTCOMM_10102017111633.txt - 94 lines', 'mater', '2017-10-11 16:00:26', NULL, 94, NULL, '2017-10-10 15:29:12', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_14', 'MPH_273__Paper_MATERVIP_SMARTCOMM_10102017111633.txt', NULL, b'1'),
(320, 'MPH_273__Paper_MATER_SMARTCOMM_10102017032055.txt - 294 lines', 'mater', '2017-10-11 16:00:34', NULL, 294, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_MATER_SMARTCOMM_10102017032055.txt', NULL, b'1'),
(321, 'MPH_273__Paper_POWVIP_SMARTCOMM_10102017104856.txt - 41 lines', 'mater', '2017-10-11 16:00:40', NULL, 41, NULL, '2017-10-10 15:29:12', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_14', 'MPH_273__Paper_POWVIP_SMARTCOMM_10102017104856.txt', NULL, b'1'),
(322, 'MPH_273__Paper_POW_SMARTCOMM_10102017032055.txt - 112 lines', 'mater', '2017-10-11 16:00:46', NULL, 112, NULL, '2017-10-10 15:29:12', 67036, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 067036 - Daily Ticketing - OCTOBER #273 S2\\ORIGINAL DATA\\DAY_5', 'MPH_273__Paper_POW_SMARTCOMM_10102017032055.txt', NULL, b'1'),
(323, 'MPH_273__Paper_SOVVIP_SMARTCOMM_10102017104250.txt - 19 lines', 'mater', '2017-10-11 16:00:52', NULL, 19, NULL, '2017-10-10 15:29:12', 66627, NULL, 'materdaily', 'S:\\Mater Foundation\\Job 066627 - MPH - VIP Mailout - 273 - S1\\ORIGINAL DATA\\DAY_14', 'MPH_273__Paper_SOVVIP_SMARTCOMM_10102017104250.txt', NULL, b'1'),
(324, 'MPH_274__Paper_MATER_SMARTCOMM_10102017032133.txt - 7 lines', 'mater', '2017-10-11 16:00:59', NULL, 7, NULL, '2017-10-10 15:29:12', 67070, NULL, '', 'S:\\Mater Foundation\\Job 067070 - Daily Ticketing - OCTOBER #274 S1\\ORIGINAL DATA\\DAY_2', 'MPH_274__Paper_MATER_SMARTCOMM_10102017032133.txt', NULL, b'1'),
(325, 'CFK_2027__Paper_MATER_SMARTCOMM_18112016104949.txt - 8 lines', 'mater', NULL, NULL, 8, NULL, '2017-10-11 07:57:36', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(326, 'COMPLETED AU_RENEWAL_2017-10-11-07-00-00.txt - 475 lines', 'allianz', NULL, NULL, 475, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(327, 'COMPLETED BMW_MINI_RENEWAL_2017-10-11-07-00-00.txt - 93 lines', 'allianz', NULL, NULL, 93, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(328, 'COMPLETED CHR_RENEWAL_2017-10-11-07-00-00.txt - 22 lines', 'allianz', NULL, NULL, 22, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(329, 'COMPLETED DOD_RENEWAL_2017-10-11-07-00-00.txt - 5 lines', 'allianz', NULL, NULL, 5, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(330, 'COMPLETED DUC_RENEWAL_2017-10-11-07-00-00.txt - 77 lines', 'allianz', NULL, NULL, 77, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(331, 'COMPLETED DUC_Welcome_2017-10-11-07-00-00.txt - 16 lines', 'allianz', NULL, NULL, 16, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(332, 'COMPLETED HAR_RENEWAL_2017-10-11-07-00-00.txt - 370 lines', 'allianz', NULL, NULL, 370, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(333, 'COMPLETED Jeep_Renewal_2017-10-11-07-00-00.txt - 612 lines', 'allianz', NULL, NULL, 612, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(334, 'COMPLETED MAZDA_RENEWAL_2017-10-11-07-00-00.txt - 265 lines', 'allianz', NULL, NULL, 265, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(335, 'COMPLETED MBV_RENEWAL_2017-10-11-07-00-00.txt - 96 lines', 'allianz', NULL, NULL, 96, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(336, 'COMPLETED MERC_RENEWAL_2017-10-11-07-00-00.txt - 944 lines', 'allianz', NULL, NULL, 944, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(337, 'COMPLETED NAB EHA Renewal_2017-10-11-07-00-00.txt - 957 lines', 'allianz', NULL, NULL, 957, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(338, 'COMPLETED SMART_RENEWAL_2017-10-09-04-16-19.txt - 5 lines', 'allianz', NULL, NULL, 5, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(339, 'COMPLETED Skoda_Renewal_2017-10-11-07-00-00.txt - 59 lines', 'allianz', NULL, NULL, 59, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(340, 'Completed Allianz_Direct_EHA_Renewal_2017-10-11-07-00-00.txt - 15 lines', 'allianz', NULL, NULL, 15, NULL, '2017-10-11 10:42:39', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(341, 'COMPLETED TATA_REFERRAL_2017-10-09-04-54-01.txt - 3 lines', 'allianz', NULL, NULL, 3, NULL, '2017-10-11 10:47:43', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(342, 'COMPLETED TOY_EC_RENEWAL_2017-10-11-07-00-00.txt - 698 lines', 'allianz', NULL, NULL, 698, NULL, '2017-10-11 10:47:43', NULL, NULL, '', NULL, NULL, NULL, b'1'),
(343, 'MHS_111017.txt - 516 lines', 'mater', '2017-10-11 15:59:24', NULL, 516, NULL, '2017-10-11 11:05:47', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\11.10', 'MHS_111017.txt', NULL, b'1'),
(344, 'MHS_3Wk_appfailtoconfirmGP_111017.txt - 12 lines', 'mater', '2017-10-11 15:59:30', NULL, 12, NULL, '2017-10-11 11:05:47', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\11.10', 'MHS_3Wk_appfailtoconfirmGP_111017.txt', NULL, b'1'),
(345, 'MHS_6Wk_ExpRefGP_111017.txt - 17 lines', 'mater', '2017-10-11 15:59:36', NULL, 17, NULL, '2017-10-11 11:05:47', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\11.10', 'MHS_6Wk_ExpRefGP_111017.txt', NULL, b'1'),
(346, 'MHS_6Wk_ExpRef_111017.txt - 30 lines', 'mater', '2017-10-11 15:59:42', NULL, 30, NULL, '2017-10-11 11:05:47', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\11.10', 'MHS_6Wk_ExpRef_111017.txt', NULL, b'1'),
(347, 'WLOPBreachLetter_11102017.txt - 63 lines', 'mater', '2017-10-11 15:59:48', NULL, 63, NULL, '2017-10-11 11:05:47', 67046, NULL, '', 'S:\\Mater Misericordiae Ltd\\Job 067046 - Daily Hospital Files - October\\CLIENT_FILES\\11.10', 'WLOPBreachLetter_11102017.txt', NULL, b'1'),
(348, 'MAIL350-11102017.txt - 2,390 lines', 'rsl', '2017-10-11 15:57:46', NULL, 2390, NULL, '2017-10-11 11:17:47', 66890, NULL, 'rsldaily', 'S:\\RSL Art Union\\Art Union 350\\xALL DAILY JOBS\\Job 066890 - RSL - AU350 - Daily Digger Tickets\\11-10-2017\\Data', 'MAIL350-11102017.txt', NULL, b'1'),
(349, 'MAIL351-PREORDER-11102017.txt - 448 lines', 'rsl', '2017-10-11 15:57:49', NULL, 448, NULL, '2017-10-11 11:17:47', 66549, NULL, '', 'S:\\RSL Art Union\\Art Union 349\\ALL DAILY JOBS\\Job 066549 - RSL - AU349 - Daily Preorder\\11-10-2017\\Data', 'MAIL351-PREORDER-11102017.txt', NULL, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(75) DEFAULT NULL,
  `logged_in_date` datetime DEFAULT NULL,
  `last_logged_in` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `active` char(1) DEFAULT NULL,
  `usertype` tinyint(4) DEFAULT NULL,
  `sched_settings` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `username`, `password`, `position`, `email`, `first_name`, `last_name`, `logged_in_date`, `last_logged_in`, `updated_at`, `created_at`, `active`, `usertype`, `sched_settings`) VALUES
(1, 'admin', '$2a$05$44eFQKApJDFJsDwv6ctkb.Zirbh0XU84JL.dmMaE/Vu.WCGHyb.P2', 'Admin', 'ernani.danting@smartcomm.net.au', 'Super', 'Admin', NULL, NULL, '2017-09-22 05:05:21', '2017-08-30 14:49:23', '1', 0, NULL),
(2, 'glen.noyce', '$2a$05$1MBJJM783FsWQ3D11SdC.uaN2WzYXOxDLnFsyyHsrzHqKkp59x8xq', 'Senior Manager', 'glen.noyce@smartcomm.net.au', 'Glen', 'Noyce', NULL, NULL, '2017-12-05 23:42:48', '2017-08-30 14:49:48', '1', 2, NULL),
(4, 'kristy.bickley', '$2a$05$94t1szThKbwCaZHKyE/HcebgYCBiHHC7d.pbyzFmMnQq/EV77HXIS', 'Account Manager', 'kristy.bickley@smartcomm.net.au', 'Kristy', 'Bickley', NULL, NULL, '2017-10-06 09:33:56', '2017-09-22 04:56:42', NULL, 1, NULL),
(5, 'rod.pierce', '$2a$05$XlzrN/VCCxk/0x/VZOASpuR162bePv4qIGjxF3CbMwQmJvuVtjSgq', 'Director', 'rod.pierce@smartcomm.net.au', 'Rod', 'Pierce', NULL, NULL, '2017-09-22 05:04:22', '2017-09-22 05:04:22', NULL, 0, NULL),
(6, 'john.doe', '$2a$05$refc6Z4j3av9F8AEk1AvNef4FqFwp4WmOW9/i27jzmVHnicQOAy5e', 'Programmer', 'it@smartcomm.net.au', 'John', 'Doe', NULL, NULL, '2017-10-05 15:20:14', '2017-10-04 21:06:42', NULL, 2, NULL),
(7, 'jacqui.wood', '$2a$05$CwyLHgaL4O2kkBO9joI1CeOPg6fHeRiedihm36G.R082DP4jqO2kO', 'ACCOUNT COORDINATOR', 'jacqui.wood@smartcomm.net.au', 'Jacqui', 'Wood', NULL, NULL, '2017-10-05 15:19:59', '2017-10-05 15:16:48', NULL, 1, NULL),
(8, 'ernani.danting', '$2a$05$s6kVV8y/3X0wKL3htH9XN.cNdmFS9HurY5AfjmtgxHJxYPYlQmEeu', 'Web Dev/Programmer', 'ernani.danting@smartcomm.net.au', 'Ernani', 'Danting', NULL, NULL, '2017-10-05 15:18:25', '2017-10-05 15:18:25', NULL, 2, NULL),
(9, 'ben.bickley', '$2a$05$9CiqVFHMGnx4QlZf3nJd0OG2X66yjF/svhgdfv4jduKjf4gDLimky', 'Senior Developer', 'ben.bickley@smartcomm.net.au', 'Ben', 'Bickley', NULL, NULL, '2017-10-05 16:33:45', '2017-10-05 15:19:41', NULL, 1, NULL),
(10, 'kim.hedrick', '$2a$05$x.hDDU54ptwB/y/8TsYfkuI3t1UHCbnj9GfgWCV3IrCQLMbwv7wN6', 'Relationship Manager', 'kim.hedrick@smartcomm.net.au', 'Kim', 'Hedrick', NULL, NULL, '2017-10-05 16:32:16', '2017-10-05 16:32:16', NULL, 1, NULL),
(11, 'belinda.locock', '$2a$05$fMdfW.8gKKlYPvsqtunIy.BNIzRiOhbOAqKDDZYWupvzfxqIvG5Ny', 'Account Manager', 'belinda.locock@smartcomm.net.au', 'Belinda', 'Locock', NULL, NULL, '2017-10-05 16:33:28', '2017-10-05 16:33:28', NULL, 1, NULL),
(12, 'michael.engstrom', '$2a$05$ZxDG4PwGzEeRvYPq1VJwI.ZtQOqUD.71.Mv7.9AgI4oztzl.APWBy', 'IT Programmer', 'michael.engstrom@smartcomm.net.au', 'Michael', 'Engstrom', NULL, NULL, '2017-10-05 16:35:46', '2017-10-05 16:35:46', NULL, 1, NULL),
(13, 'natasha.jovanovic', '$2a$05$VkoflRALp/V94yuCE1l4he4nM4Xu0t0SVkupNL9r4nu.8B.0GHLmu', 'Programming Support', 'natasha.jovanovic@smartcomm.net.au', 'Natasha', 'Jovanovic ', NULL, NULL, '2017-10-05 16:37:56', '2017-10-05 16:37:56', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sched_department`
--

CREATE TABLE `sched_department` (
  `job_dept_id` int(11) NOT NULL,
  `job_dept_desc` varchar(255) NOT NULL,
  `job_dep_code` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `job_dep_parent` int(11) DEFAULT '0',
  `job_dep_order` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_department`
--

INSERT INTO `sched_department` (`job_dept_id`, `job_dept_desc`, `job_dep_code`, `updated_at`, `created_at`, `job_dep_parent`, `job_dep_order`) VALUES
(1, 'Programming', 5, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, 0),
(2, 'Digital Printing', 10, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, 1),
(3, 'Machine Inserting', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, 2),
(4, 'Mono', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, 3),
(5, 'Colour', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, 4),
(6, 'Continous', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, 5),
(7, 'K1', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, 6),
(8, 'K2', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, 7),
(9, 'K3', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, 8),
(10, '4 Station', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, 9);

-- --------------------------------------------------------

--
-- Table structure for table `sched_job_bags`
--

CREATE TABLE `sched_job_bags` (
  `job_id` int(11) NOT NULL,
  `job_prism_job_id` int(11) DEFAULT NULL,
  `job_prism_number` int(11) DEFAULT NULL,
  `job_title` varchar(250) NOT NULL,
  `job_customer_name` varchar(250) DEFAULT NULL,
  `job_colour` varchar(7) DEFAULT NULL,
  `job_print_date` date DEFAULT NULL,
  `job_due_date` date DEFAULT NULL,
  `job_lodge_date` date DEFAULT NULL,
  `job_reports_ids` varchar(255) DEFAULT NULL,
  `job_comments` varchar(255) DEFAULT NULL,
  `job_status` varchar(50) DEFAULT NULL,
  `job_created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `job_qty` varchar(10) DEFAULT NULL,
  `job_type` varchar(100) DEFAULT 'once',
  `job_departments` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bags`
--

INSERT INTO `sched_job_bags` (`job_id`, `job_prism_job_id`, `job_prism_number`, `job_title`, `job_customer_name`, `job_colour`, `job_print_date`, `job_due_date`, `job_lodge_date`, `job_reports_ids`, `job_comments`, `job_status`, `job_created_by`, `created_at`, `updated_at`, `job_qty`, `job_type`, `job_departments`) VALUES
(1, 94270, NULL, 'Extra March 2018 Inspirations                                           ', 'Flight Centre                                                           ', NULL, '1970-01-01', '2018-03-06', NULL, '', '', 'stand by', 0, '2018-03-06 09:35:19', '2018-03-06 09:35:19', '26948', 'once', '1,4'),
(2, 94285, 68859, 'MBV Renewal', 'Allianz Global Assistance                                               ', NULL, '2018-02-13', '2018-02-13', '2018-02-13', '', '', 'stand by', 0, '2018-03-06 09:37:04', '2018-03-06 09:37:04', '625', 'once', '1,4,5'),
(3, 94267, 68843, 'Club + Card Aust Weekly 050318                                          ', 'Supercheap Auto                                                         ', NULL, '2018-03-07', '2018-03-08', NULL, '', '', 'stand by', 0, '2018-03-08 16:47:23', '2018-03-08 16:47:23', '266', 'once', '1,4'),
(4, 94269, 68844, 'BlueCare Monthly Statements                                             ', 'Blue Care                                                               ', NULL, '2018-03-09', '2018-03-13', NULL, '', '', 'stand by', 0, '2018-03-09 13:07:42', '2018-03-09 13:07:42', '60000', 'once', '1,5,6,7'),
(5, 94278, 68852, 'Allianz EHA Retail WP                                                   ', 'Allianz Global Assistance                                               ', NULL, '2018-02-28', '2018-02-16', NULL, '', '', 'stand by', 0, '2018-03-09 13:08:02', '2018-03-09 13:08:02', '30', 'once', '1,4,5,6,7'),
(6, 94275, 68849, 'Toyota UR                                                               ', 'Allianz Global Assistance                                               ', NULL, '2018-02-28', '2018-02-02', NULL, '', '', 'stand by', 0, '2018-03-09 13:08:21', '2018-03-09 13:08:21', '619', 'once', '1,5,6,7'),
(7, 94276, 68850, 'Toyota UR                                                               ', 'Allianz Global Assistance                                               ', NULL, '2018-02-28', '2018-02-09', NULL, '', '', 'stand by', 0, '2018-03-09 13:08:41', '2018-03-09 13:08:41', '673', 'once', '1,4,6,5,8'),
(8, 94273, 68847, 'All Other Pallet                                                        ', '', NULL, '2018-02-27', '2018-02-27', NULL, '', '', 'stand by', 0, '2018-03-09 13:09:04', '2018-03-13 08:45:36', '53', 'recurring', '1,5,6'),
(23, 94441, 68985, 'AU354 - Reminder Batch 2                                                ', 'RSL Art Union                                                           ', NULL, '1970-01-01', '2018-03-29', NULL, '', '', 'stand by', 0, '2018-03-13 11:22:13', '2018-03-13 11:22:13', '85000', 'recurring', '1,4,5'),
(9, 94274, 68848, 'All Other Freight                                                       ', 'Allianz Global Assistance                                               ', NULL, '2018-02-28', '2018-02-28', NULL, '', '', 'stand by', 0, '2018-03-09 13:09:25', '2018-03-09 13:09:25', '1', 'once', '4,6,7,8'),
(10, 94271, 68845, 'PCYC Marketing Portal Monthly - Mar                                     ', 'Qld Police-Citizens Youth Welfare                                       ', NULL, '1970-01-01', '2018-03-31', NULL, '', '', 'stand by', 0, '2018-03-09 13:10:00', '2018-03-09 13:10:00', '1', 'once', '1,4,5'),
(11, 94265, 68841, 'BCF Member Cards 050318                                                 ', 'Super Retail Group Services                                             ', NULL, '2018-03-07', '2018-03-08', NULL, '', '', 'stand by', 0, '2018-03-09 13:11:18', '2018-03-09 13:11:18', '1524', 'once', '1,4,6,5'),
(12, 94340, NULL, 'B4 Envelopes                                                            ', 'QML Pathology                                                           ', NULL, '1970-01-01', '2018-03-06', NULL, '', '', 'stand by', 0, '2018-03-09 13:12:11', '2018-03-09 13:12:11', '1', 'once', '4,6,5'),
(13, 94272, 68846, 'Monthly Email send costs - MARCH                                        ', '', NULL, '1970-01-01', '2018-03-30', NULL, '', '', 'stand by', 0, '2018-03-09 13:12:35', '2018-03-12 13:59:59', '0', 'once', '1,4,5'),
(20, 94439, 68983, 'BlueCare Self Seal Env Supply                                           ', 'Blue Care                                                               ', NULL, '1970-01-01', '2018-03-13', NULL, '', '', 'stand by', 0, '2018-03-12 14:51:29', '2018-03-12 14:51:29', '3000', 'once', '4,1'),
(14, 94277, 68851, 'Skoda UR                                                                ', 'Allianz Global Assistance                                               ', NULL, '2018-02-28', '2018-02-19', NULL, '', '', 'stand by', 0, '2018-03-09 13:12:55', '2018-03-09 13:12:55', '136', 'once', '1,4'),
(19, 94438, NULL, '2pp A4 Duplex Black 90gsm SunOffset                                     ', '', NULL, '1970-01-01', '2018-03-13', NULL, '', '', 'stand by', 0, '2018-03-12 11:04:47', '2018-03-13 15:50:52', '1', 'once', '1,4'),
(24, NULL, NULL, 'Return stock freight', '', NULL, NULL, NULL, NULL, '', '', 'stand by', 0, '2018-03-13 16:00:16', '2018-03-13 16:00:16', '0', 'once', '1'),
(16, 94369, 68942, 'Toyota Yaris & Camry WP Set-up                                          ', 'Allianz Global Assistance                                               ', NULL, '2018-03-07', '2018-03-07', NULL, '', '', 'stand by', 0, '2018-03-12 10:27:08', '2018-03-12 10:27:08', '222', 'once', '1'),
(21, 94440, 68984, 'AU354 - Reminder Batch 1                                                ', '', NULL, '1970-01-01', '2018-03-22', NULL, '', '', 'stand by', 0, '2018-03-12 16:20:23', '2018-03-13 16:03:45', '85000', 'once', '1'),
(22, 94366, 68939, 'Skoda Renewal                                                           ', 'Allianz Global Assistance                                               ', NULL, '2018-02-27', '2018-02-27', NULL, '', '', 'stand by', 0, '2018-03-12 16:55:54', '2018-03-12 16:55:54', '19', 'once', '5,6,7,1');

-- --------------------------------------------------------

--
-- Table structure for table `sched_job_bag_department`
--

CREATE TABLE `sched_job_bag_department` (
  `job_dp_id` int(11) NOT NULL,
  `job_id` int(11) DEFAULT NULL,
  `job_dp_dept` int(11) NOT NULL,
  `job_group_id` int(11) NOT NULL,
  `job_dp_date` date DEFAULT NULL,
  `job_dp_created_date` date DEFAULT NULL,
  `job_dp_started_date` datetime DEFAULT NULL,
  `job_dp_finished_date` datetime DEFAULT NULL,
  `job_dp_proof_date` date DEFAULT NULL,
  `job_dp_print_date` date DEFAULT NULL,
  `job_dp_status` varchar(50) DEFAULT NULL,
  `job_dp_comments` varchar(255) DEFAULT NULL,
  `job_dp_order` int(11) DEFAULT '0',
  `job_dp_minutes` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `job_dp_allocated_to` int(11) DEFAULT NULL,
  `job_dp_allocatee_comments` varchar(255) DEFAULT NULL,
  `job_dp_qty` varchar(100) DEFAULT '0',
  `job_allocated_hours` decimal(10,0) NOT NULL DEFAULT '0',
  `job_dp_stock_picked` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bag_department`
--

INSERT INTO `sched_job_bag_department` (`job_dp_id`, `job_id`, `job_dp_dept`, `job_group_id`, `job_dp_date`, `job_dp_created_date`, `job_dp_started_date`, `job_dp_finished_date`, `job_dp_proof_date`, `job_dp_print_date`, `job_dp_status`, `job_dp_comments`, `job_dp_order`, `job_dp_minutes`, `created_at`, `updated_at`, `job_dp_allocated_to`, `job_dp_allocatee_comments`, `job_dp_qty`, `job_allocated_hours`, `job_dp_stock_picked`) VALUES
(1, 1, 1, 1, '2018-03-05', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-06 09:35:19', '2018-03-13 16:03:09', 2, NULL, '0', '0', NULL),
(2, 1, 4, 1, '2018-03-06', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-06 09:35:19', '2018-03-06 09:35:19', NULL, NULL, '0', '0', NULL),
(3, 2, 1, 2, '2018-03-10', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-06 09:37:04', '2018-03-08 14:46:00', NULL, NULL, '0', '0', NULL),
(4, 2, 4, 2, '2018-03-08', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-06 09:37:04', '2018-03-09 15:02:01', NULL, NULL, '0', '0', NULL),
(5, 2, 5, 2, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-06 09:37:04', '2018-03-06 09:37:04', NULL, NULL, '0', '0', NULL),
(6, 3, 1, 3, '2018-03-08', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-08 16:47:23', '2018-03-09 12:48:11', NULL, NULL, '0', '0', NULL),
(7, 3, 4, 3, '2018-03-09', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-08 16:47:23', '2018-03-09 15:01:56', NULL, NULL, '0', '0', NULL),
(8, 4, 1, 4, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:07:42', '2018-03-09 13:07:42', NULL, NULL, '0', '0', NULL),
(9, 4, 5, 4, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:07:42', '2018-03-09 13:07:42', NULL, NULL, '0', '0', NULL),
(10, 4, 6, 4, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:07:42', '2018-03-09 13:07:42', NULL, NULL, '0', '0', NULL),
(11, 4, 7, 4, '2018-03-08', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:07:42', '2018-03-12 16:57:39', NULL, NULL, '0', '0', NULL),
(12, 5, 1, 5, '2018-03-05', '2018-03-05', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:02', '2018-03-09 13:08:02', NULL, NULL, '0', '0', NULL),
(13, 5, 4, 5, '2018-03-05', '2018-03-05', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:02', '2018-03-09 13:08:02', NULL, NULL, '0', '0', NULL),
(14, 5, 5, 5, '2018-03-05', '2018-03-05', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:02', '2018-03-09 13:08:02', NULL, NULL, '0', '0', NULL),
(15, 5, 6, 5, '2018-03-05', '2018-03-05', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:02', '2018-03-09 13:08:02', NULL, NULL, '0', '0', NULL),
(16, 5, 7, 5, '2018-03-05', '2018-03-05', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:02', '2018-03-09 13:08:02', NULL, NULL, '0', '0', NULL),
(17, 6, 1, 6, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:21', '2018-03-09 13:08:21', NULL, NULL, '0', '0', NULL),
(18, 6, 5, 6, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:21', '2018-03-09 13:08:21', NULL, NULL, '0', '0', NULL),
(19, 6, 6, 6, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:21', '2018-03-09 13:08:21', NULL, NULL, '0', '0', NULL),
(20, 6, 7, 6, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:21', '2018-03-09 13:08:21', NULL, NULL, '0', '0', NULL),
(21, 7, 1, 7, '2018-03-06', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:41', '2018-03-09 13:08:41', NULL, NULL, '0', '0', NULL),
(22, 7, 4, 7, '2018-03-05', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:41', '2018-03-09 13:13:24', NULL, NULL, '0', '0', NULL),
(23, 7, 6, 7, '2018-03-06', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:41', '2018-03-09 13:08:41', NULL, NULL, '0', '0', NULL),
(24, 7, 5, 7, '2018-03-06', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:41', '2018-03-09 13:08:41', NULL, NULL, '0', '0', NULL),
(25, 7, 8, 7, '2018-03-06', '2018-03-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:08:41', '2018-03-09 13:08:41', NULL, NULL, '0', '0', NULL),
(26, 8, 1, 8, '2018-03-08', '2018-03-08', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:04', '2018-03-09 13:09:04', NULL, NULL, '0', '0', NULL),
(27, 8, 5, 8, '2018-03-08', '2018-03-08', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:04', '2018-03-09 13:09:04', NULL, NULL, '0', '0', NULL),
(28, 8, 6, 8, '2018-03-08', '2018-03-08', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:05', '2018-03-09 13:09:05', NULL, NULL, '0', '0', NULL),
(29, 9, 4, 9, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:25', '2018-03-09 13:09:25', NULL, NULL, '0', '0', NULL),
(30, 9, 6, 9, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:25', '2018-03-09 13:09:25', NULL, NULL, '0', '0', NULL),
(31, 9, 7, 9, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:25', '2018-03-09 13:09:25', NULL, NULL, '0', '0', NULL),
(32, 9, 8, 9, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:09:25', '2018-03-09 13:09:25', NULL, NULL, '0', '0', NULL),
(33, 10, 1, 10, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:00', '2018-03-09 13:10:00', NULL, NULL, '0', '0', NULL),
(34, 10, 4, 10, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:00', '2018-03-09 13:10:00', NULL, NULL, '0', '0', NULL),
(35, 10, 5, 10, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:00', '2018-03-09 13:10:00', NULL, NULL, '0', '0', NULL),
(36, 8, 1, 11, '2018-03-04', '2018-03-04', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:54', '2018-03-09 13:10:54', NULL, NULL, NULL, '0', NULL),
(37, 8, 5, 11, '2018-03-04', '2018-03-04', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:54', '2018-03-09 13:10:54', NULL, NULL, NULL, '0', NULL),
(38, 8, 6, 11, '2018-03-04', '2018-03-04', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:10:54', '2018-03-09 13:10:54', NULL, NULL, NULL, '0', NULL),
(39, 11, 1, 12, '2018-03-06', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:11:18', '2018-03-09 14:27:13', NULL, NULL, '0', '0', NULL),
(40, 11, 4, 12, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:11:18', '2018-03-09 13:11:18', NULL, NULL, '0', '0', NULL),
(41, 11, 6, 12, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:11:18', '2018-03-09 13:11:18', NULL, NULL, '0', '0', NULL),
(42, 11, 5, 12, '2018-03-07', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:11:18', '2018-03-09 13:11:18', NULL, NULL, '0', '0', NULL),
(43, 12, 4, 13, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:11', '2018-03-09 13:12:11', NULL, NULL, '0', '0', NULL),
(44, 12, 6, 13, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:11', '2018-03-09 13:12:11', NULL, NULL, '0', '0', NULL),
(45, 12, 5, 13, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:11', '2018-03-09 13:12:11', NULL, NULL, '0', '0', NULL),
(46, 13, 1, 14, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:35', '2018-03-09 13:12:35', NULL, NULL, '0', '0', NULL),
(47, 13, 4, 14, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:35', '2018-03-09 13:12:35', NULL, NULL, '0', '0', NULL),
(48, 13, 5, 14, '2018-03-09', '2018-03-09', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-09 13:12:35', '2018-03-09 13:12:35', NULL, NULL, '0', '0', NULL),
(57, 19, 1, 22, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 11:04:47', '2018-03-13 15:56:57', 2, NULL, '0', '0', NULL),
(58, 19, 4, 22, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 11:04:47', '2018-03-12 11:04:47', NULL, NULL, '0', '0', NULL),
(59, 20, 4, 23, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 14:51:29', '2018-03-12 14:51:29', NULL, NULL, '0', '0', NULL),
(60, 20, 1, 23, '2018-03-13', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 14:51:29', '2018-03-12 14:51:35', NULL, NULL, '0', '0', NULL),
(61, 8, 1, 24, '2018-03-14', '2018-03-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 15:32:20', '2018-03-12 15:32:20', NULL, NULL, NULL, '0', NULL),
(62, 8, 5, 24, '2018-03-14', '2018-03-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 15:32:20', '2018-03-12 15:32:20', NULL, NULL, NULL, '0', NULL),
(63, 8, 6, 24, '2018-03-14', '2018-03-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 15:32:20', '2018-03-12 15:32:20', NULL, NULL, NULL, '0', NULL),
(64, 21, 1, 25, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:20:23', '2018-03-13 16:03:45', 2, NULL, '0', '0', NULL),
(65, 8, 1, 26, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:52:37', '2018-03-13 16:09:25', 2, NULL, NULL, '0', NULL),
(66, 8, 5, 26, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:52:37', '2018-03-12 16:52:37', NULL, NULL, NULL, '0', NULL),
(67, 8, 6, 26, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:52:37', '2018-03-12 16:52:37', NULL, NULL, NULL, '0', NULL),
(68, 22, 5, 27, '2018-03-10', '2018-03-10', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:55:54', '2018-03-12 16:55:54', NULL, NULL, '0', '0', NULL),
(69, 22, 6, 27, '2018-03-10', '2018-03-10', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:55:54', '2018-03-12 16:55:54', NULL, NULL, '0', '0', NULL),
(70, 22, 7, 27, '2018-03-10', '2018-03-10', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:55:54', '2018-03-12 16:55:54', NULL, NULL, '0', '0', NULL),
(71, 22, 1, 27, '2018-03-10', '2018-03-10', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-12 16:55:54', '2018-03-12 16:55:54', NULL, NULL, '0', '0', NULL),
(72, 8, 1, 28, '2018-03-11', '2018-03-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-13 08:38:17', '2018-03-13 16:11:38', 8, NULL, NULL, '0', NULL),
(73, 8, 5, 28, '2018-03-11', '2018-03-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-13 08:38:17', '2018-03-13 08:38:17', NULL, NULL, NULL, '0', NULL),
(74, 8, 6, 28, '2018-03-11', '2018-03-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2018-03-13 08:38:17', '2018-03-13 08:38:17', NULL, NULL, NULL, '0', NULL),
(75, 23, 1, 29, '2018-03-13', '2018-03-13', NULL, NULL, NULL, NULL, 'stand by', NULL, 0, NULL, '2018-03-13 11:22:13', '2018-03-13 11:22:13', NULL, NULL, '0', '0', NULL),
(76, 23, 4, 29, '2018-03-13', '2018-03-13', NULL, NULL, NULL, NULL, 'stand by', NULL, 0, NULL, '2018-03-13 11:22:13', '2018-03-13 11:22:13', NULL, NULL, '0', '0', NULL),
(77, 23, 5, 29, '2018-03-13', '2018-03-13', NULL, NULL, NULL, NULL, 'stand by', NULL, 0, NULL, '2018-03-13 11:22:13', '2018-03-13 11:22:13', NULL, NULL, '0', '0', NULL),
(78, 24, 1, 30, '2018-03-12', '2018-03-12', NULL, NULL, NULL, NULL, 'stand by', NULL, 0, NULL, '2018-03-13 16:00:16', '2018-03-13 16:00:16', 2, NULL, '0', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sched_job_bag_department_group`
--

CREATE TABLE `sched_job_bag_department_group` (
  `job_group_id` int(11) NOT NULL,
  `job_group_qty` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bag_department_group`
--

INSERT INTO `sched_job_bag_department_group` (`job_group_id`, `job_group_qty`, `job_id`, `created_at`, `updated_at`) VALUES
(1, 26948, 1, '2018-03-06 09:35:19', '2018-03-06 09:35:19'),
(2, 625, 2, '2018-03-06 09:37:04', '2018-03-06 09:37:04'),
(3, 266, 3, '2018-03-08 16:47:23', '2018-03-08 16:47:23'),
(4, 60000, 4, '2018-03-09 13:07:42', '2018-03-09 13:07:42'),
(5, 30, 5, '2018-03-09 13:08:02', '2018-03-09 13:08:02'),
(6, 619, 6, '2018-03-09 13:08:21', '2018-03-09 13:08:21'),
(7, 673, 7, '2018-03-09 13:08:41', '2018-03-09 13:08:41'),
(8, 53, 8, '2018-03-09 13:09:04', '2018-03-09 13:09:04'),
(9, 1, 9, '2018-03-09 13:09:25', '2018-03-09 13:09:25'),
(10, 1, 10, '2018-03-09 13:10:00', '2018-03-09 13:10:00'),
(11, 53, 8, '2018-03-09 13:10:54', '2018-03-09 13:10:54'),
(12, 1524, 11, '2018-03-09 13:11:18', '2018-03-09 13:11:18'),
(13, 1, 12, '2018-03-09 13:12:11', '2018-03-09 13:12:11'),
(14, 0, 13, '2018-03-09 13:12:35', '2018-03-09 13:12:35'),
(15, 136, 14, '2018-03-09 13:12:55', '2018-03-09 13:12:55'),
(16, 53, 8, '2018-03-09 13:14:39', '2018-03-09 13:14:39'),
(17, 53, 8, '2018-03-09 13:15:02', '2018-03-09 13:15:02'),
(18, 1, 15, '2018-03-12 10:26:32', '2018-03-12 10:26:32'),
(19, 222, 16, '2018-03-12 10:27:08', '2018-03-12 10:27:08'),
(20, 1, 17, '2018-03-12 10:57:16', '2018-03-12 10:57:16'),
(21, 1, 18, '2018-03-12 11:00:49', '2018-03-12 11:00:49'),
(22, 1, 19, '2018-03-12 11:04:47', '2018-03-12 11:04:47'),
(23, 3000, 20, '2018-03-12 14:51:29', '2018-03-12 14:51:29'),
(24, 53, 8, '2018-03-12 15:32:20', '2018-03-12 15:32:20'),
(25, 85000, 21, '2018-03-12 16:20:23', '2018-03-12 16:20:23'),
(26, 53, 8, '2018-03-12 16:52:37', '2018-03-12 16:52:37'),
(27, 19, 22, '2018-03-12 16:55:54', '2018-03-12 16:55:54'),
(28, 53, 8, '2018-03-13 08:38:17', '2018-03-13 08:38:17'),
(29, 85000, 23, '2018-03-13 11:22:13', '2018-03-13 11:22:13'),
(30, 0, 24, '2018-03-13 16:00:16', '2018-03-13 16:00:16');

-- --------------------------------------------------------

--
-- Table structure for table `sched_settings`
--

CREATE TABLE `sched_settings` (
  `id` int(11) NOT NULL,
  `setting_name` varchar(255) NOT NULL,
  `setting_label` varchar(255) NOT NULL,
  `setting_value` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_settings`
--

INSERT INTO `sched_settings` (`id`, `setting_name`, `setting_label`, `setting_value`) VALUES
(1, 'tabs', 'Main Tabs', '[{"id":"calendar","label":"Calendar","icon":"calendar icon"},{"id":"managejobs","label":"Manage Jobs","icon":"list layout icon"},{"id":"managetasks","label":"My Tasks","icon":"hourglass end icon"},{"id":"usersettings","label": "User settings","url":"/webapps/admin.php","icon":"linkify icon"},{"id":"reports","label":"Reports","icon":"linkify icon"},{"id":"schedulingsettings","label":"Scheduling Tool Settings","icon":"setting icon"}]'),
(2, 'job_it_status', 'Job IT Statuses', '["stand by","work in progress","on hold","done"]'),
(3, 'job_prod_status', 'Job Production Statuses', '["stand by","work in progress","done"]'),
(4, 'job_types', 'Job Types', '[{"id": "once","text":"Once"},{"id": "recurring","text":"Recurring"}]'),
(5, 'react_api_folder', 'Application Api Folder', 'http://192.168.70.22:8181/webapps/schedulingtool/public/react_api/'),
(6, 'react_public_folder', 'React Public Folder', 'http://192.168.70.22:8181/webapps/schedulingtool/public/'),
(7, 'job_status', 'Main Job Status', '["stand by","work in progress","done or closed","archieve"]'),
(8, 'user_default_settings', 'User default setting', '[{"sched_us_calendar_hide_departments": [],"sched_us_department_group":[]}]'),
(9, 'programming_dept_id', 'Programming Department ID', '1'),
(10, 'production_hours_per_day', 'Production Hours Per Day', '13'),
(11, 'colours_setting', 'Scheduling Tool Colour Scheme', '{"hover_calendar_job": "green","job_done": "grey" }');

-- --------------------------------------------------------

--
-- Table structure for table `sched_user_settings`
--

CREATE TABLE `sched_user_settings` (
  `sched_us_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `sched_us_calendar_hide_departments` varchar(100) DEFAULT NULL,
  `sched_us_department_group` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_user_settings`
--

INSERT INTO `sched_user_settings` (`sched_us_id`, `login_id`, `sched_us_calendar_hide_departments`, `sched_us_department_group`) VALUES
(16, 1, '[]', '[]'),
(17, 2, '[]', '[1]'),
(29, 9, '[]', '[1]'),
(28, 8, '[]', '[1]'),
(27, 5, '[]', '[1]'),
(26, 4, '[]', '[]'),
(30, 12, '[]', '[1]'),
(31, 13, '[]', '[1]'),
(32, 10, '[]', '[]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ew_employee_details`
--
ALTER TABLE `ew_employee_details`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `FK_EW_employee_details_login` (`login_id`);

--
-- Indexes for table `ew_employer_details`
--
ALTER TABLE `ew_employer_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ew_payslips`
--
ALTER TABLE `ew_payslips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_EW_payslips_EW_employee_details` (`employee_id`);

--
-- Indexes for table `ir_clients`
--
ALTER TABLE `ir_clients`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `ir_reports`
--
ALTER TABLE `ir_reports`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sched_department`
--
ALTER TABLE `sched_department`
  ADD PRIMARY KEY (`job_dept_id`);

--
-- Indexes for table `sched_job_bags`
--
ALTER TABLE `sched_job_bags`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `sched_job_bag_department`
--
ALTER TABLE `sched_job_bag_department`
  ADD PRIMARY KEY (`job_dp_id`);

--
-- Indexes for table `sched_job_bag_department_group`
--
ALTER TABLE `sched_job_bag_department_group`
  ADD PRIMARY KEY (`job_group_id`);

--
-- Indexes for table `sched_settings`
--
ALTER TABLE `sched_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sched_user_settings`
--
ALTER TABLE `sched_user_settings`
  ADD PRIMARY KEY (`sched_us_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ew_employee_details`
--
ALTER TABLE `ew_employee_details`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ew_employer_details`
--
ALTER TABLE `ew_employer_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ew_payslips`
--
ALTER TABLE `ew_payslips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ir_clients`
--
ALTER TABLE `ir_clients`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `ir_reports`
--
ALTER TABLE `ir_reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=358;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sched_department`
--
ALTER TABLE `sched_department`
  MODIFY `job_dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `sched_job_bags`
--
ALTER TABLE `sched_job_bags`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `sched_job_bag_department`
--
ALTER TABLE `sched_job_bag_department`
  MODIFY `job_dp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- AUTO_INCREMENT for table `sched_job_bag_department_group`
--
ALTER TABLE `sched_job_bag_department_group`
  MODIFY `job_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `sched_settings`
--
ALTER TABLE `sched_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `sched_user_settings`
--
ALTER TABLE `sched_user_settings`
  MODIFY `sched_us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
