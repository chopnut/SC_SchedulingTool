-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2017 at 06:32 AM
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
-- Table structure for table `sched_job_bag_department`
--

CREATE TABLE `sched_job_bag_department` (
  `job_dp_id` int(11) NOT NULL,
  `job_id` int(11) DEFAULT NULL,
  `job_dp_dept` int(11) NOT NULL,
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
  `job_dp_stock_picked` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bag_department`
--

INSERT INTO `sched_job_bag_department` (`job_dp_id`, `job_id`, `job_dp_dept`, `job_dp_date`, `job_dp_created_date`, `job_dp_started_date`, `job_dp_finished_date`, `job_dp_proof_date`, `job_dp_print_date`, `job_dp_status`, `job_dp_comments`, `job_dp_order`, `job_dp_minutes`, `created_at`, `updated_at`, `job_dp_allocated_to`, `job_dp_allocatee_comments`, `job_dp_qty`, `job_dp_stock_picked`) VALUES
(1, 1, 1, '2017-12-06', '2017-12-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-06 08:41:53', '2017-12-08 16:48:19', NULL, NULL, '53', NULL),
(2, 1, 4, '2017-12-06', '2017-12-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-06 08:41:53', '2017-12-06 08:41:53', NULL, NULL, '53', NULL),
(3, 1, 5, '2017-12-06', '2017-12-06', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-06 08:41:53', '2017-12-06 08:41:53', NULL, NULL, '53', NULL),
(4, 5, 1, '2017-12-08', '2017-12-08', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-08 08:28:25', '2017-12-08 08:28:25', NULL, NULL, '52', NULL),
(5, 6, 1, '2017-12-11', '2017-12-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-11 14:38:08', '2017-12-11 14:38:08', NULL, NULL, '21314', NULL),
(6, 6, 4, '2017-12-11', '2017-12-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-11 14:38:08', '2017-12-11 14:38:08', NULL, NULL, '21314', NULL),
(7, 7, 1, '2017-12-12', '2017-12-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-11 14:38:36', '2017-12-13 12:04:30', NULL, NULL, '967', NULL),
(8, 7, 4, '2017-12-11', '2017-12-11', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-11 14:38:36', '2017-12-11 14:38:36', NULL, NULL, '967', NULL),
(9, 8, 7, '2017-12-13', '2017-12-13', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:06:49', '2017-12-13 12:06:49', NULL, NULL, '322', NULL),
(10, 8, 8, '2017-12-13', '2017-12-13', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:06:49', '2017-12-13 12:06:49', NULL, NULL, '322', NULL),
(11, 8, 9, '2017-12-13', '2017-12-13', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:06:49', '2017-12-13 12:06:49', NULL, NULL, '322', NULL),
(12, 1, 1, '2017-12-12', '2017-12-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:18:54', '2017-12-13 12:18:54', NULL, NULL, NULL, NULL),
(13, 1, 4, '2017-12-12', '2017-12-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:18:54', '2017-12-13 12:18:54', NULL, NULL, NULL, NULL),
(14, 1, 5, '2017-12-12', '2017-12-12', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:18:54', '2017-12-13 12:18:54', NULL, NULL, NULL, NULL),
(15, 1, 1, '2017-12-14', '2017-12-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:19:19', '2017-12-13 12:19:31', NULL, NULL, NULL, NULL),
(16, 1, 4, '2017-12-14', '2017-12-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:19:19', '2017-12-13 12:19:19', NULL, NULL, NULL, NULL),
(17, 1, 5, '2017-12-14', '2017-12-14', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-12-13 12:19:19', '2017-12-13 12:19:19', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sched_job_bag_department`
--
ALTER TABLE `sched_job_bag_department`
  ADD PRIMARY KEY (`job_dp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sched_job_bag_department`
--
ALTER TABLE `sched_job_bag_department`
  MODIFY `job_dp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
