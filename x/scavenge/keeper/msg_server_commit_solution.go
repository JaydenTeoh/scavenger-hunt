package keeper

import (
	"context"

	"scavenge/x/scavenge/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// Check that commit with a given hash doesn't exist in the store
// Write a new commit to the store

func (k msgServer) CommitSolution(goCtx context.Context, msg *types.MsgCommitSolution) (*types.MsgCommitSolutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// create a new commit from the information in the MsgCommitSolution message
    commit := types.Commit{
		Index: msg.SolutionScavengerHash,
		SolutionHash: msg.SolutionHash,
		SolutionScavengerHash: msg.SolutionScavengerHash,
	}

	// try getting a commit from the store using the solution+scavenger hash as the key
    _, isFound := k.GetCommit(ctx, commit.SolutionScavengerHash)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Commit with that hash already exists")
	}

	// write commit to the store
    k.SetCommit(ctx, commit)

	return &types.MsgCommitSolutionResponse{}, nil
}
