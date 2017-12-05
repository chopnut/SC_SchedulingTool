-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2017 at 05:10 AM
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
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
