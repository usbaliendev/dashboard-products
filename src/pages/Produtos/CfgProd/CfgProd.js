import React from "react";
import { Link } from "react-router-dom";

const CfgProd = () => {
	return (
		<div>
			<h2 className="page-header">Configurações Produtos</h2>
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Sistema</h3>
						</div>
						<div className="card__body">
							<Link to="/">Usuario</Link>
							<br />
							<Link to="/">Alterar/Editar</Link>
							<br />
							<Link to="/">Status da Loja</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Lojas</h3>
						</div>
						<div className="card__body">
							<Link to="/">Adicionar/Remover</Link>
							<br />
							<Link to="/">Alterar/Editar</Link>
							<br />
							<Link to="/">Status da Loja</Link>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>Usuários</h3>
						</div>
						<div className="card__body">
							<Link to="/">Configurações de Usuário</Link>
							<Link to="/">Gerenciamento</Link>
							<Link to="/">Permissões Hierárquicas</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CfgProd;
