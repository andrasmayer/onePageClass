-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2024 at 11:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `actiontracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `actiontracker_changelogs`
--

CREATE TABLE `actiontracker_changelogs` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `oldValue` text NOT NULL,
  `newValue` text NOT NULL,
  `resourceId` int(11) NOT NULL,
  `colname` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actiontracker_changelogs`
--

INSERT INTO `actiontracker_changelogs` (`id`, `user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`, `time`) VALUES
(1, 266248, 'tasks', 'NA most jó????\n\n\n\n\n\n', 'ezek szerint igen\n\n\n\n\n\n', 1, 'col 2', '2024-03-22 10:21:59'),
(2, 266248, 'tasks', '266248', 'sample1', 1, 'responsible', '2024-03-22 10:22:52'),
(3, 266248, 'tasks', '0', '222222', 1, 'responsible', '2024-03-22 10:21:59'),
(4, 266248, 'tasks', '0000-00-00', '2024-03-27', 1, 'creationDate', '2024-03-22 10:21:59'),
(5, 266248, 'tasks', '0', '1', 1, 'status_1', '2024-03-22 10:21:59'),
(6, 266248, 'tasks', 'sdsad', 'Tesztelünk', 1, 'comment', '2024-03-22 10:21:59'),
(7, 266248, 'tasks', '', 'Találd ki', 1, 'action', '2024-03-22 10:21:59'),
(8, 266248, 'tasks', 'Találd ki', 'most már van timestamp is\n', 1, 'action', '2024-03-22 10:22:10');

-- --------------------------------------------------------

--
-- Table structure for table `actiontracker_tasks`
--

