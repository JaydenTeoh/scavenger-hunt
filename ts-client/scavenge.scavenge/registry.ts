import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCommitSolution } from "./types/scavenge/scavenge/tx";
import { MsgRevealSolution } from "./types/scavenge/scavenge/tx";
import { MsgSubmitScavenge } from "./types/scavenge/scavenge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/scavenge.scavenge.MsgCommitSolution", MsgCommitSolution],
    ["/scavenge.scavenge.MsgRevealSolution", MsgRevealSolution],
    ["/scavenge.scavenge.MsgSubmitScavenge", MsgSubmitScavenge],
    
];

export { msgTypes }