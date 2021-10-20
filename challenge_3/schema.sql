DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

-- ---
-- Table 'customer'
--
-- ---

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `password` VARCHAR(12) NULL DEFAULT NULL,
  `cc` BIGINT NULL DEFAULT NULL,
  `cc_exp` INTEGER NULL DEFAULT NULL,
  `ccv` INTEGER NULL DEFAULT NULL,
  `address` VARCHAR(20) NULL DEFAULT NULL,
  `address 2` VARCHAR(20) NULL DEFAULT NULL,
  `city` VARCHAR(20) NULL DEFAULT NULL,
  `state` VARCHAR(2) NULL DEFAULT NULL,
  `zip` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `customer` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `customer` (`id`,`name`,`email`,`password`,`cc`,`cc_exp`,`ccv`,`address`,`address 2`,`city`,`state`,`zip`) VALUES
('1','Key','Key123@gmail.com','123','123412341234','2012','123','1048 Church','','Victorville','CA','92301');