CREATE TABLE `actiontracker_tasks` (
  `id` int(11) NOT NULL,
  `erTypes` varchar(25) NOT NULL,
  `responsible` int(11) NOT NULL,
  `delegated` int(11) NOT NULL,
  `status_1` int(11) NOT NULL,
  `status_2` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `creationDate` date NOT NULL,
  `expireDate` date NOT NULL,
  `addin` text NOT NULL,
  `topicid` int(11) NOT NULL,
  `action` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actiontracker_tasks`
--

INSERT INTO `actiontracker_tasks` (`id`, `erTypes`, `responsible`, `delegated`, `status_1`, `status_2`, `comment`, `creationDate`, `expireDate`, `addin`, `topicid`, `action`) VALUES
(1, 'cat 1', 222222, 0, 1, 0, 'Tesztelünk', '2024-03-27', '0000-00-00', '{\"col$$1\":\"\",\"col$$2\":\"ezek szerint igen\\n\\n\\n\\n\\n\\n\",\"col$$3\":\"sadasd\"}', 1, 'most már van timestamp is\n'),
(2, 'cat 2', 266248, 0, 0, 0, '', '0000-00-00', '0000-00-00', '{\"col$$2\":\"lkjdddss\"}', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `actiontracker_topics`
--

CREATE TABLE `actiontracker_topics` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `creator` int(11) NOT NULL,
  `creationDate` datetime NOT NULL,
  `contributors` text NOT NULL,
  `erTypes` text NOT NULL DEFAULT '{}',
  `privateHeaders` text NOT NULL DEFAULT '{}',
  `lastModified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `headerEditor` text NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actiontracker_topics`
--

INSERT INTO `actiontracker_topics` (`id`, `title`, `description`, `creator`, `creationDate`, `contributors`, `erTypes`, `privateHeaders`, `lastModified`, `headerEditor`) VALUES
(1, 'Topic 1', 'sadf\nsad\nsa\nd\nasd', 266248, '2024-03-14 14:16:53', '[\"266248\"]', '{\"v\":\"K\\u00e9rlek v\\u00e1lassz\",\"cat 1\":\"cat 1\",\"cat 2\":\"cat 2\",\"cat 3\":\"cat 3\"}', '{\"col$$2\":\"col 2\"}', '2024-03-14 13:49:10', '[{\"data\":\"Kateg\\u00f3ria\",\"visible\":\"true\",\"className\":\"erTypes\",\"private\":\"false\"},{\"data\":\"col 2\",\"className\":\"col$$2\",\"visible\":\"true\",\"private\":\"true\"},{\"data\":\"Felel\\u0151s\",\"visible\":\"true\",\"className\":\"responsible\",\"private\":\"false\"},{\"data\":\"Deleg\\u00e1lt\",\"visible\":\"true\",\"className\":\"delegated\",\"private\":\"false\"},{\"data\":\"Felv\\u00e9ve\",\"visible\":\"true\",\"className\":\"creationDate\",\"private\":\"false\"},{\"data\":\"Hat\\u00e1rid\\u0151\",\"visible\":\"false\",\"className\":\"expireDate\",\"private\":\"false\"},{\"data\":\"Ellen\\u0151rizve\",\"visible\":\"true\",\"className\":\"status_1\",\"private\":\"false\"},{\"data\":\"\\u00c1llapot\",\"visible\":\"true\",\"className\":\"status_2\",\"private\":\"false\"},{\"data\":\"Komment\",\"visible\":\"true\",\"className\":\"comment\",\"private\":\"false\"},{\"data\":\"Akci\\u00f3\",\"visible\":\"true\",\"className\":\"action\",\"private\":\"false\"}]'),
(2, '', '', 266248, '2024-03-14 14:36:27', '[\"266248\"]', '{\"v\":\"K\\u00e9rlek v\\u00e1lassz\"}', '{}', '2024-03-14 13:36:27', '[{\"data\":\"Kategória\",\"visible\":\"true\",\"className\":\"erTypes\",\"private\":\"false\"},{\"data\":\"Felelős\",\"visible\":\"true\",\"className\":\"responsible\",\"private\":\"false\"},{\"data\":\"Delegált\",\"visible\":\"true\",\"className\":\"delegated\",\"private\":\"false\"},{\"data\":\"Felvéve\",\"visible\":\"true\",\"className\":\"creationDate\",\"private\":\"false\"},{\"data\":\"Határidő\",\"visible\":\"true\",\"className\":\"expireDate\",\"private\":\"false\"},{\"data\":\"Ellenőrizve\",\"visible\":\"true\",\"className\":\"status_1\",\"private\":\"false\"},{\"data\":\"Állapot\",\"visible\":\"true\",\"className\":\"status_2\",\"private\":\"false\"},{\"data\":\"Komment\",\"visible\":\"true\",\"className\":\"comment\",\"private\":\"false\"},{\"data\":\"Akció\",\"visible\":\"true\",\"className\":\"action\",\"private\":\"false\"}]'),
(3, 'Minta 3', 'Minta 3', 266248, '2024-03-19 11:00:10', '[\"266248\"]', '{\"v\":\"K\\u00e9rlek v\\u00e1lassz\",\"cat 1\":\"cat 1\",\"cat 2\":\"cat 2\"}', '{\"col$$1\":\"col 1\"}', '2024-03-19 10:00:10', '[{\"data\":\"Kategória\",\"visible\":\"true\",\"className\":\"erTypes\",\"private\":\"false\"},{\"data\":\"Felelős\",\"visible\":\"true\",\"className\":\"responsible\",\"private\":\"false\"},{\"data\":\"Delegált\",\"visible\":\"true\",\"className\":\"delegated\",\"private\":\"false\"},{\"data\":\"Felvéve\",\"visible\":\"true\",\"className\":\"creationDate\",\"private\":\"false\"},{\"data\":\"Határidő\",\"visible\":\"true\",\"className\":\"expireDate\",\"private\":\"false\"},{\"data\":\"Ellenőrizve\",\"visible\":\"true\",\"className\":\"status_1\",\"private\":\"false\"},{\"data\":\"Állapot\",\"visible\":\"true\",\"className\":\"status_2\",\"private\":\"false\"},{\"data\":\"Komment\",\"visible\":\"true\",\"className\":\"comment\",\"private\":\"false\"},{\"data\":\"Akció\",\"visible\":\"true\",\"className\":\"action\",\"private\":\"false\"},{\"data\":\"col1\",\"visible\":\"true\",\"className\":\"col$$1\",\"private\":\"true\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `actiontracker_users`
--

CREATE TABLE `actiontracker_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `dolszam` int(11) NOT NULL,
  `job_title` int(11) NOT NULL,
  `passWord` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actiontracker_users`
--

INSERT INTO `actiontracker_users` (`id`, `username`, `dolszam`, `job_title`, `passWord`) VALUES
(1, 'Tóth Kristóf Bence', 270287, 1, '47bce5c74f589f4867dbd57e9ca9f808'),
(2, 'Mayer András', 266248, 2, '47bce5c74f589f4867dbd57e9ca9f808'),
(3, 'sample Tim', 222222, 2, '47bce5c74f589f4867dbd57e9ca9f808');

-- --------------------------------------------------------

--
-- Table structure for table `actiontracker_user_job_titles`
--

CREATE TABLE `actiontracker_user_job_titles` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actiontracker_user_job_titles`
--

INSERT INTO `actiontracker_user_job_titles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Operator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actiontracker_changelogs`
--
ALTER TABLE `actiontracker_changelogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actiontracker_tasks`
--
ALTER TABLE `actiontracker_tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actiontracker_topics`
--
ALTER TABLE `actiontracker_topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actiontracker_users`
--
ALTER TABLE `actiontracker_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actiontracker_user_job_titles`
--
ALTER TABLE `actiontracker_user_job_titles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actiontracker_changelogs`
--
ALTER TABLE `actiontracker_changelogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `actiontracker_tasks`
--
ALTER TABLE `actiontracker_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `actiontracker_topics`
--
ALTER TABLE `actiontracker_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `actiontracker_users`
--
ALTER TABLE `actiontracker_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `actiontracker_user_job_titles`
--
ALTER TABLE `actiontracker_user_job_titles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
