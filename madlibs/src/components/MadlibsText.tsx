// MadlibsText component. Takes in 4 string props and returns a string with the props added.

// Type declaration for the 4 strings
type Props = {
  noun1: string;
  noun2: string;
  adjective: string;
  color: string;
};

// Return component
const MadlibsText = ({ noun1, noun2, adjective, color }: Props) => {
  return (
    <div className="text-white">
      <span>{`There was a ${color} ${noun1} who loved a ${adjective} ${noun2}`}</span>
    </div>
  );
};
export default MadlibsText;
