import { ChallengeButton } from "./ChallengeButton";

type Props = {
   playerName: string;
};

export const PlayerListItem = (props: Props) => {
   const challengePlayer = () => {
      console.log("challenging " + props.playerName + "...");
   };

   return (
      <div className="flex items-center justify-between w-96">
         <span>{props.playerName}</span>
         <ChallengeButton onClick={challengePlayer} />
      </div>
   );
};
