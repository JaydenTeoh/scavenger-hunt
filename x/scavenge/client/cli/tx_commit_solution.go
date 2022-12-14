package cli

import (
	"crypto/sha256"
	"encoding/hex"
	"strconv"

	"scavenge/x/scavenge/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCommitSolution() *cobra.Command {
	cmd := &cobra.Command{
		// pass a solution as the only argument
        Use:   "commit-solution [solution]",
        Short: "Broadcast message commit-solution",
		// set the number of arguments to 1
        Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			solution := args[0]

			 // find a hash of the solution
			 solutionHash := sha256.Sum256([]byte(solution))

			 // convert the solution hash to string
			 solutionHashString := hex.EncodeToString(solutionHash[:])

			 // convert a scavenger address to string
			 var scavenger = clientCtx.GetFromAddress().String()

			 // find the hash of solution and scavenger address
            var solutionScavengerHash = sha256.Sum256([]byte(solution + scavenger))

            // convert the hash to string
            var solutionScavengerHashString = hex.EncodeToString(solutionScavengerHash[:])
 

			msg := types.NewMsgCommitSolution(
				clientCtx.GetFromAddress().String(), 
				solutionHashString, 
				solutionScavengerHashString)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
