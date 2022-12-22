// import { getTransactionCategoryIcon, transformToBRL } from "./getDashboardData";

import { getTransactionCategoryIcon, transformToBRL } from "./getDashboardData"

export function searchTransactions(buttonSearchTransactions: HTMLButtonElement,
							searchCategory: HTMLSelectElement,
							searchStartDate: HTMLSelectElement,
							searchFinalDate: HTMLSelectElement) {

	buttonSearchTransactions.addEventListener('click', (event: Event) => {
		event.preventDefault()

		alert(`CATEGORY => ${searchCategory.value}`)

		if(localStorage.getItem('finances_account')){
			let account = JSON.parse(localStorage.getItem('finances_account')!)

			account.transactions.reverse()

			if(!account.transactions) return 'No transactions available'

			let transactions = '';
			for(let i = 0; i < account.transactions.length; i++){

				let created_at = account.transactions[i].created_at.slice(0, 10)
				let dateFormated = `${created_at[3]}${created_at[4]}/${created_at[0]}${created_at[1]}/${created_at[6]}${created_at[7]}${created_at[8]}${created_at[9]}`
				let dateFormatedTimestamp = new Date(dateFormated).getTime()

				if(searchCategory.value === "ALL" ?
					true
					:
					account.transactions[i].category === searchCategory.value
					&&
					dateFormatedTimestamp >= new Date(searchStartDate.value).getTime()
					&&
					dateFormatedTimestamp <= new Date(searchFinalDate.value).getTime()){

					let colorType = account.transactions[i].type === "DEPOSIT" ?
									'text-success'
								: account.transactions[i].type === "EXPENSE" ?
									'text-danger'
								: 'text-primary';

					transactions += `
						<li class="list-group-item list-group-item-action d-flex justify-content-between">
							<div class="me-auto">
								<h5 class="fw-bold ${colorType}">${getTransactionCategoryIcon(account.transactions[i].category)}   ${account.transactions[i].description}</h5>
								<small>${account.transactions[i].created_at}</small>
							</div>
							<div class="ms-auto">
								<h5 class="fw-bold ${colorType}">+ R$ ${transformToBRL(account.transactions[i].total)}</h5>
									<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-pencil-square"></i> Editar</button>
									<button class="btn btn-sm btn-outline-danger" disabled><i class="bi bi-trash"></i> Excluir</button>
							</div>
						</li>
					`
				}
			}
			document.querySelector('#ul_transactions')!.innerHTML = transactions
		}
		else {
			document.querySelector('#ul_transactions')!.innerHTML = 'No transactions available for this search!'
		}
	}
)}