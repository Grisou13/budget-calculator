type Taxes = {
    percentage: boolean,
    amount: number
}

export const applyTaxes = (taxes: [Taxes], total: number) => {
    return taxes.reduce((acc, cur) => {
        if (cur.percentage)
            acc += total * cur.amount
        else
            acc += cur.amount
        return acc
    }, 0);
}

export const getBalance = (income: number, expenses: number) => {
    return income - expenses;
}

export const getNetIncome = (income: [number], taxes: [Taxes]) => applyTaxes(taxes, getTotalFromRows(income))

export const getTotalWithoutTaxes = (income: [number], expenses: [number]) => getBalance( getTotalFromRows(income), getTotalFromRows(expenses))

export const getNetTotal = (income: [number], expenses: [number], taxes: [Taxes]) => applyTaxes(taxes, getTotalWithoutTaxes(income, expenses))

export const getTotalFromRows = (rows: [number]) => rows.reduce( (acc, cur) => acc + cur, 0.0 )