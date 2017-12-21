-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2017 at 06:31 AM
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
  `job_type` varchar(100) DEFAULT 'once',
  `job_departments` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bags`
--

INSERT INTO `sched_job_bags` (`job_id`, `job_prism_job_id`, `job_prism_number`, `job_title`, `job_colour`, `job_print_date`, `job_due_date`, `job_lodge_date`, `job_reports_ids`, `job_comments`, `job_status`, `job_created_by`, `created_at`, `updated_at`, `job_qty`, `job_type`, `job_departments`) VALUES
(1, 92595, 67829, 'Supercheap NZ Clubs                                      ', NULL, '1970-01-01', '1970-01-01', NULL, '', '', 'stand by', 0, '2017-12-06 08:41:53', '2017-12-06 11:18:29', '53', 'recurring', '1,4,5'),
(2, NULL, NULL, '', NULL, NULL, NULL, NULL, '', '', 'stand by', 0, '2017-12-06 09:34:59', '2017-12-06 09:34:59', '', 'once', ''),
(3, NULL, NULL, '', NULL, NULL, NULL, NULL, '', '', 'stand by', 0, '2017-12-06 09:37:43', '2017-12-06 09:37:43', '', 'once', ''),
(4, NULL, NULL, '', NULL, NULL, NULL, NULL, '', '', 'stand by', 0, '2017-12-06 10:26:44', '2017-12-06 10:26:44', '', 'once', ''),
(5, 92622, 67851, 'SUN001 Warehousing - December 2017s', NULL, '1970-01-01', '2017-12-05', '2017-12-01', '', '', 'stand by', 0, '2017-12-08 08:28:25', '2017-12-08 08:29:57', '52', 'once', '1'),
(6, 92739, NULL, 'March 2017 Inspirations (92+4)                                          ', NULL, '1970-01-01', '2017-12-12', NULL, '', '', 'stand by', 0, '2017-12-11 14:38:08', '2017-12-11 14:38:08', '21314', 'once', '1,4'),
(7, 92752, 67923, 'Merc UR                                                                 ', NULL, '1970-01-01', '2017-12-13', NULL, '', '', 'stand by', 0, '2017-12-11 14:38:36', '2017-12-11 14:38:36', '967', 'once', '1,4'),
(8, 92748, 67921, 'Toyota Ren Ack                                                          ', NULL, '2017-12-12', '2017-12-13', NULL, '', '', 'stand by', 0, '2017-12-13 12:06:49', '2017-12-13 12:06:49', '322', 'once', '7,8,9');

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
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
