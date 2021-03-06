-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2018 at 06:32 AM
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
(1, 'tabs', 'Main Tabs', '[{"id":"calendar","label":"Calendar","icon":"calendar icon"},{"id":"managejobs","label":"Manage Jobs","icon":"list layout icon"},{"id":"managetasks","label":"My Tasks","icon":"hourglass end icon"},{"id":"usersettings","label": "User settings","url":"/webapps/admin.php","icon":"linkify icon"},{"id":"schedulingsettings","label":"Scheduling Tool Settings","icon":"setting icon"}]'),
(2, 'job_it_status', 'Job IT Statuses', '["stand by","work in progress","done"]'),
(3, 'job_prod_status', 'Job Production Statuses', '["stand by","work in progress","done"]'),
(4, 'job_types', 'Job Types', '[{"id": "once","text":"Once"},{"id": "recurring","text":"Recurring"}]'),
(5, 'react_api_folder', 'Application Api Folder', 'http://localhost:8181/webapps/schedulingtool/public/react_api/'),
(6, 'react_public_folder', 'Data Programming Department ID', 'http://localhost:8181/webapps/schedulingtool/public/'),
(7, 'job_status', 'Main Job Status', '["stand by","work in progress","done or closed","archieve"]'),
(8, 'user_default_settings', 'User default setting', '[{"sched_us_calendar_hide_departments": [],"sched_us_department_group":[]}]'),
(9, 'programming_dept_id', 'Programming Department ID', '1'),
(10, 'production_hours_per_day', 'Production Hours ', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sched_settings`
--
ALTER TABLE `sched_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sched_settings`
--
ALTER TABLE `sched_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
