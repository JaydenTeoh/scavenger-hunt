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

func CmdSubmitScavenge() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "submit-scavenge [solution] [description] [reward]",
		Short: "Broadcast message submit-scavenge",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			 // find a hash of the solution
			 solutionHash := sha256.Sum256([]byte(args[0]))

			 // convert the hash to string
			 solutionHashString := hex.EncodeToString(solutionHash[:])
			 argsDescription := string(args[1])
			 argsReward := string(args[2])


			msg := types.NewMsgSubmitScavenge(
				clientCtx.GetFromAddress().String(),
				solutionHashString,
				argsDescription,
				argsReward,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
