

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
  PRIMARY KEY (`restaurant_id`));


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
    ON DELETE CASCADE);



    
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
    ON DELETE CASCADE);



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
  UNIQUE INDEX `email` (`email` ASC) VISIBLE);




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
    ON DELETE CASCADE);
    


-- -----------------------------------------------------
-- Table `foodBuddy`.`menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`menu` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`menu` (
  `menu_id` INT NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT NULL DEFAULT NULL,
  `item_name` VARCHAR(100) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `availability` TINYINT(1) NULL DEFAULT '1',
  PRIMARY KEY (`menu_id`),
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `menu_ibfk_1`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `foodBuddy`.`restaurant` (`restaurant_id`)
    ON DELETE CASCADE);


-- -----------------------------------------------------
-- Table `foodBuddy`.`restauranttable`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`restauranttable` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`restauranttable` (
  `table_id` INT NOT NULL AUTO_INCREMENT,
  `branch_id` INT NULL DEFAULT NULL,
  `capacity` INT NOT NULL,
  `is_available` TINYINT(1) NULL DEFAULT '1',
  `location_in_restaurant` VARCHAR(100) NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  PRIMARY KEY (`table_id`),
  INDEX `branch_id` (`branch_id` ASC) VISIBLE,
  CONSTRAINT `restauranttable_ibfk_1`
    FOREIGN KEY (`branch_id`)
    REFERENCES `foodBuddy`.`branch` (`branch_id`)
    ON DELETE CASCADE);




-- -----------------------------------------------------
-- Table `foodBuddy`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`reservation` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`reservation` (
  `reservation_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL DEFAULT NULL,
  `table_id` INT NULL DEFAULT NULL,
  `reservation_time` DATETIME NOT NULL,
  `status` ENUM('pending', 'confirmed', 'cancelled') NULL DEFAULT 'pending',
  `notification_sent` TINYINT(1) NULL DEFAULT '0',
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  PRIMARY KEY (`reservation_id`),
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  INDEX `table_id` (`table_id` ASC) VISIBLE,
  CONSTRAINT `reservation_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `foodBuddy`.`customer` (`customer_id`)
    ON DELETE CASCADE,
  CONSTRAINT `reservation_ibfk_2`
    FOREIGN KEY (`table_id`)
    REFERENCES `foodBuddy`.`restauranttable` (`table_id`)
    ON DELETE CASCADE);



-- -----------------------------------------------------
-- Table `foodBuddy`.`notification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`notification` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`notification` (
  `notification_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL DEFAULT NULL,
  `reservation_id` INT NULL DEFAULT NULL,
  `message` TEXT NULL DEFAULT NULL,
  `sent_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`notification_id`),
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  INDEX `reservation_id` (`reservation_id` ASC) VISIBLE,
  CONSTRAINT `notification_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `foodBuddy`.`customer` (`customer_id`)
    ON DELETE CASCADE,
  CONSTRAINT `notification_ibfk_2`
    FOREIGN KEY (`reservation_id`)
    REFERENCES `foodBuddy`.`reservation` (`reservation_id`)
    ON DELETE CASCADE);



-- -----------------------------------------------------
-- Table `foodBuddy`.`payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`payment` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`payment` (
  `payment_id` INT NOT NULL AUTO_INCREMENT,
  `reservation_id` INT NULL DEFAULT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `payment_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_status` ENUM('pending', 'completed', 'failed') NULL DEFAULT 'pending',
  PRIMARY KEY (`payment_id`),
  INDEX `reservation_id` (`reservation_id` ASC) VISIBLE,
  CONSTRAINT `payment_ibfk_1`
    FOREIGN KEY (`reservation_id`)
    REFERENCES `foodBuddy`.`reservation` (`reservation_id`)
    ON DELETE CASCADE);



-- -----------------------------------------------------
-- Table `foodBuddy`.`preferences`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`preferences` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`preferences` (
  `preference_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL DEFAULT NULL,
  `favorite_restaurant_id` INT NULL DEFAULT NULL,
  `preferred_seating_area` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`preference_id`),
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  INDEX `favorite_restaurant_id` (`favorite_restaurant_id` ASC) VISIBLE,
  CONSTRAINT `preferences_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `foodBuddy`.`customer` (`customer_id`)
    ON DELETE CASCADE,
  CONSTRAINT `preferences_ibfk_2`
    FOREIGN KEY (`favorite_restaurant_id`)
    REFERENCES `foodBuddy`.`restaurant` (`restaurant_id`)
    ON DELETE CASCADE);

    
-- -----------------------------------------------------
-- Table `foodBuddy`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodBuddy`.`review` ;

CREATE TABLE IF NOT EXISTS `foodBuddy`.`review` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL DEFAULT NULL,
  `restaurant_id` INT NULL DEFAULT NULL,
  `rating` INT NULL DEFAULT NULL,
  `comment` TEXT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  INDEX `restaurant_id` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `review_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `foodBuddy`.`customer` (`customer_id`)
    ON DELETE CASCADE,
  CONSTRAINT `review_ibfk_2`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `foodBuddy`.`restaurant` (`restaurant_id`)
    ON DELETE CASCADE);