import { PlayerListItem } from "./PlayerListItem";

export const PlayerList = () => {
   const mockPlayers = ["NelsonTran21", "shmemcat"];

   return (
      <div className="flex flex-col items-center w-full gap-1">
         {mockPlayers.map((player) => (
            <PlayerListItem key={player} playerName={player} />
         ))}
      </div>
   );
};
