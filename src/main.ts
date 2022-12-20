// import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'
import { newDeposit } from './new-deposit'
import { allTransactions } from './allTransactions'

document.querySelector<HTMLDivElement>('#navbar')!.innerHTML = `
  <div class="fixed-top shadow bg-dark mb-5">
		<nav class="container pt-2 pb-2 col-lg-12 navbar navbar-expand-lg fixed navbar-dark bg-dark text-white">
			<div class="container-fluid">
				<h1><a class="navbar-brand fw-bold" href="#">Galhardo Finances</a></h1>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#modalDepositar">Depositar</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-danger" type="submit" data-bs-toggle="modal" data-bs-target="#modalSacar">Sacar</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-primary" type="submit" data-bs-toggle="modal" data-bs-target="#modalInvestir">Investir</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
`

document.querySelector<HTMLDivElement>('#modais')!.innerHTML = `
    <!-- Modal Depositar -->
	<div class="modal fade" id="modalDepositar" tabindex="-1" aria-labelledby="modalDepositarLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-success" id="modalDepositarLabel"><i class="bi bi-cash"></i> Deposit Money</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="" action="#">
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Total to deposit</label>
							<input type="number" class="form-control" id="total_to_deposit" placeholder="R$ 10.00" min="100" required value="">
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="deposit_description" placeholder="Exemplo: Freelancer do Primo" required value="">
						</div>

						<label>Category:</label>
						<select class="form-select" name="deposit_category_selected" id="deposit_category">
							<option value="WAGE" selected>Wage</option>
							<option value="FREELANCER">Freelancer</option>
							<option value="INVESTMENT_PROFIT">Investment Profit</option>
						</select>

						<br>
						<button class="btn btn-success" id="confirm_deposit" type="button">Confirm Deposit</button>
					</form>
				</div>
			</div>
		</div>
	</div>



	<!-- Modal SACAR -->
	<div class="modal fade" id="modalSacar" tabindex="-1" aria-labelledby="modalSacarLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-danger" id="modalSacarLabel"><i class="bi bi-cash-stack"></i>
						Sacar</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="" action="">
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Total a sacar</label>
							<input type="number" class="form-control" id="number_to_deposit" placeholder="R$ 10.00">
						</div>
	
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Descrição do saque</label>
							<input type="number" class="form-control" id="number_to_deposit"
								placeholder="Exemplo: Almoço Pizza Dominós" required>
						</div>
	
						<label>Categoria:</label>
						<select class="form-select">
							<option value="salario" selected>Alimentação</option>
							<option value="freelancer">Assinaturas</option>
							<option value="outros">Compras Físicas</option>
							<option value="outros">Lazer e Hobbies</option>
							<option value="outros">Transporte</option>
							<option value="outros">Outros</option>
						</select>
	
						<br>
						<button type="submit" class="btn btn-danger">Confirmar Saque</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal INVESTIR -->
	<div class="modal fade" id="modalInvestir" tabindex="-1" aria-labelledby="modalInvestirLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-primary" id="modalInvestirLabel"><i class="bi bi-bar-chart"></i>
						Investir</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="" action="">
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Total a investir</label>
							<input type="number" class="form-control" id="number_to_deposit" placeholder="R$ 10.00">
						</div>
	
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Descrição do investimento</label>
							<input type="number" class="form-control" id="number_to_deposit"
								placeholder="Exemplo: Tesouro SELIC Prefixado Outubro 2023" required>
						</div>
	
						<label>Categoria:</label>
						<select class="form-select">
							<option value="salario" selected>Renda Fixa</option>
							<option value="freelancer">Renda Variável</option>
							<option value="outros">Criptomoedas</option>
						</select>
	
						<br>
						<button type="submit" class="btn btn-primary">Confirmar Investimento</button>
					</form>
				</div>
			</div>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#BALANCE')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-success"><i class="bi bi-cash"></i> Saldo Atual</h4>
			<h5 class="fw-bold text-success">R$ 17.562,30</h5>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#EXPENSES')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Despesas </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ 2.263,40</p>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr class="bg-info">
						<th scope="col">Categoria</th>
						<th scope="col">Total</th>
						<th scope="col">Porcentagem</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Alimentação</th>
						<td>R$ 567,90</td>
						<td>16.5%</td>
					</tr>
					<tr>
						<th>Assinaturas</th>
						<td>R$ 320,00</td>
						<td>26.5%</td>
					</tr>
					<tr>
						<th>Compras Físicas</th>
						<td>R$ 890,00</td>
						<td>36.5%</td>
					</tr>
					<tr>
						<th>Lazer e Hobbies</th>
						<td>R$ 390,00</td>
						<td>20.5%</td>
					</tr>
					<tr>
						<th>Transporte</th>
						<td>R$ 90,00</td>
						<td>6.5%</td>
					</tr>
					<tr>
						<th>Outros</th>
						<td>R$ 500,00</td>
						<td>10 %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#INVESTMENTS')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investimentos </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ 10.000,00</span>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr class="bg-info">
						<th scope="col">Categoria</th>
						<th scope="col">Total</th>
						<th scope="col">Porcentagem</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Renda Fixa</th>
						<td>R$ 7.500,00</td>
						<td>75 %</td>
					</tr>
					<tr>
						<th>Renda Variável</th>
						<td>R$ 2.000,00</td>
						<td>20 %</td>
					</tr>
					<tr>
						<th>Criptomoedas</th>
						<td>R$ 500,00</td>
						<td>5 %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#FILTER')!.innerHTML = `
	<h3 class="mb-3">Filtrar Transação</h3>
					
	<form class="mb-5 d-flex justify-content-between" action="" method="">
		<div class="col-lg-3">
			<label>Categoria:</label>
			<select class="form-select">
				<option value="todos" selected>Todos</option>
				<option value="2">Alimentação</option>
				<option value="2">Roupas</option>
				<option value="3">Investimentos</option>
			</select>
		</div>
		
		<div class="col-lg-3">
			<label>Data Inicial:</label>
			<input class="form-control" type="date" id="data_inicial" name="data_inicial">
		</div>

		<div class="col-lg-3">
			<label>Data Final:</label>
			<input class="form-control" type="date" id="data_final" name="data_final">
		</div>

		<button type="submit" class="btn btn-primary mb-3">Buscar</button>

	</form>
`

document.querySelector<HTMLDivElement>('#EXPORT')!.innerHTML = `
	<div class="d-flex justify-content-between mb-3">
		<h3>Exportar Dados</h3>
		<button type="submit" class="btn btn-warning mb-3">Exportar JSON</button>
		<button type="submit" class="btn btn-warning mb-3">Exportar EXCEL</button>
		<button type="submit" class="btn btn-warning mb-3">Exportar CSV</button>
	</div>
`

document.querySelector<HTMLDivElement>('#TRANSACTIONS')!.innerHTML = `
	<h3>Transações</h3>

	<ul class="list-group list-group-item-action" id="ul_transactions">
		${allTransactions}
	</ul>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

newDeposit(document.querySelector<HTMLButtonElement>('#confirm_deposit')!,
		   document.querySelector<HTMLInputElement>('#total_to_deposit')!,
		   document.querySelector<HTMLInputElement>('#deposit_description')!,
		   document.querySelector<HTMLSelectElement>('#deposit_category')!)


/*document.querySelector<HTMLDivElement>('#app_old')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`*/