-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2017 at 05:11 AM
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
  `job_dp_qty` varchar(100) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
  MODIFY `job_dp_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
