const HorizontalScrollCard = ({children}) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex gap-x-4">
      {children}
      </div>
    </div>
  );
};
export default HorizontalScrollCard;
