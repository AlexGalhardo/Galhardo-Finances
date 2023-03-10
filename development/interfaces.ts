interface ITransaction {
	id: string;
	created_at: string;
	updated_at: Date;
	type: TransactionType,
	category: DepositCategory,
	description: string,
	total: number
}

enum TransactionType {
	DEPOSIT,
	EXPENSE,
	INVESTMENT
}

enum DepositCategory {
	SALARY,
	FREELANCER,
	INVESTMENT_PROFIT
}