-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2017 at 12:45 AM
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
-- Table structure for table `sched_job_bags`
--

CREATE TABLE `sched_job_bags` (
  `job_id` int(11) NOT NULL,
  `job_prism_job_id` int(11) DEFAULT NULL,
  `job_prism_number` int(11) DEFAULT NULL,
  `job_title` varchar(250) NOT NULL,
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
  `job_type` enum('once','recurring') NOT NULL DEFAULT 'once'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bags`
--

INSERT INTO `sched_job_bags` (`job_id`, `job_prism_job_id`, `job_prism_number`, `job_title`, `job_colour`, `job_print_date`, `job_due_date`, `job_lodge_date`, `job_reports_ids`, `job_comments`, `job_status`, `job_created_by`, `created_at`, `updated_at`, `job_qty`, `job_type`) VALUES
(24, 91807, 67382, 'Xmas appeal mailing                                                     ', NULL, '1970-01-01', '2017-10-31', '1970-01-01', NULL, NULL, 'stand by', 0, '2017-10-31 15:09:03', '2017-10-31 15:09:03', '5000', 'recurring'),
(23, 91806, 67381, 'Skoda UR                                                                ', NULL, '1970-01-01', '2017-11-01', '1970-01-01', NULL, NULL, 'stand by', 0, '2017-10-31 15:08:46', '2017-10-31 15:08:46', '20', 'once'),
(25, 407, 67067, 'PCYC - VIP #80  Mailings 031017                                         ', NULL, '2017-10-05', '2017-10-06', '1970-01-01', NULL, NULL, 'stand by', 0, '2017-11-01 04:33:26', '2017-11-01 04:33:26', '7247', 'recurring'),
(26, 413, 67063, 'SUN002 Warehousing - October 2017                                       ', NULL, '1970-01-01', '2017-10-04', '1970-01-01', NULL, NULL, 'stand by', 0, '2017-11-01 04:34:27', '2017-11-01 04:34:27', '1', 'recurring'),
(27, 411, 67065, 'GIO000 Warehousing - October 2017                                       ', NULL, '1970-01-01', '2017-10-04', '1970-01-01', NULL, NULL, 'stand by', 0, '2017-11-01 05:23:14', '2017-11-01 05:23:14', '1', 'recurring'),
(31, 91892, 67430, 'Daily Hospital Files - November', NULL, '1970-01-01', '2017-11-30', '2017-11-30', '', '', 'stand by', 1, '2017-11-02 16:11:07', '2017-11-02 16:11:07', '1', 'once'),
(32, 91844, 67405, 'Daily Ticketing - NOVEMBER #274 S1', NULL, '2017-11-02', '2017-11-30', '2017-11-30', '', '', 'stand by', 1, '2017-11-02 16:15:21', '2017-11-02 16:15:21', '0', 'once');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sched_job_bags`
--
ALTER TABLE `sched_job_bags`
  ADD PRIMARY KEY (`job_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sched_job_bags`
--
ALTER TABLE `sched_job_bags`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
