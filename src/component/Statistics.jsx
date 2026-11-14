import { StatisticsItem } from "./StatisticsItem";
export function Statistics({title,data}) {
  return (
    <section>
      <h2>{title}</h2>

      <ul>{data.map((item)=>{
       return(<StatisticsItem key={item.id} {...item}/>)
      })}</ul>
    </section>
  );
}
