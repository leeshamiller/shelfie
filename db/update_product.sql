update product
set name=$(name), price=$(price), img=$(img)
where id=$(id);
select * from product;