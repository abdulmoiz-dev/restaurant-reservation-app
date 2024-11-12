

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP SCHEMA IF EXISTS `foodBuddy` ;

-- -----------------------------------------------------
-- Schema foodBuddy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodBuddy` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `foodBuddy` ;

-- -----------------------------------------------------
-- Table `foodBuddy`.`restaurant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`restaurant` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`restaurant` (
  `restaurant_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(15) NULL DEFAULT NULL,
  `opening_hours` VARCHAR(100) NULL DEFAULT NULL,
  `cuisine_type` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
