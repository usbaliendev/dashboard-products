import React from "react";
import { Link } from "react-router-dom";

const Acogue = () => {
	return (
		<div>
			<h2 className="page-header">Açogue</h2>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>Produtos</h3>
						</div>
						<div className="card__body">
							<div className="row">
								1 - Pescoço, 2 - Acém, 3 - Peito e peito com osso, 4 - Paleta ou
								miolo de paleta, 5 - Fraldinha, 6 - Ponta de agulha, 7 - Filé
								mignon, 8 - Filé de Costela, 9 - Contra filé, 10 - Alcatra
							</div>
						</div>
						<div className="card__footer">
							<Link to="/">ver tudo</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Tabela de preços</h3>
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
							<h3>Paineis/Telas</h3>
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
			</div>
		</div>
	);
};

export default Acogue;
