create table product(
product_id serial PRIMARY KEY,
name varchar(100) not null,
price DECIMAL not null,
image_url text not null
)

-- selecting all of stuff
select * from product



-- adding new stuff need to edit
insert into product (name, price, image_url)
values
('rick', 10000,'https://nyoobserver.files.wordpress.com/2019/07/rick-and-morty-season-4-trailer-1.jpg?quality=80')