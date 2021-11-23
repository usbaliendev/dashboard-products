import React from "react";
import { Link } from "react-router-dom";

const Pizzas = () => {
	return (
		<div>
			<h2 className="page-header">Pizzas</h2>
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Categorias</h3>
						</div>
						<div className="card__body">
							Salgadas
							<br />
							Especiais
							<br />
							Doces
						</div>
						<div className="card__footer">
							<Link to="/">ver tudo</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Sabores</h3>
						</div>
						<div className="card__body">
							4 Queijos, Calabresa, Portuguesa, Marguerita, Frago Catupiry,
							Muçarela, Napolitana, Brigadeiro, Romeu & Julieta, California
							<br />
							...
						</div>
						<div className="card__footer">
							<Link to="/">ver tudo</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Ingredientes</h3>
						</div>
						<div className="card__body">
							sugar, egg yolks, corn starch, cream of tartar, bananas, vanilla
							wafers, vanilla extract, toasted pecans, file powder, smoked
							sausage, garlic cloves, white rice
							<br />
							...
						</div>
						<div className="card__footer">
							<Link to="/">ver tudo</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Totems</h3>
						</div>
						<div className="card__body">
							Veneza Guara I, Guara II, Riacho Fundo, Sobradinho
							<br />
							...
							<br />
							...
						</div>
						<div className="card__footer">
							<Link to="/">ver tudo</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pizzas;
