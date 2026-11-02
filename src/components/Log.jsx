import { formatter } from "../util/investment"
export default function Log ({outcome}) {
return (
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                 <th>Interest</th>
                  <th>Value End Of Year</th>
                   <th>Annual Investment</th>
            </tr>
        </thead>
        <tbody>
            {outcome.map((yearData) => (
                <tr key={yearData.year}>
                    <td data-label="Year">{yearData.year}</td>
<td data-label="Interest">{formatter.format(yearData.interest)}</td>
<td data-label="Value end of year">
  {formatter.format(yearData.valueEndOfYear)}
</td>
<td data-label="Annual investment">
  {formatter.format(yearData.annualInvestment)}
</td>
                </tr>
            ))}
        </tbody>
    </table>
)
}