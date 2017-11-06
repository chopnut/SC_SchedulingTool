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
  `job_dp_status` varchar(50) DEFAULT NULL,
  `job_dp_comments` varchar(255) DEFAULT NULL,
  `job_dp_order` int(11) DEFAULT '0',
  `job_dp_minutes` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `job_dp_allocated_to` int(11) DEFAULT NULL,
  `job_dp_allocatee_comments` varchar(255) DEFAULT NULL,
  `job_dp_qty` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_job_bag_department`
--

INSERT INTO `sched_job_bag_department` (`job_dp_id`, `job_id`, `job_dp_dept`, `job_dp_date`, `job_dp_created_date`, `job_dp_started_date`, `job_dp_finished_date`, `job_dp_proof_date`, `job_dp_status`, `job_dp_comments`, `job_dp_order`, `job_dp_minutes`, `created_at`, `updated_at`, `job_dp_allocated_to`, `job_dp_allocatee_comments`, `job_dp_qty`) VALUES
(16, 24, 4, '2017-10-31', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:09:03', '2017-11-06 08:43:58', NULL, NULL, 5000),
(15, 24, 5, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:09:03', '2017-11-02 14:41:24', NULL, NULL, 5000),
(14, 23, 6, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:08:46', '2017-11-02 13:57:18', NULL, NULL, 20),
(13, 23, 1, '2017-10-29', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:08:46', '2017-10-31 15:08:46', NULL, NULL, 20),
(12, 23, 4, '2017-11-02', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:08:46', '2017-11-06 08:43:54', NULL, NULL, 20),
(17, 24, 1, '2017-11-03', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-10-31 15:09:03', '2017-11-02 13:56:15', NULL, NULL, 5000),
(18, 25, 4, '2017-11-03', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:33:26', '2017-11-06 08:43:56', NULL, NULL, 7247),
(19, 25, 1, '2017-10-31', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:33:26', '2017-11-02 16:34:13', NULL, NULL, 7247),
(20, 25, 5, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:33:26', '2017-11-02 13:56:43', NULL, NULL, 7247),
(21, 25, 6, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:33:26', '2017-11-02 13:56:52', NULL, NULL, 7247),
(22, 25, 8, '2017-10-30', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:33:26', '2017-11-02 13:57:04', NULL, NULL, 7247),
(23, 26, 6, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:34:27', '2017-11-02 13:56:50', NULL, NULL, 1),
(24, 26, 7, '2017-10-30', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:34:27', '2017-11-01 04:34:27', NULL, NULL, 1),
(25, 26, 9, '2017-10-30', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:34:27', '2017-11-01 04:34:27', NULL, NULL, 1),
(26, 26, 10, '2017-10-30', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 04:34:27', '2017-11-01 04:34:27', NULL, NULL, 1),
(27, 27, 1, '2017-11-02', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 05:23:14', '2017-11-02 13:30:04', NULL, NULL, 1),
(28, 27, 5, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 05:23:14', '2017-11-01 05:23:14', NULL, NULL, 1),
(29, 27, 6, '2017-11-01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-01 05:23:14', '2017-11-01 05:23:14', NULL, NULL, 1);

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
  MODIFY `job_dp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
