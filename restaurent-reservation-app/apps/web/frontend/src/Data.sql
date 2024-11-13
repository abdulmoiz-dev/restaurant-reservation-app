

-- Insert data into `restaurant` table
INSERT INTO `foodBuddy`.`restaurant` (`name`, `location`, `phone_number`, `opening_hours`, `cuisine_type`) VALUES
('Karachi Darbar', 'Karachi', '021-1234567', '09:00-23:00', 'Pakistani'),
('Lahore Tikka House', 'Lahore', '042-7654321', '10:00-22:00', 'Punjabi'),
('Peshawar Delight', 'Peshawar', '091-1237890', '08:00-20:00', 'Pashtun'),
('Multan Foods', 'Multan', '061-2345678', '11:00-23:00', 'Pakistani'),
('Islamabad Biryani', 'Islamabad', '051-1234567', '09:00-23:00', 'Biryani'),
('Sialkot Treat', 'Sialkot', '052-8765432', '08:00-22:00', 'Continental'),
('Faisalabad Feast', 'Faisalabad', '041-1122334', '10:00-22:00', 'Chinese'),
('Hyderabad House', 'Hyderabad', '022-1122334', '09:00-21:00', 'Pakistani'),
('Quetta Grill', 'Quetta', '081-2233445', '08:00-22:00', 'BBQ'),
('Gujranwala Dine', 'Gujranwala', '055-3344556', '10:00-22:00', 'Fast Food');

-- Insert data into `admin` table
INSERT INTO `foodBuddy`.`admin` (`name`, `email`, `password`, `restaurant_id`) VALUES
('Ahmed Ali', 'ahmed.ali@foodbuddy.pk', 'password1', 1),
('Sara Khan', 'sara.khan@foodbuddy.pk', 'password2', 2),
('Usman Sheikh', 'usman.sheikh@foodbuddy.pk', 'password3', 3),
('Aisha Malik', 'aisha.malik@foodbuddy.pk', 'password4', 4),
('Bilal Raza', 'bilal.raza@foodbuddy.pk', 'password5', 5),
('Hina Farooq', 'hina.farooq@foodbuddy.pk', 'password6', 6),
('Zain Abbas', 'zain.abbas@foodbuddy.pk', 'password7', 7),
('Rizwan Saeed', 'rizwan.saeed@foodbuddy.pk', 'password8', 8),
('Mehwish Tariq', 'mehwish.tariq@foodbuddy.pk', 'password9', 9),
('Shahzaib Iqbal', 'shahzaib.iqbal@foodbuddy.pk', 'password10', 10);

-- Insert data into `branch` table
INSERT INTO `foodBuddy`.`branch` (`restaurant_id`, `branch_name`, `branch_location`, `branch_phone_number`) VALUES
(1, 'Karachi Darbar Branch 1', 'Karachi - Clifton', '021-1234567'),
(1, 'Karachi Darbar Branch 2', 'Karachi - Gulshan', '021-2345678'),
(2, 'Lahore Tikka Main', 'Lahore - Gulberg', '042-7654321'),
(2, 'Lahore Tikka Branch', 'Lahore - Johar Town', '042-8765432'),
(3, 'Peshawar Delight Central', 'Peshawar - Saddar', '091-1237890'),
(4, 'Multan Foods South', 'Multan - Qasim Bela', '061-2345678'),
(5, 'Islamabad Biryani Center', 'Islamabad - Blue Area', '051-1234567'),
(6, 'Sialkot Treat Main', 'Sialkot - Cantt', '052-8765432'),
(7, 'Faisalabad Feast Central', 'Faisalabad - D-Ground', '041-1122334'),
(8, 'Hyderabad House East', 'Hyderabad - Qasimabad', '022-1122334');

-- Insert data into `customer` table
INSERT INTO `foodBuddy`.`customer` (`name`, `email`, `password`, `phone_number`, `loyalty_points`) VALUES
('Ali Raza', 'ali.raza@gmail.com', 'custpassword1', '0300-1234567', 50),
('Fatima Noor', 'fatima.noor@gmail.com', 'custpassword2', '0311-2345678', 20),
('Hamza Tariq', 'hamza.tariq@gmail.com', 'custpassword3', '0322-3456789', 100),
('Ayesha Ahsan', 'ayesha.ahsan@gmail.com', 'custpassword4', '0333-4567890', 70),
('Hassan Abbas', 'hassan.abbas@gmail.com', 'custpassword5', '0344-5678901', 40),
('Saad Malik', 'saad.malik@gmail.com', 'custpassword6', '0301-6789012', 30),
('Zara Sheikh', 'zara.sheikh@gmail.com', 'custpassword7', '0321-7890123', 90),
('Farhan Zafar', 'farhan.zafar@gmail.com', 'custpassword8', '0332-8901234', 60),
('Alina Hashmi', 'alina.hashmi@gmail.com', 'custpassword9', '0345-9012345', 80),
('Yasir Iqbal', 'yasir.iqbal@gmail.com', 'custpassword10', '0302-0123456', 25);

-- Insert data into `loyaltyprogram` table
INSERT INTO `foodBuddy`.`loyaltyprogram` (`customer_id`, `points_earned`, `reward_claimed`, `reward_description`) VALUES
(1, 50, 1, 'Free dessert'),
(2, 20, 0, '5% discount'),
(3, 100, 1, 'Free meal'),
(4, 70, 0, '10% discount'),
(5, 40, 1, 'Free appetizer'),
(6, 30, 0, '5% discount'),
(7, 90, 1, 'Free drink'),
(8, 60, 0, '5% discount'),
(9, 80, 1, 'Free dessert'),
(10, 25, 0, '5% discount');

