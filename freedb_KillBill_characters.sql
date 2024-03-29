-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: sql.freedb.tech    Database: freedb_KillBill
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

USE test;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `alias` varchar(45) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `weapons` varchar(255) DEFAULT NULL,
  `affiliation` varchar(255) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `image` varchar(2083) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'Beatrix Michelle Kiddo','The Bride,Black Mamba','Ex-Assassin','Master Martial Artist, Hattori Sword, Knife','Deadly Viper Assassination Squad','28','USA','/beatrix.jpg','others'),(2,'O-ren Ishii','CottonMouth','Assassin','Katana','Deadly Viper Assassination Squad, Crazy 88','29','Japan','/oren2.png','five list'),(3,'Vernita Green','Copperhead','Assassin','White weapon','Deadly Viper Assassination Squad','31','USA','/vernita.jpg','five list'),(4,'Budd','Sidewinder','Ex-Assassin, works in a bar','Hattori Sword','Hattori Sword','47','USA','/budd.jpg','five list'),(5,'Elle driver','California Mountain Snake','Assassin','Hand-to-Hand Combat','Deadly Viper Assassination Squad','44','USA','/elledriver.jpg','five list'),(6,'Bill','Snake Charmer','Assassin','Kung Fu','Deadly Viper Assassination Squad','50','USA','/bill.jpg','five list'),(7,'Hattori Hanzo','服部韓蔵','Sword maker, bar owner','Sword','none','55','Japan','/Hattori%20Hanzo.jpg','others'),(16,'Pai Mei','Sifu','Master of the art of Kung-fu','Kung Fu, Five Point Palm Exploding Heart Technique','none','100','China','/paimei.jpg','others'),(17,'Gogo Yubari','Gogo','Bodyguard, Assassin','Meteor Hammer','Crazy 88','17','Japan','/gogo.jpg','others');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-14 20:46:26
