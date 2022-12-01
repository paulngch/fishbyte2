export default function Fav({ favArray, setFavArray }) {
  console.log(favArray);
  let favList = favArray.map((ele, index) => (
    // <tr key={`${ele.date}T${ele.hour}`}>
    <tr key={index}>
      <td>{ele.date}</td>
      <td>{ele.hour}</td>
      <td>{ele.score}</td>
      <td>
        <button
          onClick={(e) => handleDelete(index, e)}
          value={`${ele.date}T${ele.hour}`}
        >
          x
        </button>
      </td>
    </tr>
  ));

  const handleDelete = ( index, e ) => {
    setFavArray(favArray.filter((ele, i )=> i !== index))
 }

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
              Remove
            </th>
          </tr>
        </thead>
        <tbody>{favList}</tbody>
      </table>
    </div>
  );
}
