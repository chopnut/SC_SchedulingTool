-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2018 at 06:31 AM
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
(1, 92595, 67829, 'Supercheap NZ Clubs                                      ', NULL, NULL, '1970-01-01', '1970-01-01', NULL, '', '', 'stand by', 0, '2017-12-06 08:41:53', '2017-12-06 11:18:29', '53', 'recurring', '1,4,5'),
(5, 92622, 67851, 'SUN001 Warehousing - December 2017s', NULL, NULL, '1970-01-01', '2017-12-05', '2017-12-01', '', '', 'stand by', 0, '2017-12-08 08:28:25', '2017-12-08 08:29:57', '52', 'once', '1'),
(6, 92739, NULL, 'March 2017 Inspirations (92+4)                                          ', NULL, NULL, '1970-01-01', '2017-12-12', NULL, '', '', 'stand by', 0, '2017-12-11 14:38:08', '2017-12-11 14:38:08', '21314', 'once', '1,4'),
(7, 92752, 67923, 'Merc UR                                                                 ', NULL, NULL, '1970-01-01', '2017-12-13', NULL, '', '', 'stand by', 0, '2017-12-11 14:38:36', '2017-12-11 14:38:36', '967', 'once', '1,4'),
(8, 92748, 67921, 'Toyota Ren Ack                                                          ', NULL, NULL, '2017-12-12', '2017-12-13', NULL, '', '', 'stand by', 0, '2017-12-13 12:06:49', '2017-12-13 12:06:49', '322', 'once', '7,8,9'),
(9, 93468, NULL, 'MPH276 Stage 1 mailing                                                  ', NULL, NULL, '1970-01-01', '2018-01-23', NULL, '', '', 'stand by', 8, '2018-01-23 09:07:18', '2018-01-23 09:07:18', '80881', 'once', '1'),
(10, 93469, NULL, 'MPH276 POW Stage 1 Mailing                                              ', NULL, NULL, '1970-01-01', '2018-01-23', NULL, '', '', 'stand by', 8, '2018-01-23 09:09:25', '2018-01-23 09:09:25', '16212', 'once', '1,4,5,6'),
(11, 93472, NULL, 'MPH276 VIP Brochure Mailing                                             ', NULL, NULL, '1970-01-01', '2018-01-23', NULL, '', '', 'stand by', 8, '2018-01-23 09:09:53', '2018-01-23 09:09:53', '65430', 'recurring', '1,7,8'),
(12, 93054, 68109, 'Daily Ticketing - JANUARY  #275', 'Mater Foundation                                                        ', NULL, '2018-01-24', '2018-01-31', '2018-01-31', '', '', 'stand by', 0, '2018-01-24 15:59:19', '2018-01-24 15:59:19', '0', 'once', '1,4'),
(13, 93711, 68509, '12 Month Anniversary Campaign                                           ', 'Suncorp Bank                                                            ', NULL, '1970-01-01', '2018-02-09', NULL, '', '', 'stand by', 0, '2018-02-05 13:04:06', '2018-02-05 13:04:06', '131', 'once', '1,5'),
(14, 93704, 68506, 'Monthly Benchmarking Report eDM JAN                                     ', 'Resilium                                                                ', NULL, '1970-01-01', '2018-02-15', NULL, '', '', 'stand by', 0, '2018-02-08 10:46:00', '2018-02-08 10:46:00', '152', 'once', '4,5,6,1'),
(15, 93712, NULL, 'A6 Cards                                                                ', 'Flight Centre                                                           ', NULL, '1970-01-01', '2018-02-06', NULL, '', '', 'stand by', 0, '2018-02-08 10:48:01', '2018-02-08 10:48:01', '1', 'once', '1'),
(16, 93713, NULL, 'Lottery Self Mailer - Option 2                                          ', 'Surf Life Saving Foundation                                             ', NULL, '1970-01-01', '2018-02-06', NULL, '', '', 'stand by', 0, '2018-02-08 10:49:24', '2018-02-08 10:49:24', '1', 'once', '1'),
(17, 93709, NULL, 'Lottery Self Mailer                                                     ', 'Surf Life Saving Foundation                                             ', NULL, '1970-01-01', '2018-02-06', NULL, '', '', 'stand by', 0, '2018-02-08 10:52:38', '2018-02-08 10:52:38', '1', 'once', '1'),
(18, 93702, 68504, 'Store Optimization - West End                                           ', 'Suncorp Bank                                                            ', NULL, '1970-01-01', '2018-02-08', NULL, '', '', 'stand by', 0, '2018-02-08 10:54:07', '2018-02-08 10:54:07', '2232', 'once', '1'),
(19, 93707, NULL, 'CCR Mailing - Option #1 Mono/Shells                                     ', 'Suncorp Bank                                                            ', NULL, '1970-01-01', '2018-02-06', NULL, '', '', 'stand by', 0, '2018-02-08 10:55:22', '2018-02-08 10:55:22', '1', 'once', '1'),
(20, 93706, NULL, 'Freedom Access Leads                                                    ', 'Suncorp Bank                                                            ', NULL, '1970-01-01', '2018-02-06', NULL, '', '', 'stand by', 0, '2018-02-08 10:55:55', '2018-02-08 10:55:55', '1', 'once', '1');

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
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
