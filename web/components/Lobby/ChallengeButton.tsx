type Props = {
   onClick: () => void;
};

export const ChallengeButton = (props: Props) => {
   return (
      <button
         onClick={props.onClick}
         className="bg-gray-900 text-xs text-white px-4 py-1 rounded"
      >
         Challenge
      </button>
   );
};
