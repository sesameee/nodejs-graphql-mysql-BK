CREATE DATABASE  IF NOT EXISTS `pvp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pvp`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: exapp
-- ------------------------------------------------------
-- Server version	5.7.17

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
-- Table structure for table `pvp`
--

-- DROP TABLE IF EXISTS `pvp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `pvp`.`role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `position` varchar(45) NOT NULL DEFAULT '',
  `index` int(11) NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL DEFAULT 0,
  `have_weapon` TINYINT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;



CREATE TABLE `pvp`.`post` (
  `post_id` INT NOT NULL,
  `attack` VARCHAR(255) NOT NULL,
  `defense` VARCHAR(255) NOT NULL,
  `good` INT ZEROFILL NOT NULL,
  `bad` INT ZEROFILL NOT NULL,
  `comment` VARCHAR(255) NULL,
  PRIMARY KEY (`post_id`));

 INSERT INTO `pvp`.`post` (`post_id`, `attack`, `defense`, `good`, `bad`) VALUES ('1', '|1|2|3|4|5|', '|2|3|5|6|7|', '0', '0'); 
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bacons`
--

LOCK TABLES `pvp_role` WRITE;
/*!40000 ALTER TABLE `bacons` DISABLE KEYS */;
INSERT INTO `pvp_role` VALUES (1,'真琴','front',0),(2,'深月,center,0),(3,純,front,0),(4,香織,front,0),(5,栞,rear,0),(6,鈴奈,rear,0),(7,亞里莎,rear,0),(8,珠希,front,0),(9,咲戀,center,0),(10,望,front,0),(11,可可蘿,center,0),(12,日和,front,0),(13,伊莉亞,center,0),(14,茜里,center,0),(15,凱留,rear,0),(16,靜流,front,0),(17,鏡華,rear,0),(18,宮子,front,0),(19,吉塔,front,0),(20,莫妮卡,center,0),(21,空花,front,0),(22,忍,center,0),(23,貪吃佩可,front,0),(24,惠理子,front,0),(25,貪吃佩可(泳裝),front,0),(26,秋乃,front,0),(27,美美,center,0),(28,紡希,front,0),(29,初音,rear,0),(30,綾音,front,0),(31,優衣,rear,0),(32,可可蘿(泳裝),center,0),(33,優花梨,center,0),(34,美里,rear,0),(35,杏奈,center,0),(36,妮諾,center,0),(37,璃乃,rear,0),(38,依里,center,0),(39,禊,front,0),(40,雪,rear,0),(41,真步,rear,0),(42,怜,front,0),(43,胡桃,front,0),(44,美咲,rear,0),(45,美冬,center,0),(46,千歌,rear,0),(47,莉瑪,front,0),(48,鈴,center,0),(49,真陽,center,0),(50,伊緒,rear,0),(51,碧,rear,0),(52,鈴莓,rear,0),(53,凱留(泳裝),rear,0),(54,珠希(泳裝),front,0),(55,智,front,0),(56,美冬(泳裝),center,0),(57,宮子(萬聖),center,0),(58,忍(萬聖),center,0),(59,鈴莓(泳裝),rear,0),(60,茉莉,front,0),(61,美咲(萬聖),rear,0),(62,克莉絲提娜,front,0),(63,流夏,front,0),(64,七七香,rear,0),(65,千歌(聖誕),rear,0),(66,胡桃(聖誕),front,0),(67,綾音(聖誕),front,0),(68,優衣(新年),rear,0),(69,怜(新年),front,0),(70,日和(新年),front,0),(71,靜流(情人),center,0),(72,惠理子(情人),front,0),(73,矛依未,front,0),(74,霞,rear,0),(75,步未,center,0),(76,露,rear,0),(77,安,rear,0),(78,古蕾婭,center,0),(79,空花(大江戶),front,0),(80,妮諾(大江戶),front,0),(81,拉姆,center,0),(82,雷姆,center,0),(83,愛蜜莉雅,rear,0),(84,伊緒(新年),rear,0),(85,鈴奈(泳裝),rear,0),(86,咲戀(泳裝),center,0),(87,香織(泳裝),center,0),(88,真琴(泳裝),front,0),(89,真步(泳裝),rear,0),(90,似似花,rear,0),(91,碧(學園),rear,0),(92,克蘿伊,front,0),(93,禊(萬聖),front,0),(94,鏡華(萬聖),rear,0),(95,美美(萬聖),,0),(96,,,0),(97,,,0),(98,望(聖誕),,0),(99,克莉絲提娜(聖誕),,0),(100,伊莉亞(聖誕),,0),(101,鈴莓(新年),,0),(102,凱留(新年),,0),(103,可可蘿(新年),,0),(104,,,0),(105,,,0)
/*!40000 ALTER TABLE `bacons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-24 23:17:35
