-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: kill_bill_death_list_five
-- ------------------------------------------------------
-- Server version	8.2.0

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

--
-- Table structure for table `death_list_five`
--

DROP TABLE IF EXISTS `death_list_five`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `death_list_five` (
  `id_character` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Alias` varchar(45) DEFAULT NULL,
  `Occupation` varchar(45) NOT NULL,
  `Weapons` varchar(1024) NOT NULL,
  `Affiliation` varchar(1024) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Place_of_birth` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_character`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `death_list_five`
--

LOCK TABLES `death_list_five` WRITE;
/*!40000 ALTER TABLE `death_list_five` DISABLE KEYS */;
INSERT INTO `death_list_five` VALUES (1,': O-ren Ishii','CottonMouth\nCottonMouth\n CottonMouth','Assassin','Katana','Deadly Viper Assassination Squad , Crazy 88',29,'Japan'),(2,'Vernita Green','Copperhead','Assassin','White weapon',' Deadly Viper Assassination Squad',31,'USA'),(3,'Budd','Sidewinder','Assassin','Hattori Sword',' Deadly Viper Assassination Squad',47,'USA'),(4,'Elle driver','California Mountain Snake','Assassin',' Hand-to-Hand Combat','Deadly Viper Assassination Squad',44,'USA'),(5,' Bill','Snake Charmer','Assassin','Kung Fu','Deadly Viper Assassination Squad',1000,'USA');
/*!40000 ALTER TABLE `death_list_five` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Other_Characters`
--

DROP TABLE IF EXISTS `Other_Characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Other_Characters` (
  `idOther_Characters` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Alias` varchar(45) DEFAULT NULL,
  `Occupation` varchar(45) DEFAULT NULL,
  `Weapons` varchar(45) NOT NULL,
  `Affiliation` varchar(45) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Place_of_birth` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idOther_Characters`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Other_Characters`
--

LOCK TABLES `Other_Characters` WRITE;
/*!40000 ALTER TABLE `Other_Characters` DISABLE KEYS */;
INSERT INTO `Other_Characters` VALUES (1,'Pai Mai',NULL,' Kung-fu fighter/teacher','Kung Fu',NULL,1000,'China'),(2,'Gogo Yubari',NULL,' Assassin, personal bodyguard','Meteor Hammer','Crazy 88',17,'Japan'),(3,'Beatrix Michelle Kiddo','Black Mamba, The Bride, B, ',NULL,'Master Martial Artist, Hattori Sword, Knife',NULL,NULL,NULL),(4,'pedro','服部韓蔵',NULL,'sword',NULL,NULL,NULL),(7,'Thomas Plympton','Tommy T ','Music store owner','none','none',33,'USA'),(8,'Karen Kim','none','Assassin','Guns','Lisa Wong',25,'USA');
/*!40000 ALTER TABLE `Other_Characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-15  9:48:18
