create database practica_api;
use practica_api;

create table empleado(
	id int primary key auto_increment,
    nombre varchar(50),
    salario int
);


insert into empleado values 
(1,"Diego",5000),
(2,"Andre",2000),
(3,"Adriana",8000), 
(4,"Pedro",1500);

select * from empleado;
