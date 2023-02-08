import { RiMovie2Line } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { pb } from "../../Pocketbase.config";
import { Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export const User = () => {
	const { data, error, isLoading } = useUser();

	const nav = useNavigate()

	function handleLogout() {
		pb.authStore.clear()
		nav("/")
	}

	if (!pb.authStore.isValid) return <Navigate to={"/auth"} />;
	if (error ) return <h1>ERROR</h1>;
	if (isLoading) return <h1>Loading...</h1>;

	if (data) {
		return (
			<div>
				<div className="user-header grid">
					<img
						src={data.avatarURL}
						height="80"
						width="80"
						alt="user icon"
					/>
					<hgroup>
						<h3>{data.username}</h3>
						<p>This is my stupid profile, hope you like it!</p>
						<h6>
							Watch List: <mark>23</mark>{" "}
						</h6>
						<button
							onClick={handleLogout}
							className="secondary"
							style={{ marginTop: "1em" }}>
							LOG OUT
						</button>
					</hgroup>
				</div>

				<hr />

				<div className="watchlist">
					<h1>
						{" "}
						<RiMovie2Line /> Watchlist
					</h1>

					<div className="watchlist__grid">
						<div>
							<article>
								<header>
									<b>Name</b>
								</header>
								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>
								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						<div>
							<article>
								<header>
									<b>Name</b>
								</header>

								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>

								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						<div>
							<article>
								<header>
									<b>Name</b>
								</header>

								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>

								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						<div>
							<article>
								<header>
									<b>Name</b>
								</header>

								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>

								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						<div>
							<article>
								<header>
									<b>Name</b>
								</header>

								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>

								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						<div>
							<article>
								<header>
									<b>Name</b>
								</header>

								<div className="grid">
									<img
										src="https://picsum.photos/300"
										alt=""
									/>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Numquam, labore.
									</p>
								</div>

								<footer>
									<button>
										Checkout <IoIosArrowDropright />
									</button>
								</footer>
							</article>
						</div>

						
					</div>
				</div>
			</div>
		);
	}
};
