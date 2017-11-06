-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2017 at 12:44 AM
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
(1, 'Data Programming', 5, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, NULL),
(2, 'Digital Printing', 10, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, NULL),
(3, 'Machine Inserting', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 0, NULL),
(4, 'Mono', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, NULL),
(5, 'Colour', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, NULL),
(6, 'Continous', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 2, NULL),
(7, 'K1', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, NULL),
(8, 'K2', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, NULL),
(9, 'K3', 20, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, NULL),
(10, '4 Station', 37, '2017-10-09 00:00:00', '2017-10-09 00:00:00', 3, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sched_department`
--
ALTER TABLE `sched_department`
  ADD PRIMARY KEY (`job_dept_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sched_department`
--
ALTER TABLE `sched_department`
  MODIFY `job_dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
