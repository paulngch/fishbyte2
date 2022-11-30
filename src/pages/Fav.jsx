export default function Fav({ favArray }) {
  console.log(favArray);
  let favList = favArray.map((ele, index) => (
    <tr key={`${ele.date}T${ele.hour}`}>
      <td>{ele.date}</td>
      <td>{ele.hour}</td>
      <td>{ele.score}</td>
      <td>
        <button value={`${ele.date}T${ele.hour}`}>x</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="m-2 table-fixed w-[416px]">
        <caption className="text-2xl m-2 p-4">Days to Note:</caption>
        <thead>
          <tr className="">
            <th className="w-2/6">
              Date
              <br />
              (yyyy/mm/dd)
            </th>
            <th className="w-1/6">Hour</th>
            <th className="w-2/6">
              Score
              <br />
              (max 6)
            </th>
            <th className="w-1/6">
              Select
            </th>
          </tr>
        </thead>
        <tbody>{favList}</tbody>
      </table>
    </div>
  );
}
