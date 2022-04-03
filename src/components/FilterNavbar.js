import React from "react";
import logoLight from "../assets/img/logo-light.svg";
import connectImg from "../assets/img/connect.svg";
import FilterBtn from "../components/FilterBtn";

// FILTER BUTTONS
import i1 from "../assets/img/mobileFilter/i1.svg";
import i2 from "../assets/img/mobileFilter/i2.svg";
import i3 from "../assets/img/mobileFilter/i3.svg";
import i4 from "../assets/img/mobileFilter/i4.svg";
import i5 from "../assets/img/mobileFilter/i5.svg";

const FilterNavbar = () => {
	var filterbtns = [
		{
			text: "Alle",
			picture: "Alle",
		},
		{
			text: "Gebruikersinteractie",
			picture: i1,
		},
		{
			text: "Organisatieprocessen",
			picture: i2,
		},
		{
			text: "Infrastructuur",
			picture: i3,
		},
		{
			text: "Software",
			picture: i4,
		},
		{
			text: "Hardware interfacing",
			picture: i5,
		},
	];

	return (
		<nav>
			<div className="logo">
				<a href="#">
					<img src={logoLight} alt="" />
				</a>
				<img className="connect-btn-desktop" src={connectImg} alt="" />
			</div>
			<div className="filter-container">
				<FilterBtn
					filterBtns={filterbtns}
					CustomClass="btn"
					screenSize="filters-desktop"
				/>
				<FilterBtn
					filterBtns={filterbtns}
					CustomClass="mobile-filter-btn"
					screenSize="filters-mobile"
				/>
				<a className="connect-btn" href="">
					<img src={connectImg} alt="" />
				</a>
			</div>
		</nav>
	);
};

export default FilterNavbar;