-- Insert data into `menu` table
INSERT INTO `foodBuddy`.`menu` (`restaurant_id`, `item_name`, `description`, `price`, `availability`) VALUES
(1, 'Biryani', 'Spicy rice with chicken', 300.00, 1),
(1, 'Chicken Karahi', 'Traditional chicken curry', 500.00, 1),
(2, 'Nihari', 'Slow-cooked beef stew', 400.00, 1),
(3, 'Chapli Kebab', 'Minced meat patty', 250.00, 1),
(4, 'Pulao', 'Rice with meat and spices', 350.00, 1),
(5, 'Seekh Kabab', 'Grilled minced meat skewers', 200.00, 1),
(6, 'Fried Fish', 'Deep-fried fish', 450.00, 1),
(7, 'Shami Kebab', 'Spiced meat patty', 150.00, 1),
(8, 'Grilled Chicken', 'Marinated grilled chicken', 300.00, 1),
(9, 'Mutton Karahi', 'Spicy mutton curry', 700.00, 1),
(10, 'Tandoori Naan', 'Baked flatbread', 30.00, 1);
 
-- (Additional inserts for other tables like `restauranttable`, `reservation`, `notification`, etc., can follow similarly based on the table structure and required sample data)

-- Insert data into `restauranttable` table
INSERT INTO `foodBuddy`.`restauranttable` (`restaurant_id`, `table_number`, `seating_capacity`, `is_available`) VALUES
(1, 1, 4, 1),
(1, 2, 2, 1),
(2, 1, 6, 1),
(2, 2, 4, 0),
(3, 1, 8, 1),
(3, 2, 4, 1),
(4, 1, 2, 1),
(5, 1, 4, 0),
(6, 1, 6, 1),
(7, 1, 4, 1);


-- Insert data into `reservation` table
INSERT INTO `foodBuddy`.`reservation` (`customer_id`, `restauranttable_id`, `reservation_time`, `reservation_date`, `status`) VALUES
(1, 1, '18:00', '2024-11-20', 'Confirmed'),
(2, 3, '19:00', '2024-11-20', 'Pending'),
(3, 5, '12:00', '2024-11-21', 'Cancelled'),
(4, 7, '20:00', '2024-11-21', 'Confirmed'),
(5, 2, '13:00', '2024-11-22', 'Confirmed'),
(6, 4, '18:30', '2024-11-22', 'Pending'),
(7, 6, '19:30', '2024-11-22', 'Confirmed'),
(8, 8, '17:00', '2024-11-23', 'Cancelled'),
(9, 9, '14:00', '2024-11-23', 'Confirmed'),
(10, 10, '20:30', '2024-11-23', 'Pending');


-- Insert data into `notification` table
INSERT INTO `foodBuddy`.`notification` (`customer_id`, `message`, `is_read`, `sent_date`) VALUES
(1, 'Your reservation at Karachi Darbar is confirmed!', 0, '2024-11-19'),
(2, 'Reservation pending at Lahore Tikka House', 0, '2024-11-19'),
(3, 'Your reservation has been cancelled', 1, '2024-11-18'),
(4, 'Table reserved at Peshawar Delight', 1, '2024-11-19'),
(5, 'Reservation confirmed at Multan Foods', 0, '2024-11-19'),
(6, 'Your table reservation is pending confirmation', 0, '2024-11-18'),
(7, 'Reservation successful at Faisalabad Feast', 1, '2024-11-17'),
(8, 'Reservation cancelled at Hyderabad House', 1, '2024-11-18'),
(9, 'Table confirmed at Quetta Grill', 0, '2024-11-19'),
(10, 'Reservation pending at Gujranwala Dine', 0, '2024-11-19');


-- Insert data into `payment` table
INSERT INTO `foodBuddy`.`payment` (`reservation_id`, `amount`, `payment_status`) VALUES
(1, 45.00, 'completed'),
(2, 30.00, 'pending'),
(3, 50.50, 'failed'),
(4, 60.00, 'completed'),
(5, 25.75, 'completed'),
(6, 40.00, 'pending'),
(7, 75.00, 'completed'),
(8, 20.00, 'failed'),
(9, 55.00, 'completed'),
(10, 35.00, 'pending');


-- Insert data into `preferences` table
INSERT INTO `foodBuddy`.`preferences` (`customer_id`, `favorite_restaurant_id`, `preferred_seating_area`) VALUES
(1, 2, 'Window Side'),
(2, 3, 'Patio'),
(3, 4, 'Quiet Zone'),
(4, 1, 'Near Entrance'),
(5, 5, 'Corner Booth'),
(6, 6, 'Near Window'),
(7, 7, 'Patio'),
(8, 8, 'Center Area'),
(9, 9, 'Near Bar'),
(10, 10, 'Outdoor');


-- Insert data into `review` table
INSERT INTO `foodBuddy`.`review` (`customer_id`, `restaurant_id`, `rating`, `comment`) VALUES
(1, 1, 5, 'Amazing food and great ambiance.'),
(2, 2, 4, 'Good service, but a bit pricey.'),
(3, 3, 3, 'Average experience, could improve on cleanliness.'),
(4, 4, 5, 'Wonderful atmosphere and delicious meals!'),
(5, 5, 2, 'Food was cold and service was slow.'),
(6, 6, 4, 'Great place for family dinner.'),
(7, 7, 5, 'Highly recommended for their variety of dishes.'),
(8, 8, 3, 'Decent place, but noisy during peak hours.'),
(9, 9, 4, 'Good value for money.'),
(10, 10, 2, 'Not satisfied with the food quality.');

