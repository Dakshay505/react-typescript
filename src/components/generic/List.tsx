type Props<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {id:number,name:string} >({ items, onClick }: Props<T>) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => onClick(item)}
            >
            {item.id} {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
