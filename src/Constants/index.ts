export const icons = {
	facebook: "/static/icons/facebook.svg",
	instagram: "/assets/icons/instagram.svg",
	twitter: "/assets/icons/twitter.svg",
	shieldTick: "/assets/icons/shieldTick.svg",
	truckFast: "/assets/icons/truckFast.svg",
	support: "/assets/icons/support.svg",
};

export const images = {
	bigShoe1: "/static/images/big-shoe1.png",
	bigShoe2: "/static/images/big-shoe2.png",
	bigShoe3: "/static/images/big-shoe3.png",
	shoe4: "/static/images/shoe4.svg",
	shoe5: "/static/images/shoe5.svg",
	shoe6: "/static/images/shoe6.svg",
	shoe7: "/static/images/shoe7.svg",
	customer1: "/static/images/customer1.jpeg",
	customer2: "/static/images/customer2.svg",
	thumbnailShoe1: "/static/images/thumbnail-shoe1.svg",
	thumbnailShoe2: "/static/images/thumbnail-shoe2.svg",
	thumbnailShoe3: "/static/images/thumbnail-shoe3.svg",
};

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
	{ thumbnail: images.thumbnailShoe1, bigShoe: images.bigShoe1 },
	{ thumbnail: images.thumbnailShoe2, bigShoe: images.bigShoe2 },
	{ thumbnail: images.thumbnailShoe3, bigShoe: images.bigShoe3 },
];

export const statistics = [
	{ value: '1k+', label: 'Brands' },
	{ value: '500+', label: 'Shops' },
	{ value: '250k+', label: 'Customers' },
];

export const products = [
	{ imgURL: images.shoe4, name: "Nike Air Jordan-01", price: "$200.20" },
	{ imgURL: images.shoe5, name: "Nike Air Jordan-10", price: "$210.20" },
	{ imgURL: images.shoe6, name: "Nike Air Jordan-100", price: "$220.20" },
	{ imgURL: images.shoe7, name: "Nike Air Jordan-001", price: "$230.20" },
];

export const services = [
	{ imgURL: icons.truckFast, label: "Free shipping", subtext: "Enjoy seamless shopping with our complimentary shipping service." },
	{ imgURL: icons.shieldTick, label: "Secure Payment", subtext: "Experience worry-free transactions with our secure payment options." },
	{ imgURL: icons.support, label: "Love to help you", subtext: "Our dedicated team is here to assist you every step of the way." },
];

export const reviews = [
	{
		imgURL: images.customer1,
		customerName: 'Morich Brown',
		rating: 4.5,
		feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
	},
	{
		imgURL: images.customer2,
		customerName: 'Lota Mongeskar',
		rating: 4.5,
		feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
	}
];

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Air Force 1", link: "/" },
			{ name: "Air Max 1", link: "/" },
			{ name: "Air Jordan 1", link: "/" },
			{ name: "Air Force 2", link: "/" },
			{ name: "Nike Waffle Racer", link: "/" },
			{ name: "Nike Cortez", link: "/" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/" },
			{ name: "FAQs", link: "/" },
			{ name: "How it works", link: "/" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "customer@nike.com", link: "mailto:customer@nike.com" },
			{ name: "+92554862354", link: "tel:+92554862354" },
		],
	},
];

export const socialMedia = [
	{ src: icons.facebook, alt: "facebook logo" },
	{ src: icons.twitter, alt: "twitter logo" },
	{ src: icons.instagram, alt: "instagram logo" },
];
