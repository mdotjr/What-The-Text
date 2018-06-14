CREATE DATABASE whatTheText;

USE whatTheText;

CREATE TABLE `user_tbl` (
	id INT AUTO_INCREMENT NOT NULL
	,`username` VARCHAR(30) NOT NULL
	,`password`	VARCHAR(30) NOT NULL
    ,`logged_in` TINYINT DEFAULT NULL
	,`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
	,`updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	,PRIMARY KEY (id)
);

CREATE TABLE `text_tbl` (
	`id` INT AUTO_INCREMENT NOT NULL
	,`image` BLOB NOT NULL
	,`caption` VARCHAR(255) NOT NULL
	,`ew` BOOL DEFAULT 0
	,`bff` BOOL DEFAULT 0
	,`lol` BOOL DEFAULT 0
	,`nsfw` BOOL DEFAULT 0
	,`fail` BOOL DEFAULT 0
	,`wtfam` BOOL DEFAULT 0
	,`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
	,`updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	,`userId` INT NOT NULL
	,PRIMARY KEY (`id`)
	,FOREIGN KEY (`userId`) REFERENCES `user_tbl` (`id`)
);

CREATE TABLE `comment_tbl` (
	`id` INT AUTO_INCREMENT NOT NULL
	,`comment` VARCHAR(255) NOT NULL
	,`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
	,`updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	,PRIMARY KEY (`id`)
	,`textId` INT NOT NULL
	,`userId` INT NOT NULL
	,FOREIGN KEY (`textId`) REFERENCES `text_tbl` (`id`)
	,FOREIGN KEY (`userId`) REFERENCES `user_tbl` (`id`)
);

CREATE TABLE `reaction_tbl` (
	`id` INT AUTO_INCREMENT NOT NULL
	,`like` BOOL NOT NULL
	,`userId` INT NOT NULL
	,`textId` INT NOT NULL
	,PRIMARY KEY (`id`)
	,FOREIGN KEY (`userId`) REFERENCES `user_tbl` (`id`)
	,FOREIGN KEY (`textId`) REFERENCES `text_tbl` (`id`)
);

CREATE TABLE `userReactText_tbl` (
	`id` INT AUTO_INCREMENT NOT NULL
	,`userId` INT NOT NULL
	,`textId` INT NOT NULL
	,PRIMARY KEY (`id`)
	,FOREIGN KEY (`userId`) REFERENCES `user_tbl` (`id`)
	,FOREIGN KEY (`textId`) REFERENCES `text_tbl` (`id`)
);