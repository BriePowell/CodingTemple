INSERT INTO customer(
	customer_id,
	first_name,
	last_name,
	address,
	phone_number
)VALUES(
	100,
	'Christopher',
	'Pike',
	'1966 Roddenberry Dr.',
	614-258-8152
);
INSERT INTO sales_person(
	employee_id,
	first_name,
	last_name,
	employee_id
)VALUES(
	112,
	'Diana',
	'Troy'
);

INSERT INTO service_ticket(
	service_id,
	vin_number,
	customer_id,
	mechanic_id,
	service_date,
	parts_name,
	price
	
)VALUES(
	1001,
	3857104,
	100,
	399,
	1,12,2021,
	'Oil Change',
	43.50,
);

INSERT INTO mechanic(
	mechanic_id,
	first_name
	last_name
)VALUES(
	12,
	'Geordie',
	'LaForge'
);

INSERT INTO invoice(
	invoice_id,
	customer_id,
	employee_id,
	lot_id,
) VALUES(
	4321,
	100,
	12,
	NULL
);

----------------------------------------------------------------

INSERT INTO customer(
	customer_id,
	first_name,
	last_name,
	address,
	phone_number
)VALUES(
	2233,
	'Nyota',
	'Uhura',
	'1968 Roddenberry Dr.',
	999-123-4567
);
INSERT INTO sales_person(
	employee_id,
	first_name,
	last_name,
	employee_id
)VALUES(
	989,
	'Miles',
	'OBrien'
);

INSERT INTO invoice(
	invoice_id,
	customer_id,
	employee_id,
	lot_id,
) VALUES(
	9876,
	2233,
	989,
	1333
);


INSERT INTO(
	lot_id,
	vin_number,
	make,
	model,
	year,
	car_price,
) VALUES(
	1333,
	1701,
	'Galaxy Class',
	'Enterprise',
	2400,
	30000
);

















