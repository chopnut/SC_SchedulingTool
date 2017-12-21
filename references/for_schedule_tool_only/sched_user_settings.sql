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
(16, 1, '[]', '[]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sched_user_settings`
--
ALTER TABLE `sched_user_settings`
  ADD PRIMARY KEY (`sched_us_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sched_user_settings`
--
ALTER TABLE `sched_user_settings`
  MODIFY `sched_us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
