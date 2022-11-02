package keeper

// Check that a scavenge with a given solution hash doesn't exist
// Send tokens from the scavenge creator account to a module account
// Write the scavenge to the store

import (
	"context"

	"scavenge/x/scavenge/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) SubmitScavenge(goCtx context.Context, msg *types.MsgSubmitScavenge) (*types.MsgSubmitScavengeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// create a new scavenge from the data in the MsgSubmitScavenge message
	scavenge := types.Scavenge{
		Index: msg.SolutionHash,
		Scavenger: msg.Creator,
		Description: msg.Description,
		SolutionHash: msg.SolutionHash,
		Reward: msg.Reward,
	}

	// try getting a scavenge from the store using the solution hash as the key
	_, isFound := k.GetScavenge(ctx, scavenge.SolutionHash)

	// return an error if a scavenge already exists in the store
	if isFound{
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Scavenge with that solution hash already exists")
	}

	// get address of the Scavenge module account
	moduleAccount := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	// convert the message creator address from a string into sdk.AccAddress
	scavenger, err := sdk.AccAddressFromBech32(scavenge.Scavenger)
    if err != nil {
        panic(err)
    }

	// convert tokens from string into sdk.Coins
    reward, err := sdk.ParseCoinsNormalized(scavenge.Reward)
    if err != nil {
        panic(err)
    }

	// send tokens from the scavenge creator to the module account
	sdkError := k.bankKeeper.SendCoins(ctx, scavenger, moduleAccount, reward)
	if sdkError != nil {
        return nil, sdkError
    }

	// write the scavenge to the store
    k.SetScavenge(ctx, scavenge)

	return &types.MsgSubmitScavengeResponse{}, nil
}
