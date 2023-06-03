import './masonry.css'

interface Item {
  item: any
}

const MasonryItem: React.FC<Item> = ({ item }) => {

  function asignarValor(id: number) {
    if (id % 5 === 0) return 'wide';
    if (id % 2 === 0) return 'big';
    return 'small';
  }

  const className = asignarValor(item?.id)
  return (
    <div className={className}>
    <img
      src={item?.src.original}
      alt="blog post one"
    />
  </div>
  )
}

export default MasonryItem