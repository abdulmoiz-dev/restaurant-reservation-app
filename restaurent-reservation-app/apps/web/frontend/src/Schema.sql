

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP SCHEMA IF EXISTS `foodBuddy` ;

-- -----------------------------------------------------
-- Schema foodBuddy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodBuddy`  ;
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


-- Table `foodBuddy`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`admin` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`admin` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `restaurant_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `admin_ibfk_1`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `foodBuddy`.`restaurant` (`restaurant_id`)
    ON DELETE CASCADE)



    
-- -----------------------------------------------------
-- Table `foodBuddy`.`branch`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`branch` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`branch` (
  `branch_id` INT NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT NULL DEFAULT NULL,
  `branch_name` VARCHAR(100) NULL DEFAULT NULL,
  `branch_location` VARCHAR(255) NULL DEFAULT NULL,
  `branch_phone_number` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`branch_id`),
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `branch_ibfk_1`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `foodBuddy`.`restaurant` (`restaurant_id`)
    ON DELETE CASCADE)



-- -----------------------------------------------------
-- Table `foodBuddy`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`customer` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`customer` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(15) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `loyalty_points` INT NULL DEFAULT '0',
  PRIMARY KEY (`customer_id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)




-- -----------------------------------------------------
-- Table `foodBuddy`.`loyaltyprogram`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`loyaltyprogram` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`loyaltyprogram` (
  `loyalty_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL DEFAULT NULL,
  `points_earned` INT NULL DEFAULT NULL,
  `reward_claimed` TINYINT(1) NULL DEFAULT '0',
  `reward_description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`loyalty_id`),
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `loyaltyprogram_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `foodBuddy`.`customer` (`customer_id`)
    ON DELETE CASCADE)
