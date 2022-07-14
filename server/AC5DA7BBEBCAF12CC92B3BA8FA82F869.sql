-- MySQL dump 10.13  Distrib 5.6.50, for Linux (x86_64)
--
-- Host: localhost    Database: heroku_4cda83baf8728d0
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `collaboration` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=215 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (74,'Marcus Smith','Astrand','msmith11@gmail.com','CFO',0),(94,'Mark Zuckenberg','Meta','markz@mail.com','CEO',0),(124,'Sit Amet','Dolor Sit ','loremsitdolor@gmail.com','Control Manager',0),(134,'Wade Henry','Mistral','whenr1@gmail.com','Marketing Manager',0),(154,'Larry Page','Google','larry_page@gmail.com','CEO',1),(174,'William Lothbrock','FK Zeljeznicar','lwilly@gmail.com','Control Manager',0),(194,'Loremko','dolorsit','sadafaasd@gmail.com','CFO',0),(204,'Mike Torreno','qTorrent','mtorrent@gmail.com','CEO',0);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` longtext,
  `user_id` int(11) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `ended_at` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (24,'Complete Tasks Tab','Finish tasks tab with all operations and style action buttons, make UI prettier.',14,'2022-5-23','2022-05-27','Not Started'),(34,'Finish Login/Register, Add My Tasks and Finis','Finish Login/Register add styling to them, add textbox description input on task modal, Add My Tasks and Finish task details modal.',4,'2022-5-25','2022-05-31','Not Started'),(54,'Lorem Ipsum task','Lorem Ipsum task Lorem Ipsum task ',4,'2022-5-27','2022-06-04','In production'),(114,'Third Lorem task','Fames viverra aptent nascetur pede aenean parturient natoque efficitur conubia consectetuer',14,'2022-5-27','2022-06-10','Not Assigned'),(124,'FIrst task for Travis','Travis lorem / Turpis bibendum iaculis convallis posuere himenaeos viverra dignissim diam vulputate felis',104,'2022-5-31','2022-06-02','In production'),(134,'Simple teask','Lorem ipsum dolor sit amet',4,'2022-6-28','2022-07-07','Finished'),(144,'Moj novi task','ASasasafsadsa dsa',104,'2022-6-30','2022-06-15','Not Started');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Elvedin Kaltak','elvedin','elvedin123','admin','k.elvedin@gmail.com'),(14,'John Doe','john11','john123','user','john_doe@gmail.com'),(104,'Travis White','travis','travis123','user','t.white@gmail.com'),(164,'Elmir ','elmir1','elmir123','user','elmiro@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'heroku_4cda83baf8728d0'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-05  4:25:24
