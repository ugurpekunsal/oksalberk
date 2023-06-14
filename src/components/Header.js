import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
	titles = [];

	constructor() {
		super();
		this.state = { checked: false };
		this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
	}

	onThemeSwitchChange(checked) {
		this.setState({ checked });
		this.setTheme();
	}

	setTheme() {
		var dataThemeAttribute = "data-theme";
		var body = document.body;
		var newTheme =
			body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
		body.setAttribute(dataThemeAttribute, newTheme);
	}

	render() {
		if (this.props.sharedData) {
			var name = this.props.sharedData.name;
			this.titles = this.props.sharedData.titles
				.map((x) => [x.toUpperCase(), 1500])
				.flat();
		}

		const HeaderTitleTypeAnimation = React.memo(
			() => {
				return (
					<Typical className="title-styles" steps={this.titles} loop={50} />
				);
			},
			(props, prevProp) => true
		);

		return (
			<header
				id="home"
				style={{ height: window.innerHeight - 140, display: "block" }}
			>
				<div className="row aligner" style={{ height: "100%" }}>
					<div className="col-md-12">
						<div>
							<img
								height={150}
								src="..\..\images\portfolio\main-icon.png"
							></img>
							<br />
							<h1 className="mb-0 text-black">
								<Typical steps={[name]} wrapper="p" />
							</h1>
							<div className="title-container">
								<HeaderTitleTypeAnimation />
							</div>
							<Switch
								checked={this.state.checked}
								onChange={this.onThemeSwitchChange}
								offColor="#3F88A8"
								onColor="#353535"
								className="react-switch mx-auto"
								width={90}
								height={40}
								uncheckedIcon={
									<span
										className="iconify"
										data-inline="false"
										style={{
											display: "block",
											height: "100%",
											fontSize: 25,
											textAlign: "end",
											marginLeft: "10px",
											color: "#353239",
											color: "transparent",
											textShadow: "0 0 0 white",
										}}
									>
										&#127769;
									</span>
								}
								checkedIcon={
									<span
										className="iconify"
										data-inline="false"
										style={{
											display: "block",
											height: "100%",
											fontSize: 25,
											textAlign: "end",
											marginLeft: "5px",
											color: "#353239",
											color: "transparent",
											textShadow: "0 0 0 #fcd53f",
										}}
									>
										&#x2600;
									</span>
								}
								id="icon-switch"
							/>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
