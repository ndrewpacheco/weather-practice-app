import Card from "./Card";

function Stack() {
  function loopCards() {
    let loop = [];
    for (let i = 0; i <= 4; i += 1) {
      loop.push(
        <li key={i}>
          <Card day={i} />
        </li>
      );
    }
    return loop;
  }
  return <ul className='stack'>{loopCards()}</ul>;
}

export default Stack;
