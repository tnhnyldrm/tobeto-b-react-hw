import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/cartSlice";

type Props = {};

const Navbar = (props: Props) => {
	const authContext: any = useContext(AuthContext);

	//onst cartState = useSelector((state: any) => state.cart);
	//console.log(cartState);

	const count = useSelector(selectCart);
	console.log(count);


	return (
		<nav
			className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
			data-bs-theme="dark"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={"/"}>
								Ana Sayfa
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/add-product"}>
								Ürün Ekle
							</Link>
						</li>
						<li className="nav-item" >
							<Link className="nav-link" to={"/"}>
								Sepet:{count.cartItems.length}
							</Link>

						</li>
						{!authContext.isAuthenticated && (
							<li className="nav-item">
								<Link className="nav-link" to={"/login"}>
									Giriş Yap
								</Link>
							</li>
						)}
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
