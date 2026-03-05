function BudgetChart() {

  const expenses = [
    { item: "Venue", cost: 200000 },
    { item: "Decor", cost: 80000 },
    { item: "Photography", cost: 50000 }
  ];

  return (
    <div>

      {expenses.map((e, i) => (
        <div key={i} className="flex justify-between border p-3 mb-2">
          <span>{e.item}</span>
          <span>₹{e.cost}</span>
        </div>
      ))}

    </div>
  );
}

export default BudgetChart;