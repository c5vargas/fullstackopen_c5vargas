import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function Course({course}) {
	const getTotal = course.parts.reduce((acc, el) => acc + el.exercises, 0);

	return (
    <main>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={getTotal} />
    </main>
	)
}

export default Course