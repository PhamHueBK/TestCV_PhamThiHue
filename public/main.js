ReactDOM.render(
	<div>
		<div className="table-responsive table-design">
			<table className="table table-hover table-striped">
				<thead className="deMuc">
					<tr>
						<th colSpan="3">S&P/ASX</th>
						<th colSpan="2">TOP GAINERS</th>
						<th>TOP LOSERS</th>
					</tr>
				</thead>
				<tbody>
					<tr className="cotDeMuc">
						<td>Code</td>
						<td>Company</td>
						<td>Price</td>
						<td>Value</td>
						<td>Change</td>
						<td>%Change</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice"></td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td className="tenCode">CBA.AX</td>
						<td className="tenCongTy">COMMONWEALTH BANK OF AUSTRALIA.</td>
						<td className="tenPrice">80.72</td>
						<td className="tenValue">168,129,342</td>
						<td className="change">0.99</td>
						<td className="change2">1.24%</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>, document.getElementById("root"));
for (var i = 0; i < 14; i++){
	document.getElementsByClassName('tenPrice')[i].innerHTML = (Math.random() * (99.99 - 0.01) + 0.01).toString().slice(0, 5);
	document.getElementsByClassName('tenValue')[i].innerHTML = Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000000;

}
