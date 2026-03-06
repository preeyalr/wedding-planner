function BudgetChart() {

  const expenses = [

    { item: "Venue", cost: 200000 },
    { item: "Decoration", cost: 80000 },
    { item: "Photography", cost: 50000 },
    { item: "Food", cost: 120000 }

  ]

  const total = expenses.reduce((sum, e) => sum + e.cost, 0)

  return (

    <div className="bg-white shadow rounded p-6">

      <h2 className="font-heading text-2xl mb-4">
        Wedding Budget
      </h2>

      <div className="space-y-3 font-body">

        {expenses.map((e, index) => (

          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >

            <span>{e.item}</span>

            <span>₹{e.cost}</span>

          </div>

        ))}

      </div>

      <div className="mt-4 font-heading text-xl">

        Total: ₹{total}

      </div>

    </div>

  )

}

export default BudgetChart